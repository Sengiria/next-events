export const getEvents = async () => {
    const response = await fetch('https://nextjs-cour-d5482-default-rtdb.europe-west1.firebasedatabase.app/events.json');
    const data = await response.json();
    const events = [];

    for (const key in data) {
        events.push({
            id: key,
            ...data[key] 
            })
    }

    return events;
}

export const getFeaturedEvents = async () => {
    const events = await getEvents();
    return events.filter(event => event.isFeatured);
}

export const getEvent = async (eventId) => {
    const events = await getEvents();
    return events.find(event => event.id === eventId);
}

export const getFilteredEvent = async ({year, month}) => {
    const events = await getEvents();
    return events.filter(event => {
        const eventDate = new Date(event.date)
        return eventDate.getFullYear() === year && eventDate.getMonth() === month -1;
})
    
}