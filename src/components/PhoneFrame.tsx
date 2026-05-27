import { ReactNode } from "react";

export function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh bg-gradient-to-b from-cream-dark to-gold/20 md:flex md:items-center md:justify-center md:p-6">
      <div className="mx-auto w-full md:max-w-[430px] md:overflow-hidden md:rounded-[2.5rem] md:border-[10px] md:border-gold-deep md:shadow-2xl md:ring-1 md:ring-gold/30">
        {children}
      </div>
    </div>
  );
}
