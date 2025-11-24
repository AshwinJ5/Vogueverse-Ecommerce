"use client";

import { useState } from "react";
import Link from "next/link";
import Sidebar from "@/app/components/Sidebar";
import AdminHeader from "@/app/components/AdminHeader";

// Mock types for our data
type InventoryItem = {
  id: number;
  size: string;
  stock: number;
};

const AddProductPage = () => {
  // --- State Management ---
  const [productName, setProductName] = useState("Vintage Leather Jacket");
  const [description, setDescription] = useState(
    "A classic vintage-style leather jacket perfect for any occasion. Made from 100% genuine leather."
  );
  const [price, setPrice] = useState(249.99);
  const [category, setCategory] = useState("Jackets & Coats");
  const [brand, setBrand] = useState("Urban Threads");

  // Mock Inventory State
  const [inventory, setInventory] = useState<InventoryItem[]>([
    { id: 1, size: "XL", stock: 5 },
    { id: 2, size: "L", stock: 12 },
    { id: 3, size: "M", stock: 2 },
  ]);

  // --- Handlers ---
  const handleAddSize = () => {
    const newId = Math.max(...inventory.map((i) => i.id), 0) + 1;
    setInventory([...inventory, { id: newId, size: "", stock: 0 }]);
  };

  const handleRemoveSize = (id: number) => {
    setInventory(inventory.filter((item) => item.id !== id));
  };

  const handleInventoryChange = (
    id: number,
    field: "size" | "stock",
    value: string | number
  ) => {
    setInventory(
      inventory.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  return (
    <div className="flex min-h-screen font-display bg-background-light text-text-light">
      {/* --- Sidebar --- */}
      <Sidebar/>

      {/* --- Main Content --- */}
      <main className="flex flex-1 flex-col">
        <AdminHeader/>
        <div className="flex-1 space-y-4 p-6 lg:p-8">

          {/* Page Header */}
          <div className="flex flex-wrap justify-between gap-4 items-center mb-8">
            <div className="flex flex-col">
              <h1 className="text-text-light text-3xl font-bold leading-tight">
                Add Product
              </h1>
              <p className="text-gray-500 text-base font-normal leading-normal mt-1">
                Add product details, images, and stock levels.
              </p>
            </div>
            <div className="flex gap-2">
              <Link href="/admin/products">
                <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-white text-text-light border border-border-light text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-50 transition-colors">
                  <span className="truncate">Cancel</span>
                </button>
              </Link>
              <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                <span className="truncate">Add Product</span>
              </button>
            </div>
          </div>

          {/* Product Info Form */}
          <div className="bg-white rounded-xl border border-border-light p-8">
            <section>
              <h2 className="text-text-light text-xl font-bold leading-tight tracking-[-0.015em]">
                Product Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {/* Name */}
                <div className="md:col-span-2">
                  <label className="text-text-light text-sm font-medium leading-normal pb-2 block">
                    Product Name
                  </label>
                  <input
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light focus:outline-none focus:ring-2 focus:ring-secondary/50 border border-border-light bg-white h-12 px-4 text-base font-normal leading-normal"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                  />
                </div>

                {/* Description */}
                <div className="md:col-span-2">
                  <label className="text-text-light text-sm font-medium leading-normal pb-2 block">
                    Description
                  </label>
                  <textarea
                    className="form-textarea w-full min-w-0 flex-1 overflow-hidden rounded-lg text-text-light focus:outline-none focus:ring-2 focus:ring-secondary/50 border border-border-light bg-white p-4 text-base font-normal leading-normal resize-none"
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>

                {/* Images Grid */}
                <div className="md:col-span-2">
                  <p className="text-text-light text-sm font-medium leading-normal pb-2">
                    Product Images
                  </p>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                    {/* Add Image Button */}
                    <div className="aspect-square rounded-lg border-2 border-dashed border-border-light flex flex-col items-center justify-center text-gray-400 hover:bg-gray-50 cursor-pointer transition-colors">
                      <span className="material-symbols-outlined text-3xl">
                        add_photo_alternate
                      </span>
                      <span className="text-xs mt-1">Add Image</span>
                    </div>
                  </div>
                </div>

                {/* Price */}
                <div className="flex flex-col h-18">
                  <label className="text-text-light text-base font-medium leading-normal pb-2">
                    Price (₹)
                  </label>
                  <input
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light focus:outline-none focus:ring-2 focus:ring-secondary/50 border border-border-light bg-white h-12 px-4 text- font-normal leading-normal"
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(parseFloat(e.target.value))}
                  />
                </div>

                {/* Category */}
                <div className="flex flex-col h-18">
                  <label className="text-text-light text-sm font-medium leading-normal pb-2">
                    Category
                  </label>
                  <select
                    className="form-select flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light focus:outline-none focus:ring-2 focus:ring-secondary/50 border border-border-light bg-white h-12 px-4 text-base font-normal leading-normal"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option>Apparel</option>
                    <option>Jackets & Coats</option>
                    <option>Accessories</option>
                  </select>
                </div>

                {/* Brand */}
                <div className="flex flex-col h-18">
                  <label className="text-text-light text-sm font-medium leading-normal pb-2">
                    Brand
                  </label>
                  <input
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light focus:outline-none focus:ring-2 focus:ring-secondary/50 border border-border-light bg-white h-12 px-4 text-base font-normal leading-normal"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                  />
                </div>

              </div>
            </section>

            <hr className="border-border-light my-8" />

            {/* Stock & Inventory Section */}
            <section>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-text-light text-xl font-bold leading-tight tracking-[-0.015em]">
                  Stock & Inventory
                </h2>
                <button
                  onClick={handleAddSize}
                  className="flex items-center gap-2 min-w-[84px] cursor-pointer justify-center overflow-hidden rounded-lg h-10 px-4 bg-secondary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-secondary/90 transition-colors"
                >
                  <span className="material-symbols-outlined text-lg">add</span>
                  <span className="truncate">Add Size</span>
                </button>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-10 gap-4 px-4">
                  <p className="col-span-4 text-sm font-semibold text-gray-600">
                    Size
                  </p>
                  <p className="col-span-4 text-sm font-semibold text-gray-600">
                    Stock Quantity
                  </p>
                  <p className="col-span-2 text-sm font-semibold text-gray-600 text-right">
                    Actions
                  </p>
                </div>

                {inventory.map((item) => (
                  <div
                    key={item.id}
                    className="border border-border-light rounded-lg p-4 grid grid-cols-10 gap-4 items-center bg-white"
                  >
                    <div className="col-span-4">
                      <input
                        className="form-input w-full rounded-lg text-text-light focus:outline-none focus:ring-2 focus:ring-secondary/50 border border-border-light h-10 px-3"
                        value={item.size}
                        onChange={(e) =>
                          handleInventoryChange(item.id, "size", e.target.value)
                        }
                        placeholder="e.g., XL"
                      />
                    </div>
                    <div className="col-span-4">
                      <input
                        className="form-input w-full rounded-lg text-text-light focus:outline-none focus:ring-2 focus:ring-secondary/50 border border-border-light h-10 px-3"
                        type="number"
                        value={item.stock}
                        onChange={(e) =>
                          handleInventoryChange(
                            item.id,
                            "stock",
                            parseInt(e.target.value) || 0
                          )
                        }
                      />
                    </div>
                    <div className="col-span-2 flex justify-end">
                      <button
                        onClick={() => handleRemoveSize(item.id)}
                        className="p-2 rounded-md hover:bg-red-50 text-primary transition-colors"
                      >
                        <span className="material-symbols-outlined text-xl">
                          delete
                        </span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AddProductPage;