export default function Footer() {
  return (
    <footer className="px-6 md:px-20 py-12 border-t border-white/8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-white tracking-tight mb-1">
            Hinata Labs
          </p>
          <p className="text-xs text-white/30">
            Building tools for Web3 growth
          </p>
        </div>

        <p className="text-xs text-white/20">
          &copy; {new Date().getFullYear()} Hinata Labs. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
