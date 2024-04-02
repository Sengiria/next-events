import EventContent from 'Components/event-detail/event-content';
import EventLogistics from 'Components/event-detail/event-logistics';
import EventSummary from 'Components/event-detail/event-summary';
import ErrorAlert from 'Components/ui/error-alert';
import { getEventById } from 'dummy-data';
import { useRouter } from 'next/router';
import React, {Fragment} from 'react';

const EventDetailsPage = () => {
    const router = useRouter();
    const eventId = router.query.eventId;
    const event = getEventById(eventId);

    if (!event) {
        return (
            <ErrorAlert>
                <p>No event found!</p>
            </ErrorAlert>
        )
    }
    
    return (
        <Fragment>
            <EventSummary title={event.title} />
            <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </Fragment>
    );
}

export default EventDetailsPage;
