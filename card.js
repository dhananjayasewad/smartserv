import React, { useState, useEffect } from "react";

function Card() {
  const [product, setProduct] = useState([]);

  const fetchData = () => {
    fetch("https://s3.amazonaws.com/open-to-cors/assignment.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let list = data.results;
        setProduct(list);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {product.map((data) => (
        <div key={data.id}>
          <h4>{data.subcategory}</h4>
          <h4>{data.title}</h4>
          <h4>{data.price}</h4>
          <h4>{data.popularity}</h4>
        </div>
      ))}
    </div>
  );
}

export default Card;
