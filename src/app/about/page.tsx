import Image from "next/image";
import Contact from "../components/Contact";

export default function About() {
  return (
    <>
      <main className="flex-auto">
        <div className="sm:px-8 mt-16 sm:mt-32">
          <div className="mx-auto w-full max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                  <div className="lg:pl-20">
                    <div className="max-w-xs px-2.5 lg:max-w-none">
                      <Image
                        src="/profile-pic-2.jpeg"
                        height={800}
                        width={800}
                        alt="Avatar"
                        className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                      />
                    </div>
                  </div>
                  <div className="lg:order-first lg:row-span-2">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                      Hello! I’m Yesi Molina
                    </h1>
                    <div className="mt-6 space-y-7 text-base/7 text-zinc-600 dark:text-zinc-400">
                      <p>
                        I live in Chihuahua. My journey has taken me from
                        high-growth tech firms to mission-driven nonprofits,
                        where I’ve turned complex technical challenges into
                        user-friendly, impactful products.
                      </p>
                      <p>
                        Today, I work as a Senior Full Stack Developer at Ekō,
                        where I focus on optimizing applications to boost
                        performance and enhance user experience.{" "}
                        <span className="font-bold">
                          My expertise spans frontend and backend technologies
                          like JavaScript, TypeScript, React, Next.js, Node.js
                          and C#, along with SQL and NoSQL databases.
                        </span>
                      </p>
                      <p>
                        I thrive in Agile teams, prioritizing clean,
                        maintainable code and rigorous testing. Beyond my work,
                        I find balance outdoors, whether it&apos;s hiking the
                        stunning landscapes around Chihuahua or hitting the
                        tennis courts. I live with my partner and two cats, who
                        keep life lively and full of adventure.
                      </p>
                      <p>
                        <span className="font-bold">
                          I believe that technology should make a difference.
                        </span>{" "}
                        This passion fuels my commitment to building
                        high-performance systems that truly meet user needs.
                      </p>
                      <p>
                        At Ekō, I focus on making applications intuitive and
                        accessible through rigorous A/B testing, efficient code
                        architecture, and seamless design. With every project, I
                        incorporate principles of equity and anti-oppression,
                        ensuring that my work contributes positively to a more
                        inclusive digital world.
                      </p>
                    </div>
                  </div>
                  <Contact />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
