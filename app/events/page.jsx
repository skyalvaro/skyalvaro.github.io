'use client';

import React, { useEffect, useState } from 'react';
import { fetchMarvelData } from '../../components/MarvelApi';
import '../../styles/marvel.css';


export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchMarvelData('events')
      .then(events => setEvents(events))
      .catch(error => console.log(error));
  }, []);

  return (
    <section className="marvel-section">
      <h2>Events</h2>
      <div className="container">
        {events.map(event => (
          <div className="marvel__characters" key={event.id}>
            <h3 className="marvel__character__name">{event.title}</h3>
            <p className="marvel__character__description">{event.description}</p>
            <img
              className="marvel__character__img"
              src={`${event.thumbnail.path}.${event.thumbnail.extension}`}
              alt={event.title}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
