import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import Head from 'next/head';
// import liff from '@line/liff';

// const liff = window.liff;

const MainContent = dynamic(() => import('./components/MainContent'), {
   loading: () => <p>Loadin MainContent...</p>,
});

export default function Home({ PROJECT_LIST }) {
   const [greetingTime, setGreetingTime] = useState('');

   // useEffect(() => {
   //    window.addEventListener('load', () => {
   //       const liff = window.liff;
   //       liff.init({ liffId: '1653775837-mwbxbjNB' }, async () => {
   //          if (!liff.isLoggedIn()) {
   //             liff.login();
   //          } else if (liff.isLoggedIn()) {
   //             console.log('profile : ', await liff.getProfile());
   //          }
   //       });
   //    });
   // }, []);

   useEffect(() => {
      const d = new Date();
      const time = d.getHours();

      const date = new Date();
      let hours = date.getHours();
      let status =
         hours < 12
            ? 'Good Morning'
            : hours <= 18 && hours >= 12
            ? 'Good Afternoon'
            : 'Good Evening';

      setGreetingTime(status);
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
   const PROJECT_LIST = require('../public/projectList.json');
   return {
      props: {
         PROJECT_LIST,
      },
   };
}
