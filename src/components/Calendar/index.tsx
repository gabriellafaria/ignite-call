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

export function Calendar() {
  const shortWeekDays = getWeekDays({ short: true })

  return (
    <CalandarContainer>
      <CalandarHeader>
        <CalandarTitle>
          Dezembro <span>2023</span>
        </CalandarTitle>
        <CalandarActions>
          <button>
            <CaretLeft />
          </button>
          <button>
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
