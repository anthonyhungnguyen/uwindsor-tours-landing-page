export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 text-white">
      {/* Navigation - Updated with glassmorphism */}
      <nav className="backdrop-blur-md bg-white/10 sticky top-0 z-50 border-b border-white/10">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center font-display font-bold transform rotate-45 hover:rotate-0 transition-all duration-300">
              <span className="-rotate-45">UW</span>
            </div>
            <span className="text-xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300">
              UWindsor Tours
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="relative group">
              <span className="text-gray-300 hover:text-white transition-colors">
                Features
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#gameplay" className="relative group">
              <span className="text-gray-300 hover:text-white transition-colors">
                Gameplay
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#about" className="relative group">
              <span className="text-gray-300 hover:text-white transition-colors">
                About
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#team" className="relative group">
              <span className="text-gray-300 hover:text-white transition-colors">
                Team
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-blue-900 px-6 py-2 rounded-full font-semibold hover:scale-105 transition-transform">
            Play Now
          </button>
        </div>
      </nav>

      {/* Hero Section - Updated with modern design */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20 -top-10 -left-10"></div>
          <div className="absolute w-96 h-96 bg-yellow-500 rounded-full filter blur-3xl opacity-20 -bottom-10 -right-10"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="font-display text-5xl lg:text-7xl font-bold leading-tight">
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-300 to-yellow-200">
                  Experience Campus
                </span>
                <span className="block mt-2">In A New Reality</span>
              </h1>
              <p className="text-xl text-gray-300 font-sans">
                Step into the future of campus tours with our immersive 3D
                experience. Explore, learn, and connect with UWindsor like never
                before.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="group relative px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full">
                  <span className="relative z-10 text-blue-900 font-bold">
                    Start Exploring
                  </span>
                  <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </button>
                <button className="group relative px-8 py-3 border-2 border-white/30 rounded-full hover:border-white/50 transition-colors">
                  <span className="relative z-10">Watch Demo</span>
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-white/10 backdrop-blur-sm bg-white/5">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-900/50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-lg text-gray-300">
                    Interactive Preview Coming Soon
                  </p>
                </div>
                <div className="absolute top-4 right-4 w-20 h-20 border-t-2 border-r-2 border-white/20"></div>
                <div className="absolute bottom-4 left-4 w-20 h-20 border-b-2 border-l-2 border-white/20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - New modern design */}
      <section id="team" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/20 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-300 max-w-2xl mx-auto font-sans">
              A diverse group of passionate students and developers working
              together to revolutionize the campus tour experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative">
              <div className="relative overflow-hidden rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 p-6 transition-transform hover:scale-105">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-transparent"></div>
                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-white/20">
                    <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                      <span className="text-4xl">JD</span>
                    </div>
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">John Doe</h3>
                  <p className="text-yellow-400 font-display mb-3">Lead Developer</p>
                  <p className="text-gray-300 text-center mb-4 font-sans">
                    Game architecture and core systems development. CS student
                    with a passion for game development.
                  </p>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="relative overflow-hidden rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 p-6 transition-transform hover:scale-105">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 to-transparent"></div>
                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-white/20">
                    <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
                      <span className="text-4xl">AS</span>
                    </div>
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">Alice Smith</h3>
                  <p className="text-yellow-400 font-display mb-3">3D Artist</p>
                  <p className="text-gray-300 text-center mb-4 font-sans">
                    Creating detailed 3D models of campus buildings. Visual Arts
                    student with expertise in 3D modeling.
                  </p>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="relative overflow-hidden rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 p-6 transition-transform hover:scale-105">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-transparent"></div>
                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-white/20">
                    <div className="w-full h-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                      <span className="text-4xl">MJ</span>
                    </div>
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">Mike Johnson</h3>
                  <p className="text-yellow-400 font-display mb-3">UI/UX Designer</p>
                  <p className="text-gray-300 text-center mb-4 font-sans">
                    Creating intuitive user interfaces and experiences. HCI
                    specialist and front-end developer.
                  </p>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-display text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-200 mb-2">
                3+
              </div>
              <p className="text-gray-400 font-sans">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200 mb-2">
                15+
              </div>
              <p className="text-gray-400 font-sans">Team Members</p>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-200 mb-2">
                50+
              </div>
              <p className="text-gray-400 font-sans">Buildings Modeled</p>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-200 mb-2">
                1000+
              </div>
              <p className="text-gray-400 font-sans">Beta Users</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Updated with modern design */}
      <footer className="relative pt-20 pb-10 bg-gradient-to-b from-transparent to-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center font-display font-bold">
                  UW
                </div>
                <span className="text-xl font-display font-bold">UWindsor Tours</span>
              </div>
              <p className="text-gray-400 font-sans">
                Revolutionizing campus tours through immersive 3D experiences.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#features" className="hover:text-white transition">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#gameplay" className="hover:text-white transition">
                    Gameplay
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#download" className="hover:text-white transition">
                    Download
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Discord
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    YouTube
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>University of Windsor</li>
                <li>401 Sunset Ave, Windsor, ON</li>
                <li>tours@uwindsor.ca</li>
                <li>(519) 253-3000</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2025 UWindsor Tours. Built with ♦ by the Student Dev Team
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
