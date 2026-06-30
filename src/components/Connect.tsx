"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Mail, MessageSquare, Phone, Cpu, Settings, Target, Zap } from "lucide-react";
import { useAnimate } from "framer-motion";

import { Button, buttonVariants } from "@/components/ui/button";
import { HighlighterItem, HighlightGroup, Particles } from "@/components/ui/highlighter";

export default function Connect() {
  const [scope, animate] = useAnimate();

  React.useEffect(() => {
    animate(
      [
        ["#pointer", { left: 200, top: 60 }, { duration: 0 }],
        ["#milling", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 50, top: 102 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#milling", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
        ["#moulds", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 224, top: 170 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#moulds", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
        ["#boring", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 88, top: 198 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#boring", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
        ["#edm", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 200, top: 60 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#edm", { opacity: 0.5 }, { at: "-0.3", duration: 0.1 }],
      ],
      {
        repeat: Number.POSITIVE_INFINITY,
      },
    );
  }, [animate]);

  return (
    <section className="relative mx-auto mb-20 mt-20 max-w-5xl px-6" id="connect">
      <HighlightGroup className="group h-full">
        <div
          className="group/item h-full md:col-span-6 lg:col-span-12"
          data-aos="fade-down"
        >
          <HighlighterItem className="rounded-3xl p-6">
            <div className="relative z-20 h-full overflow-hidden rounded-3xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-black">
              <Particles
                className="absolute inset-0 -z-10 opacity-10 transition-opacity duration-1000 ease-in-out group-hover/item:opacity-100"
                quantity={200}
                color={"#3b82f6"}
                vy={-0.2}
              />
              <div className="flex justify-center">
                <div className="flex h-full flex-col justify-center gap-10 p-4 md:h-[400px] md:flex-row">
                  <div
                    className="relative mx-auto h-[270px] w-[300px] md:h-[300px] md:w-[350px]"
                    ref={scope}
                  >
                    <Settings className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 text-blue-600 animate-spin-slow" />
                    <div
                      id="edm"
                      className="absolute bottom-12 left-14 rounded-3xl border border-slate-400 bg-slate-200 px-3 py-1.5 text-xs font-bold opacity-50 dark:border-slate-600 dark:bg-slate-800"
                    >
                      EDM Sparking
                    </div>
                    <div
                      id="moulds"
                      className="absolute left-2 top-20 rounded-3xl border border-slate-400 bg-slate-200 px-3 py-1.5 text-xs font-bold opacity-50 dark:border-slate-600 dark:bg-slate-800"
                    >
                      Precision Moulds
                    </div>
                    <div
                      id="boring"
                      className="absolute bottom-20 right-1 rounded-3xl border border-slate-400 bg-slate-200 px-3 py-1.5 text-xs font-bold opacity-50 dark:border-slate-600 dark:bg-slate-800"
                    >
                      Jig Boring
                    </div>
                    <div
                      id="milling"
                      className="absolute right-12 top-10 rounded-3xl border border-slate-400 bg-slate-200 px-3 py-1.5 text-xs font-bold opacity-50 dark:border-slate-600 dark:bg-slate-800"
                    >
                      CNC Milling
                    </div>

                    <div id="pointer" className="absolute">
                      <svg
                        width="16.8"
                        height="18.2"
                        viewBox="0 0 12 13"
                        className="fill-blue-600"
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
                      <span className="relative -top-1 left-3 rounded-3xl bg-blue-600 px-2 py-1 text-[10px] font-bold text-white uppercase">
                        Precision
                      </span>
                    </div>
                  </div>

                  <div className="-mt-10 flex h-full flex-col justify-center p-2 md:mt-0 md:ml-10 md:w-[450px]">
                    <div className="flex flex-col items-start">
                      <h3 className="mb-4 font-black tracking-tighter uppercase">
                        <span className="text-3xl md:text-5xl text-slate-900 dark:text-white">
                          Ready for <br />
                          <span className="text-blue-600">Perfect Execution?</span>
                        </span>
                      </h3>
                    </div>
                    <p className="mb-8 text-slate-600 dark:text-slate-400 font-medium">
                      Have questions about tight tolerances or complex moulds?
                      Our engineers are ready to help you with your next project.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <Link
                        href="#contact"
                      >
                        <Button className="px-8 py-6 rounded-2xl font-bold uppercase tracking-wider">Book a Consultation</Button>
                      </Link>
                      <Link
                        href="mailto:uaujigbo_technics@yahoo.in"
                        className={cn(
                          buttonVariants({
                            variant: "outline",
                            size: "icon",
                          }),
                          "w-14 h-14 rounded-2xl border-2"
                        )}
                      >
                        <Mail className="h-6 w-6" />
                      </Link>
                      <Link
                        href="https://wa.me/919000399786"
                        target="_blank"
                        className={cn(
                          buttonVariants({
                            variant: "outline",
                            size: "icon",
                          }),
                          "w-14 h-14 rounded-2xl border-2"
                        )}
                      >
                        <MessageSquare className="h-6 w-6" />
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
