# Zadanie: Testowanie

Twoim zadaniem na tej liście będzie napisanie testów do gotowej [aplikacji](./testing-lab/).

Korzystać będziesz głównie z [Vitest](https://vitest.dev/). W części zadań wspomożesz się [Testing Library](https://testing-library.com) – konkretnie [DOM Testing Library](https://testing-library.com/docs/dom-testing-library/intro) oraz [User Events](https://testing-library.com/docs/user-event/intro).

Dodatkowo, testy E2E napiszesz z użyciem [Playwright](https://playwright.dev/).

---

1. **Testy jednostkowe**: plik [helpers.ts](./testing-lab/src/helpers/helpers.ts)
   1. Testy jednostkowe powinny mieć odpowiednią strukturę – każda funkcja powinna być testowana w osobnym bloku `describe`.
   1. Testy jednostkowe powinny być napisane zgodnie z konwencją `AAA` (Arrange-Act-Assert).
   1. Przetestuj przynajmniej przypadek główny; warto też sprawdzić kilka przypadków brzegowych.
   1. Funkcje `validateMovie` oraz `sortMoviesByYear` nie wymagają użycia żadnych specjalnych technik.
   1. Funkcja `movieReducer` wymaga [zmockowania](https://vitest.dev/guide/mocking.html) daty oraz modułu `nanoid`.
   1. Funkcja `formatMovie` powinna być przetestowana z użyciem [snapshotu](https://vitest.dev/guide/snapshot.html).
1. **Testy integracyjne**: plik [movies.ts](./testing-lab/src/components/movies.ts)
   1. Testy integracyjne powinny symulować renderowanie komponentu – w tym celu użyj odpowiedniego [środowiska testowego](https://vitest.dev/guide/environment.html): zalecane jest `jsdom`, ale można użyć też `happy-dom`. Pamiętaj o zainstalowaniu wybranego środowiska jako zależności developerskiej.
   1. W testach integracyjnych warto wspomóc się bibliotekami `@testing-library/dom` oraz `@testing-library/user-event`.
   1. Testy integracyjne powinny sprawdzać renderowanie elementów oraz podstawowe interakcje ze stroną (dodawanie filmu, błąd przy dodawaniu, usuwanie filmu, sortowanie). Staraj się pokryć jak najwięcej kluczowych przypadków.
1. **Testy E2E**
   1. Testy E2E powinny być napisane z użyciem [Playwright](https://playwright.dev/).
   1. Aby uniknąć konfliktów, należy dodać konfigurację `vitest`, która wyklucza katalog zawierający testy E2E.
   1. Wykorzystaj opcje konfiguracyjne Playwrighta `use.baseURL` oraz `webServer`, aby automatycznie uruchamiać serwer przed testami ([dokumentacja](https://playwright.dev/docs/test-webserver)).
   1. Testy powinny pokrywać podstawowe interakcje ze stroną (dodawanie filmu, błąd przy dodawaniu, usuwanie filmu, sortowanie).
1. **Komendy testowe**  
   Zarówno testy z użyciem `vitest`, jak i te z użyciem `playwright`, powinny mieć dodane odpowiednie skrypty w `package.json`, umożliwiające ich uruchamianie przez `npm run`.
