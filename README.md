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

## \

Caching and Request De-duplication

In this project, we use the `nextCache` function to cache the results of database queries. This can significantly improve the performance of our application by reducing the number of database queries we need to make.

One of the functions we cache is `getMessages`, which fetches messages from the database:

```markdown
export const getMessages = nextCache(
cache(function getMessages() {
console.log("Fetching messages from db");
return db.prepare("SELECT \* FROM messages").all();
}),
["messages"],
{
tags: ["msg"],
}
);
```

## Getting Started

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
