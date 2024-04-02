import EventList from 'Components/events/event-list';
import EventSearch from 'Components/events/event-search';
import { getAllEvents } from 'dummy-data';
import { useRouter } from 'next/router';
import React, { Fragment } from 'react';

const EventsPage = () => {
    const events = getAllEvents();
    const router = useRouter();

    const findEventsHandler = (year, month) => {
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath)
    }
    return (
        <Fragment>
            <EventSearch onSearch={findEventsHandler} />
            <EventList items={events} />
        </Fragment>
    );
}

export default EventsPage;
