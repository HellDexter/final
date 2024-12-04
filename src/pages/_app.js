import { appWithTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import '../../styles.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const dir = router.locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <div dir={dir} className={`${dir === 'rtl' ? 'font-arabic' : ''}`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default appWithTranslation(MyApp);
