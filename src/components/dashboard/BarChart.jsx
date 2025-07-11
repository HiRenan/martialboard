"use client";
import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import styles from './BarChart.module.scss';

Chart.register(...registerables);

const BarChart = ({ data, title, subtitle }) => {
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
        type: 'bar',
        data: {
          labels: data.labels,
          datasets: [
            {
              label: data.datasets[0].label,
              data: data.datasets[0].data,
              backgroundColor: [
                'rgba(229, 62, 62, 0.8)',
                'rgba(72, 187, 120, 0.8)',
                'rgba(237, 137, 54, 0.8)',
                'rgba(102, 126, 234, 0.8)',
                'rgba(159, 122, 234, 0.8)',
                'rgba(236, 72, 153, 0.8)'
              ],
              borderColor: [
                'rgba(229, 62, 62, 1)',
                'rgba(72, 187, 120, 1)',
                'rgba(237, 137, 54, 1)',
                'rgba(102, 126, 234, 1)',
                'rgba(159, 122, 234, 1)',
                'rgba(236, 72, 153, 1)'
              ],
              borderWidth: 2,
              borderRadius: 6,
              borderSkipped: false,
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
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
              displayColors: false,
              callbacks: {
                title: function(context) {
                  return context[0].label;
                },
                label: function(context) {
                  return `${context.dataset.label}: ${context.parsed.y}`;
                }
              }
            }
          },
          scales: {
            x: {
              grid: {
                color: 'rgba(74, 85, 104, 0.3)',
                drawBorder: false
              },
              ticks: {
                color: '#A0AEC0',
                font: {
                  size: 12
                }
              }
            },
            y: {
              grid: {
                color: 'rgba(74, 85, 104, 0.3)',
                drawBorder: false
              },
              ticks: {
                color: '#A0AEC0',
                font: {
                  size: 12
                },
                callback: function(value) {
                  return value + ' alunos';
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
    </div>
  );
};

export default BarChart; 