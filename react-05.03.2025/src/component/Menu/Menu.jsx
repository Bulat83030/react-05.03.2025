import { Dish } from "../Dish/Dish.jsx";
export const Menu = ({ menu }) => {
  return (
    <>
      <h3>Menu</h3>
      <ul className="menu">
        {menu.map((dish) => {
          return (
            <li key={dish.id}>
              <Dish dish={dish} />
            </li>
          );
        })}
      </ul>
    </>
  );
};
