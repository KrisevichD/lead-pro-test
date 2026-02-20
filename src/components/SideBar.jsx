import mainIcon from "/icons/nav/Vector-0.svg";
import gamesIcon from "/icons/nav/Vector-1.svg";
import updateIcon from "/icons/nav/Vector-2.svg";
import brandsIcon from "/icons/nav/Vector-3.svg";
import providersIcon from "/icons/nav/Vector-4.svg";
import bonusIcon from "/icons/nav/Vector-5.svg";
import appsIcon from "/icons/nav/Vector-6.svg";
import arrowIcon from "/icons/arrow.svg";

export default function SideBar() {
  const navList = [
    { icon: mainIcon, text: "Главная" },
    { icon: gamesIcon, text: "Игры" },
    { icon: updateIcon, text: "Обновления" },
    { icon: brandsIcon, text: "Бренды" },
    { icon: providersIcon, text: "Провайдеры" },
    { icon: bonusIcon, text: "Бонусы" },
    { icon: appsIcon, text: "Приложения" },
  ];

  const navSelectedIndex = 1;

  return (
    <div className="w-55 h-full bg-sidebar-bg border-r border-r-white/6 max-mb:w-screen">
      <ul className="flex flex-col gap-1 p-3 max-mb:flex-row overflow-x-auto">
        {navList &&
          navList.map((element, index) => (
            <Item
              key={index}
              icon={element.icon}
              text={element.text}
              isSelected={index === navSelectedIndex}
            />
          ))}
      </ul>
    </div>
  );
}

function Item({ icon, text, isSelected }) {
  return (
    <>
      {isSelected ? (
        <li className="h-9 p-2 flex items-center gap-3 cursor-pointer relative bg-focus-bg rounded-lg">
          <div className="flex items-center justify-center w-5 h-5">
            <img src={icon} />
          </div>
          <p className="text-focus pr-7">{text}</p>
          <div className="absolute top-0 right-0 p-2">
            <img src={arrowIcon} />
          </div>
        </li>
      ) : (
        <li className="h-9 p-2 flex items-center gap-3 cursor-pointer relative hover:bg-white/20 rounded-lg">
          <div className="flex items-center justify-center w-5 h-5">
            <img src={icon} />
          </div>
          <p className="text-primary">{text}</p>
        </li>
      )}
    </>
  );
}
