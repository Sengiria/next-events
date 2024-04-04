import EventList from 'Components/events/event-list';
import ResultsTitle from 'Components/events/result-title';
import Button from 'Components/ui/button';
import ErrorAlert from 'Components/ui/error-alert';
import { getFilteredEvents } from 'dummy-data';
import React, {Fragment} from 'react';
import Head from 'next/head';

const FilteredEvents = ({filteredEvents, hasError, date}) => {
    if ( hasError ) {
        return (
        <Fragment>
            <ErrorAlert>
                <p>Invalid filter. Please adjust your values!</p>
            </ErrorAlert>
            <div className='center'>
                <Button link='/events'>Show All Events</Button>
            </div>
        </Fragment>
        );
    }

    if (!filteredEvents || filteredEvents.length === 0) {
        return (
        <Fragment>
            <ErrorAlert>
                <p>No events found for the chosen filter!</p>
            </ErrorAlert>
            <div className='center'>
                <Button link='/events'>Show All Events</Button>
            </div>
        </Fragment>
        );
    }

    const dateValue = new Date(date.year, date.month - 1);

  return (
    <Fragment>
        <Head>
            <title>FilteredEvents</title>
            <meta 
            name='description'
            content={`All events for ${date.month}/${date.year}.`}
        />
        </Head>
      <ResultsTitle date={dateValue} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
}

export const getServerSideProps = async ({params}) => {
    const filterData = params.slug;
    const filteredYear = filterData[0];
    const filteredMonth = filterData[1];

    const numYear = +filteredYear;
    const numMonth = +filteredMonth;

    if (
        isNaN(numYear) ||
        isNaN(numMonth) ||
        numYear > 2030 ||
        numYear < 2021 ||
        numMonth < 1 ||
        numMonth > 12
    ) {
        return {
            props: { hasError: true }
        };
    }

    const filteredEvents = await getFilteredEvents({
        year: numYear,
        month: numMonth,
    });

    return {
        props: {
            filteredEvents,
            date: {
                year: numYear,
                month: numMonth
            }
        }
    }

}

export default FilteredEvents;
