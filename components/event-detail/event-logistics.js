import AddressIcon from 'Icons/address-icon';
import DateIcon from 'Icons/date-icon';
import LogisticsItem from './logistics-item';
import styles from './event-logistics.module.css';
import Image from 'next/image';

const EventLogistics = ({ date, address, image, imageAlt }) => {
  const humanReadableDate = new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const addressText = address.replace(', ', '\n');

  return (
    <section className={styles.logistics}>
      <div className={styles.image}>
        <Image src={`/${image}`} alt={imageAlt} width={300} height={300} />
      </div>
      <ul className={styles.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;
