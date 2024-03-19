import { format, isValid } from "date-fns";
import { zonedTimeToUtc } from "date-fns-tz";

const toLocalTime = (time: string) => {
  if (!isValid(new Date(time))) return time;

  const utcDate = zonedTimeToUtc(time, "UTC");

  return format(utcDate, "yyyy-MM-dd HH:mm:ss");
};

export { toLocalTime };
