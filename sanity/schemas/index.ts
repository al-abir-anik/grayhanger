import { type SchemaTypeDefinition } from "sanity";
import { productType } from "./productSchema";
import { categoryType } from "./categorySchema";
import { orderType } from "./orderSchema";
import { subCategoryType } from "./subCategorySchema";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productType, categoryType, subCategoryType, orderType],
};
