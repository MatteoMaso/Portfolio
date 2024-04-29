interface Content {
  text: string;
}

export default function SectionTitle({text}: Content) {
  return (
    <div className="sectiontitle">{text}</div>
  );
};