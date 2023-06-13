import { NextSeo } from 'next-seo'
import React from 'react'

const MyPage = () => {
    const pageTitle = "My Page Title";
    const pageDescription = "This is the description for my page.";
    const pageKeywords = ["keyword1", "keyword2", "keyword3"];
    return (
        <div>
            <NextSeo
                title={pageTitle} // Add a title that accurately represents the content of the page and contains the targeted keywords.
                description={pageDescription} // Add a concise and informative description that includes the targeted keywords.
                keywords={pageKeywords} // Add relevant keywords that are related to the content of the page.
                canonical="https://www.example.com/my-page" // Set the canonical URL to avoid duplicate content issues.
                openGraph={{
                    type: 'website', // Set the type of the page (website, article, product, etc.) for Open Graph protocol.
                    locale: 'en_US', // Set the language and regional targeting for Open Graph protocol.
                    url: 'https://www.example.com/my-page', // Add the URL of the page for Open Graph protocol.
                    site_name: 'My Website Name', // Add the name of the website for Open Graph protocol.
                    title: pageTitle, // Add the title of the page for Open Graph protocol.
                    description: pageDescription, // Add the description of the page for Open Graph protocol.
                    images: [
                        {
                            url: 'https://www.example.com/my-image.jpg', // Add an image to be displayed when the page is shared on social media.
                            alt: 'My Image Alt Text', // Add alternative text for the image.
                            width: 1200, // Set the width of the image for Open Graph protocol.
                            height: 630, // Set the height of the image for Open Graph protocol.
                        },
                    ],
                }}
                twitter={{
                    cardType: 'summary_large_image', 
                    handle: '@mytwitterhandle', // Add the Twitter handle of the website or author.
                    site: '@mysitename', // Add the Twitter handle of the website or organization.
                }}
            />
            <div className='bg-[#e89d9d] h-[500px]'>
                MyPage
            </div>
        </div>
    )
}

export default MyPage
