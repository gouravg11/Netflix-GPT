// import { GoogleGenerativeAI } from "@google/generative-ai";

// const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_KEY);

// export const geminiModel = genAI.getGenerativeModel({
//   model: "gemini-1.5-flash",
// });
export async function fetchGeminiResponse(prompt) {
  const movieList = [
    "Inception",
    "The Dark Knight",
    "Interstellar",
    "The Matrix",
    "Pulp Fiction",
    "The Shawshank Redemption",
    "Gladiator",
    "The Godfather",
    "Avatar",
    "Titanic",
    "Forrest Gump",
    "Spiderman: No Way Home",
    "Dune",
    "Joker",
    "Avengers: Endgame",
    "The Lion King",
    "Parasite",
    "The Prestige",
    "Whiplash",
    "John Wick",
  ];

  // Shuffle the array and pick the first 5 elements
  // This ensures you get 5 unique movies every time
  const shuffled = [...movieList].sort(() => 0.5 - Math.random());
  const selectedMovies = shuffled.slice(0, 5);

  // Return as a comma-separated string to match your existing search logic
  return selectedMovies.join(", ");
}
