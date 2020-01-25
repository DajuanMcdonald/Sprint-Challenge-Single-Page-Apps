import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  margin: 5%;
  overflow: hidden;
`;

const CardImg = styled.img`
  margin: 2%;
  width: 300px;
`;

const CardInfo = styled.div`
margin: 2%;
`;



export default function CharacterCard({character, detail}) {
  return (
      <CardWrapper>
        <CardImg src={character.image} alt={character.name}/>
        <CardInfo>
            <span>Name: </span>
            <h3>{character.name}</h3>
        </CardInfo>
          {detail ? (
              <>
                 <CardInfo>
                  <span>Species: </span>
                  <h3>{character.species}</h3>
                 </CardInfo>
                 <CardInfo>
                  <span>Status: </span>
                  <h3>{character.status}</h3>
                 </CardInfo>
                 <CardInfo>
                     <span>Location: </span>
                     <h3>{character.location.name} && {character.location}</h3>
                 </CardInfo>
              </>
          ) : null}

      </CardWrapper>
  )
};
