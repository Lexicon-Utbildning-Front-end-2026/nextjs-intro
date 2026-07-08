import Hero from "@/components/hero";
import data from "@/data/characters.json";
import Image from "next/image";

interface CardProps {
  id?: number;
  name: string;
  gender?: string;
  status?: string;
  species?: string;
  createdAt?: string;
  image: string | null;
}

function Card({ name, image }: CardProps) {
  return (
    <div className="h-full grid grid-rows-[200px_1fr_auto] gap-4 border border-white/20 rounded-xl overflow-hidden [&_>_*:not(img)]:mx-4 pb-4">
      <h3 className="text-2xl font-bold font-outfit">{name}</h3>

      <Image
        src={image ? image : "https://placehold.co/600x400"}
        className="w-full h-full object-cover order-first"
        alt=""
        width={600}
        height={400}
        unoptimized={image ? false : true}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 25vw, 274px"
      />

      <a
        className="py-3 border rounded-xl text-center uppercase font-semibold border-white/30 hover:outline-2 hover:outline-teal-400"
        href="#"
      >
        View dossier
      </a>
    </div>
  );
}

export default function Home() {
  const { page, pages, items: characters } = data;

  return (
    <main>
      <Hero />
      <section className="max-w-7xl mx-auto px-4 md:px-16 my-8">
        <h2 className="text-3xl font-outfit font-bold mb-2">
          Faculty &amp; Crew
        </h2>
        <p className="text-sm">
          Learn from the best (and the most eccentric) in the business.
        </p>
        <ul className="grid grid-cols-[repeat(auto-fill,minmax(26ch,1fr))] gap-4 my-8">
          {characters.slice(0, 8).map((char) => (
            <li key={char.id}>
              <Card name={char.name} image={char.image} />
            </li>
          ))}
        </ul>
        Showing page {page} of {pages}
      </section>
    </main>
  );
}
