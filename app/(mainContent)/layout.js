import '../globals.css';
import MainHeader from '@/components/Header/mainHeader';

export const metadata = {
  title: 'Lux Chairs',
  description: 'Online store.',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
      <div>
          <MainHeader />
          {children}
        </div>
      </body>
    </html>
  )
}