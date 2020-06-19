import fs from 'fs'
import Head from 'next/head'

import { Client } from '../prismic'
import SliceZone from 'next-slicezone'
import { useGetStaticProps } from 'next-slicezone/hooks'

const Home = ({ slices, registry }) => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1 className="title">
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <a href="/homepage">Go to homepage</a>
      <div>
        <p>slices: {slices ? slices.length : "none"}</p>
        <SliceZone />
        <ul>
          {registry && Object.keys(registry).map((e) => <li key={e}>{e}</li>)}
        </ul>
      </div>
    </main>
  </div>
);

export const getStaticProps = useGetStaticProps({
  client: Client(),
  queryType: 'single',
  type: 'homepage',
  fs
})

export default Home
