import { type SchemaTypeDefinition } from "sanity";
import { productType } from "./productSchema";
import { categoryType } from "./categorySchema";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productType, categoryType],
};
