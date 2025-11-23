import Link from "next/link";

const EmptyCart = () => {
    return (
        <div className="font-display bg-background-light text-text-light flex flex-col w-full overflow-x-hidden">
            {/* Main Content */}
            <main className="grow flex flex-col items-center justify-center py-16 sm:py-24 px-4">
                <div className="flex flex-col items-center gap-6 max-w-md w-full text-center">
                    {/* Empty State Icon */}
                    <div className="text-secondary animate-in fade-in zoom-in duration-500">
                        <svg
                            className="h-24 w-24 sm:h-32 sm:w-32 text-primary"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 122.9 107.5"
                            fill="currentColor"
                        >
                            <path d="M3.9,7.9C1.8,7.9,0,6.1,0,3.9C0,1.8,1.8,0,3.9,0h10.2c0.1,0,0.3,0,0.4,0c3.6,0.1,6.8,0.8,9.5,2.5c3,1.9,5.2,4.8,6.4,9.1 c0,0,0,0.2,0.1,0.3l1,4H119c2.2,0,3.9,1.8,3.9,3.9c0,0.4-0.1,0.8-0.2,1.2l-10.2,41.1c-0.4,1.8-2,3-3.8,3H44.7c1.4,5.2,2.8,8,4.7,9.3 c2.3,1.5,6.3,1.6,13,1.5h0.1h45.2c2.2,0,3.9,1.8,3.9,3.9c0,2.2-1.8,3.9-3.9,3.9H62.5c-8.3,0.1-13.4-0.1-17.5-2.8 c-4.2-2.8-6.4-7.6-8.6-16.3L23,13.9c-0.6-2.2-1.6-3.7-3-4.5c-1.4-0.9-3.3-1.3-5.5-1.3H3.9L3.9,7.9z M96,88.3c5.3,0,9.6,4.3,9.6,9.6 c0,5.3-4.3,9.6-9.6,9.6c-5.3,0-9.6-4.3-9.6-9.6C86.4,92.6,90.7,88.3,96,88.3z M53.9,88.3c5.3,0,9.6,4.3,9.6,9.6 c0,5.3-4.3,9.6-9.6,9.6c-5.3,0-9.6-4.3-9.6-9.6C44.3,92.6,48.6,88.3,53.9,88.3z M33.7,23.7l8.9,33.5h63.1l8.3-33.5H33.7z" />
                        </svg>
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col items-center gap-2">
                        <h2 className="text-2xl sm:text-3xl font-black leading-tight tracking-tight text-text-light">
                            Your Shopping Cart is Empty
                        </h2>
                        <p className="text-secondary-text-light text-base font-normal leading-normal max-w-xs sm:max-w-md">
                            {"Looks like you haven't added anything yet. Let's find something you'll love!"}
                        </p>
                    </div>

                    {/* Action Button */}
                    <Link
                        href="/categories"
                        className="flex min-w-[84px] items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-primary text-white text-base font-bold leading-normal tracking-wide hover:bg-opacity-90 hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/20"
                    >
                        Continue Shopping
                    </Link>
                </div>
            </main>
        </div>
    );
};

export default EmptyCart;
