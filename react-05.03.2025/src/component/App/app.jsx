import { useState } from "react";
import { Layout } from "../Layout/Layout.jsx";
import { restaurants } from "../materials/mock.js";
import { Restaurant } from "../Restaurant/Restaurant.jsx";
import { Tabs } from "../Tabs/Tabs.jsx";

export const App = ({ title }) => {
  const [selectedRestaurantId, setSelectedRestaurantId] = useState(
    restaurants.length > 0 ? restaurants[0].id : null
  );
  const tabs = restaurants.map(({ id, name }) => ({
    title: name,
    value: id,
    active: id === selectedRestaurantId,
  }));

  const selectRestaurantHandler = (id) => {
    setSelectedRestaurantId(id);
  };

  const getSelectedRestaurant = () => {
    return (
      restaurants.find(
        (restaurant) => restaurant.id === selectedRestaurantId
      ) ?? null
    );
  };
  return (
    <Layout>
      <h1>{title}</h1>
      {restaurants.length > 0 ? (
        <div className="content">
          <Tabs tabs={tabs} onClick={selectRestaurantHandler} />
          {Boolean(getSelectedRestaurant()) && (
            <Restaurant restaurant={getSelectedRestaurant()} />
          )}
        </div>
      ) : (
        <div className="empty-data">Данных нет</div>
      )}
    </Layout>
  );
};
