import ReactEcharts from "echarts-for-react";
import ChartContainer from "./ChartContainer";
import ChartTitle from "./ChartTitle";

function BarChart({ title, data }) {
  const options = {
    grid: {},
    xAxis: {
      type: "category",
      data: Object.keys(data) ?? [
        "Item 1",
        "Item 2",
        "Item 3",
        "Item 4",
        "Item 5",
      ],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: Object.values(data) ?? [400, 300, 350, 200, 280],
        type: "bar",
        smooth: true,
      },
    ],
    tooltip: {
      trigger: "axis",
    },
    color: ["#a3a3a3"],
  };

  return (
    <ChartContainer>
      <ChartTitle>{title}</ChartTitle>
      <ReactEcharts option={options} style={{}}></ReactEcharts>
    </ChartContainer>
  );
}

export default BarChart;
