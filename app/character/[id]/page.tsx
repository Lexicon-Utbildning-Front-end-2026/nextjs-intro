import Image from "next/image";
import { notFound } from "next/navigation";
import { getCharacterById, getCharacterByIdREST } from "@/data/characters";
import { strToNr } from "@/lib/util";

// dynamic meta data generation
export async function generateMetadata({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id: idStr } = await params;

	// convert and check for invalid ids
	const id = strToNr(idStr);

	if (!id) {
		return null;
	}

	const character = await getCharacterByIdREST(id);

	// in metadata we can return null
	// because it doesn't really matter if we get an error,
	// we will be redirected to notFound later  anyway
	if (!character) {
		return null;
	}

	return { title: character.name };
}

export default async function CharacterPage(
	props: PageProps<"/character/[id]">,
) {
	//--- Example without PageProps ---
	// export default async function CharacterPage({
	//   params,
	// }: {
	//   params: Promise<{ id: string }>;
	// }) {
	const { id: idStr } = await props.params;

	const id = strToNr(idStr);

	// redirect to not found if id is not a valid number
	if (!id) {
		return notFound();
	}

	const character = await getCharacterByIdREST(id);

	// redirect to not found if we don't find a character
	if (!character) {
		notFound();
	}

	return (
		<main className="pt-20 text-pretty max-w-7xl mx-auto px-4 md:px-16 my-16">
			<article className="flex gap-4 justify-between">
				<div>
					<header>
						<div className="flex justify-between items-center">
							<h1 className="font-bold font-outfit text-3xl">
								{character.name}
							</h1>
							<span className="text-current/80">#{character.id}</span>
						</div>
					</header>
					<ul className="flex flex-wrap gap-4 text-sm text-gray-900 font-bold py-2">
						<li className="rounded-full px-2 py-1 bg-amber-400">
							Species: {character.species}
						</li>
						<li className="rounded-full px-2 py-1 bg-pink-400">
							Gender: {character.gender}
						</li>
						<li className="rounded-full px-2 py-1 bg-violet-400">
							Status: {character.status}
						</li>
					</ul>
				</div>
				{character.image && (
					<Image
						className="w-1/2"
						src={character.image}
						alt={character.name}
						width={400}
						height={600}
						loading="eager"
					/>
				)}
			</article>
		</main>
	);
}
