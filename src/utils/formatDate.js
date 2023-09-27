import { formatDistanceToNowStrict } from "date-fns";

export const formatDatePost = (date) => {
  const result = date.replace("T", "-").replace("Z", "").replaceAll(":", "-");
  const formatDate = result.split("-");
  const time = formatDistanceToNowStrict(
    new Date(
      Number(formatDate[0]),
      Number(formatDate[1]) - 1,
      Number(formatDate[2]),
      Number(formatDate[3]) + 7,
      Number(formatDate[4]),
      Number(formatDate[5])
    )
  );

  return time;
};
