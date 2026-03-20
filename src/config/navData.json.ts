export interface navLinkItem {
	text: string;
	link: string;
	newTab?: boolean; // adds target="_blank" rel="noopener noreferrer" to link
}

export interface navDropdownItem {
	text: string;
	dropdown: navLinkItem[];
}

export type navItem = navLinkItem | navDropdownItem;

// note: 1 level of dropdown is supported
const navConfig: navItem[] = [
        {
                text: "Home",
                link: "/",
        },
        {
                text: "Portfolio",
                dropdown: [
                        {
                                text: "Travel",
                                link: "/portfolio/travel/",
                        },
                        {
                                text: "Street",
                                link: "/portfolio/street/",
                        },
                        {
                                text: "Portraits",
                                link: "/portfolio/portraits/",
                        },
                        {
                                text: "Wedding",
                                link: "/portfolio/wedding/",
                        },
                ],
        },
        {
                text: "About",
                link: "/#about",
        },
        {
                text: "Contact",
                link: "/#contact",
        },
        {
                text: "Projects",
                link: "/projects",
        },
];
export default navConfig;
