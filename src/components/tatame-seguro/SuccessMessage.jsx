"use client";

import React from 'react';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import styles from './SuccessMessage.module.scss';

const SuccessMessage = () => {
  const router = useRouter();

  const handleBackToDashboard = () => {
    router.push('/dashboard');
  };

  return (
    <div className={styles.successContainer}>
      <div className={styles.successIcon}>
        <CheckCircle size={64} />
      </div>
      
      <h1 className={styles.successTitle}>Seu relato foi enviado.</h1>
      
      <p className={styles.successMessage}>
        Agradecemos por sua confiança e por nos ajudar a manter nossa academia 
        um lugar seguro e respeitoso para todos. Sua mensagem foi recebida de 
        forma totalmente anônima e será tratada com a devida atenção pela nossa 
        administração.
      </p>
      
      <div className={styles.actions}>
        <button
          type="button"
          className={styles.backButton}
          onClick={handleBackToDashboard}
        >
          <ArrowLeft size={20} />
          Voltar ao Dashboard
        </button>
      </div>
      
      <div className={styles.securityNote}>
        <p>
          🔒 <strong>Confidencialidade Garantida:</strong> Nenhum dado pessoal foi coletado. 
          Seu relato permanecerá completamente anônimo.
        </p>
      </div>
    </div>
  );
};

export default SuccessMessage; 