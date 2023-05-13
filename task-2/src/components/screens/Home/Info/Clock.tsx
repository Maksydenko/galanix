import { FC, useEffect, useState } from "react";

const Clock: FC = () => {
  const [date, setDate] = useState(new Date());

  const tick = () => {
    setDate(new Date());
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(timer);
    };
  }, [date]);

  const currentDate =
    date &&
    date.toLocaleString("uk-UA", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

  return <div className="info__clock">Current date: {currentDate}</div>;
};

export default Clock;
