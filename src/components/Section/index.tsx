import React from 'react';

import {
  Container,
  Content,
  HeaderWrapper,
  Header,
  DropboxIcon,
} from './styles';

export type SectionProps = {
  variant: 'blue' | 'beige' | 'white' | 'black';
  title: string;
  description: string;
};

const Section: React.FC<SectionProps> = ({ variant, title, description }) => {
  return (
    <Container className={variant}>
      <HeaderWrapper>
        <Header>
          <h1>
            <DropboxIcon />
            <span>Dropbox</span>
          </h1>

          <button>Interagir</button>
        </Header>
      </HeaderWrapper>
      <Content>
        <h2>{title}</h2>
        <p>{description}</p>
      </Content>
    </Container>
  );
};

export default Section;
