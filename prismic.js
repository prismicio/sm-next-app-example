import Prismic from 'prismic-javascript'
import Link from 'next/link'

import smConfig from './sm.json'

export const apiEndpoint = smConfig.apiEndpoint

// -- Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
export const accessToken = ''

// -- Link resolution rules
// Manages the url links to internal Prismic documents
export const linkResolver = (doc) => {
  if (doc.type === 'post') {
    return `/blog/${doc.uid}`
  }
  return '/'
}

// Additional helper function for Next/Link components
export const hrefResolver = (doc) => {
  if (doc.type === 'post') {
    return '/blog/[uid]'
  }
  return '/'
}

export const customLink = (type, element, content, children, index) => (
  <Link
    key={index}
    href={hrefResolver(element.data)}
    as={linkResolver(element.data)}
  >
    <a>{content}</a>
  </Link>
)

export const routes = [{
  type: 'page',
  path: '/:uid'
}]

export const Client = (req = null, options = {}) => (
  Prismic.client(apiEndpoint, Object.assign({ routes }, options))
)