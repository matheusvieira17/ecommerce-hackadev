import { useEffect, useState } from "react";

const Carousel = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api-ecommerce-hackadev.herokuapp.com/product_all")
      .then((response) => response.json())
      .then(setData);
  }, []);

  return (
    <>
      <h2> Confira nossos outros produtos </h2>
      <main className="container">
        <section className="carousel">
          {data.map((product) => {
            const { product_name, id_product, product_price } = product;
            return (
              <>
                <div className="item" key={id_product}>
                  <div className="image">
                    <img 
                    src={`/images/product${id_product}.png`} alt="" />
                  </div>
                </div>
                <div className="infos">
                  <span className="name"> {product_name} </span>
                  <span className="price"> R$ {product_price}</span>
                </div>
              </>
            );
          })}
        </section>
      </main>
    </>
  );
};

export default Carousel;
