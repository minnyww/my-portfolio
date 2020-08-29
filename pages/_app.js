import '../styles/globals.css';
import dynamic from 'next/dynamic';
import { ThemeProvider } from 'styled-components';
import styled, { createGlobalStyle } from 'styled-components';
import Head from 'next/head';

const BottomNav = dynamic(() => import('./components/BottomNav'), {
   loading: () => <p>Loadin BottomNav...</p>,
});

const GlobalStyle = createGlobalStyle`
  body {
    min-height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw;
    max-width: 600px;
    margin: 0 auto;
    background : #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.09);
  }
`;

const Container = styled.div`
   padding: 18px;
`;

function MyApp({ Component, pageProps }) {
   return (
      <ThemeProvider theme={{}}>
         <GlobalStyle />
         <Head>
            <link
               rel='stylesheet'
               href='https://fonts.googleapis.com/icon?family=Material+Icons'
            />
         </Head>
         <Container>
            <Component {...pageProps} />
         </Container>
         <BottomNav />
      </ThemeProvider>
   );
}

export default MyApp;
