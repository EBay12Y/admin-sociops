import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUserInfo = createAsyncThunk(
  "user/getUserInfo",
  async (param) => {
    try {
      const res = await axios.get(`${process.env.API_URL}/auth/userinfo`, {
        headers: {
          Authorization: `Bearer ${param.accessToken}`,
        },
      });
      const response = await res.data;
      const user = await response.data;
      return user;
    } catch (error) {
      throw error;
    }
  },
);
export const retrievePenggunaVolunteer = createAsyncThunk(
  "user/retrievePenggunaVolunteer",
  async (param) => {
    try {
      const response = await axios.get(
        `${process.env.API_URL}/users/participants`,
        {
          params: {
            page: param.currentPage + 1,
            page_size: 5,
            sort: "created_at_desc",
            campaign_type: "VOLUNTEER",
          },
          headers: {
            Authorization: `Bearer ${param.token}`,
          },
        },
      );
      const res = response.data;
      const data = res.data;

      return data;
    } catch (error) {
      throw error;
    }
  },
);
export const retrieveDaftarAkunPengguna = createAsyncThunk(
  "user/retrieveDaftarAkunPengguna",
  async (param) => {
    try {
      const res = await axios.get(`${process.env.API_URL}/users`, {
        params: {
          page: param.currentPage + 1,
          page_size: 5,
          sort: "created_at_desc",
        },
        headers: {
          Authorization: `Bearer ${param.token}`,
        },
      });
      const response = await res.data;
      const daftarAkunPengguna = await response.data;
      return daftarAkunPengguna;
    } catch (error) {
      throw error;
    }
  },
);
export const retrieveRecentUser = createAsyncThunk(
  "user/retrieveRecentUser",
  async (param) => {
    try {
      const res = await axios.get(`${process.env.API_URL}/users`, {
        params: {
          page: 1,
          page_size: 4,
          sort: "created_at_desc",
        },
        headers: {
          Authorization: `Bearer ${param.token}`,
        },
      });
      const response = await res.data;
      const recentUser = await response.data;
      return recentUser;
    } catch (error) {
      throw error;
    }
  },
);
export const retrieveRecentFundraisingUser = createAsyncThunk(
  "user/retrieveRecentFundraisingUser",
  async (param) => {
    try {
      const res = await axios.get(`${process.env.API_URL}/users/participants`, {
        params: {
          page: 1,
          page_size: 4,
          sort: "created_at_desc",
          campaign_type: "FUNDRAISING",
        },
        headers: {
          Authorization: `Bearer ${param.token}`,
        },
      });
      const response = await res.data;
      const recentFundraisingUser = await response.data;
      return recentFundraisingUser;
    } catch (error) {
      throw error;
    }
  },
);
export const retrieveRecentVolunteerUser = createAsyncThunk(
  "user/retrieveRecentVolunteerUser",
  async (param) => {
    try {
      const res = await axios.get(`${process.env.API_URL}/users/participants`, {
        params: {
          page: 1,
          page_size: 4,
          sort: "created_at_desc",
          campaign_type: "VOLUNTEER",
        },
        headers: {
          Authorization: `Bearer ${param.token}`,
        },
      });
      const response = await res.data;
      const recentVolunteerUser = await response.data;
      return recentVolunteerUser;
    } catch (error) {
      throw error;
    }
  },
);
export const retrievePenggunaFundraising = createAsyncThunk(
  "user/retrievePenggunaFundraising",
  async (param) => {
    try {
      const response = await axios.get(
        `${process.env.API_URL}/users/participants`,
        {
          params: {
            page: param.currentPage + 1,
            page_size: 5,
            sort: "created_at_desc",
            campaign_type: "FUNDRAISING",
          },
          headers: {
            Authorization: `Bearer ${param.token}`,
          },
        },
      );
      const res = response.data;
      const data = res.data;

      return data;
    } catch (error) {
      throw error;
    }
  },
);
