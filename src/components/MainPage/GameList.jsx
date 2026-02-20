import { Link } from "react-router";
import iconBomb from "/icons/bomb.svg";

export default function GameList({ list }) {
  return (
    <>
      <div className="flex flex-wrap justify-between gap-1.5 overflow-y-auto h-135">
        {list &&
          list.map((element) => (
            <Item
              key={element.id}
              link={element.url}
              img={element.image}
              label={element.label}
            />
          ))}
      </div>
    </>
  );
}

function Item({ link, img, label }) {
  return (
    <>
      <Link to={link} className="w-58 max-tb:w-48 max-mb:w-28">
        <div className="rounded-xl w-auto">
          <img
            className="rounded-t-xl w-full"
            src={img}
            width={232}
            height={152}
          />
          <div className="rounded-b-xl bg-focus-bg flex justify-between items-center h-fit w-full p-1">
            <p className="ml-[2.88px] text-xs">{label}</p>
            <img src={iconBomb} width={20} height={20} />
          </div>
        </div>
      </Link>
    </>
  );
}
