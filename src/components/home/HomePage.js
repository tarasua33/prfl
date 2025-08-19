import React from 'react';
import { Card } from "./Card";

export class HomePage extends React.Component {
  render() {
    const { games } = this.props
    return (
      <main className="max-w-5xl mx-auto p-4 sm:p-6">
        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Mini Games</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300/80">Click a card to open the game. Replace placeholders with your real links and images.</p>
        </section>

        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {games.map((g) => (
              <Card key={g.id} item={g} />
            ))}
          </div>
        </section>
      </main>
    );
  }
}