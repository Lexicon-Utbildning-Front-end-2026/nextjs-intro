import data from "@/data/characters.json";

const URL_API = "https://futuramaapi.com/api";

interface CharacterItem {
	id: number;
	name: string;
	gender: string;
	status: string;
	species: string;
	createdAt: string;
	image: string | null;
}

interface CharacterResponse {
	items: CharacterItem[];
	total: number;
	page: number;
	size: number;
	pages: number;
}

export function getCharacterById(id: number) {
	return data.items.find((character) => character.id === id);
}

export function getCharacters() {
	return data;
}

export async function getCharactersREST(
	page = 1,
	limit = 8,
	query = "",
): Promise<CharacterResponse> {
	const url = new URL(`${URL_API}/characters`);

	// add the query params
	// url.searchParams.append("orderBy", "id");
	// url.searchParams.append("orderByDirection", "asc");
	url.searchParams.append("page", String(page));
	url.searchParams.append("size", String(limit));
	if (query !== "") url.searchParams.append("query", query);

	// // pass the full url to the fetch
	const res = await fetch(url);

	if (!res.ok) {
		console.warn(res.status);
		throw new Error(`Error in request: ${res.status}`);
	}

	return await res.json();
}

export async function getCharacterByIdREST(id: number): Promise<CharacterItem> {
	const res = await fetch(`${URL_API}/characters/${id}`);

	if (!res.ok) {
		console.warn(res.status);
		throw new Error(`Error in request: ${res.status}`);
	}
	return res.json();
}
