import { defineType, defineField } from "sanity";

export const orderType = defineType({
  name: "order",
  title: "Order",
  type: "document",
  fields: [
    defineField({
      name: "orderId",
      title: "Order ID",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "customerName",
      title: "Customer Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "phoneNumber",
      title: "Phone Number",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "text",
      rows: 2,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "deliveryArea",
      title: "Delivery Area",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "orderNote",
      title: "Order Note",
      type: "string",
    }),
    defineField({
      name: "items",
      title: "Items",
      type: "array",
      of: [
        {
          type: "object",
          name: "orderItem",
          title: "Order Item",
          fields: [
            defineField({
              name: "productId",
              title: "Product Reference",
              type: "reference",
              to: [{ type: "product" }],
            }),
            defineField({
              name: "name",
              title: "Product Name",
              type: "string",
            }),
            defineField({
              name: "size",
              title: "Size",
              type: "string",
            }),
            defineField({
              name: "quantity",
              title: "Quantity",
              type: "number",
            }),
            defineField({
              name: "price",
              title: "Price",
              type: "number",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "subtotal",
      title: "Subtotal",
      type: "number",
    }),
    defineField({
      name: "shippingCharge",
      title: "Shipping Charge",
      type: "number",
    }),
    defineField({
      name: "total",
      title: "Total",
      type: "number",
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Pending", value: "pending" },
          { title: "Processing", value: "processing" },
          { title: "Shipped", value: "shipped" },
          { title: "Delivered", value: "delivered" },
          { title: "Cancelled", value: "cancelled" },
          { title: "Returned", value: "returned" },
        ],
      },
      initialValue: "pending",
    }),
    defineField({
      name: "createdAt",
      title: "Created At",
      type: "datetime",
    }),
  ],
  preview: {
    select: {
      title: "customerName",
      subtitle: "status",
      media: "items.0.productId",
    },
  },
});
