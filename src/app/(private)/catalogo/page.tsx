import MoleculeComponent from "@/components/molecules";
import categories from "@/json/categories.json"
  
  export default function CatalogPage() {
    return (
        <main className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((cat, idx) => (
            <MoleculeComponent.CategoryCard key={idx} title={cat.title} services={cat.services} />
          ))}
        </main>
    );
  }