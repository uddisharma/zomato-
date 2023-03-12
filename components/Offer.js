import { View, Text, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import OfferCard from "./OfferCard";
const Offers = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
      .then((res) => res.json())
      .then((json) => setData(json.meals));
  }, []);
  // console.log(data);
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {data.map((e) => (
        <OfferCard
          key={e.idMeal}
          keys={e.idMeal}
          imgUrl={e.strMealThumb}
          title={e.strMeal}
        />
      ))}
    </ScrollView>
  );
};

export default Offers;
