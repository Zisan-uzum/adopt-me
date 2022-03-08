import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  //${name}/${animal}/${breed}/${city}/${state}/${description}
  //const { name, animal, breed, city, state, description } = useParams();
  const { id } = useParams();
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const loadPets = async () => {
      const res = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);
      const json = await res.json();
      setPets(json.pets);
    };
    loadPets();
  }, [id]);

  return <h2>{pets}</h2>;
};
export default Details;
