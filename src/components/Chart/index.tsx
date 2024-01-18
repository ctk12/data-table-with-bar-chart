import Plot from 'react-plotly.js';
import * as Plotly from 'plotly.js';
import { User } from '@/types/User';

const layout = {
  title: "Orders Chart", 
  height: 400,   
  xaxis: {
    title: "Users",
  },
  yaxis: {
    title: "Orders",
    range: [0, 100]
  },
  responsive: true,
};

const BarChart = ({ userData }: { userData: User[] }) => {
    const data: Plotly.Data[] = [
        {
            x: userData.length > 0 ? userData.map(user => user.user_name) : [""],
            y: userData.map(user => user.orders),
            type: "bar",
            width: 0.4
        },
    ];

  return (
    <div className="flex justify-center mb-3 w-full overflow-scroll">
        <Plot data={data} layout={layout} />
    </div>
  );
};

export default BarChart;