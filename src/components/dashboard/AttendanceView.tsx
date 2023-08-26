import { Card } from '@nextui-org/card';
import { Spacer } from '@nextui-org/spacer';
import AttendanceCard from './AttendanceCard';

const AttendanceView = () => {
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
        <AttendanceCard />
        <AttendanceCard />
        <AttendanceCard />
        <AttendanceCard />
      </section>
    </Card>
  );
};

export default AttendanceView;
