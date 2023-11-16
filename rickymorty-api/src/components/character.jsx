import { useEffect, useState } from "react";
import { useCharacters } from "../hooks/useCharacters";
import "./character.css";
import { Svg } from "./svg";
export function Milka() {
  const { personajes, getAllCharacters, getAllEpisodes, episodes } =
    useCharacters(); 
  
  useEffect(() => {
    getAllCharacters();
  }, []);

  useEffect(() => {
    if (length.episodes > 1) {
      console.log(episodes);
    } else {
    }

  }, [episodes]);

  let episodios = [];

  const handleClick = (episodes) => {
    episodes.map((episode) => episodios.push(episode.slice(40)));
    getAllEpisodes(episodios);
  };

  return (
    <>
      <header className="linkss">
        <div className="svg">
          <Svg />
        </div>
        <div className="links">
          <ul>
            <li>
              <p>Docs</p>
            </li>
            <li>
              <p>About</p>
            </li>
            <li>
              <span className="span">support us</span>
            </li>
          </ul>
        </div>
      </header>
      <div className="morty">
        <h1> The Rick and Morty API</h1>
      </div>

      <div className="capsula">
        <ul className="contenedor">
          {personajes.map((personaje, index) => (
            <li key={index}>
              <div className=" mi_div">
                <img src={personaje.image} />
                <div className="texto">
                  <h2>{personaje.name}</h2>
                  <p>
                    {personaje.status}-{personaje.species}
                  </p>
                  <p>Last known location:</p>
                  <h4>{personaje.origin.name}</h4>
                  <p
                    className="episodes"
                    onClick={() => handleClick(personaje.episode)}
                  >
                    episodes
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <footer>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </footer>
    </>
  );
}