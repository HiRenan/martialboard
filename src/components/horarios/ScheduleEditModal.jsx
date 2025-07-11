"use client";

import React, { useState, useEffect } from 'react';
import { X, Save } from 'lucide-react';
import styles from './ScheduleEditModal.module.scss';

const ScheduleEditModal = ({ isOpen, onClose, onSave, editingClass }) => {
  const [formData, setFormData] = useState({
    name: '',
    startTime: '',
    endTime: '',
    professor: '',
    dayOfWeek: 'segunda',
    modality: 'Jiu-Jitsu'
  });

  const daysOfWeek = [
    { value: 'segunda', label: 'Segunda-feira' },
    { value: 'terca', label: 'Terça-feira' },
    { value: 'quarta', label: 'Quarta-feira' },
    { value: 'quinta', label: 'Quinta-feira' },
    { value: 'sexta', label: 'Sexta-feira' },
    { value: 'sabado', label: 'Sábado' },
    { value: 'domingo', label: 'Domingo' },
  ];

  const modalities = [
    { value: 'Jiu-Jitsu', label: 'Jiu-Jitsu' },
    { value: 'Muay Thai', label: 'Muay Thai' },
    { value: 'Boxe', label: 'Boxe' },
    { value: 'Kickboxing', label: 'Kickboxing' },
    { value: 'MMA', label: 'MMA' },
    { value: 'Funcional', label: 'Funcional' },
  ];

  useEffect(() => {
    if (editingClass) {
      // Extrair horário de início e fim do formato "19:00 - 20:30"
      const timeParts = editingClass.time.split(' - ');
      setFormData({
        name: editingClass.name,
        startTime: timeParts[0],
        endTime: timeParts[1],
        professor: editingClass.professor,
        dayOfWeek: 'segunda', // Será determinado pelo contexto
        modality: editingClass.modality || 'Jiu-Jitsu'
      });
    } else {
      setFormData({
        name: '',
        startTime: '',
        endTime: '',
        professor: '',
        dayOfWeek: 'segunda',
        modality: 'Jiu-Jitsu'
      });
    }
  }, [editingClass, isOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const classData = {
      ...formData,
      time: `${formData.startTime} - ${formData.endTime}`,
      id: editingClass ? editingClass.id : `class_${Date.now()}`
    };
    
    onSave(classData);
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>
            {editingClass ? 'Editar Aula' : 'Adicionar Nova Aula'}
          </h2>
          <button
            type="button"
            className={styles.closeButton}
            onClick={onClose}
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              Nome da Aula
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={styles.input}
              placeholder="Ex: Jiu-Jitsu Avançado"
              required
            />
          </div>

          <div className={styles.timeGroup}>
            <div className={styles.formGroup}>
              <label htmlFor="startTime" className={styles.label}>
                Horário de Início
              </label>
              <input
                type="time"
                id="startTime"
                name="startTime"
                value={formData.startTime}
                onChange={handleInputChange}
                className={styles.input}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="endTime" className={styles.label}>
                Horário de Fim
              </label>
              <input
                type="time"
                id="endTime"
                name="endTime"
                value={formData.endTime}
                onChange={handleInputChange}
                className={styles.input}
                required
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="modality" className={styles.label}>
              Modalidade
            </label>
            <select
              id="modality"
              name="modality"
              value={formData.modality}
              onChange={handleInputChange}
              className={styles.select}
              required
            >
              {modalities.map(modality => (
                <option key={modality.value} value={modality.value}>
                  {modality.label}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="professor" className={styles.label}>
              Professor
            </label>
            <input
              type="text"
              id="professor"
              name="professor"
              value={formData.professor}
              onChange={handleInputChange}
              className={styles.input}
              placeholder="Nome do professor"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="dayOfWeek" className={styles.label}>
              Dia da Semana
            </label>
            <select
              id="dayOfWeek"
              name="dayOfWeek"
              value={formData.dayOfWeek}
              onChange={handleInputChange}
              className={styles.select}
              required
            >
              {daysOfWeek.map(day => (
                <option key={day.value} value={day.value}>
                  {day.label}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.formActions}>
            <button
              type="button"
              className={styles.cancelButton}
              onClick={onClose}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className={styles.saveButton}
            >
              <Save size={16} />
              {editingClass ? 'Atualizar' : 'Salvar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ScheduleEditModal; 