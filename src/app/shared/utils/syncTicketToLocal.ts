export const syncTicketToLocal = <T>(callback: (todos: T[]) => T[]): void => {
  const todoString = localStorage.getItem('todos');
  const todoObjects: T[] = JSON.parse(todoString || '[]');
  const newTodoObjects: T[] = callback(todoObjects);
  localStorage.setItem('todos', JSON.stringify(newTodoObjects));
};
