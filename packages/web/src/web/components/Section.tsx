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
      className={`py-32 md:py-48 lg:py-60 ${bg === "gris" ? "bg-gris/8" : ""} ${className} reveal ${visible ? "visible" : ""}`}
    >
      <div className="max-w-[1180px] mx-auto px-6 md:px-[90px]">
        {children}
      </div>
    </section>
  );
}
