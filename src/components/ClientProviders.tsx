'use client';

import { XProvider } from '@ant-design/x';

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return <XProvider>{children}</XProvider>;
}
