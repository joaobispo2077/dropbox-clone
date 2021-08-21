import React from 'react';
import Section from './components/Section';
import SideMenu from './components/SideMenu';
import data from './data';

function App() {
  return (
    <main>
      {data.map((sectionData, index) => (
        <Section key={index} {...sectionData} />
      ))}

      <SideMenu />
    </main>
  );
}

export default App;
