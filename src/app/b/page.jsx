import Link from 'next/link';
import { query } from '../query';

export default async function B() {
  const data = await query();
  return (
    <div>
      <div>{data} B</div>
      <Link prefetch={false} href='/a'>A</Link>
      <Link prefetch={false} href='/c'>C</Link>
    </div>
  );
}
