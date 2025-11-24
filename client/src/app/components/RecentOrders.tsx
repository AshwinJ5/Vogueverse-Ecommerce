import Link from "next/link";

const RecentOrders = () => {
    const recentOrders = [
        {
            id: "#FAS83721",
            date: "23 Oct 2023",
            total: "$145.50",
            status: "Shipped",
            statusColor: "bg-green-100 text-green-800",
        },
        {
            id: "#FAS81093",
            date: "15 Sep 2023",
            total: "$89.99",
            status: "Processing",
            statusColor: "bg-blue-100 text-blue-800",
        },
        {
            id: "#FAS79842",
            date: "01 Aug 2023",
            total: "$210.00",
            status: "Delivered",
            statusColor: "bg-gray-100 text-gray-800",
        },
    ];
    return (
        <div className="bg-card-light p-4 sm:p-6 rounded-lg border border-border-light">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-6">
                <p className="text-text-primary-light text-xl sm:text-2xl font-bold leading-tight tracking-[-0.033em]">
                    Recent Orders
                </p>
                <Link href="/orders" className="text-primary text-sm font-bold hover:underline self-start sm:self-auto">
                    View All
                </Link>
            </div>

            {/* Desktop Table */}
            <div className="hidden sm:block overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-border-light">
                            <th className="py-3 px-4 text-sm font-semibold text-text-secondary-light">Order ID</th>
                            <th className="py-3 px-4 text-sm font-semibold text-text-secondary-light">Date</th>
                            <th className="py-3 px-4 text-sm font-semibold text-text-secondary-light">Total</th>
                            <th className="py-3 px-4 text-sm font-semibold text-text-secondary-light">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recentOrders.map((order) => (
                            <tr key={order.id} className="border-b border-border-light last:border-0">
                                <td className="py-4 px-4 text-sm font-medium text-text-primary-light hover:text-primary hover:underline">
                                    <Link href={"/orders/123"}>{order.id}</Link>
                                </td>
                                <td className="py-4 px-4 text-sm text-text-primary-light">{order.date}</td>
                                <td className="py-4 px-4 text-sm text-text-primary-light">{order.total}</td>
                                <td className="py-4 px-4 text-sm">
                                    <span
                                        className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${order.statusColor}`}
                                    >
                                        {order.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile Cards */}
            {/* Minimalist Status-focused Cards */}
            <div className="sm:hidden space-y-3">
                {recentOrders.map((order) => (
                    <div
                        key={order.id}
                        className={`p-4 rounded-lg border-l-4 ${
                            order.status === "Shipped"
                                ? "border-l-green-500 bg-green-50"
                                : order.status === "Processing"
                                ? "border-l-blue-500 bg-blue-50"
                                : "border-l-gray-500 bg-gray-50"
                        }`}
                    >
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <p className="font-semibold text-text-primary-light">{order.id}</p>
                                <p className="text-sm text-text-secondary-light">{order.date}</p>
                            </div>
                            <span className="text-lg font-bold text-text-primary-light">{order.total}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-text-secondary-light">{order.status}</span>
                            <Link href={"/orders/001"} className="text-sm font-medium text-primary hover:underline">
                                Details →
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentOrders;
