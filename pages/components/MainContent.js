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

export default function MainContent({ greetingTime, PROJECT_LIST }) {
   const router = useRouter();

   if (!PROJECT_LIST) {
      return (
         <Typography variant='subtitle1'>Cannot Get Project Data</Typography>
      );
   }

   const handleOnClickCard = (pid) => {
      router.push('/project-detail/[pid]', `/project-detail/${pid}`);
   };

   const prefetchAllContent = () => {
      return PROJECT_LIST.map((project) =>
         router.prefetch(
            `/project-detail/[pid]`,
            `/project-detail/${project.pid}`,
         ),
      );
   };

   useEffect(() => {
      prefetchAllContent();
   }, [PROJECT_LIST]);

   return (
      <div style={{ paddingBottom: '3rem' }}>
         <Typography variant='h4'>Hi, {greetingTime}</Typography>
         <Image src='/welcome_pic.jpg' alt='greeting_cover' />
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
}
