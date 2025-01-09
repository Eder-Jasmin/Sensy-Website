// app/layout.tsx
import './globals.css'; // Ensure this line is present

export const metadata = {
  title: 'Your App Title',
  description: 'Your App Description',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#A9A9A9', minHeight: '100vh' }}>
      {children}
      </body>
    </html>
  );
}