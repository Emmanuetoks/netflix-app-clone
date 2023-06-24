import React from "react";

interface ButtonProps {
    children: React.ReactNode
}

export default function Button({children}: ButtonProps) {
    return (
        <button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-[14px] rounded">
            {children}
        </button>
    )
}