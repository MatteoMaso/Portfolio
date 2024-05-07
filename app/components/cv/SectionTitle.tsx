interface Content {
  text: string;
}

export default function SectionTitle({text}: Content) {
  return (
    <div className="sectiontitle text-2xl mt-8 mb-2">{text}</div>
  );
};