import React from "react";

interface Props {
    onClick: () => void;
}

const WesternAustralia = ({ onClick }: Props) => {
    return (
        <div className="network">
            <h1>Western Australia</h1>
            <div>
                <h2>Stats</h2>
                <p>Population: 3,008,700</p>
                <p>Number of stations</p>
                <p>Km of electrified lines</p>
                <p>Passengers</p>
                <p>Number of services</p>
                <p>Max frequency</p>
                <p>Pricing</p>
            </div>
            <img
                src="../network_maps/perth-train-map.jpg"
                onClick={onClick}
            ></img>
            <img src="../network_maps/wa-train-map.jpg" onClick={onClick}></img>
        </div>
    );
};

export default WesternAustralia;
