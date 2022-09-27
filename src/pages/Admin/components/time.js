import { useEffect, useState } from 'react'

const weekday = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

const Time = () => {
  const [date, setdate] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setdate(new Date())
    }, 900)

    return () => {
      clearInterval(timer)
    }
  }, [])
  return (
    <div
      className='time border border-5 border-info rounded-5'
      style={{
        height: '130px',
        marginTop: '100px',
        marginLeft: '10px',
        marginRight: '10px',
        width: '93%',
      }}>
      <div style={{ textAlign: 'center' }}>
        <h4>{weekday[date.getUTCDay()]}</h4>
        <h2>
          {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}
        </h2>
        <h5>{date.toLocaleDateString()}</h5>
      </div>
    </div>
  )
}

export default Time
