import "./ProdutCard.css";
const ProductCard = ({ Product }) => {
  return (
    <div className="ProductCard w-[15rem] m-3 transition-all cursor-pointer hover:shadow-2xl ">
      <div className="h-[20rem] hover:shadow-2xl">
        <img
          src={Product?.imageUrl}
          alt="img"
          className="w-full h-full object-cover object-left-top"
        />
      </div>
      <div className="textPart bg-white p-3">
        <div>
          <p className="font-bold opacity-60">{Product.brand}</p>
          <p>{Product.title}</p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="font-semibold">{Product.discountPrice}</p>
          <p className="line-through opacity-50">{Product.price}</p>
          <p className="text-green-600 font-semibold">
            {Product.discountPercent}% off
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
