import Button from '../ui/button';
import styles from './result-title.module.css';

const ResultsTitle = ({date}) => {
  const humanReadableDate = new Date(date).toLocaleDateString('en-GB', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className={styles.title}>
      <h1>Events in {humanReadableDate}</h1>
      <Button link='/events'>Show all events</Button>
    </section>
  );
}

export default ResultsTitle;