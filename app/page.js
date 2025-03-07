export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col items-center justify-center p-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 animate-fade-in">Harshal Pawar</h1>
        <p className="text-gray-400 text-lg">Software Developer & Problem Solver</p>
      </div>

      {/* Navigation Links */}
      <nav className="mb-12">
        <ul className="flex space-x-8 text-lg">
          <li>
            <a 
              href="https://github.com/harshalpawar" 
              target="_blank" 
              className="hover:text-blue-400 transition-colors duration-200 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.91-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub
            </a>
          </li>
          <li>
            <a 
              href="mailto:harshalpawar66@gmail.com" 
              className="hover:text-blue-400 transition-colors duration-200 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Projects Section */}
      <section id="projects" className="w-full max-w-3xl">
        <h2 className="text-3xl font-semibold mb-8 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 border border-gray-700/50 hover:border-blue-500/50">
            <h3 className="text-2xl font-bold mb-3">⚡MathBlitz</h3>
            <p className="text-gray-400 mb-4">A fast-paced math game to test your skills.</p>
            <a 
              href="https://mathblitz.harshalpawar.com" 
              target="_blank" 
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
            >
              Try it here
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
          <div className="p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 border border-gray-700/50 hover:border-blue-500/50">
            <h3 className="text-2xl font-bold mb-3">🏋️LiftLog</h3>
            <p className="text-gray-400 mb-4">A workout tracking app for lifters.</p>
            <a 
              href="https://liftlog.harshalpawar.com" 
              target="_blank" 
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
            >
              Try it here
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
