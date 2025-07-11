"use client";

import React, { useState } from 'react';
import { Check } from 'lucide-react';
import styles from './ReportForm.module.scss';

const ReportForm = ({ onSubmit }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [reportText, setReportText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    'Desconforto durante o treino',
    'Assédio',
    'Preconceito',
    'Comentário Negativo',
    'Sugestão de Melhoria'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!reportText.trim()) return;
    
    setIsSubmitting(true);
    
    const formData = {
      category: selectedCategory,
      report: reportText.trim(),
      timestamp: new Date().toISOString()
    };
    
    // Simula uma chamada de API
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    onSubmit(formData);
  };

  const isFormValid = reportText.trim().length > 0;

  return (
    <form onSubmit={handleSubmit} className={styles.reportForm}>
      <div className={styles.categorySection}>
        <h2 className={styles.sectionTitle}>
          Sobre qual tópico você gostaria de falar?
        </h2>
        <p className={styles.sectionSubtitle}>
          (Opcional, mas nos ajuda a direcionar melhor sua mensagem)
        </p>
        
        <div className={styles.categoryTags}>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`${styles.categoryTag} ${
                selectedCategory === category ? styles.selected : ''
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
              {selectedCategory === category && (
                <Check size={16} className={styles.checkIcon} />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.reportSection}>
        <h2 className={styles.sectionTitle}>Seu Relato</h2>
        <textarea
          className={styles.reportTextarea}
          value={reportText}
          onChange={(e) => setReportText(e.target.value)}
          placeholder="Descreva a situação com o máximo de detalhes possível. Sinta-se à vontade para incluir datas, locais e o que mais achar relevante. Estamos aqui para ouvir."
          rows={12}
          minLength={10}
          required
        />
        
        <div className={`${styles.characterCount} ${reportText.length > 0 ? styles.active : ''}`}>
          {reportText.length} caracteres
        </div>
      </div>

      <div className={styles.submitSection}>
        <button
          type="submit"
          className={styles.submitButton}
          disabled={!isFormValid || isSubmitting}
        >
          {isSubmitting ? (
            <>
              <div className={styles.spinner} />
              Enviando...
            </>
          ) : (
            'Enviar Relato Anonimamente'
          )}
        </button>
        
        <p className={styles.privacyNote}>
          ⚡ Seu relato é completamente anônimo e será tratado com total confidencialidade.
        </p>
      </div>
    </form>
  );
};

export default ReportForm; 