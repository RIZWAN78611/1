import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading = ({ title, subtitle, centered = true, className }: SectionHeadingProps) => {
  return (
    <div className={cn("mb-12", centered ? "text-center" : "text-left", className)}>
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-900 dark:text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-blue-600 dark:text-blue-500 font-medium tracking-widest uppercase text-sm">
          {subtitle}
        </p>
      )}
      <div className={cn("h-1 w-20 bg-blue-600 mt-4", centered ? "mx-auto" : "mr-auto")} />
    </div>
  );
};

export default SectionHeading;
