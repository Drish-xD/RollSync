import { Card } from '@nextui-org/card';
import { Chip } from '@nextui-org/chip';
import { Check, Clock, File, X } from 'react-feather';

const statusLabels = ['Absent', 'Present', 'Leave'];
const statusColors = ['danger', 'success', 'warning'];
const statusIcon = [<X size={18} />, <Check size={18} />, <File size={15} />];

const AttendanceCard = ({ date, status }: { date: Date; status: number }) => {
  return (
    <Card shadow="md" className="max-w-sm max-h-20 p-5 bg-background/50">
      <div className="flex flex-nowrap justify-between gap-5">
        <Chip startContent={<Clock />} variant="light" className="whitespace-nowrap">
          {date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </Chip>
        <span>
          <Chip
            startContent={statusIcon[status]}
            size="sm"
            variant="faded"
            color={statusColors[status] as 'danger' | 'success' | 'warning'}
          >
            {statusLabels[status]}
          </Chip>
        </span>
      </div>
    </Card>
  );
};

export default AttendanceCard;
