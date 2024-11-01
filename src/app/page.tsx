import HeroWithAvatar from "./components/HeroWithAvatar";
import FixedGallery from "./components/FixedGallery";
import ArticlePreview from "./components/ArticlePreview";
import SubscribeForm from "./components/SubscribeForm";
import WorkExperienceSummary from "./components/WorkExperienceSummary";

export default function Home() {
  return (
    <>
      <main className="flex-auto">
        <div className="sm:px-8 mt-9">
          <div className="mx-auto w-full max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <HeroWithAvatar avatarUrl="/profile-pic.jpeg" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 sm:mt-20">
          <FixedGallery />
        </div>
        <div className="sm:px-8 mt-24 md:mt-28">
          <div className="mx-auto w-full max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
                  <div className="flex flex-col gap-16">
                    <ArticlePreview
                      title="Fostering an experimenting culture in the workplace"
                      summary="How to create a culture of experimentation in the workplace, and why it's so important, especially for non tech companies."
                      date="2024-09-05"
                    />
                    <ArticlePreview
                      title="Creating an AB test with Growthbook and Next.js"
                      summary="Step by step guide on how to create an AB test with Growthbook and Next.js using server side components."
                      date="2024-08-05"
                    />
                    <ArticlePreview
                      title="My journey as a woman in tech"
                      summary="After 12 years working in tech, I share my journey as a woman in tech and the challenges I faced."
                      date="2023-07-05"
                    />
                  </div>
                  <div className="space-y-10 lg:pl-16 xl:pl-24">
                    <SubscribeForm />
                    <WorkExperienceSummary />
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
