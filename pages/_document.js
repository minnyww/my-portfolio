import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
   static async getInitialProps(ctx) {
      const sheet = new ServerStyleSheet();
      const originalRenderPage = ctx.renderPage;

      try {
         ctx.renderPage = () =>
            originalRenderPage({
               enhanceApp: (App) => (props) =>
                  sheet.collectStyles(<App {...props} />),
            });

         const initialProps = await Document.getInitialProps(ctx);
         return {
            ...initialProps,
            styles: (
               <>
                  {initialProps.styles}
                  {sheet.getStyleElement()}
               </>
            ),
         };
      } finally {
         sheet.seal();
      }
   }

   render() {
      return (
         <Html>
            <Head>
               <link
                  rel='preconnect'
                  href='https://cdn.dribbble.com/users/931459/screenshots/4696538/18.png'
               />
               <link
                  rel='preconnect'
                  href='https://cdn.dribbble.com/users/79571/screenshots/4918556/illustrations.png'
               />{' '}
               <link
                  rel='preconnect'
                  href='https://static.dribbble.com/users/1204750/screenshots/4015227/frame__2_.png'
               />
               {/* <link
                  href='https://fonts.googleapis.com/css2?family=Prompt&display=swap'
                  rel='stylesheet'
               /> */}
            </Head>
            <body>
               <Main />
               <NextScript />
            </body>
         </Html>
      );
   }
}
