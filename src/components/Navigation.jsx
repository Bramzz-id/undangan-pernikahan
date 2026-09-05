export default function Navigation() {
  const navItems = [
    { href: "#mempelai", icon: "🔱", label: "Mempelai" },
    { href: "#acara", icon: "📅", label: "Acara" },
    { href: "#hadiah", icon: "🎁", label: "Hadiah" },
    { href: "#rsvp", icon: "💌", label: "RSVP" },
    { href: "#galeri", icon: "💌", label: "Galeri" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-[#1c1512]/95 backdrop-blur-lg border-t border-amber-600/40 py-2.5 px-6 shadow-2xl">
      <div className="max-w-md mx-auto flex justify-around items-center text-[10px] md:text-xs font-medium text-amber-200/80">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="flex flex-col items-center hover:text-amber-400 transition-colors"
          >
            <span className="text-sm md:text-base">{item.icon}</span>
            <span className="mt-0.5">{item.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}