import React from "react";

const PublicFooter = () => {
    const date = new Date();
    return (
        <footer>
            <div className="p-8 text-center text-primary bg-dark">
                <span>Copyright © {date.getFullYear()} Event Planner | All Rights Reserved</span>
            </div>
        </footer>
    )
}

export default PublicFooter