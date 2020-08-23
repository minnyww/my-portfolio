import { useEffect, useState } from 'react';
import Head from 'next/head';
import Typography from '@material-ui/core/Typography';
import styled, { createGlobalStyle } from 'styled-components';
import ContentCard from './components/ContentCard';

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

    /* background-image: url(${(props) => props.bgimage && props.bgimage}); */
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.09);
  }
`;

const Container = styled.div`
   padding: 18px;
`;

const Image = styled.img`
   max-width: 70%;
   width: 100%;
   margin: 0 auto;
   display: block;
   padding: 16px;
`;

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
         <Container>
            <GlobalStyle bgimage='https://cdn.dribbble.com/users/729829/screenshots/3894287/galshir-autumn-morning.png' />
            <Head>
               <title>Apisit Portfolio</title>
            </Head>
            <Typography variant='h4'>Hi, {greetingTime}</Typography>
            <Image
               src='https://cdn.dribbble.com/users/103909/screenshots/5964957/welcome-preview-01_4x.png?compress=1&resize=800x600'
               alt='greeting_cover'
               loading='lazy'
            />
            <Typography variant='h5'>My Projects</Typography>
            {PROJECT_LIST.map((project) => (
               <ContentCard data={project} key={project.title} />
            ))}
         </Container>
      </>
   );
}
