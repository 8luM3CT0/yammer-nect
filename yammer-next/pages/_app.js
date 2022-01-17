import '../styles/globals.css'
import '@material-tailwind/react/tailwind.css'
import Router from 'next/router'

import ProgressBar from '@badrap/bar-of-progress'

const progress = new ProgressBar({
  size: 4,
  color: '#A272B5',
  className: 'z-50',
  delay: 100
})

Router.events.on('routeChangeStart', progress.start)
Router.events.on('routeChangeComplete', progress.finish)
Router.events.on('routeChangeError', progress.finish)

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
