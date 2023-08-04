import { FcNavBar } from "./components/FcNavBar/FcNavBar";
import { FcMain } from "./components/FcMain/FcMain";
import { FcAboutMe } from "./components/FcAboutMe/FcAboutMe";
import { InitResizeScreenWatcher } from "./services/helper";
import { setInitialTheme } from "./services/theme";
import { FcSkills } from "./components/FcSkills/FcSkills";
import { FcProjects } from "./components/FcProjects/FcProjects";
import { FcExperiences } from "./components/FcExperiences/FcExperiences";
import { FcContactMe } from "./components/FcContactMe/FcContactMe";
import { FcFooter } from "./components/FcFooter/FcFooter";

function App() {
  setInitialTheme();
  return (
    <div className="App">
      <InitResizeScreenWatcher />
      <FcNavBar />
      <FcMain />
      <FcAboutMe />
      <FcSkills />
      <FcProjects />
      <FcExperiences />
      <FcContactMe />
      <FcFooter />
    </div>
  );
}

export default App;
