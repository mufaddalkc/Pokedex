export default function Pokecard(props) {
  const { id, name, type, base_experience } = props;
  let pokeImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <div className="Pokecard">
      <h1 className="Pokecard-title">{name}</h1>
      <div className="Pokecard-image">
        <img src={pokeImg} alt={name} />
      </div>
      <div className="Pokecard-data">
        <p>Type: {type}</p>
        <p>EXP: {base_experience}</p>
      </div>
    </div>
  );
}

Pokecard.defaultPokemon = {
  id: 4,
  name: "Charmander",
  type: "fire",
  base_experience: 62,
};
