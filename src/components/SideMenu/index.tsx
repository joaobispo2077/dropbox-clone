import React, { useEffect, useState } from 'react';

import { Container } from './styles';

const scrollThreshold = 300;

const SideMenu: React.FC = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    function onScroll() {
      setScrollY(window.scrollY);
      setIsActive(false);
    }

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const sideMenuClasses = [
    isActive ? 'open' : '',
    scrollY <= scrollThreshold ? 'scrollOpen' : '',
  ];

  const className = sideMenuClasses.join(' ');

  return <Container className={className}>{children}</Container>;
};

export default SideMenu;
