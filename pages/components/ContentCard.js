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
   cursor: pointer;
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

function ContentCard({ data, onClickCard }) {
   return (
      <Card onClick={() => onClickCard(data.pid)}>
         <Image src={data?.cover} alt='project_cover' loading='lazy' />
         <Content>
            <Typography variant='h6'>{data?.title}</Typography>
            <Typography variant='subtitle2'>{data?.cardDescription}</Typography>
         </Content>
      </Card>
   );
}

export default React.memo(ContentCard);
