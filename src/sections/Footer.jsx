export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-3 px-5 py-8 sm:flex-row sm:px-8">
        <p className="font-mono text-xs text-faint">
          © {year} Austin J. Hunt · built with React, Vite & Tailwind
        </p>
        <a
          href="#top"
          className="font-mono text-xs text-muted transition-colors hover:text-accent"
        >
          back to top ↑
        </a>
      </div>
    </footer>
  );
}
