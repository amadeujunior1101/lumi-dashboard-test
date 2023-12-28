import { Chart, ChartData, ChartOptions } from 'chart.js/auto';
import React, { useEffect, useRef } from 'react';

interface PieChartProps {
  chartId: string;
  data: ChartData;
  options?: ChartOptions;
}

const PieChart: React.FC<PieChartProps> = ({ chartId, data, options }) => {
  const chartCanvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const chartCanvas = chartCanvasRef.current;

    if (!chartCanvas) {
      console.error(`Canvas element with id ${chartId} not found.`);
      return;
    }

    const pieChart = new Chart(chartCanvas, {
      type: 'pie',
      data: data,
      options: options,
    });

    return () => {
      pieChart.destroy();
    };
  }, [chartId, data, options]);

  return <canvas id={chartId} ref={chartCanvasRef} />;
};

export { PieChart };
