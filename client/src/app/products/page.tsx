"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { FilterContent } from "../components/FilterContent";

const products = [
    {
        id: 1,
        name: "Classic Red Dress",
        brand: "Brand A",
        price: "79.99",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAm193IgFq5FdNqo40DCfB2chZatu2FiDTVi9Rgn9dWcC6aza6vDgEUOLLAg5RKRW0nM0uZWuzi7cWQUmC7o8SMfGziXi0nHeN6JRvMi93uOyhoEnz-tTogtghHVQgAzHaFSJn74dNgHenz5IeHo6MzZgxbaNmrlx9Y0E0eHd-3plHB4lGWu0VENnC6iDL1KY3xc_jDSzm9SmXs4uw9-v3SmNk8VwgmiwFM6kG6QEdsu-lmBdnJhvt7RRVG0M-HE3s36q2EPG15od86",
        alt: "Red Dress",
    },
    {
        id: 2,
        name: "Modern Fit Jeans",
        brand: "Brand B",
        price: "89.00",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0AsHF6J8RQitMwy2ccATq5sxpfGAUT1INGeRr4M4HX4VPQwg2hbnTY9-U0RMJNNn0Mq9QEdOn8sVCforY6S5zjZeEFAB9RpbwgMoBgQXA9ZXveIRPpyZ7hFNsqf_rF-FLgHKECfbbJp4G5TbV8yYX9mW6jXUlaF1lelCCXv_qq1oxvsH5EfywYTn3c1igWYjlwIjm1vjwxNdVa1BEXXSl-ct6bExMkX6lF4Wb-FeTFVuQLrFSyz_xGXURPxBvG-9YMgZH6_gmb42o",
        alt: "Jeans",
    },
    {
        id: 3,
        name: "Striped Cotton Tee",
        brand: "Brand C",
        price: "29.50",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBq4qxRWeqnZ8bYR-gloxV7kG6RN8o0ZJul_FZe0AaA4W6HWVPEnBQyjrJB-_n780RJ_E7IECA0HN7PSHorXNeM_oU5-XPL5rE6Kp85Gl6TWrFwbQ521ncuvAmN83tRaL8bymdeouvypP4dF7BIgto9TFXBwO8rSm82Hahk1y36rKinClwI0XQdFz866KrACOu-HXoMTIAgpXgDxV6YTbzpJPqb8-qsIVkEt1cdmOsxzvxHTNAgODcfqU8nGnnh7oIo73elMJWUqSL9",
        alt: "Tee",
    },
    {
        id: 4,
        name: "Leather Ankle Boots",
        brand: "Brand A",
        price: "149.99",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUSfAQV_c_UV9aO44yvUSbSzPsA1ySE8WFcvHAjxImkLH-Eh5TTjAmml1bNDmWuFfgk5WxNMsi-sMfP6Gm2dW54mt5ZoYkevp3RChvp3pY6tFzujreO6NBvnxuEwT1RDgOo1BBpm2IVzNOhX0FuHzQ04cHWMa_l73gUtX9y2sJK308-5hBNsnR1xsXwYHz7cj7OUFT3uZj1x5hroZsHVFE2dbXtswsqNGbMTIv22aTxV906XipFcxoyt_GIN0AH7AGzXhVb81rK041",
        alt: "Boots",
    },
    {
        id: 5,
        name: "V-Neck Cashmere Sweater",
        brand: "Brand B",
        price: "120.00",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBlKw8cV_zY1PfGSa349CJLQOzoxEw-zogiwaTlMBXTTtAj3sxc6H05yZWsClTlrXWC7MQMdn5huogXrcDqZr_Cy9fwrVV9CYIvMqQGJBwMhvuRdpgXfT_s5BDF6xdH-5gQCOiiPbvvobDnq102H7Y4kizIPntxIpCvgo_ENz6ghe8GF7krem4NVJsy5Jq7Re3np1rxQJp1gfWs2c-6tYR-YZhtye_8WcHVGnLHaOQ6eZJydY4fyzhQxzYb-5MXpLswpZYMy6mw9i3g",
        alt: "Sweater",
    },
    {
        id: 6,
        name: "High-Waisted Shorts",
        brand: "Brand C",
        price: "45.00",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZkkx7Ne1YNaucYAuARj2IKK4x2cv2DRmfePTC69ZgF3x06sTFidc5iuroiEx5L2NH4_xr4tT1SOsPSuhsi7Njlm1q75v8l6MTqYyU2CpSSK4-corm3wx4GxE9NaxEdt0mx8fIgk2Gn-kJCYK9LM_Dt4hxglLxIZ1spSBKPp4cavN6qXlX0o26J_-KZ83wTuFLiNXZh56OJ0MW3bMC_ge6HqbpC88Ygw1JmmVaw3WYddMS_E8RyWIWFyzySdVw7mks-2XxBh9RiuPF",
        alt: "Shorts",
    },
    {
        id: 7,
        name: "Floral Summer Skirt",
        brand: "Brand A",
        price: "55.00",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyERHe25QXGbFRkIivJVd5g8Dq9a2i9HUqYqr0_ram0FYOpOfi8q_fY7mIrNkc_e22vHoSqd7ycbbrBu7gVqskGvZM9Myq-e70hQkNCUYxz20B26g2LG8wbXU_uMIEsxQJHJNIl5vawzJYtwH1GbU50RVsqv7xZ7b4Y86fqjS7m88wo1wR93GiHiX6X0S8C0DxAhFTYiTMQ83FyShAaTGRIF_3Th0qsNXLv4QFifSFs1kNkgWE3VeQEKTTEyVUEs_629WKhclYwXiu",
        alt: "Skirt",
    },
    {
        id: 8,
        name: "Denim Jacket",
        brand: "Brand B",
        price: "99.99",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzzb0rBDlkNsQ_ZSyVsbPzdjmm40_Z9A8pDLQQSVAmKBa0suXgjWMd1JoVhkdgPzpv1QpbC2atv7vIKlCqWAU6WaXRMD_vUEVqyhVFpg4yaAX5vIoF6qiSUiOaXDxHWx0wl9ao5BwRaXwBKxt3ixo5Fu8Qgx7KmGVljtI5c_gJISvnAGLhP3QuLxN1TzxQO9FzDWEeyg9pI8SlLlGGgPU05Sbl9np1RUDQB8oRtxKmJSSxf6twR2F8HfwjCQQpsJjgRePJySl1xROn",
        alt: "Jacket",
    },
];

