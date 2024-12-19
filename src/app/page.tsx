import React from 'react';
import Container from '@/components/layout/Container';
import AuthPage from './(auth)/auth/page';

export default function Home() {
  return (
    <Container variant='mobile'>
      <AuthPage />
    </Container>
  );
}
