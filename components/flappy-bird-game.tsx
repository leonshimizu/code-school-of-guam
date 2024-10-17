// flappy-bird-game.tsx
'use client'

import React, { useRef, useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// Constants
const GRAVITY = 15   // Increased gravity
const JUMP = -450    // Increased jump force
const PIPE_WIDTH = 50
const PIPE_GAP = 250 // Decreased pipe gap
const PIPE_SPEED = 300 // Increased pipe speed
const PIPE_FADE_START = 100
const INITIAL_BIRD_X_POSITION = 50

interface Bird {
  x: number
  y: number
  velocity: number
}

interface Pipe {
  x: number
  top: number
  opacity?: number
  passed?: boolean
}

export default function FlappyBirdGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const birdRef = useRef<Bird | null>(null)
  const pipesRef = useRef<Pipe[]>([])
  const lastTimeRef = useRef<number>(0)
  const pipeSpawnTimerRef = useRef<number>(0)
  const animationFrameIdRef = useRef<number>(0)

  const [gameStarted, setGameStarted] = useState(false)
  const [gameOverTextVisible, setGameOverTextVisible] = useState(false)
  const [startTextVisible, setStartTextVisible] = useState(true)
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)

  // Ref to hold the latest value of gameStarted
  const gameStartedRef = useRef<boolean>(gameStarted)

  // Update the gameStartedRef whenever gameStarted changes
  useEffect(() => {
    gameStartedRef.current = gameStarted
  }, [gameStarted])

  // Reset the game to its initial state
  const resetGame = () => {
    const canvas = canvasRef.current
    if (canvas) {
      birdRef.current = { x: INITIAL_BIRD_X_POSITION, y: canvas.height / 2, velocity: 0 }
      pipesRef.current = []
      pipeSpawnTimerRef.current = 0
      setScore(0)
    }
  }

  // Start the game
  const startGame = () => {
    if (!gameStartedRef.current) {
      setGameStarted(true)
      gameStartedRef.current = true
      setStartTextVisible(false)
      resetGame()
      generatePipe()
      lastTimeRef.current = performance.now()
    }
    if (birdRef.current) {
      birdRef.current.velocity = JUMP
    }
  }

  // Handle click or touch events
  const handleClick = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault()
    startGame()
  }

  // Handle spacebar press
  const handleSpacebar = (e: KeyboardEvent) => {
    if (e.code === 'Space') {
      e.preventDefault() // Prevent the page from scrolling down
      startGame()
    }
  }

  // Generate a new pipe
  const generatePipe = () => {
    const canvas = canvasRef.current
    if (canvas) {
      const minHeight = 50
      const maxHeight = canvas.height - PIPE_GAP - minHeight
      const height = Math.random() * (maxHeight - minHeight) + minHeight
      pipesRef.current.push({ x: canvas.width, top: height, opacity: 1 })
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    // Dynamically adjust canvas size based on screen width (for mobile support)
    const resizeCanvas = () => {
      const canvasWidth = Math.min(window.innerWidth - 20, 400) // Responsive width
      const canvasHeight = canvasWidth * 1.5 // Maintain aspect ratio
      canvas.width = canvasWidth
      canvas.height = canvasHeight

      // Reset bird position
      if (birdRef.current) {
        birdRef.current.x = INITIAL_BIRD_X_POSITION
        birdRef.current.y = canvas.height / 2
      }
    }

    // Call resizeCanvas initially to set the right dimensions
    resizeCanvas()
    // Add event listener for resizing
    window.addEventListener('resize', resizeCanvas)
    // Add event listener for keydown
    window.addEventListener('keydown', handleSpacebar)

    // Start the game automatically on page load
    startGame()

    // Game loop
    const gameLoop = (time: number) => {
      const deltaTime = (time - lastTimeRef.current) / 1000 // Convert to seconds
      lastTimeRef.current = time

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      if (gameStartedRef.current) {
        updateGame(deltaTime)
        drawPipes(ctx)
        drawBird(ctx)
      } else {
        // Draw the bird at its starting position
        drawBird(ctx)
      }

      animationFrameIdRef.current = requestAnimationFrame(gameLoop)
    }

    animationFrameIdRef.current = requestAnimationFrame(gameLoop)

    return () => {
      // Cleanup
      cancelAnimationFrame(animationFrameIdRef.current)
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('keydown', handleSpacebar)
    }
  }, []) // Empty dependency array to run only once

  // Update the game state
  const updateGame = (deltaTime: number) => {
    const canvas = canvasRef.current
    if (canvas) {
      updateBird(canvas, deltaTime)
      updatePipes(canvas, deltaTime)

      // Generate pipes periodically based on time
      pipeSpawnTimerRef.current += deltaTime
      if (pipeSpawnTimerRef.current >= 1.5) { // Spawn a pipe every 1.5 seconds
        generatePipe()
        pipeSpawnTimerRef.current = 0
      }
    }
  }

  // Update the bird's position and velocity
  const updateBird = (canvas: HTMLCanvasElement, deltaTime: number) => {
    if (birdRef.current) {
      birdRef.current.velocity += GRAVITY * deltaTime * 100 // Multiply by 100 to scale gravity appropriately
      birdRef.current.y += birdRef.current.velocity * deltaTime

      // Bird collision with boundaries
      if (birdRef.current.y >= canvas.height - 20 || birdRef.current.y <= 0) {
        gameOver()
      }
    }
  }

  // Update the position of the pipes and check for collisions
  const updatePipes = (canvas: HTMLCanvasElement, deltaTime: number) => {
    pipesRef.current.forEach((pipe, index) => {
      pipe.x -= PIPE_SPEED * deltaTime

      // Check if the bird passed a pipe and update the score
      if (birdRef.current && pipe.x + PIPE_WIDTH < birdRef.current.x && !pipe.passed) {
        pipe.passed = true
        setScore((prevScore) => {
          const newScore = prevScore + 1

          // Increase difficulty every 5 points
          if (newScore % 5 === 0) {
            // Optionally increase pipe speed or decrease gap
            // PIPE_SPEED += 20
            // PIPE_GAP = Math.max(150, PIPE_GAP - 10)
          }

          return newScore
        })
      }

      // Check for collision with pipes
      if (
        birdRef.current &&
        pipe.x < birdRef.current.x + 20 &&
        pipe.x + PIPE_WIDTH > birdRef.current.x &&
        (birdRef.current.y < pipe.top || birdRef.current.y > pipe.top + PIPE_GAP)
      ) {
        gameOver()
      }

      // Remove pipes that are off the screen
      if (pipe.x + PIPE_WIDTH < 0) {
        pipesRef.current.splice(index, 1)
      }
    })
  }

  // Handle game over state
  const gameOver = () => {
    setGameStarted(false)
    gameStartedRef.current = false
    setGameOverTextVisible(true)
    if (score > highScore) {
      setHighScore(score)
    }
    setTimeout(() => setGameOverTextVisible(false), 2000) // Fade out after 2 seconds
    resetGame()
  }

  // Draw the bird on the canvas
  const drawBird = (ctx: CanvasRenderingContext2D) => {
    if (birdRef.current) {
      ctx.fillStyle = '#FFA500'
      ctx.beginPath()
      ctx.arc(birdRef.current.x, birdRef.current.y, 20, 0, 2 * Math.PI)
      ctx.fill()
    }
  }

  // Draw the pipes on the canvas
  const drawPipes = (ctx: CanvasRenderingContext2D) => {
    const canvas = canvasRef.current
    if (!canvas) return
    pipesRef.current.forEach((pipe) => {
      // Fade out pipe as it approaches the left side
      if (pipe.x < PIPE_FADE_START) {
        pipe.opacity = Math.max(0, pipe.x / PIPE_FADE_START) // Reduce opacity gradually
      }

      ctx.globalAlpha = pipe.opacity || 1 // Apply opacity
      ctx.fillStyle = '#4CAF50'

      // Draw top pipe
      ctx.fillRect(pipe.x, 0, PIPE_WIDTH, pipe.top)
      // Draw bottom pipe
      ctx.fillRect(
        pipe.x,
        pipe.top + PIPE_GAP,
        PIPE_WIDTH,
        canvas.height - pipe.top - PIPE_GAP
      )
      ctx.globalAlpha = 1 // Reset opacity after drawing
    })
  }

  return (
    <div className="relative">
      <Card className="w-full max-w-md mx-auto bg-gray-900 text-white">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Flappy Bird</CardTitle>
        </CardHeader>
        <CardContent>
          <canvas
            ref={canvasRef}
            className="border border-gray-700 rounded-md w-full"
            onClick={handleClick}
            onTouchStart={handleClick}
          />
          {startTextVisible && (
            <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-white animate-fadeIn">
              Tap or Press Space to Start
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
              onClick={startGame}
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
