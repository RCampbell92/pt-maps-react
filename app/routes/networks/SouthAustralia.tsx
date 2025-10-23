import React from "react";

interface Props {
    onClick: () => void;
}

const SouthAustralia = ({ onClick }: Props) => {
    return (
        <div className="network">
            <h1>South Australia</h1>
            <div>
                <h2>Stats</h2>
                <p>Population: 1,891,700</p>
                <p>Number of stations</p>
                <p>Km of electrified lines</p>
                <p>Passengers</p>
                <p>Number of services</p>
                <p>Max frequency</p>
                <p>Pricing</p>
            </div>
            <img
                src="../network_maps/adelaide-train-map.png"
                onClick={onClick}
            ></img>
        </div>
    );
};

export default SouthAustralia;
