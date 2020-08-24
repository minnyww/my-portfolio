import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';
import styled from 'styled-components';

const Footer = styled(BottomNavigation)`
   position: fixed !important;
   bottom: 0;
   width: 100%;
   max-width: 600px;
   justify-content: space-evenly;
   background-color: #6057ff !important;

   .MuiBottomNavigationAction-root.Mui-selected {
      background: #423bbd;
   }
`;

export default React.memo(function BottomNav() {
   const [navValue, setNavValue] = useState('/');
   const router = useRouter();
   const pathValue = router?.pathname.replace('/', '');

   useEffect(() => {
      setNavValue(pathValue);
   }, [pathValue]);

   return (
      <Footer
         value={navValue}
         onChange={(event, newValue) => {
            console.log('newValue : ', newValue);
            setNavValue(newValue);
            router.push(newValue);
         }}
         showLabels
      >
         <BottomNavigationAction
            style={{ color: 'white' }}
            label='Home'
            value='/'
            icon={<Icon style={{ color: 'white' }}>home</Icon>}
         />
         <BottomNavigationAction
            style={{ color: 'white' }}
            label='About Me'
            value='me'
            icon={<Icon style={{ color: 'white' }}>info</Icon>}
         />
      </Footer>
   );
});
