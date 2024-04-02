const DUMMY_EVENTS = [
    {
      id: 'e1',
      title: 'Programming for everyone',
      description:
        'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
      location: 'Somestreet 25, 12345 San Somewhereo',
      date: '2021-05-12',
      image: 'images/coding-event.jpg',
      isFeatured: false,
    },
    {
      id: 'e2',
      title: 'Cooking is for everyone',
      description:
        "Dive into the art of culinary creations with our exclusive cooking course! Whether you're a beginner looking to master the basics or an experienced cook aiming to explore new cuisines, our course offers a journey through flavors, techniques, and secrets from around the globe. Get ready to transform fresh ingredients into stunning dishes that will impress family and friends. Join us to unleash your inner chef and elevate your cooking to the next level!",
      location: 'New Wall Street 5, 98765 New Work',
      date: '2021-05-30',
      image: 'images/cooking-event.jpg',
      isFeatured: true,
    },
    {
      id: 'e3',
      title: 'Dance lessons for beginners',
      description:
        "Step into the rhythm and unlock the dancer within you! Our dance lessons are designed for everyone, from absolute beginners to those seeking to refine their moves. Explore a variety of dance styles, from the elegance of ballet to the energy of hip hop, under the guidance of our experienced instructors. We'll help you find your footing, build confidence, and express yourself through the universal language of dance. Let's move, groove, and improve together!",
      location: 'My Street 12, 10115 Broke City',
      date: '2022-04-10',
      image: 'images/dance-event.jpg',
      isFeatured: true,
    },
  ];
  
  export const getFeaturedEvents = () => {
    return DUMMY_EVENTS.filter((event) => event.isFeatured);
  }
  
  export const getAllEvents = () => {
    return DUMMY_EVENTS;
  }
  
  export const getFilteredEvents = (dateFilter) => {
    const { year, month } = dateFilter;
  
    let filteredEvents = DUMMY_EVENTS.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
  
    return filteredEvents;
  }
  
  export const getEventById = (id) => {
    return DUMMY_EVENTS.find((event) => event.id === id);
  }