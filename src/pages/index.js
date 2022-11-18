import * as React from "react"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout pageTitle="Portfolio">
      <div className="container mx-auto md:mt-11 mt-14 p-2">
        <p className="text-4xl text-center">@MatteoMaso</p>
      </div>

      <div className="container w-full p-2 mt-1">
        <div className="p-2 grid grid-cols-1 place-items-center">
          <div className="md:w-2/5 m-6">
            <h2 className="text-2xl" >Hey there <span role="img" aria-label="hand waveing" >&#128075;</span></h2>
            <p className="text-justify text-xl tracking-wider mt-5 mb-3">
              Inspired by science to improve people’s life and the
              environment, I’m a software engineer with a wide interest
              range and a background in fast prototyping tech solutions.
            </p>
          </div>
        </div>
      </div>

      <div className="container md:rounded-md  w-screen bg-blue-700 my-5">
        <div className="p-2 grid grid-cols-1 place-items-center">
          <div className="md:w-2/5 m-6 text-white text-3xl text-center tracking-wider">
            <h2>Take a look at my career path</h2>
            <div className="flex justify-center">
              <a href="/cv" className="border-white border-2 hover:shadow-2xl rounded-md m-5 md:w-1/2 w-2/3 p-1"><h2>CV</h2></a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage