"use client";
import React, { useState, useEffect } from "react";
import SpinnerIcon from "./icons/SpinnerIcon";

const SubscribeForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setIsVisible(false);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.status === 201) {
        setMessage("Subscribed successfully! 🎉");
        setIsError(false);
        setEmail("");
      } else {
        setMessage(data.error);
        setIsError(true);
      }
    } catch {
      setMessage("An unexpected error occurred 😩");
      setIsError(true);
    } finally {
      console.log("isError", isError);
      setLoading(false);
      setIsVisible(true);
    }
  };

  useEffect(() => {
    if (isError) return;
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [isError]);
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 min-h-56"
      onSubmit={handleSubmit}
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="h-6 w-6 flex-none"
        >
          <path
            d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
            className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
          ></path>
          <path
            d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
            className="stroke-zinc-400 dark:stroke-zinc-500"
          ></path>
        </svg>
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          placeholder="Email address"
          aria-label="Email address"
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-sky-500 focus:outline-none focus:ring-4 focus:ring-sky-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-sky-400 dark:focus:ring-sky-500/10"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70 ml-4 flex-none"
          type="submit"
        >
          {loading ? <SpinnerIcon /> : "Join"}
        </button>
      </div>
      {message && (
        <>
          <div className="mt-3 mx-auto">
            {isError ? (
              <span
                className={`bg-red-200 text-red-900 text-sm font-medium me-2 px-3 py-1 rounded dark:bg-red-900 dark:text-red-200 ${isVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
              >
                {message}
              </span>
            ) : (
              <span
                className={`bg-green-200 text-green-900 text-sm font-medium me-2 px-3 py-1 rounded dark:bg-green-900 dark:text-green-300 ${isVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
              >
                {message}
              </span>
            )}
          </div>
        </>
      )}
    </form>
  );
};

export default SubscribeForm;
