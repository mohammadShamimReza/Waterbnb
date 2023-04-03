import{Nunito} from "next/font/google"
import ClientOnly from "./api/components/ClientOnly"
import Modal from "./api/components/modals/Modal"
import Navbar from "./api/components/navbar/Navbar"
import './globals.css'

export const metadata = {
  title: 'Waterbnb',
  description: 'Waterbnb clone',
}
const font = Nunito({
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Modal title={'hello world'} isOpen />
          <Navbar />
        </ClientOnly>
        
        {children}
        </body>
    </html>
  )
}
