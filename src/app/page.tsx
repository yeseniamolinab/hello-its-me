import HeroWithAvatar from "./components/HeroWithAvatar";
import FixedGallery from "./components/FixedGallery";
import ArticlePreview from "./components/ArticlePreview";
import SubscribeForm from "./components/SubscribeForm";
import WorkExperienceSummary from "./components/WorkExperienceSummary";
import { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title: "Yesi Molina - Software Engineer",
    description:
      "Software Engineer with a passion for building accessible and inclusive web applications.",
    keywords:
      "software engineer, web developer, accessibility, inclusive design, front-end developer, full-stack developer, next.js, react, typescript",
    openGraph: {
      url: `${process.env.PUBLIC_SITE_DOMAIN}/`,
      title: "Yesi Molina - Software Engineer",
      description:
        "Software Engineer with a passion for building accessible and inclusive web applications.",
      images: [{ url: `${process.env.PUBLIC_SITE_DOMAIN}/profile-pic.jpeg` }],
    },
  };
}

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
                      title="Accessiblity tests with Cyppres-Axe"
                      summary="Step by step guide on how to create accessiblity tests with Axe and Cypress."
                      date="2024-11-06"
                      slug="accessibility-tests-with-cypress-axe"
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
