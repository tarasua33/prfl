import React from 'react';
import { HomePage } from "./components/home/HomePage";
import { AboutPage } from "./components/about/AboutPage";
import { Nav } from './components/nav/Nav';

const games = [
  {
    id: 1,
    title: 'Astro Runner',
    description: 'A tiny endless runner built with Phaser.',
    image: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=1',
    href: '#',
  },
  {
    id: 2,
    title: 'Pixel Puzzler',
    description: 'Match tiles and solve puzzles.',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=2',
    href: '#',
  },
  {
    id: 3,
    title: 'Orbital',
    description: 'Physics-based orbital game.',
    image: 'https://images.unsplash.com/photo-1470104240373-bc1812eddc9f?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=3',
    href: '#',
  },
  {
    id: 4,
    title: 'Neon Drift',
    description: 'Top-down racer with neon visuals.',
    image: 'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=4',
    href: '#',
  },
  {
    id: 5,
    title: 'Block Builder',
    description: 'A tiny creative sandbox.',
    image: 'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=5',
    href: '#',
  },
  {
    id: 6,
    title: 'Shadow Leap',
    description: 'A platformer with light/shadow mechanics.',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=6',
    href: '#',
  },
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
            // new Date().getFullYear()
          } — Your Name. Built with React + Tailwind.
        </footer>
      </div>
    );
  }
}
