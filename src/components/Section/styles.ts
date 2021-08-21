import styled from 'styled-components';

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
`;

export const Content = styled.div`
  z-index: 2;
`;