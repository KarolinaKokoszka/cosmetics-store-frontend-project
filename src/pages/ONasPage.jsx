import InfoPage from "../components/InfoPage";

const sections = [
  {
    heading: "Nasza historia",
    text: "Glowi powstało w 2021 roku z pasji do pielęgnacji opartej na nauce i czystych składnikach. Zaczęłyśmy od jednego serum stworzonego w domowym laboratorium, a dziś oferujemy ponad 60 produktów dostępnych w całej Europie.",
  },
  {
    heading: "Nasza filozofia",
    text: "Wierzymy, że skuteczna pielęgnacja nie wymaga kompromisu między luksusem a odpowiedzialnością. Każdy produkt Glowi łączy kliniczną precyzję formulacji z naturalnymi składnikami aktywnymi, bez zbędnych wypełniaczy i szkodliwych substancji.",
  },
  {
    heading: "Składniki i etyka",
    text: "Wszystkie nasze produkty są wolne od parabenów, siarczanów i syntetycznych barwników. Jesteśmy certyfikowaną marką cruelty-free — nie testujemy na zwierzętach i współpracujemy wyłącznie z dostawcami podzielającymi nasze wartości.",
  },
  {
    heading: "Zrównoważony rozwój",
    text: "Nasze opakowania wykonane są w co najmniej 80% z materiałów z recyclingu. Do 2026 roku planujemy przejście na w pełni biodegradowalne opakowania zewnętrzne oraz program refill dla naszych bestsellerowych produktów.",
  },
  {
    heading: "Zespół",
    text: "Za Glowi stoi zespół 12 osób — kosmetologów, chemików, projektantów i pasjonatów beauty. Pracujemy z Warszawy, ale dostarczamy do ponad 20 krajów. Każda decyzja produktowa przechodzi przez nasze wewnętrzne testy kliniczne.",
  },
];

function ONasPage() {
  return <InfoPage title="O nas" sections={sections} />;
}

export default ONasPage;