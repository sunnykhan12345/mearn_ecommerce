import "./App.css";
import MainCarusel from "./customer/compoennts/homecarusel/MainCarusel";
import HomeSectionCarusel from "./customer/compoennts/homesectioncarseul/HomeSectionCarusel";
import Navbar from "./customer/compoennts/navbar/Navbar";
import { Mens_Kurta } from "../src/data/Mens_kurta";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainCarusel />
      <div className="space-y-10 py-20 flex flex-col justify-center px-4 lg:px-10">
        <HomeSectionCarusel data={Mens_Kurta} />
        <HomeSectionCarusel data={Mens_Kurta} />
        <HomeSectionCarusel data={Mens_Kurta} />
        <HomeSectionCarusel data={Mens_Kurta} />
      </div>
    </div>
  );
}

export default App;
