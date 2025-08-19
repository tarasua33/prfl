import React from 'react';

export class ThemeToggle extends React.Component {
  render() {
    const { theme, setTheme } = this.props;

    return (
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        aria-label="Toggle theme"
        className="p-2 rounded-lg border dark:border-gray-700 hover:scale-105 transition-transform duration-150"
      >
        {theme === 'dark' ? (
          <span aria-hidden>☀️</span>
        ) : (
          <span aria-hidden>🌙</span>
        )}
      </button>
    );
  }
}