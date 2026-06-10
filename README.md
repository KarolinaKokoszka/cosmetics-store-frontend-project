# ✨ Glowi - Cosmetics Store

Sklep internetowy z kosmetykami do pielęgnacji i makijażu, zaprojektowany z myślą o nowoczesnym, eleganckim doświadczeniu zakupowym. Aplikacja frontendowa zbudowana w **React.js** z systemem uwierzytelniania **Firebase**, analityką **Google Analytics 4** oraz śledzeniem zachowań użytkowników **Hotjar**.

🔗 **Demo:** https://glowi-cosmetics-store.netlify.app/

📂 **Repozytorium:** [GitHub](https://github.com/KarolinaKokoszka/cosmetics-store-frontend-project)

---

## 🛠 Technologie

| Technologia | Zastosowanie |
|---|---|
| React 18 | Budowa interfejsu, komponenty, routing |
| React Router v6 | Nawigacja SPA, zagnieżdżone trasy |
| Firebase Auth | Rejestracja i logowanie (Email/Password) |
| Google Analytics 4 | Śledzenie ruchu, pageview na zmianę trasy |
| Hotjar | Heatmapy, nagrania sesji użytkowników |
| CSS (BEM) | Własne style, responsywność, animacje |

---

## 🚀 Uruchomienie lokalne

```bash
git clone https://github.com/KarolinaKokoszka/cosmetics-store-frontend-project.git
cd cosmetics-store-frontend-project
npm install
npm start
```

Aplikacja uruchomi się na `http://localhost:3000`

---

## 📁 Struktura projektu

```
src/
├── components/          # Reużywalne komponenty UI
│   ├── Navbar.jsx       # Nawigacja z megamenu i wyszukiwarką
│   ├── Footer.jsx       # Stopka z linkami i newsletterem
│   ├── ProductCard.jsx  # Karta produktu (lista produktów, promocje)
│   ├── SearchOverlay.jsx# Wyszukiwarka produktów
│   ├── ArticlePage.jsx  # Widok szczegółów poradnika
│   ├── AuthToast.jsx    # Komunikat dla niezalogowanych
│   ├── InfoPage.jsx     # Reużywalna strona informacyjna
│   └── Toast.jsx        # Powiadomienia (dodano do koszyka itp.)
│
├── context/             # Stan globalny aplikacji
│   ├── AuthContext.jsx  # Sesja użytkownika (Firebase)
│   ├── CartContext.jsx  # Koszyk (per user, localStorage)
│   └── FavoritesContext.jsx # Ulubione (per user, localStorage)
│
├── data/                # Dane statyczne
│   ├── products.js      # 26 produktów (makijaż + pielęgnacja)
│   ├── articles.js      # 5 artykułów / poradników
│   └── reviews.js       # Opinie klientów
│
├── layouts/
│   └── MainLayout.jsx   # Wrapper: Navbar + children + Footer
│
├── pages/               # Główne widoki aplikacji
│   ├── HomePage.jsx     # Strona główna (slider, nowości, oferty, blog)
│   ├── LoginPage.jsx    # Logowanie
│   ├── RegisterPage.jsx # Rejestracja
│   ├── MojeKontoPage.jsx# Panel użytkownika
│   ├── MakijazPage.jsx  # Produkty makijaż (filtry po subkategorii)
│   ├── PielegnacjaPage.jsx # Produkty pielęgnacja
│   ├── PoradnikiPage.jsx# Lista poradników z filtrem kategorii
│   ├── ProductPage.jsx  # Szczegóły produktu
│   ├── KoszykPage.jsx   # Koszyk zakupowy
│   ├── CheckoutPage.jsx # Finalizacja zamówienia
│   ├── UlubionePage.jsx # Lista ulubionych produktów
│   ├── KontaktPage.jsx  # Formularz kontaktowy
│   └── ...              # Dostawa, Zwroty, O nas, Regulamin, Polityka
│
├── firebase.js          # Konfiguracja Firebase
└── App.js               # Routing wszystkich ekranów
```

---

## 📸 Ekrany aplikacji

### Strona główna

Slider z trzema banerami (autoplay + strzałki), sekcja nowości, wyjątkowe oferty, newsletter i blog.

![Strona główna](docs/screenshots/home.png)


---

### Widok mobilny

Responsywny layout - hamburger menu, zmniejszone karty, jednokolumnowe siatki.

![Strona główna mobile](docs/screenshots/home-mobile.png)

![Mobile menu](docs/screenshots/mobile-menu.png)

---

### Nawigacja z megamenu

Rozwijane megamenu dla kategorii Makijaż i Pielęgnacja z ikonkami podkategorii.

![Megamenu](docs/screenshots/megamenu.png)

---

### Wyszukiwarka

Overlay z wyszukiwaniem po nazwie, opisie i kategorii produktu. Popularne tagi jako szybki start.
![Wyszukiwarka](docs/screenshots/wyszukiwarka1.png)

![Wyszukiwarka](docs/screenshots/wyszukiwarka.png)

---

### Katalog produktów

Strony z listą produktów z filtrami po podkategoriach i paginacją.

![Makijaż](docs/screenshots/makijaz.png)

![Pielęgnacja](docs/screenshots/pielegnacja.png)

---

### Strona produktu

Galeria zdjęć, opis, składniki, oceny, akordeony (sposób użycia, INCI), sekcja opinii i powiązane produkty.

![Produkt - szczegóły](docs/screenshots/produkt.png)

![Produkt - opinie](docs/screenshots/produkt-opinie.png)

---

### Poradniki

Lista artykułów z filtrem kategorii (Pielęgnacja / Makijaż). Kliknięcie w kartę otwiera pełny artykuł z sekcjami, numerowanymi krokami i wskazówką.

![Poradniki - lista](docs/screenshots/poradniki.png)

![Artykuł - szczegóły](docs/screenshots/artykul.png)

---

### Logowanie i rejestracja

Formularze z walidacją Firebase. 

![Logowanie](docs/screenshots/login.png)

![Rejestracja](docs/screenshots/rejestracja.png)

---

### Moje konto

Panel zalogowanego użytkownika - dane profilowe, zmiana hasła, usuwanie konta, historia zamówień.

![Moje konto](docs/screenshots/moje-konto.png)

---

### Koszyk i checkout

Koszyk z podglądem produktów, zmianą ilości i podsumowaniem. Finalizacja zamówienia z formularzem dostawy.

![Koszyk](docs/screenshots/koszyk.png)

![Checkout](docs/screenshots/checkout.png)

---

### Ulubione

Lista ulubionych produktów - dostępna tylko dla zalogowanych użytkowników.

![Ulubione](docs/screenshots/ulubione.png)

---

### Kontakt

Formularz kontaktowy z walidacją pól i komunikatem sukcesu.

![Kontakt](docs/screenshots/kontakt.png)

---

### Strony informacyjne

Reużywalny komponent InfoPage dla stron: Dostawa, Zwroty, O nas, Regulamin, Polityka Prywatności.

![Strona informacyjna](docs/screenshots/info-page.png)

---

### Komunikat dla niezalogowanych

Toast z informacją i linkiem do logowania przy próbie dodania do koszyka lub ulubionych.

![Auth toast](docs/screenshots/auth-toast.png)

---

## 🔐 Firebase Authentication

System uwierzytelniania oparty na Firebase Authentication (Email/Password).

**Funkcjonalności:**
- Rejestracja nowego użytkownika z imieniem, nazwiskiem, e-mailem i hasłem
- Logowanie z obsługą błędów (nieprawidłowe dane, zbyt wiele prób)
- Automatyczne przekierowanie po zalogowaniu / wylogowaniu
- Panel "Moje konto" - podgląd danych, zmiana hasła, usunięcie konta
- Chroniony dostęp - koszyk i ulubione wymagają zalogowania
- Navbar dynamicznie zmienia widok (Witaj, [imię] + MOJE KONTO)
- Dane koszyka i ulubionych zapisywane per użytkownik (localStorage + uid)

![Firebase - użytkownicy w konsoli](docs/screenshots/firebase-users.png)

---

## 📊 Google Analytics

Google Analytics 4 zintegrowany z aplikacją. Komponent `AnalyticsListener` śledzi każdą zmianę trasy i wysyła `pageview` do GA.

![Google Analytics - dashboard](docs/screenshots/ga-dashboard.png)

![Google Analytics - odwiedzane strony](docs/screenshots/ga-pages.png)

![Google Analytics - dane użytkowników](docs/screenshots/ga-users.png)

---

## 🔥 Hotjar

Hotjar zintegrowany na poziomie `App.jsx` do analizy zachowań użytkowników - heatmapy kliknięć, nagrania sesji, analiza scrollowania.

### Statystyki ogólne

![Hotjar - statystyki](docs/screenshots/hotjar-stats.png)

### Przegląd strony głównej

![Hotjar - page overview 1](docs/screenshots/hotjar-page1.png)

![Hotjar - page overview 2](docs/screenshots/hotjar-page2.png)

![Hotjar - page overview 3](docs/screenshots/hotjar-page3.png)

### Nagranie sesji

![Hotjar - session replay](docs/screenshots/hotjar-session.png)

### Heatmapa

![Hotjar - heatmapa](docs/screenshots/hotjar-moves.png)

![Hotjar - heatmapa](docs/screenshots/hotjar-scrolls.png)

---

## 🌐 Deploy

Aplikacja wdrożona na **Netlify**.

![Deploy - strona na żywo](docs/screenshots/deploy.png)

---

## 👩‍💻 Autorzy

**Karolina Kokoszka** · **Aleksandra Frączek**

Techniki Projektowania Frontendowego - Projekt React 2026