import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { routes } from './app.routes';

const firebaseConfig = {
  apiKey: "AIzaSyBCy0uxZRR41EH2whU80ZrsXvyJlyYHP_o",
  authDomain: "arrows-online.firebaseapp.com",
  projectId: "arrows-online",
  storageBucket: "arrows-online.firebasestorage.app",
  messagingSenderId: "307554263324",
  appId: "1:307554263324:web:a07bb4c99440919f309ad9",
  measurementId: "G-Y4LV8THQ5S"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
};
