import { useReveal } from "../hooks/useReveal";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  bg?: "white" | "slate";
  bordered?: boolean;
  id?: string;
}

export default function Section({ children, className = "", bg = "white", bordered = false, id }: SectionProps) {
  const { ref, visible } = useReveal();

  return (
    <section
      id={id}
      ref={ref}
      className={`py-24 md:py-32 ${
        bg === "slate" ? "bg-slate-50/50" : "bg-white"
      } ${bordered ? "border-t border-b border-slate-200" : ""} ${className} reveal ${visible ? "visible" : ""}`}
    >
      <div className="max-w-6xl mx-auto px-6">
        {children}
      </div>
    </section>
  );
}
