import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="sm:px-8 flex h-full items-center pt-16 sm:pt-32">
      <div className="mx-auto w-full max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <div className="flex flex-col items-center">
              <p className="text-large font-bold text-zinc-600 dark:text-zinc-500">
                404
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                Page not found
              </h1>
              <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400 w-3/4">
                Looks like this page wandered off... just like my cat in a box!
                This may not be what you were looking for, but feel free to
                explore the rest of my site. Who knows what interesting things
                you&apos;ll uncover!
              </p>
              <Image
                src="/404.png"
                alt="A cat in a box"
                width={400}
                height={400}
                className="mt-8"
              />
              <Link
                className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70 mt-8"
                href="/"
              >
                Go back home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