const AllProducts = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    return (
        <div className="font-display bg-background-light text-text-light min-h-screen flex flex-col w-full overflow-x-hidden">
            <Navbar />

            {/* --- MOBILE FILTER DRAWER (Overlay) --- */}
            <div
                className={`fixed inset-0 bg-black/50 z-60 lg:hidden transition-opacity duration-300 ${
                    isFilterOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                onClick={() => setIsFilterOpen(false)}
            ></div>

            <div
                className={`fixed top-0 right-0 h-full w-[300px] bg-white z-70 shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden ${
                    isFilterOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="p-5 h-full flex flex-col">
                    <div className="flex justify-between items-center mb-6 border-b pb-4">
                        <h3 className="text-xl font-bold">Filters</h3>
                        <button onClick={() => setIsFilterOpen(false)}>
                            <span className="material-symbols-outlined text-2xl">close</span>
                        </button>
                    </div>
                    <div className="flex-1 overflow-y-auto hide-scrollbar">
                        <FilterContent />
                    </div>
                </div>
            </div>

            <main className="container mx-auto px-4 sm:px-6 py-8 grow">
                {/* Header Area */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                    <div className="flex items-center gap-3 w-full sm:w-auto">
                        <button
                            onClick={() => setIsFilterOpen(true)}
                            className="lg:hidden flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 h-10 border border-border-light rounded-lg bg-white text-text-light font-normal hover:border-primary hover:text-primary transition-colors"
                        >
                            <span className="material-symbols-outlined text-lg">tune</span>
                            Filters
                        </button>

                        <div className="flex items-center gap-2 flex-1 sm:flex-none">
                            <select className="w-full sm:w-auto rounded-lg border border-border-light bg-white text-text-light focus:border-primary focus:ring-primary/50 text-sm h-10 px-3">
                                <option>Sort by: Newest</option>
                                <option>Sort by: Popularity</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* 
                    MODIFIED LAYOUT:
                    1. Removed gap-8 on desktop (lg:gap-0) to handle border manually.
                    2. Removed items-start (default is stretch) so the sidebar border spans full height.
                */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-y-8 lg:gap-x-0">
                    {/* --- DESKTOP SIDEBAR (Static & Full Height) --- */}
                    {/* 
                        1. Removed sticky, top-24, overflow-y-auto.
                        2. Added lg:border-r to create the vertical line.
                        3. Added lg:pr-8 for spacing between content and line.
                    */}
                    <aside className="hidden lg:block col-span-1 lg:border-r lg:border-gray-200 lg:pr-8 h-full">
                        <FilterContent />
                    </aside>

                    {/* --- PRODUCT GRID --- */}
                    {/* Added lg:pl-8 for spacing on the right side of the line */}
                    <div className="col-span-1 lg:col-span-3 lg:pl-8">
                        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                            {products.map((product) => (
                                <Link
                                    href={`/products/${product.id || "001"}`}
                                    key={product.id}
                                    className="flex flex-col gap-3 group text-center group"
                                >
                                    <div className="relative w-full aspect-3/4 overflow-hidden rounded-lg bg-gray-100">
                                        <Image
                                            fill
                                            src={product.image}
                                            alt={product.alt || product.name}
                                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />

                                        {/* Wishlist Button (Top Right) - Share button removed */}
                                        <div className="absolute top-2 right-2 md:top-3 md:right-3 flex flex-col gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 z-10">
                                            <Link
                                                href="/wishlist"
                                                className="h-8 w-8 rounded-full bg-white/90 shadow-sm flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-text-light"
                                            >
                                                <span className="material-symbols-outlined text-lg">favorite</span>
                                            </Link>
                                        </div>

                                        {/* Add to Cart Button (Bottom Overlay) */}
                                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[90%] opacity-100 md:opacity-0 md:translate-y-2.5 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300 z-10">
                                            <Link href="/cart" className="w-full">
                                                <button className="w-full h-9 md:h-11 bg-primary text-white text-xs md:text-sm font-bold tracking-wider shadow-lg rounded hover:bg-opacity-90">
                                                    ADD TO CART
                                                </button>
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Product Details */}
                                    <div className="mt-1 md:mt-2">
                                        <Link href={`/products/${product.id || "001"}`}>
                                            <p className="text-sm md:text-base font-medium leading-normal truncate text-text-light group-hover:text-primary transition-colors">
                                                {product.name}
                                            </p>
                                        </Link>
                                        <p className="text-secondary-text-light text-xs font-medium uppercase">
                                            {product.brand}
                                        </p>
                                        <p className="text-text-light text-sm font-bold mt-1">₹ {product.price}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* Pagination */}
                        <nav aria-label="Pagination" className="flex items-center justify-center mt-12">
                            <ul className="inline-flex items-center -space-x-px text-sm">
                                <li>
                                    <button className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-secondary-text-light bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-text-light transition-colors">
                                        Previous
                                    </button>
                                </li>
                                <li>
                                    <button className="flex items-center justify-center px-3 h-8 text-white border border-primary bg-primary hover:bg-primary/90">
                                        1
                                    </button>
                                </li>
                                <li>
                                    <button className="flex items-center justify-center px-3 h-8 leading-tight text-secondary-text-light bg-white border border-gray-300 hover:bg-gray-100 hover:text-text-light transition-colors">
                                        2
                                    </button>
                                </li>
                                <li>
                                    <button className="flex items-center justify-center px-3 h-8 leading-tight text-secondary-text-light bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-text-light transition-colors">
                                        Next
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default AllProducts;
