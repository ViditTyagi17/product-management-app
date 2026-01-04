import React from "react";

function ProductCard({ products,onEdit }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {products.map((p) => (
        <div className="border p-4 rounded" key={p.id}>
          <h2 className="font-semibold">{p.name} </h2>
          <p>₹{p.price} </p>
          <p className="text-sm text-gray-600">{p.category} </p>
          <p className="text-sm">Stock: {p.stock} </p>
          <p  className="text-sm text-gray-500">{p.description} </p>
          <button className="bg-green-600 text-white px-4 py-2 mt-1 rounded cursor-pointer " onClick={()=>onEdit(p)}>Edit </button>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
