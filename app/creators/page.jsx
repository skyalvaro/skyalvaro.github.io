'use client';

import React, { useEffect, useState } from 'react';
import { fetchMarvelData } from '../../components/MarvelApi';
import '../../styles/marvel.css';


export default function Creators() {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    fetchMarvelData('creators')
      .then(creators => setCreators(creators))
      .catch(error => console.log(error));
  }, []);

  return (
    <section className="marvel-section">
      <h2>Creators</h2>
      <div className="container">
        {creators.map(creator => (
          <div className="marvel__characters" key={creator.id}>
            <h3 className="marvel__character__name">{creator.fullName}</h3>
            <p className="marvel__character__description">{creator.modified}</p>
            <img
              className="marvel__character__img"
              src={`${creator.thumbnail.path}.${creator.thumbnail.extension}`}
              alt={creator.title}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
