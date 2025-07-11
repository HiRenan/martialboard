"use client";

import React from 'react';
import styles from './page.module.scss';
import OnboardingWizard from '@/components/onboarding/OnboardingWizard';

export default function OnboardingPage() {
  return (
    <div className={styles.onboardingContainer}>
      <div className={styles.onboardingContent}>
        <header className={styles.header}>
          <h1 className={styles.title}>Bem-vindo ao MartialBoard</h1>
          <p className={styles.subtitle}>
            Vamos configurar seu perfil para uma experiência personalizada
          </p>
        </header>
        
        <OnboardingWizard />
      </div>
    </div>
  );
} 