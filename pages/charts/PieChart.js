import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function BasicPie() {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'Dinner' },
            { id: 1, value: 15, label: 'Breakfast' },
            { id: 2, value: 20, label: 'Lunch' },
            { id: 3, value: 30, label: 'Snack' },
          ],
        },
      ]}
      width={400}
      height={200}
    />
  );
}