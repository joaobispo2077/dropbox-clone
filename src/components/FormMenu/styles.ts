import styled from 'styled-components';
import { FaDropbox } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;

  @media (min-width: 1024) {
    max-width: 480px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;

  justify-content: space-between;

  padding: 16px 32px;

  min-height: 61px;

  > h1 {
    display: flex;
    align-items: center;

    gap: 10px;

    font-size: 29px;
    color: var(--quaternary);

    @media (min-width: 1024px) {
      display: none;
    }
  }

  .action--close {
    background: none;
    border: none;

    font-weight: bold;
    font-size: 17px;

    cursor: pointer;
  }
`;

export const DropboxIcon = styled(FaDropbox)`
  width: 36px;
  height: 32px;
  fill: var(--blue);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 100%;
  max-width: 480px;

  margin: 0 auto;
  padding: 0 32px;

  .title {
    font-size: 25px;
    font-weight: 500;
  }

  .subtitle {
    font-size: 14px;
    margin-top: 3px;
  }

  > input {
    background: var(--tertiary);

    border: 1px solid var(--border);

    padding: 13px 18px;

    font-size: 14px;

    margin-top: 18px;
  }

  > button {
    background-color: var(--blue);
    border: none;

    margin-top: 18px;
    padding: 13px 18px;

    cursor: pointer;
    color: var(--tertiary);

    &:hover,
    &:focus {
      opacity: 0.87;
    }
  }

  .terms {
    font-size: 12px;
    opacity: 0.6;
    margin-top: 4px;
  }
`;
