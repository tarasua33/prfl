import React from 'react';
import { ThemeToggle } from "./ThemeToggle";

export class Nav extends React.Component {
  render() {
    const { page, setPage, theme, setTheme } = this.props;

    return (
      <header className="w-full border-b dark:border-gray-800 bg-white/60 dark:bg-gray-900/60 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-xl font-bold">My Mini Games</div>
            <nav className="hidden sm:flex gap-2">
              <button
                onClick={() => setPage('home')}
                className={`px-3 py-1 rounded-md ${page === 'home' ? 'bg-gray-200 dark:bg-gray-800' : 'hover:bg-gray-100 dark:hover:bg-gray-800/60'} transition-colors`}
              >
                Home
              </button>
              <button
                onClick={() => setPage('about')}
                className={`px-3 py-1 rounded-md ${page === 'about' ? 'bg-gray-200 dark:bg-gray-800' : 'hover:bg-gray-100 dark:hover:bg-gray-800/60'} transition-colors`}
              >
                About me
              </button>
            </nav>
          </div>


          <div className="flex items-center gap-3">
            <div className="sm:hidden">
              <select
                value={page}
                onChange={(e) => setPage(e.target.value)}
                className="px-2 py-1 rounded-md bg-transparent border dark:border-gray-700"
              >
                <option value="home">Home</option>
                <option value="about">About me</option>
              </select>
            </div>


            <ThemeToggle theme={theme} setTheme={setTheme} />
          </div>
        </div>
      </header>
    );
  }
}