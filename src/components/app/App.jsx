import "./app.css"
import Navbar from "../navbar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Registration from "../autorisation/Registration";
import Login from "../autorisation/Login";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {auth} from "../../actions/user";
import Disk from "../disk/Disk";

function App() {
	const isAuth = useSelector(state => state.user.isAuth);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(auth());
	}, [])

	return (
		<BrowserRouter>
			<div className="app">
				<Navbar/>
				<div className="wrap">
					{!isAuth ?
						<Routes>
							<Route path="registration" element={<Registration/>}/>
							<Route path="login" element={<Login/>}/>
							<Route path="disk" element={<Disk/>}/>
						</Routes>
						:
						<Routes>
							<Route path="/" element={<Disk/>}/>
							<Route path="*" element={<Disk/>}/>
						</Routes>
					}
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
