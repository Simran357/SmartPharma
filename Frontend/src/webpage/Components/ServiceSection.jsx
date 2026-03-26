import { Truck, FileText, BarChart3, Pill } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Pill size={26} />,
      title: "Medicine Availability",
      desc: "Check real-time stock across pharmacies near you.",
    },
    {
      icon: <Truck size={26} />,
      title: "Fast Delivery",
      desc: "Get medicines delivered quickly to your doorstep.",
    },
    {
      icon: <FileText size={26} />,
      title: "Digital Billing",
      desc: "OCR-powered digital bills — paperless and error-free.",
    },
    {
      icon: <BarChart3 size={26} />,
      title: "Inventory Management",
      desc: "Full stock tracking with expiry and reorder insights.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      {/* Heading */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Our Services
        </h2>
        <p className="text-gray-500 mt-3">
          Everything a smart pharmacy needs, in one platform.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((item, i) => (
          <div
            key={i}
            className="bg-white border rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition duration-300"
          >
            {/* Icon */}
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-xl bg-gradient-to-r from-green-400 to-teal-500 text-white mb-4">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-800">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-500 text-sm mt-2">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
    