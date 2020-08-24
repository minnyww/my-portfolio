import { useEffect, useState } from 'react';
import Head from 'next/head';
import MainContent from './components/MainContent';

export default function Home() {
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

   const PROJECT_LIST = [
      {
         title: `thai chana let's go`,
         description:
            'เป็น Project ที่ทำขึ้นมาเพื่อเอาไว้ Checkin เข้าสถานที่ต่างๆ',
         cover:
            'https://cdn.dribbble.com/users/931459/screenshots/4696538/18.png',
         link: 'http://thaichana-checkin.web.app/',
      },
      {
         title: `Mental Health Survey`,
         description: 'เป็นเว็บไซต์ทำ Survey สำหรับบุคลากรในโรงพยาบาล',
         cover:
            'https://cdn.dribbble.com/users/79571/screenshots/4918556/illustrations.png',
         link: 'https://pnkcovidst-5.web.app/',
      },
   ];

   return (
      <>
         <Head>
            <title>Apisit Portfolio</title>
         </Head>
         <MainContent PROJECT_LIST={PROJECT_LIST} greetingTime={greetingTime} />
      </>
   );
}
