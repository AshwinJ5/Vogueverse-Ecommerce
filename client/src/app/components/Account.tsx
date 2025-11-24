import React from "react";

const Account = () => {
    return (
        <div className="flex flex-col gap-4 sm:gap-8">
            {/* Account Details Section */}
            <div className="bg-card-light p-4 sm:p-6 rounded-lg border border-border-light">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
                    <p className="text-text-primary-light text-xl sm:text-2xl font-bold leading-tight tracking-[-0.033em]">
                        Account Details
                    </p>
                    <div className="flex gap-3 flex-wrap">
                        <button className="flex-1 sm:flex-none min-w-[120px] max-w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                            <span className="truncate">Edit Profile</span>
                        </button>
                        <button className="flex-1 sm:flex-none min-w-[120px] max-w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-secondary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-secondary/90 transition-colors">
                            <span className="truncate">Change Password</span>
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-2 sm:gap-4">
                    {[
                        { label: "Full Name", value: "Eleanor Vance" },
                        { label: "Member Since", value: "October 15, 2023" },
                        { label: "Email Address", value: "eleanor@example.com" },
                        { label: "Password", value: "••••••••••" },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col gap-1 border-t border-solid border-border-light py-3 sm:py-4"
                        >
                            <p className="text-text-secondary-light text-sm font-normal leading-normal">{item.label}</p>
                            <p className="text-text-primary-light text-base font-medium leading-normal wrap-break-word">
                                {item.value}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Account;
