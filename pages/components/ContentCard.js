import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

const Card = styled.div`
   margin-top: 1rem;
   border: 1px solid #dfd8d8;
   padding: 16px;
   border-radius: 6px;
   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.09);
   display: flex;
   flex-direction: row;
   /* align-items: center; */
`;

const Image = styled.img`
   height: auto;
   max-width: 100px;
   object-fit: cover;
   margin-right: 1rem;
   width: 100%;
`;

const Content = styled.div`
   display: flex;
   flex-direction: column;
`;

function ContentCard({ data }) {
   const { title, description, link, cover } = data;
   return (
      <Card>
         <Image src={cover} alt='project_cover' loading='lazy' />
         <Content>
            <Typography variant='h6'>{title}</Typography>
            <Typography variant='subtitle2'>{description}</Typography>
         </Content>
      </Card>
   );
}

export default React.memo(ContentCard);
