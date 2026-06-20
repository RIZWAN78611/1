"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useAnimate } from "framer-motion";
import { Mail, MessageSquare, Monitor, PenTool, Layout, Palette } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import { HighlighterItem, HighlightGroup, Particles } from "@/components/ui/highlighter";

export function Connect() {
  const [scope, animate] = useAnimate();

  React.useEffect(() => {
    animate(
      [
        ["#pointer", { left: 200, top: 60 }, { duration: 0 }],
        ["#tag-branding", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 50, top: 102 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#tag-branding", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
        ["#tag-precision", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 224, top: 170 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#tag-precision", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
        ["#tag-jobworks", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 88, top: 198 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#tag-jobworks", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
        ["#tag-cncmolds", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 200, top: 60 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#tag-cncmolds", { opacity: 0.5 }, { at: "-0.3", duration: 0.1 }],
      ],
      {
        repeat: Number.POSITIVE_INFINITY,
      },
    );
  }, [animate]);

  return (
    <section className="relative mx-auto mb-20 mt-6 max-w-5xl px-4">
      <HighlightGroup className="group h-full">
        <div
          className="group/item h-full md:col-span-6 lg:col-span-12"
        >
          <HighlighterItem className="rounded-3xl p-px">
            <div className="relative z-20 h-full overflow-hidden rounded-3xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
              <Particles
                className="absolute inset-0 -z-10 opacity-10 transition-opacity duration-1000 ease-in-out group-hover/item:opacity-100"
                quantity={200}
                color={"#3b82f6"}
                vy={-0.2}
              />
              <div className="flex justify-center">
                <div className="flex h-full flex-col justify-center gap-10 p-4 md:h-[400px] md:flex-row items-center">
                  <div
                    className="relative mx-auto h-[270px] w-[300px] md:h-[270px] md:w-[300px]"
                    ref={scope}
                  >
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-500">
                       <Monitor size={48} strokeWidth={1.5} />
                    </div>

                    <div
                      id="tag-cncmolds"
                      className="absolute bottom-12 left-14 rounded-3xl border border-slate-400 bg-slate-200 px-3 py-1.5 text-xs opacity-50 dark:border-slate-600 dark:bg-slate-800 flex items-center gap-2"
                    >
                      <Layout size={14} /> CNC Molds
                    </div>
                    <div
                      id="tag-precision"
                      className="absolute left-2 top-20 rounded-3xl border border-slate-400 bg-slate-200 px-3 py-1.5 text-xs opacity-50 dark:border-slate-600 dark:bg-slate-800 flex items-center gap-2"
                    >
                      <PenTool size={14} /> Precision
                    </div>
                    <div
                      id="tag-jobworks"
                      className="absolute bottom-20 right-1 rounded-3xl border border-slate-400 bg-slate-200 px-3 py-1.5 text-xs opacity-50 dark:border-slate-600 dark:bg-slate-800 flex items-center gap-2"
                    >
                      <Monitor size={14} /> Job Works
                    </div>
                    <div
                      id="tag-branding"
                      className="absolute right-12 top-10 rounded-3xl border border-slate-400 bg-slate-200 px-3 py-1.5 text-xs opacity-50 dark:border-slate-600 dark:bg-slate-800 flex items-center gap-2"
                    >
                      <Palette size={14} /> Design
                    </div>

                    <div id="pointer" className="absolute z-50">
                      <svg
                        width="16.8"
                        height="18.2"
                        viewBox="0 0 12 13"
                        className="fill-blue-500"
                        stroke="white"
                        strokeWidth="1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 5.50676L0 0L2.83818 13L6.30623 7.86537L12 5.50676V5.50676Z"
                        />
                      </svg>
                      <span className="bg-blue-500 relative -top-1 left-3 rounded-3xl px-2 py-1 text-xs text-white">
                        UAU JIGBO
                      </span>
                    </div>
                  </div>

                  <div className="flex h-full flex-col justify-center p-2 md:ml-10 md:w-[400px]">
                    <div className="flex flex-col items-start">
                      <h3 className="pb-1 font-bold text-slate-900 dark:text-white">
                        <span className="text-2xl md:text-4xl">
                          Precision Engineering Questions?
                        </span>
                      </h3>
                    </div>
                    <p className="mb-6 text-slate-500 dark:text-slate-400">
                      Our experts are ready to assist with your CNC and Mold requirements.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Link
                        href="#contact"
                      >
                        <Button className="bg-blue-600 hover:bg-blue-700">Get a Quote</Button>
                      </Link>
                      <Link
                        href="mailto:uaujigbo_technics@yahoo.in"
                        className={cn(
                          buttonVariants({
                            variant: "outline",
                            size: "icon",
                          }),
                        )}
                      >
                        <Mail strokeWidth={1.5} className="h-5 w-5" />
                      </Link>
                      <Link
                        href="https://wa.me/919000399786"
                        target="_blank"
                        className={cn(
                          buttonVariants({
                            variant: "outline",
                            size: "icon",
                          }),
                        )}
                      >
                        <MessageSquare strokeWidth={1.5} className="h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </HighlighterItem>
        </div>
      </HighlightGroup>
    </section>
  );
}
