import "./Home.css"

export default function Home() {
  return (
    <main>
      <section className="landing flex items-center">
        <div className="container  relative text-center">
          <div>
            <h1 className="block text-5xl text-white font-bold">
              <span className="block md:inline">Welcome to </span>
              <span className="text-sky-400">Fish Fried Fresh</span>
            </h1>
            <h2 className="hidden md:inline-block mt-2 text-4xl">
              High quality food truck with fresh fish on ice daily!
            </h2>
          </div>

          <div className="flex justify-center mt-8">
            <button className="btn lg bg-gray-800 hover:bg-gray-900">Our Menu</button>
            <button className="btn lg default">Place an Order</button>
          </div>
        </div>
      </section>
    </main>
  )
}
