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

  useLayoutEffect(() => {
    if (!isLoggedIn) {
      router.push('/');
    }
  }, [isLoggedIn]);

  return (
    <main className="h-screen w-full px-5">
      {isLoggedIn ? (
        <>
          {/* User Details */}
          <UserDetails />
          <Spacer y={10} />
          <Divider />
          <Spacer y={10} />
          {/* User Attandance Record */}
          <AttendanceView />
          <Spacer y={10} />
        </>
      ) : (
        <h2 className="text-center py-10">User Not LoggedIn</h2>
      )}
    </main>
  );
};

export default Dashboard;
