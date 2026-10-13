import { provideZonelessChangeDetection } from '@angular/core';
import {
  bootstrapApplication,
  provideNativeScriptRouter,
  runNativeScriptAngularApp,
} from '@nativescript/angular';
import { View } from '@triniwiz/nativescript-masonkit';
import { installMasonKit } from '@triniwiz/nativescript-masonkit/angular';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

// Start every MasonKit element from Tailwind's preflight baseline
// (border-box, no UA margins/padding). Must run before any view is created.
View.preflight = true;

// Registers MasonKit's elements (<view>, <text>, <scroll>, <button>, ...) and
// the HTML-shaped ones (<div>, <section>, <h1>, <p>, <span>, ...), and makes
// component hosts real layout boxes. Must run before bootstrap. Routed screens
// are page roots, so they stay transparent.
installMasonKit({
  componentHosts: { passthrough: ['app-home', 'app-playground'] },
});

runNativeScriptAngularApp({
  appModuleBootstrap: () =>
    bootstrapApplication(AppComponent, {
      providers: [provideZonelessChangeDetection(), provideNativeScriptRouter(routes)],
    }),
});
