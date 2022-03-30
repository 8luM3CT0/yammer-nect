//front-end
import { DayWord } from '../index'
//back-end
function DailyWord ({ first_data, second_data, third_data, fourth_data }) {
  return (
    <div
      className='
    h-[560px]
    w-screen
    mx-auto
    grid
    grid-flow-row-dense
    lg:grid-cols-2
    grid-cols-1
    space-y-3
    '
    >
      {/**WordOftheDay.js */}
      <DayWord word={first_data} />
      <DayWord word={second_data} />
      <DayWord word={third_data} />
      <DayWord word={fourth_data} />
    </div>
  )
}

export default DailyWord
