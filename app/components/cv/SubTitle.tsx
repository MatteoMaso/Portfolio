interface Content {
  text: string;
}

export default function SubTitle({text}: Content) {
  return (
    <div className="subtitle">{text}</div>
  );
};