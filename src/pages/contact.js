import { NextSeo } from 'next-seo'
import React from 'react'
import { HomeTitle, SliderBreak, useStyles } from "../styles/contact.styles";
import { useState } from 'react';
import { contact } from '@/api/contact';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Toolbarcustom } from '@/styles/contact.styles';
import { TextField } from '@mui/material';
import ErrorDisplay from '@/components/ErrorDisplay';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallIcon from '@mui/icons-material/Call';
import HomeIcon from '@mui/icons-material/Home';
import SEO from '@/next-seo.config';

const Contact = (props) => {

	const classes = useStyles(props);
	const [name, setName] = useState({
		field: "name",
		data: "",
		isChanged: false,
	});
	const [phone, setPhone] = useState({
		field: "phone",
		data: "",
		isChanged: false,
	});
	const [emailId, setEmailId] = useState({
		field: "emailId",
		data: "",
		isChanged: false,
	});
	const [subject, setSubject] = useState({
		field: "subject",
		data: "",
		isChanged: false,
	});
	const router = useRouter();
	const [ename, setEName] = useState("");
	const [eemail, setEEmail] = useState("");
	const [ephone, setEPhone] = useState("");
	const [esubject, setESubject] = useState("");
	useEffect(() => {
		if (name.data === "" && name.isChanged === true) {
			setEName("Name cant be empty");
		} else {
			setEName("");
		}
	}, [name.data]);
	useEffect(() => {
		if (emailId.data === "" && emailId.isChanged === true) {
			setEEmail("Email id cant be empty");
		} else {
			setEEmail("");
		}
	}, [emailId.data]);
	useEffect(() => {
		if (phone.data === "" && phone.isChanged === true) {
			setEPhone("phone cant be empty");
		} else {
			setEPhone("");
		}
	}, [phone.data]);
	useEffect(() => {
		if (subject.data === "" && subject.isChanged === true) {
			setESubject("subject cant be empty");
		} else {
			setESubject("");
		}
	}, [subject.data]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (name.data === "") {
			setEName("Name can't Be Empty.");
		}
		if (phone.data === "") {
			setEPhone("Phone number can't Be Empty.");
		}
		if (emailId.data === "") {
			setEEmail("Email id can't Be Empty.");
		}
		if (subject.data === "") {
			setESubject("Subject can't Be Empty.");
		}
		const response = {
			name: name,
			phone: phone,
			emailId: emailId,
			subject: subject,

		}
		if (response.name.data !== '' && response.phone.data !== '' && response.emailId.data !== '' && response.subject.data !== '') {
			const contactData = response;
			const contactRes = await contact(contactData);

			if (contactRes) {
				router('/');
			} else {
				console.log('error');
			}
		}
	}


	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);


	return (
		<div>
			<NextSeo
				title={SEO.contact.title}
				description={SEO.contact.description}
				canonical={`${SEO.contact.canonical.api}/contact`}
				openGraph={{
					title: SEO.contact.title,
					description: SEO.contact.description,
					images: [
						{
							url: SEO.contact.image,
							width: 800,
							height: 600,
							alt: 'Contact Us Image',
						},
					],
					url: `${SEO.contact.canonical.api}/contact`,
				}}
			/>
			<div style={{ marginBottom: '30px' }}>
				<div className={classes.titleParent}>
					<div className={classes.title}>Get in Touch with us</div>
				</div>
				<div className={classes.contactParent}>
					<div className={classes.contactParent1}>
						<Toolbarcustom><div><button className={classes.iconbtn}><MailOutlineIcon sx={{ fontSize: '20px' }} /></button>anantisaboo1980@gmail.com</div></Toolbarcustom>
						<Toolbarcustom><div><button className={classes.iconbtn}><CallIcon sx={{ fontSize: '20px' }} /></button>+91 9890367761</div></Toolbarcustom>
						<Toolbarcustom><div><button className={classes.iconbtn}><HomeIcon sx={{ fontSize: '20px' }} /></button></div><div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex asperiores officia excepturi aliquid.</div></Toolbarcustom>
					</div>

					<div className={classes.contactParent2}>
						<div className={classes.inputparent}>
							<TextField
								required
								autoFocus
								sx={{ width: '100%' }}
								label="Full Name"
								value={name.data}
								onChange={(e) =>
									setName({
										...name,
										data: e.target.value,
										isChanged: true,
									})}
							/>
							<div className={classes.errorsub}>
								<ErrorDisplay data={ename} />
							</div>
						</div>
						<div className={classes.inputparent}>

							<TextField
								required
								autoFocus
								sx={{ minWidth: '100%', marginBottom: "10px" }}
								label="Email"
								value={emailId.data}
								onChange={(e) =>
									setEmailId({
										...emailId,
										data: e.target.value,
										isChanged: true,
									})}
							/>
							<ErrorDisplay data={eemail} />


						</div>
						<div className={classes.inputparent}>
							<TextField
								required
								autoFocus
								sx={{ minWidth: '100%', marginBottom: "10px" }}
								label="Phone"
								value={phone.data}
								onChange={(e) =>
									setPhone({
										...phone,
										data: e.target.value,
										isChanged: true,
									})}
								variant="outlined"
							/>
							<ErrorDisplay data={ephone} />
						</div>

						<div className={classes.inputparent}>
							<textarea
								placeholder="Message"
								label="Message"
								value={subject.data}
								onChange={(e) =>
									setSubject({
										...subject,
										data: e.target.value,
										isChanged: true,
									})}
								className={classes.textareasize}
							/>
							<div className={classes.errorsub}>
								<ErrorDisplay data={esubject} />
							</div>
						</div>
						<div>
							<div className='sendbtn'>
								<button className={classes.continueBtn} onClick={handleSubmit}>SEND</button>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	)
}

export default Contact
