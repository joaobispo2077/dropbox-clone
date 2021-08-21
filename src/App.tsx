import React from 'react';
import FormMenu from './components/FormMenu';
import Section from './components/Section';
import SideMenu from './components/SideMenu';
import data from './data';

function App() {
  return (
    <main>
      {data.map((sectionData, index) => (
        <Section key={index} {...sectionData} />
      ))}

      <SideMenu>
        <FormMenu />
      </SideMenu>
    </main>
  );
}

export default App;
