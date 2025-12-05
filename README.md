# Copilot Agents Via MCP

A small demo project showing a minimal Express-based server and task code, with tests demonstrating how to run and validate functionality. This repository is intended as a lightweight example for working with Copilot Agents via the Model Context Protocol (MCP).

**Prerequisites**
- Node.js (recommended v18+)
- npm (bundled with Node.js)

**Install**

```bash
npm install
```

**Run (development)**

Start the server directly:

```zsh
node src/server.js
```

There is no `start` script in `package.json`; run the above command to launch the server.

**Run tests**

This project uses `jest` and `supertest` for tests. Run:

```bash
npm test
```

**Project Structure**

- `package.json` — project manifest and scripts
- `src/` — source files
  - `server.js` — Express server entrypoint
  - `tasks.js` — task-related logic (importable module)
- `tests/` — Jest tests
  - `tasks.test.js` — tests for `tasks.js`

**Endpoints**
- **`GET /tasks`**: Retrieve all tasks.
  - **Success**: 200 with JSON array of tasks (each task has `id`, `title`, `completed`).
  - **Example**:
    - curl:
      ```
      curl 'http://localhost:3000/tasks'
      ```
    - JavaScript (fetch):
      ```
      fetch('/tasks').then(r => r.json()).then(console.log)
      ```
- **`GET /tasks/search?q=<query>`**: Search tasks by title (case-insensitive substring).
  - **Query param**: `q` (required) — search string. If missing or empty, returns 400 with JSON `{ "error": "Query parameter q is required" }`.
  - **Success**: 200 with JSON array of matching tasks (each task has `id`, `title`, `completed`).
  - **Example**:
    - curl:
      ```
      curl 'http://localhost:3000/tasks/search?q=buy'
      ```
    - JavaScript (fetch):
      ```
      fetch('/tasks/search?q=buy').then(r => r.json()).then(console.log)
      ```

**Notes**
- Tests are invoked via the `test` script in `package.json` (uses `jest`).
- Dependencies include `express`, `jest`, and `supertest`.

**Contributing**
- Open an issue or send a pull request with a short description of your change.

**License**
- This project uses the `ISC` license (see `package.json`).
