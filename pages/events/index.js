import EventList from 'Components/events/event-list';
import EventSearch from 'Components/events/event-search';
import { getEvents } from 'helpers/api-utils';
import { useRouter } from 'next/router';
import React, { Fragment } from 'react';

const EventsPage = ({events}) => {
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

export const getStaticProps = async () => {
    const events = await getEvents();

    return {
        props: {
            events
        },
        revalidate: 60
    }
}

export default EventsPage;
