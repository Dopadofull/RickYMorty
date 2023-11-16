import { useState } from "react";

export function useCharacters() {
  const [personajes, setPersonajes] = useState([]); 
  const [episodes, setEpisodes] = useState([]);

  function getAllCharacters() {
    return fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setPersonajes(data.results));
  }
  function getAllEpisodes(episodios) {
    return fetch(`https://rickandmortyapi.com/api/episode/${episodios}`)
      .then((res) => res.json())
      .then((data) => setEpisodes(data));
  }
  return {
    personajes,
    getAllCharacters,
    getAllEpisodes,
    episodes,
  };
}