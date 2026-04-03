import { TreeNode } from "react-organizational-chart";
import { baseNode, activeNode, inactiveNode } from "./nodeStyles";

const CityNode = ({ city, companies, cityIndex, expanded, setExpanded }) => (
  <TreeNode
    label={
      <div
        className={`${baseNode} ${
          expanded.city === cityIndex ? activeNode : inactiveNode
        }`}
        onClick={() =>
          setExpanded((prev) => ({ ...prev, city: cityIndex }))
        }
      >
        {city} ({companies.length})
      </div>
    }
  >
    {expanded.city === cityIndex && (
      <TreeNode
        label={
          <div className="flex flex-col gap-2 items-center">
            {companies.map((company, i) => (
              <div
                key={i}
                className="
                  inline-block border-2 border-[#041E60] rounded-lg 
                  bg-[#E3E1D4] text-[#041E60] px-4 py-2 text-sm font-medium text-center
                  max-w-[300px] whitespace-normal break-words
                "
              >
                {company}
              </div>
            ))}
          </div>
        }
      />
    )}
  </TreeNode>
);

export default CityNode;
