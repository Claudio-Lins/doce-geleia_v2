import { Navbar } from '@/components/Navbar'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-PT">
      
        <head />
     
      <head />
      <body>
      <Navbar />
        {children}</body>
    </html>
  )
}
