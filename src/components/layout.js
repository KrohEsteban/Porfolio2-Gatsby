import * as React from "react"
import FooterEsteban from "./footeresteban"
import Header from "./header"
import "bootswatch/dist/slate/bootstrap.min.css"

export default function Layout ({ children }) {
  

  return (
    <>
      
      
      
      <Header/>
        

      <main className="container ">
        {children}
      </main>
        
        
      <FooterEsteban/>
     
    </>
  )
}


