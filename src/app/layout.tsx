import '@/globals.css'
import NavBar from "@/components/NavBar";
import localFont from "next/font/local";

export const metadata = {
  title: 'Netflix clone',
  description: 'Generated by create next app',
}

const netflix = localFont({
  src: [
    {
      path: "../fonts/NetflixSans-Bold.otf",
      weight: '600',
      style: 'normal'
    },
    {
      path: "../fonts/NetflixSans-Medium.otf",
      weight: '500',
      style: 'normal'
    },
    {
      path: "../fonts/NetflixSans-Regular.otf",
      weight: '400',
      style: "normal"
    }
  ]
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className={netflix.className}>
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  )
}
