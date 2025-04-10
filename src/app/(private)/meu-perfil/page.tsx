import MoleculeComponent from "@/components/molecules"

export default function MyProfile() {
  return (
    <main className="flex w-full h-[calc(100vh-4rem)]">
     
      
      <div className="flex flex-col justify-center items-center w-full flex-1 p-8">
        <MoleculeComponent.ReviewSummary />
        <MoleculeComponent.OfferedServices />
        <MoleculeComponent.Gallery />
        <MoleculeComponent.ProfileActions />
      </div>
    </main>
  )
}
