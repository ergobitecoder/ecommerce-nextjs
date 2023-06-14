import React, { useContext, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Paper } from "@mui/material";
import { CartContext } from "@/context/cart";
import URL from "@/img-url.config";
import { useRouter } from "next/router";
import Link from "next/link";
import { verifyUser } from "@/api/auth";
import { ValidatePassword } from "@/api/password";
import { validateEmail } from "@/api/email";
import ErrorDisplay from "@/components/ErrorDisplay";
import { NextSeo } from "next-seo";
import SEO from "@/next-seo.config";

const Login = () => {
	const router = useRouter();
	const [email, setEmail] = useState({
		field: "email",
		email: "",
		isChanged: false,
	});
	const [password, setPassword] = useState({
		field: "Password",
		password: "",
		isChanged: false,
	});

	const [eemail, setEemail] = useState("");
	const [epass, setEpassword] = useState("");
	const [details, setEdetails] = useState("");
	const { cartState, cartDispatch } = useContext(CartContext);
	if (typeof window !== 'undefined') {
		var userId = window.localStorage?.getItem("authToken");
		var cartCount = window.localStorage?.getItem("cartCount")
	}

	// function to verify logged in user
	const foo = async (email, password) => {
		const data = await verifyUser(email, password);
		if (data === 'Email Id not Found') {
			setEemail('Email Id not Found');
		} else if (data === 'Invalid Password') {
			setEpassword('Invalid Password');
		}
		else if (data) {
			if (cartCount > 0) {
				router.push("/cart");
			} else {
				router.push("/");

			}
		} else {
			setEdetails("Please check your details");
		}
	};

	const onChangeUsername = (e) => {
		setEmail({ ...email, email: e.target.value, isChanged: true });
	};

	const onChangePassword = (e) => {
		setPassword({ ...email, password: e.target.value, isChanged: true });
	};

	// =========================================== validations for Email ===========================================
	useEffect(() => {
		validateEmail(email).then((result) => {
			!result.value ? setEemail(result.error) : setEemail("");
		});
	}, [email.email]);

	// =========================================== validations for password ===========================================
	useEffect(() => {
		ValidatePassword(password).then((result) => {
			!result.value ? setEpassword(result.error) : setEpassword("");
		});
	}, [password.password]);

	//function to login the user
	const handleSubmit = (event) => {
		event.preventDefault();
		if (email.email === "") {
			setEmail({ ...email, isChanged: true });
			setEemail("Email Can't Be Empty");
		}
		if (password.password === "") {
			setPassword({ ...password, isChanged: true });
			setEpassword("Password Can't Be Empty");
		}

		const data = new FormData(event.currentTarget);
		console.log({
			email: data.get("email"),
			password: data.get("password"),
		});
		if (data.get("email") !== "" && data.get("password") !== "") {
			foo(data.get("email"), data.get("password"));
		}
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<NextSeo
				title={SEO.login.title}
				description={SEO.login.description}
				noindex={true}
				nofollow={true}
				meta={[
					{
						name: 'keywords',
						content: SEO.login.keywords,
					},
				]}
			/>
			<div style={{ marginTop: '30px' }}>
				<Container component="main" sx={{ maxWidth: { lg: '1120px', xl: '1420px' } }}>

					<Paper sx={{ display: { sm: 'flex' } }}>
						<CssBaseline />
						<div>
							<img src={URL.user.image} alt="" width={'100%'} />
						</div>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center", width: { sm: '1000px' }, marginTop: { sm: '30px' }
							}}
						>
							<div className="sign">Sign in</div>

							<Box
								component="form"
								onSubmit={handleSubmit}
								noValidate
								sx={{ mt: 1 }}
							>
								<TextField
									margin="normal"
									required
									fullWidth
									id="email"
									label="Email Address"
									name="email"
									autoComplete="email"
									autoFocus
									value={email.email}
									onChange={onChangeUsername}
									sx={{ minWidth: '300px' }}
								/>
								<ErrorDisplay data={eemail} />
								<TextField
									margin="normal"
									required
									fullWidth
									name="password"
									label="Password"
									type="password"
									id="password"
									value={password.password}
									onChange={onChangePassword}
									autoComplete="current-password"
								/>
								<ErrorDisplay data={epass} />
								<ErrorDisplay data={details} />
								<div>
									{/* <Link> */}
									Forgot password?
									{/* </Link> */}
								</div>
								<div className="btnlayout">
									<div>
										<Button
											type="submit"
											fullWidth
											variant="contained"
											className="mt-[3px] mb-[2px] bg-[#FF00AE] border-r-[50px] w-[100px]"
										>
											Sign In
										</Button>
									</div>
									<div>OR</div>
									<div>
										<Link href={"/signup"} variant="body2">
											<Grid item className="text-black">
												{"Create New Account"}
											</Grid>
										</Link>
									</div>
								</div>

							</Box>
						</Box>
					</Paper>
				</Container>
			</div>

		</>
	);
};

export default Login;
