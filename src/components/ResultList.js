import Pet from "./Pet";

const Resultist = ({ props }) => {
  // assume props is an array of pets
  // since its variable we used curly brackets
  //{animal, name, breed, images, location, id}
  return (
    <div className="search">
      {!props.length ? (
        <h1>No pets found!</h1>
      ) : (
        props.map((item) => {
          return (
            <Pet
              animal={item.animal}
              name={item.name}
              breed={item.breed}
              images={item.images}
              location={`${item.city}, ${item.state}`}
              id={item.id}
              key={item.id}
            />
          );
        })
      )}
    </div>
  );
};

export default Resultist;
