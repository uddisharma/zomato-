import { View, Text, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import CategoryCard from "./CategoryCard";
const Categories = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((json) => setData(json.categories));
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
        <CategoryCard
          key={e.idCategory}
          imgUrl={e.strCategoryThumb}
          title={e.strCategory}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;
