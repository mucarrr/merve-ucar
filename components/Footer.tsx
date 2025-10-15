export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Merve Uçar. Tüm hakları saklıdır.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Next.js, React, TypeScript ve Tailwind CSS ile ❤️ ile yapıldı.
          </p>
        </div>
      </div>
    </footer>
  );
}

