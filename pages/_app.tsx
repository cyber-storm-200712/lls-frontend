import '../styles/globals.css'
import '../styles/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'


// import { Provider } from 'next-auth/client'

function MyApp({ Component, pageProps }: any) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
