import { useReveal } from "../hooks/useReveal";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  bg?: "cream" | "gris";
  id?: string;
}

export default function Section({ children, className = "", bg = "cream", id }: SectionProps) {
  const { ref, visible } = useReveal();

  return (
    <section
      id={id}
      ref={ref}
      className={`py-20 md:py-32 lg:py-40 ${bg === "gris" ? "bg-gris/30" : ""} ${className} reveal ${visible ? "visible" : ""}`}
    >
      <div className="max-w-[1180px] mx-auto px-6 md:px-[90px]">
        {children}
      </div>
    </section>
  );
}
