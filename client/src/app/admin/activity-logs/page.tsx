"use client";

import React from "react";
import Sidebar from "@/app/components/Sidebar";
import AdminHeader from "@/app/components/AdminHeader";

// Mock Data for the table
const activityLogs = [
  {
    id: 1,
    timestamp: "Oct 26, 2023, 10:45 AM",
    user: "alex.doe@example.com",
    type: "UPDATE",
    description: "Updated product 'Summer Dress' (SKU: SD123)",
  },
  {
    id: 2,
    timestamp: "Oct 26, 2023, 09:12 AM",
    user: "jane.roe@example.com",
    type: "DELETE",
    description: "Deleted user 'john.smith'",
  },
  {
    id: 3,
    timestamp: "Oct 25, 2023, 04:30 PM",
    user: "alex.doe@example.com",
    type: "CREATE",
    description: "Created new coupon 'FALL20'",
  },
  {
    id: 4,
    timestamp: "Oct 25, 2023, 02:05 PM",
    user: "sam.jones@example.com",
    type: "UPDATE",
    description: "Updated order status for #5678 to 'Shipped'",
  },
  {
    id: 5,
    timestamp: "Oct 24, 2023, 11:55 AM",
    user: "jane.roe@example.com",
    type: "CREATE",
    description: "Created new product category 'Accessories'",
  },
];

// Helper to determine badge styling based on action type
const getBadgeStyle = (type: string) => {
  switch (type) {
    case "DELETE":
      return "bg-red-100 text-red-700 ring-red-600/10";
    case "CREATE":
      return "bg-green-100 text-green-700 ring-green-600/10";
    case "UPDATE":
    default:
      return "bg-secondary/10 text-secondary ring-secondary/20";
  }
};

const ActivityLogsPage = () => {
  return (
    <div className="bg-background-light font-display text-text-light">
      <div className="relative flex min-h-screen w-full">
        {/* --- SideNavBar --- */}
        <Sidebar />

        {/* --- Main Content --- */}
        <main className="flex flex-1 flex-col">
          <AdminHeader />
          <div className="flex-1 space-y-4 p-6 lg:p-8">
            {/* PageHeading */}
            <header className="flex flex-wrap items-center justify-between gap-4">
              <h1 className="text-text-light text-3xl font-bold leading-tight tracking-tight">
                System Activity Logs
              </h1>
              <button className="flex min-w-[84px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 bg-gray-800 text-white text-sm font-bold leading-normal tracking-wide hover:bg-gray-700 transition-colors">
                <span className="material-symbols-outlined text-base">
                  download
                </span>
                <span className="truncate">Export Logs</span>
              </button>
            </header>

            {/* Filters & Search Bar */}
            <div className="rounded-xl border border-border-light bg-white p-4">
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
                <div className="lg:col-span-2">
                  <label className="flex flex-col min-w-40 h-11 w-full">
                    <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                      <div className="text-gray-500 flex border border-border-light bg-background-light items-center justify-center pl-3 rounded-l-lg border-r-0">
                        <span className="material-symbols-outlined text-xl">
                          search
                        </span>
                      </div>
                      <input
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-text-light focus:outline-none focus:ring-2 focus:ring-primary/50 border border-border-light bg-background-light h-full placeholder:text-gray-500 px-4 border-l-0 text-sm font-normal leading-normal"
                        placeholder="Search by action or keyword..."
                      />
                    </div>
                  </label>
                </div>
                <div>
                  <button className="flex h-11 w-full items-center justify-between gap-x-2 rounded-lg border border-border-light bg-background-light px-4 hover:bg-gray-50 transition-colors">
                    <p className="text-gray-500 text-sm font-medium leading-normal">
                      Date Range:{" "}
                      <span className="text-text-light">Last 7 Days</span>
                    </p>
                    <span className="material-symbols-outlined text-gray-500 text-xl">
                      expand_more
                    </span>
                  </button>
                </div>
                                <div>
                  <button className="flex h-11 w-full items-center justify-between gap-x-2 rounded-lg border border-border-light bg-background-light px-4 hover:bg-gray-50 transition-colors">
                    <p className="text-gray-500 text-sm font-medium leading-normal">
                      Action Type:{" "}
                      <span className="text-text-light">All Actions</span>
                    </p>
                    <span className="material-symbols-outlined text-gray-500 text-xl">
                      expand_more
                    </span>
                  </button>
                </div>

                {/* <div className="flex items-center justify-end gap-4 lg:col-span-4">
                  <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-6 bg-primary text-white text-sm font-bold leading-normal tracking-wide hover:bg-red-700 transition-colors">
                    <span className="truncate">Apply Filters</span>
                  </button>
                </div> */}
              </div>
            </div>

            {/* Table */}
            <div className="w-full overflow-hidden rounded-xl border border-border-light bg-white shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[800px]">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                        Timestamp
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                        Admin User
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                        Action Description
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border-light">
                    {activityLogs.map((log) => (
                      <tr key={log.id}>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                          {log.timestamp}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                          {log.user}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800">
                          <div className="flex items-center gap-2">
                            <span
                              className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${getBadgeStyle(
                                log.type
                              )}`}
                            >
                              {log.type}
                            </span>
                            <span>{log.description}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-between border-t border-border-light px-4 py-3 sm:px-6">
                <div className="flex flex-1 justify-between sm:hidden">
                  <button className="relative inline-flex items-center rounded-md border border-border-light bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                    Previous
                  </button>
                  <button className="relative ml-3 inline-flex items-center rounded-md border border-border-light bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                    Next
                  </button>
                </div>
                <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm text-gray-700">
                      Showing <span className="font-medium">1</span> to{" "}
                      <span className="font-medium">5</span> of{" "}
                      <span className="font-medium">97</span> results
                    </p>
                  </div>
                  <div>
                    <nav
                      aria-label="Pagination"
                      className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                    >
                      <button className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-border-light hover:bg-gray-50">
                        <span className="material-symbols-outlined text-base">
                          chevron_left
                        </span>
                      </button>
                      <button
                        aria-current="page"
                        className="relative z-10 inline-flex items-center bg-primary/10 px-4 py-2 text-sm font-semibold text-primary focus:z-20"
                      >
                        1
                      </button>
                      <button className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-border-light hover:bg-gray-50">
                        2
                      </button>
                      <button className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-border-light hover:bg-gray-50 md:inline-flex">
                        3
                      </button>
                      <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-border-light">
                        ...
                      </span>
                      <button className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-border-light hover:bg-gray-50 md:inline-flex">
                        10
                      </button>
                      <button className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-border-light hover:bg-gray-50">
                        <span className="material-symbols-outlined text-base">
                          chevron_right
                        </span>
                      </button>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ActivityLogsPage;