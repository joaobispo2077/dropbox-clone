import React from 'react';
import Section from './components/Section';
import data from './data';

function App() {
  return (
    <main>
      {data.map((sectionData, index) => (
        <Section key={index} {...sectionData} />
      ))}
    </main>
  );
}

export default App;
