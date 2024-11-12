import React from 'react';
import Container from '@/components/layout/Container';

export default function ManagerLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <Container variant='tablet'>
      {children}
      {modal}
    </Container>
  );
}
