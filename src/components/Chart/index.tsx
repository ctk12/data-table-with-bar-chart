import Plot from 'react-plotly.js';
import * as Plotly from 'plotly.js';
import { Product } from '@/types/Product';

const layout = {
  title: "Products Chart", 
  height: 500,   
  xaxis: {
    title: "Products",
  },
  yaxis: {
    title: "Prices",
    range: [0, 2000]
  },
  responsive: true,
};

const BarChart = ({ productData }: { productData: Product[] }) => {
    const data: Plotly.Data[] = [
        {
            x: productData.length > 0 ? productData.map(product => product.title) : [""],
            y: productData.map(product => product.price),
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