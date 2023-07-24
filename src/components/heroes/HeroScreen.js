import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = () => {

    const {heroeId} = useParams();
    
    const hero = getHeroById(heroeId);

    if (!hero) {
      return <Navigate to='/' />
  }

    const {
      superhero,
      publisher,
      alter_ego,
      first_appearance,
      characters
    } = hero;

    return (
      <div>
        <h1>HeroScreen</h1>
      </div>
    )
}