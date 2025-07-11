"use client";

import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Edit3, Plus } from 'lucide-react';
import styles from './ScheduleView.module.scss';
import ClassCard from './ClassCard';
import { weeklySchedule } from '@/lib/mockData';

const ScheduleView = ({ onAddClass, onEditClass, onDeleteClass }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [schedule, setSchedule] = useState(weeklySchedule);

  const daysOfWeek = [
    { key: 'segunda', label: 'Segunda' },
    { key: 'terca', label: 'Terça' },
    { key: 'quarta', label: 'Quarta' },
    { key: 'quinta', label: 'Quinta' },
    { key: 'sexta', label: 'Sexta' },
    { key: 'sabado', label: 'Sábado' },
    { key: 'domingo', label: 'Domingo' },
  ];

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;
    
    if (source.droppableId === destination.droppableId) {
      // Movendo dentro da mesma coluna
      const dayKey = source.droppableId;
      const dayClasses = Array.from(schedule[dayKey]);
      const [reorderedItem] = dayClasses.splice(source.index, 1);
      dayClasses.splice(destination.index, 0, reorderedItem);
      
      setSchedule(prev => ({
        ...prev,
        [dayKey]: dayClasses
      }));
    } else {
      // Movendo entre colunas
      const sourceDay = source.droppableId;
      const destDay = destination.droppableId;
      const sourceClasses = Array.from(schedule[sourceDay]);
      const destClasses = Array.from(schedule[destDay]);
      const [movedItem] = sourceClasses.splice(source.index, 1);
      destClasses.splice(destination.index, 0, movedItem);
      
      setSchedule(prev => ({
        ...prev,
        [sourceDay]: sourceClasses,
        [destDay]: destClasses
      }));
    }
    
    console.log('Aula movida:', {
      from: source.droppableId,
      to: destination.droppableId,
      item: result.draggableId
    });
  };

  return (
    <div className={styles.scheduleContainer}>
      <div className={styles.header}>
        <div className={styles.titleSection}>
          <h1 className={styles.title}>Grade de Horários</h1>
          {isEditMode && (
            <div className={styles.dragHint}>
              <span>💡 Arraste as aulas para reorganizar</span>
            </div>
          )}
        </div>
        <button
          type="button"
          className={`${styles.editButton} ${isEditMode ? styles.active : ''}`}
          onClick={toggleEditMode}
        >
          <Edit3 size={18} />
          {isEditMode ? 'Sair do Modo Edição' : 'Editar Horários'}
        </button>
      </div>

      <DragDropContext onDragEnd={handleDragEnd}>
        <div className={styles.scheduleGrid}>
          {daysOfWeek.map((day) => (
            <div key={day.key} className={styles.dayColumn}>
              <div className={styles.dayHeader}>
                <h3 className={styles.dayTitle}>{day.label}</h3>
                {isEditMode && (
                  <button
                    type="button"
                    className={styles.addClassButton}
                    onClick={() => onAddClass(day.key)}
                  >
                    <Plus size={16} />
                    Adicionar Aula
                  </button>
                )}
              </div>
              
              <Droppable droppableId={day.key}>
                {(provided, snapshot) => (
                  <div 
                    className={`${styles.classesList} ${snapshot.isDraggingOver ? styles.draggingOver : ''}`}
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    {schedule[day.key]?.map((classItem, index) => (
                      <Draggable 
                        key={classItem.id} 
                        draggableId={classItem.id} 
                        index={index}
                        isDragDisabled={!isEditMode}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className={`${styles.draggableItem} ${snapshot.isDragging ? styles.dragging : ''}`}
                          >
                            <ClassCard
                              classData={classItem}
                              isEditMode={isEditMode}
                              onEdit={() => onEditClass(classItem)}
                              onDelete={() => onDeleteClass(classItem.id)}
                            />
                          </div>
                        )}
                      </Draggable>
                    ))}
                    
                    {provided.placeholder}
                    
                    {(!schedule[day.key] || schedule[day.key].length === 0) && (
                      <div className={styles.emptyState}>
                        <p>Nenhuma aula programada</p>
                      </div>
                    )}
                  </div>
                )}
              </Droppable>
            </div>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default ScheduleView; 