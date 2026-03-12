export interface SiteDataProps {
	name: string;
	title: string;
	description: string;
	useViewTransitions?: boolean; // defaults to false. Set to true to enable some Astro 3.0 view transitions
	author: {
		name: string;
		email: string;
		twitter: string; // used for twitter cards when sharing a blog post on twitter
	};
	defaultImage: {
		src: string;
		alt: string;
	};
}

// Update this file with your site specific information
const siteData: SiteDataProps = {
        name: "Moritz Kaiser",
        title: "Moritz Kaiser – Fotograf für Travel, Street, Portrait & Wedding",
        description:
                "Portfolio von Moritz Kaiser – Fotograf aus Baden-Baden. Aufnahmen aus den Bereichen Travel, Street, Portrait und Wedding.",
        useViewTransitions: true,
        author: {
                name: "Moritz Kaiser",
                email: "hallo@moritz-kaiser.de",
                twitter: "",
        },
        defaultImage: {
                src: "/images/hero-bg-min.jpg",
                alt: "Moritz Kaiser Photography",
        },
};
export default siteData;
