import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Paper } from '@mui/material';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import SEO from '@/next-seo.config';
const theme = createTheme();

export default function Welcome() {
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<ThemeProvider theme={theme} >
			<NextSeo
				title={SEO.Welcome.title}
				description={SEO.Welcome.description}
				noindex={true}
				nofollow={true}
				meta={[
					{
						name: 'keywords',
						content: SEO.Welcome.keywords,
					},
				]}
			/>
			<Container component="main" sx={{ maxWidth: "xs", maxWidth: { lg: '1280px' }, }} >
				<CssBaseline />
				<Paper
					elevation={4}
					sx={{
						marginTop: '30px', marginBottom: '30px', display: { sm: 'flex' }, flexDirection: 'row',
					}}
				>
					<div className='signimg'>
						<img src="https://static.vecteezy.com/system/resources/previews/002/737/795/non_2x/online-registration-form-and-sign-in-button-concept-illustration-login-illustration-online-registration-illustrations-free-vector.jpg" alt="" width={'100%'} />
					</div>

					<div className='welcome'>

						<Typography component="h1" variant="h5" sx={{ marginBottom: '30px', textAlign: 'center' }}>
							Welcome
						</Typography>
						<Typography component="h1" variant="h5" sx={{ marginBottom: '30px', textAlign: 'center' }}>
							Account Created Successfully.
						</Typography>

						<div style={{ textAlign: 'center' }}>
							<Link href={'/login'} >
								<Button
									type="submit"
									variant="contained"
									className='mx-auto,mb-[50px] color-[green]'
								>
									Sign In
								</Button>
							</Link>
						</div>
					</div>
				</Paper>

			</Container>
		</ThemeProvider>
	);
}