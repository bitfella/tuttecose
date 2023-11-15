const throwError = (response: { status: number; statusText: string }) => {
  throw new Error(`${response.status} ${response.statusText}`);
};

const api = {
  getTodos: async <T>(): Promise<T> => {
    const response = await fetch(`http://tuttecose.loc/api/todos/`);
    if (!response.ok) throwError(response);
    const data = (await response.json()) as Promise<T>;

    return data;
  },
  patchTodo: async <T>(id: number, status: number): Promise<T> => {
    const response = await fetch(`http://tuttecose.loc/api/todos/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        status: status,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (!response.ok) throwError(response);
    const data = (await response.json()) as Promise<T>;

    return data;
  },
  deleteTodo: async <T>(id: number): Promise<T> => {
    const response = await fetch(`http://tuttecose.loc/api/todos/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (!response.ok) throwError(response);
    const data = (await response.json()) as Promise<T>;

    return data;
  },
};

export default api;
