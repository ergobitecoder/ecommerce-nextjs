import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { MenuItem, Paper, Switch } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
import { useStyles } from '../styles/signup.styles.js';
import { ValidatePassword } from '@/api/password';
import { validateEmail } from '@/api/email';
import { getMasterUsersData, saveUser } from '@/api/auth';
import { useRouter } from 'next/router';
import URL from '@/img-url.config';
import ErrorDisplay from '@/components/ErrorDisplay.js';
import Link from "next/link";
import { NextSeo } from 'next-seo';
import SEO from '@/next-seo.config.js';
const Signup = () => {
	const classes = useStyles()
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const router = useRouter();
	const [master, setMaster] = useState();
	useEffect(() => {
		const fetchData = async () => {
			const fielddata = await getMasterUsersData();
			setMaster(fielddata.data.result);
		};
		fetchData().catch(console.error);
	}, []);

	const [firstName, setFirstName] = useState({
		field: "firstName",
		firstName: "",
		isChanged: false,
	});
	const [lastName, setLastName] = useState({
		field: "lastName",
		lastName: "",
		isChanged: false,
	});
	const [email, setEmail] = useState({
		field: "email",
		email: "",
		isChanged: false,
	});
	const [mobile, setMobile] = useState({
		field: "mobile",
		mobile: "",
		isChanged: false,
	});
	const [password, setPassword] = useState({
		field: "Password",
		password: "",
		isChanged: false,
	});

	const [ordersCount, setOrderCount] = useState({
		field: "ordersCount",
		ordersCount: "",
		isChanged: false,
	});
	const [verified, setVerified] = useState({
		field: "verified",
		verified: "",
		isChanged: false,
	});
	const [ipAddress, setIpAddress] = useState({
		field: "ipAddress",
		ipAddress: "",
		isChanged: false,
	});
	const [roles, setRoles] = useState({
		field: "roles",
		roles: "",
		isChanged: false,
	});
	const [status, setStatus] = useState("0");
	const [eemail, setEemail] = useState("");
	const [epass, setEpassword] = useState("");
	const [efirstName, setEfirstName] = useState("");
	const [elastName, setElastName] = useState("");
	const [Emobile, setEmobile] = useState('');
	const [EordersCount, setEordersCount] = useState('');
	const [Everified, setEverified] = useState('');
	const [Estatus, setEstatus] = useState('');
	const [Erole, setErole] = useState('');
	const [EipAddress, setEipAddress] = useState('');

	const [open, setOpen] = React.useState(false);
	const [isError, setIsError] = useState(false);

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}
		setOpen(false);
	};

	const onChangeUsername = (e) => {
		setEmail({ ...email, email: e.target.value, isChanged: true });
	};
	const onChangePassword = (e) => {
		setPassword({ ...password, password: e.target.value, isChanged: true });
	};
	const onChangeFirstName = (e) => {
		setFirstName({ ...firstName, firstName: e.target.value, isChanged: true });
	};
	const onChangeLastName = (e) => {
		setLastName({ ...lastName, lastName: e.target.value, isChanged: true });
	};

	// =========================================== validations for Email ===========================================
	useEffect(() => {
		if (ipAddress.ipAddress === "" && ipAddress.isChanged === true) {
			setEipAddress("ipAddress can't Be Empty.");
		} else {
			setEipAddress("");
		}
	}, [ipAddress.ipAddress]);

	useEffect(() => {
		if (roles.roles === "" && roles.isChanged === true) {
			setErole("please select masterrole");
		} else {
			setErole("");
		}
	}, [roles.roles]);

	useEffect(() => {
		if (ordersCount.ordersCount === "" && ordersCount.isChanged === true) {
			setEordersCount("ordersCount can't Be Empty.");
		} else {
			setEordersCount("");
		}
	}, [ordersCount.ordersCount]);


	useEffect(() => {
		if (mobile.mobile === "" && mobile.isChanged === true) {
			setEmobile("Mobile can't Be Empty.");
		}
		else if (mobile.mobile.length !== 10 && mobile.isChanged === true) {
			setEmobile("Minimum Phone number Length should be Ten characters");
		} else {
			setEmobile("");
		}
	}, [mobile.mobile]);
	useEffect(() => {
		if (firstName.firstName === "" && firstName.isChanged === true) {
			setEfirstName("First name can't Be Empty.");
		} else {
			setEfirstName("");
		}
	}, [firstName.firstName]);
	useEffect(() => {
		if (lastName.lastName === "" && lastName.isChanged === true) {
			setElastName("Last name can't Be Empty.");
		} else {
			setElastName("");
		}
	}, [lastName.lastName]);

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

	//function to handle sign up the user
	const handleSubmit = async (event) => {
		event.preventDefault();
		//validation to firstname when its empty
		if (firstName.firstName === "") {
			setFirstName({ ...firstName, isChanged: true });
			setEfirstName("FirstName Can't Be Empty");
		}
		//validation to lastName when its empty
		if (lastName.lastName === "") {
			setLastName({ ...lastName, isChanged: true });
			setElastName("LastName Can't Be Empty");
		}
		//validation to email when its empty
		if (email.email === "") {
			setEmail({ ...email, isChanged: true });
			setEemail("Email Can't Be Empty");
		}
		//validation to Password when its empty
		if (password.password === "") {
			setPassword({ ...password, isChanged: true });
			setEpassword("Password Can't Be Empty");
		}
		//validation to mobile when its empty
		if (mobile.mobile === "") {
			setMobile({ ...mobile, isChanged: true });
			setEmobile("mobile Can't Be Empty");
		}
		if (
			email.email === "" ||
			password.password === "" ||
			firstName.firstName === "" ||
			lastName.lastName === "" ||
			mobile.mobile === ""
		) {

		} else {

			const response = {
				email: email,
				password: password,
				firstName: firstName,
				lastName: lastName,
				mobile: mobile,
				ordersCount: ordersCount,
				verified: verified,
				status: status,
				ipAddress: ipAddress,
				roles: roles
			};

			const userData = response;
			const userRes = await saveUser(userData); //Api call to create new user
			if (userRes === 'Email already exists') { //Error response from Api if Email already exists
				setIsError(true);
				setOpen(true);
				setEemail('This email is already registered.');
			} else if (userRes === 'Mobile number already exists') { //Error response from Api if Mobile number already exists
				setIsError(true);
				setOpen(true);
				setEmobile('This mobile number is already registered.');
			} else if (userRes) {   //if user created succesfully navigate to welcome page
				setIsError(false);
				setOpen(true);
				router.push('/welcome')
			} else {
				setIsError(true);
				setOpen(true);
			}
		}
	};

	const [checked, setChecked] = useState(false);
	const handlestatus = (event) => {
		setChecked(event.target.checked)
		setStatus(checked === true ? "0" : "1")
	}
	return (
		<>
			<NextSeo
				title={SEO.signup.title}
				description={SEO.signup.description}
				noindex={true}
				nofollow={true}
				meta={[
					{
						name: 'keywords',
						content: SEO.signup.keywords,
					},
				]}
			/>
			<Container className='max-w-xs lg:max-w-[1120px] xl:max-w-[1420px]'>
				{/* <CssBaseline /> */}
				<Paper
					elevation={4}
					sx={{
						marginTop: '30px', marginBottom: '30px',
					}}
					className={classes.signup}
				>
					<div className='signimg'>
						<img src={URL.user.image} alt="" width={'100%'} />
					</div>

					<div>

						<Box noValidate onSubmit={handleSubmit} className='p-3 md:w-[500px] signform'>
							<Typography component="h1" variant="h5" className='text-center mb-[30px]'>
								Sign up
							</Typography>
							<TextField
								autoComplete="given-name"
								name="firstName"
								required
								fullWidth
								id="firstName"
								label="First Name"
								autoFocus
								value={firstName.firstName}
								onChange={onChangeFirstName}
								className='sm:min-w[400px]'
							/>
							<ErrorDisplay data={efirstName} />
							<Grid className='mt-4'>
								<TextField
									required
									fullWidth
									id="lastName"
									label="Last Name"
									name="lastName"
									autoComplete="family-name"
									value={lastName.lastName}
									onChange={onChangeLastName}
								/>
								<ErrorDisplay data={elastName} />
							</Grid>
							<Grid item xs={12} className='mt-4'>
								<TextField
									required
									fullWidth
									id="email"
									label="Email Address"
									name="email"
									autoComplete="email"
									value={email.email}
									onChange={onChangeUsername}
								/>
								<ErrorDisplay data={eemail} />
							</Grid>
							<Grid item xs={12} className='mt-4'>
								<TextField
									required
									fullWidth
									name="password"
									label="Password"
									type="password"
									id="password"
									autoComplete="new-password"
									value={password.password}
									onChange={onChangePassword}
								/>
								<ErrorDisplay data={epass} />
							</Grid>

							<Grid item xs={12} className='mt-4'>
								<TextField
									fullWidth
									outline="none"
									value={mobile.mobile}
									label="Mobile"
									required
									type="number"
									onChange={(e) =>
										setMobile({
											...mobile,
											mobile: e.target.value,
											isChanged: true,
										})
									}
								/>
								<ErrorDisplay data={Emobile} />
							</Grid>

							<Button
								type="submit"
								fullWidth
								variant="contained"
								className="mt-[3px] mb-[2px] bg-[#FF00AE] border-r-[50px] w-[100px]"
								onClick={handleSubmit}
							>
								Sign Up
							</Button>
							<div>
								<Link href={"/login"}>
									<Grid item className="text-black">
										Already have an account? Sign in
									</Grid>
								</Link>
							</div>

						</Box>
					</div>
				</Paper>

			</Container>
		</>

	);

}
export default Signup;