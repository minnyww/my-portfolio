import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import Head from 'next/head';

const MainContent = dynamic(() => import('./components/MainContent'), {
   loading: () => <p>Loadin MainContent...</p>,
});

export default function Home({ PROJECT_LIST }) {
   const [greetingTime, setGreetingTime] = useState('');

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
            : 'Good Night';

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
