import React, { useState } from 'react';
import './tourList.scss';
import Tour from '../Tour/Tour';
import {tourData} from '../tourData';

function Index() {

  const [tours, setTours] = useState(tourData);
  const removeTour =( id )=>  {
    console.log(id);
    const sortedTours = tours.filter(tour => tour.id !== id);
    setTours(sortedTours)
  }
  return (
    <section className="tourlist">
        {tours.map(tour => {
          return(
            <Tour key={tour.id} tour={tour} removeTour={(id) => removeTour(id)} />
          )
        })}
    </section>
  );
}

export default Index;
