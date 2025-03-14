## **📌 Vite + React Google Login with OAuth**
A **modern React app** built with **Vite**, featuring **Google Login (OAuth 2.0)** with session persistence.

---

## **⚡ Features**
✅ **Google OAuth Login** (Sign in with Google)  
✅ **Secure Authentication** (OAuth 2.0)  
✅ **Session Persistence** (User stays logged in after refresh)  
✅ **Environment Variables** (No hardcoded credentials)  
✅ **Styled with Neon UI** ✨  

---

## **📂 Project Setup**
### 🔹 1️⃣ Clone the Repository
```sh
git clone https://github.com/jomadlcrz/Google-Login-Practice.git
cd Google-Login-Practice
```

### 🔹 2️⃣ Install Dependencies
```sh
npm install
```

### 🔹 3️⃣ Create a Google OAuth Client ID
1. Go to **[Google Cloud Console](https://console.cloud.google.com/)**
2. Navigate to **APIs & Services** → **Credentials**
3. Click **Create Credentials** → **OAuth 2.0 Client ID**
4. Set **Authorized JavaScript Origins**:
   ```
   http://localhost:5173
   ```
5. Copy the **Client ID**

### 🔹 4️⃣ Configure `.env`
Create a `.env` file in the project root:
```
VITE_GOOGLE_CLIENT_ID=your_google_client_id_here
```

### 🔹 5️⃣ Start the Development Server
```sh
npm run dev
```

---

## **🖥️ Usage**
1. Click the **"Sign in with Google"** button.
2. Authenticate with your Google Account.
3. After login, your profile picture and name will appear.
4. Click **"Logout"** to sign out.

---

## **🖌️ UI Preview**
### 🔹 **Light & Modern UI**
✨ Neon styling  
✨ Animated **Google Sign-In Button**  
✨ Smooth hover effects  

---

## **📦 Dependencies**
| Package               | Version |
|-----------------------|---------|
| `vite`               | latest  |
| `react`              | latest  |
| `@react-oauth/google` | latest  |

---

## **🔗 Resources**
- **Google OAuth Docs** → [Google Identity Services](https://developers.google.com/identity)  
- **Vite + React Docs** → [Vite Official Docs](https://vitejs.dev/)  

---

## **📜 License**
This project is open-source and available under the **[MIT License](LICENSE).**
