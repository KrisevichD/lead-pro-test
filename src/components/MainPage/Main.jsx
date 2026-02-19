import { Link } from "react-router";
import GameList from "./GameList";
import Tags from "./Tags";
import { GAMES } from "./games";

export default function Main() {
  return (
    <div className="p-4">
      <Breadcrumbs />
      <h1 className="font-bold text-xl mb-5">Игры</h1>
      <FiltersList />
      <Tags />
      <GameList list={GAMES} />
    </div>
  );
}

function Breadcrumbs() {
  return (
    <div className="flex items-center gap-1.5 text-xs mb-5">
      <img src="/icons/home.svg" />
      <div className="text-xs">
        <Link to="#">Главная</Link>
        <span> / </span>
        <Link to="#">игры</Link>
      </div>
    </div>
  );
}

function FiltersList() {
  const options1 = [
    { value: "1", label: "Популярности" },
    { value: "2", label: "Популярности 2" },
    { value: "3", label: "Популярности 3" },
  ];
  const options2 = [
    { value: "1", label: "Популярности" },
    { value: "2", label: "Популярности 2" },
    { value: "3", label: "Популярности 3" },
  ];
  const options3 = [
    { value: "1", label: "Провайдер 1" },
    { value: "2", label: "Провайдер 2" },
    { value: "3", label: "Провайдер 3" },
  ];

  return (
    <div className="flex flex-wrap p-2 gap-2.5 bg-focus-bg/50 rounded-lg mb-3">
      <Filter label="Сортировать по" options={options1} />
      <Filter label="Сортировать по" options={options2} />
      <Filter label="Провайдер" options={options3} />
      <button className="cursor-pointer">
        <img src="/icons/filter.svg" />
      </button>
    </div>
  );
}

function Filter({ label, options }) {
  return (
    <div className="relative">
      <p className="absolute left-4.5 -top-1.75 p-0.5 font-light text-xxs text-white/50 bg-select-bg">
        {label}
      </p>
      <select className="min-w-48 h-9 py-2.5 pl-3 pr-8 font-light text-xs border border-select-border/20 rounded-lg">
        {options &&
          options.map((element, index) => (
            <option key={index} value={element.value} className="bg-select-bg">
              {element.label}
            </option>
          ))}
      </select>
    </div>
  );
}
