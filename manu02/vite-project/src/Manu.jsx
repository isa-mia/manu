import React from "react";
import ManuItem from "./ManuItem";
function Manu({ showManuitems }) {
  return (
    <div className="section-center">
      {showManuitems.map((manuitem) => {
        return <ManuItem key={manuitem.id} {...manuitem} />;
      })}
    </div>
  );
}

export default Manu;
