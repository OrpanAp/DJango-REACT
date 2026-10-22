# Django + React Notes Application

A full-stack web application built with **React, Django, and Django REST Framework**. The application provides user authentication and a personal notes system, allowing authenticated users to create, view, and delete their own notes through a REST API.

## Overview

This project demonstrates the integration of a React frontend with a Django REST API, including JWT-based authentication, protected routes, and user-specific data access.

## Features

- **User authentication** — Register and log in with an account.
- **JWT authentication** — Access-token-based authentication with token refresh support.
- **Protected routes** — Restrict access to authenticated application pages.
- **Personal notes management** — Create, view, and delete notes.
- **User-specific data** — Users can access and delete only their own notes.
- **REST API integration** — Communicate between React and Django using Axios.
- **Responsive frontend components** — Reusable React components for forms, notes, and loading states.
- **Database integration** — Store users and notes using Django's ORM.

## Tech Stack

| Layer | Technologies |
|---|---|
| Frontend | React 19, JavaScript, Vite |
| Routing | React Router |
| HTTP client | Axios |
| Authentication | JWT, `jwt-decode` |
| Backend | Python, Django 6 |
| API | Django REST Framework |
| Authentication API | Simple JWT |
| Database | SQLite by default |
| Cross-origin requests | Django CORS Headers |

## Project Structure

```text
DJango-REACT/
├── backend/
│   ├── api/
│   │   ├── migrations/
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── views.py
│   │   ├── urls.py
│   │   └── tests.py
│   ├── backend/
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── wsgi.py
│   ├── manage.py
│   └── requirements.txt
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   ├── api.js
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

## Getting Started

Follow these steps to run the project locally.

### Prerequisites

Install the following tools before starting:

- Python 3.12 or newer
- Node.js compatible with Vite 7
- npm
- Git

### 1. Clone the repository

```bash
git clone https://github.com/OrpanAp/DJango-REACT.git
cd DJango-REACT
```

### 2. Set up the backend

Navigate to the backend directory:

```bash
cd backend
```

Create and activate a virtual environment.

**Windows**

```bash
python -m venv venv
venv\Scripts\activate
```

**macOS / Linux**

```bash
python3 -m venv venv
source venv/bin/activate
```

Install the Python dependencies:

```bash
python -m pip install --upgrade pip
pip install -r requirements.txt
```

Apply database migrations:

```bash
python manage.py migrate
```

Start the Django development server:

```bash
python manage.py runserver
```

The backend will be available at:

`http://127.0.0.1:8000/`

Keep this terminal running.

### 3. Configure the frontend

Open a second terminal from the repository root:

```bash
cd frontend
npm install
```

Create a `.env` file inside the `frontend/` directory with the following configuration:

```env
VITE_API_URL=http://127.0.0.1:8000/api
```

This variable configures the API base URL used by the Axios client.

Start the React development server:

```bash
npm run dev
```

Open the local URL displayed in your terminal, usually:

`http://localhost:5173/`

### 4. Build the frontend

To create a production build:

```bash
npm run build
```

To run ESLint:

```bash
npm run lint
```

The production files will be generated in the `frontend/dist/` directory.

## API Endpoints

The backend exposes the following main endpoints.

| Method | Endpoint | Purpose | Authentication |
|---|---|---|---|
| POST | `/api/user/register/` | Register a new user | Not required |
| POST | `/api/token/` | Obtain JWT tokens | Not required |
| POST | `/api/token/refresh/` | Refresh an access token | Refresh token required |
| GET | `/api/notes/` | Retrieve the current user's notes | Required |
| POST | `/api/notes/` | Create a note | Required |
| DELETE | `/api/notes/delete/{id}/` | Delete an owned note | Required |

For protected endpoints, send the access token in the request header:

```http
Authorization: Bearer <access_token>
```

**Note:** These endpoints are defined by the current backend routes. Request and response payloads may vary according to serializer validation.

## How It Works

1. A user registers or logs in through the React interface.
2. Django processes the authentication request and issues JWT tokens.
3. The frontend uses the access token when making authenticated API requests.
4. Django REST Framework validates the request and identifies the authenticated user.
5. The backend returns notes belonging to that user or saves a new note under that user's account.
6. Note deletion is restricted to notes owned by the authenticated user.

## Configuration and Security

Before deploying this project to a public production environment:

- Store Django's `SECRET_KEY` in an environment variable.
- Set `DEBUG = False` in production.
- Configure `ALLOWED_HOSTS` for the actual backend domain.
- Restrict CORS to trusted frontend origins.
- Use HTTPS for production traffic.
- Keep database files, credentials, and other sensitive information out of version control.
- Review token storage and refresh behavior before production use.

The current repository contains development-oriented Django settings, so production deployment requires additional configuration.

## Future Improvements

Potential next steps include:

- Add automated tests for authentication, note creation, and note ownership.
- Improve API validation and error handling.
- Add note editing and search functionality.
- Add pagination for larger note collections.
- Improve deployment configuration and environment management.
- Add screenshots and a live demo link when available.

## Learning Outcomes

This project provides practical experience with:

- Full-stack web development
- React component-based architecture
- REST API development
- Django models, serializers, and generic views
- JWT authentication
- Protected frontend routes
- Database operations and user-specific permissions
- Environment-based frontend configuration

## Author

**Alex Purification**

GitHub: [@OrpanAp](https://github.com/OrpanAp)

Project repository: [DJango-REACT](https://github.com/OrpanAp/DJango-REACT)

---

If you find this project useful, consider giving the repository a ⭐ on GitHub.

