import Head from 'next/head';
import dynamic from 'next/dynamic';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
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

const ShareToLineButton = styled(Button)`
   background-color: rgb(0, 185, 0) !important;
   color: rgb(255, 255, 255) !important;
   margin: 10px auto !important;
   display: block !important;
`;

function Me() {
   const shareToLine = () => {
      const liff = window.liff;
      liff.init({ liffId: '1653775837-mwbxbjNB' }, async () => {
         if (!liff.isLoggedIn()) {
            liff.login({ redirectUri: 'https://apisit-min.com/me' });
         } else if (liff.isLoggedIn()) {
            console.log('share', liff.isApiAvailable('shareTargetPicker'));
            if (liff.isApiAvailable('shareTargetPicker')) {
               await liff.shareTargetPicker([
                  {
                     type: 'flex',
                     altText: 'Apisit Portfolio Website',
                     contents: {
                        type: 'bubble',
                        body: {
                           type: 'box',
                           layout: 'vertical',
                           contents: [
                              {
                                 type: 'image',
                                 url:
                                    'https://cdn2.iconfinder.com/data/icons/business-management-and-teamwork-filled-color/300/163251747Untitled-3-512.png',
                                 size: 'full',
                                 aspectMode: 'cover',
                                 aspectRatio: '1:1',
                                 gravity: 'center',
                              },
                              {
                                 type: 'image',
                                 url:
                                    'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip15.png',
                                 position: 'absolute',
                                 aspectMode: 'fit',
                                 aspectRatio: '1:1',
                                 offsetTop: '0px',
                                 offsetBottom: '0px',
                                 offsetStart: '0px',
                                 offsetEnd: '0px',
                                 size: 'full',
                              },
                              {
                                 type: 'box',
                                 layout: 'horizontal',
                                 contents: [
                                    {
                                       type: 'box',
                                       layout: 'vertical',
                                       contents: [
                                          {
                                             type: 'box',
                                             layout: 'horizontal',
                                             contents: [
                                                {
                                                   type: 'text',
                                                   text:
                                                      'Apisit Amnuayworrabut',
                                                   size: 'xl',
                                                   color: '#ffffff',
                                                   weight: 'bold',
                                                },
                                             ],
                                             backgroundColor: '#423bbd',
                                             margin: 'none',
                                             paddingAll: '5px',
                                          },
                                          {
                                             type: 'box',
                                             layout: 'horizontal',
                                             contents: [
                                                {
                                                   type: 'box',
                                                   layout: 'baseline',
                                                   contents: [
                                                      {
                                                         type: 'text',
                                                         text:
                                                            'Click to open portfolio website ',
                                                         color: '#ffffff',
                                                         size: 'md',
                                                         flex: 0,
                                                         align: 'end',
                                                         weight: 'bold',
                                                      },
                                                   ],
                                                   flex: 0,
                                                   spacing: 'lg',
                                                },
                                             ],
                                             paddingAll: '5px',
                                          },
                                       ],
                                       spacing: 'xs',
                                    },
                                 ],
                                 position: 'absolute',
                                 offsetBottom: '0px',
                                 offsetStart: '0px',
                                 offsetEnd: '0px',
                                 paddingAll: '20px',
                              },
                           ],
                           paddingAll: '0px',
                           action: {
                              type: 'uri',
                              label: 'action',
                              uri:
                                 'https://apisit-min.com/?openExternalBrowser=1',
                           },
                        },
                     },
                  },
               ]);
            } else {
               window.location.href =
                  'https://line.me/R/msg/text/?http://apisit-min.com/';
            }
         }
      });
   };

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
         <ShareToLineButton variant='contained' onClick={() => shareToLine()}>
            Share to line
         </ShareToLineButton>
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
