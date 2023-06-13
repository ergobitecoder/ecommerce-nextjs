import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { NextSeo } from 'next-seo'
import { useEffect, useState } from 'react'
import { getCategorysList, getCsm } from '@/api/category'
import { getProductCsm, getProductsList } from '@/api/products'
import { getBanner } from '@/api/banner'
import MainBanner from '@/components/MainBanner'
import Grid1 from '@/components/Grid1'
import SEO from '@/next-seo.config'

const inter = Inter({ subsets: ['latin'] })

export default function Home(initialProductData) {
	const [banner, setBannerData] = useState([]);
	//// Fetch the banner iamge for home page
	useEffect(() => {
		const fetchData = async () => {
			const bannerdata = await getBanner();//api call for banner image
			const filteredData = bannerdata.data.result.filter(banner => banner.device === 'Desktop');//banner image for desktop devices
			const mobileData = bannerdata.data.result.filter(banner => banner.device === 'Mobile');//banner image for mobile devices
			setBannerData(filteredData);
		};
		fetchData().catch(console.error);
	}, []);


	return (
		<>
			<NextSeo
				title={SEO.home.title}
				description={SEO.home.description}
				canonical={SEO.home.canonical}
				openGraph={{
					...SEO.home.openGraph,
					images: [
						{
							url: SEO.home.image,
							width: 800,
							height: 600,
							alt: 'Product Image',
						},
					],
				}}
				twitter={{
					...SEO.twitter,
					cardType: 'summary_large_image',
				}}
			/>
			<MainBanner Bannerdata={banner} />
			<Grid1 productdata={initialProductData} />
		</>

	)
}

export function getServerSideProps() {
	// Fetch the CSM data for New arrivals categories Ids
	return getProductCsm()
		.then((csmdata) => {
			// Fetch the category list using the New arrivals categories Ids	
			return getCategorysList(csmdata.data.result.data);
		})
		.then((productdata) => {
			// Fetch the CSM data for popular categories
			return getCsm()
				.then((csmPopularData) => {
					// Fetch the category list for popular categories using the CSM data categories Ids	
					return getCategorysList(csmPopularData.data.result.data);
				})
				.then((PopularCategory) => {
					// Return the fetched data as props to be passed to the component
					return {
						props: {
							initialProductData: productdata.data.result,
							PopularCategoryData: PopularCategory.data.result,
						},
					};
				});
		})
		.catch((error) => {
			console.error(error);
			return {
				props: {
					initialProductData: [],
					PopularCategoryData: [],
				},
			};
		});
}
