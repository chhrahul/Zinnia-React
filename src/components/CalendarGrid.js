import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

const events = [

    { daysOfWeek: ['3'], startTime: '5:30', endTime: '16:30' },
    { start: new Date(), title: 'Unavailable' },
    { start: new Date().setDate(new Date().getDate() + 7), title: 'Unavailable' },
    { start: new Date().setDate(new Date().getDate() + 28), title: 'Unavailable' },

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
                timeZone={'Asia/Kolkata'}
            />
        </div>
    )
}

// a custom render function
function renderEventContent(eventInfo) {
    const start = new Date(eventInfo.event._instance.range.start).toLocaleTimeString(navigator.language, {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });
    const end = new Date(eventInfo.event._instance.range.end).toLocaleTimeString(navigator.language, {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true

    });
    console.log(eventInfo)
    return (
        <>
            {!eventInfo.event.title ?
                <p className=' text-fc mt-md-2'>{start} - {end}</p>
                :
                <p>{eventInfo.event.title}</p>
            }

        </>
    )
}