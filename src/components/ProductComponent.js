import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  return (
    <>
      {products.map((product) => {
        const { id, title, image, price, category, description } = product;
        return (
          <div
            className="hover:scale-y-110  relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96"
            key={id}
          >
            <Link to={`/product/${id}`}>
              <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                <img src={image} alt={title} />
              </div>

              <div className="p-6">
                <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  <span>{title.slice(0, 20)}</span>
                </h5>
                <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  <span>{price}</span> €
                </h5>
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                  <span>{description.slice(0, 59)}</span>
                </p>
              </div>
              <div className="p-6 pt-0"></div>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default ProductComponent;
