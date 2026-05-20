import ProductListPage from "../components/ProductListPage";

const subcategories = [
  { value: "twarz", label: "Twarz" },
  { value: "wlosy", label: "Włosy" },
  { value: "cialo", label: "Ciało" },
];

const rutyny = [
  { value: "oczyszczanie", label: "Oczyszczanie" },
  { value: "tonizacja",    label: "Tonizacja"    },
  { value: "serum",        label: "Serum"        },
  { value: "krem",         label: "Krem"         },
];

function PielegnacjaPage() {
  return (
    <ProductListPage
      category="pielegnacja"
      title="Pielęgnacja"
      description="Odkryj profesjonalne kosmetyki łączące luksusową pielęgnację z perfekcyjnym wykończeniem."
      subcategories={subcategories}
      rutyny={rutyny}
    />
  );
}

export default PielegnacjaPage;