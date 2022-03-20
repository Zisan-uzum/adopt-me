import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Details = () => {
  const { id } = useParams();
  const [pet, setPet] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadPets = async () => {
      try {
        setLoading(true);
        const res = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);
        const json = await res.json();
        setPet(json.pets[0]);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    loadPets();
  }, [id]);

  return (
    <div>
      {loading ? (
        <h2>loading...</h2>
      ) : (
        <div className="details">
          <div>
            <div className="carousel">
              {pet.images && <img src={pet.images[0]} alt="animal" />}
              <div className="carousel-smaller">
                {<img src="pet.images[1]"></img>}
              </div>
            </div>
            <h1>{pet.name}</h1>
            <h2>{`${pet.animal} — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>
            <button>Adopt {pet.name}</button>
            <p>{pet.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};
export default Details;
