import Link from 'next/link';
import { query } from '../query';

export default async function C() {
  const data = await query();
  return (
    <div>
      <div>{data} C</div>
      <Link prefetch={false} href='/a'>A</Link>
      <Link prefetch={false} href='/b'>B</Link>
    </div>
  );
}
