interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

// Server component: the JSON-LD must be in the initial HTML. `<` is escaped so
// post titles or excerpts can never close the script tag early.
export default function JsonLd({ data }: JsonLdProps) {
  const json = JSON.stringify(data).replace(/</g, '\\u003c');
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
