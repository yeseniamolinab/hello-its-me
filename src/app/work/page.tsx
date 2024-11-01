import WorkTimeline from "../components/WorkTimeline";

export default function Work() {
  return (
    <>
      <main className="flex-auto">
        <div className="sm:px-8 mt-16 sm:mt-32">
          <div className="mx-auto w-full max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <header className="max-w-2xl">
                  <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                    Building great software for great companies and nonprofits.
                  </h1>
                  <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                    I've had the privilege of working with some amazing
                    companies and nonprofits over the years. Here is my most
                    recent work experience in chronological order.
                  </p>
                </header>
                <div className="mt-16 sm:mt-20">
                  <WorkTimeline />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
