const addNote = (name: string) => {
  return {
    type: "addNote",
    payload: name,
  };
};

const delNote = (id: number) => {
  return {
    type: "delNote",
    payload: id,
  };
};

export { addNote, delNote };
