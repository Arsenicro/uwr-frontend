# Task: Todo List – Svelte Version

Your task is to prepare a todo list application based on the instructions from [Assignment 7](../../W07/Lab/LabEn.md), this time using **Svelte**. You may copy the styles and HTML from that assignment.

The list should be built using **Svelte and TypeScript**. All functions must include appropriate type annotations – avoid using the `any` type.

Use [Vite](https://vite.dev/) to create the application.

### Resources

In addition to the [documentation](https://svelte.dev/docs/svelte/overview), it’s worth reviewing the [tutorial](https://svelte.dev/tutorial/svelte/welcome-to-svelte).

### Requirements:

1. You must preserve all functionalities from the List 7 todo list:
   - adding items,
   - deleting items,
   - changing order,
   - marking/unmarking items as completed,
   - clearing the entire list.
1. You must use Svelte’s native features. In particular, **direct DOM manipulation is forbidden** (e.g., using `document.getElement...`).
1. The list of TODO items, along with all functions for modifying it, must be stored in a separate file.
1. The list should be broken into components. The breakdown is mostly up to you, but the following components are **mandatory**:
   - A component rendering the list of tasks (the part originally in the `main` element),
   - A component rendering the form for adding new tasks (the part from the `form` element),
   - A component rendering the list header (the `header` element with class `todos-header__container`),
   - A component rendering a single list item (the `li` element).
1. Maintain a clean folder structure: it can be organized however you prefer, but make sure it is clear and potentially easy to extend.
