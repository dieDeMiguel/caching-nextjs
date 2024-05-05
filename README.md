# Next.js Caching;

This project is a demonstration of various of Next.js caching features. On main branch a usual appraoch is used with asynchronous data fetching utilising the fetch api and all of its configuration (including nextjs's "next" key on the fetch config objetct). On the branch called synchronous we'll use the synchronous properties of "better-sqlite3" to leverage a sync approach which offers some advantages.

## Features

### Revalidate Tag

The `revalidateTag` is a feature that allows you to set a specific time interval for revalidating the data of a page. This is useful for ensuring that your page data is always up-to-date, even if it's being served from the cache.

### Revalidate Function

The `export const revalidate` function is used to set the revalidation time for a page. This function is typically used in the `getStaticProps` function in Next.js.

### Dynamic Import

The `export const dynamic = "force-dynamic"` is used to dynamically import modules in your Next.js application. This can help to optimize your application by only loading the modules that are needed for the current page.

### Unstable_noStore

The `unstable_noStore()` function is a feature that allows you to prevent a page from being stored in the cache. This can be useful for pages that contain sensitive information or for pages that should always be rendered server-side.

## Getting Started\

\
First, install depenedencies:

```
npm i
```

Second, run the development server:

```sh
npm run dev
```

Third enter "backend" folder\
\
`cd backend`

Fourth install dependencies

```
npm i
```

Fifth, run backend server

```
npm start
```
