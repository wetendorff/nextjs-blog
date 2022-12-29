import { useEffect, useState } from "react";

export default function DateLocalized({ dateString }) {
  const [formattedDate, setFormattedDate] = useState(null);

  useEffect(() => {
    const date = new Date(dateString);
    setFormattedDate(
      date.toLocaleDateString("da-DK", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    );
  }, []);

  return <time dateTime={dateString}>{formattedDate}</time>;
}
