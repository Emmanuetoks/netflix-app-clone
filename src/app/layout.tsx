import '@/globals.css'
import NavBar from "@/components/NavBar";

export const metadata = {
  title: 'Netflix clone',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main>
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  )
}
