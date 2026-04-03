import { TreeNode } from "react-organizational-chart";
import CityNode from "./CityNode";
import { baseNode, activeNode, inactiveNode } from "./nodeStyles";

const DivisionNode = ({ division, index, cities, expanded, setExpanded }) => (
  <TreeNode
    label={
      <div
        className={`${baseNode} ${
          expanded.division === index ? activeNode : inactiveNode
        }`}
        onClick={() => setExpanded({ division: index, city: 0 })}
      >
        {division}
      </div>
    }
  >
    {expanded.division === index &&
      cities.map((cityObj, j) => (
        <CityNode
          key={j}
          {...cityObj}
          cityIndex={j}
          expanded={expanded}
          setExpanded={setExpanded}
        />
      ))}
  </TreeNode>
);

export default DivisionNode;
