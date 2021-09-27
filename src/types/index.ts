export type Status = {
  id: string;
  name: string;
};

export type Task = {
  id: string;
  description: string;
  status: Status["id"];
};
