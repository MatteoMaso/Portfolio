interface Experience {
  title: string;
  start: string;
  end?: string;
  location?: string;
  children: React.ReactNode[];
}

export default function ExperienceItem({title, start, end, location, children}: Experience) {
  return (
    <div className="experienceitem">
      <h2>{title}</h2>
      <ul className="list-disc list-inside">{children}</ul>
    </div>
  );
};