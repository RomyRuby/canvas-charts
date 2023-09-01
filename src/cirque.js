let Cirque = function (percent) {
  //this是调用Cirque时传入的实例
  const ctx = this.ctx;
  let circleConfig = this.defaultParam;

  // 绘制打底圆环
  ctx.beginPath();
  ctx.lineWidth = circleConfig.arcWidth;
  //圆形渐变
  let grd = ctx.createRadialGradient(
    circleConfig.x,
    circleConfig.y,
    circleConfig.radius - 10,
    circleConfig.x,
    circleConfig.y,
    circleConfig.radius + 10
  );
  grd.addColorStop(0, "#e9eae9");
  grd.addColorStop("0.8", "#fefefe");
  grd.addColorStop("1", "#e9eae9");
  ctx.strokeStyle = grd;
  ctx.arc(
    circleConfig.x,
    circleConfig.y,
    circleConfig.radius,
    circleConfig.startAngle,
    circleConfig.endAngle
  );
  ctx.stroke();
  ctx.closePath();

  // 绘制进度圆环
  ctx.beginPath();
  ctx.lineWidth = circleConfig.arcWidth;
  //线性渐变
  let linear = ctx.createLinearGradient(
    circleConfig.x - circleConfig.radius,
    circleConfig.y - circleConfig.radius,
    circleConfig.x + circleConfig.radius,
    circleConfig.y + circleConfig.radius
  );
  linear.addColorStop(0, "#b6bff1");
  linear.addColorStop(0.5, "#b8d1f3");
  linear.addColorStop(1, "#d2ebfb");
  ctx.strokeStyle = linear;
  ctx.arc(
    circleConfig.x,
    circleConfig.y,
    circleConfig.radius,
    circleConfig.startAngle,
    circleConfig.endAngle * percent
  );
  ctx.stroke();
  ctx.closePath();

  // 起点的圆形
  ctx.beginPath();
  ctx.fillStyle = "#b6bff1";
  ctx.arc(
    circleConfig.x + circleConfig.radius,
    circleConfig.y - 1,
    circleConfig.arcWidth / 2,
    circleConfig.startAngle,
    circleConfig.endAngle
  );
  ctx.fill();
  ctx.closePath();

  // 终点的圆形
  ctx.beginPath();
  ctx.lineWidth = circleConfig.arcWidth - 10;
  ctx.fillStyle = "#fff";
  ctx.strokeStyle = "#b6bff1";
  let tarX =
    circleConfig.x + circleConfig.radius * Math.cos(2 * Math.PI * percent);
  let tarY =
    circleConfig.y + circleConfig.radius * Math.sin(2 * Math.PI * percent);
  ctx.arc(
    tarX,
    tarY,
    circleConfig.arcWidth - 8,
    circleConfig.startAngle,
    circleConfig.endAngle
  );
  ctx.fill();
  ctx.stroke();
  ctx.closePath();

  //绘制中心百分比
  ctx.beginPath();
  ctx.fillStyle = "#909399";
  ctx.textAlign = "center";
  ctx.font = circleConfig.fontSize + " Microsoft YaHei";
  ctx.fillText(
    parseInt(percent * 100),
    circleConfig.x,
    circleConfig.y + Number(circleConfig.fontSize.slice(0, -2) / 2)
  );
  ctx.closePath();
};

export default Cirque;
