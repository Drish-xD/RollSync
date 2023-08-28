import type { AttendanceRecord } from '@/types';
import axios from 'axios';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_JSON_URL;

// Async Function to get all the attendance details of a student
const getAttendanceHistory = async (userId: number): Promise<AttendanceRecord[]> => {
  const res = await axios.get<AttendanceRecord[]>(`/attendance`, {
    params: {
      user_id: userId
    }
  });

  return res.data;
};

// Function to check if attendance is already marked for a specific date
const checkAttendance = async (userId: number): Promise<boolean> => {
  const { data } = await axios.get('/attendance', {
    params: {
      user_id: userId,
      date: new Date().toLocaleDateString()
    }
  });

  return data.length !== 0;
};

// mark the attendance for the today
const markAttendance = async (userId: number): Promise<void> => {
  const today = new Date().toLocaleDateString();

  if (await checkAttendance(userId)) return;

  const attendanceData = {
    user_id: userId,
    date: today,
    status: 1
  };

  await axios.post('/attendance', attendanceData);
};

export { checkAttendance, getAttendanceHistory, markAttendance };
