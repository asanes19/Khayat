import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import { Tree, TreeNode } from "react-organizational-chart";

const OwnershipChart = () => {
  const [divisions, setDivisions] = useState([]);
  const [expandedDivision, setExpandedDivision] = useState(0);
  const [expandedCity, setExpandedCity] = useState(0);

  useEffect(() => {
    const fetchExcel = async () => {
      const file = await fetch("/TLS.xlsx");
      const arrayBuffer = await file.arrayBuffer();
      const workbook = XLSX.read(arrayBuffer, { type: "array" });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const rows = XLSX.utils.sheet_to_json(sheet);

      // Group: Division -> City -> Companies
      const grouped = {};
      rows.forEach((row) => {
        if (!grouped[row.Division]) grouped[row.Division] = {};
        if (!grouped[row.Division][row.City]) grouped[row.Division][row.City] = [];
        grouped[row.Division][row.City].push(row["Company Name"]);
      });

      const structured = Object.entries(grouped).map(([division, cities]) => ({
        division,
        cities: Object.entries(cities).map(([city, companies]) => ({
          city,
          firstCompany: companies[0],
          total: companies.length,
        })),
      }));

      setDivisions(structured);
    };

    fetchExcel();
  }, []);

  // ✅ reusable node style
  const nodeStyle = (active = false) => ({
    display: "inline-block",
    border: "2px solid #041E60",
    borderRadius: "8px",
    background: active ? "#E3E1D4" : "#FFFFFF",
    color: "#041E60",
    padding: "10px 15px",
    fontSize: "14px",
    fontWeight: "500",
    textAlign: "center",
    whiteSpace: "nowrap",
    cursor: "pointer",
  });

  return (
    <div className="w-screen h-screen overflow-auto flex items-start justify-center bg-gray-50 p-10">
      <Tree
        label={<div style={nodeStyle(true)}>Alkhayat</div>}
        lineWidth={"2px"}
        lineColor={"#041E60"}
        lineBorderRadius={"8px"}
      >
        {divisions.map((div, i) => (
          <TreeNode
            key={i}
            label={
              <div
                style={nodeStyle(expandedDivision === i)}
                onClick={() => {
                  setExpandedDivision(i);
                  setExpandedCity(0);
                }}
              >
                {div.division}
              </div>
            }
          >
            {/* ✅ render cities only if this division is expanded */}
            {expandedDivision === i &&
              div.cities.map((cityObj, j) => (
                <TreeNode
                  key={j}
                  label={
                    <div
                      style={nodeStyle(expandedCity === j)}
                      onClick={() => setExpandedCity(j)}
                    >
                      {cityObj.city}
                    </div>
                  }
                >
                  {/* ✅ render company only if this city is expanded */}
                  {expandedCity === j && (
                    <TreeNode
                      label={
                        <div
                          style={{
                            ...nodeStyle(true),
                            maxWidth: "300px",
                            whiteSpace: "normal",
                            wordWrap: "break-word",
                            overflowWrap: "break-word",
                            textAlign: "center",
                          }}
                        >
                          {cityObj.firstCompany}
                          <br />({cityObj.total})
                        </div>
                      }
                    />
                  )}
                </TreeNode>
              ))}
          </TreeNode>
        ))}
      </Tree>
    </div>
  );
};

export default OwnershipChart;
