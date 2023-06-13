import SEO from '@/next-seo.config'
import { NextSeo } from 'next-seo'
import React from 'react'

const Custom404 = () => {
	return (
		<div>
			<NextSeo
				title={SEO.pagenotfound.title}
				description={SEO.pagenotfound.description}
				canonical={`${SEO.pagenotfound.canonical.api}`}
			/>
			404 page not found
		</div>
	)
}

export default Custom404
