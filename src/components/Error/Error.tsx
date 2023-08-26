import React from 'react';
import { useRouteError } from 'react-router-dom';
import { Container, Message } from './styles';
import { H4B, H5M } from '@/theme';

const Error: React.FC = () => {
  const error = useRouteError();

  return (
    <Container id="error-page">
      <Message>
        <H4B>Oops!</H4B>
        <H5M>Sorry, an unexpected error has occurred.</H5M>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </Message>
    </Container>
  );
};
export default Error;
