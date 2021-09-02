

export const translateWeekDays = (day) => {
  const positiveDay = Math.abs(day)
  const weekDay = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday'
  }

  if (weekDay[positiveDay] === undefined) return '😓'


  return weekDay[positiveDay]
}


export const getDaysOfTheWeek = (today, day) => {
  day++  
  const dayOfWeek = today + day


  if (dayOfWeek === undefined) return translateWeekDays('😓')
  if (dayOfWeek === 7) return translateWeekDays(0)
  if (dayOfWeek === 8) return translateWeekDays(1)
  if (dayOfWeek === 9) return translateWeekDays(2)
  if (dayOfWeek === 10) return translateWeekDays(3)
  if (dayOfWeek === 11) return translateWeekDays(4)
  if (dayOfWeek === 12) return translateWeekDays(5)
  if (dayOfWeek === 13) return translateWeekDays(6)
  if (dayOfWeek === 14) return translateWeekDays(7)

  return translateWeekDays(dayOfWeek)
}