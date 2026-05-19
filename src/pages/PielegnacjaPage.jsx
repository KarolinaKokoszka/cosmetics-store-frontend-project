import ProductListPage from "../components/ProductListPage";

const subcategories = [
  { value: "twarz", label: "Twarz" },
  { value: "wlosy", label: "Włosy" },
  { value: "cialo", label: "Ciało" },
];

function PielegnacjaPage() {
  return (
    <ProductListPage
      category="pielegnacja"
      title="Pielęgnacja"
      description="Odkryj profesjonalne kosmetyki łączące luksusową pielęgnację z perfekcyjnym wykończeniem."
      subcategories={subcategories}
    />
  );
}

export default PielegnacjaPage;