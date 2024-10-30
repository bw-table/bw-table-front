import { ReactNode } from 'react';
import Container from '@/components/layout/Container';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return <Container variant="mobile">{children}</Container>;
}
