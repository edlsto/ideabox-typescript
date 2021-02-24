export interface List {
  title: string;
  tasks: Task[];
  id: number;
  urgent: boolean;
}

export interface Task {
  description: string;
  completed: boolean;
  id: number;
}
