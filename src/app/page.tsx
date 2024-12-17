import React from 'react';
import SignInPage from './(auth)/auth/signin/page';
import Container from '@/components/layout/Container';

export default function Home() {
  return (
    <Container variant='mobile'>
      <SignInPage />
    </Container>
  );
}
