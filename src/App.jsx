import "./index.css";

// .card__description::before {
//   content: "";
//   bottom: 0;
//   left: 3.5rem;
//   background-color: white;
//   transform: translate(-50%, 100%);
//   width: 0;
//   height: 0;

//   border-left: 10px solid transparent;
//   border-right: 10px solid transparent;
//   border-top: 10px solid #1e1e1e;
//   border-bottom: 0 solid transparent;
//   position: absolute;
// }

export default function App() {
  return (
    <nav>
      <ul className="flex flex-row justify-between gap-4 list-none">
        <li>
          <button className="group cursor-pointer relative">
            Home
            <p
              className="hidden group-hover:block bg-neutral-950 text-stone-50 cursor-default p-2.5 whitespace-nowrap text-sm text-left rounded-lg 
            absolute left-1/2 bottom-10 -translate-x-1/2"
            >
              Go home
            </p>
            <div
              aria-hidden="true"
              className="hidden group-hover:block absolute left-1/2 bottom-10 -translate-x-1/2 translate-y-full w-0 h-0 border-l-10 border-l-transparent border-r-10 border-r-transparent border-t-8 border-t-neutral-950"
            ></div>
          </button>
        </li>
        <li className="before:content-['•'] before:pr-4 before:text-gray-400 before:aria-hidden:true">
          <button className="group cursor-pointer relative">
            Projects
            <p
              className="hidden group-hover:block bg-neutral-950 text-stone-50 cursor-default p-2.5 whitespace-nowrap text-sm text-left rounded-lg 
            absolute left-1/2 bottom-10 -translate-x-1/2"
            >
              Here is everything I have build
            </p>
            <div
              aria-hidden="true"
              className="hidden group-hover:block absolute left-1/2 bottom-10 -translate-x-1/2 translate-y-full w-0 h-0 border-l-10 border-l-transparent border-r-10 border-r-transparent border-t-8 border-t-neutral-950"
            ></div>
          </button>
        </li>
        <li className="before:content-['•'] before:pr-4 before:text-gray-400">
          <button className="group cursor-pointer relative">
            Blog
            <p
              className="hidden group-hover:block bg-neutral-950 text-stone-50 cursor-default p-2.5 whitespace-nowrap text-sm text-left rounded-lg 
            absolute left-1/2 bottom-10 -translate-x-1/2"
            >
              Check out my blog
            </p>
            <div
              aria-hidden="true"
              className="hidden group-hover:block absolute left-1/2 bottom-10 -translate-x-1/2 translate-y-full w-0 h-0 border-l-10 border-l-transparent border-r-10 border-r-transparent border-t-8 border-t-neutral-950"
            ></div>
          </button>
        </li>
      </ul>
    </nav>
  );
}
