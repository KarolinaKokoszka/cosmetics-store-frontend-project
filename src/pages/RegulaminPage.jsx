import InfoPage from "../components/InfoPage";

const sections = [
  {
    heading: "Postanowienia ogólne",
    text: "Niniejszy Regulamin określa zasady korzystania ze sklepu internetowego Glowi dostępnego pod adresem glowi.com, składania zamówień, dokonywania płatności oraz uprawnień Klientów.",
  },
  {
    heading: "Składanie zamówień",
    text: "Zamówienia można składać 24 godziny na dobę, 7 dni w tygodniu. Złożenie zamówienia następuje przez dodanie produktów do koszyka i wypełnienie formularza checkout. Potwierdzenie zamówienia jest wysyłane automatycznie na podany adres e-mail.",
  },
  {
    heading: "Płatności",
    text: "Akceptujemy płatności kartą kredytową i debetową (Visa, Mastercard), BLIK, przelewem bankowym oraz przez PayPal. Wszystkie transakcje są szyfrowane i realizowane przez certyfikowanych operatorów płatności.",
  },
  {
    heading: "Ceny produktów",
    text: "Wszystkie ceny podane w sklepie są cenami brutto (zawierają podatek VAT) i są wyrażone w złotych polskich (PLN). Ceny nie zawierają kosztów dostawy, które są doliczane w podsumowaniu zamówienia.",
  },
  {
    heading: "Ochrona danych i bezpieczeństwo",
    text: "Sklep stosuje technologię SSL zapewniającą szyfrowanie danych podczas transmisji. Szczegółowe zasady przetwarzania danych osobowych opisane są w Polityce Prywatności dostępnej na naszej stronie.",
  },
];

function RegulaminPage() {
  return <InfoPage title="Regulamin" sections={sections} />;
}

export default RegulaminPage;