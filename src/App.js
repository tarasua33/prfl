import React from 'react';
import { HomePage } from "./components/home/HomePage";
import { AboutPage } from "./components/about/AboutPage";
import { Nav } from './components/nav/Nav';

const games = [
  {
    id: 1,
    title: 'Unbolt Game',
    description: 'A tiny puzzle of house unbolting with ThreeJS.',
    // description: 'A tiny endless runner built with Pixi.js.',
    image: '/images/unbolt.jpeg',
    href: 'https://tarasua33.github.io/unbolt-game/',
    hrefCode: "https://github.com/tarasua33/unbolt-game/"
  }
];

const THEMES = {
  DARK: "dark",
  LIGHT: "light"
}

const STORAGE_KEY = 'site-theme';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'home',
      theme: THEMES.LIGHT
    };
  }

  toggleTheme = () => {
    this.setState(({ theme }) => {
      const newTheme = theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
      document.documentElement.classList.toggle(THEMES.DARK, newTheme === THEMES.DARK);
      localStorage.setItem(STORAGE_KEY, newTheme);
      return { theme: newTheme };
    });
  };

  setPage = (page) => this.setState({ page });

  componentDidMount() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === THEMES.DARK || saved === THEMES.LIGHT) {
      this.setState({ theme: saved });
      document.documentElement.classList.toggle(THEMES.DARK, saved === THEMES.DARK);
    } else {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.setState({ theme: prefersDark ? THEMES.DARK : THEMES.LIGHT });
      document.documentElement.classList.toggle(THEMES.DARK, prefersDark);
    }
  }

  render() {
    const { page, theme } = this.state;

    return (
      <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors duration-200">
        <Nav page={page} setPage={this.setPage} theme={theme} setTheme={this.toggleTheme} />
        <div className="pt-6">
          {page === 'home' && <HomePage games={games} />}
          {page === 'about' && <AboutPage />}
        </div>

        <footer className="max-w-5xl mx-auto p-4 text-sm text-center text-gray-600 dark:text-gray-400">
          © {
            new Date().getFullYear()
          } T.Rutkowky. Built with React + Tailwind.

          <p>
            <a target="_blank" rel="noreferrer" href="https://icons8.com/icon/5BDkNcwQqk2E/apple-arcade">Game </a>
            icon by
            <a target="_blank" rel="noreferrer" href="https://icons8.com"> Icons8</a>
          </p>
        </footer>
      </div>
    );
  }
}
