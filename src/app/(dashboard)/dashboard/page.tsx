'use client';

import { AttendanceView, UserDetails } from '@/components';
import { AttendanceRecord } from '@/types';
import { Divider } from '@nextui-org/divider';
import { Spacer } from '@nextui-org/spacer';
import { useAuth } from 'contexts/auth';
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { useEffect, useLayoutEffect, useState } from 'react';
import { getAttendanceHistory, markAttendance } from 'utils/attendance';

const Dashboard = () => {
  const router = useRouter();
  const { isLoggedIn } = useAuth();

  const userId: number = Number(getCookie('user')?.toString());
  const [history, setHistory] = useState<AttendanceRecord[]>([]);

  // Fetching Attendance history here
  const fetchData = async () => setHistory(await getAttendanceHistory(userId));
  useEffect(() => {
    fetchData();
  }, []);

  // Updating attendance when user marked present
  const handleAttendance = async () => {
    await markAttendance(userId);
    fetchData();
  };

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
          <UserDetails handleAttendance={handleAttendance} />
          <Divider className="my-10 md:my-20 w-11/12 mx-auto" />
          {/* User Attandance Record */}
          <AttendanceView history={history} />
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
