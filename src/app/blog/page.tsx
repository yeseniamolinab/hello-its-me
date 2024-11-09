import ArticlePreview from "../components/ArticlePreview";

export default function Page() {
  return (
    <>
      <main className="flex-auto">
        <div className="sm:px-8 mt-16 sm:mt-32">
          <div className="mx-auto w-full max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <header className="max-w-2xl">
                  <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                    Writing about software, engineering and tech in general.
                  </h1>
                  <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                    I write about software, engineering and tech in general when
                    I have some free time. Here are some of the articles I've
                    written, I hope you find them useful.
                  </p>
                </header>
                <div className="mt-16 sm:mt-20">
                  <div className="flex flex-col gap-16">
                    <ArticlePreview
                      title="Accessiblity tests with Cyppres-Axe"
                      summary="Step by step guide on how to create accessiblity tests with Axe and Cypress."
                      date="2024-11-06"
                      slug="accessibility-tests-with-cypress-axe"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
