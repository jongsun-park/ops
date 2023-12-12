import ReactEcharts from "echarts-for-react";
import ChartContainer from "./ChartContainer";
import ChartTitle from "./ChartTitle";

function HalfDoughnutChart({ title, data }) {
  const total = data.reduce((acc, cur) => acc + cur.value, 0);
  const newData = [
    ...data,
    {
      // make an record to fill the bottom 50%
      value: total,
      itemStyle: {
        // stop the chart from rendering this piece
        color: "none",
        decal: {
          symbol: "none",
        },
      },
      label: {
        show: false,
      },
    },
  ];

  const options = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      bottom: "5%",
      left: "center",
      // doesn't perfectly work with our tricks, disable it
      selectedMode: false,
    },
    series: [
      {
        name: title,
        type: "pie",
        radius: ["40%", "70%"],
        center: ["50%", "70%"],
        // adjust the start angle
        startAngle: 180,
        label: {
          show: true,
          formatter(param) {
            // correct the percentage
            return param.name + " (" + param.percent * 2 + "%)";
          },
        },
        data: newData,
      },
    ],
    color: ["#0284c7", "#a3a3a3"],
  };

  return (
    <ChartContainer>
      <ChartTitle>{title}</ChartTitle>
      <ReactEcharts option={options} style={{}}></ReactEcharts>
    </ChartContainer>
  );
}

export default HalfDoughnutChart;
