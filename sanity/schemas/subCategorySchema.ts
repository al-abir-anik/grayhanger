import { defineType, defineField } from "sanity";

export const subCategoryType = defineType({
  name: "subCategory",
  title: "SubCategory",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "SubCategory Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "category",
      title: "Parent Category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule) => Rule.required(),
    }),
  ],
});