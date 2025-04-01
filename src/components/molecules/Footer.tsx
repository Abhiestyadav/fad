export function Footer() {
    return (
        <footer className=" text-black py-12 md:py-8 border-t border-gray-700">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="text-center md:text-left text-sm leading-loose text-muted-foreground">
                        <p className="text-lg font-semibold mb-2 ">
                            Built with love by
                            <a
                                href="#"
                                target="_blank"
                                rel="noreferrer"
                                className="text-indigo-600 font-medium  hover:text-accent-foreground underline underline-offset-4 mx-1"
                            >
                                FAD
                            </a>
                        </p>
                        <p className="text-xs text-muted-foreground opacity-75">
                            Crafted with care and creativity.
                        </p>
                    </div>
                    <div className="flex items-center justify-center space-x-6 mt-4 md:mt-0">
                        <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="text-pink-700 hover:text-accent-foreground">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                className="h-6 w-6"
                            >
                                <path
                                    d="M12 2.163c3.203 0 3.573.012 4.827.07 1.04.054 1.983.224 2.743.62a4.823 4.823 0 0 1 1.78 1.78c.396.76.566 1.703.62 2.743.058 1.254.07 1.624.07 4.827s-.012 3.573-.07 4.827c-.054 1.04-.224 1.983-.62 2.743a4.823 4.823 0 0 1-1.78 1.78c-.76.396-1.703.566-2.743.62-1.254.058-1.624.07-4.827.07s-3.573-.012-4.827-.07c-1.04-.054-1.983-.224-2.743-.62a4.823 4.823 0 0 1-1.78-1.78c-.396-.76-.566-1.703-.62-2.743-.058-1.254-.07-1.624-.07-4.827s.012-3.573.07-4.827c.054-1.04.224-1.983.62-2.743a4.823 4.823 0 0 1 1.78-1.78c.76-.396 1.703-.566 2.743-.62 1.254-.058 1.624-.07 4.827-.07zm0-2.163C8.736 0 8.305 0 7.055.07c-1.136.061-2.176.242-3.043.68a6.986 6.986 0 0 0-2.547 2.547c-.438.867-.619 1.907-.68 3.043C.12 8.305 0 8.736 0 12s.12 3.573.07 4.827c.061 1.136.242 2.176.68 3.043a6.986 6.986 0 0 0 2.547 2.547c.867.438 1.907.619 3.043.68 1.25.058 1.681.07 4.827.07s3.573-.012 4.827-.07c1.136-.061 2.176-.242 3.043-.68a6.986 6.986 0 0 0 2.547-2.547c.438-.867.619-1.907.68-3.043.058-1.254.07-1.624.07-4.827s-.012-3.573-.07-4.827c-.061-1.136-.242-2.176-.68-3.043a6.986 6.986 0 0 0-2.547-2.547c-.867-.438-1.907-.619-3.043-.68-1.25-.058-1.681-.07-4.827-.07zM12 6.5a5.5 5.5 0 1 0 5.5 5.5 5.5 5.5 0 0 0-5.5-5.5zm0 9.083a3.583 3.583 0 1 1 0-7.167 3.583 3.583 0 0 1 0 7.167zm6.5-9.083a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z"
                                />
                            </svg>
                        </a>

                        {/* You can add more icons like LinkedIn, GitHub, etc. */}
                    </div>
                </div>
            </div>
        </footer>
    );
}
