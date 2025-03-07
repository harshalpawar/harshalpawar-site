

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">Harshal Pawar</h1>

      {/* Navigation Links */}
      <nav className="mb-8">
        <ul className="flex space-x-6 text-lg">
          
          <li><a href="https://github.com/harshalpawar" target="_blank" className="hover:text-blue-400">GitHub</a></li>
          <li><a href="mailto:harshalpawar66@gmail.com" className="hover:text-blue-400">Contact</a></li>
        </ul>
      </nav>

      {/* Projects Section */}
      <section id="projects" className="w-full max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="space-y-4">
          <div className="p-4 bg-gray-800 rounded-lg">
            <h3 className="text-xl font-bold">MathBlitz</h3>
            <p className="text-gray-400">A fast-paced math game to test your skills.</p>
            <a href="https://harshalpawar.com/mathblitz" target="_blank" className="text-blue-400 hover:underline">Live Demo</a>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg">
            <h3 className="text-xl font-bold">LiftLog</h3>
            <p className="text-gray-400">A workout tracking app for lifters.</p>
            <a href="https://harshalpawar.com/liftlog" target="_blank" className="text-blue-400 hover:underline">Live Demo</a>
          </div>
        </div>
      </section>
    </main>
  );
}
