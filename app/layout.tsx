import{Nunito} from "next/font/google"
import ClientOnly from "./api/components/ClientOnly"
import Navbar from "./api/components/navbar/Navbar"
import './globals.css'
import RegisterModal from "./api/components/modals/RegisterModal"

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
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        
        {children}
        </body>
    </html>
  )
}
