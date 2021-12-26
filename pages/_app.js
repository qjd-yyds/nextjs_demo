import '../styles/globals.css'

function MyApp({ 
  Component, // 当前路由匹配的组件
  pageProps // 已请求的数据
  }) {
  return <Component {...pageProps} />
}

export default MyApp
