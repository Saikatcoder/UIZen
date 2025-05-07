"use client";

import type React from "react";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import TailwindLogo from "../icons/tailwindcss";
import BrowsrComponentsButton from "../buttonComponents/browseComponentsBtton";
import BrowsrBlockBttons from "../buttonComponents/browseBlockBttton";

export function HeroSection() {
  return (
    <div className="mx-auto w-full max-w-7xl min-h-screen flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 px-4 sm:px-6 py-12 md:py-16 lg:py-20">
      {/* Left side - Title and CTA */}
      <div className="w-full lg:w-[45%] flex flex-col items-start text-left space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-zinc-900 dark:text-zinc-100">
            Where detail
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-500 via-fuchsia-500 to-purple-500 dark:from-rose-400 dark:via-fuchsia-400 dark:to-purple-400">
              Meets design
            </span>
          </h1>
          <p className="mt-6 text-base md:text-xl text-zinc-700 dark:text-zinc-300 max-w-lg">
            A library of precision-built UI elements
            <span className="font-semibold bg-gradient-to-r from-rose-500 via-fuchsia-500 to-purple-500 dark:from-rose-400 dark:via-fuchsia-400 dark:to-purple-400 bg-clip-text text-transparent">
              100+ Premium UI
            </span>
            <span className="font-semibold bg-gradient-to-r from-rose-500 via-fuchsia-500 to-purple-500 dark:from-rose-400 dark:via-fuchsia-400 dark:to-purple-400 bg-clip-text text-transparent">
              Components Tailwind Css
            </span>{" "}
            <span className="font-semibold bg-gradient-to-r from-rose-500 via-fuchsia-500 to-purple-500 dark:from-rose-400 dark:via-fuchsia-400 dark:to-purple-400 bg-clip-text text-transparent">
              Shadcn/UI
            </span>
            <span className="dark:text-gray-500 text-black">
              for our modern React and Next.js applications
            </span>
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col justify-start w-full"
        >
          <span className="text-sm text-zinc-500 dark:text-zinc-400 pb-3 text-start flex items-center gap-2">
            {/* <TailwindCss/> */}
            <TailwindLogo />
            <span>Now updated for Tailwind Css 4.0</span>
            <span className="inline-flex items-center rounded-md bg-purple-50 dark:bg-purple-900/30 px-2 py-1 text-xs font-medium text-purple-700 dark:text-purple-300 ">
              <Sparkles className="h-3 w-4 mr-1" />
              new
            </span>
          </span>
          <div className="flex flex-col sm:flex-row items-center sm:items-center justify-start gap-3">
            <BrowsrComponentsButton/>
            <BrowsrBlockBttons/>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
