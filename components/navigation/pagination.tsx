import Link from "next/link";

function PaginationLink({
	query,
	current,
	children,
}: {
	query: { [key: string]: number | string };
	current?: boolean;
	children: React.ReactNode;
}) {
	return (
		<Link
			className={`p-1 min-h-12 min-w-12 border border-white/40 hover:border-cyan-300 hover:text-cyan-300 rounded-xl flex items-center justify-center ${current && "bg-neutral-500"}`}
			href={{
				pathname: "/",
				query,
			}}
		>
			{children}
		</Link>
	);
}

export default function Pagination({
	currentPage,
	page,
	pages,
}: {
	currentPage: number;
	page?: number;
	pages: number;
}) {
	return (
		<div className="text-center">
			<nav
				aria-label="Pagination"
				className="flex flex-wrap gap-2 items-center justify-center"
			>
				{currentPage > 1 && (
					<PaginationLink query={{ page: currentPage - 1 }}>
						<span className="material-symbols font-bold text-2xl">
							chevron_left
						</span>
					</PaginationLink>
				)}
				{[...Array(pages)].map((_, i) => {
					const pageNr = i + 1;
					return (
						<PaginationLink
							key={pageNr}
							query={{ page: pageNr }}
							current={currentPage === pageNr}
						>
							{pageNr}
						</PaginationLink>
					);
				})}
				{currentPage < pages && (
					<PaginationLink query={{ page: currentPage + 1 }}>
						<span className="material-symbols font-bold text-2xl">
							chevron_right
						</span>
					</PaginationLink>
				)}
			</nav>
			{/* <p>
				Page <span className="font-bold">{page}</span> of{" "}
				<span className="font-bold">{pages}</span>
			</p> */}
		</div>
	);
}
