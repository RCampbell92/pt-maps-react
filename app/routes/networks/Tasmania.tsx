import React from "react";

interface Props {
    onClick: () => void;
}

const Tasmania = ({ onClick }: Props) => {
    return (
        <div className="network">
            <h1>Tasmania</h1>
            <div>
                <h2>Stats</h2>
                <p>Population: 575,800</p>
                <p>Number of stations</p>
                <p>Max frequency</p>
                <p>Pricing</p>
            </div>
            <h2>There is no map :(</h2>
        </div>
    );
};

export default Tasmania;
