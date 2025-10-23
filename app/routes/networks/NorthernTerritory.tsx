import React from "react";

interface Props {
    onClick: () => void;
}

const NorthernTerritory = ({ onClick }: Props) => {
    return (
        <div className="network">
            <h1>Northern Territory</h1>
            <div>
                <h2>Stats</h2>
                <p>Population: 262,200</p>
                <p>Number of stations</p>
                <p>Max frequency</p>
                <p>Pricing</p>
            </div>
            <h2>There is no map :(</h2>
        </div>
    );
};

export default NorthernTerritory;
