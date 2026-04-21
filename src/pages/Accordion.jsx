import { useState } from "react";

const data = [
  {
    title: "What is React?",
    content: "React is a JavaScript library for building user interfaces.",
  },
  {
    title: "What is Tailwind?",
    content: "Tailwind is a utility-first CSS framework.",
  },
  {
    title: "Why use Accordion?",
    content: "To show/hide content efficiently and save space.",
  },
];

function AccordionComponent() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="max-w-md w-full bg-white border border-blue-200 rounded-2xl shadow-sm overflow-hidden">
      {data.map((item, index) => {
        const isActive = index === activeIndex;

        return (
          <div
            key={index}
            className="border-b last:border-none border-blue-100"
          >
            <button
              onClick={() => toggle(index)}
              className={`w-full flex justify-between items-center px-5 py-4 text-left font-medium transition
              ${
                isActive
                  ? "bg-blue-50 text-blue-600"
                  : "bg-white text-gray-800 hover:bg-blue-50"
              }`}
            >
              {item.title}

              <span
                className={`text-lg transition-transform duration-300 ${
                  isActive ? "rotate-180 text-blue-500" : "text-gray-400"
                }`}
              >
                ⌄
              </span>
            </button>
            <div
              className={`transition-all duration-300 overflow-hidden ${
                isActive ? "max-h-40" : "max-h-0"
              }`}
            >
              <p className="px-5 pb-4 text-sm text-gray-600 leading-relaxed bg-blue-50">
                {item.content}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function Accordion() {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center py-12">
      <h1 className="text-3xl font-semibold text-gray-800 mb-8">
        Accordion (Single Open)
      </h1>

      <AccordionComponent />
    </div>
  );
}
