import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { fetchUniversitiesData } from "./universitiesApi";

import { IUniversity } from "@/interfaces/university.interface";
import { StatusType } from "@/types/status.type";

interface IInitialState {
  data: IUniversity[] | null;
  status: StatusType;
  checked: IUniversity["name"][];
}

const initialState: IInitialState = {
  data: null,
  status: "idle",
  checked: [],
};

export const fetchUniversities = createAsyncThunk(
  "universities/fetchUniversities",
  async (country: string) => {
    const data: IUniversity = await fetchUniversitiesData(country);
    return data;
  }
);

const universitiesSlice = createSlice({
  name: "universities",
  initialState,
  reducers: {
    checkUniversities: (state, action: PayloadAction<IUniversity["name"]>) => {
      const universityName = action.payload;
      state.checked.includes(universityName)
        ? (state.checked = state.checked.filter(
            (name) => name !== universityName
          ))
        : state.checked.push(universityName);
    },
    clearUniversitiesData: (state) => {
      state.data = null;
      state.checked = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUniversities.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchUniversities.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.data = action.payload;
          state.status = "succeeded";
        }
      )
      .addCase(fetchUniversities.rejected, (state) => {
        state.status = "failed";
      });
  },
});

// Actions
export const { clearUniversitiesData, checkUniversities } =
  universitiesSlice.actions;

// Selects

interface ISelect<T> {
  (state: { universities: IInitialState }): T;
}

export const selectUniversitiesData: ISelect<IInitialState["data"]> = (state) =>
  state.universities.data;

export const selectUniversitiesStatus: ISelect<IInitialState["status"]> = (
  state
) => state.universities.status;

export const selectUniversitiesChecked: ISelect<IInitialState["checked"]> = (
  state
) => state.universities.checked;

// Reducer
export default universitiesSlice.reducer;
