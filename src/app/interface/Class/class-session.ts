export interface ClassSession {
  id: string;
  title: string;
  startTime: string; 
  endTime: string;   
  type: 'individual' | 'group';
  location?: string;
  notes?: string;
  userId: string;
}