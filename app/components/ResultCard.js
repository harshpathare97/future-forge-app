export default function ResultCard({ title, items }) {
  return (
    <div className="bg-white/10 p-6 rounded-xl shadow-lg">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>

      <ul className="space-y-2 text-gray-300">
        {items.map((item, i) => (
          <li key={i}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}
