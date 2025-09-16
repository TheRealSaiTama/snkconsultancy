"use client";

import { Globe } from "@/registry/magicui/globe";

export function GlobeDemo() {
  return (
    <div className="relative flex h-full w-full items-center justify-start overflow-hidden rounded-2xl pl-8">
      <div className="h-full w-full max-w-[85%]">
        <Globe />
      </div>
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_30%_50%,rgba(0,0,0,0.1),rgba(255,255,255,0))]" />
      <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_20px_rgba(0,0,0,0.1)]" />
    </div>
  );
}