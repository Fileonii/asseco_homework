# Aplikacja Praca Domowa

Aplikacja, która na podstawie pliku JSON wygeneruje interfejs aplikacji.

## Deploy aplikacji

Za pomocą platformy [heroku](https://dashboard.heroku.com/apps) aplikacja została wystawiona na "światło dzienne" i można ją obejrzeć pod linkiem [asseco-homework-2.herokuapp.com](https://asseco-homework-2.herokuapp.com/)
Aby użyć aplikacji należy poprzez select wybrać interesujące nas API, i wygenerować plik .json

## Opis Aplikacji

Aplikacja została wykonana przez udostępniony w środowisku uruchomieniowym Node.js wykorzystując framework React. W celu uniknięcia problemu z żądaniami (brak nagłówka Cross-Origin Resource Sharing w udostępnionych plikach json) użyty został framework Express.js z paczką cors (pozwalającą na używanie przez aplikację tego mechanizmu).
Branch "prod" przystosowany jest jako obsługujący platformę heroku, zaś master jest branch'em, który rekomenduje uruchamiać lokalnie.

## Instalacja

Aby zainstalować aplikację należy użyć menadżera pakietów npm oraz mieć zainstalowane środowisko Node.js

#### Aby zainstalować

```bash
npm i
npm install
```

#### Aby uruchomić

```bash
npm start
```

## Wykonanie

W celu rozwiązania podstawowego problemu (żądania CORS) postanowiłem postawić osobny "serwer" zezwalający na takowe żądania, który jednocześnie lokalnie tworzy dwa zapytania do api (w zależności od linku, controls1 i controls2) na porcie 5000.
Po stronie frontend, wykorzystany został framework React, oparty w tym przypadku o tzw. "hook'i", pozwalające na zmianę użycie "stanu" aplikacji bez używania klas.
Po stronie klienta stworzone zostały 3 komponenty, jeden główny pozwalający na fetch'owanie zapytań z api (getData.js), i dwa pomocnicze:

- FormComponent.js - komponent generujący nam kontrolki w zależności od podanych parametrów
- SubmitComponent.js - komponent podsumowywujący formularz, generujący JSON, zwracający przycisk.

Do ingerencji w style użyty został framework react-bootstrap oraz czysty CSS.

## Lista użytych pakietów npm

| Nazwa Pakietu  | Opis                                                                                                                                                       |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| axios          | Paczka pozwalająca na zapytania HTTP                                                                                                                       |
| bootstrap      | framework do styli                                                                                                                                         |
| cors           | Mechanizm pozwalający na użycie Cross-Origin Resource Sharing                                                                                              |
| express        | [dokumentacja](https://expressjs.com/)                                                                                                                     |
| npm-run-all    | Pakiet pozwalający na uruchamianie kilku komend z package.json scripts w jednym poleceniu. W tym przypadku używamy go do uruchomienia serwera i frontendu. |
| react-spinners | "kręciołek" ze strony głównej                                                                                                                              |
