import React from "react";

const WorkTimeline: React.FC = () => {
  return (
    <>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-sky-200 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-sky-900">
            <svg
              className="w-2.5 h-2.5 text-sky-700 dark:text-sky-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-zinc-800 dark:text-zinc-100">
            Full Stack Developer - Ekō{" "}
            <span className="bg-sky-200 text-sky-700 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-sky-900 dark:text-sky-300 ms-3">
              Current
            </span>
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-zinc-500 dark:text-zinc-200">
            October 2021 - Present
          </time>
          <p className="mb-4 text-base font-normal text-zinc-600 dark:text-zinc-400">
            Create and execute A/B tests aimed at boosting conversion rates and
            enhancing the member experience, resulting in donations rising by as
            much as 10% and signatures increasing by as much as 8%.
          </p>
          <a
            href="/Yesenia_MolinaBejarano_Resume.pdf"
            target="_blank"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-sky-600 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            <svg
              className="w-3.5 h-3.5 me-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
              <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
            </svg>{" "}
            Download CV
          </a>
        </li>
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-sky-200 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-sky-900">
            <svg
              className="w-2.5 h-2.5 text-sky-700 dark:text-sky-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="mb-1 text-lg font-semibold text-zinc-800 dark:text-zinc-100">
            Senior Backend Engineer - XUP Payments
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-zinc-500 dark:text-zinc-200">
            November 2020 - September 2021
          </time>
          <p className="text-base font-normal text-zinc-600 dark:text-zinc-400">
            Guided the design and architecture of backend APIs to enhance
            customer experience. Helped to reduce technical debt and increased
            unit test coverage by 80%.
          </p>
        </li>
        <li className="ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-sky-200 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-sky-900">
            <svg
              className="w-2.5 h-2.5 text-sky-700 dark:text-sky-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="mb-1 text-lg font-semibold text-zinc-800 dark:text-zinc-100">
            Senior Software Engineer - OpenTable
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-zinc-500 dark:text-zinc-200">
            August 2016 - September 2020
          </time>
          <p className="text-base font-normal text-zinc-600 dark:text-zinc-400">
            Maintained and improved user-related and booking features. Played
            active role in migrating legacy systems to Node.js, React, and
            GraphQL. Mentored junior developers, fostering professional growth
            and enhancing team productivity.
          </p>
        </li>
      </ol>
      <p className="mt-12 text-base font-semibold text-zinc-800 dark:text-zinc-100">
        For the full list of my work experience, please download my resume{" "}
        <a
          className="text-sky-700 cursor-pointer underline hover:text-sky-600 dark:hover:text-sky-600"
          href="/Yesenia_MolinaBejarano_Resume.pdf"
          target="_blank"
        >
          here
        </a>
        .
      </p>
    </>
  );
};

export default WorkTimeline;
