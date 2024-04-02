import Layout from 'Components/layout/layout';
import '../styles/globals.css'

// root component for layout
const EventsApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default EventsApp;
