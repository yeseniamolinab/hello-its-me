import React from "react";
import Image from "next/image";
import DownArrowIcon from "./icons/DownArrowIcon";
import BriefcaseIcon from "./icons/BriefcaseIcon";

const WorkExperienceSummary: React.FC = () => {
  const jobs = [
    {
      company: "Ekō",
      role: "Senior Full Stack Developer",
      date: "2021 - Present",
      logo: "/eko-logo.png",
    },
    {
      company: "XUP Payments",
      role: "Senior Backend Engineer",
      date: "2020 - 2021",
      logo: "/xuppay_logo.jpeg",
    },
    {
      company: "OpenTable",
      role: "Senior Software Engineer",
      date: "2016 - 2020",
      logo: "/opentable-logo.svg",
    },
    {
      company: "Concentrix Catalyst (Formerly Gamma Partners)",
      role: "Software Engineer",
      date: "2014 - 2016",
      logo: "/concentrix_catalyst_logo.jpeg",
    },
  ];
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {jobs.map((job) => (
          <li className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={job.logo}
                alt=""
                width={32}
                height={32}
                className="rounded-full"
              />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {job.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {job.role}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={job.date}
              >
                <time dateTime="2019">{job.date.split(" - ")[0]}</time>{" "}
                <span aria-hidden="true">—</span>{" "}
                <time dateTime="2024">{job.date.split(" - ")[1]}</time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <a
        className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group mt-6 w-full"
        href="/Yesenia_MolinaBejarano_Resume.pdf"
      >
        Download CV
        <DownArrowIcon />
      </a>
    </div>
  );
};

export default WorkExperienceSummary;
