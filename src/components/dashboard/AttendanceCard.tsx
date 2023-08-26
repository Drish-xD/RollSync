import { Card } from '@nextui-org/card';
import { Chip } from '@nextui-org/chip';
import { Check, Clock } from 'react-feather';

const AttendanceCard = () => {
  return (
    <Card shadow="md" className="max-w-sm max-h-20 p-5 bg-background/50">
      <div className="flex flex-nowrap justify-between gap-5">
        <Chip startContent={<Clock />} variant="light" className="whitespace-nowrap">
          March 21, 2023
        </Chip>
        <span>
          <Chip startContent={<Check />} size="sm" variant="faded" color="success">
            Present
          </Chip>
        </span>
      </div>
    </Card>
  );
};

export default AttendanceCard;
