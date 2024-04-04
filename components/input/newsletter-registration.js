import { useRef } from 'react';
import styles from './newsletter-registration.module.css';

const NewsletterRegistration = () => {
  const emailRef = useRef();
  
  const registrationHandler = (event) => {
    event.preventDefault();

    const reqBody = {
      email: emailRef.current.value
    }
    fetch('/api/newsletter', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json'
      }
    })

  }

  return (
    <section className={styles.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={styles.control}>
          <input
            type='email'
            id='email'
            placeholder='Your email'
            aria-label='Your email'
            ref={emailRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
