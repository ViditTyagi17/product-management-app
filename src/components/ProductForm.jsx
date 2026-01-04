import React, { useEffect, useState } from "react";

function ProductForm({ onSubmit,editingProduct }) {
  const [errors,setErrors]=useState({})
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    stock: "",
    description: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  useEffect(()=>{
    if(editingProduct){
      setFormData(editingProduct)
    }
  },[editingProduct])

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors={}

    if(!formData.name) newErrors.name="Name is required"
    if(!formData.price) newErrors.price="Price is required"
    if(!formData.category) newErrors.category="Category is required"
    if(!formData.stock) newErrors.stock="Stock is required"
    

    if(Object.keys(newErrors).length>0){
      setErrors(newErrors)
      return;
    }
    
    setErrors({});

    onSubmit({
      id: editingProduct? editingProduct.id: Date.now(),
      ...formData,
      price: Number(formData.price),
      stock: Number(formData.stock),
    });

    setFormData({
      name: "",
      price: "",
      category: "",
      stock: "",
      description: "",
    });
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="border p-4 my-4 space-y-3 rounded"
      >
        <h2 className="font-semibold"> {editingProduct?"Edit Product" :"Add Product"} </h2>
        <input
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          type="text"
          className="border p-2 w-full"
          
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

        <input
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          type="number"
          className="border p-2 w-full"
          
        />

        {errors.price && <p className="text-red-500 text-sm">{errors.price}</p>}

        <input
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          type="text"
          className="border p-2 w-full"
          
        />
        {errors.category && <p className="text-red-500 text-sm">{errors.category}</p>}
        <input
          name="stock"
          placeholder="Stock"
          value={formData.stock}
          onChange={handleChange}
          type="number"
          className="border p-2 w-full"
          
        />
        {errors.stock && <p className="text-red-500 text-sm">{errors.stock}</p>}

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          
          className="border p-2 w-full"
          
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer">
          { editingProduct? "Update Product" :   "Add Product"}
        </button>
      </form>
    </div>
  );
}

export default ProductForm;
