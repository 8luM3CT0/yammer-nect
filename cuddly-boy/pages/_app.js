//front-end
import '../styles/globals.css'
import '@material-tailwind/react/tailwind.css'
//back-end
function MyApp ({ Component, pageProps }) {
  return (
    <>
      <link
        href='https://fonts.googleapis.com/icon?family=Material+Icons'
        rel='stylesheet'
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
