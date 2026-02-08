import "./index.css";

function App() {
  return (
    <nav>
      <ul className="flex flex-row justify-between gap-4 list-none">
        <li>
          <button className="cursor-pointer">Home</button>
        </li>
        <li className="before:content-['•'] before:pr-4 before:text-gray-400">
          <button className="cursor-pointer">Projects</button>
        </li>
        <li className="before:content-['•'] before:pr-4 before:text-gray-400">
          <button className="cursor-pointer">Blog</button>
        </li>
      </ul>
    </nav>
  );
}

export default App;
