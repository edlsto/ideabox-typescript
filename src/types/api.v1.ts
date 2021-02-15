export interface List {
  title: string;
  tasks: { description: string; completed: boolean; id: number }[];
  id: number;
  urgent: boolean;
}
