import Head from 'next/head';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';

const CoverProject = styled.img`
   max-width: 50%;
   width: 100%;
   margin: 0 auto;
   display: block;
   padding: 16px;
`;

const MoreImageContainer = styled.div`
   margin: 2rem;
`;

const MoreImage = styled.img`
   width: 200px;
   object-fit: cover;
   padding: 1rem;
`;

export default function ProjectDetail({ currentProject }) {
   if (!currentProject) return 'Loading...';

   const { title, fullCover, description, moreImage } = currentProject;
   return (
      <React.Fragment>
         <Head>
            <title>{title}</title>
         </Head>
         <Typography variant='h5'>{title}</Typography>
         <CoverProject src={fullCover} loading='lazy' alt='project_cover' />
         <Typography variant='subtitle1' style={{ textIndent: '2rem' }}>
            {description}
         </Typography>
         <MoreImageContainer>
            {moreImage &&
               moreImage.map((img) => (
                  <MoreImage
                     key={img}
                     src={img}
                     width={120}
                     loading='lazy'
                     alt='more_project_image'
                  />
               ))}
         </MoreImageContainer>
      </React.Fragment>
   );
}

export async function getStaticPaths() {
   return {
      paths: [
         { params: { pid: '1' } },
         { params: { pid: '2' } },
         { params: { pid: '3' } },
      ],
      fallback: false,
   };
}

export async function getStaticProps({ params }) {
   const PROJECT_LIST = require('../../public/projectList.json');
   const currentProject = PROJECT_LIST.find(
      (project) => project.pid === params.pid,
   );
   return {
      props: {
         currentProject,
      },
   };
}
