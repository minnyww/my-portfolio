import { useEffect, useState } from 'react';
import Head from 'next/head';
import MainContent from './components/MainContent';
import styled from 'styled-components';

// const Container = styled.div`
//    padding: 18px;
// `;

export default function Home({ PROJECT_LIST }) {
   const [greetingTime, setGreetingTime] = useState('');

   useEffect(() => {
      const d = new Date();
      const time = d.getHours();

      if (time < 12) {
         setGreetingTime('Good morning!');
      }
      if (time > 12) {
         setGreetingTime('Good afternoon!');
      }
      if (time == 12) {
         setGreetingTime('Good eat lunch!');
      }
   }, []);

   return (
      <>
         <Head>
            <title>Apisit Portfolio</title>
         </Head>
         <MainContent greetingTime={greetingTime} PROJECT_LIST={PROJECT_LIST} />
      </>
   );
}

export async function getStaticProps() {
   const PROJECT_LIST = require('./projectList.json');
   return {
      props: {
         PROJECT_LIST,
      },
   };
}
