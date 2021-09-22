import '../styles/globals.css'
import "../stylescss/projects.scss"
import "bootstrap/dist/css/bootstrap.css";
import Script from '../components/scripts';

function MyApp({ Component, pageProps }) {
  return (
    <Script>
      <Component {...pageProps} />
    </Script>
    
  );
}

export default MyApp
