export default function myAnimation(param) {
  let current = 0;
  let looped;
  const ctx = this.ctx;
  const _canvas = this._canvas;
  const callback = param.render;
  const successCb = param.success;
  //立即执行函数前必须加分号
  (function looping() {
    looped = requestAnimationFrame(looping);
    if (current < param.percent) {
      ctx.clearRect(0, 0, _canvas.width, _canvas.height); //清空画布
      current = current + 2 > param.percent ? param.percent : current + 2;
      callback(current); //执行动画
    } else {
      window.cancelAnimationFrame(looping); //清除looped对应动画
      looped = null;
      successCb && successCb();
    }
  })();
}
