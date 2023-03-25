import '../styles/globals.css'
import { Navigation } from '../components/Navigation'

export default function RootLayout ({ children }) {
  return (
    <html>
      <head>
        <title>Todo sobre Marvel Comics</title>
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
