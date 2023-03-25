'use client';

import React, { useEffect, useState } from 'react';
import { fetchMarvelData } from '../../components/MarvelApi';
import '../../styles/marvel.css';


export default function Comics() {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    fetchMarvelData('comics')
      .then(comics => setComics(comics))
      .catch(error => console.log(error));
  }, []);

  return (
    <section className="marvel-section">
      <h2>Cómics</h2>
      <div className="container">
        {comics.map(comic => (
          <div className="marvel__characters" key={comic.id}>
            <h3 className="marvel__character__name">{comic.title}</h3>
            <p className="marvel__character__description">{comic.description}</p>
            <img
              className="marvel__character__img"
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              alt={comic.title}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
