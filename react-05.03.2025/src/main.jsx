import { createRoot } from "react-dom/client";
import { restaurants } from "../materials/mock";
import { StrictMode } from "react";

const root = document.getElementById("root");

createRoot(root).render(
  <StrictMode>
    {restaurants.map(({ name, menu, reviews }) => (
      <>
        <h2>{name}</h2>
        <h3>Menu</h3>
        <ul>
          {menu.map(({ name }) => (
            <li>{name}</li>
          ))}
        </ul>
        <h3>Отзывы</h3>
        <ul>
          {reviews.map(({ text }) => (
            <li>{text}</li>
          ))}
        </ul>
      </>
    ))}
  </StrictMode>
);
