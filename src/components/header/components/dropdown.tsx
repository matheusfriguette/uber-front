import { useState } from "react";

import Icon from "components/core/icon";

const Dropdown = ({ label, subitems }) => {
  const [open, setOpen] = useState(false);

  return (
    <button
      className="flex items-center py-2 px-3 rounded-3xl hover:bg-gray"
      onClick={(e) => setOpen(true)}
    >
      <div className="font-medium font-body text-white text-sm">{label}</div>
      <div className="ml-2">
        <Icon
          name={open ? "arrowDown" : "arrowUp"}
          className="text-white fill-current"
          width={18}
          height={18}
        />
      </div>
    </button>
  );
};

export default Dropdown;
