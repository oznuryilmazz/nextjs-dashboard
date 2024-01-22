import { BarChart } from '@mantine/charts';
import '@mantine/charts/styles.css';

export const data = [
  { month: 'January', Smartphones: 120, Laptops: 80, Tablets: 10 },
  { month: 'February', Smartphones: 90, Laptops: 120, Tablets: 40 },
  { month: 'March', Smartphones: 40, Laptops: 100, Tablets: 20 },
  { month: 'April', Smartphones: 100, Laptops: 20, Tablets: 80 },
  { month: 'May', Smartphones: 80, Laptops: 140, Tablets: 120 },
  { month: 'June', Smartphones: 75, Laptops: 60, Tablets: 100 },
  { month: 'July', Smartphones: 75, Laptops: 60, Tablets: 100 },
  { month: 'August', Smartphones: 75, Laptops: 60, Tablets: 100 },
  { month: 'September', Smartphones: 75, Laptops: 60, Tablets: 100 },
];

export default function RevenueChart() {
  return (
    <BarChart
      h="100%"
      data={data}
      dataKey="month"
      type="stacked"
      orientation="vertical"
      yAxisProps={{ width: 80 }}
      series={[
        { name: 'Smartphones', color: 'violet.6' },
        { name: 'Laptops', color: 'blue.6' },
        { name: 'Tablets', color: 'teal.6' },
      ]}
    />
  );
}
