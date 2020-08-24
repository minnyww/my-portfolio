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

const PROJECT_LIST = [
   {
      title: `thai chana let's go`,
      description:
         'เป็น Project ที่ทำขึ้นมาเพื่อเอาไว้ Checkin เข้าสถานที่ต่างๆ',
      cover: 'https://cdn.dribbble.com/users/931459/screenshots/4696538/18.png',
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

const MainContent = ({ greetingTime }) => {
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
