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
  
  const app = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth(); // Para autenticação
  const db = firebase.firestore();
  export { app, auth };
  