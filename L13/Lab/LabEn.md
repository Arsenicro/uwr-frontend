# Task: Testing

Your task on this assignment is to write tests for the provided [application](./testing-lab/).

You will primarily use [Vitest](https://vitest.dev/). In some tasks, you will also use [Testing Library](https://testing-library.com), specifically [DOM Testing Library](https://testing-library.com/docs/dom-testing-library/intro) and [User Events](https://testing-library.com/docs/user-event/intro).

Additionally, you will write E2E tests using [Playwright](https://playwright.dev/).

---

1. **Unit tests**: file [helpers.ts](./testing-lab/src/helpers/helpers.ts)
   1. Each function should be tested in a separate `describe` block to maintain a proper structure.
   1. Unit tests should follow the `AAA` convention (Arrange-Act-Assert).
   1. Make sure to test at least the main use case, and consider testing several edge cases.
   1. The `validateMovie` and `sortMoviesByYear` functions do not require any special techniques.
   1. The `movieReducer` function requires [mocking](https://vitest.dev/guide/mocking.html) the date and the `nanoid` module.
   1. The `formatMovie` function should be tested using a [snapshot](https://vitest.dev/guide/snapshot.html).
1. **Integration tests**: file [movies.ts](./testing-lab/src/components/movies.ts)
   1. Integration tests should simulate component rendering. For this, you should use an appropriate [test environment](https://vitest.dev/guide/environment.html); `jsdom` is recommended, but `happy-dom` can be used as well. Remember to install the chosen environment as a dev dependency.
   1. You can use `@testing-library/dom` and `@testing-library/user-event` to assist with integration tests.
   1. Integration tests should verify that elements are rendered and that basic page interactions (adding a movie, error on adding, removing a movie, sorting) work correctly. Aim to cover as many key scenarios as you find relevant.
1. **E2E tests**
   1. E2E tests must be written using [Playwright](https://playwright.dev/).
   1. To avoid conflicts, add a `vitest` configuration that excludes the directory containing E2E tests.
   1. Use Playwright's `use.baseURL` and `webServer` settings to automatically start the server before running tests ([docs](https://playwright.dev/docs/test-webserver)).
   1. Tests should cover basic interactions with the page (adding a movie, error on adding, removing a movie, sorting).
1. **Test commands**  
   Both `vitest` and `playwright` tests should have appropriate scripts added to `package.json` to allow running them using `npm run`.
