// components/atoms/CardComponent.js
const Clientslid = ({ product }) => {
  return (
    <div className="card p-4 bg-white shadow-md rounded-lg">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-t-lg" />
      <h2 className="font-semibold text-lg text-gray-800 mt-4">{product.name}</h2>
      <p className="text-gray-600">{product.description}</p>
    </div>
  );
};

export default Clientslid;
