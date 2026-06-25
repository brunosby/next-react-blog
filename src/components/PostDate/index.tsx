import { formatDateTime, formatDistanceToNow } from "@/utils/format-datetime";

type PostDateProps = {
  dateTime: string;
};

export default function PostDate({ dateTime }: PostDateProps) {
  return (
    <time
      dateTime={dateTime}
      className="text-slate-600 text-sm/tight"
      title={formatDistanceToNow(dateTime)}
    >
      {formatDateTime(dateTime)}
    </time>
  );
}
