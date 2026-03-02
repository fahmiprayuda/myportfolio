export default function Footer() {
  return (
    <footer className="mt-32 border-t border-gray-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 py-10 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Fahmi Prayuda</p>

        <p className="mt-2">Built with Next.js + Tailwind + Framer Motion</p>
      </div>
    </footer>
  );
}
