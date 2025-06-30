export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Bima Sena. All rights reserved.
        </p>
        <div className="flex gap-4 text-sm">
          <a href="#" className="hover:text-yellow-400 transition">
            Beranda
          </a>
          <a href="#" className="hover:text-yellow-400 transition">
            Tentang
          </a>
          <a href="#" className="hover:text-yellow-400 transition">
            Kontak
          </a>
        </div>
      </div>
    </footer>
  );
}
