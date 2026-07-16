import { Suspense } from "react";
import CardGrid from "@/components/card-grid";
import Hero from "@/components/hero";

export default async function Home({
	searchParams,
}: {
	searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
	const { page: pageStr, limit, query } = await searchParams;

	const currentPage = pageStr ? Number(pageStr) : 1;
	const currentLimit = limit ? Number(limit) : 10;

	return (
		<main>
			<Hero />
			<section className="max-w-7xl mx-auto px-4 md:px-16 my-8">
				<header>
					<h2 className="text-3xl font-outfit font-bold mb-2">
						Faculty &amp; Crew
					</h2>
					<p className="text-sm">
						Learn from the best (and the most eccentric) in the business.
					</p>
				</header>
				<Suspense fallback={<p>loading page</p>}>
					<CardGrid
						currentLimit={currentLimit}
						currentPage={currentPage}
						query={query}
					/>
				</Suspense>
			</section>
		</main>
	);
}
