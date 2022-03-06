import { useEffect, useState } from "react";
import Resultist from "./ResultList";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
const SearchParams = () => {
  const [location, updateLocation] = useState("Seattle, WA");
  const [animal, updateAnimal] = useState(ANIMALS[0]);
  const [breeds, updateBreeds] = useState([]);
  const [chosenBreed, setBreed] = useState("");
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const loadBreed = async () => {
      const response = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}&location=${location}`
      );
      const data = await response.json();
      updateBreeds(data.breeds);
    };
    loadBreed();
  }, [animal, location]);

  useEffect(() => {
    loadPets();
  }, [animal, location, chosenBreed]);

  const loadPets = async () => {
    const response = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${chosenBreed}`
    );

    const data = await response.json();
    setPets(data.pets);
  };
  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          loadPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            type="text"
            value={location}
            id="location"
            placeholder="Location"
            onChange={(location) => {
              updateLocation(location.target.value);
            }}
            onBlur={(location) => {
              updateLocation(location.target.value);
            }}
          />
        </label>
        <label htmlFor="animal">
          Animals
          <select
            id="animal"
            value={animal}
            onChange={(animal) => {
              updateAnimal(animal.target.value);
            }}
            onBlur={(animal) => {
              //we use onblur to set changes in input field after focusing outside of input area.
              updateAnimal(animal.target.value);
            }}
          >
            <option />
            {ANIMALS.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
            ;
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={chosenBreed}
            disabled={!breeds.length}
            onChange={(breed) => setBreed(breed.target.value)}
            onBlur={(breed) => setBreed(breed.target.value)}
          >
            <option />
            {breeds?.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      <Resultist props={pets} />
    </div>
  );
};

export default SearchParams;
