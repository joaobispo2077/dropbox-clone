import React from 'react';

import { Container, Content } from './styles';

export type SectionProps = {
  variant: 'blue' | 'beige' | 'white' | 'black';
  title: string;
  description: string;
};

const Section: React.FC<SectionProps> = ({ variant, title, description }) => {
  return (
    <Container className={variant}>
      <Content>
        <h2>{title}</h2>
        <p>{description}</p>
      </Content>
    </Container>
  );
};

export default Section;
