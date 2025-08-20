import React from 'react';

export class Card extends React.Component {
  render() {
    const { item } = this.props;

    return (
      <p
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

          <div className="absolute left-3 top-3 right-3 text-white rounded-md bg-dark/20">

            <h3 className="px-3 py-1 text-lg font-semibold truncate">{item.title}</h3>
            <p className="px-3 py-1 text-sm opacity-90 mt-1 line-clamp-2">{item.description}</p>

          </div>
          <div className="absolute left-3 bottom-3 right-3 text-white">

            <div className="mt-3 flex gap-2">

              <a
                target="_blank" rel="noopener noreferrer"
                href={item.href} className="inline-block hover:scale-105 hover:bg-dark/20 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-base">Play</a>
              <a
                target="_blank" rel="noopener noreferrer"
                href={item.hrefCode} className="inline-block hover:scale-105 hover:bg-dark/20 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-base">Source</a>
            </div>

          </div>
        </div>
      </p>
    );
  }
}