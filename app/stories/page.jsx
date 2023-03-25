'use client';

import React, { useEffect, useState } from 'react';
import { fetchMarvelData } from '../../components/MarvelApi';
import '../../styles/marvel.css';


export default function stories() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetchMarvelData('stories')
      .then(stories => setStories(stories))
      .catch(error => console.log(error));
  }, []);

  return (
    <section className="marvel-section">
      <h2>Stories</h2>
      <div className="container">
        {stories.map(story => (
          <div className="marvel__characters" key={story.id}>
            <h3 className="marvel__character__name">{story.title}</h3>
            <p className="marvel__character__description">{story.description}</p>
            {/* <img
              className="marvel__character__img"
              src={`${story.thumbnail.path}.${story.thumbnail.extension}`}
              alt={story.title}
            /> */}
          </div>
        ))}
      </div>
    </section>
  );
}
