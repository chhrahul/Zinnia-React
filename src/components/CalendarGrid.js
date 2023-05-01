
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

const events = [
  { title: 'Meeting', start: new Date() }
]

export function CalendarGrid() {
  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView='dayGridMonth'
        weekends={false}
        events={events}
        eventContent={renderEventContent}
      />
    </div>
  )
}

// a custom render function
function renderEventContent(eventInfo) {
  console.log(new Date(eventInfo.event._instance.range.end))
  console.log(eventInfo)
  return (
    <>
      <p>{eventInfo.timeText}</p>

      {/* <p>{eventInfo.event.title}</p> */}
    </>
  )
}