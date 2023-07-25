// sanity.ts
import {createClient} from '@sanity/client'

export default createClient({
  projectId: 's0t8e9u2',
  dataset: 'production',
  apiVersion: '2021-03-25',
  useCdn: true // `false` if you want to ensure fresh data
})
