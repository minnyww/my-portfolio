import Head from 'next/head';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const CaptionDivider = styled.div`
   width: 100%;
   background: #423bbd;
   padding: 15px;
   max-width: 600px;
   margin-left: -18px;
   color: white;
   text-align: center;
`;

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
            variant='h6'
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

         {/* 
         <img
            src='https://cdn.dribbble.com/users/1878318/screenshots/6559347/dribbble_sh_cat3_tru_4x.png?compress=1&resize=800x600'
            loading='lazy'
            width={350}
            style={{ display: 'block', margin: '0 auto' }}
         />

         <CaptionDivider>
            <Typography variant='h5'>EDUCATION</Typography>
         </CaptionDivider>
         <Typography variant='body1'>Nickname : Min</Typography>
         <Typography variant='subtitle1'>
            Tel : <a href='tel:0909514409'>0909514409</a>
         </Typography>
         <Typography variant='subtitle1'>
            Email :{' '}
            <a href='mailto:minrrverse@gmail.com?subject=contact from min-website'>
               minrrverse@gmail.com
            </a>
         </Typography>
         <Typography variant='subtitle1'>Work at : Vonder Thailand</Typography>
         <Typography variant='subtitle1'>
            Github :{' '}
            <a href='https://github.com/minnyww'>https://github.com/minnyww</a>
         </Typography>
         <Typography variant='h5'>EDUCATION</Typography> */}
      </>
   );
}

export default Me;
