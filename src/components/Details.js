import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = (props) => {
  let tempImage = "http://pets-images.dev-apis.com/pets/none.jpg";

  const { id } = useParams();
  const { images } = props.location.images;
  const [pets, setPets] = useState([]);
  const [chosenImage, changeImage] = useState(
    !images.length ? tempImage : images[0]
  );

  useEffect(() => {
    const loadPets = async () => {
      const res = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);
      const json = await res.json();
      setPets(json.pets);
    };
    loadPets();
  }, [id]);

  console.log("new branch");
  return (
    <div>
      {!pets.length ? (
        <h2>There is no pet</h2>
      ) : (
        pets.map((pet) => {
          return (
            <div className="details">
              <div>
                <img src={chosenImage} alt="" />
              </div>
              <div>
                <h1>{pet.name}</h1>
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
