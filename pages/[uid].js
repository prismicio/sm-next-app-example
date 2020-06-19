import { Client } from '../prismic'
import SliceZone from 'next-slicezone'
import { useGetStaticProps, useGetStaticPaths } from 'next-slicezone/hooks'

import resolver from '../sm-resolver.js'

const Page = ({ uid, registry, slices }) =>
  <SliceZone resolver={resolver} registry={registry} slices={slices} />

export const getStaticProps = useGetStaticProps({
  client: Client(),
  uid: ({ params }) => params.uid
})

export const getStaticPaths = useGetStaticPaths({
  client: Client(),
  type: 'page',
  fallback: false,
  formatPath: ({ uid }) => ({ params: { uid }})
})

export default Page
