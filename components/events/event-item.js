import React from 'react';
import styles from './event-item.module.css';
import Button from '../ui/button';
import DateIcon from 'Icons/date-icon';
import AddressIcon from '../ui/icons/address-icon';
import ArrowRightIcon from '../ui/icons/arrow-right';
import Image from 'next/image';

const EventItem = ({event}) => {
    const { title, image, date, location, id } = event;
    const formattedDate = new Date(date).toLocaleDateString('en-GB');
    const formattedLocation = location.replace(', ', '\n');
    const refLink = `/events/${id}`
    return (
        <li className={styles.item}>
            <Image src={'/' + image} alt={title} width={250} height={160}  />
            <div className={styles.content}>
                <div className={styles.summary}>
                    <h2>{title}</h2>
                    <div className={styles.date}>
                        <DateIcon />
                        <time>{formattedDate}</time>
                    </div>
                    <div className={styles.address}>
                    <AddressIcon />
                        <address>{formattedLocation}</address>
                    </div>
                </div>
                <div className={styles.actions}>
                    <Button link={refLink}>
                        <span>Explore Event</span>
                        <span className={styles.icon}><ArrowRightIcon /></span>
                    </Button>
                </div>
            </div>    
        </li>
    );
}

export default EventItem;
