import Document, { Html, Head, Main } from 'next/document'
import NextScript from '../components/customNextHead/_customNextHead.tsx'

import { GA_TRACKING_ID } from '../lib/gtag'

class MyDocument extends Document {
    render() {
      return (
        <Html lang="es" class="notranslate" translate="no">
          <Head>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            {/*<script 
              dangerouslySetInnerHTML={{
                __html: `var _gaq = _gaq || [];_gaq.push(['_setAccount', 'UA-1408065-6']);_gaq.push(['_trackPageview']);(function() {var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);})();`
              }}
            />*/}
            <script 
              dangerouslySetInnerHTML={{
                __html: `var _gaq = _gaq || [];_gaq.push(['_setAccount', 'UA-35299520-5']);_gaq.push(['_trackPageview']);(function() {var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);})();`
              }}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                
                  gtag('config', '${GA_TRACKING_ID}');
                `,
              }}
            />
            <meta name="google" content="notranslate"></meta>
          </Head>
          <body>
            <Main /> 
            <NextScript />
          </body>
        </Html>
      )
    }
  }
  
  export default MyDocument