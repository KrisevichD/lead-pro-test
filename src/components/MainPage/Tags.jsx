import { useState } from "react";

export default function Tags() {
  const tagList = [
    {
      image: "/icons/tags/all.svg",
      value: "all",
      label: "Все",
    },
    {
      image: "/icons/tags/fast.svg",
      value: "fast",
      label: "Быстрые Игры",
    },
    {
      image: "/icons/tags/slots.svg",
      value: "slots",
      label: "Слоты",
    },
    {
      image: "/icons/tags/casino.svg",
      value: "casino",
      label: "Казино",
    },
    {
      image: "/icons/tags/live-casino.svg",
      value: "live",
      label: "Лайв Казино",
    },
    {
      image: "/icons/tags/popular.svg",
      value: "popular",
      label: "Популярные",
    },
    {
      image: "/icons/tags/new.svg",
      value: "new",
      label: "Новые",
    },
    {
      image: "/icons/tags/bonus.svg",
      value: "bonus",
      label: "Покупка бонуса",
    },
  ];

  const [selectedTag, setSelectedTag] = useState(0);

  return (
    <div className="flex flex-wrap justify-between overflow-x-auto items-center gap-1 mb-4">
      {tagList &&
        tagList.map((element, index) => (
          <>
            <div key={element.value} className="flex gap-4">
              <div className="relative cursor-pointer">
                <input
                  type="radio"
                  name="tags"
                  id={"tags-" + element.value}
                  value={element.value}
                  className="hidden peer"
                />
                <label
                  htmlFor={"tags-" + element.value}
                  className="p-1.5 rounded-md flex items-center gap-1.5 peer-checked:bg-focus-bg peer-checked:text-focus cursor-pointer"
                >
                  <img
                    src={element.image}
                    className="w-4 h-4"
                    width={16}
                    height={16}
                  />
                  <div className="text-xs">{element.label}</div>
                </label>
              </div>
            </div>
            <div className="w-6 h-px bg-linear-to-r from-line-1/20 via-line-2/20 to-line-1/4 -rotate-60"></div>
          </>
        ))}
      <button className="text-xs p-1.5 rounded-md flex items-center gap-1.5 hover:bg-white/10 cursor-pointer">
        <img src="/icon-search.svg" width={16} height={16} />
        Найти игру
      </button>
    </div>
  );
}
