import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Orders = () => {
    const orders = [
        {
            id: "US123456789",
            date: "October 26, 2023",
            price: "$149.99",
            status: "Delivered",
            images: [
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDwwDcRF6v5rYyfq50JdNtjcs7volYWE0e57JGzJBbE4kksN8JjuXYrRLrNXYlR8w8jS1jSjPh6Hnzw8n7CeXFdn4qqZRNaHeeERYHrwz7ANDIbJJ1Vk9oNPm_Mx0EaSlOP0_4dgV_Q0_n63rUaNM_3j_ray7CqMc2ayzr_JHBIxR49bUX1h16F7rZMpngsUD9R1sVst7yiZ7xuSndSvcyt45y3F1JJvc58GpG-OTZQs8CCviz3IeC90mCiFJRAaTrIy8rW31NMFsH6",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDwwDcRF6v5rYyfq50JdNtjcs7volYWE0e57JGzJBbE4kksN8JjuXYrRLrNXYlR8w8jS1jSjPh6Hnzw8n7CeXFdn4qqZRNaHeeERYHrwz7ANDIbJJ1Vk9oNPm_Mx0EaSlOP0_4dgV_Q0_n63rUaNM_3j_ray7CqMc2ayzr_JHBIxR49bUX1h16F7rZMpngsUD9R1sVst7yiZ7xuSndSvcyt45y3F1JJvc58GpG-OTZQs8CCviz3IeC90mCiFJRAaTrIy8rW31NMFsH6",
            ],
        },
        {
            id: "US123456780",
            date: "October 15, 2023",
            price: "$85.50",
            status: "Shipped",
            images: [
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDwwDcRF6v5rYyfq50JdNtjcs7volYWE0e57JGzJBbE4kksN8JjuXYrRLrNXYlR8w8jS1jSjPh6Hnzw8n7CeXFdn4qqZRNaHeeERYHrwz7ANDIbJJ1Vk9oNPm_Mx0EaSlOP0_4dgV_Q0_n63rUaNM_3j_ray7CqMc2ayzr_JHBIxR49bUX1h16F7rZMpngsUD9R1sVst7yiZ7xuSndSvcyt45y3F1JJvc58GpG-OTZQs8CCviz3IeC90mCiFJRAaTrIy8rW31NMFsH6",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDwwDcRF6v5rYyfq50JdNtjcs7volYWE0e57JGzJBbE4kksN8JjuXYrRLrNXYlR8w8jS1jSjPh6Hnzw8n7CeXFdn4qqZRNaHeeERYHrwz7ANDIbJJ1Vk9oNPm_Mx0EaSlOP0_4dgV_Q0_n63rUaNM_3j_ray7CqMc2ayzr_JHBIxR49bUX1h16F7rZMpngsUD9R1sVst7yiZ7xuSndSvcyt45y3F1JJvc58GpG-OTZQs8CCviz3IeC90mCiFJRAaTrIy8rW31NMFsH6",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDwwDcRF6v5rYyfq50JdNtjcs7volYWE0e57JGzJBbE4kksN8JjuXYrRLrNXYlR8w8jS1jSjPh6Hnzw8n7CeXFdn4qqZRNaHeeERYHrwz7ANDIbJJ1Vk9oNPm_Mx0EaSlOP0_4dgV_Q0_n63rUaNM_3j_ray7CqMc2ayzr_JHBIxR49bUX1h16F7rZMpngsUD9R1sVst7yiZ7xuSndSvcyt45y3F1JJvc58GpG-OTZQs8CCviz3IeC90mCiFJRAaTrIy8rW31NMFsH6",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDwwDcRF6v5rYyfq50JdNtjcs7volYWE0e57JGzJBbE4kksN8JjuXYrRLrNXYlR8w8jS1jSjPh6Hnzw8n7CeXFdn4qqZRNaHeeERYHrwz7ANDIbJJ1Vk9oNPm_Mx0EaSlOP0_4dgV_Q0_n63rUaNM_3j_ray7CqMc2ayzr_JHBIxR49bUX1h16F7rZMpngsUD9R1sVst7yiZ7xuSndSvcyt45y3F1JJvc58GpG-OTZQs8CCviz3IeC90mCiFJRAaTrIy8rW31NMFsH6",
            ],
        },
        {
            id: "US123456771",
            date: "September 29, 2023",
            price: "$210.00",
            status: "Processing",
            images: [
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDwwDcRF6v5rYyfq50JdNtjcs7volYWE0e57JGzJBbE4kksN8JjuXYrRLrNXYlR8w8jS1jSjPh6Hnzw8n7CeXFdn4qqZRNaHeeERYHrwz7ANDIbJJ1Vk9oNPm_Mx0EaSlOP0_4dgV_Q0_n63rUaNM_3j_ray7CqMc2ayzr_JHBIxR49bUX1h16F7rZMpngsUD9R1sVst7yiZ7xuSndSvcyt45y3F1JJvc58GpG-OTZQs8CCviz3IeC90mCiFJRAaTrIy8rW31NMFsH6",
            ],
        },
        {
            id: "US123456762",
            date: "August 05, 2023",
            price: "$45.25",
            status: "Cancelled",
            images: [
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDwwDcRF6v5rYyfq50JdNtjcs7volYWE0e57JGzJBbE4kksN8JjuXYrRLrNXYlR8w8jS1jSjPh6Hnzw8n7CeXFdn4qqZRNaHeeERYHrwz7ANDIbJJ1Vk9oNPm_Mx0EaSlOP0_4dgV_Q0_n63rUaNM_3j_ray7CqMc2ayzr_JHBIxR49bUX1h16F7rZMpngsUD9R1sVst7yiZ7xuSndSvcyt45y3F1JJvc58GpG-OTZQs8CCviz3IeC90mCiFJRAaTrIy8rW31NMFsH6",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDwwDcRF6v5rYyfq50JdNtjcs7volYWE0e57JGzJBbE4kksN8JjuXYrRLrNXYlR8w8jS1jSjPh6Hnzw8n7CeXFdn4qqZRNaHeeERYHrwz7ANDIbJJ1Vk9oNPm_Mx0EaSlOP0_4dgV_Q0_n63rUaNM_3j_ray7CqMc2ayzr_JHBIxR49bUX1h16F7rZMpngsUD9R1sVst7yiZ7xuSndSvcyt45y3F1JJvc58GpG-OTZQs8CCviz3IeC90mCiFJRAaTrIy8rW31NMFsH6",
            ],
        },
    ];

    // Helper function for Status Badge Colors
    const getStatusColor = (status: string) => {
        switch (status) {
            case "Delivered":
                return "bg-green-100 text-green-800";
            case "Shipped":
                return "bg-blue-100 text-blue-800";
            case "Processing":
                return "bg-secondary/20 text-yellow-800";
            case "Cancelled":
                return "bg-gray-200 text-gray-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };

    return (
        <div className="font-display bg-background-light text-text-light min-h-screen flex flex-col w-full overflow-x-hidden">
            <Navbar />

            {/* Main Content */}
            <main className="container mx-auto flex-1 px-4 py-8">
                <div className="mx-auto max-w-7xl">
                    {/* Page Header */}
                    <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
                        <div className="flex flex-col gap-1">
                            <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] text-text-light">
                                My Orders
                            </h1>
                            <p className="text-base font-normal leading-normal text-secondary-text-light">
                                View and manage your past and current orders.
                            </p>
                        </div>
                    </div>

                    {/* Filters Section */}
                    <div className="mb-8 rounded-xl border border-border-light bg-white p-4 shadow-sm">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            {/* Time Filter */}
                            <div>
                                <label
                                    className="mb-1 block text-sm font-medium text-secondary-text-light"
                                    htmlFor="time-filter"
                                >
                                    Time Period
                                </label>
                                <div className="relative h-10">
                                    <select
                                        className="h-full w-full appearance-none rounded-lg border border-border-light bg-background-light py-2 pl-4 pr-10 text-base text-text-light focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
                                        id="time-filter"
                                    >
                                        <option>Past 30 Days</option>
                                        <option>Past 6 Months</option>
                                        <option>Past Year</option>
                                        <option>All Time</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-secondary-text-light">
                                        <span className="material-symbols-outlined text-xl">calendar_month</span>
                                    </div>
                                </div>
                            </div>

                            {/* Status Filter */}
                            <div>
                                <label
                                    className="mb-1 block text-sm font-medium text-secondary-text-light"
                                    htmlFor="status-filter"
                                >
                                    Status
                                </label>
                                <div className="relative h-10">
                                    <select
                                        className="h-full w-full appearance-none rounded-lg border border-border-light bg-background-light py-2 pl-4 pr-10 text-base text-text-light focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
                                        id="status-filter"
                                    >
                                        <option>All Status</option>
                                        <option>Pending</option>
                                        <option>Shipped</option>
                                        <option>Delivered</option>
                                        <option>Cancelled</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-secondary-text-light">
                                        <span className="material-symbols-outlined text-xl">expand_more</span>
                                    </div>
                                </div>
                            </div>

                            {/* Search Input */}
                            <div className="sm:col-span-2 lg:col-span-2">
                                <label
                                    className="mb-1 block text-sm font-medium text-secondary-text-light"
                                    htmlFor="search-orders"
                                >
                                    Search
                                </label>
                                <div className="relative h-10">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <span className="material-symbols-outlined text-secondary-text-light">search</span>
                                    </div>
                                    <input
                                        className="h-full w-full rounded-lg border border-border-light bg-background-light py-2 pl-10 pr-4 text-base text-text-light placeholder:text-secondary-text-light focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
                                        id="search-orders"
                                        placeholder="Search order"
                                        type="text"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Orders List */}
                    <div className="space-y-6">
                        {orders.map((order, index) => (
                            <div
                                key={index}
                                className="rounded-xl border border-border-light bg-white shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-6">
                                    {/* Order Info & Images */}
                                    <div className="flex items-center gap-4">
                                        <div className="flex -space-x-4">
                                            {order.images.slice(0, 2).map((img, i) => (
                                                <div
                                                    key={i}
                                                    className="relative size-16 rounded-lg border-2 border-white overflow-hidden"
                                                >
                                                    <Image
                                                        fill
                                                        src={img}
                                                        alt="Product"
                                                        className="object-cover"
                                                        sizes="64px"
                                                    />
                                                </div>
                                            ))}
                                            {order.images.length > 2 && (
                                                <div className="relative size-16 rounded-lg border-2 border-white overflow-hidden bg-black/50 flex items-center justify-center z-10">
                                                    <span className="text-sm font-bold text-white">
                                                        +{order.images.length - 2}
                                                    </span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Details */}
                                        <div className="pl-2">
                                            <p className="text-sm font-bold text-primary">#{order.id}</p>
                                            <p className="text-lg font-bold text-text-light">{order.price}</p>
                                            <p className="text-sm text-secondary-text-light">{order.date}</p>
                                        </div>
                                    </div>

                                    {/* Status & Action */}
                                    <div className="flex items-center justify-between gap-4 sm:justify-end">
                                        <span
                                            className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold leading-5 ${getStatusColor(
                                                order.status
                                            )}`}
                                        >
                                            {order.status}
                                        </span>
                                        <Link
                                            href={`/order/${order.id}`}
                                            className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
                                        >
                                            View Details
                                            <span className="material-symbols-outlined text-base">arrow_forward</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="mt-8 flex items-center justify-between">
                        <button className="flex items-center gap-2 rounded-lg border border-border-light px-4 h-10 text-sm font-semibold text-secondary-text-light hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed">
                            <span className="material-symbols-outlined text-base">arrow_back</span>
                            Previous
                        </button>

                        <div className="hidden items-center gap-1 md:flex">
                            <a
                                className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-sm font-bold text-white"
                                href="#"
                            >
                                1
                            </a>
                            <a
                                className="flex h-10 w-10 items-center justify-center rounded-lg text-sm font-semibold text-secondary-text-light hover:bg-gray-100"
                                href="#"
                            >
                                2
                            </a>
                            <a
                                className="flex h-10 w-10 items-center justify-center rounded-lg text-sm font-semibold text-secondary-text-light hover:bg-gray-100"
                                href="#"
                            >
                                3
                            </a>
                            <span className="flex h-10 w-10 items-center justify-center text-sm font-semibold text-secondary-text-light">
                                ...
                            </span>
                            <a
                                className="flex h-10 w-10 items-center justify-center rounded-lg text-sm font-semibold text-secondary-text-light hover:bg-gray-100"
                                href="#"
                            >
                                10
                            </a>
                        </div>

                        <button className="flex items-center gap-2 rounded-lg border border-border-light px-4 h-10 text-sm font-semibold text-secondary-text-light hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed">
                            Next
                            <span className="material-symbols-outlined text-base">arrow_forward</span>
                        </button>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Orders;
