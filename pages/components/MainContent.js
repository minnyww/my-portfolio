import dynamic from 'next/dynamic';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const ContentCard = dynamic(() => import('../components/ContentCard'), {
   loading: () => <p>Loadin ContentCard...</p>,
});

const Image = styled.img`
   max-width: 50%;
   width: 100%;
   margin: 0 auto;
   display: block;
   padding: 16px;
`;

const MainContent = ({ greetingTime }) => {
   const router = useRouter();
   const PROJECT_LIST = require('../projectList.json');

   const handleOnClickCard = (pid) => {
      router.push(`/project-detail/${pid}`);
   };

   const prefetchAllContent = () => {
      return PROJECT_LIST.map((project) =>
         router.prefetch(`/project-detail/${project.pid}`),
      );
   };

   useEffect(() => {
      prefetchAllContent();
   }, []);

   return (
      <div style={{ paddingBottom: '3rem' }}>
         <Typography variant='h4'>Hi, {greetingTime}</Typography>
         <Image
            src='https://cdn.dribbble.com/users/103909/screenshots/5964957/welcome-preview-01_4x.png?compress=1&resize=800x600'
            alt='greeting_cover'
            loading='lazy'
         />
         <Typography variant='h5'>My Projects</Typography>
         {PROJECT_LIST.map((project) => (
            <ContentCard
               data={project}
               key={project.title}
               onClickCard={handleOnClickCard}
            />
         ))}
      </div>
   );
};

export default MainContent;
