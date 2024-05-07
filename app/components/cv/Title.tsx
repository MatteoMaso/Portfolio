interface TitleContent {
  text: string;
}

export default function Title({text}: TitleContent) {
  return (
    <div className="title">{text}</div>
  );
};