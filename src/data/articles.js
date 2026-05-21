// src/data/articles.js

const articles = [
  {
    id: 1,
    slug: "/poradniki/glass-skin",
    category: "pielegnacja",
    categoryLabel: "Skin Care",
    title: "5 kroków do idealnego 'Glass Skin' tej jesieni",
    excerpt: "Poznaj sekrety wieloetapowej pielęgnacji, która przywróci Twojej skórze blask nawet w najchłodniejsze dni. Skoncentrujemy się na kwasie hialuronowym i ceramidach.",
    image: "/images/advice/Glass-skin-adv1.jpg",
    layout: "image-left",
    bg: "#EAF0F6",
    catColor: "#7B5CF0",
    catTextColor: "#fff",
    readTime: "4 min",
    intro: "Efekt szklanej skóry - gładkiej, rozświetlonej i niemal przezroczystej - nie jest zarezerwowany wyłącznie dla koreańskich gwiazd k-popu. Przy odpowiedniej rutynie pielęgnacyjnej każda cera może zyskać ten sam blask, nawet jesienią, gdy suche powietrze i zmienna temperatura szczególnie dają się skórze we znaki.",
    sections: [
      {
        heading: "Krok 1 - Podwójne oczyszczanie",
        text: "Podstawą glass skin jest absolutnie czysta skóra. Zacznij od olejku myjącego, który rozpuści makijaż i sebum, a następnie sięgnij po delikatny żel lub piankę na bazie wody. Podwójne oczyszczanie usuwa zanieczyszczenia w dwóch etapach, nie naruszając naturalnej bariery ochronnej skóry.",
      },
      {
        heading: "Krok 2 - Eksfoliacja",
        text: "Dwa, trzy razy w tygodniu stosuj delikatny peeling chemiczny z kwasem mlekowym lub migdałowym. Usunięcie martwego naskórka sprawia, że kolejne produkty wnikają głębiej, a skóra staje się jednolita i gotowa na blask.",
      },
      {
        heading: "Krok 3 - Nawarstwiony kwas hialuronowy",
        text: "Sekret glass skin tkwi w intensywnym nawilżeniu. Nanieś kilka warstw esencji lub serum z kwasem hialuronowym o różnej masie cząsteczkowej - lekka frakcja działa na powierzchni, ciężka wnika w głębsze warstwy. Każdą warstwę aplikuj na lekko wilgotną skórę, delikatnie wklepując opuszkami palców.",
      },
      {
        heading: "Krok 4 - Ceramidy i peptydowy krem",
        text: "Ceramidy uszczelniają barierę ochronną i zapobiegają utracie wilgoci przez cały dzień. Wybierz krem z ceramidami, niacynamidem i peptydami - taki zestaw składników odżywi skórę, wyrówna jej koloryt i nada jej charakterystyczny, lekko promienny wygląd.",
      },
      {
        heading: "Krok 5 - SPF jako ostatni krok",
        text: "Nawet jesienią promieniowanie UV osłabia efekty całej pielęgnacji. Krem z filtrem SPF 30 lub wyższym zakończy rutynę i ochroni efekty poprzednich kroków. Wybieraj lekkie formuły, które nie zostawiają białego nalotu i dobrze komponują się z makijażem.",
      },
    ],
    tip: "Pamiętaj - glass skin to efekt nawilżenia, nie błyszczenia. Jeśli skóra świeci, ale jest odwodniona, warto cofnąć się do kroku trzeciego i zwiększyć ilość warstw serum nawilżającego.",
  },
  {
    id: 2,
    slug: "/poradniki/retinol-vs-bakuchiol",
    category: "pielegnacja",
    categoryLabel: "Składniki aktywne",
    title: "Retinol czy Bakuchiol? Wielkie porównanie",
    excerpt: "Czy roślinna alternatywa naprawdę działa tak skutecznie jak złoty standard przeciwstarzeniowy? Rozwiewamy wątpliwości i analizujemy badania kliniczne obu substancji.",
    image: "/images/advice/retinol-adv2.jpg",
    layout: "image-right",
    bg: "#FDEAEA",
    catColor: "#FF5A5F",
    catTextColor: "#fff",
    readTime: "6 min",
    intro: "Retinol od dekad króluje w dermatologii jako jeden z najlepiej przebadanych składników przeciwstarzeniowych. Jednak dla skór wrażliwych, skłonnych do podrażnień czy kobiet w ciąży jego stosowanie bywa problematyczne. Tu wkracza bakuchiol - roślinny ekstrakt z nasion rośliny Psoralea corylifolia, który obiecuje podobne efekty bez charakterystycznych skutków ubocznych.",
    sections: [
      {
        heading: "Jak działa retinol?",
        text: "Retinol to forma witaminy A, która po nałożeniu na skórę przekształca się w kwas retinowy. Przyspiesza odnowę komórkową, pobudza produkcję kolagenu i elastyny, wygładza zmarszczki i wyrównuje koloryt. Efekty są potwierdzone dziesiątkami badań klinicznych - to jeden z niewielu składników, co do którego dermatolodzy są w pełni zgodni.",
      },
      {
        heading: "Wady retinolu",
        text: "Pierwszych kilka tygodni stosowania retinolu często wiąże się z tak zwanym purging - przejściowym nasileniem niedoskonałości, łuszczeniem i zaczerwienieniem. Skóra wymaga czasu na adaptację, a stosowanie zbyt wysokich stężeń od razu może prowadzić do poważnych podrażnień. Retinolu nie stosuje się również w ciąży i podczas karmienia piersią.",
      },
      {
        heading: "Bakuchiol - co mówią badania?",
        text: "Badania opublikowane w British Journal of Dermatology wykazały, że bakuchiol stosowany dwa razy dziennie przez dwanaście tygodni przynosił porównywalne efekty do retinolu w zakresie redukcji zmarszczek i przebarwień, przy znacznie mniejszej liczbie zgłaszanych podrażnień. Bakuchiol działa na te same receptory co retinol, ale łagodniej i bez typowego okresu adaptacji.",
      },
      {
        heading: "Który wybrać?",
        text: "Jeśli Twoja skóra jest normalna lub mieszana i nie masz problemów z tolerancją nowych składników - retinol w stężeniu 0,025–0,1% wprowadzony stopniowo przyniesie znakomite, długofalowe efekty. Jeśli masz skórę wrażliwą, reaktywną, jesteś w ciąży lub po prostu chcesz zacząć przygodę ze składnikami przeciwstarzeniowymi bez ryzyka - bakuchiol będzie bezpiecznym i skutecznym wyborem.",
      },
    ],
    tip: "Możesz też łączyć oba składniki. Bakuchiol stosowany razem z retinolom łagodzi jego działanie drażniące, jednocześnie potęgując efekty antyoksydacyjne. To rozwiązanie coraz chętniej polecane przez dermatologów.",
  },
  {
    id: 3,
    slug: "/poradniki/clean-girl-aesthetic",
    category: "makijaz",
    categoryLabel: "Makijaż",
    title: "Clean Girl Aesthetic w 10 minut",
    excerpt: "Opanuj technikę makijażu 'no-makeup', który podkreśla naturalne atuty, nie obciążając cery. Dowiedz się, jakie produkty są niezbędne do uzyskania świeżego, luksusowego wyglądu.",
    image: "/images/advice/clean_girl-adv3.jpg",
    layout: "image-left",
    bg: "#FFF9DB",
    catColor: "#FFB800",
    catTextColor: "#0F172A",
    readTime: "5 min",
    intro: "Clean girl aesthetic to trend, który zrewolucjonizował sposób myślenia o codziennym makijażu. Zamiast grubych warstw podkładu i intensywnych smoky eyes - gładka, promienna cera, wypielęgnowane brwi i usta w naturalnym odcieniu. Efekt? Wyglądasz jak osoba, która właśnie wróciła z tygodnia w spa.",
    sections: [
      {
        heading: "Baza - mniej znaczy więcej",
        text: "Zamiast pełnokryjącego podkładu sięgnij po lekki tinted moisturizer lub krem BB z SPF. Nanieś go opuszkami palców tylko tam, gdzie potrzebujesz - okolice nosa, podbródek, ewentualnie policzki. Celem jest wyrównanie kolorytu, nie ukrycie skóry.",
      },
      {
        heading: "Korektor tylko tam, gdzie trzeba",
        text: "Cienie pod oczami i ewentualne przebarwienia zakryj korektorem o kremowej formule, który dobrze wtapia się w skórę. Roztrzyj go delikatnie - granice mają być niewidoczne. Unikaj nakładania korektora na całą twarz, bo przy clean girl aesthetic chodzi o naturalność, nie perfekcję.",
      },
      {
        heading: "Rozświetlacz zamiast bronzera",
        text: "Nanieś kremowy rozświetlacz na kości policzkowe, koniuszek nosa i łuk Kupidyna. Kremowe tekstury wyglądają bardziej naturalnie niż pudrowe i dają ten charakterystyczny, wilgotny efekt skóry. Unikaj nadmiaru - jeden delikatny ruch pędzelkiem lub palcem wystarczy.",
      },
      {
        heading: "Brwi - zadbane, nie narysowane",
        text: "Brwi to kluczowy element clean girl look. Użyj przezroczystego żelu do brwi albo delikatnie zaznacz brakujące włoski cieniutkim piórkiem. Brwi mają wyglądać zadbanie i naturalnie - nie jak narysowane kreski.",
      },
      {
        heading: "Usta - gloss lub balsam",
        text: "Na koniec połóż odrobinę błyszczyka w kolorze nude lub twoich naturalnych ust. Możesz też sięgnąć po odżywczy balsam z lekkim połyskiem. Matowa szminka nie wpisuje się w ten estetykę - tutaj rządzą gładkie, nawilżone usta z naturalnym blaskiem.",
      },
    ],
    tip: "Kluczem do clean girl aesthetic jest dobra pielęgnacja. Im lepiej zadbana jest Twoja skóra, tym mniej makijażu potrzebujesz. Zacznij od nawilżenia i SPF - reszta to tylko wykończenie.",
  },
  {
    id: 4,
    slug: "/poradniki/nawilzanie-skory",
    category: "pielegnacja",
    categoryLabel: "Skin Care",
    title: "GLOW UP GUIDE : Nawilżanie skóry - mit czy konieczność?",
    excerpt: "Wiele osób pomija ten krok w pielęgnacji, twierdząc, że ich skóra jest mieszana lub tłusta. Wyjaśniamy, dlaczego nawilżanie jest absolutną podstawą każdej cery i jak dobrać odpowiedni produkt.",
    image: "/images/advice/nawilzanie-adv4.jpg",
    layout: "image-right",
    bg: "#E8F5F0",
    catColor: "#6ED3CF",
    catTextColor: "#0F172A",
    readTime: "5 min",
    intro: "Jednym z najczęstszych błędów w pielęgnacji skóry tłustej i mieszanej jest rezygnacja z kremu nawilżającego. Logika wydaje się prosta - skoro skóra produkuje za dużo sebum, po co ją jeszcze nawilżać? Tymczasem nawilżenie i natłuszczenie to dwa zupełnie różne procesy, a pominięcie nawilżenia może paradoksalnie nasilić łojotok.",
    sections: [
      {
        heading: "Nawilżenie a natłuszczenie - czym się różnią?",
        text: "Nawilżenie to zawartość wody w skórze, natłuszczenie to poziom lipidów uszczelniających barierę ochronną. Skóra tłusta może być jednocześnie odwodniona - produkuje dużo sebum, ale traci wodę przez nieszczelną barierę. Lekki krem nawilżający uzupełni wodę bez dodawania tłuszczu i ureguluje pracę gruczołów łojowych.",
      },
      {
        heading: "Jakie składniki nawilżają skórę?",
        text: "Humektanty - takie jak kwas hialuronowy, gliceryna czy mocznik - przyciągają wodę z otoczenia i wiążą ją w naskórku. Emolienty, jak masło shea czy skwalan, uszczelniają barierę i zapobiegają odparowaniu wilgoci. Idealna formuła łączy oba rodzaje składników.",
      },
      {
        heading: "Czy skóra tłusta potrzebuje kremu?",
        text: "Zdecydowanie tak. Dla skóry tłustej i mieszanej najlepiej sprawdzają się lekkie żele nawilżające lub emulsje na bazie wody, które nawilżają bez efektu ciężkości. Unikaj bogatych kremów z olejami - te zarezerwuj dla skóry suchej i bardzo suchej.",
      },
      {
        heading: "Kiedy nawilżać?",
        text: "Krem nawilżający nakładaj zawsze po oczyszczeniu, po nałożeniu serum, a przed filtrem SPF rano. Wieczorem możesz sięgnąć po bogatszą formułę, bo skóra regeneruje się intensywniej w nocy. Najważniejsza zasada - nakładaj krem na lekko wilgotną skórę, żeby zamknąć wodę wewnątrz.",
      },
    ],
    tip: "Jeśli nie wiesz, od czego zacząć, wybierz krem z kwasem hialuronowym i niacynamidem. To połączenie nawilży, rozjaśni i unormuje cerę praktycznie każdego typu.",
  },
  {
    id: 5,
    slug: "/poradniki/makijaz-oczu",
    category: "makijaz",
    categoryLabel: "Makijaż",
    title: "Makijaż oczu dla początkujących - 3 style na każdą okazję",
    excerpt: "Od delikatnego codziennego kreski po dramatyczne smoky eye - pokazujemy krok po kroku, jak opanować trzy podstawowe techniki, które pasują do każdego kształtu oka.",
    image: "/images/advice/eye-makeup-adv5.jpg",
    layout: "image-left",
    bg: "#F3EEFF",
    catColor: "#C6B8FF",
    catTextColor: "#2D1B69",
    readTime: "7 min",
    intro: "Makijaż oczu bywa dla wielu osób najtrudniejszym elementem całej rutyny. Drżąca ręka, niesymetryczna kreska, cień który opada na dolną powiekę - to scenariusze znane każdemu, kto zaczyna przygodę z beauty. Dobra wiadomość jest taka, że trzy podstawowe techniki, które opiszemy poniżej, wystarczą na absolutnie każdą okazję.",
    sections: [
      {
        heading: "Styl 1 - Everyday natural",
        text: "Nanieś jasny cień w kolorze nude na całą powiekę jako bazę. Delikatnie zarysuj załamanie powieki brązowym cieniem, blendując go okrężnymi ruchami. Nanieś maskę do rzęs w jednej warstwie i zakończ przezroczystym żelem do brwi. Efekt - świeże, otwarte spojrzenie bez wyraźnego makijażu.",
      },
      {
        heading: "Styl 2 - Cienka kreska",
        text: "To klasyk, który pasuje do każdego kształtu oka. Używając eyelinera w pisaku z cienką końcówką, narysuj kreskę jak najbliżej linii rzęs - od wewnętrznego do zewnętrznego kącika. Zacznij od środka powieki, nie od kącika. Ewentualny lekki flick na końcu nie jest obowiązkowy - sama kreska wzdłuż rzęs wygląda elegancko i jest dużo łatwiejsza do wykonania.",
      },
      {
        heading: "Styl 3 - Soft smoky",
        text: "Wbrew pozorom smoky eye nie musi być ciemne ani czasochłonne. Nanieś ciemnobrązowy lub grafitowy cień na ruchomą powiekę i w załamanie, a następnie rozetrzyj go miękkim pędzelkiem do blendowania okrężnymi ruchami, aż granice znikną. Dodaj odrobinę jasnego shimmerowego cienia na środek powieki i wewnętrzny kącik oka. Efekt - romantyczny, zmysłowy, gotowy w 5 minut.",
      },
      {
        heading: "Narzędzia, bez których ani rusz",
        text: "Trzy pędzle wystarczą do wszystkich powyższych technik: płaski pędzelek do nakładania koloru, pędzelek do blendowania w kształcie litery C oraz mały, precyzyjny pędzelek do dolnej powieki. Dobry pędzelek do blendowania to inwestycja, która robi różnicę między amatorskim a profesjonalnym efektem.",
      },
    ],
    tip: "Nie próbuj opanować wszystkich trzech stylów na raz. Zacznij od natural look i przez tydzień ćwicz samo blendowanie. Kiedy poczujesz się pewnie z pędzlem - przejdź do kreski. Cierpliwość to klucz do perfekcyjnego makijażu oczu.",
  },
];

export default articles;