import React, { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';
import Header from './Header';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import SkillsSection from './SkillsSection';
import ExperienceSection from './ExperienceSection';
import ContactSection from './ContactSection';
import { mockData } from '../data/mockData';

const Portfolio = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>
      <Header />
      <HeroSection scrollY={scrollY} />
      <AboutSection data={mockData.about} />
      <SkillsSection data={mockData.skills} />
      <ExperienceSection data={mockData.experience} />
      <ContactSection data={mockData.contact} />
    </div>
  );
};

export default Portfolio;