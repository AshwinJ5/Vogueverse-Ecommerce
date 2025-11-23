import Link from "next/link";

const EmptyOrders = () => {
    return (
        <div className="font-display bg-background-light text-text-light flex flex-col w-full overflow-x-hidden">
            {/* Main Content */}
            <main className="grow flex flex-col items-center justify-center py-16 sm:py-24 px-4">
                <div className="flex flex-col items-center gap-6 max-w-md w-full text-center">
                    {/* Empty State Icon */}
                    <div className="text-secondary animate-in fade-in zoom-in duration-500">
                        <svg
                            className="h-24 w-24 sm:h-32 sm:w-32"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 106.53 122.88"
                            fill="currentColor"
                        >
                            <path d="M4.93,30.34H27.41V25.76a25.77,25.77,0,0,1,51.53,0v4.58H101.6a4.91,4.91,0,0,1,3.47,1.45h0a4.9,4.9,0,0,1,1.44,3.48v69.9a17.75,17.75,0,0,1-17.7,17.7H17.7A17.75,17.75,0,0,1,0,105.18V35.28A4.91,4.91,0,0,1,1.45,31.8h0a4.91,4.91,0,0,1,3.47-1.45Zm28.76,0h39V25.76a19.49,19.49,0,0,0-39,0v4.58Zm-6.28,13V36.62H6.28v62h94V36.62H78.94v6.76a6.48,6.48,0,1,1-6.28-.12V36.62h-39v6.71a6.48,6.48,0,1,1-6.28,0Z" />
                        </svg>
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col items-center gap-2">
                        <h2 className="text-2xl sm:text-3xl font-black leading-tight tracking-tight text-text-light">
                            Your order history is empty.
                        </h2>
                        <p className="text-secondary-text-light text-base font-normal leading-normal max-w-xs sm:max-w-md">
                            {"Looks like you haven't placed an order yet. Let's change that!"}
                        </p>
                    </div>

                    {/* Action Button */}
                    <Link
                        href="/catagory"
                        className="flex min-w-[84px] items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-primary text-white text-base font-bold leading-normal tracking-wide hover:bg-opacity-90 hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/20"
                    >
                        Start Shopping
                    </Link>
                </div>
            </main>
        </div>
    );
};

export default EmptyOrders;
