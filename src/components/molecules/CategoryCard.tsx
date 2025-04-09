import AtomComponents from "../atoms";

interface CategoryCardProps {
    title: string;
    services: string[];
  }
  
  export default function CategoryCard({ title, services }: CategoryCardProps) {
    return (
      <div className="bg-white rounded shadow-md p-2 w-full max-w-xs">
        <h3 className="bg-primary text-secondary font-bold px-4 py-2 rounded-t text-sm">
          {title}
        </h3>
        <div className="space-y-2 p-2 bg-primary-light rounded-b">
          {services.map((service, index) => (
            <AtomComponents.ServiceButton key={index} label={service} />
          ))}
        </div>
      </div>
    );
  }