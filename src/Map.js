import React from "react";
import ReactTooltip from "react-tooltip";

export const Map = ({ mapData }) => {

  return (
    <div className="enrichment__spain">
      <ReactTooltip
        backgroundColor={"white"}
        textColor={"#0000004d"}
        multiline={true}
      />
      <svg viewBox="0 0 420 470">
        {mapData.map((m) => {
          return (
            <path key={m[2]} d={m[0]} data-tip={m[1]} />
          )
        })}
      </svg>
    </div>
  );
};