export const appReducer = (initialState, action) => {
  switch (action.type) {
    case "[ADM TASKS] SET TASKS":
      return { tasks: action.payload };

    case "[ADM TASKS] CREATE TASK":
      return { tasks: [...initialState.tasks, action.payload] };

    case "[ADM TASKS] DELETE TASK":
      return {
        tasks: initialState.tasks.filter((task) => task.id !== action.payload),
      };

    case "[ADM TASKS] UPDATE TASK":
      const updateTask = action.payload;
      return {
        tasks: initialState.tasks.map((task) => {
          if (task.id === action.payload.id) {
            return {
              ...task,
              title: updateTask.title,
              description: updateTask.description,
            };
          }
          return task;
        }),
      };

    default:
      return initialState.tasks;
  }
};
