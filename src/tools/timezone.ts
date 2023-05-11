import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import buddhistEra from "dayjs/plugin/buddhistEra";
import "dayjs/locale/th";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.locale("th");
dayjs.extend(buddhistEra);

export { dayjs };
