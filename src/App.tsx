import React from 'react';
import Section from './components/Section';
import data from './data';

function App() {
  return (
    <>
      {data.map((item, index) => (
        <Section key={index} {...item} />
      ))}
    </>
    // <Section
    //   variant={data[0].variant}
    //   title={data[0].title}
    //   description={data[0].description}
    // />
  );
}

export default App;
