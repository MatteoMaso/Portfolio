import Header from "@/components/header"
import { Metadata } from "next"
import * as React from "react"

export const metadata: Metadata = {
  title: '404',
  description: '404',
}

export default function NotFoundPage() {
  return (
    <div className="h-screen">
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
