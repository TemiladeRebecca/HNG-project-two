import ProductProvider from '@/src/context/ProductContext';
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
          
          <ProductProvider>
          <MainHeader />
          {children}
          </ProductProvider>
          
        </div>
      </body>
    </html>
  )
}