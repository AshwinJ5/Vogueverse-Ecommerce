"use client";

import Image from "next/image";
import React from "react";
import AdminHeader from "@/app/components/AdminHeader";
import Sidebar from "@/app/components/Sidebar";
import Link from "next/link";
import { useRouter } from "next/navigation";
// Define the shape of the Product data
interface Product {
  id: number;
  name: string;
  sku: string;
  price: string;
  stock: number;
  status: string;
  stockStatus: "Normal" | "Low" | "Out" | "Inactive";
  image: string;
}

const AdminProductsPage: React.FC = () => {
  const router = useRouter();
    // Mock Data with Type Safety
    const products: Product[] = [
        {
            id: 1,
            name: "Classic White T-Shirt",
            sku: "CWT-001",
            price: "$25.00",
            stock: 150,
            status: "Active",
            stockStatus: "Normal",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1X2eMYzFMN5TOcMYS314NNZhbxUJ4XEbL44eNhgLTdcTyVG2JstFWy9XZiLdwDMBmZOHSFQyQKZdtrW2Q4hUxvAdXDd4dIuOOJBVBuDEEp-hekwaO8Cfb8efh6QaGoFZxQMdiQxffLdRAc3-BQBxtVj-n8guzGNEK7gA8h4hawJeabwFQvRTaLiNp1luH-mQxvMSa6FS3Hf9SKEqpmxRwxpEfqIj4fVDz2-HG1WaRSzQztjfUeVUKxC4Q4jGMjZFbcTcHGl_TVeMd",
        },
        {
            id: 2,
            name: "Summer Floral Dress",
            sku: "SFD-012",
            price: "$79.99",
            stock: 45,
            status: "Active",
            stockStatus: "Normal",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0HaGBS7bWPpDHl_JWtbXt81n01neyCgkjvblYzsGPIyWgOy2ffjh3M6k72Ibcsl8AWYESpM7sfaaSSKXVCGSmwDCKmfVCSVKBYxBbanFu-yp9sT2dW0T5tuqensQowUWQpxO4ePIjmnoHc8ln_R_szKFdLarzVoW5laivGdou12Fm9xBsuX42vgY3cYe4Lzym30nX3LcUxrZtUocbQlT2x_yeK7-2JPCPxMuK7P5q_ASAlkEYLOWmx621hkdzmufWva0pbzlX2zWI",
        },
        {
            id: 3,
            name: "Ripped Skinny Jeans",
            sku: "RSJ-088",
            price: "$55.50",
            stock: 8,
            status: "Low Stock",
            stockStatus: "Low",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQ2ArYxwfBpVQ8C3EBMJaqi7ZjrDGKCmZqlz79ZtiJ-7n3mjRUeygewOJEMXaSNspXi3fSb4JZ7fi0dBvZfzTNuBB9lXe5XU-gDEfjOiSLR5H5IMc-JRFNTPSjmlZyPLYRoQuQ1w0RWsmI7NOvFfiqgibcTn0EArecZZ5smb3k3dwZ_4yULUcDACKCoooD27S4FsIUrSoGTmfctLYkwq7dscug5zP_1aiqxtv_vkQJI3c0DVgW5mkgsRa29Kpo1SqlSd0yAxSU5XAX",
        },
        {
            id: 4,
            name: "Oversized Graphic Hoodie",
            sku: "OGH-034",
            price: "$60.00",
            stock: 0,
            status: "Out of Stock",
            stockStatus: "Out",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrIrNoLT2lrH6K6KU1O2g4nUARsx6hq6tUQ1cxBUuvwLSWIv5k_-ZTXjMs_2YGm_OR0s-x7nBLcvRJctpSn--n4tC1LZxUcb1LF4LF2VuFSlpAJ4UFYUFSmz6LMM9PV_baaoUIq0amd975G5r0Cc2ZJ8snlMxqYrTtt8gert68bl1xMYPgzgBBQnBF3e_GqpRjb8dw6pFdq2r5IrXGvxSqzG-n0Xf_QcCTyTcYeBtE7ScBZb-ycEyMGWsb7wExnyGot-9dv0N5UiQZ",
        },
        {
            id: 5,
            name: "Leather Ankle Boots",
            sku: "LAB-101",
            price: "$120.00",
            stock: 22,
            status: "Inactive",
            stockStatus: "Inactive",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuvzTNaj7kzzMvYEoY2I7oRhnUgyFd5dXAwaW0B_2kS7gTQtQufGFe3n-FSrCDI2Vy7dD3Rdiz-a2D9KvGWK513B030bamywpLsi18A42Sf7vjil2b4a9WLEnYYuB0huF81NoJXimtBB-DD6XGuTV-N8pFIVTtL69zDrHkoBaoUga06ezKKGMuKgJDNsciRlxX3tYxQQVx4GcMWPfGfBpgyTyoJYiN-KrxIfew3baXewOXwnePKpeIdY9ZKILO_OjsL5QYBTta2N-E",
        },
    ];

    // Helper to get status badge colors
    const getStatusColor = (status: Product["stockStatus"]): string => {
        switch (status) {
            case "Low":
                return "bg-yellow-100 text-yellow-800";
            case "Out":
                return "bg-red-100 text-red-800";
            case "Inactive":
                return "bg-gray-200 text-gray-800";
            default: // Active/Normal
                return "bg-green-100 text-green-800";
        }
    };

    return (
        <div className="bg-background-light font-display text-text-light text-text-main min-h-screen flex">
            {/* --- SideNavBar --- */}
            <Sidebar />

            {/* --- Main Content --- */}
            <main className="flex flex-1 flex-col">
                <AdminHeader />

                <div className="flex-1 space-y-4 p-6 lg:p-8">
                    {/* PageHeading */}
                    <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
                        <p className="text-text-main text-3xl font-bold tracking-tight">Products</p>
                        <Link
                            href={"/admin/products/add"}
                            className="flex min-w-[84px] items-center justify-center gap-2 rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold shadow-sm hover:bg-primary/90 transition-colors"
                        >
                            <span className="material-symbols-outlined text-lg">add</span>
                            <span className="truncate">Add New Product</span>
                        </Link>
                    </div>

                    {/* Filters & Search Bar */}
                    <div className="bg-component-bg rounded-xl p-4 mb-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
                            <div className="lg:col-span-2">
                                <label className="text-sm font-medium text-text-main block mb-2" htmlFor="search">
                                    Search
                                </label>
                                <div className="relative">
                                    <span className="material-symbols-outlined text-text-muted absolute left-3 top-1/2 -translate-y-1/2">
                                        search
                                    </span>
                                    <input
                                        className="form-input w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-sm"
                                        id="search"
                                        placeholder="Search by Product Name or SKU..."
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-text-main block mb-2" htmlFor="category">
                                    Category
                                </label>
                                <select
                                    className="form-select w-full rounded-lg border border-gray-300 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-sm px-3 py-2"
                                    id="category"
                                >
                                    <option>All Categories</option>
                                    <option>T-Shirts</option>
                                    <option>Dresses</option>
                                    <option>Jeans</option>
                                </select>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-text-main block mb-2" htmlFor="status">
                                    Status
                                </label>
                                <select
                                    className="form-select w-full rounded-lg border border-gray-300 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-sm px-3 py-2"
                                    id="status"
                                >
                                    <option>Any Status</option>
                                    <option>Active</option>
                                    <option>Inactive</option>
                                </select>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-text-main block mb-2" htmlFor="stock">
                                    Stock Level
                                </label>
                                <select
                                    className="form-select w-full rounded-lg border border-gray-300 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-sm px-3 py-2"
                                    id="stock"
                                >
                                    <option>All Stock</option>
                                    <option>In Stock</option>
                                    <option>Low Stock</option>
                                    <option>Out of Stock</option>
                                </select>
                            </div>
                            <div className="lg:col-start-4 flex justify-end gap-2">
                                <button className="cursor-pointer flex items-center justify-center rounded-lg h-10 px-4 bg-transparent text-text-main text-sm font-bold hover:bg-gray-200 transition-colors">
                                    <span className="truncate">Clear</span>
                                </button>
                                <button className="cursor-pointer flex items-center justify-center rounded-lg h-10 px-4 bg-secondary text-white text-sm font-bold shadow-sm hover:bg-secondary/90 transition-colors">
                                    <span className="truncate">Apply Filters</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Products Table */}
                    <div className="bg-background-light rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left text-text-main">
                                <thead className="text-xs text-text-muted uppercase bg-component-bg">
                                    <tr>
                                        <th className="px-6 py-3 min-w-20" scope="col">
                                            Image
                                        </th>
                                        <th className="px-6 py-3 min-w-[200px]" scope="col">
                                            Product Name
                                        </th>
                                        <th className="px-6 py-3" scope="col">
                                            SKU
                                        </th>
                                        <th className="px-6 py-3" scope="col">
                                            Price
                                        </th>
                                        <th className="px-6 py-3" scope="col">
                                            Stock
                                        </th>
                                        <th className="px-6 py-3" scope="col">
                                            Status
                                        </th>
                                        <th className="px-6 py-3" scope="col">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((product) => (
                                        <tr
                                            key={product.id}
                                            onClick={() => router.push(`/admin/products/add`)}
                                            className="bg-background-light border-b border-gray-100 hover:bg-component-bg transition-colors cursor-pointer"
                                        >
                                            <td className="px-6 py-4">
                                                <div className="relative w-12 h-12 rounded-lg overflow-hidden">
                                                    <Image
                                                        src={product.image}
                                                        alt={product.name}
                                                        fill
                                                        className="object-cover"
                                                        sizes="48px"
                                                    />
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 font-medium text-text-main whitespace-nowrap">
                                                {product.name}
                                            </td>
                                            <td className="px-6 py-4 text-text-muted">{product.sku}</td>
                                            <td className="px-6 py-4">{product.price}</td>
                                            <td className="px-6 py-4">{product.stock}</td>
                                            <td className="px-6 py-4">
                                                <span
                                                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                                                        product.stockStatus
                                                    )}`}
                                                >
                                                    {product.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-4">
                                                    <Link href={`/admin/products/${product.id}`} className="z-50 cursor-pointer text-text-muted hover:text-secondary transition-colors"  onClick={(e) => e.stopPropagation()}>
                                                        <span className="material-symbols-outlined text-xl">edit</span>
                                                    </Link>
                                                    <button  onClick={(e) => e.stopPropagation()} className="cursor-pointer text-text-muted hover:text-primary transition-colors">
                                                        <span className="material-symbols-outlined text-xl">delete</span>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination */}
                        <nav
                            aria-label="Table navigation"
                            className="flex flex-col sm:flex-row items-center justify-between p-4 border-t border-gray-200 gap-4"
                        >
                            <span className="text-sm font-normal text-text-muted">
                                Showing <span className="font-semibold text-text-main">1-5</span> of{" "}
                                <span className="font-semibold text-text-main">100</span>
                            </span>
                            <div className="inline-flex -space-x-px text-sm h-8">
                                <button className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-text-muted bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-text-main transition-colors">
                                    Previous
                                </button>
                                <button className="flex items-center justify-center px-3 h-8 leading-tight text-text-muted bg-white border border-gray-300 hover:bg-gray-100 hover:text-text-main transition-colors">
                                    1
                                </button>
                                <button
                                    aria-current="page"
                                    className="flex items-center justify-center px-3 h-8 text-secondary border border-gray-300 bg-secondary/10 hover:bg-secondary/20 hover:text-secondary font-bold transition-colors"
                                >
                                    2
                                </button>
                                <button className="flex items-center justify-center px-3 h-8 leading-tight text-text-muted bg-white border border-gray-300 hover:bg-gray-100 hover:text-text-main transition-colors">
                                    3
                                </button>
                                <button className="flex items-center justify-center px-3 h-8 leading-tight text-text-muted bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-text-main transition-colors">
                                    Next
                                </button>
                            </div>
                        </nav>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AdminProductsPage;
