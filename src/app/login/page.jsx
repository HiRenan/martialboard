import React from 'react';
import styles from './page.module.scss';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function LoginPage() {
  return (
    <main className={styles.pageContainer}>
      <div className={styles.formSection}>
        <LoginForm />
      </div>
      <div className={styles.imageSection}>
        <div className={styles.overlay} />
        <div className={styles.content}>
          <h2 className={styles.slogan}>
            Disciplina na Luta.<br />
            Maestria na Gestão.
          </h2>
          <p className={styles.subtitle}>
            Onde a tecnologia encontra a tradição para forjar campeões.
          </p>
        </div>
      </div>
    </main>
  );
} 