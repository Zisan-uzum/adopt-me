import { Link } from "react-router-dom";

const Pet = ({ animal, name, breed, images, location, id }) => {
  //{animal, name, breed, images, location, id} attributes of pet

  let temp = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length) {
    temp = images[0];
  }
  return (
    <Link to={`/Details/${id}`} className="pet" state:images>
      <div className="image-container">
        <img src={temp} alt={name} />
      </div>

      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </Link>
  );
};
export default Pet;
