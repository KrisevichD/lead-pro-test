import logoImg from "/logo.svg";
import searchIcon from "/icon-search.svg";
import authBtnBg1 from "/btn-auth-1.svg";
import authBtnBg2 from "/btn-auth-2.svg";

export default function Header() {
  return (
    <>
      <div className="flex justify-between items-center pl-3 pr-[19.39px] border-b border-white/6 bg-header-bg/10 h-15.5 w-auto ">
        <div className="flex items-center justify-between gap-26.75 max-tb:gap-2">
          <Logo />
          <Search />
        </div>
        <Auth />
      </div>
    </>
  );
}

function Logo() {
  return (
    <>
      <img className="w-31.25 h-8" src={logoImg} />
    </>
  );
}

function Search() {
  return (
    <div className="relative w-81 h-9.75 max-tb:w-9.75">
      <input
        type="text"
        id="search"
        placeholder="Поиск по порталу"
        className="w-81 h-9.75 text-primary pl-3.75 px-3 pr-9.75 bg-header-search-bg/10 border border-white/10 rounded max-tb:hidden"
      />
      <button className="absolute w-9.75 h-9.75 top-0 right-0 flex items-center justify-center cursor-pointer">
        <img src={searchIcon} alt="Найти" className="w-3.75 h-3.75" />
      </button>
    </div>
  );
}

function Auth() {
  return (
    <>
      <div className="flex items-center justify-center gap-3">
        <button className=" w-[112.84px] h-11.5 bg-(image:--auth-bg-1) bg-cover cursor-pointer">
          Вход
        </button>
        <button className="w-[157.77px] h-11.5 bg-(image:--auth-bg-2) bg-cover cursor-pointer">
          Регистрация
        </button>
      </div>
    </>
  );
}
