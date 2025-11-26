"use client";

import Image from "next/image";
import Sidebar from "@/app/components/Sidebar";
import AdminHeader from "@/app/components/AdminHeader";

// Mock Data
const categories = [
  {
    id: 1,
    name: "T-Shirts",
    status: "Active",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuADxnnfawf7yXeaJGVLsoJU056wSBSLt3LlLM5bXaNA-_4ep8cEsjEo0A6CSRqDdLxREAjzFMihVwQMDSQk3z6UnUWf6ZYt5kwpVgwfDGk3Ob_T-62qmwqBXOTDoPf2kkFplDc6fgNg3cJEZHTydUAjah9v9ixNZDPxRIyk-oLLGlb8LjT_CoVCKxcQeIjDXFz6smW80lHt9PRKxagPg1kUqAD4059DN_nsiHJDvLn8h4p-s7QSvbJKcwOmQbJxbZJ5DyXHdiN-HqNu",
  },
  {
    id: 2,
    name: "Dresses",
    status: "Active",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDuMP0oFjtJe4naJA0NZrcYAvEfZOE0VKFUnLWKqkOoVuc-oQBYpKDjwoSHVYFnd3jWSeREuAjoSZSqS1hPfqfgFawc2ILGvm6fAM74wfCuDCv72d_yA0FR-OzVpaozLemdmR5MBhfjCsf3oynUG9TNV9bmXb3JdBHEmWqqdO5x3Bzv3-fzhXIlzsl-QEuV5_RQEM_HQc5zUaAeM1Q48-kKUIwPH9izPqdIF3hvudMQaiBsJF1dBbPbuETAnStMVLPFtHgrj3-hGF7A",
  },
  {
    id: 3,
    name: "Footwear",
    status: "Inactive",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBRcC_HVibua7BzkiKEGsXvPzJ4daeHOtzhMLYFczsahExXEEurIfYBn6d02KVa60kZJvasALhcLRUfpMywirDqAHU4zI3BmW6iQ6OzBTvFxSPVrjh6joIxoCfARYN32ZKN-JZppIlYy8nFmOMKajToA9_UkRX1PiuawreUs7vTvGrxTp4x4xBVGGsIbURywpK0AJLC300OEtTxZCOi96ykvPsG5rGRca2RfitEPjKS70mh8Ai7JIbVhxBtm72WDvL682KShYYMo1wU",
  },
  {
    id: 4,
    name: "Accessories",
    status: "Active",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRcC_HVibua7BzkiKEGsXvPzJ4daeHOtzhMLYFczsahExXEEurIfYBn6d02KVa60kZJvasALhcLRUfpMywirDqAHU4zI3BmW6iQ6OzBTvFxSPVrjh6joIxoCfARYN32ZKN-JZppIlYy8nFmOMKajToA9_UkRX1PiuawreUs7vTvGrxTp4x4xBVGGsIbURywpK0AJLC300OEtTxZCOi96ykvPsG5rGRca2RfitEPjKS70mh8Ai7JIbVhxBtm72WDvL682KShYYMo1wU", 
  },
  {
    id: 5,
    name: "Outerwear",
    status: "Active",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBDP2gWYjsUUMunWRxcU3JXo-GiFMqoEfqIKu5FSwcHHtW186WQFgTtPVPdV6-MRX7G9S2buTkqFRHy8Izzs2Gs7lAS6h-DVYlU1kQFhLQ4bmPYOfnMs_dVFLUbIQJZZixYMl0MI3fqj581XEqMyNIzcb5cQJiZc1JClhouXAnQukuf6JhQ3UKonHEJza4RAXIdcRXL9wgSdymuiUkdiPemXHh2Wcs5NDY9wOR4Mx9C25Q2AxLeMXuuOIzne0rDTwnRM3uoEgRa7Hj8",
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
                            Manage Categories
                        </h1>
                        <button className="flex min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg bg-primary h-10 px-5 text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors shadow-sm">
                            <span className="material-symbols-outlined text-white text-lg">add_circle</span>
                            <span className="truncate">Add New Category</span>
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
                                        placeholder="Search by category name..."
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
                                            Category
                                        </th>
                                        <th className="w-1/5 px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-600">
                                            Status
                                        </th>
                                        <th className="w-1/5 px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-600">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border-light">
                                    {categories.map((category) => (
                                        <tr key={category.id} className="hover:bg-background-light transition-colors">
                                            <td className="h-[72px] px-6 py-4">
                                                <div className="flex items-center gap-4">
                                                    <div className="relative size-10 rounded-full overflow-hidden border border-border-light">
                                                        <Image
                                                            src={category.image}
                                                            alt={`${category.name} logo`}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                    <p className="font-medium text-text-main">{category.name}</p>
                                                </div>
                                            </td>
                                            <td className="h-[72px] px-6 py-4">
                                                <span
                                                    className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold ${getStatusStyle(
                                                        category.status
                                                    )}`}
                                                >
                                                    {category.status}
                                                </span>
                                            </td>
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
