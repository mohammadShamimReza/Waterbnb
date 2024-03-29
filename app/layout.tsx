import{Nunito} from "next/font/google"
import ClientOnly from "./components/ClientOnly"
import Navbar from "./components/navbar/Navbar"
import './globals.css'
import RegisterModal from "./components/modals/RegisterModal"
import ToasterProvider from "./Providers/ToasterProvider"

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
          <ToasterProvider />
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        
        {children}
        </body>
    </html>
  )
}
