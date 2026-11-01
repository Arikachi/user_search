# GitHub User Search

A small website to search for information about GitHub profiles. Type a username and see the avatar, name, bio, followers, and public repo count.

**Live demo:** https://Arikachi.github.io/user-search/

![Screenshot](screenshots/screenshot.png)

## Features

- Search any GitHub user by username
- Loading state while the request is in progress
- Clear error messages for "user not found", rate limit reached, and network problems
- Search history (last 5 users) saved in `localStorage`, newest first, no duplicates
- Click a history item to search that user again
- User data is rendered with `textContent` (no `innerHTML`), so API data can't inject HTML

## Tech

- HTML, CSS
- Vanilla JavaScript (ES modules)
- [GitHub REST API](https://docs.github.com/en/rest/users/users): `https://api.github.com/users/{username}`
- `localStorage` for history

## Run locally

ES modules don't work when opening the file directly (`file://`), so use a local server:

1. Clone the repo:
   ```
   git clone https://github.com/Arikachi/user-search.git
   ```
2. Open the folder in VS Code.
3. Install the **Live Server** extension, then right-click `index.html` and choose **Open with Live Server**.

Note: GitHub's unauthenticated API allows about 60 requests per hour per IP address. If you hit the limit, the app shows a message and you can try again later.

## Project structure

```
github-user-search/
├── index.html        # page content
├── style.css         # styling
├── README.md
├── screenshots/
│   └── screenshot.png
└── src/
    ├── main.js       # app flow, event handling, connects the other modules
    ├── api.js        # fetching data from the GitHub API
    ├── ui.js         # DOM rendering (user card, status messages, history list)
    └── storage.js    # reading and writing search history in localStorage
```

## What I learned

- `async`/`await` and `fetch`, including handling HTTP errors (`fetch` does not reject on 404/403)
- DOM manipulation with `createElement` and `textContent`
- Event handling: form `submit`, `preventDefault`, and event delegation for the history list
- Storing structured data in `localStorage` with `JSON.stringify` / `JSON.parse`
- Splitting code into ES modules with one responsibility each

## Next steps

- Migrate to TypeScript (Vite)
- Rebuild the UI with React
- Add a Node.js backend that proxies and caches the GitHub API