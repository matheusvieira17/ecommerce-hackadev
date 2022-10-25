import { useEffect, useState, useRef } from "react";
import "./Carousel.css";

const Carousel = () => {
  const scroolCarousel = useRef(null);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api-ecommerce-hackadev.herokuapp.com/product_all")
      .then((response) => response.json())
      .then(setData);
  }, []);

  const handleLeftClick = (event) => {
    event.preventDefault();
    scroolCarousel.current.scrollLeft -= scroolCarousel.current.offsetWidth;
  };

  const handleRightClick = (event) => {
    event.preventDefault();
    scroolCarousel.current.scrollLeft += scroolCarousel.current.offsetWidth;
  };

  return (
    <>
      <h2> Confira nossos outros produtos! </h2>
      <main className="container">
        <section className="carousel" ref={scroolCarousel}>
          {data.map((product) => {
            const { product_name, id_product, product_price } = product;
            const formattedPrice = product_price.toFixed(2).
            replace(".", ",")
            return (
              <>
                <div className="item" key={id_product}>
                  <div className="image">
                    <img src={`/images/product${id_product}.png`} alt="" />
                  </div>

                  <div className="infos">
                    <span className="name"> {product_name} </span>
                    <span className="price"> R${formattedPrice}</span>
                  </div>
                </div>
              </>
            );
          })}
        </section>
      </main>

      <div className="buttons">
        <button onClick={handleLeftClick}>
          <img src="/images/seta.png" alt="Seta para a esquerda" />
        </button>

        <button onClick={handleRightClick}>
          <img src="/images/seta.png" alt="Seta para a direita" />
        </button>
      </div>
    </>
  );
};

export default Carousel;
