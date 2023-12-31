import { Footer, Header } from '@/components';
import '@/styles/globals.css';
import { AuthProvider } from 'contexts/auth';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Provider } from './provider';

// google font
const inter = Inter({ subsets: ['latin'] });

// seo Data
export const metadata: Metadata = {
  title: 'RollSync',
  description: 'Simplify Student Attendance Tracking'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Provider>
          <AuthProvider>
            <Header />
            {children}
          </AuthProvider>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
