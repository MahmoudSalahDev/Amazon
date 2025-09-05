import React from "react";

function HomeProducts({ productsData }) {
  const products = productsData?.data?.slice(0, 6);
  console.log(products);

  // Function to generate random text for each product
  const getRandomText = () => {
    const texts = [
      "Discover the best features of this product!",
      "A must-have item for your collection.",
      "Top-rated product with excellent reviews.",
      "Stylish, durable, and affordable.",
      "Limited stock available — act fast!",
      "Crafted with care and precision.",
    ];
    return texts[Math.floor(Math.random() * texts.length)];
  };
  const linkTexts = [
    "Explore All",
    "See more",
    "See all offers",
    "See more",
    "End of season sale",
    "See more",
  ];

  return (
    <div
      className="container px-[25px]"
      style={{ marginTop: "-6rem", position: "relative", zIndex: "999" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products?.map(({ id, title, images }, idx) => (
          <div
            key={id}
            className="card p-[15px] bg-white shadow-lg rounded-none"
          >
            <h2 className="font-bold text-[22px]">{title}</h2>
            <div className="grid grid-cols-2 gap-2 mt-[10px] mb-[15px]">
              {images?.slice(0, 4).map((image, index) => (
                <div>
                  <img
                    key={index}
                    src={image}
                    alt={title}
                    className=" w-full h-[150px]"
                  />
                  <p className="text-[12.39px] mt-2">{getRandomText()}</p>
                </div>
              ))}
            </div>
            <div>
              {" "}
              <a href="" className="font-medium text-[15px] text-[#1F8394]">
                {linkTexts[idx]}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeProducts;
