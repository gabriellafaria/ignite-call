import { CaretLeft, CaretRight } from 'phosphor-react'
import {
  CalandarActions,
  CalandarBody,
  CalandarContainer,
  CalandarDay,
  CalandarHeader,
  CalandarTitle,
} from './styles'
import { getWeekDays } from '@/utils/get-week-days'
import { useMemo, useState } from 'react'
import dayjs from 'dayjs'

export function Calendar() {
  const [currentDate, setCurrentDate] = useState(() => {
    return dayjs().set('date', 1)
  })

  function handlePreviousMount() {
    const previousMounthDate = currentDate.subtract(1, 'month')
    setCurrentDate(previousMounthDate)
  }

  function handleNextMonth() {
    const nextMounthDate = currentDate.add(1, 'month')
    setCurrentDate(nextMounthDate)
  }

  const shortWeekDays = getWeekDays({ short: true })

  const currentMonth = currentDate.format('MMMM')
  const currentYear = currentDate.format('YYYY')

  const calendarWeeks = useMemo(() => {
    const daysIMountArray = Array.from({
      length: currentDate.daysInMonth(),
    }).map((_, i) => {
      return currentDate.set('date', i + 1)
    })

    const firstWeekDay = currentDate.get('day')

    const previousMonthFillArray = Array.from({
      length: firstWeekDay,
    })
      .map((_, i) => {
        return currentDate.subtract(i + 1, 'day')
      })
      .reverse()

    return [...previousMonthFillArray, ...daysIMountArray]
  }, [currentDate])

  console.log(calendarWeeks)

  return (
    <CalandarContainer>
      <CalandarHeader>
        <CalandarTitle>
          {currentMonth} <span>{currentYear}</span>
        </CalandarTitle>
        <CalandarActions>
          <button onClick={handlePreviousMount} title="Previous Mount">
            <CaretLeft />
          </button>
          <button onClick={handleNextMonth} title="Next Mount">
            <CaretRight />
          </button>
        </CalandarActions>
      </CalandarHeader>
      <CalandarBody>
        <thead>
          <tr>
            {shortWeekDays.map((weekDay) => (
              <th key={weekDay}>{weekDay}.</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <CalandarDay>1</CalandarDay>
            </td>
            <td>
              <CalandarDay>2</CalandarDay>
            </td>
            <td>
              <CalandarDay>3</CalandarDay>
            </td>
          </tr>
          <tr>
            <td>
              <CalandarDay>1</CalandarDay>
            </td>
            <td>
              <CalandarDay>1</CalandarDay>
            </td>
            <td>
              <CalandarDay>1</CalandarDay>
            </td>
            <td>
              <CalandarDay>1</CalandarDay>
            </td>
            <td>
              <CalandarDay>1</CalandarDay>
            </td>
            <td>
              <CalandarDay>2</CalandarDay>
            </td>
            <td>
              <CalandarDay>3</CalandarDay>
            </td>
          </tr>
        </tbody>
      </CalandarBody>
    </CalandarContainer>
  )
}
