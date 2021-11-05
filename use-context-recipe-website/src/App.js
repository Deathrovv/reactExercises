import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import SaladMaker from "./components/SaladMaker";
import UserContext from "./components/User";

const User = {
  name: "Aro M",
  favorites: ["avocado", "carrot"],
};

function App() {
  return (
    <>
      <UserContext.Provider value={User}>
        <Navigation />
        <SaladMaker />
      </UserContext.Provider>
    </>
  );
}

export default App;
