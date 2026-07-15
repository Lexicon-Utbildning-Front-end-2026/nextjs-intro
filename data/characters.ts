import data from "@/data/characters.json";
import { redirect } from "next/navigation";

export function getCharacterById(id: number) {
  return data.items.find((character) => character.id === id);
}

export function getCharacters() {
  return data;
}

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

export async function getCharactersREST(page = 1, limit = 8, query="") : Promise<CharacterResponse> {
  // --- The quick and dirty way using template literal

    // const res = await fetch(
    //   `https://futuramaapi.com/api/characters?orderBy=id&orderByDirection=asc&page=${page}&size=${limit}`,
    // );

    // // --- The more modular and complex approach
    const url = new URL("https://futuramaapi.com/api/characters");

    // // add the query params
	// url.searchParams.append("orderBy", "id");
    // url.searchParams.append("orderByDirection", "asc");
     url.searchParams.append("page", String(page));
     url.searchParams.append("size", String(limit));
	 if(query!=="") url.searchParams.append("query", query) ;

    // // pass the full url to the fetch
    const res = await fetch(url);

    if (!res.ok) {
		console.warn(res.status)
		throw new Error(`Error in request: ${res.status}`);
	}

    return await res.json();
}

export function getCharacterByIdREST(id: number) {
  // fetch a single character by it's id...
  // try to solve this one yourselves
  return id;
}
