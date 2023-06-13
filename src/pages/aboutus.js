import SEO from '@/next-seo.config';
import { NextSeo } from 'next-seo';
import React, { useEffect, useState } from 'react'

const aboutus = (props) => {

	return (
		<>
			<NextSeo
				title={SEO.about.title}
				description={SEO.about.description}
				canonical={`${SEO.about.canonical.api}/aboutus`}
				openGraph={{
					title: SEO.about.title,
					description: SEO.about.description,
					images: [
						{
							url: SEO.about.image,
							width: 800,
							height: 600,
							alt: 'About Us Image',
						},
					],
					url: `${SEO.about.canonical.api}/aboutus`,
				}}
			/>
			<div className="mx-auto lg:w-[1140px] 2xl:w-[1420px]">
				<div className="flex flex-col lg:flex-row w-85 mx-auto max-w-screen-xl p-5">
					<div className="w-[60%] mx-auto lg:max-w-screen-lg">
						<div className="text-2xl font-bold lg:mt-10 md:mt-8 sm:mt-6 mt-4">Our Story</div>
						<div className="text-base font-normal leading-9 text-black mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, fugit in fuga odio fugiat, autem ratione dolorum atque, vel odit eveniet commodi. Aspernatur quaerat voluptas esse temporibus possimus ratione quod accusamus harum dicta nesciunt minima maxime sapiente corrupti tempore vero, quae non similique a. Culpa inventore nesciunt impedit doloremque veritatis!</div>
						<div className="flex flex-row justify-between">
							<div>
								<div className='flex items-center justify-center w-[4rem] h-[4rem] rounded-full bg-pink-400'>10K</div>
								<div className="text-4xl font-bold text-center mt-5 sm:mt-2 sm:text-base">Products</div>
							</div>
							<div>
								<div className='flex items-center justify-center w-[4rem] h-[4rem] rounded-full bg-pink-400'>1002</div>
								<div className="text-4xl font-bold text-center mt-5 sm:mt-2 sm:text-base">Happy Clients</div>
							</div>
							<div>
								<div className='flex items-center justify-center w-[4rem] h-[4rem] rounded-full bg-pink-400'>102</div>
								<div className="text-4xl font-bold text-center mt-5 sm:mt-2 sm:text-base">Years</div>
							</div>
						</div>
					</div>
					<div className='mx-auto w-4/5 sm:w-full lg:max-w-screen-lg'>
						<img src="https://joinblair.com/_nuxt/img/header-work.574cf42.svg" alt="" />
					</div>
				</div>
			</div>
			{/* <ReviewSlider Categorydata={data} /> */}
		</>
	)
}

export default aboutus
