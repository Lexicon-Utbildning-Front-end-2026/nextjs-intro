import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Hero section */}
      <section className="relative min-h-[60vh] flex flex-col justify-center items-center px-4 py-16 bg-radial-[at_50%_45%] from-violet-900/40 from-20% via-cyan-900/20 via-45% to-black to-70%">
        <div className="border-2 border-teal-400/50 bg-teal-400/10 rounded-full overflow-hidden inline-flex items-center justify-center p-4 motion-safe:animate-bounce ">
        <span className="material-symbols material-symbols-filled text-4xl text-teal-400">rocket</span>
        </div>
        <header className="relative z-10 max-w-3xl flex flex-col justify-center items-center px-4 text-center">
          <h1 className="font-extrabold font-outfit text-zinc-200 text-6xl text-balance mb-6 leading-none">
            Welcome to <span className="text-teal-400">Planet Express</span>{" "}
            Academy
          </h1>
          <p className="text-lg text-zinc-300 text-pretty mb-10 max-w-2xl">
            Master the art of intergalactic delivery, advanced propulsion
            physics, and avoiding Zapp Brannigan's tactical incompetence. Your
            journey to the 31st century starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              className="px-8 py-4 flex gap-2 justify-center items-center uppercase bg-teal-400 text-zinc-950 font-bold rounded-xl hover:bg-cyan-400/80"
              href="/enroll"
            >
              Enroll now
               <span className="material-symbols material-symbols-outlined text-2xl">bolt</span>
            </a>
            <a
              className="px-8 py-4 flex gap-2 justify-center items-center uppercase border border-cyan-400 text-cyan-400 hover:bg-cyan-400/20 font-bold rounded-xl hover:bg-cyan-400/30"
              href="/classes"
            >
              View Classes
            </a>
          </div>
        </header>

        {/* <Image
          className="w-full h-auto object-cover z-0"
          src="https://images.unsplash.com/photo-1554629947-334ff61d85dc"
          fill
          alt=""
        /> */}
        <Image
          className="w-full h-auto object-cover z-0 opacity-40"
          src="/space.png"
          fill
          alt=""
        />
      </section>
    </main>
  );
}
