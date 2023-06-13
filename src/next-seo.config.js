const api = process.env.NEXT_PUBLIC_API_URL_NODE;

const SEO = {
	home: {
		title: "Art & Craft",
		description: "Art & Craft",
		canonical: { api },
		openGraph: {
			type: "website",
			locale: "en_US",
			url: { api },
			title: "Art & Craft",
			description: "Art & Craft",
		},
		image: "http://craftmegastore.in/assets/images/new_logo.png"

	},
	contact: {
		title: "Contact Us - Art & Craft",
		description: "Contact us for any questions or feedback about our products and services.",
		canonical: { api },
		openGraph: {
			type: "website",
			locale: "en_US",
			url: { api },
			title: "Contact Us - Art & Craft",
			description: "Contact us for any questions or feedback about our products and services.",
		},
		image: "http://craftmegastore.in/assets/images/new_logo.png"

	},
	login: {
		title: "Login - Art & Craft",
		description: "Login - Art & Craft",
		canonical: { api },
		openGraph: {
			type: "website",
			locale: "en_US",
			url: { api },
			title: "Login - Art & Craft",
			description: "Login - Art & Craft",
		},
		image: "http://craftmegastore.in/assets/images/new_logo.png"

	},
	signup: {
		title: "SignUp - Art & Craft",
		description: "SignUp - Art & Craft",
		canonical: { api },
		openGraph: {
			type: "website",
			locale: "en_US",
			url: { api },
			title: "SignUp - Art & Craft",
			description: "SignUp - Art & Craft",
		},
		image: "http://craftmegastore.in/assets/images/new_logo.png"

	},
	Orderlist: {
		title: "Orderlist - Art & Craft",
		description: "Orderlist - Art & Craft",
		canonical: { api },
		openGraph: {
			type: "website",
			locale: "en_US",
			url: { api },
			title: "Orderlist - Art & Craft",
			description: "Orderlist - Art & Craft",
		},
		image: "http://craftmegastore.in/assets/images/new_logo.png"

	},
	pagenotfound: {
		title: "404 - Art & Craft",
		description: "404 - Art & Craft",
		canonical: { api },
		openGraph: {
			type: "website",
			locale: "en_US",
			url: { api },
			title: "404 - Art & Craft",
			description: "404 - Art & Craft",
		},
		image: "http://craftmegastore.in/assets/images/new_logo.png"

	},
	Welcome: {
		title: "Welcome - Art & Craft",
		description: "Welcome - Art & Craft",
		canonical: { api },
		openGraph: {
			type: "website",
			locale: "en_US",
			url: { api },
			title: "Welcome - Art & Craft",
			description: "Welcome - Art & Craft",
		},
		image: "http://craftmegastore.in/assets/images/new_logo.png"

	},
	product: {
		title: "Art & Craft",
		description: "Product Description",
		canonical: { api },
		openGraph: {
			type: "product",
			locale: "en_US",
			url: { api },
			title: "Art & Craft",
			description: "Product Description",
			images: [
				{
					url: "https://craftmegastore.in/product-image.png",
					width: 800,
					height: 600,
					alt: "Product Image"
				}
			]
		},
		image: "http://craftmegastore.in/assets/images/new_logo.png"

	},
	category: {
		title: "Art & Craft",
		description: "Category Description",
		canonical: { api },
		openGraph: {
			type: "website",
			locale: "en_US",
			url: { api },
			title: "Category Name - Art & Craft",
			description: "Category Description"
		},
		image: "http://craftmegastore.in/assets/images/new_logo.png"

	},
	cart: {
		title: "Cart - Art & Craft",
		description: "Your shopping cart",
		canonical: { api },
		openGraph: {
			type: "website",
			locale: "en_US",
			url: { api },
			title: "Shopping Cart - Art & Craft",
			description: "Your shopping cart"
		},
		image: "http://craftmegastore.in/assets/images/new_logo.png"

	},
	checkout: {
		title: "Checkout - Art & Craft",
		description: "Complete your purchase",
		canonical: { api },
		openGraph: {
			type: "website",
			locale: "en_US",
			url: { api },
			title: "Checkout - Art & Craft",
			description: "Complete your purchase"
		},
		image: "http://craftmegastore.in/assets/images/new_logo.png"

	},

	about: {
		title: "About Us - Art & Craft",
		description: "craftmegastore",
		canonical: { api },
		openGraph: {
			type: "website",
			locale: "en_US",
			url: { api },
			title: "About Us - Art & Craft",
			description: "craftmegastore"
		},
	},
	twitter: {
		handle: "@craftmegastore",
		site: "@craftmegastore",
		cardType: "summary_large_image",
		title: "Art & Craft"
	},
	keywords: "Art, craft, craftmegastore",



};
export default SEO;
