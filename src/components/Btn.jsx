export default function Btn({ text, style, width }) {
  return (
    <button
      className={`${
        style == "primary" ? "bg-red-200 mr-2" : "bg-blue-300"
      } p-2 w-20 rounded-md ${width}`}
    >
      {text}
    </button>
  );
}
