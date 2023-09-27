import Header from "@/components/header"
import '@/styles/globals.css'
import * as React from "react"

export default function NotFound() {
  // TODO: Add a 404 page nicer than this
  return (
    <div className="h-screen">
      <title>404</title>
      <Header />
      <div className="flex-grow">
        <div className="h-full flex items-center justify-center mt-60">
          <div className="font-bold text-5xl ">
            <p>Whoopse!</p>
          </div>
        </div>
      </div>
    </div>
  )
}
