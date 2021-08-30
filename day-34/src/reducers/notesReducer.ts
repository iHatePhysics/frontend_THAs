import { bindActionCreators } from "redux";
interface addnoteAction {
  type: string;
  payload: string;
}

interface delNoteAction {
  type: string;
  payload: string;
}

type ActionType = delNoteAction | addnoteAction;

const notesReducer = (state: any = [], action: ActionType) => {
  switch (action.type) {
    case "addNote":
      return [...state, action.payload];
    case "delNote":
      return state.filter(
        (item: string, index: string) => index !== action.payload
      );
    default:
      return state;
  }
};
export default notesReducer;
