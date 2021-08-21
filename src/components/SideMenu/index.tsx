import React, { useEffect, useState } from 'react';

import { Container } from './styles';

const scrollThreshold = 300;

declare global {
  interface Window {
    toggleActiveSideMenu: () => void | undefined;
  }
}

const SideMenu: React.FC = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggleActiveSideMenu() {
    setIsActive((previousIsActive) => !previousIsActive);
  }

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

  window.toggleActiveSideMenu = toggleActiveSideMenu;
  return <Container className={className}>{children}</Container>;
};

export default SideMenu;
