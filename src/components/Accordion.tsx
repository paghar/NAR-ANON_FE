import {useState} from "react";

interface Item {
  title: string;
  description: string;
  image?: string;
}

interface Props {
  items: Item[];
}

const Accordion = ({items}: Props) => {
  const [open, setOpen] = useState<number[]>([]);
  const toggleAccordion = (index: number) => {
    const newOpen = [...open];
    if (newOpen.includes(index)) {
      newOpen.splice(newOpen.indexOf(index), 1);
    } else {
      newOpen.push(index);
    }
    setOpen(newOpen);
  };

  return (
    <div className="bg-gradient-to-br from-pink-50 to-indigo-100 grid place-items-center">
      <div className="w-full mx-auto rounded border-2 border-gray-100">
        <div className="bg-white shadow-sm">
          {/* Item */}
          {items.map((item, i) => (
            <div className="transition hover:bg-indigo-50" key={i}>
              <div
                className="bg-gray-100 cursor-pointer transition flex space-x-5 px-5 items-center h-16"
                onClick={() => toggleAccordion(i)}
              >
                <h3>
                  <span className="text-2xl w-8 float-right -mt-1 text-center">
                    {open.includes(i) ? "–" : "+"}
                  </span>
                  {item.title}
                </h3>
              </div>
              <div className={`px-5 p-0 overflow-hidden ${!open.includes(i) ? "max-h-0" : ""}`}>
                <div className="columns-2 columns-sm p-5">
                  {item.image && <img src={item.image} className="rounded mb-5" />}
                  <div className="leading-6 font-light pl-9 text-justify">{item.description}</div>
                </div>
              </div>
            </div>
          ))}
          {/* End of Item */}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
