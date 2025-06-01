# 🎬 Netflix Clone

A modern, responsive Netflix-inspired streaming app built with **React.js**, **TypeScript**, **SASS**, and **Firebase Authentication**. It fetches real movie data from **TMDB (The Movie Database)** using both **standard fetch methods** and **React Query** for flexible and optimized data handling.

---

## 🚀 Features

- **🎉 Landing Page** – Beautiful entry screen with engaging visuals and a clear call to action.
- **🔐 Authentication** – Secure login and sign up powered by **Firebase Authentication**, with real-time feedback and error messages.
- **🏠 Home Page** – Displays trending, popular, and top-rated movies fetched from **TMDB API**, featuring Netflix-style carousels and hover animations.
- **🔁 Hybrid Data Fetching** – Combines **React Query** for optimized, cached data and **manual fetch/axios** for custom or one-off API calls.
- **📱 Responsive UI** – Clean, mobile-friendly layout styled with **SASS**, delivering a polished and professional look on all devices.

---

## 🛠️ Tech Stack

- **Frontend:** React.js + TypeScript
- **Styling:** SASS (SCSS Modules)
- **Authentication:** Firebase
- **API Data:** [TMDB API](https://www.themoviedb.org/)
- **Data Fetching:**
  - `fetch` for direct requests
  - `React Query` for caching, background updates, and loading state management
- **Routing:** React Router DOM

---

## 📸 Preview

<img src="src\assets\netflix_clone.gif">

---

## 🔑 TMDB API Setup

1. Create a free account on [TMDB](https://www.themoviedb.org/)
2. Get your API key from the [API settings page](https://www.themoviedb.org/settings/api)
3. Add it to a `.env` file in your project root:

```env
VITE_API_KEY = your_tmdb_api_key_here
VITE_API_READ_ACCESS_TOKEN = your_tmdb_api_read_access_token
```

---

## Firebase config options

- Add to `.env `

```env
VITE_FIRBASE_API_KEY = your_firbase_api_key
VITE_AUTH_DOMAIN = your_auth_domain,
VITE_PROJECT_ID = your_project_id,
VITE_STORAGE_BUCKET = your_storage_bucket,
VITE_MESSAGING_SENDER_ID = your_messaging_sender_id,
VITE_APP_ID = your_app_id,
```

---

# 📦 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/Mahmoud46/netflix-clone.git
cd netflix-clone
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file and add your TMDB API key:

```env
VITE_API_KEY = your_tmdb_api_key_here
VITE_API_READ_ACCESS_TOKEN = your_tmdb_api_read_access_token
```

4. Set up Firebase:

- Create a Firebase project at [firebase.google.com](https://firebase.google.com/)
- Enable Email/Password authentication
- Add your config to `src\config\Firbase.config.ts`

5. Run the development server:

```bash
npm run dev
```

---

# 📁 Folder Structure

```bash
src/
├── assets/
├── components/         # Reusable UI components
├── config
│   └── Firebase.config.ts
├── constants
│   ├── API.tsx         # Hold access token
│   ├── Firebase.tsx    # Holds firebase options
│   └── LandingCardsData.ts # Holds all Landing page data
├── interfaces
│   ├── CountryCode.ts
│   ├── MovieApiResponse.ts
│   └── VideoApiResponse.ts
├── pages/
│   ├── Home
│   ├── Landing
│   ├── Login           # Contains both login and sign in
│   ├── NotFound
│   └── Player          # Show movie trailers
├── utils
│   └── FetchData
│       ├── FetchMovies.ts  # Function to fetch movies data
│       └── FetchVideos.ts  # Function to fetch movie videos data
├── styles/             # SCSS modules
│   ├── mixins
│   └── main.scss
├── App.tsx
└── main.tsx
```

---

# 🙌 Acknowledgements

- UI inspired by [Netflix](https://www.netflix.com/eg-en/)
- Movie data provided by [TMDB](https://www.themoviedb.org/)
- Auth service by [Firebase](https://firebase.google.com/)
