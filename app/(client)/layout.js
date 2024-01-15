
import '../globals.css'



export const metadata = {
  title: 'EuroHPC Summit 2024- Antwerp',
  description: 'Unleashing the Power of European HPC and Quantum Computing',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='overflow-x-hidden'>{children}</body>
    </html>
  )
}
