export const prerender = false;
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async ({ request }) => {
	const url = new URL(request.url);
	const school = url.searchParams.get("school");

	if (!school) {
		return new Response(JSON.stringify({ error: "Invalid search parameters" }), {
			status: 400,
			headers: { "content-type": "application/json" },
		});
	}

	const allSchools = await getCollection("masters", ({ data }) => {
		return data.general.school === school;
	});

	const allSubSchoolNames = allSchools.map((subSchool) => subSchool.data.general.subSchool);
	// console.log(allSubSchoolNames);

	if (!allSubSchoolNames || allSubSchoolNames.length === 0) {
		return new Response(JSON.stringify({ error: "No subSchools found" }), {
			status: 404,
			headers: { "content-type": "application/json" },
		});
	}

	return new Response(JSON.stringify(allSubSchoolNames), {
		status: 200,
		headers: { "content-type": "application/json" },
	});
};
