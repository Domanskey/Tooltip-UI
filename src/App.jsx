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
        <p
          className="
            hidden group-hover:block
            bg-neutral-950 text-stone-50 
            cursor-default 
            whitespace-nowrap text-sm text-left 
            p-2.5 rounded-lg 
            absolute left-1/2 bottom-9 -translate-x-1/2
            
            after:absolute 
            after:bottom-0.5 after:translate-y-full
            after:left-1/2 after:-translate-x-1/2 
            after:w-0 after:h-0 
            after:border-l-12 after:border-l-transparent 
            after:border-r-12 after:border-r-transparent 
            after:border-t-10 after:border-neutral-950

            animate-scale
            "
        >
          {toolTipInfo}
        </p>
      </button>
    </li>
  );
}
