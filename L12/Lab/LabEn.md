# Task: Todo List – React Version

Your task is to create a todo list according to the instructions from [Assignment 7](../../W07/Lab/LabEn.md), this time using React. You may reuse the styles and HTML from that assignment.

The list should be built using React and TypeScript. All functions must have proper types – avoid using the `any` type.

Use [Vite](https://vite.dev/) to scaffold the application.

### Requirements:

1. All functionalities from the todo list in Assignment 7 must be preserved:
   - adding tasks,
   - removing tasks,
   - reordering tasks,
   - marking/unmarking tasks as completed,
   - clearing the entire list.
2. You must use React's native capabilities for this task. In particular, direct DOM manipulation (e.g., using `document.getElement...`) is **not allowed**.
3. The todo list state must be managed using [useReducer](https://react.dev/reference/react/useReducer).
   - The reducer function should be placed in a separate file.
4. The list should be divided into components. While the component structure is mostly up to you, the following components **must** be included:
   - A component that renders the task list (the part originally in the `main` element),
   - A component that renders the form for adding new tasks (originally in the `form` element),
   - A component that renders the list header (originally in the `header` element with the class `todos-header__container`),
   - A component that renders a single todo item (originally in the `li` element).
5. Make sure to use a sensible folder structure. It can be custom, but consider whether it's easy to navigate and scalable for future development.
