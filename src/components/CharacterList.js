import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";


export default function CharacterList() {
    // TODO: Add useState to track data from useEffect
    const [characters, setCharacters] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {

        axios.get('https://rickandmortyapi.com/api/character/')
            .then((res) => {
                setCharacters(res.data.results);


            })
            .catch(err => console.log(err.message))

        //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    }, []);


    const handleSearch = event => setSearch(event.target.value);
    return (
        <section className="character-list">
            <h2>Characters: </h2>
            <SearchForm handleSearch={handleSearch} search={search}/>
            <div>
                {
                   characters && characters.map(character => {
                        return character.name.toLowerCase().includes(search.toLowerCase()) ? (


                       <Link to={`/character/${character.id}`}>

                            <CharacterCard character={character} />
                        </Link>
                            ) :  null;

                    })
                }
            </div>
        </section>
    );
}
