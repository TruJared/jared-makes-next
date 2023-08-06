import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'slug',
      options: {
        maxLength: 96,
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      }
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [{ title: 'Online Stores', value: 'ols' }, { title: 'Other Projects', value: 'other' }, { title: 'Coming Soon', value: 'upcoming' }],
        layout: 'radio',
        direction: 'horizontal',
      }
    }),
    defineField({
      name: 'tags',
      title: 'Technologies Used',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'tags' } }],
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'string',
      validation: (Rule) => Rule.max(75).warning('Should be under 75 characters'),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  }

})
