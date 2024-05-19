import createMiddleware from "next-intl/middleware";

export default createMiddleware({
	// A list of all locales that are supported
	locales: ["id", "en"],

	// Used when no locale matches
	defaultLocale: "id",

	pathnames: {
		"/": "/",

		"/tentang-kami": {
			id: "/tentang-kami",
			en: "/about-us",
		},
	},
});

export const config = {
	// Match only internationalized pathnames
	matcher: ["/", "/(en|id)/:path*"],
};
