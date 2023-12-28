import { ChartData, ChartOptions } from 'chart.js/auto';
import { PieChart } from './pieChart';

interface DataItemsProps {
  labels: string[];
  label: string;
  data: number[];
  backgroundColor:string[];
  title: string;
}

interface DataProps {
  chartPieData: DataItemsProps
}

const PieComponent: React.FC<DataProps> = ({chartPieData: {label, labels, data, backgroundColor, title}}) => {

const pieChartData: ChartData = {
    labels,
    datasets: [{
      label,
      data,
      backgroundColor,
    }],
  };

  const pieChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: title,
      },
    },
  };

  return (
   <PieChart chartId="myPieChart" data={pieChartData} options={pieChartOptions} />
  );
};

export { PieComponent };

