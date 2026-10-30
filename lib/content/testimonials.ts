/**
 * Sample testimonials for Keplor V3.
 *
 * These are fictional sample quotations created for design completeness.
 * No real people's identities, company affiliations, or verified endorsements
 * are implied. All content is clearly identified as sample/illustrative.
 */

export interface Testimonial {
  id: string;
  quote: string;
  attribution: string;
  role: string;
  context: string;
  label: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "ts-01",
    quote:
      "Keplor helped us untangle a process that had become fragile over years of manual work. The team understood our constraints before proposing anything.",
    attribution: "Sample quotation",
    role: "Operations lead",
    context: "Illustrative testimonial",
    label: "Sample content",
  },
  {
    id: "ts-02",
    quote:
      "What stood out was the focus on maintainability. They built something our team can actually operate, not just hand over.",
    attribution: "Sample quotation",
    role: "Engineering manager",
    context: "Illustrative testimonial",
    label: "Sample content",
  },
  {
    id: "ts-03",
    quote:
      "The recommendation system they designed gives us control and transparency. We know why each suggestion appears.",
    attribution: "Sample quotation",
    role: "Product lead",
    context: "Illustrative testimonial",
    label: "Sample content",
  },
];

export default testimonials;
