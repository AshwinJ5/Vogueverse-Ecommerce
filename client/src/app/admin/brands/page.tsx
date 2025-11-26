"use client";

import Image from "next/image";
import Sidebar from "@/app/components/Sidebar";
import AdminHeader from "@/app/components/AdminHeader";

// Mock Data
const brands = [
    {
        id: 1,
        name: "Chic Threads",
        status: "Active",
        products: 124,
        logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1jbN_pKXtXgjcXGDsy2SAgGVZkXKMBXh9GT3FSKGXui9qciEfvzNiKoC5CAMLVh9Afu0BDEdcZKS3zcW3zG9h_3RAOGIXZDBWSrE-JspHjdjXsgAey_JbC3yNQzMre1Nowk1R2zMhjDw4ElsJIzsaCROF3sGjZbyS858qK0pPhO6aoYHkdfuUZOLm5NeK1mtLPFzDHjd5yOUpTJq4BcU5CGBShFo5iOrLNOgwf5_gvBTrDhX2h8tNH95XDe_svUE9XQY8Djvf--6E",
    },
    {
        id: 2,
        name: "Vogue Venture",
        status: "Active",
        products: 88,
        logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkNxXrm_op9_7zk5V7fUJ1j0oif0sq5PFF4stsjLn8wRrejxZuz41QH6i0fClXnHA7yaKovTt0USSS8A06J_hIWc5M7WdRFLhmYCQRvoQAB9Kp6AUfwZiSpMYT4r_0mKOXd4gG_V3EOaFBWZMYN8dhlkTeMbPfCCUTGyM_3Zz03kNdfssSOeBG2T-VB2_lxjAFrH-2P4cFcVjftsufN86ug82GzSJ4ALBQqf3nGNu8QCiknqEtSJOjF1Xrg9wPtT4OcZ6sAtS8KOyj",
    },
    {
        id: 3,
        name: "Modern Muse",
        status: "Inactive",
        products: 45,
        logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNw371slot4Ep0aGBFDs0w4O-FflFuBD62Np0QzgVFgRc2rbO_ogClQJYpgPItct1WtBkGAkI0Vg1js3VsJMGYpFv4-gcCW-EXMZbIuMkVcQevR-9Kqu-ZDyW6i4yatt38_dM2SP5hXNI-SJrrBFFHCkDJfjlxCPcZZpFvRB_I80-FAo_20LCe_JHaP9euPuY6fO9v7gNWe8IDOHd7rOzPklWdNJqR3d3oaDvjCSrkPqPCILHpph8PwHv-h18hB_OKZXKz9S3RiqFj",
    },
    {
        id: 4,
        name: "Urban Edge",
        status: "Active",
        products: 210,
        logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAcwsl7bPDl_HSmgzwEBeQrTgoLjzth711KftebYY_aerEakG_kqQz6f88gnr5uOyi194QsniDYx4_4Wn2P_G8m7Qx4WhEKkMcLVGXXCr6tZQGrbHZb3LZI1W_xUL9sLXQuZau7NGvYZq_jTCD7c8qIUm6UQBNCI0fr6gcyvDu7LcRwpvuo7dUrTgXqhUg2Jxs-hPPN1hJ9z7r7iszP3OeI2P48mATH9T4zeu35LVmE8kZTty5gWguuajAPS6qZE6YV7yM0g93LK-sY",
    },
    {
        id: 5,
        name: "Luxe Looms",
        status: "Inactive",
        products: 32,
        logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhqg6dU2Wn1g8maCx5CToKEqKygtaiTZhLYp5OEPp4IPX8QLN09caVSOf4HL4k8zwunsEpv_m9RbmZ4yc8f5omcz6bzA2gtu9HH_JcNAHUO_Qz1KQf2cQpBq9nurY_FaijiJN2L4nwuTdgHWnIkaUFwdq7Ya-KjvkdsaE7vztXJF8Dueebdf7dOI1ZVbv5rLBcI6meXttyC9-z__xWNDXUFBRlBCMCCv1S9gGxgPLSkYHwoCU_rSxKQYZCA10Nke1-82KDxj0zJSvH",
    },
];

// Helper for badge styles
const getStatusStyle = (status: string) => {
    switch (status) {
        case "Active":
            return "bg-green-100 text-green-800";
        case "Inactive":
            return "bg-red-100 text-red-800";
        default:
            return "bg-gray-100 text-gray-800";
    }
};

