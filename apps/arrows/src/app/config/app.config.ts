import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { routes } from './app.routes';

// Shoelace Setup
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';
setBasePath('@shoelace-style/shoelace/dist');
// Shoelace Components
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/dialog/dialog.js';
import '@shoelace-style/shoelace/dist/components/tooltip/tooltip.js';
import '@shoelace-style/shoelace/dist/components/alert/alert.js';
import '@shoelace-style/shoelace/dist/components/switch/switch.js';
import '@shoelace-style/shoelace/dist/components/progress-bar/progress-bar.js';

// Firebase Configuration
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
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
};
