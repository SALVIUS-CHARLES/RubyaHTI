"use client";
import Head from 'next/head';
import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function Home() {
  const [currentSection, setCurrentSection] = useState('home');
  const handleGetStarted = () => {
    setCurrentSection('features');
    // Smooth scroll to top in case page was scrolled
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <Head>
        <title>RHITI - Innovative Solutions for Modern Problems</title>
        <meta name="description" content="RHITI provides cutting-edge solutions to help your business grow and succeed in the digital age." />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header setCurrentSection={setCurrentSection} />
        <main style={{ flex: 1 }}>
          {currentSection === 'home' ? (
            <Hero onGetStarted={() => setCurrentSection('features')} />
          ) : currentSection === 'features' ? (
            <Features onBackToHome={() => setCurrentSection('home')} />
          ) : currentSection === 'testimonials' ? (
            <Testimonials onBackToHome={() => setCurrentSection('home')} />
          ) : (
            <ContactForm onBackToHome={() => setCurrentSection('home')} />
          )}
        </main>
        <Footer />
      </div>
    </>
  );
}