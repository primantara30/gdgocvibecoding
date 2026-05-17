import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Geo-Social Aid MIS',
  description: 'Enterprise Geographically Based Data Collection and Social Assistance Distribution System',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
