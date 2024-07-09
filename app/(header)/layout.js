import '../globals.css';

export const metadata = {
  title: 'Lux Chair',
  description: 'Online store.',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        {children}
        </body>
    </html>
  )
}