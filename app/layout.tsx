import React from "react"
import "/src/sass/main.scss"
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
   
    return (
        
        <html lang="en">
          <head> 
             
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"/>
            <title>Login</title>
          </head>
          <body>
            {children}
          </body>
        </html>
        
    )
  }