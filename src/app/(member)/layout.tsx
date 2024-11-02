import React from 'react';
import Container from '@/components/layout/Container';

export default function MemberLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <Container variant='mobile'>
      {children}
      {modal}
    </Container>
  );
}
