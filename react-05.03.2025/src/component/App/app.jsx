import { useState } from "react";
import { Layout } from "../Layout/Layout.jsx";
import { restaurants } from "../materials/mock.js";
import { Restaurant } from "../Restaurant/Restaurant.jsx";
import { Tabs } from "../Tabs/Tabs.jsx";

export const App = ({ title }) => {
  const [selectedRestaurantId, setSelectedRestaurantId] = useState(
    restaurants.length > 0 ? restaurants[0].id : null
  );
  const tabs = restaurants.map(({ id: restaurantId, name }) => ({
    title: name,
    value: restaurantId,
    active: restaurantId === selectedRestaurantId,
  }));

  // const selectRestaurantHandler = (id) => {
  //   setSelectedRestaurantId(id);
  // };
  const selectedRestaurant = () =>
    restaurants.find((restaurant) => restaurant.id === selectedRestaurantId) ??
    null;

  return (
    <Layout>
      <h1>{title}</h1>
      {restaurants.length > 0 ? (
        <div className="content">
          <Tabs tabs={tabs} onClick={setSelectedRestaurantId} />
          {Boolean(selectedRestaurant()) && (
            <Restaurant restaurant={selectedRestaurant()} />
          )}
        </div>
      ) : (
        <div className="empty-data">Данных нет</div>
      )}
    </Layout>
  );
};
