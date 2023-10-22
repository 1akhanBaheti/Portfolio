'use client';
import Navbar from '@/components/navbar'
import About from '@/components/about'
import Homepage from '@/components/homepage'
import Work from '@/components/work'
import Contact from '@/components/contact'
import Project from '@/components/projects'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
    <Navbar />
    <Homepage/>
    <About />
    <Work/>
    <Project/>
    <Contact/>
    </main>
  )
}
