//import { useSelector } from "react-redux";
import { FcNavBar } from "./components/FcNavBar/FcNavBar";
import { FcMain } from "./components/FcMain/FcMain";
import { FcAboutMe } from "./components/FcAboutMe/FcAboutMe";
import { InitResizeScreenWatcher } from "./services/helper";
import { setInitialTheme } from "./services/theme";
import { FcSkills } from "./components/FcSkills/FcSkills";
import { FcProjects } from "./components/FcProjects/FcProjects";
import { FcExperiences } from "./components/FcExperiences/FcExperiences";

function App() {
  setInitialTheme();
  //const store = useSelector((state) => state);
  //console.log(store);
  return (
    <div className="App">
      <InitResizeScreenWatcher />
      <FcNavBar />
      <FcMain />
      <FcAboutMe />
      <FcSkills />
      <FcProjects />
      <FcExperiences />
    </div>
  );
}

export default App;
