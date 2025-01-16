export interface Task {
  id: string;
  title: string;
  description: string;
  category: "Work" | "Personal" | "Urgent";
  completed: boolean;
  deadline: string; // ISO string for calendar integration
}
