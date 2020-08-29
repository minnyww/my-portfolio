import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';
import styled from 'styled-components';

const Footer = styled(BottomNavigation)`
   position: fixed;
   bottom: 0;
   height: 50px;
   width: 100%;
   max-width: 600px;
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
      router.prefetch(pathValue === 'me' ? '/' : '/' + pathValue);
      setNavValue(pathValue === 'me' ? '/' + pathValue : '/');
   }, [pathValue]);

   return (
      <Footer
         value={navValue}
         onChange={(_, newValue) => {
            setNavValue(newValue);
            router.push(newValue);
         }}
         showLabels
      >
         <BottomNavigationAction
            style={{ color: 'white' }}
            label='Home'
            value='/'
            icon={<img src='/home.svg' width={20} alt='home_icon' />}
         />
         <BottomNavigationAction
            style={{ color: 'white' }}
            label='About Me'
            value='/me'
            icon={<img src='/info.svg' width={20} alt='info_icon' />}
         />
      </Footer>
   );
});
