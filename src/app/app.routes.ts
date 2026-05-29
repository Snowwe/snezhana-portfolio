import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full',
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about-page/about-page').then((m) => m.AboutPage),
  },
  {
    path: 'resume',
    loadComponent: () =>
      import('./features/resume/resume-page/resume-page').then((m) => m.ResumePage),
  },
  {
    path: 'game-lab',
    loadComponent: () =>
      import('./features/game-lab/game-lab-page/game-lab-page').then((m) => m.GameLabPage),
  },
  {
    path: 'roadmap',
    loadComponent: () =>
      import('./features/roadmap/roadmap-page/roadmap-page').then((m) => m.RoadmapPage),
  },
];
