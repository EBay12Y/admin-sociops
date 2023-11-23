import { createSlice } from "@reduxjs/toolkit";
import {
  getUserInfo,
  retrieveDaftarAkunPengguna,
  retrieveRecentFundraisingUser,
  retrieveRecentUser,
  retrieveRecentVolunteerUser,
  retrievePenggunaFundraising,
  retrievePenggunaVolunteer,
} from "./userThunk";

const initialState = {
  user: {},
  penggunaVolunteer: [],
  token: "",
  daftarAkunPengguna: [],
  recentUser: [],
  recentFundraisingUser: [],
  recentVolunteerUser: [],
  typeDaftarAkunPengguna: "",
  typeRecentUser: "",
  typeRecentFundraisingUser: "",
  typeRecentVolunteerUser: "",
  type: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      return {
        ...state,
        token: action.payload,
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
      //#region retrieve user info
      .addCase(getUserInfo.pending, (state, action) => {
        return {
          ...state,
          type: action.type,
        };
      })
      .addCase(getUserInfo.fulfilled, (state, action) => {
        return {
          ...state,
          user: action.payload,
          type: action.type,
        };
      })
      .addCase(getUserInfo.rejected, (state, action) => {
        return {
          ...state,
          type: action.type,
        };
      })
      //#endregion retrieve user info
      //#region retrieve riwayat program fundraising
      .addCase(retrievePenggunaVolunteer.pending, (state, action) => {
        return {
          ...state,
          type: action.type,
        };
      })
      .addCase(retrievePenggunaVolunteer.fulfilled, (state, action) => {
        return {
          ...state,
          penggunaVolunteer: action.payload,
          type: action.type,
        };
      })
      .addCase(retrievePenggunaVolunteer.rejected, (state, action) => {
        return {
          ...state,
          type: action.type,
        };
      })
      //#endregion retrieve riwayat program fundraising
      //#region retrieve daftar akun pengguna
      .addCase(retrieveDaftarAkunPengguna.pending, (state, action) => {
        return {
          ...state,
          typeDaftarAkunPengguna: action.type,
        };
      })
      .addCase(retrieveDaftarAkunPengguna.fulfilled, (state, action) => {
        return {
          ...state,
          daftarAkunPengguna: action.payload,
          typeDaftarAkunPengguna: action.type,
        };
      })
      .addCase(retrieveDaftarAkunPengguna.rejected, (state, action) => {
        return {
          ...state,
          typeDaftarAkunPengguna: action.type,
        };
      })
      //#endregion retrieve daftar akun pengguna
      //#region retrieve pengguna baru
      .addCase(retrieveRecentUser.pending, (state, action) => {
        return {
          ...state,
          typeRecentUser: action.type,
        };
      })
      .addCase(retrieveRecentUser.fulfilled, (state, action) => {
        return {
          ...state,
          recentUser: action.payload,
          typeRecentUser: action.type,
        };
      })
      .addCase(retrieveRecentUser.rejected, (state, action) => {
        return {
          ...state,
          typeRecentUser: action.type,
        };
      })
      //#endregion retrieve pengguna baru
      //#region retrieve pengguna fundraising
      .addCase(retrieveRecentFundraisingUser.pending, (state, action) => {
        return {
          ...state,
          typeRecentFundraisingUser: action.type,
        };
      })
      .addCase(retrieveRecentFundraisingUser.fulfilled, (state, action) => {
        return {
          ...state,
          recentFundraisingUser: action.payload,
          typeRecentFundraisingUser: action.type,
        };
      })
      .addCase(retrieveRecentFundraisingUser.rejected, (state, action) => {
        return {
          ...state,
          typeRecentFundraisingUser: action.type,
        };
      })
      //#endregion retrieve pengguna fundraising
      //#region retrieve pengguna volunteer
      .addCase(retrieveRecentVolunteerUser.pending, (state, action) => {
        return {
          ...state,
          typeRecentVolunteerUser: action.type,
        };
      })
      .addCase(retrieveRecentVolunteerUser.fulfilled, (state, action) => {
        return {
          ...state,
          recentVolunteerUser: action.payload,
          typeRecentVolunteerUser: action.type,
        };
      })
      .addCase(retrieveRecentVolunteerUser.rejected, (state, action) => {
        return {
          ...state,
          typeRecentVolunteerUser: action.type,
        };
      })
      //#endregion retrieve pengguna volunteer
      //#region retrieve riwayat program fundraising
      .addCase(retrievePenggunaFundraising.pending, (state, action) => {
        return {
          ...state,
          type: action.type,
        };
      })
      .addCase(retrievePenggunaFundraising.fulfilled, (state, action) => {
        return {
          ...state,
          penggunaFundraising: action.payload,
          type: action.type,
        };
      })
      .addCase(retrievePenggunaFundraising.rejected, (state, action) => {
        return {
          ...state,
          type: action.type,
        };
      });
    //#endregion retrieve riwayat program fundraising
  },
});

export const { actions: userAction, reducer: userReducer } = userSlice;
export const { login, logout } = userAction;

export default userReducer;
