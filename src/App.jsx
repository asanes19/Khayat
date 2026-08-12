import AboutUs from "./components/AboutUs";
import MainChart from "./components/Chart/MainChart";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg-gray-50 flex flex-col justify-center overflow-x-hidden min-h-screen">
      <Header />
      <AboutUs />
      <MainChart />
    </div>
  );
}

export default App;
