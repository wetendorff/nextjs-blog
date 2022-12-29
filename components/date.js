export default function DateLocalized({ dateString }) {
  const date = new Date(dateString);
  const dateStr = date.toLocaleDateString("da-DK", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return <time dateTime={dateString}>{dateStr}</time>;
}
