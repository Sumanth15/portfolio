import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAaWbTCxHkQLEBWyphMnAEdjzveQRtppRY",
  authDomain: "koushik-18662.firebaseapp.com",
  projectId: "koushik-18662",
  storageBucket: "koushik-18662.appspot.com",
  messagingSenderId: "491975639639",
  appId: "1:491975639639:web:51c75bfa1e366702d3d912",
  measurementId: "G-NXJ52E557H"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Save contact message with validation
export const saveContactMessage = async (name, email, message) => {
  if (message.length > 500) {
    alert("Message too long! Maximum 500 characters allowed.");
    return null;
  }

  try {
    const docRef = await addDoc(collection(db, "contacts"), {
      name,
      email,
      message,
      createdAt: serverTimestamp()
    });
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
    alert("There was an error submitting your message. Please try again.");
    return null;
  }
};
