import styled from 'styled-components';
import { FaDropbox } from 'react-icons/fa';

export const Container = styled.section`
  --padding-top: 100px;
  --padding-bottom: 120px;

  --heading-font-size: 32px;

  --content-width: 100%;

  &.blue {
    --container-background: var(--primary);
    --text-color: var(--tertiary);
    --logo-color: var(--secondary);
  }

  &.beige {
    --container-background: var(--secondary);
    --text-color: var(--quaternary);
    --logo-color: var(--primary);
  }

  &.white {
    --container-background: var(--tertiary);
    --text-color: var(--quaternary);
    --logo-color: var(--blue);
  }

  &.black {
    --container-background: var(--quaternary);
    --text-color: var(--tertiary);
    --logo-color: var(--blue);
  }

  &:first-child {
    --padding-top: 130px;
    --heading-font-size: 51px;

    @media (min-width: 1024px) {
      --content-width: 50%;
      --heading-font-size: 71px;
    }
  }

  background-color: var(--container-background);
`;

export const Content = styled.div`
  z-index: 2;
  position: relative;
  max-width: 1440px;
  margin: 0 auto;

  > h2 {
    font-size: var(--heading-font-size);
    color: var(--logo-color);
  }

  > p {
    margin-top: 20px;
    font-size: 16px;
    color: var(--text-color);
    max-width: var(--content-width);
  }

  padding: var(--padding-top) 32px var(--padding-bottom);
`;

export const HeaderWrapper = styled.div``;
export const Header = styled.header``;
export const DropboxIcon = styled(FaDropbox)``;
