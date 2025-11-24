const Address = () => {
    const addresses = [
        {
            id: 1,
            type: "Home",
            address: "123 Maple Street, Apt 4B, Springfield, IL 62704, USA",
            phone: "(217) 555-1234",
            isPrimary: true,
        },
        {
            id: 2,
            type: "Work",
            address: "789 Oak Avenue, Suite 201, Metropolis, NY 10001, USA",
            phone: "(212) 555-5678",
            isPrimary: false,
        },
    ];

    return (
        <div className="flex flex-col gap-8">
            {/* Shipping Addresses Section */}
            <div className="bg-white p-6 rounded-lg border border-border-light shadow-sm">
                <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
                    <p className="text-2xl font-bold tracking-tight text-text-light">Shipping Addresses</p>
                    <button className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors shadow-sm shadow-primary/20">
                        <span className="material-symbols-outlined text-base">add</span>
                        <span className="truncate">Add New Address</span>
                    </button>
                </div>

                {/* Addresses Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {addresses.map((addr) => (
                        <div
                            key={addr.id}
                            className="flex flex-col gap-4 p-4 border border-border-light rounded-lg hover:shadow-md transition-shadow bg-gray-50"
                        >
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="font-semibold text-text-light">{addr.type}</p>
                                    <p className="text-secondary-text-light text-sm mt-1">{addr.address}</p>
                                    <p className="text-secondary-text-light text-sm mt-1">{addr.phone}</p>
                                </div>
                                {addr.isPrimary && (
                                    <span className="text-xs font-bold uppercase text-secondary bg-secondary/10 px-2 py-1 rounded-full">
                                        Primary
                                    </span>
                                )}
                            </div>
                            <div className="flex items-center gap-2 border-t border-border-light pt-3 mt-auto">
                                <button className="flex items-center justify-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium text-text-light hover:bg-white hover:shadow-sm transition-all">
                                    <span className="material-symbols-outlined text-base">edit</span>
                                    <span>Edit</span>
                                </button>
                                <button className="flex items-center justify-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium text-red-600 hover:bg-red-50 transition-colors">
                                    <span className="material-symbols-outlined text-base">delete</span>
                                    <span>Delete</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Address;
