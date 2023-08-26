'use client';

import { NextUIProvider } from '@nextui-org/react';
import { ReactNode } from 'react';

export function Provider({ children }: { children: ReactNode }) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
