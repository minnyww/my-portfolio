import Typography from '@material-ui/core/Typography';
import ContentCard from '../components/ContentCard';
import styled from 'styled-components';

const Image = styled.img`
   max-width: 70%;
   width: 100%;
   margin: 0 auto;
   display: block;
   padding: 16px;
`;

const MainContent = ({ PROJECT_LIST, greetingTime }) => {
   return (
      <>
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
      </>
   );
};

export default MainContent;
