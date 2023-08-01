import React, { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';
import { heroImages } from '../../helpers/heroImages';


export const HeroScreen = () => {

    const {heroeId} = useParams();
    const navigate = useNavigate()
    
    //const hero = getHeroById(heroeId);
    const hero = useMemo(() => getHeroById(heroeId), [heroeId]);

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

    const handleReturn = () => {
       navigate(-1);
    }

    return (
        <div className='row mt-5'>

            <div className='col-md-4'>
                {/* <img src={`../assets/heroes/${heroeId}.jpg`} alt={superhero} 
                    className='img-thumbnail animate__animated animate__fadeInLeft' /> desde public/assets */} 

                <img src={heroImages(`./${heroeId}.jpg`)} alt={superhero} 
                    className='img-thumbnail animate__animated animate__fadeInLeft' />
            </div>

            <div className='col-md-8'>
                <h3>{superhero}</h3>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'><b>Alter ego: </b>{alter_ego}</li>
                    <li className='list-group-item'><b>Publisher: </b>{publisher}</li>
                    <li className='list-group-item'><b>First appearance: </b>{first_appearance}</li>
                </ul>

                <h5>Characters</h5>
                <p>{characters}</p>

                <button onClick={handleReturn} className='btn btn-info mb-3'>Return</button>

            </div>
        </div>
    )
}