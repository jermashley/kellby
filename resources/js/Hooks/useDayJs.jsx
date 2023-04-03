import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'

export const useDayJs = () => {
  dayjs.extend(duration)

  return dayjs
}