const AdminBrandsPage = () => {
    return (
        <div className="bg-background-light font-display text-text-light text-text-main min-h-screen flex">
            {/* --- SideNavBar --- */}
            <Sidebar />

            {/* --- Main Content --- */}
            <main className="flex flex-1 flex-col">
                <AdminHeader />

                <div className="flex-1 space-y-4 p-6 lg:p-8">
                    {/* PageHeading */}
                    <header className="flex flex-wrap items-center justify-between gap-4">
                        <h1 className="text-text-main text-4xl font-black leading-tight tracking-[-0.033em]">
                            Manage Brands
                        </h1>
                        <button className="flex min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg bg-primary h-10 px-5 text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors shadow-sm">
                            <span className="material-symbols-outlined text-white text-lg">add_circle</span>
                            <span className="truncate">Add New Brand</span>
                        </button>
                    </header>

                    {/* SearchBar & Filters */}
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex-1 min-w-[200px]">
                            <label className="flex h-12 w-full max-w-md flex-col">
                                <div className="flex h-full w-full flex-1 items-stretch rounded-lg border border-border-light bg-white">
                                    <div className="flex items-center justify-center pl-4 text-slate-500">
                                        <span className="material-symbols-outlined">search</span>
                                    </div>
                                    <input
                                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border-none bg-white px-3 text-base font-normal leading-normal text-text-main placeholder:text-slate-400 focus:outline-none focus:ring-0"
                                        placeholder="Search by brand name..."
                                    />
                                </div>
                            </label>
                        </div>
                        <div>
                            <select className="form-select h-12 w-48 rounded-lg border border-border-light bg-white text-text-main focus:border-secondary focus:ring-secondary focus:outline-none px-3">
                                <option>All Statuses</option>
                                <option>Active</option>
                                <option>Inactive</option>
                            </select>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="w-full overflow-hidden rounded-lg border border-border-light bg-white shadow-sm">
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-[600px]">
                                <thead className="bg-background-light border-b border-border-light">
                                    <tr>
                                        <th className="w-2/5 px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-600">
                                            Brand
                                        </th>
                                        <th className="w-1/5 px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-600">
                                            Status
                                        </th>
                                        <th className="w-1/5 px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-600">
                                            Products
                                        </th>
                                        <th className="w-1/5 px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-600">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border-light">
                                    {brands.map((brand) => (
                                        <tr key={brand.id} className="hover:bg-background-light transition-colors">
                                            <td className="h-[72px] px-6 py-4">
                                                <div className="flex items-center gap-4">
                                                    <div className="relative size-10 rounded-full overflow-hidden border border-border-light">
                                                        <Image
                                                            src={brand.logo}
                                                            alt={`${brand.name} logo`}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                    <p className="font-medium text-text-main">{brand.name}</p>
                                                </div>
                                            </td>
                                            <td className="h-[72px] px-6 py-4">
                                                <span
                                                    className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold ${getStatusStyle(
                                                        brand.status
                                                    )}`}
                                                >
                                                    {brand.status}
                                                </span>
                                            </td>
                                            <td className="h-[72px] px-6 py-4 text-sm text-text-main">{brand.products}</td>
                                            <td className="h-[72px] px-6 py-4">
                                                <div className="flex items-center gap-4">
                                                    <button className="font-bold text-secondary hover:underline transition-colors">
                                                        Edit
                                                    </button>
                                                    <button className="font-bold text-slate-600 hover:underline transition-colors">
                                                        View
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Pagination */}
                    <nav className="flex items-center justify-center pt-4 pb-8">
                        <button className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-200 transition-colors">
                            <span className="material-symbols-outlined text-text-main">chevron_left</span>
                        </button>
                        <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold leading-normal text-primary transition-colors">
                            1
                        </button>
                        <button className="flex h-10 w-10 items-center justify-center rounded-lg text-sm font-normal leading-normal text-text-main hover:bg-gray-200 transition-colors">
                            2
                        </button>
                        <button className="flex h-10 w-10 items-center justify-center rounded-lg text-sm font-normal leading-normal text-text-main hover:bg-gray-200 transition-colors">
                            3
                        </button>
                        <span className="flex h-10 w-10 items-center justify-center text-sm font-normal leading-normal text-text-main">
                            ...
                        </span>
                        <button className="flex h-10 w-10 items-center justify-center rounded-lg text-sm font-normal leading-normal text-text-main hover:bg-gray-200 transition-colors">
                            10
                        </button>
                        <button className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-200 transition-colors">
                            <span className="material-symbols-outlined text-text-main">chevron_right</span>
                        </button>
                    </nav>
                </div>
            </main>
        </div>
    );
};

export default AdminBrandsPage;
