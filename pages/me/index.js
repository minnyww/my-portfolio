import Head from 'next/head';
import dynamic from 'next/dynamic';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const Experience = dynamic(() => import('../components/Experience'), {
   loading: () => <p>Loadin Experience...</p>,
});

const Skill = dynamic(() => import('../components/Skill'), {
   loading: () => <p>Loadin Skill...</p>,
});

const UserCover = styled.img`
   width: 100%;
   max-width: 186px;
   border-radius: 100%;
   display: block;
   margin: 0 auto;
   height: 178px;
   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.09);
`;

function Me() {
   return (
      <>
         <Head>
            <title>About - me</title>
         </Head>
         <UserCover
            src='https://cdn.dribbble.com/users/1338391/screenshots/6995002/media/ee39ffa08e0f503841bb0b6ffa00aafe.jpg'
            loading='lazy'
         />
         <Typography
            variant='h4'
            style={{ textAlign: 'center', marginTop: '0.5rem' }}
         >
            Apisit Amnuayworrabut
         </Typography>
         <Typography
            variant='subtitle1'
            style={{ textAlign: 'center', color: '#706767' }}
         >
            Front-End Developer
         </Typography>
         <Typography
            variant='subtitle2'
            style={{ textAlign: 'center', color: '#706767' }}
         >
            Github : <a href='https://github.com/minnyww'>minnywww</a>
         </Typography>
         <Typography
            variant='subtitle2'
            style={{ textAlign: 'center', color: '#706767' }}
         >
            Tel : <a href='tel:0909514409'>0909514409</a>
         </Typography>
         <Typography
            variant='subtitle2'
            style={{ textAlign: 'center', color: '#706767' }}
         >
            Email :{' '}
            <a href='mailto:minrrverse@gmail.com'>minrrverse@gmail.com</a>
         </Typography>
         <Typography
            variant='h5'
            style={{ marginTop: '0.5rem', textAlign: 'center' }}
         >
            Skill
         </Typography>
         <Skill />
         <Typography
            variant='h5'
            style={{ marginTop: '0.5rem', textAlign: 'center' }}
         >
            Experience
         </Typography>
         <Experience />
      </>
   );
}

export default Me;
