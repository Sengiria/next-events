import EventContent from 'Components/event-detail/event-content';
import EventLogistics from 'Components/event-detail/event-logistics';
import EventSummary from 'Components/event-detail/event-summary';
import ErrorAlert from 'Components/ui/error-alert';
import { getEvent, getFeaturedEvents } from 'helpers/api-utils';
import React, {Fragment} from 'react';

const EventDetailsPage = ({event}) => {
    if (!event) {
        return (
            <ErrorAlert className="center">
                <p>Loading...</p>
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


export const getStaticProps = async ({params}) => {
    const eventId = params.eventId;
    const event = await getEvent(eventId);

    return {
        props: {
            event
        },
        revalidate: 30
    }
}

export const getStaticPaths = async () => {
    const events = await getFeaturedEvents();
    const ids = events.map(event => ({params: {eventId: event.id}}));

    return {
        paths: ids,
        fallback: 'blocking'
    }
}

export default EventDetailsPage;
