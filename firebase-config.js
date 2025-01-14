// Importação dos módulos necessários do Firebase (Firebase v9+)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyA12MtXQgpFORG4bqQkIqDcYmcgN66uFcU",
    authDomain: "projeto1-98db0.firebaseapp.com",
    projectId: "projeto1-98db0",
    storageBucket: "projeto1-98db0.firebasestorage.app",
    messagingSenderId: "1040325681203",
    appId: "1:1040325681203:web:e5dc92db312fdfa6860346",
    measurementId: "G-PN1BCB2NX9"
};

// Inicialização do Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);  // Para autenticação
const db = getFirestore(app);  // Para Firestore
const rtdb = getDatabase(app);  // Para Realtime Database

export { app, auth, db, rtdb };
