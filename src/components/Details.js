import { getValue } from "@testing-library/user-event/dist/utils";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Details = () => {
  const { id } = useParams();
  const [pet, setPet] = useState({});
  const [loading, setLoading] = useState(false);
  const [index, setIndex] = useState(0);
  const [carousel, setCarousel] = useState("");

  useEffect(() => {
    const loadPets = async () => {
      try {
        setLoading(true);
        console.log("loading");
        const res = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);
        const json = await res.json();
        setPet(json.pets[0]);
        setCarousel(json.pets[0].images[0]);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    loadPets();
  }, [id]);

  useEffect(() => {
    pet.images && setCarousel(pet.images[index]);
  }, [index]);

  return (
    <div>
      {loading ? (
        <h2>loading...</h2>
      ) : (
        <div className="details">
          <div>
            <div className="carousel">
              {pet.images && <img src={carousel} alt="animal" />}
              <div className="carousel-smaller">
                {pet.images &&
                  pet.images.map((element, ind) => (
                    <img
                      onClick={() => setIndex(ind)}
                      key={ind}
                      src={element}
                      alt="animal"
                    />
                  ))}
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
