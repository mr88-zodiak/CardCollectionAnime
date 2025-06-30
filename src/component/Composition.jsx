export default function Composition({ children }) {
  return (
    <div className="min-h-screen bg-slate-900 text-white px-4 py-8 overflow-x-hidden">
      <div className="max-w-6xl mx-auto space-y-6">{children}</div>
    </div>
  );
}
