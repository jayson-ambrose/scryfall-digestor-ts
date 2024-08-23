import React from "react";

export default function CardImageArea ({ children }: { children: React.ReactNode }) {

    return(
        <div className="flex w-1/2 justify-center align-center">
            {children}
        </div>
    )
}