import "../css/main.css";
import MyCharts from "./charts";

//进度圆环
new MyCharts({
  select: "#box1",
  ratio: 1.5,
  type: "cirque",
  fontSize: "100px",
});

//折线图
new MyCharts({
  select: "#box2",
  ratio: 1.5,
  type: "line",
  styles: {
    borderColor: "#DCDFE6",
    lineColor: "#C5E3F6",
    pointColor: "#FC6C9C",
  },
  data: [
    {
      xVal: "周一",
      yVal: 40,
    },
    {
      xVal: "周二",
      yVal: 70,
    },
    {
      xVal: "周三",
      yVal: 30,
    },
    {
      xVal: "周四",
      yVal: 80,
    },
    {
      xVal: "周五",
      yVal: 30,
    },
    {
      xVal: "周六",
      yVal: 20,
    },
    {
      xVal: "周日",
      yVal: 90,
    },
  ],
});

//柱状图
new MyCharts({
  type: "histogram",
  select: "#box3",
  ratio: 1.5,
  data: [
    {
      xVal: "vue",
      yVal: 80,
    },
    {
      xVal: "react",
      yVal: 70,
    },
    {
      xVal: "node",
      yVal: 40,
    },
    {
      xVal: "webpack",
      yVal: 90,
    },
    {
      xVal: "typescript",
      yVal: 80,
    },
    {
      xVal: "css",
      yVal: 40,
    },
    {
      xVal: "javascipt",
      yVal: 100,
    },
  ],
});
