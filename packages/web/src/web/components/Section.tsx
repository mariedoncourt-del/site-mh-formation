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
      className={`py-24 md:py-40 lg:py-52 ${bg === "gris" ? "bg-gris/15" : ""} ${className} reveal ${visible ? "visible" : ""}`}
    >
      <div className="max-w-[1180px] mx-auto px-6 md:px-[90px]">
        {children}
      </div>
    </section>
  );
}
