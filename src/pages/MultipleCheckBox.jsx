import { useState } from "react";

export default function MultipleCheckBox() {
  const items = ["Apple", "Banana", "Cherry", "Date", "Kiwi"];
  const [selected, setSelected] = useState([]);
  const allSelected = selected.length === items.length;

  const handleChange = (item) => {
    if (selected.includes(item)) {
      setSelected(selected.filter((i) => i !== item));
    } else {
      setSelected([...selected, item]);
    }
  };

  const handleSelectAll = () => {
    if (allSelected) {
      setSelected([]);
    } else {
      setSelected(items);
    }
  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-xl p-6 w-[320px] border border-gray-200">
        <h1 className="text-lg font-semibold text-gray-900 mb-2">
          Multiple Check Box
        </h1>

        <p className="text-sm text-gray-600 mb-4">Which fruits do you like?</p>

        <label className="flex items-center gap-2 mb-3 cursor-pointer">
          <input
            type="checkbox"
            className="w-4 h-4 accent-gray-800"
            checked={allSelected}
            onChange={handleSelectAll}
          />
          <span className="text-gray-800 font-medium">All Fruits</span>
        </label>

        <div className="flex flex-col gap-2">
          {items.map((item, index) => (
            <label
              key={index}
              className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 px-2 py-1 rounded-md"
            >
              <input
                type="checkbox"
                className="w-4 h-4 accent-gray-800"
                checked={selected.includes(item)}
                onChange={() => handleChange(item)}
              />
              <span className="text-gray-700">{item}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
