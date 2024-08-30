import pokemon from "./data.js";
import Pokecard from "./Pokecard.jsx";

export default function Pokedex() {
  return (
    <div className="Pokedex">
      <h1>Pokedex</h1>
      <div className="Pokedex-cards">
        {pokemon.map((p) => (
          <Pokecard
            key={p.id}
            id={p.id}
            name={p.name}
            type={p.type}
            base_experience={p.base_experience}
          />
        ))}
      </div>
    </div>
  );
}
