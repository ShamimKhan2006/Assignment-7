'use client';

import { Pie, PieChart, ResponsiveContainer } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';
import { use } from 'react';
import { MyContext } from './Context';
import Function from './Function';
 


const data = [
  { name: 'Group A', value: 400, fill: '#0088FE' },
  { name: 'Group B', value: 300, fill: '#00C49F' },
  { name: 'Group C', value: 300, fill: '#FFBB28' },

];

export default function PieChartWithPaddingAngle({ isAnimationActive = true }) {

  <Function></Function>
  return (
    <div className="w-full h-[400px] flex justify-center items-center">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            innerRadius={80}
            outerRadius={120}
            cornerRadius={50}
            paddingAngle={5}
            isAnimationActive={isAnimationActive}
          />
        </PieChart>
      </ResponsiveContainer>

      <RechartsDevtools />
    </div>
  );
}