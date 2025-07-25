import type { MainMenuItem, MenuNavigation } from "~/types";

export const menuMain: MainMenuItem[] = [
	{
		id: "home",
		label: "Home",
		url: "/",
	},
	{
		id: "masters",
		label: "Masters",
		url: "/masters",
	},
	{
		id: "schools",
		label: "Schools",
		url: "/schools",
		submenu: [{ id: "testimonials", label: "Testimonials", url: "/about-us/testimonials" }],
	},
	{
		id: "services",
		label: "Services",
		url: "/services",
		submenu: [
			{ id: "repairs", label: "Repairs", url: "/services/repairs" },
			{ id: "maintenance", label: "Maintenance", url: "/services/maintenance" },
			{ id: "master-sales", label: "Master Sales", url: "/services/master-sales" },
		],
	},
	{
		id: "blog",
		label: "Blog",
		url: "/blog",
	},
];

export const menuNavigation: MenuNavigation = {
	prettyName: "Navigation",
	items: [
		{
			name: "Home",
			url: "/",
		},
		{
			name: "Masters",
			url: "/masters",
		},
		{
			name: "Schools",
			url: "/schools",
		},
		{
			name: "Services",
			url: "/services",
		},
		{
			name: "Blog",
			url: "/blog",
		},
	],
};

export const menuService: MenuNavigation = {
	prettyName: "Service",
	items: [
		{
			name: "Home",
			url: "/",
		},
		{
			name: "Masters",
			url: "/masters",
		},
		{
			name: "Schools",
			url: "/schools",
		},
		{
			name: "Services",
			url: "/services",
		},
		{
			name: "Blog",
			url: "/blog",
		},
	],
};

export const menuMisc: MenuNavigation = {
	prettyName: "Miscellaneous",
	items: [
		{
			name: "Home",
			url: "/",
		},
		{
			name: "Masters",
			url: "/masters",
		},
		{
			name: "Schools",
			url: "/schools",
		},
		{
			name: "Services",
			url: "/services",
		},
		{
			name: "Blog",
			url: "/blog",
		},
	],
};

export const menuLegal: MenuNavigation = {
	prettyName: "Legal",
	items: [
		{
			name: "Home",
			url: "/",
		},
		{
			name: "Masters",
			url: "/masters",
		},
		{
			name: "Schools",
			url: "/schools",
		},
		{
			name: "Services",
			url: "/services",
		},
		{
			name: "Blog",
			url: "/blog",
		},
	],
};
