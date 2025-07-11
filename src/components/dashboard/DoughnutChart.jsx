"use client";
import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import styles from './DoughnutChart.module.scss';

Chart.register(...registerables);

const DoughnutChart = ({ data, title, subtitle }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      // Destruir instância anterior se existir
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext('2d');
      
      chartInstance.current = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: data.labels,
          datasets: [
            {
              data: data.data,
              backgroundColor: [
                'rgba(229, 62, 62, 0.8)',
                'rgba(72, 187, 120, 0.8)',
                'rgba(237, 137, 54, 0.8)',
                'rgba(102, 126, 234, 0.8)',
                'rgba(159, 122, 234, 0.8)'
              ],
              borderColor: [
                'rgba(229, 62, 62, 1)',
                'rgba(72, 187, 120, 1)',
                'rgba(237, 137, 54, 1)',
                'rgba(102, 126, 234, 1)',
                'rgba(159, 122, 234, 1)'
              ],
              borderWidth: 2,
              hoverBorderWidth: 3,
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: '60%',
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              backgroundColor: 'rgba(45, 55, 72, 0.95)',
              titleColor: '#F7FAFC',
              bodyColor: '#A0AEC0',
              borderColor: '#4A5568',
              borderWidth: 1,
              cornerRadius: 8,
              displayColors: true,
              callbacks: {
                label: function(context) {
                  const total = context.dataset.data.reduce((a, b) => a + b, 0);
                  const percentage = ((context.parsed / total) * 100).toFixed(1);
                  return `${context.label}: ${context.parsed} (${percentage}%)`;
                }
              }
            }
          },
          animation: {
            duration: 1000,
            easing: 'easeInOutQuart'
          }
        }
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data]);

  const total = data.data.reduce((a, b) => a + b, 0);

  return (
    <div className={styles.chartCard}>
      <div className={styles.header}>
        <div>
          <h3 className={styles.title}>{title}</h3>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
      </div>
      
      <div className={styles.chartContainer}>
        <canvas ref={chartRef} />
      </div>
      
      <div className={styles.legend}>
        {data.labels.map((label, index) => {
          const value = data.data[index];
          const percentage = ((value / total) * 100).toFixed(1);
          
          return (
            <div key={index} className={styles.legendItem}>
              <div 
                className={styles.legendColor}
                style={{
                  backgroundColor: [
                    'rgba(229, 62, 62, 0.8)',
                    'rgba(72, 187, 120, 0.8)',
                    'rgba(237, 137, 54, 0.8)',
                    'rgba(102, 126, 234, 0.8)',
                    'rgba(159, 122, 234, 0.8)'
                  ][index]
                }}
              />
              <span className={styles.legendLabel}>{label}</span>
              <span className={styles.legendValue}>{percentage}%</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DoughnutChart; 