import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import ProductTable from "./components/ProductTable";
import ProductForm from "./components/ProductForm";

import initialProducts from "./data/initialProducts";
function App() {
  const [view, setView] = useState("list");
  const [products, setProducts] = useState(initialProducts);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [editingProduct, setEditingProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const addProduct = (newProduct) => {
    setProducts((prev) => [...prev, newProduct]);
  };

  const updateProduct = (updatedProduct) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === updatedProduct.id ? updatedProduct : p))
    );
    setEditingProduct(null);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
      setCurrentPage(1);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  const filterProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      p.category.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  const itemsPerPage = 4;
  const totalPages = Math.ceil(filterProducts.length / itemsPerPage);
  const startingIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startingIndex + itemsPerPage;
  const displayProducts = filterProducts.slice(startingIndex, endIndex);

  return (
    <div className=" p-6 max-w-4xl mx-auto  ">
      <h1 className="text-2xl font-bold mb-4">Product Management</h1>

      <ProductForm
        onSubmit={editingProduct ? updateProduct : addProduct}
        editingProduct={editingProduct}
      />

      <input
        type="text"
        className="border mb-2 p-2 w-full rounded"
        placeholder="search by name or category"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

    { filterProducts.length > 0  &&(  <div className="space-x-3 mb-6">
        <button
          onClick={() => setView("list")}
          className={` px-4 py-2 cursor-pointer rounded ${
            view === "list" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          List View
        </button>
        <button
          onClick={() => setView("card")}
          className={` px-4 py-2 rounded cursor-pointer ${
            view === "card" ? "bg-blue-600 text-white" : "bg-gray-200 "
          }`}
        >
          Card View
        </button>
      </div>)}

      {filterProducts.length === 0 ? (
        <p className="text-center text-gray-500 mt-6">No product Found</p>
      ) : view === "list" ? (
        <ProductTable products={displayProducts} onEdit={setEditingProduct} />
      ) : (
        <ProductCard products={displayProducts} onEdit={setEditingProduct} />
      )}

      {filterProducts.length > 0 && (
        <div className=" flex justify-between">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="px-4 py-2 bg-black text-white my-2 disabled:opacity-50 cursor-pointer "
          >
            Previous Page
          </button>

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="px-4 py-2 bg-black text-white my-2 disabled:opacity-50 cursor-pointer"
          >
            Next Page
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
