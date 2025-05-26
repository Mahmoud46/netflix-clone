import { useEffect, useState, type ReactNode } from "react";
import styles from "./Login.module.scss";
import netflixLogo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { login, signup } from "../../config/Firbase.config";
import loadingAnimation from "../../assets/netflix_spinner.gif";

export default function Login(): ReactNode {
	const location = useLocation();
	const [isLogin, setIsLogin] = useState<boolean>(false);
	const [fullname, setFullname] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const userAuth = async (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		setIsLoading(true);
		e.preventDefault();
		if (isLogin) await login(email, password);
		else await signup(fullname, email, password);
		setIsLoading(false);
	};

	useEffect(() => {
		setIsLogin(location.pathname.includes("login"));
	}, [location]);

	return (
		<>
			{isLoading && <img src={loadingAnimation} className={styles.spinner} />}
			{!isLoading && (
				<div className={styles.login}>
					<img src={netflixLogo} alt="" className={styles["login-logo"]} />
					<div className={styles["login-form"]}>
						<h1>Sign {isLogin ? "In" : "Up"}</h1>
						<form>
							{!isLogin && (
								<input
									type="text"
									placeholder="Full Name"
									value={fullname}
									onChange={(e) => setFullname(e.target.value)}
									required
								/>
							)}
							<input
								type="email"
								placeholder="Email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
							<input
								type="password"
								placeholder="Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
							<button type="submit" onClick={userAuth}>
								Sign {isLogin ? "In" : "Up"}
							</button>

							<div className={styles["form-help"]}>
								<div className={styles.remember}>
									<input type="checkbox" name="remember_me" id="remember-me" />
									<label htmlFor="remember-me">Remember Me</label>
								</div>
								<p>Need Help?</p>
							</div>
						</form>
						<div className={styles["form-switch"]}>
							{isLogin && (
								<p>
									New to Netflix?{" "}
									<span>
										<Link to={"/signup"}>Sign up now.</Link>
									</span>
								</p>
							)}
							{!isLogin && (
								<p>
									Already have account?{" "}
									<span>
										<Link to={"/login"}>Sign in now.</Link>
									</span>
								</p>
							)}
						</div>
					</div>
				</div>
			)}
		</>
	);
}
