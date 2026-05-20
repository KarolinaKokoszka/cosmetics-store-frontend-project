import InfoPage from "../components/InfoPage";

const sections = [
  {
    heading: "Prawo do zwrotu",
    text: "Masz prawo zwrócić zakupiony produkt w ciągu 30 dni od daty jego otrzymania bez podawania przyczyny. Produkt musi być nieużywany, w oryginalnym opakowaniu i nieuszkodzony.",
  },
  {
    heading: "Jak złożyć zwrot",
    text: "Aby zainicjować zwrot, skontaktuj się z nami pod adresem zwroty@glowi.com, podając numer zamówienia i powód zwrotu. Wyślemy Ci etykietę zwrotną na wskazany adres e-mail.",
  },
  {
    heading: "Czas zwrotu środków",
    text: "Po otrzymaniu i weryfikacji paczki zwrócimy należność w ciągu 5–7 dni roboczych tą samą metodą płatności, której użyłaś przy zakupie.",
  },
  {
    heading: "Produkty wyłączone ze zwrotów",
    text: "Ze względów higienicznych nie przyjmujemy zwrotów produktów do makijażu ust i oczu, które zostały otwarte lub używane. Dotyczy to również zestawów, jeśli którykolwiek z produktów wchodzących w ich skład został naruszony.",
  },
  {
    heading: "Reklamacje",
    text: "Jeśli otrzymany produkt jest uszkodzony lub niezgodny z zamówieniem, skontaktuj się z nami w ciągu 48 godzin od otrzymania paczki. Dołącz zdjęcia produktu oraz opakowania — wymienimy towar lub zwrócimy pełną kwotę.",
  },
];

function ZwrotyPage() {
  return <InfoPage title="Zwroty i reklamacje" sections={sections} />;
}

export default ZwrotyPage;