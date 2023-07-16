// import { error } from '@sveltejs/kit';
export async function load({ fetch }) {
	const res = await fetch('https://restcountries.com/v3.1/all');
	const countries = await res.json();
	return { countries };
}


// export function load({ locals }) {
// 	if (!locals.user) {
// 		throw error(401, 'not logged in');
// 	}

// 	if (!locals.user.isAdmin) {
// 		throw error(403, 'not an admin');
// 	}
// }