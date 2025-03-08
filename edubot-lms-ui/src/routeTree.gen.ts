/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as HiImport } from './routes/hi'
import { Route as ChangePasswordImport } from './routes/changePassword'
import { Route as SupportTicket4Import } from './routes/SupportTicket4'
import { Route as SupportTicket3Import } from './routes/SupportTicket3'
import { Route as ProfilePageImport } from './routes/ProfilePage'
import { Route as IndexImport } from './routes/index'
import { Route as UsersIndexImport } from './routes/users/index'
import { Route as UsersAddImport } from './routes/users/add'

// Create/Update Routes

const HiRoute = HiImport.update({
  path: '/hi',
  getParentRoute: () => rootRoute,
} as any)

const ChangePasswordRoute = ChangePasswordImport.update({
  path: '/changePassword',
  getParentRoute: () => rootRoute,
} as any)

const SupportTicket4Route = SupportTicket4Import.update({
  path: '/SupportTicket4',
  getParentRoute: () => rootRoute,
} as any)

const SupportTicket3Route = SupportTicket3Import.update({
  path: '/SupportTicket3',
  getParentRoute: () => rootRoute,
} as any)

const ProfilePageRoute = ProfilePageImport.update({
  path: '/ProfilePage',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const UsersIndexRoute = UsersIndexImport.update({
  path: '/users/',
  getParentRoute: () => rootRoute,
} as any)

const UsersAddRoute = UsersAddImport.update({
  path: '/users/add',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/ProfilePage': {
      id: '/ProfilePage'
      path: '/ProfilePage'
      fullPath: '/ProfilePage'
      preLoaderRoute: typeof ProfilePageImport
      parentRoute: typeof rootRoute
    }
    '/SupportTicket3': {
      id: '/SupportTicket3'
      path: '/SupportTicket3'
      fullPath: '/SupportTicket3'
      preLoaderRoute: typeof SupportTicket3Import
      parentRoute: typeof rootRoute
    }
    '/SupportTicket4': {
      id: '/SupportTicket4'
      path: '/SupportTicket4'
      fullPath: '/SupportTicket4'
      preLoaderRoute: typeof SupportTicket4Import
      parentRoute: typeof rootRoute
    }
    '/changePassword': {
      id: '/changePassword'
      path: '/changePassword'
      fullPath: '/changePassword'
      preLoaderRoute: typeof ChangePasswordImport
      parentRoute: typeof rootRoute
    }
    '/hi': {
      id: '/hi'
      path: '/hi'
      fullPath: '/hi'
      preLoaderRoute: typeof HiImport
      parentRoute: typeof rootRoute
    }
    '/users/add': {
      id: '/users/add'
      path: '/users/add'
      fullPath: '/users/add'
      preLoaderRoute: typeof UsersAddImport
      parentRoute: typeof rootRoute
    }
    '/users/': {
      id: '/users/'
      path: '/users'
      fullPath: '/users'
      preLoaderRoute: typeof UsersIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  ProfilePageRoute,
  SupportTicket3Route,
  SupportTicket4Route,
  ChangePasswordRoute,
  HiRoute,
  UsersAddRoute,
  UsersIndexRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/ProfilePage",
        "/SupportTicket3",
        "/SupportTicket4",
        "/changePassword",
        "/hi",
        "/users/add",
        "/users/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/ProfilePage": {
      "filePath": "ProfilePage.tsx"
    },
    "/SupportTicket3": {
      "filePath": "SupportTicket3.tsx"
    },
    "/SupportTicket4": {
      "filePath": "SupportTicket4.tsx"
    },
    "/changePassword": {
      "filePath": "changePassword.tsx"
    },
    "/hi": {
      "filePath": "hi.tsx"
    },
    "/users/add": {
      "filePath": "users/add.tsx"
    },
    "/users/": {
      "filePath": "users/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
