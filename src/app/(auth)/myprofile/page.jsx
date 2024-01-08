"use client";

import Profile from './[id]';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();
  const id = router.query?.userId;

  return (
    <div>
      <Profile id={id} />
    </div>
  );
};

export default Page;
