import InfoPage from "../components/InfoPage";

const sections = [
  {
    heading: "Czas realizacji",
    text: "Zamówienia złożone do godziny 14:00 w dni robocze są wysyłane tego samego dnia. Standardowy czas dostawy wynosi 1–3 dni robocze na terenie całej Polski.",
  },
  {
    heading: "Darmowa dostawa",
    text: "Zamówienia powyżej 200 PLN są objęte bezpłatną dostawą kurierską. Dla zamówień poniżej tej kwoty koszt dostawy wynosi 14,99 PLN.",
  },
  {
    heading: "Metody dostawy",
    text: "Współpracujemy z kurierami DPD, DHL oraz InPost. Po złożeniu zamówienia otrzymasz e-mail z numerem przesyłki umożliwiającym śledzenie paczki w czasie rzeczywistym.",
  },
  {
    heading: "Dostawa za granicę",
    text: "Realizujemy wysyłki do wszystkich krajów Unii Europejskiej. Czas dostawy zagranicznej wynosi 3–7 dni roboczych, a koszt ustalany jest indywidualnie w zależności od kraju przeznaczenia.",
  },
  {
    heading: "Odbiór osobisty",
    text: "Istnieje możliwość odbioru osobistego zamówienia w naszym showroomie w Warszawie przy ul. Nowej 12, od poniedziałku do piątku w godzinach 10:00–18:00.",
  },
];

function DostawaPage() {
  return <InfoPage title="Dostawa" sections={sections} />;
}

export default DostawaPage;