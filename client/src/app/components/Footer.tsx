import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-card-light border-t border-border-light ">
            <div className="container mx-auto px-4 py-6 sm:py-12 lg:py-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
                    <div className="col-span-2 md:col-span-2">
                        <h3 className="text-lg font-bold mb-4">Stay in the know</h3>
                        <p className="text-secondary-text-light text-sm mb-4">
                            Sign up for our newsletter to get the latest on sales, new releases and more.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-4 max-w-sm mx-auto md:mx-0">
                            <input
                                className="w-full h-10 px-3 rounded-lg border border-border-light bg-background-light focus:ring-2 focus:ring-primary focus:border-primary outline-0"
                                placeholder="Enter your email"
                                type="email"
                            />
                            <Link href={'/'} className="w-full sm:w-auto shrink-0 h-10 px-4 bg-primary text-white rounded-lg font-bold text-sm hover:bg-opacity-90 flex transition-all items-center justify-center">
                                Subscribe
                            </Link>
                        </div>
                    </div>

                    <div className="text-left md:text-left pl-4 md:pl-0">
                        <h3 className="text-base font-bold mb-4">Customer Service</h3>
                        <ul className="space-y-2 text-sm text-secondary-text-light">
                            {["Contact Us", "FAQ", "Shipping & Returns", "About Us"].map((item) => (
                                <li key={item}>
                                    <Link className="hover:text-primary hover:underline" href="/">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="text-left md:text-left pl-4 md:pl-0">
                        <h3 className="text-base font-bold mb-4">Company</h3>
                        <ul className="space-y-2 text-sm text-secondary-text-light">
                            {["Men", "Womens", "Orders", "Terms & Conditions"].map((item) => (
                                <li key={item}>
                                    <Link className="hover:text-primary hover:underline" href="/">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-border-light flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-text-light">
                    <p>© {new Date().getFullYear()} VogueVerse. All Rights Reserved.</p>
                    <div className="flex gap-4">
                        <Link href="#" className="hover:text-primary">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z"></path>
                            </svg>
                        </Link>
                        <Link href="#" className="hover:text-primary">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664 4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"></path>
                            </svg>
                        </Link>
                        <Link href="#" className="hover:text-primary">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.244 2H21.5l-7.59 8.68L22 22h-5.657l-4.35-5.86L6.86 22H3.6l8.18-9.34L2 2h5.657l4.013 5.407L18.244 2zM17.08 20h1.595L7.234 4H5.639l11.441 16z" />
                            </svg>
                        </Link>
                        <Link href="#" className="hover:text-primary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M6.321 6.016c-.27-.18-1.166-.802-1.166-.802.756-1.081 1.753-1.502 3.132-1.502.975 0 1.803.327 2.394.948s.928 1.509 1.005 2.644q.492.207.905.484c1.109.745 1.719 1.86 1.719 3.137 0 2.716-2.226 5.075-6.256 5.075C4.594 16 1 13.987 1 7.994 1 2.034 4.482 0 8.044 0 9.69 0 13.55.243 15 5.036l-1.36.353C12.516 1.974 10.163 1.43 8.006 1.43c-3.565 0-5.582 2.171-5.582 6.79 0 4.143 2.254 6.343 5.63 6.343 2.777 0 4.847-1.443 4.847-3.556 0-1.438-1.208-2.127-1.27-2.127-.236 1.234-.868 3.31-3.644 3.31-1.618 0-3.013-1.118-3.013-2.582 0-2.09 1.984-2.847 3.55-2.847.586 0 1.294.04 1.663.114 0-.637-.54-1.728-1.9-1.728-1.25 0-1.566.405-1.967.868ZM8.716 8.19c-2.04 0-2.304.87-2.304 1.416 0 .878 1.043 1.168 1.6 1.168 1.02 0 2.067-.282 2.232-2.423a6.2 6.2 0 0 0-1.528-.161" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
