import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

const GraphComponent = ({ dataLabels, dataValues }) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    indexAxis: "y",
    display: false,
  };

  const data = {
    labels: dataLabels,
    datasets: [
      {
        barThickness: 15,
        data: dataLabels.map(() =>
          faker.datatype.number({ min: 0, max: 1000 })
        ),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div className="flex flex-col rounded-2xl text-gray-500 bg-gray-50 shadow-lg p-6">
      <h1 className="font-medium text-gray-500 ">Lorem Ipsum</h1>
      <p>
        Id labore et veniam adipisicing voluptate veniam sint duis eu et
        pariatur. Nostrud Lorem nisi et voluptate minim esse elit ut duis cillum
      </p>
      <Bar options={options} data={data} />
    </div>
  );
};

export default GraphComponent;
