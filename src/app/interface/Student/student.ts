export interface Student {
  id: string;
  fullName: string;
  email: string;
  phoneNumber: string; 
  birthdate: Date | null;
  notes?: string | null;
  eloFIDE?: number | null;
  eloOnline?: number | null;
}

