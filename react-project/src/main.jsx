import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const [firstAnimal, secondAnimal, thirdAnimal] = ["Dog", "Cat", "Elephant", "Giraffe", "Lion"];


createRoot(document.getElementById("root")).render(<App />);
