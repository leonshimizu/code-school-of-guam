'use client'

import React, { useRef, useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// Constants
const GRAVITY = 0.15
const JUMP = -5
const PIPE_WIDTH = 50
const PIPE_GAP = 300
const PIPE_SPEED = 2
const PIPE_FADE_START = 100 // Start fading when pipes are 100px away from the left side
const INITIAL_BIRD_X_POSITION = 50 // Bird's initial x-position (starts in the middle)

interface Bird {
  x: number
  y: number
  velocity: number
}

interface Pipe {
  x: number
  top: number
  opacity?: number // Added opacity for fading
  passed?: boolean // Track if the pipe is passed for scoring
}

export default function FlappyBirdGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [gameStarted, setGameStarted] = useState(false)
  const [gameOverTextVisible, setGameOverTextVisible] = useState(false)
  const [startTextVisible, setStartTextVisible] = useState(true)
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)

  let currentPipeGap = PIPE_GAP // Dynamic gap between pipes
  let currentPipeSpeed = PIPE_SPEED // Dynamic speed of pipes

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    let animationFrameId: number
    let bird: Bird = { x: INITIAL_BIRD_X_POSITION, y: canvas.height / 2, velocity: 0 }
    let pipes: Pipe[] = []
    let frameCount = 0

    const resetGame = () => {
      bird = { x: INITIAL_BIRD_X_POSITION, y: canvas.height / 2, velocity: 0 }
      pipes = []
      currentPipeGap = PIPE_GAP // Reset gap to initial value
      currentPipeSpeed = PIPE_SPEED // Reset speed to initial value
      setScore(0)
    }

    const generatePipe = () => {
      const minHeight = 50
      const maxHeight = canvas.height - currentPipeGap - minHeight
      const height = Math.random() * (maxHeight - minHeight) + minHeight
      pipes.push({ x: canvas.width, top: height, opacity: 1 }) // Start with full opacity
    }

    const drawBird = () => {
      ctx.fillStyle = '#FFA500'
      ctx.beginPath()
      ctx.arc(bird.x, bird.y, 20, 0, 2 * Math.PI) // Bird's x-position is dynamic
      ctx.fill()
    }

    const drawPipes = () => {
      pipes.forEach((pipe) => {
        // Fade out pipe as it approaches the left side
        if (pipe.x < PIPE_FADE_START) {
          pipe.opacity = Math.max(0, pipe.x / PIPE_FADE_START) // Reduce opacity gradually
        }

        ctx.globalAlpha = pipe.opacity || 1 // Apply opacity
        ctx.fillStyle = '#4CAF50'
        
        // Draw top pipe
        ctx.fillRect(pipe.x, 0, PIPE_WIDTH, pipe.top)
        // Draw bottom pipe
        ctx.fillRect(pipe.x, pipe.top + currentPipeGap, PIPE_WIDTH, canvas.height - pipe.top - currentPipeGap)
        ctx.globalAlpha = 1 // Reset opacity after drawing
      })
    }

    const updateBird = () => {
      bird.velocity += GRAVITY
      bird.y += bird.velocity

      // Apply easing to the bird's movement
      if (bird.velocity > 0) {
        bird.velocity *= 0.98 // Slightly reduce velocity for smoother fall
      } else {
        bird.velocity *= 0.95 // Slightly reduce upward velocity for smoother jumps
      }

      // Bird collision with boundaries
      if (bird.y >= canvas.height - 20 || bird.y <= 0) {
        gameOver()
      }
    }

    const updatePipes = () => {
      pipes.forEach((pipe, index) => {
        pipe.x -= currentPipeSpeed

        // Check if the bird passed a pipe and update the score
        if (pipe.x + PIPE_WIDTH < bird.x && !pipe.passed) {
          pipe.passed = true
          setScore((prevScore) => {
            const newScore = prevScore + 1

            // Increase difficulty every 5 points
            if (newScore % 5 === 0) {
              currentPipeSpeed += 0.5 // Increase pipe speed
              currentPipeGap = Math.max(150, currentPipeGap - 10) // Decrease pipe gap but not below 150px
            }

            return newScore
          })
        }

        // Check for collision with pipes
        if (
          pipe.x < bird.x + 20 && // Bird width
          pipe.x + PIPE_WIDTH > bird.x &&
          (bird.y < pipe.top || bird.y > pipe.top + currentPipeGap)
        ) {
          gameOver()
        }

        // Remove pipes that are off the screen
        if (pipe.x + PIPE_WIDTH < 0) {
          pipes.splice(index, 1) // Ensure pipe removal happens independently
        }
      })
    }

    const updateGame = () => {
      updateBird()
      updatePipes()

      // Generate pipes periodically
      if (frameCount % 200 === 0) {
        generatePipe()
      }

      frameCount++
    }

    const gameOver = () => {
      setGameStarted(false)
      setGameOverTextVisible(true)
      if (score > highScore) {
        setHighScore(score)
      }
      setTimeout(() => setGameOverTextVisible(false), 2000) // Fade out after 2 seconds
      resetGame()
    }

    const gameLoop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      if (gameStarted) {
        // Update the game state
        updateGame()

        // Draw the game elements
        drawPipes()
        drawBird() // Make sure bird is drawn after pipes for better visibility
      }

      animationFrameId = requestAnimationFrame(gameLoop)
    }

    const handleClick = () => {
      if (!gameStarted) {
        setGameStarted(true)
        setStartTextVisible(false) // Hide start text
        resetGame()
        generatePipe()
      }
      bird.velocity = JUMP
    }

    const handleSpacebar = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault();  // Prevent the page from scrolling down
        handleClick();
      }
    }

    canvas.addEventListener('click', handleClick)
    window.addEventListener('keydown', handleSpacebar) // Listen for spacebar press
    gameLoop()

    return () => {
      cancelAnimationFrame(animationFrameId)
      canvas.removeEventListener('click', handleClick)
      window.removeEventListener('keydown', handleSpacebar) // Clean up the event listener
    }
  }, [gameStarted, score, highScore])

  return (
    <div className="relative">
      <Card className="w-full max-w-md mx-auto bg-gray-900 text-white">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Flappy Bird</CardTitle>
        </CardHeader>
        <CardContent>
          <canvas
            ref={canvasRef}
            width={400}
            height={600}
            className="border border-gray-700 rounded-md"
          />
          {startTextVisible && (
            <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-white animate-fadeIn">
              Click or Press Space to Start
            </div>
          )}
          {gameOverTextVisible && (
            <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-red-500 animate-fadeInOut">
              Game Over
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <div className="text-lg">Score: {score}</div>
          <div className="text-lg">High Score: {highScore}</div>
          {!gameStarted && (
            <Button 
              onClick={() => setGameStarted(true)}
              className="bg-orange-600 hover:bg-orange-700 text-white"
            >
              {score > 0 ? 'Restart' : 'Start'}
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}
