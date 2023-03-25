import '../styles/globals.css'
import { Navigation } from '../components/Navigation'

export default function RootLayout ({ children }) {
  return (
    <html>
      <head>
        <title>Bienvenido a mi portfolio con Next.js</title>
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
