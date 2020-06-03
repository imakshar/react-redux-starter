import { createSlice } from "@reduxjs/toolkit";
let id = 0;
const slice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {
    // actions => action handlers
    bugAdded: (bugs, action) => {
      bugs.push({
        id: ++id,
        text: action.payload.text,
        resolved: false,
      });
    },
    bugResolved: (bugs, action) => {
      const index = bugs.findIndex((bug) => bug.id === action.payload);
      console.log(index);

      bugs[index].resolved = true;
    },
  },
});

export const { bugAdded, bugResolved } = slice.actions;
export default slice.reducer;
