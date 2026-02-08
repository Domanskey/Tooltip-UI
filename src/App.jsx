import "./index.css";

export default function App() {
  return (
    <nav>
      <ul className="flex flex-row justify-between gap-4 list-none">
        <Item isBefore={false} text={"Home"} toolTipInfo={"Go home"}></Item>
        <Item
          isBefore={true}
          text={"Projects"}
          toolTipInfo={"Here is everything I have build"}
        ></Item>
        <Item
          isBefore={true}
          text={"Blog"}
          toolTipInfo={"Check out my blog"}
        ></Item>
      </ul>
    </nav>
  );
}

function Item({ isBefore, text, toolTipInfo }) {
  return (
    <li
      className={
        isBefore ? "before:content-['•'] before:pr-4 before:text-gray-400" : ""
      }
    >
      <button className="group cursor-pointer relative">
        {text}
        <div className="hidden group-hover:block animate-scale">
          <p
            className="bg-neutral-950 text-stone-50 cursor-default p-2.5 whitespace-nowrap text-sm text-left rounded-lg 
            absolute left-1/2 bottom-9 -translate-x-1/2"
          >
            {toolTipInfo}
          </p>
          <div
            aria-hidden="true"
            className="absolute left-1/2 bottom-9 -translate-x-1/2 translate-y-full w-0 h-0 border-l-10 border-l-transparent border-r-10 border-r-transparent border-t-8 border-t-neutral-950"
          ></div>
        </div>
      </button>
    </li>
  );
}
