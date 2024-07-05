import React from "react"

function Card ( {children} ) {
    return (
        <div className="h-full bg-gray-800 shadow-md rounded-lg p-6 flex flex-col space-y-4">
            {children}
        </div>
    )
}

export default Card;