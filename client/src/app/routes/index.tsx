import {lazy} from 'react';

export const Layout = {
  Main: lazy(() => import('./LayoutMain')),
}

export const Screen = {
  // General
  Home: lazy(() => import('../../home/routes/ScreenHome')),
  Settings: lazy(() => import('../../settings/routes/ScreenSettings')),
  Teaser: lazy(() => import('./ScreenTeaser')),
  // Media
  Directory: lazy(() => import('../../media/files/routes/ScreenDirectory')),
  FilePreview: lazy(() => import('../../media/files/routes/ScreenFilePreview')),
  // World
  Map: lazy(() => import('../../world/map/routes/ScreenMap')),
  Calendar: lazy(() => import('../../world/events/routes/ScreenCalendar')),
  // Dev
  Design: lazy(() => import('../../dev/routes/ScreenDesign')),
  Library: lazy(() => import('../../dev/routes/ScreenLibrary')),
}
