import React from 'react';

export const Button = ({
    children,
    variant = 'primary',
    className = "",
    href,
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-200 active:scale-95";

    const variants = {
        primary: "bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-100 shadow-premium hover:shadow-premium-hover",
        secondary: "bg-white text-black border border-gray-200 hover:bg-gray-50 dark:bg-[#111] dark:text-white dark:border-gray-700 dark:hover:bg-[#222] shadow-sm",
        ghost: "bg-transparent text-black dark:text-white hover:bg-gray-100 dark:hover:bg-[#111]",
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

    if (href) {
        return (
            <a href={href} className={combinedClassName} {...props}>
                {children}
            </a>
        );
    }

    return (
        <button className={combinedClassName} {...props}>
            {children}
        </button>
    );
};
