import api from "./api";

export const getAllTasks = async () => {
  try {
    const tasks = [];
    const response = await api.get(`/tasks.json`);

    for (key in response.data) {
      const task = {
        ...response.data[key],
        id: key,
      };
      tasks.push(task);
    }
    return tasks;
  } catch (err) {
    console.log(err);
  }
};
