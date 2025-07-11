"use client";

import React, { useState } from 'react';
import styles from './page.module.scss';
import ReportForm from '@/components/tatame-seguro/ReportForm';
import SuccessMessage from '@/components/tatame-seguro/SuccessMessage';
import Modal from '@/components/ui/Modal';

export default function TatameSeguroPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pendingFormData, setPendingFormData] = useState(null);

  const handleSubmit = (formData) => {
    setPendingFormData(formData);
    setIsModalOpen(true);
  };

  const handleConfirmSubmit = () => {
    console.log('Relato anônimo recebido:', pendingFormData);
    // Aqui futuramente será feita a chamada para a API
    setIsModalOpen(false);
    setIsSubmitted(true);
  };

  const handleCancelSubmit = () => {
    setIsModalOpen(false);
    setPendingFormData(null);
  };

  return (
    <div className={styles.tatameSeguroContainer}>
      <div className={styles.contentCard}>
        {!isSubmitted ? (
          <div className={styles.formGrid}>
            <div className={styles.introSection}>
              <h1 className={styles.title}>Seu Canal de Comunicação Seguro e Anônimo</h1>
              <p className={styles.description}>
                Este é um espaço protegido para você compartilhar qualquer experiência, 
                preocupação ou sugestão. Seu relato é 100% anônimo. Nenhuma informação 
                pessoal, como nome, e-mail ou IP, será registrada. A sua voz é fundamental 
                para construirmos um ambiente cada vez melhor.
              </p>
            </div>
            
            <ReportForm onSubmit={handleSubmit} />
          </div>
        ) : (
          <SuccessMessage />
        )}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCancelSubmit}
        title="Confirmar Envio"
        actions={
          <>
            <button
              type="button"
              className={styles.cancelButton}
              onClick={handleCancelSubmit}
            >
              Cancelar
            </button>
            <button
              type="button"
              className={styles.confirmButton}
              onClick={handleConfirmSubmit}
            >
              Sim, Enviar Anonimamente
            </button>
          </>
        }
      >
        <p className={styles.modalMessage}>
          Seu relato será enviado de forma permanente e anônima. 
          Deseja continuar?
        </p>
      </Modal>
    </div>
  );
} 