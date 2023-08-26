'use client';

import { AttendanceRecord } from '@/types';
import { Card } from '@nextui-org/card';
import { Spacer } from '@nextui-org/spacer';
import { useEffect, useState } from 'react';
import { getAttendanceHistory } from 'utils/attendance';
import AttendanceCard from './AttendanceCard';

const AttendanceView = () => {
  const [history, setHistory] = useState<AttendanceRecord[]>([]);

  const fetchData = async () => {
    const data: AttendanceRecord[] = await getAttendanceHistory(101);
    setHistory(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Card
      isBlurred
      className="relative bg-background/60 dark:bg-default-100/50 w-full max-w-7xl p-5 mx-auto"
      shadow="sm"
    >
      <h2 className="text-3xl">
        <span className="inline-block h-8 w-2 rounded-lg bg-primary mr-3 -mb-1" />
        Attendance History
      </h2>
      <Spacer y={5} />

      <section className="flex justify-evenly content-center gap-4 flex-col md:flex-row flex-wrap">
        {history.map(({ date, status }: AttendanceRecord, index: number) => (
          <AttendanceCard date={new Date(date)} status={status} key={index} />
        ))}
      </section>
    </Card>
  );
};

export default AttendanceView;
