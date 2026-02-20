import { useState } from "react";
import iconAll from "/icons/tags/all.svg";
import iconFast from "/icons/tags/fast.svg";
import iconSlots from "/icons/tags/slots.svg";
import iconCasino from "/icons/tags/casino.svg";
import iconLive from "/icons/tags/live-casino.svg";
import iconPopular from "/icons/tags/popular.svg";
import iconNew from "/icons/tags/new.svg";
import iconBonus from "/icons/tags/bonus.svg";
import iconSearch from "/icon-search.svg";

export default function Tags() {
  const tagList = [
    {
      image: iconAll,
      value: "all",
      label: "Все",
    },
    {
      image: iconFast,
      value: "fast",
      label: "Быстрые Игры",
    },
    {
      image: iconSlots,
      value: "slots",
      label: "Слоты",
    },
    {
      image: iconCasino,
      value: "casino",
      label: "Казино",
    },
    {
      image: iconLive,
      value: "live",
      label: "Лайв Казино",
    },
    {
      image: iconPopular,
      value: "popular",
      label: "Популярные",
    },
    {
      image: iconNew,
      value: "new",
      label: "Новые",
    },
    {
      image: iconBonus,
      value: "bonus",
      label: "Покупка бонуса",
    },
  ];

  const [selectedTag, setSelectedTag] = useState(0);

  return (
    <div className="flex flex-wrap justify-between items-center gap-1 mb-4">
      {tagList &&
        tagList.map((element, index) => (
          <div key={element.value}>
            <div className="flex gap-4">
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
          </div>
        ))}
      <button className="text-xs p-1.5 rounded-md flex items-center gap-1.5 hover:bg-white/10 cursor-pointer">
        <img src={iconSearch} width={16} height={16} />
        Найти игру
      </button>
    </div>
  );
}
