import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";

const OrderDetails = () => {
    const orderItems = [
        {
            name: "Vintage Floral Dress",
            details: "Color: Red, Size: M",
            qty: 1,
            price: "$129.99",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwWGN4gqrbScxS8Cwu5-nwAKOIoIbLbbW1qFnUOhIRhJCpUdPlU87OqlY6FfkfTybodZtfzIptBh7_eDXIMrm6orRFX_8oEOa6BCnlep2NK_vos9k5MRsQFXMojuiviDcgttgiMJTQ14IFkxMFTAIMwGFLcWlABHGIYBj26H2naaPgGlOU-7jMRAz5NMAP5DpzVGZsuBLtCvXrCVIfYCXyhjrTNkn7HoMCd9STMAOd22kzbmPrMaH5OuUccX4GUJcZxvS2tU85jZhp",
        },
        {
            name: "Retro Orange Sneakers",
            details: "Size: 9",
            qty: 1,
            price: "$85.00",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdOLfbn4f-CRz87TA3lSXFRyZ2aTXkzNNVzOmR5cyS6oUynEYRhwkZliIqPpcZb74Gu6dl6Q5HuyVqFH7oH_sOELOMNUqOD1S1GonQGHKpPfuEdsl44Ufj0ljo5yP0xiIZcyZiKOkGJ1zNSZxm946lkHm4iErei2YV6tHungjJT5zWg-3XZtKbaccmjaVfkIne6mAy83vLhFKV8Ss5BXoxrCNsEYGzBgpSg1q2exfnvrRS6_TE6brxtExvnmUVP-faDVY5k36Vxi-m",
        },
        {
            name: "Classic Leather Handbag",
            details: "Color: Black",
            qty: 1,
            price: "$39.99",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCv9PqSrPfadI-N1IMjXJCBpIsRpdoKlur5vOV-3CIvnobwU_XWgixY4lao7mo3ArawFM30a5c3RIq7zm-zJiVrDFFiyvV8o8LGtiZXun11fAxOOIu1NGpo0q7hxMRtmRUv55jcdE4_ZghSvinxK_FlJmS4-KFJaeGebSlnKHqlryi1PCWaPZfQcEkkLia4pOlszzrGiUGkidBPnU7ekbNnirMgpptj5mxcJBpCaUB9wZmBpSifXghYOE4tDqXQ0Of7sjr5-0ggMX7M",
        },
    ];

    return (
        <div className="font-display bg-background-light text-text-light min-h-screen flex flex-col w-full overflow-x-hidden">
            <Navbar />

            <main className="container mx-auto px-4 sm:px-6 py-8">
                {/* Page Heading */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-text-light text-3xl md:text-4xl font-extrabold leading-tight tracking-tight">
                            Order Details
                        </h1>
                        <p className="text-gray-500">
                            Order <span className="font-semibold text-text-light">#ORD12345678</span> placed on{" "}
                            <span className="font-semibold text-text-light">August 15, 2024</span>
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="flex items-center justify-center gap-2 rounded-lg cursor-pointer h-11 px-5 text-sm font-semibold bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                            <span className="material-symbols-outlined text-lg">download</span>
                            Download Invoice
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column */}
                    <div className="lg:col-span-2 flex flex-col gap-8">
                        {/* Summary Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-xl border border-border-light shadow-sm">
                                <h3 className="text-sm text-gray-500 mb-2 font-medium">Shipping Address</h3>
                                <p className="font-bold text-text-light">Jane Doe</p>
                                <p className="text-sm text-gray-600 mt-1">123 Fashion Ave, Style City, 12345, USA</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-border-light shadow-sm">
                                <h3 className="text-sm text-gray-500 mb-2 font-medium">Payment Method</h3>
                                <p className="font-bold text-text-light">Visa ending in 1234</p>
                                <p className="text-sm text-gray-600 mt-1">Expires 12/26</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-border-light shadow-sm">
                                <h3 className="text-sm text-gray-500 mb-2 font-medium">Order Total</h3>
                                <p className="text-2xl font-bold text-text-light">$254.98</p>
                                <p className="text-sm text-gray-600 mt-1">3 items</p>
                            </div>
                        </div>

                        {/* Items List */}
                        <div className="bg-white p-6 rounded-xl border border-border-light shadow-sm">
                            <h2 className="text-text-light text-xl font-bold mb-6">Items in Your Order (3)</h2>
                            <div className="flex flex-col divide-y divide-border-light">
                                {orderItems.map((item, index) => (
                                    <div key={index} className="flex items-center gap-4 py-4 first:pt-0 last:pb-0">
                                        <div className="relative size-24 shrink-0 rounded-lg overflow-hidden border border-border-light">
                                            <Image
                                                fill
                                                src={item.image}
                                                alt={item.name}
                                                className="object-cover"
                                                sizes="96px"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-text-light text-base">{item.name}</h3>
                                            <p className="text-sm text-gray-500 mt-1">{item.details}</p>
                                            <p className="text-sm text-gray-500 mt-1">Qty: {item.qty}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-bold text-text-light text-base sm:text-lg">{item.price}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 pt-4 border-t border-border-light flex flex-col items-end gap-2 text-sm">
                                <div className="flex justify-between w-full max-w-xs">
                                    <span className="text-gray-500">Subtotal:</span>
                                    <span className="font-medium text-text-light">$254.98</span>
                                </div>
                                <div className="flex justify-between w-full max-w-xs">
                                    <span className="text-gray-500">Shipping:</span>
                                    <span className="font-medium text-text-light">$0.00</span>
                                </div>
                                <div className="flex justify-between w-full max-w-xs mt-2 pt-2 border-t border-border-light">
                                    <span className="font-bold text-base text-text-light">Grand Total:</span>
                                    <span className="font-black text-lg text-primary">$254.98</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column (Timeline) */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-6 rounded-xl border border-border-light shadow-sm sticky top-28">
                            <h2 className="text-text-light text-xl font-bold mb-6">Order Status</h2>

                            <div className="relative flex flex-col gap-8 pl-2">
                                {/* Vertical Line */}
                                <div className="absolute left-[19px] top-3 bottom-3 w-px border-l-2 border-dashed border-border-light"></div>

                                {/* Timeline Items */}
                                <div className="flex items-start gap-4 z-10">
                                    <div className="flex size-10 items-center justify-center rounded-full bg-green-500 text-white shadow-sm">
                                        <span className="material-symbols-outlined text-xl">check</span>
                                    </div>
                                    <div>
                                        <p className="font-bold text-text-light">Delivered</p>
                                        <p className="text-xs text-gray-500 mt-1">August 20, 2024, 2:15 PM</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 z-10">
                                    <div className="flex size-10 items-center justify-center rounded-full bg-green-500 text-white shadow-sm">
                                        <span className="material-symbols-outlined text-xl">check</span>
                                    </div>
                                    <div>
                                        <p className="font-bold text-text-light">Out for Delivery</p>
                                        <p className="text-xs text-gray-500 mt-1">August 20, 2024, 9:30 AM</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 z-10">
                                    <div className="flex size-10 items-center justify-center rounded-full bg-secondary text-white shadow-sm">
                                        <span className="material-symbols-outlined text-xl">local_shipping</span>
                                    </div>
                                    <div>
                                        <p className="font-bold text-text-light">Shipped</p>
                                        <p className="text-xs text-gray-500 mt-1">August 18, 2024, 6:00 PM</p>
                                        <div className="mt-2 text-sm">
                                            <p className="text-gray-600">
                                                Tracking:{" "}
                                                <span className="text-primary font-medium">1Z999AA10123456784</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 z-10">
                                    <div className="flex size-10 items-center justify-center rounded-full bg-gray-200 text-gray-600">
                                        <span className="material-symbols-outlined text-xl">inventory_2</span>
                                    </div>
                                    <div>
                                        <p className="font-bold text-text-light">Processed</p>
                                        <p className="text-xs text-gray-500 mt-1">August 16, 2024, 11:45 AM</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 z-10">
                                    <div className="flex size-10 items-center justify-center rounded-full bg-gray-200 text-gray-600">
                                        <span className="material-symbols-outlined text-xl">receipt_long</span>
                                    </div>
                                    <div>
                                        <p className="font-bold text-text-light">Order Placed</p>
                                        <p className="text-xs text-gray-500 mt-1">August 15, 2024, 3:22 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default OrderDetails;
