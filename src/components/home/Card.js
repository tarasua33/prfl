import React from 'react';

export class Card extends React.Component {
  render() {
    const { item } = this.props;

    return (
      <a
        href={item.href}
        className="block rounded-2xl overflow-hidden shadow-sm transform hover:scale-105 transition-shadow transition-transform duration-200"
        target="_blank"
        rel="noreferrer"
      >
        <div className="aspect-square bg-gray-100 dark:bg-gray-800 w-full relative">

          <img
            src={item.image}
            alt={item.title}
            className="object-cover w-full h-full"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-80 mix-blend-multiply"></div>

          <div className="absolute left-3 bottom-3 right-3 text-white">

            <h3 className="text-lg font-semibold truncate">{item.title}</h3>
            <p className="text-sm opacity-90 mt-1 line-clamp-2">{item.description}</p>

            <div className="mt-3 flex gap-2">
              <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs">Play</span>
              <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs">Source</span>
            </div>

          </div>
        </div>
      </a>
    );
  }
}