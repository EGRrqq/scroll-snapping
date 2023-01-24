const App = () => {
  return (
      <div className="snap-y snap-mandatory h-screen w-screen overflow-x-hidden">
          <div className="snap-start bg-fuchsia-200 h-screen w-screen flex items-center justify-center text-5xl">1</div>
          <div className="snap-start bg-cyan-200 h-screen w-screen flex items-center justify-center text-5xl">2</div>
          <div className="snap-start bg-yellow-200 h-screen w-screen flex items-center justify-center text-5xl">3</div>
      </div>
  )
}

export default App
