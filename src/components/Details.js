import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DetailsImage } from "./DetailsImage";

const Details = () => {
  const { id } = useParams();
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const loadPets = async () => {
      const res = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);
      const json = await res.json();
      setPets(json.pets);
      console.log(pets.images);
    };
    loadPets();
  }, [id]);

  return (
    <div>
      {!pets.length ? (
        <h2>There is no pet</h2>
      ) : (
        pets.map((pet) => {
          return (
            <div className="details">
              <div>
                <h1>{pet.name}</h1>
                <h2>Merhababaaa</h2>
                <h2>{`${pet.animal} — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>
                <button>Adopt {pet.name}</button>
                <p>{pet.description}</p>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};
export default Details;
