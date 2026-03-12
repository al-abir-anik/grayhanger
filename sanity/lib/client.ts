import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";

// client used for preview, live content and updates draft content
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

// client used for creating orders, updating order status, deleting orders
export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});
