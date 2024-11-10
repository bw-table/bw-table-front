import { ReactNode } from 'react';
import Container from '@/components/layout/Container';

export default function ManagementLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <Container variant="tablet">{children}</Container>;
}
