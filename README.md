This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app) and configured to use SliceMachine

## Getting Started

First, run the development server:

```bash
yarn && yarn dev
```

Open [http://localhost:3000](http://localhost:3000/homepage) with your browser to see the result.

You can start editing the page by modifying `pages/[uid].js`. To create more pages on Prismic, you will need to clone this endpoint on a SliceMachine cluster.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

To learn more on SliceMachine:
- [Next Slicezone documentation](https://github.com/prismicio/slice-machine/blob/master/packages/next-slicezone) - features and API
- [React essential slices](https://github.com/prismicio/essential-slices) - default data + front-end components
- [The Prismic CLI](https://www.slicemachine.dev/documentation/the-prismic-cli) - port to Next is a wip

## Theme

Default slices use [theme-ui](https://theme-ui.com). To change the default theme, merge your own theme with it (see `/utils/theme`) and pass it to the ThemeProvider in `pages/_app`.

## Deploy
Deploy command depends on your provider

```bash
yarn build && yarn export && cd out && [deploy command]
````

## How it works

Each SliceZone page implements a `useGetStaticProps` methods, that returns a Next.js `getStaticProps` function. It's responsible for making queries (getSingle or getByUID) to your Prismic API endpoint. It then returns data props (slices, uid..), that get passed to the page component.

It also creates a registry (an object with slice names as keys and components info as values). This registry is used to create an `sm-resolver` file, used by the SliceZone to import the right component. As this file is generated on each call to `getStaticProps`, you should not have to update it manually. However, you will have to create it manually first in order for the SliceZone to not break. If you used the `prismic sm --setup` command, this file should be bootstrapped already.
