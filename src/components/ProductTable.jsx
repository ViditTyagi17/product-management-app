import React from "react";

function ProductTable({ products, onEdit }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2 text-left">Name</th>
            <th className="border p-2 text-left">Price</th>
            <th className="border p-2 text-left">Category</th>
            <th className="border p-2 text-left">Stock</th>
            <th className="border p-2 ">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td className="border p-2">{p.name} </td>
              <td className="border p-2">₹{p.price}</td>
              <td className="border p-2">{p.category} </td>
              <td className="border p-2">{p.stock} </td>
              <td className="p-2 border ">
                <button
                  className="bg-green-600 text-white px-4 py-2   rounded cursor-pointer"
                  onClick={() => onEdit(p)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
