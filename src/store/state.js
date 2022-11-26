let defaultCity = '北京'
try { //通过try-catch方法判断在浏览器支持本地缓存且本地缓存变量有值时使用本地缓存的变量
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch(e) {console.log('浏览器不支持本地缓存！');}
export default {
    selectCity: defaultCity,
}