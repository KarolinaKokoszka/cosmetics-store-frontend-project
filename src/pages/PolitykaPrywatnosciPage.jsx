import InfoPage from "../components/InfoPage";

const sections = [
  {
    heading: "Administrator danych",
    text: "Administratorem Twoich danych osobowych jest Glowi Sp. z o.o. z siedzibą w Warszawie (00-001), ul. Nowa 12. Możesz skontaktować się z nami pod adresem: privacy@glowi.com.",
  },
  {
    heading: "Jakie dane zbieramy",
    text: "Zbieramy dane niezbędne do realizacji zamówienia: imię i nazwisko, adres dostawy, adres e-mail oraz numer telefonu. Dane płatnicze są przetwarzane wyłącznie przez certyfikowanych operatorów płatności i nie są przez nas przechowywane.",
  },
  {
    heading: "Cel przetwarzania",
    text: "Twoje dane przetwarzamy w celu realizacji zamówień, obsługi reklamacji i zwrotów, wysyłki newslettera (wyłącznie za Twoją zgodą) oraz wypełnienia obowiązków prawnych wynikających z przepisów podatkowych i rachunkowych.",
  },
  {
    heading: "Pliki cookies",
    text: "Nasza strona używa plików cookies w celu zapewnienia prawidłowego działania sklepu, analizy ruchu (Google Analytics) oraz personalizacji treści. Możesz zarządzać ustawieniami cookies w swojej przeglądarce w dowolnym momencie.",
  },
  {
    heading: "Twoje prawa",
    text: "Masz prawo dostępu do swoich danych, ich sprostowania, usunięcia, ograniczenia przetwarzania oraz przenoszenia. Możesz również wnieść sprzeciw wobec przetwarzania lub cofnąć zgodę na newsletter — wystarczy e-mail na privacy@glowi.com.",
  },
];

function PolitykaPrywatnosciPage() {
  return <InfoPage title="Polityka Prywatności" sections={sections} />;
}

export default PolitykaPrywatnosciPage;