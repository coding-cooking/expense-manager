import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { theme } from '../theme';
import Header from '@/components/Header/Header';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Expense manager',
  description: 'Manage your everyday expense!',
};

export default async function RootLayout({ children }: { children: ReactNode; }) {

  return (
    <html lang="en">
        <body>
          <MantineProvider theme={theme}>
            <Header />
            {children}
          </MantineProvider>
        </body>
    </html>
  );
}
