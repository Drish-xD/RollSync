interface AttendanceRecord {
  user_id: number;
  date: string;
  status: number;
}
interface UserType {
  user_id: number;
  fname: string;
  lname: string;
  class: number;
  section: string;
  email: string;
}

export type { AttendanceRecord, UserType };
