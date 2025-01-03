import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <Link prefetch={false} href='/a'>A</Link>
      <Link prefetch={false} href='/b'>B</Link>
      <Link prefetch={false} href='/c'>C</Link>
    </div>
  );
}
