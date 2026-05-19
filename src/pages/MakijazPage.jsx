import ProductListPage from "../components/ProductListPage";

const subcategories = [
  { value: "twarz", label: "Twarz" },
  { value: "oczy", label: "Oczy" },
  { value: "usta", label: "Usta" },
];

function MakijazPage() {
  return (
    <ProductListPage
      category="makijaz"
      title="Makijaż"
      description="Odkryj profesjonalne kosmetyki łączące luksusową pielęgnację z perfekcyjnym wykończeniem."
      subcategories={subcategories}
    />
  );
}

export default MakijazPage;