
import '../globals.css'



export const metadata = {
  title: 'HPC - Antwerp summit 2024',
  description: 'Unleashing the Power of European HPC and Quantum Computing',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='overflow-x-hidden'>{children}</body>
    </html>
  )
}
