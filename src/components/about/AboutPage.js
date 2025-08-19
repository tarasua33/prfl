import React from 'react';

export class AboutPage extends React.Component {
  render() {
    return (
      <main className="max-w-3xl mx-auto p-4 sm:p-6">
        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-2">About me</h2>
          <p className="text-gray-700 dark:text-gray-300/90 leading-relaxed">
            Hi — I&apos;m a game developer focusing on web games with TypeScript + PixiJS. I build small playable prototypes,
            tune performance, and explore creative mechanics. This mini-portfolio shows a few demos and experiments.
          </p>
        </section>


        <section className="space-y-4">
          <div>
            <h3 className="font-semibold">Tech</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300/80">TypeScript, React, PixiJS, ThreeJS (basic), Phaser, Vite, WebGL</p>
          </div>

          <div>
            <h3 className="font-semibold">Contact</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300/80">Email: your.email@example.com — GitHub: @your-handle</p>
          </div>
        </section>
      </main>
    );
  }
}