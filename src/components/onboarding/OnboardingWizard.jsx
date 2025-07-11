"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './OnboardingWizard.module.scss';
import StepIndicator from './StepIndicator';

const OnboardingWizard = () => {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    // Etapa 1: Identificação
    quemPreenche: '',
    
    // Etapa 2: Experiência com Jiu-Jitsu
    jaTreinou: '',
    tempoTreino: '',
    academiaAnterior: '',
    graduacaoAtual: '',
    
    // Etapa 3: Histórico e Objetivos
    outrasArtesMarciais: '',
    motivoPrincipal: '',
    outroMotivo: '',
    
    // Etapa 4: Decisão e Compromisso
    motivosEscolha: [],
    outroMotivoEscolha: '',
    frequenciaTreino: ''
  });

  const totalSteps = 4;

  const updateFormData = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNext = () => {
    if (step < totalSteps) {
      setDirection(1);
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setDirection(-1);
      setStep(step - 1);
    }
  };

  const handleFinish = async () => {
    setIsSubmitting(true);
    console.log('Dados do Onboarding:', formData);
    
    // Simula uma chamada de API
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Aqui futuramente será feita a chamada para a API e redirecionamento
    setIsSubmitting(false);
  };

  const handleMotivoEscolhaChange = (motivo) => {
    setFormData(prev => ({
      ...prev,
      motivosEscolha: prev.motivosEscolha.includes(motivo)
        ? prev.motivosEscolha.filter(m => m !== motivo)
        : [...prev.motivosEscolha, motivo]
    }));
  };

  // Função para validar se a etapa atual está completa
  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.quemPreenche !== '';
      case 2:
        if (formData.jaTreinou === '') return false;
        if (formData.jaTreinou === 'sim') {
          return formData.tempoTreino !== '' && formData.academiaAnterior !== '' && formData.graduacaoAtual !== '';
        }
        return true;
      case 3:
        return formData.motivoPrincipal !== '';
      case 4:
        return formData.motivosEscolha.length > 0 && formData.frequenciaTreino !== '';
      default:
        return false;
    }
  };

  // Variantes de animação
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const renderStep1 = () => (
    <div className={styles.stepContent}>
      <h2 className={styles.stepTitle}>Olá! Para começar, conte-nos um pouco sobre você.</h2>
      
      <div className={styles.questionGroup}>
        <label className={styles.questionLabel}>Quem está preenchendo este questionário?</label>
        <div className={styles.radioGroup}>
          <div 
            className={`${styles.radioCard} ${formData.quemPreenche === 'aluno' ? styles.selected : ''}`}
            onClick={() => updateFormData('quemPreenche', 'aluno')}
          >
            <div className={styles.radioCircle}>
              {formData.quemPreenche === 'aluno' && <div className={styles.radioDot} />}
            </div>
            <span className={styles.radioText}>O próprio aluno</span>
          </div>
          
          <div 
            className={`${styles.radioCard} ${formData.quemPreenche === 'responsavel' ? styles.selected : ''}`}
            onClick={() => updateFormData('quemPreenche', 'responsavel')}
          >
            <div className={styles.radioCircle}>
              {formData.quemPreenche === 'responsavel' && <div className={styles.radioDot} />}
            </div>
            <span className={styles.radioText}>Pai, mãe ou responsável</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className={styles.stepContent}>
      <h2 className={styles.stepTitle}>Sua Jornada no Jiu-Jitsu</h2>
      
      <div className={styles.questionGroup}>
        <label className={styles.questionLabel}>Você já treinou Jiu-Jitsu antes?</label>
        <div className={styles.radioGroup}>
          <div 
            className={`${styles.radioCard} ${formData.jaTreinou === 'sim' ? styles.selected : ''}`}
            onClick={() => updateFormData('jaTreinou', 'sim')}
          >
            <div className={styles.radioCircle}>
              {formData.jaTreinou === 'sim' && <div className={styles.radioDot} />}
            </div>
            <span className={styles.radioText}>Sim</span>
          </div>
          
          <div 
            className={`${styles.radioCard} ${formData.jaTreinou === 'nao' ? styles.selected : ''}`}
            onClick={() => updateFormData('jaTreinou', 'nao')}
          >
            <div className={styles.radioCircle}>
              {formData.jaTreinou === 'nao' && <div className={styles.radioDot} />}
            </div>
            <span className={styles.radioText}>Não</span>
          </div>
        </div>
      </div>

      {formData.jaTreinou === 'sim' && (
        <>
          <div className={styles.questionGroup}>
            <label className={styles.questionLabel}>Se sim, por quanto tempo?</label>
            <div className={styles.radioGroup}>
              {[
                'Menos de 6 meses',
                '6 meses a 1 ano',
                '1 a 3 anos',
                'Mais de 3 anos'
              ].map((tempo) => (
                <div 
                  key={tempo}
                  className={`${styles.radioCard} ${formData.tempoTreino === tempo ? styles.selected : ''}`}
                  onClick={() => updateFormData('tempoTreino', tempo)}
                >
                  <div className={styles.radioCircle}>
                    {formData.tempoTreino === tempo && <div className={styles.radioDot} />}
                  </div>
                  <span className={styles.radioText}>{tempo}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.questionGroup}>
            <label className={styles.questionLabel}>Já treinou em outra academia? Qual?</label>
            <input
              type="text"
              className={styles.textInput}
              value={formData.academiaAnterior}
              onChange={(e) => updateFormData('academiaAnterior', e.target.value)}
              placeholder="Nome da academia anterior (se aplicável)"
            />
          </div>

          <div className={styles.questionGroup}>
            <label className={styles.questionLabel}>Qual sua graduação atual (se tiver)?</label>
            <input
              type="text"
              className={styles.textInput}
              value={formData.graduacaoAtual}
              onChange={(e) => updateFormData('graduacaoAtual', e.target.value)}
              placeholder="Ex: Faixa azul, 2 graus"
            />
          </div>
        </>
      )}
    </div>
  );

  const renderStep3 = () => (
    <div className={styles.stepContent}>
      <h2 className={styles.stepTitle}>Suas Motivações</h2>
      
      <div className={styles.questionGroup}>
        <label className={styles.questionLabel}>
          Já praticou alguma outra arte marcial? Qual? Por quanto tempo?
        </label>
        <textarea
          className={styles.textarea}
          value={formData.outrasArtesMarciais}
          onChange={(e) => updateFormData('outrasArtesMarciais', e.target.value)}
          placeholder="Conte-nos sobre sua experiência com outras artes marciais..."
          rows={4}
        />
      </div>

      <div className={styles.questionGroup}>
        <label className={styles.questionLabel}>
          Qual é o principal motivo pelo qual você está começando (ou voltando a) treinar?
        </label>
        <div className={styles.radioGroup}>
          {[
            'Melhorar forma física',
            'Aprender defesa pessoal',
            'Participar de competições',
            'Indicação de amigos/família',
            'Reduzir estresse / saúde mental',
            'Outro'
          ].map((motivo) => (
            <div 
              key={motivo}
              className={`${styles.radioCard} ${formData.motivoPrincipal === motivo ? styles.selected : ''}`}
              onClick={() => updateFormData('motivoPrincipal', motivo)}
            >
              <div className={styles.radioCircle}>
                {formData.motivoPrincipal === motivo && <div className={styles.radioDot} />}
              </div>
              <span className={styles.radioText}>{motivo}</span>
            </div>
          ))}
        </div>
        
        {formData.motivoPrincipal === 'Outro' && (
          <input
            type="text"
            className={styles.textInput}
            value={formData.outroMotivo}
            onChange={(e) => updateFormData('outroMotivo', e.target.value)}
            placeholder="Especifique o motivo..."
          />
        )}
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className={styles.stepContent}>
      <h2 className={styles.stepTitle}>Seu Treino Conosco</h2>
      
      <div className={styles.questionGroup}>
        <label className={styles.questionLabel}>
          O que te fez escolher treinar na nossa academia?
        </label>
        <div className={styles.checkboxGridContainer}>
          {[
            'Proximidade',
            'Recomendação de amigos',
            'Já conheço o professor',
            'Experiência negativa em outra escola',
            'Horários disponíveis',
            'Preço acessível',
            'Afinidade com o estilo',
            'Estrutura física / ambiente',
            'Outro motivo'
          ].map((motivo) => (
            <div 
              key={motivo}
              className={`${styles.checkboxCard} ${formData.motivosEscolha.includes(motivo) ? styles.selected : ''}`}
              onClick={() => handleMotivoEscolhaChange(motivo)}
            >
              <div className={styles.checkboxSquare}>
                {formData.motivosEscolha.includes(motivo) && <div className={styles.checkboxCheck} />}
              </div>
              <span className={styles.checkboxText}>{motivo}</span>
            </div>
          ))}
        </div>
        
        {formData.motivosEscolha.includes('Outro motivo') && (
          <input
            type="text"
            className={styles.textInput}
            value={formData.outroMotivoEscolha}
            onChange={(e) => updateFormData('outroMotivoEscolha', e.target.value)}
            placeholder="Especifique o outro motivo..."
          />
        )}
      </div>

      <div className={styles.questionGroup}>
        <label className={styles.questionLabel}>
          Quantas vezes na semana você pretende treinar?
        </label>
        <div className={styles.radioGroup}>
          {['1x', '2x', '3x', '4x', 'Todos os dias'].map((freq) => (
            <div 
              key={freq}
              className={`${styles.radioCard} ${formData.frequenciaTreino === freq ? styles.selected : ''}`}
              onClick={() => updateFormData('frequenciaTreino', freq)}
            >
              <div className={styles.radioCircle}>
                {formData.frequenciaTreino === freq && <div className={styles.radioDot} />}
              </div>
              <span className={styles.radioText}>{freq}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderCurrentStep = () => {
    switch (step) {
      case 1:
        return renderStep1();
      case 2:
        return renderStep2();
      case 3:
        return renderStep3();
      case 4:
        return renderStep4();
      default:
        return renderStep1();
    }
  };

  return (
    <div className={styles.wizardContainer}>
      <StepIndicator currentStep={step} totalSteps={totalSteps} />
      
      <div className={styles.stepContainer}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={step}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className={styles.stepWrapper}
          >
            {renderCurrentStep()}
          </motion.div>
        </AnimatePresence>
      </div>
      
      <div className={styles.navigationButtons}>
        {step > 1 && (
          <button
            type="button"
            className={styles.backButton}
            onClick={handleBack}
          >
            Voltar
          </button>
        )}
        
        {step < totalSteps ? (
          <button
            type="button"
            className={styles.nextButton}
            onClick={handleNext}
            disabled={!isStepValid()}
          >
            Avançar
          </button>
        ) : (
          <button
            type="button"
            className={styles.finishButton}
            onClick={handleFinish}
            disabled={!isStepValid() || isSubmitting}
          >
            {isSubmitting ? (
              <>
                <div className={styles.spinner} />
                Salvando...
              </>
            ) : (
              'Finalizar'
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default OnboardingWizard; 