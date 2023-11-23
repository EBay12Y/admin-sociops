import {
  getCustomerStatistic,
  getFundraisingStatistic,
  getVolunteerStatistic,
} from "./statisticThunk";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  customerStatistic: {},
  volunteerStatistic: {},
  fundraisingStatistic: {},
  error: "",
};

const statisticSlice = createSlice({
  name: "statistic",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCustomerStatistic.fulfilled, (state, action) => {
        return {
          ...state,
          customerStatistic: action.payload,
        };
      })
      .addCase(getCustomerStatistic.rejected, (state, action) => {
        return {
          ...state,
          error: action.error,
        };
      })
      .addCase(getVolunteerStatistic.fulfilled, (state, action) => {
        return {
          ...state,
          volunteerStatistic: action.payload,
        };
      })
      .addCase(getVolunteerStatistic.rejected, (state, action) => {
        return {
          ...state,
          error: action.error,
        };
      })
      .addCase(getFundraisingStatistic.fulfilled, (state, action) => {
        return {
          ...state,
          fundraisingStatistic: action.payload,
        };
      })
      .addCase(getFundraisingStatistic.rejected, (state, action) => {
        return {
          ...state,
          error: action.error,
        };
      });
  },
});

export const { actions: statisticAction, reducer: statisticReducer } =
  statisticSlice;
export default statisticSlice;
