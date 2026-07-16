import Image from "next/image";
import Link from "next/link";
import Pagination from "@/components/navigation/pagination";
import { getCharactersREST } from "@/data/characters";

interface CardProps {
	id?: number;
	name: string;
	gender?: string;
	status?: string;
	species?: string;
	createdAt?: string;
	image: string | null;
}

function Card({ name, id, image }: CardProps) {
	return (
		<div className="h-full grid grid-rows-[200px_1fr_auto] gap-4 border border-white/20 rounded-xl overflow-hidden [&_>_*:not(img)]:mx-4 pb-4">
			<h3 className="text-2xl font-bold font-outfit">{name}</h3>

			<Image
				src={image ? image : "https://placehold.co/600x400"}
				className="w-full h-full object-cover order-first"
				alt=""
				width={600}
				height={400}
				unoptimized={!image}
				sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 25vw, 274px"
			/>

			<Link
				className="py-3 border rounded-xl text-center uppercase font-semibold border-white/30 hover:outline-2 hover:outline-teal-400"
				href={`/character/${id}`}
			>
				View dossier
			</Link>
		</div>
	);
}

export default async function CardGrid({
	currentPage,
	currentLimit,
	query,
}: {
	currentPage: number;
	currentLimit: number;
	query?: string;
}) {
	const {
		page,
		pages,
		items: characters,
	} = await getCharactersREST(currentPage, currentLimit, query);

	return (
		<>
			<ul className="grid grid-cols-[repeat(auto-fill,minmax(26ch,1fr))] gap-4 my-8">
				{characters.map((char) => (
					<li key={char.id}>
						<Card name={char.name} image={char.image} id={char.id} />
					</li>
				))}
			</ul>
			{pages > 1 && (
				<Pagination currentPage={currentPage} page={page} pages={pages} />
			)}
		</>
	);
}
