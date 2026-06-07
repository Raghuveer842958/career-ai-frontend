import { Link } from "react-router-dom";

export default function DashboardCard({
  title,
  description,
  link,
}) {
  return (
    <Link
      to={link}
      className="
        bg-[#161616]
        border
        border-[#242424]
        rounded-xl
        p-6
        hover:border-amber-300/40
        transition-all
        group
      "
    >
      <h3 className="text-xl text-[#f0ede8] mb-3 group-hover:text-amber-300 transition-colors">
        {title}
      </h3>

      <p className="text-sm text-[#666] leading-relaxed">
        {description}
      </p>

      <div className="mt-6 text-amber-300 text-sm">
        Open →
      </div>
    </Link>
  );
}