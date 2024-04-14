import { useState } from "react";
import "./Jokes.css";

const Jokes = () => {
  const [joke, setJoke] = useState("");
  const [category, setCategory] = useState("");

  const getRandomJoke = async () => {
    category === "Simpsons"
      ? alert("This category is not available, please pick another one")
      : clearJoke();
    const response = await fetch(
      `https://api.chucknorris.io/jokes/random?category=${category}`
    );
    const data = await response.json();
    setJoke(data.value);
  };

  const clearJoke = () => {
    setJoke("");
  };
  return (
    <div>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value='dev'>Programming</option>
        <option value='history'>History</option>
        <option value='career'>Career</option>
        <option value='science'>Science</option>
        <option value='simpsons'>Simpsons</option>
      </select>
      <button onClick={getRandomJoke}>Get a Joke!</button>
      {joke && (
        <div>
          <div className='joke-card'>
            <p>{joke}</p>
          </div>
          <p className='another-joke'>
            Do you want another joke? Please select a category
          </p>
        </div>
      )}
    </div>
  );
};

export default Jokes;
