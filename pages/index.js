import React from 'react';
import EventList from '../components/events/event-list';
import { getFeaturedEvents } from 'helpers/api-utils';
import Head from 'next/head';
import NewsletterRegistration from 'Components/input/newsletter-registration';

const HomePage = ({featuredEvents}) => {
    return (
        <div>
            <Head>
                <title>NextJS Events</title>
                <meta 
                    name='description' 
                    content='Find a lot of exciting events to connect with other people' />
            </Head>
            <NewsletterRegistration />
            <EventList items={featuredEvents} />
        </div>
    );
}

export const getStaticProps = async () => {
    const featuredEvents = await getFeaturedEvents();

    return {
        props: {
            featuredEvents,
            revalidate: 1800, // every half hour

        }
    }
}

export default HomePage;
