import { TreeNode } from "react-organizational-chart";

const CompanyNode = ({ company, total }) => (
  <TreeNode
    label={
      <div
        className="
          inline-block border-2 border-[#041E60] rounded-lg 
          bg-[#E3E1D4] text-[#041E60] px-4 py-2 text-sm font-medium text-center
          max-w-[300px] whitespace-normal break-words
        "
      >
        {company}
        <br />({total})
      </div>
    }
  />
);

export default CompanyNode;
