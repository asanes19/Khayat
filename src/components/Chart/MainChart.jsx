import React, { useEffect, useState } from "react";
import { Tree } from "react-organizational-chart";
import DivisionNode from "./DivisionNode";
import { baseNode, activeNode } from "./nodeStyles";
import dummyData from "./DummyData";

const MainChart = () => {
  const [divisions, setDivisions] = useState([]);
  const [expanded, setExpanded] = useState({ division: null, city: null });

  useEffect(() => {
    setDivisions(dummyData);

    // Expand the first division and its first city by default
    if (dummyData.length > 0) {
      setExpanded({ division: 0, city: 0 });
    }
  }, []);

  return (
    <div className=" flex items-start justify-center p-10">
      <Tree
        label={
          <div className={`${baseNode} ${activeNode}`}>
                  <h1 className="text-xl font-bold">Company Logo</h1>

          </div>
        }
        lineWidth="2px"
        lineColor="#041E60"
        lineBorderRadius="8px"
      >
        {divisions.map((div, i) => (
          <DivisionNode
            key={i}
            {...div}
            index={i}
            expanded={expanded}
            setExpanded={setExpanded}
          />
        ))}
      </Tree>
    </div>
  );
};

export default MainChart;
