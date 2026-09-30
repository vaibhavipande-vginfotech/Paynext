// Renders schema.org structured data. `data` may be one object or an array of objects.
export default function JsonLd({ data }) {
  const items = Array.isArray(data) ? data : [data]
  return items.map((d, i) => (
    <script
      key={i}
      type="application/ld+json"
      // JSON is escaped so "</script>" inside a string can't break out of the tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(d).replace(/</g, "\\u003c") }}
    />
  ))
}
