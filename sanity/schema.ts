import { type SchemaTypeDefinition } from 'sanity'
import project from './schema/project-schema'
import page from './schema/page-schema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    project,
    page
  ],
}
