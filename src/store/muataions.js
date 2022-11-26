export default {
  changeCity (state, city) {
    state.selectCity = city
    try { //通过try-catch方法判断浏览器是否支持localStorage
      localStorage.city = city
    } catch (e) {}
  }
}