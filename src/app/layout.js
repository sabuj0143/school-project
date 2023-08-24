import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'School project',
  description: 'Generated by create next app',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <a href= "/">Home</a>
        </nav>
        <footer>Footer</footer>
        {children}
      </body>
    </html>
  )
}
export default RootLayout;
