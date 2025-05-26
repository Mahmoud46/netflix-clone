import { useEffect, useState, type ReactNode } from "react";
import Home from "./pages/Home/Home";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Player from "./pages/Player/Player";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/Firbase.config";
import { ToastContainer } from "react-toastify";
import Landing from "./pages/Landing/Landing";

function App(): ReactNode {
	const queryClient = new QueryClient();
	const [home, setHome] = useState<ReactNode>(<Landing />);
	const navigate = useNavigate();

	useEffect(() => {
		onAuthStateChanged(auth, async (user) => {
			if (user) {
				console.log("Logged In");
				setHome(<Home />);
				navigate("/");
			} else {
				console.log("Logged Out");
				navigate("/");
				setHome(<Landing />);
			}
		});
	}, []);

	return (
		<QueryClientProvider client={queryClient}>
			<main>
				<ToastContainer theme="dark" />
				<Routes>
					<Route path="/" element={home} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Login />} />
					<Route path="/trailer/:id" element={<Player />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</main>
		</QueryClientProvider>
	);
}

export default App;
