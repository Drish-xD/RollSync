'use client';

import { AttendanceView, UserDetails } from '@/components';
import { Divider } from '@nextui-org/divider';
import { Spacer } from '@nextui-org/spacer';
import { useAuth } from 'contexts/auth';
import { useRouter } from 'next/navigation';
import { useLayoutEffect } from 'react';

const Dashboard = () => {
  const { isLoggedIn } = useAuth();

  const router = useRouter();

  // If not loggedIn then goto '/' route
  useLayoutEffect(() => {
    if (!isLoggedIn) {
      const timeoutId = setTimeout(() => {
        router.push('/');
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [isLoggedIn]);

  return (
    <main className="h-screen w-full px-5">
      {isLoggedIn ? (
        <>
          <Spacer y={10} />
          {/* User Details */}
          <UserDetails />
          <Divider className="my-20 w-11/12 mx-auto" />
          {/* User Attandance Record */}
          <AttendanceView />
          <Spacer y={10} />
        </>
      ) : (
        <h2 className="text-center py-10">
          User Not LoggedIn <br />
          Redirecting to <em>Home page</em> in 2sec
        </h2>
      )}
    </main>
  );
};

export default Dashboard;
