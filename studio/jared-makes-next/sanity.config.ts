import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import { markdownSchema } from "sanity-plugin-markdown";
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash';


export default defineConfig({
  name: 'default',
  title: 'jared-makes-next',

  projectId: 's0t8e9u2',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), markdownSchema(), unsplashImageAsset()],
  form: {
    image: {
      assetSources: (previousAssetSources, { schema }) => {
        if (schema.name === 'projects') {
          // don't use unsplash in the projects schema
          return previousAssetSources.filter((assetSource) => assetSource.name !== 'unsplash')
        }
        return previousAssetSources
      }
    }
  },
  schema: {
    types: schemaTypes,
  },
})
