import React from 'react';
import queryString from 'query-string';
import { heroes } from '../../data/heroes';
import { HeroCard } from '../heroes/HeroCard';
import useForm from '../../hooks/useForm';
import { useLocation, useNavigate } from 'react-router-dom';

export const SearchScreen = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);

    const [ formValues, handleInputChange ] = useForm({
        searchText: q,
    });

    const { searchText } = formValues;

    const heroesFiltered = heroes;

    const handleSearch = (e) => {
        e.preventDefault();

        navigate(`?q=${ searchText }`)

    }

    return (
        <div>
            <h1>SearchScreen</h1>
            <hr />

            <div className='row'>

                <div className='col-md-5'>
                    <h4>Search Form</h4>
                    <hr />

                    <form onSubmit={handleSearch}>
                        <input name='searchText' className='form-control' type='text' placeholder='Find your hero'
                               onChange={handleInputChange} value={searchText} autoComplete='off' />
                        <button type='submit' className='btn btn-primary btn-block m-1'>Search</button>
                    </form>

                </div>

                <div className='col-md-7'>
                    <h4>Results</h4>
                    <hr />

                    {
                        heroesFiltered.map(hero => (
                            <HeroCard 
                                key={hero.id}
                                {...hero} 
                            />
                        ))
                    }

                </div>

            </div>
        </div>
    )
}