import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const BaseTimeLine = styled(Timeline)`
   /* .MuiTimelineItem-missingOppositeContent:before {
      display: none !important;
   } */
`;

export default function Experience() {
   return (
      <BaseTimeLine>
         <TimelineItem>
            <TimelineOppositeContent>
               <Typography color='textSecondary'>Senior Project</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
               <TimelineDot />
               <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
               Senior Project (React,Express,Maria DB, Digital Ocean, Space)
            </TimelineContent>
         </TimelineItem>
         <TimelineItem>
            <TimelineOppositeContent>
               <Typography color='textSecondary'>2019</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
               <TimelineDot />
               <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
               Giinos software intelligence ,PartTime (Angular)
            </TimelineContent>
         </TimelineItem>
         <TimelineItem>
            <TimelineOppositeContent>
               <Typography color='textSecondary'>2019 - now</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
               <TimelineDot color='primary' />
            </TimelineSeparator>
            <TimelineContent>Vonder Thailand (React)</TimelineContent>
         </TimelineItem>
      </BaseTimeLine>
   );
}
