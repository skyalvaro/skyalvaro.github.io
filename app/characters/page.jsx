'use client'

import React, { useEffect, useState } from 'react';
import { fetchMarvelData } from '../../components/MarvelApi';
import '../../styles/marvel.css';

export default function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchMarvelData('characters')
      .then(characters => setCharacters(characters))
      .catch(error => console.log(error));
  }, []);

  return (
    <section className="marvel-section">
      <h2>Personajes</h2>
      <div className="container">
        {characters.map(character => (
          <div className="marvel__characters" key={character.id}>
            <h3 className="marvel__character__name">{character.name}</h3>
            <p className="marvel__character__description">{character.description}</p>
            <img
              className="marvel__character__img"
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt={character.name}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
