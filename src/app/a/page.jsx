import Link from 'next/link';
import { query } from '../query';

export default async function A() {
  const data = await query();
  return (
    <div>
      <div>{data} A</div>
      <Link prefetch={false} href='/b'>B</Link>
      <Link prefetch={false} href='/c'>C</Link>
    </div>
  );
}
