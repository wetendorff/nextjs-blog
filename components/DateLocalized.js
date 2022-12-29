export default function DateLocalized({ dateString }) {
  const date = new Date(dateString);
  const formattedDateString = date.toLocaleDateString("da-DK", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return <time dateTime={dateString}>{formattedDateString}</time>;
}
