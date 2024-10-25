import "./globals.css"
import type { Metadata } from "next"
import 'react-toastify/dist/ReactToastify.css'; 
import { ToastContainer } from 'react-toastify';

export const metadata: Metadata = {
  title: "Technical Interview",
  description: "Solution",
}

export default function RootLayout({
  children,
}:{
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={``}>
        {children}
        <ToastContainer />
      </body>
    </html>
  )
}
