import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Main from "./components/MainPage/Main";

export default function App() {
  return (
    <div className="text-white min-h-screen relative overflow-hidden">
      <div className="fixed top-0 left-0 w-screen">
        <Header />
      </div>
      <div className="flex flex-wrap h-screen pt-15.5 ">
        <div className="fixed h-full left-0 max-mb:h-auto max-mb:relative">
          <SideBar />
        </div>
        <div className="h-full w-full pl-55 max-mb:pl-0">
          <Main />
        </div>
      </div>
      <img
        src="/polygon.svg"
        className="absolute -bottom-50 -right-42 w-152 h-90 blur-3xl -z-2"
      />
    </div>
  );
}
