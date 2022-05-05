import { Register } from "./Components/Register";
import { Routes,Route } from "react-router-dom";
import { Navbars } from "./Components/Navbar";
import { Login } from "./Components/Login";

function App() {
  return (
		<div className="App">
			<Navbars></Navbars>
			<Routes>
				<Route path="/Register" element={<Register />} />
				<Route path="/Login" element={<Login />} />
			</Routes>
		</div>
  );
}

export default App;
