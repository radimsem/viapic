// components
import TrackMenu from "./components/layouts/TrackMenu"

function App() {
  return (
    <section className="relative w-full min-h-screen">
      <article>
        <iframe 
          src="https://frame.mapy.cz/s/nodelonumu"
          className='w-full h-screen border-none' 
        />
      </article>
      <article className="absolute w-full bottom-0">
        <TrackMenu />
      </article>
    </section>
  )
}

export default App
