// firebase-messaging-sw.js
importScripts("https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/12.1.0/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyCfTXVhxtBwdXvJHAXkj8Ka5ZHvJq_qmEI",
  authDomain: "ohmla-4788f.firebaseapp.com",
  projectId: "ohmla-4788f",
  storageBucket: "ohmla-4788f.firebasestorage.app",
  messagingSenderId: "831311091041",
  appId: "1:831311091041:web:41da49892cc5f1ee016120",
  measurementId: "G-25D509J73L"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("📩 Background message:", payload);
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: payload.notification.icon || "/assets/img/avatar.png"
  });
});
