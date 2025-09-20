export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* Soft radial glow from top */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,hsl(var(--primary)/0.12),transparent_70%)]"></div>

      {/* Animated blobs */}
      <div className="absolute -top-40 -left-40 w-[55vw] h-[55vw] bg-primary/10 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute top-1/3 -right-48 w-[45vw] h-[45vw] bg-accent/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-52 left-1/4 w-[55vw] h-[55vw] bg-secondary/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(100%_80%_at_50%_120%,_hsl(var(--foreground)/0.05),_transparent_60%)]"></div>
    </div>
  );
}







