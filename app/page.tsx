'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ChevronRight, ChevronDown, Code, Menu, Rocket, BookOpen, Users, Briefcase, GraduationCap, HelpCircle, Mail, Phone, User, CheckCircle, Clock, Calendar, Star } from "lucide-react"
import Link from 'next/link'
import Image from 'next/image'

export default function LandingPage() {
  const [email, setEmail] = useState("")
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        if (section instanceof HTMLElement) {
          if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
            setActiveSection(section.id)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Submitted email:", email)
    setEmail("")
  }

  const navItems = [
    { href: "#about", label: "About Us" },
    { href: "#why-choose-us", label: "Why Choose Us" },
    { href: "#why-ruby-react", label: "Why Ruby & React" },
    { href: "#programs", label: "Programs & Pricing" },
    { href: "#curriculum", label: "Curriculum" },
    { href: "#timeline", label: "Timeline" },
    { href: "#internship", label: "Internship" },
    { href: "#career", label: "Career Services" },
    { href: "#admissions", label: "Admissions" },
    { href: "#founder", label: "About the Founder" },
    { href: "#faq", label: "FAQs" },
    { href: "#policies", label: "Policies" },
    { href: "#contact", label: "Contact Us" },
  ]

  const faqs = [
    {
      question: 'Do I need prior coding experience?',
      answer: 'No prior coding experience is required. Our program starts from the basics and builds up to advanced concepts.',
    },
    {
      question: 'Why do you teach Ruby on Rails instead of other programming languages?',
      answer: 'We have chosen Ruby on Rails because it\'s a powerful, beginner-friendly framework that allows for rapid development. It\'s used by many successful companies like Airbnb, GitHub, and Shopify. Our instructors have professional experience with Rails, ensuring high-quality teaching and real-world insights. Learning Rails provides a strong foundation, making it easier to pick up other languages in the future.',
    },
    {
      question: 'Do I need to have a Mac to join the program?',
      answer: 'While it\'s not mandatory to have a Mac, we highly recommend it. Using a Mac helps ensure uniformity in the classroom, simplifying setup processes and minimizing technical issues that can arise from different operating systems. This allows you to focus more on learning coding concepts rather than dealing with OS-specific challenges. If you don\'t have a Mac, you\'re still welcome to join, but please be aware that some steps and commands may differ slightly.',
    },
    {
      question: 'Are the classes held in-person or online?',
      answer: 'All our classes are conducted fully remotely via Zoom. This allows you to participate in live, interactive sessions from anywhere with a reliable internet connection. Our online format provides flexibility and convenience while maintaining a high level of engagement and support.',
    },
    {
      question: 'How does the internship work?',
      answer: 'The internship is an optional 2-month program where you work on real projects in an Agile environment. It enhances your resume and job readiness.',
    },
    {
      question: 'How long do I have access to the class recordings?',
      answer: 'You will have access to all class recordings and materials for one full year from your start date, supporting your continued learning journey.',
    },
    {
      question: 'Can I reach out for support after the program ends?',
      answer: 'We are here to support you even after your cohort concludes. Feel free to reach out with questions or for guidance.',
    },
    {
      question: 'Are there opportunities to become a teaching assistant?',
      answer: 'Yes! Outstanding graduates may be invited to become paid teaching assistants for future cohorts, providing leadership experience and reinforcing your own learning.',
    },
    {
      question: 'Why is the tuition set at $10,000?',
      answer: 'We strive to provide high-quality education with personalized attention through small class sizes and offer real-world experience via internships. Our tuition reflects the value and unique opportunities we provide, while remaining more affordable than many comparable programs.',
    },
    {
      question: 'Do you offer payment plans?',
      answer: 'Yes, we offer monthly installment plans during the course duration. We are also working on partnering with local banks for financing options.',
    },
    {
      question: 'What is the attendance policy?',
      answer: 'Attendance is crucial. Missing more than three unexcused classes may result in dismissal without a refund. Excused absences are considered for valid reasons.',
    },
    {
      question: 'Is there a refund policy?',
      answer: 'Yes. Full tuition (minus the non-refundable deposit) is refundable if you withdraw before the start of the second week. No refunds are issued from the second week onward.',
    },
    {
      question: 'How can I access the policies?',
      answer: 'You can view our detailed policies, including the Code of Conduct, Attendance Policy, and Refund Policy, in the Policies section of our website.',
    },
    {
      question: 'What resources do you recommend to get started with coding?',
      answer: 'We recommend exploring free coding platforms like freeCodeCamp or Replit to get familiar with coding concepts and practice in-browser before starting pre-work.',
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeIn 0.8s ease-out forwards;
        }
        .delay-1 { animation-delay: 0.2s; }
        .delay-2 { animation-delay: 0.4s; }
        .delay-3 { animation-delay: 0.6s; }
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
      <header className="sticky top-0 z-50 w-full bg-gray-900 text-white shadow-md">
        <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link className="flex items-center justify-center" href="#">
              <Code className="h-8 w-8 text-orange-500" />
              <span className="ml-2 text-xl font-bold">Code School of Guam</span>
            </Link>
            <nav className="hidden lg:flex space-x-2">
              {navItems.slice(0, 5).map((item, index) => (
                <Link 
                  key={index} 
                  className={`text-sm font-medium hover:text-orange-500 transition-colors duration-200 px-2 py-1 rounded-md ${activeSection === item.href.slice(1) ? 'text-orange-500 bg-gray-800' : ''}`} 
                  href={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="hidden lg:block relative group">
              <button className="text-sm font-medium hover:text-orange-500 transition-colors duration-200 px-2 py-1 rounded-md">
                More
                <ChevronDown className="inline-block ml-1 h-4 w-4" />
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-gray-900 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {navItems.slice(5).map((item, index) => (
                  <Link 
                    key={index} 
                    className="block px-4 py-2 text-sm text-white hover:bg-gray-800 hover:text-orange-500"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-gray-900 text-white">
                <nav className="flex flex-col gap-4">
                  {navItems.map((item, index) => (
                    <Link key={index} className="text-sm font-medium hover:text-orange-500 transition-colors duration-200" href={item.href}>
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative w-full py-20 md:py-32 lg:py-48 bg-gray-900 overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className={`flex flex-col items-center space-y-4 text-center ${isVisible ? 'fade-in' : ''}`}>
              <div className="space-y-2">
                <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white">
                  Launch Your Tech Career in Guam
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl/relaxed lg:text-2xl/relaxed">
                  Join our <span className="font-semibold text-orange-500">fully remote classes</span> from anywhere and transform your passion for technology into a powerful career.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSc84Vee53gbVhwamS77qvizzV8vGri4Ms83kIEzqgN6vg7wZA/viewform?vc=0&c=0&w=1&flr=0"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-orange-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-orange-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover-lift"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply Now!
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
                <p className="text-xs text-gray-400">
                  Begin your journey today. No prior experience required.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-100 to-transparent"></div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-gray-900">About the Code School of Guam</h2>
            <p className="text-lg text-gray-600 text-center mb-8">
              The Code School of Guam is the island's first coding bootcamp, offering world-class education in full-stack software development, focusing on Ruby on Rails for the backend and React.js for the frontend. Our <span className="font-semibold text-orange-500">fully remote classes</span> make high-quality coding education accessible to everyone, regardless of location.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="hover-lift bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 flex items-center text-gray-900">
                    <Rocket className="mr-2 h-5 w-5 text-orange-500" />
                    Our Mission
                  </h3>
                  <p className="text-gray-600">To provide high-quality, accessible coding education to the people of Guam and beyond, ensuring graduates are prepared to enter the job market as software engineers. We aim to empower individuals with the skills necessary to thrive in the rapidly growing tech industry.</p>
                </CardContent>
              </Card>
              <Card className="hover-lift bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 flex items-center text-gray-900">
                    <Users className="mr-2 h-5 w-5 text-orange-500" />
                    Our Vision
                  </h3>
                  <p className="text-gray-600">We envision transforming Guam into a tech hub by equipping local residents with the skills and real-world experience needed to succeed in the global software industry. By building a pipeline of tech talent, we aim to contribute to the island's economic growth and innovation.</p>
                
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="why-choose-us" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-white relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Why Choose Code School of Guam?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="hover-lift bg-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 flex items-center text-white">
                    <CheckCircle className="mr-2 h-5 w-5 text-orange-500" />
                    Fully Remote Classes
                  </h3>
                  <p className="text-gray-300">Learn from anywhere with our interactive online classes, designed for flexibility and accessibility.</p>
                </CardContent>
              </Card>
              <Card className="hover-lift bg-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 flex items-center text-white">
                    <Users className="mr-2 h-5 w-5 text-orange-500" />
                    Small Class Sizes
                  </h3>
                  <p className="text-gray-300">Enjoy personalized attention with our small classes of maximum 10 students per cohort.</p>
                </CardContent>
              </Card>
              <Card className="hover-lift bg-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 flex items-center text-white">
                    <Briefcase className="mr-2 h-5 w-5 text-orange-500" />
                    Internship Opportunities
                  </h3>
                  <p className="text-gray-300">Gain real-world experience through our optional internship program with local tech companies.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="why-ruby-react" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Why We Teach Ruby on Rails and React.js</h2>
            <p className="text-lg text-gray-600 text-center mb-8">
              At the Code School of Guam, we've thoughtfully chosen Ruby on Rails and React.js as the cornerstone of our curriculum. Here's why:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="hover-lift bg-white">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4 flex items-center text-gray-900">
                    <Code className="mr-2 h-5 w-5 text-orange-500" />
                    Ruby on Rails: A Powerful Back-End Framework
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Beginner-Friendly Syntax: Ruby is known for its clean and readable code, making it ideal for those new to programming.</li>
                    <li>Rapid Development: Rails allows for quick prototyping, so you can build applications faster and see results sooner.</li>
                    <li>Industry Adoption: Many successful companies like Airbnb, GitHub, and Shopify use Rails, keeping it relevant and in demand.</li>
                    <li>Strong Community Support: A vibrant community provides extensive resources, gems, and documentation to aid your learning.</li>
                    <li>Personal Expertise: Our instructors have professional experience with Rails, ensuring high-quality teaching and real-world insights.</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="hover-lift bg-white">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4 flex items-center text-gray-900">
                    <Code className="mr-2 h-5 w-5 text-orange-500" />
                    React.js: Leading Front-End Technology
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>High Demand: React.js is one of the most popular JavaScript libraries for building dynamic user interfaces.</li>
                    <li>Modern Development Practices: Learning React introduces you to component-based architecture, enhancing code reusability.</li>
                    <li>Complementary to Rails: Combining React with Rails gives you full-stack development skills, making you versatile in the job market.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4 text-center">Building a Strong Foundation</h3>
              <p className="text-lg text-gray-600 text-center">
                The programming concepts you learn are applicable to other languages and frameworks. We emphasize learning how to learn, so you can adapt to new technologies throughout your career. While our focus is on Rails and React, we also introduce you to other languages like Python, demonstrating how to apply your skills across different platforms.
              </p>
            </div>
          </div>
        </section>

        <section id="programs" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-white relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Our Programs & Tuition</h2>
            <p className="text-lg text-gray-300 text-center mb-8">
              We offer two comprehensive programs to suit different learning styles and schedules:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="hover-lift bg-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4 flex items-center text-white">
                    <BookOpen className="mr-2 h-5 w-5 text-orange-500" />
                    Live Class (Synchronous Learning)
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
                    <li>4-month program (20-25 hours/week)</li>
                    <li>Monday – Thursday (6:00 PM – 9:00 PM), Saturday (8:00 AM – 4:00 PM)</li>
                    <li><span className="font-semibold text-orange-500">Fully remote</span> live instructor-led classes via Zoom</li>
                    <li>Hands-on projects and exercises</li>
                    <li>Access to recordings for one year after the cohort ends</li>
                    <li>Career support</li>
                  </ul>
                  <p className="font-bold text-white">Tuition: $10,000</p>
                  <p className="text-sm text-gray-400 mt-2">Payment options: Full upfront payment with $1,000 discount, or four monthly installments</p>
                </CardContent>
              </Card>
              <Card className="hover-lift bg-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4 flex items-center text-white">
                    <BookOpen className="mr-2 h-5 w-5 text-orange-500" />
                    Self-Paced Program (Asynchronous Learning)
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
                    <li>6-month program</li>
                    <li>Access to recorded lessons</li>
                    <li>Mandatory weekly 1-hour instructor meetings</li>
                    <li>Weekly project submissions</li>
                    <li>Feedback and guidance throughout the program</li>
                  </ul>
                  <p className="font-bold text-white">Tuition: $12,000</p>
                  <p className="text-sm text-gray-400 mt-2">Coming soon after our initial cohorts</p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4 text-center">Our Pricing Philosophy</h3>
              <p className="text-lg text-gray-300 text-center">
                At the Code School of Guam, we believe in making high-quality coding education accessible. Our tuition reflects our commitment to providing exceptional value through small class sizes, personalized attention, and an optional internship program. While comparable programs often charge $15,000 to $20,000, we've intentionally set our price lower to make our program more accessible to motivated students in Guam and beyond. Our <span className="font-semibold text-orange-500">fully remote format</span> allows us to keep costs down while still delivering a high-quality, interactive learning experience.
              </p>
              <p className="text-lg text-gray-300 text-center mt-4">
                We could increase our class sizes or charge higher tuition like other schools, but our priority is your success. By keeping our classes small and our pricing fair, we aim to provide you with the best possible education and the greatest chance of success in the tech industry.
              </p>
            </div>
          </div>
        </section>

        <section id="curriculum" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-gray-900">Our Curriculum</h2>
            <p className="text-lg text-gray-600 text-center mb-8">
              Our comprehensive curriculum is designed to equip you with the skills needed to succeed as a full-stack software engineer, all through our <span className="font-semibold text-orange-500">fully remote learning platform</span>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="hover-lift bg-white">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4 flex items-center text-gray-900">
                    <GraduationCap className="mr-2 h-5 w-5 text-orange-500" />
                    Core Program
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Ruby fundamentals</li>
                    <li>Object-Oriented Programming</li>
                    <li>Ruby on Rails framework</li>
                    <li>Database design and SQL</li>
                    <li>HTML, CSS, and JavaScript</li>
                    <li>React.js</li>
                    <li>RESTful API development</li>
                    <li>Version control with Git and GitHub</li>
                    <li>Testing and debugging</li>
                    <li>Agile methodologies</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="hover-lift bg-white">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4 flex items-center text-gray-900">
                    <GraduationCap className="mr-2 h-5 w-5 text-orange-500" />
                    Program Structure
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Pre-Work: Self-paced foundational coding exercises</li>
                    <li>Core Program: In-depth learning of full-stack development</li>
                    <li>Capstone Project: Build a full-stack application from scratch</li>
                    <li>Optional Internship: Apply your skills in a real-world setting</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="timeline" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-white relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Program Timeline</h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-orange-500"></div>
              <div className="space-y-8">
                {[
                  { weeks: "Pre-work", title: "Foundations", description: "Self-paced preparation to ensure all students start with a solid foundation." },
                  { weeks: "Weeks 1-4", title: "Ruby Fundamentals", description: "Dive into Ruby and Object-Oriented Programming concepts." },
                  { weeks: "Weeks 5-8", title: "Rails API Development", description: "Learn to build robust backend APIs with Ruby on Rails." },
                  { weeks: "Week 9", title: "Full-Stack Transition", description: "Bridge the gap between backend and frontend development." },
                  { weeks: "Weeks 10-11", title: "JavaScript & APIs", description: "Explore JavaScript and working with external APIs." },
                  { weeks: "Weeks 12-13", title: "React & Integration", description: "Master React and integrate it with your Rails backend." },
                  { weeks: "Week 14", title: "Advanced Topics", description: "Capstone planning, AI in software engineering, and Python introduction." },
                  { weeks: "Weeks 15-16", title: "Capstone Project", description: "Develop and present your full-stack capstone project." },
                ].map((item, index) => (
                  <div key={index} className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-orange-500 rounded-full"></div>
                    <Card className={`hover-lift bg-gray-800 ${index % 2 === 0 ? 'ml-8 md:ml-0 md:mr-auto md:w-5/12' : 'mr-8 md:mr-0 md:ml-auto md:w-5/12'}`}>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2 flex items-center">
                          <Calendar className="mr-2 h-5 w-5 text-orange-500" />
                          {item.weeks}: {item.title}
                        </h3>
                        <p className="text-gray-300">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="internship" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-gray-900">Internship Program</h2>
            <p className="text-lg text-gray-600 text-center mb-8">
              After completing the course, you have the option to join our 2-month unpaid internship to gain real-world experience, all while working <span className="font-semibold text-orange-500">remotely</span>.
            </p>
            <Card className="hover-lift bg-white">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 flex items-center text-gray-900">
                  <Briefcase className="mr-2 h-5 w-5 text-orange-500" />
                  Internship Details
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Work on real applications for our software firm</li>
                  <li>Apply your skills in an Agile work environment</li>
                  <li>Onboarding week to set up and familiarize with the project</li>
                  <li>Weekly sprints with tasks assigned based on your estimates</li>
                  <li>Sprint planning and retrospective meetings</li>
                  <li>Daily stand-up meetings for progress updates</li>
                </ul>
                <p className="text-sm text-gray-600 mt-4">
                  <em>Participation is optional, and you can choose to leave with a week's notice.</em>
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="career" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-white relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Career Services</h2>
            <p className="text-lg text-gray-300 text-center mb-8">
              Our commitment to your success extends beyond the classroom. We offer comprehensive career services to help you launch your tech career, all delivered <span className="font-semibold text-orange-500">remotely</span>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="hover-lift bg-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">Resume Building</h3>
                  <p className="text-gray-300">We'll help you craft a standout tech resume that highlights your new skills and projects.</p>
                </CardContent>
              </Card>
              <Card className="hover-lift bg-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">Interview Prep</h3>
                  <p className="text-gray-300">Practice technical interviews and receive feedback to boost your confidence.</p>
                </CardContent>
              </Card>
              <Card className="hover-lift bg-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">Job Search Strategy</h3>
                  <p className="text-gray-300">Learn effective job search techniques and tap into our network of hiring partners.</p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-8">
              <p className="text-lg text-gray-300 text-center">
                Additional services include: LinkedIn profile optimization, portfolio development, networking opportunities, and post-graduation support for up to 6 months.
              </p>
            </div>
          </div>
        </section>

        <section id="admissions" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-gray-900">Admissions</h2>
            <p className="text-lg text-gray-600 text-center mb-8">
              Ready to start your journey with the Code School of Guam? Here's how to apply:
            </p>
            <Card className="hover-lift bg-white">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 flex items-center text-gray-900">
                  <GraduationCap className="mr-2 h-5 w-5 text-orange-500" />
                  Admission Process
                </h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-600">
                  <li>Fill out our online application form.</li>
                  <li>Receive an email confirmation with next steps, including scheduling an interview with our admissions team.</li>
                  <li>Secure your spot by completing the enrollment agreement and submitting your non-refundable tuition deposit.</li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="founder" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-white relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">About the Founder</h2>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="w-full md:w-1/3">
                <Image
                  src="/placeholder.svg"
                  alt="Leon Shimizu"
                  width={300}
                  height={300}
                  className="rounded-full mx-auto"
                />
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-bold mb-4">Leon Shimizu</h3>
                <p className="text-gray-300 mb-4">
                  Hafa Adai! I'm Leon Shimizu, born and raised in Guam. After graduating from Father Duenas Memorial School in 2017, I pursued mechanical engineering and played football at Allegheny College in Pennsylvania. While I wasn't entirely certain of my career path, my passion for math and encouragement from family and friends led me toward engineering.
                </p>
                <p className="text-gray-300 mb-4">
                  After my first year of college, upon learning that I was expecting my first child, I returned to Guam to be with my family and then in 2019, I moved to Las Vegas to pursue new opportunities while still being with family. As the pandemic began, I decided to leave college and enter the workforce full-time. I started as a produce clerk at Vons and later joined an Amazon Fulfillment Center, where I quickly advanced to Process Assistant at the Dock. Although I gained valuable experience in these roles, I realized that I wanted to pursue a more fulfilling, long-term career path.
                </p>
                <p className="text-gray-300 mb-4">
                  In the summer of 2021, inspired by family members who transitioned into software engineering through coding bootcamps, I decided to explore a career in coding. After extensive research on the best path forward, I enrolled in Actualize Coding Bootcamp, left my job at Amazon, and fully committed to learning software development. While it was challenging, I was determined to succeed.
                </p>
                <p className="text-gray-300 mb-4">
                  Before the bootcamp concluded, I was fortunate to secure a position with Spectrio LLC, where I currently work and over the past few years, I've also had the privilege of giving back to the coding community by working as an instructor and Teaching Assistant at Actualize, and contributing to another company called SkillsEngine. These experiences deepened my passion and knowledge for coding and education in general.
                </p>
                <p className="text-gray-300 mb-4">
                  For a couple of years now, my mom encouraged me to start a code school in Guam. I hesitated at first, feeling unsure about my readiness and the challenge of helping others succeed in a competitive industry. However, I realized there is no better time than now to give back to the island that shaped who I am today.
                </p>
                <p className="text-gray-300 mb-4">
                  That's why I started the Code School of Guam. My goal is to provide the same opportunities I was fortunate to receive in the states, right here at home. Also, to further support our students, I founded a software firm where they can intern, work on real projects, and gain practical experience—an essential factor that employers are actively seeking.
                </p>
                <p className="text-gray-300">
                  My mission is to help others realize that a career in software engineering is attainable, and I'm here to support them every step of the way. If I can do it, so can you.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-gray-900">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section id="policies" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-white relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Policies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="hover-lift bg-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-white">Attendance Policy</h3>
                  <p className="text-gray-300">Attendance is crucial for your success. Students are expected to attend all scheduled classes punctually. Missing more than three unexcused classes may result in dismissal from the program without a refund. Excused absences are allowed for situations beyond your control (e.g., medical emergencies). Documentation may be required after three excused absences.</p>
                </CardContent>
              </Card>
              <Card className="hover-lift bg-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-white">Code of Conduct</h3>
                  <p className="text-gray-300">We are committed to providing a respectful and inclusive learning environment. Students are expected to treat all individuals with respect and courtesy. Discrimination, harassment, or inappropriate behavior will not be tolerated. Violations may result in disciplinary action, up to dismissal without a refund.</p>
                </CardContent>
              </Card>
              <Card className="hover-lift bg-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-white">Refund Policy</h3>
                  <p className="text-gray-300">The non-refundable deposit is required to secure your enrollment. Full tuition (minus the deposit) is refundable if you withdraw before the start of the second week of classes. No refunds will be issued from the second week onward. Students dismissed due to violations of the Code of Conduct or failure to meet program requirements are not eligible for a refund.</p>
                </CardContent>
              </Card>
              <Card className="hover-lift bg-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-white">Academic Integrity</h3>
                  <p className="text-gray-300">Students must submit original work unless collaboration is explicitly permitted. Cheating, plagiarism, and unauthorized assistance are prohibited and may result in disciplinary action, including dismissal without a refund.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-gray-900">Contact Us</h2>
            <div className="flex flex-col items-center space-y-4 text-center">
              <p className="text-lg text-gray-600">
                Have questions? We're here to help! Reach out to us using the contact information below.
              </p>
              <div className="space-y-2">
                <p className="text-lg font-semibold flex items-center justify-center text-gray-900">
                  <Mail className="mr-2 h-4 w-4 text-orange-500" />
                  Email: codeschoolofguam@gmail.com
                </p>
                <p className="text-lg font-semibold flex items-center justify-center text-gray-900">
                  <Phone className="mr-2 h-4 w-4 text-orange-500" />
                  Phone: (671) 483-0219
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    className="w-full bg-white border-gray-300"
                    placeholder="Your Name"
                    type="text"
                    required
                  />
                  <Input
                    className="w-full bg-white border-gray-300"
                    placeholder="Your Email"
                    type="email"
                    required
                  />
                  <textarea
                    className="w-full min-h-[100px] rounded-md border border-gray-300 p-2 bg-white"
                    placeholder="Your Message"
                    required
                  ></textarea>
                  <Button type="submit" className="w-full bg-orange-600 text-white hover:bg-orange-700 hover-lift">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-xs">©️ 2024 Code School of Guam. All rights reserved.</p>
            <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
              <Link className="text-xs hover:underline underline-offset-4" href="#">
                Terms of Service
              </Link>
              <Link className="text-xs hover:underline underline-offset-4" href="#">
                Privacy Policy
              </Link>
            </nav>
          </div>
        </div>
      </footer>
      <div className="fixed bottom-4 right-4 z-50">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSc84Vee53gbVhwamS77qvizzV8vGri4Ms83kIEzqgN6vg7wZA/viewform?vc=0&c=0&w=1&flr=0"
          className="inline-flex h-10 items-center justify-center rounded-md bg-orange-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-orange-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover-lift"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apply Now
        </a>
      </div>
    </div>
  )
}
