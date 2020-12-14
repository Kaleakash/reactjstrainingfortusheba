import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  console.log("Event Fired MyApp Component")
  return <Component {...pageProps} />
}

export default MyApp
