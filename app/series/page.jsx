'use client';

import React, { useEffect, useState } from 'react';
import { fetchMarvelData } from '../../components/MarvelApi';
import '../../styles/marvel.css';


export default function Series() {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    fetchMarvelData('series')
      .then(series => setSeries(series))
      .catch(error => console.log(error));
  }, []);

  return (
    <section className="marvel-section">
      <h2>Series</h2>
      <div className="container">
        {series.map(serie => (
          <div className="marvel__characters" key={serie.id}>
            <h3 className="marvel__character__name">{serie.title}</h3>
            <p className="marvel__character__description">{serie.description}</p>
            <img
              className="marvel__character__img"
              src={`${serie.thumbnail.path}.${serie.thumbnail.extension}`}
              alt={serie.title}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
