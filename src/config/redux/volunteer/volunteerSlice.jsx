import { createSlice } from "@reduxjs/toolkit";
import {
  retrieveDetailVolunteer,
  retrieveListProgramVolunteer,
  retrievePengajuanProgramVolunteer,
  retrieveRiwayatProgramVolunteer,
} from "./volunteerThunk";

const initialState = {
  volunteerDetail: {},
  riwayatProgramVolunteer: [],
  listProgram: [],
  pengajuanProgram: [],

  type: "",
};

const volunteerSlice = createSlice({
  name: "volunteer",
  initialState,
  reducers: {
    addDetailVolunteer: (state, action) => {
      return {
        ...state,
        volunteerDetail: action.payload,
      };
    },

    logout: (state) => {
      return {
        ...state,
        token: "",
      };
    },
  },

  extraReducers: (builder) => {
    builder
      //#region retrieve detail volunteer
      .addCase(retrieveDetailVolunteer.pending, (state, action) => {
        return {
          ...state,
          type: action.type,
        };
      })
      .addCase(retrieveDetailVolunteer.fulfilled, (state, action) => {
        return {
          ...state,
          volunteerDetail: action.payload,
          type: action.type,
        };
      })
      .addCase(retrieveDetailVolunteer.rejected, (state, action) => {
        return {
          ...state,
          type: action.type,
        };
      })
      //#endregion retrieve detail Volunteer

      //#region retrieve riwayat program volunteer
      .addCase(retrieveRiwayatProgramVolunteer.pending, (state, action) => {
        return {
          ...state,
          type: action.type,
        };
      })
      .addCase(retrieveRiwayatProgramVolunteer.fulfilled, (state, action) => {
        return {
          ...state,
          riwayatProgramVolunteer: action.payload,
          type: action.type,
        };
      })
      .addCase(retrieveRiwayatProgramVolunteer.rejected, (state, action) => {
        return {
          ...state,
          type: action.type,
        };
      })
      //#endregion retrieve riwayat program Volunteer

      //#region retrieve list program volunteer
      .addCase(retrieveListProgramVolunteer.pending, (state, action) => {
        return {
          ...state,
          type: action.type,
        };
      })
      .addCase(retrieveListProgramVolunteer.fulfilled, (state, action) => {
        return {
          ...state,
          listProgram: action.payload,
          type: action.type,
        };
      })
      .addCase(retrieveListProgramVolunteer.rejected, (state, action) => {
        return {
          ...state,
          type: action.type,
        };
      })
      //#endregion retrieve list program Volunteer

      //#region retrieve pengajuan program volunteer
      .addCase(retrievePengajuanProgramVolunteer.pending, (state, action) => {
        return {
          ...state,
          type: action.type,
        };
      })
      .addCase(retrievePengajuanProgramVolunteer.fulfilled, (state, action) => {
        return {
          ...state,
          pengajuanProgram: action.payload,
          type: action.type,
        };
      })
      .addCase(retrievePengajuanProgramVolunteer.rejected, (state, action) => {
        return {
          ...state,
          type: action.type,
        };
      });
    //#endregion retrieve pengajuan program Volunteer
  },
});

export const { actions: volunteerAction, reducer: volunteerReducer } =
  volunteerSlice;
export const { addDetailVolunteer } = volunteerAction;

export default volunteerReducer;
