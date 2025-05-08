import CatalogForm from "@/components/organism/CatalogForm";
  
  export default function CatalogPage() {
    return (
        <main className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <CatalogForm/>
        </main>
    );
  }