import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const retrieveDetailVolunteer = createAsyncThunk(
  "volunteer/retrieveDetailVolunteer",
  async (param) => {
    try {
      const req = await axios.get(
        `${process.env.API_URL}/campaigns/${param.id}`,
        {
          headers: {
            Authorization: `Bearer ${param.token}`,
          },
        },
      );

      const res = await req.data;
      const data = await res.data;
      return data;
    } catch (error) {
      throw error;
    }
  },
);

export const retrieveRiwayatProgramVolunteer = createAsyncThunk(
  "volunteer/retrieveRiwayatProgramVolunteer",
  async (param) => {
    try {
      const response = await axios.get(`${process.env.API_URL}/campaigns`, {
        params: {
          page: param.currentPage + 1,
          page_size: 5,
          type: "VOLUNTEER",
          status: "ACCEPTED,REJECTED",
          sort: "created_at_desc",
        },
        headers: {
          Authorization: `Bearer ${param.token}`,
        },
      });
      const res = response.data;
      const data = res.data;

      return data;
    } catch (error) {
      throw error;
    }
  },
);

export const retrieveListProgramVolunteer = createAsyncThunk(
  "volunteer/retrieveListProgramVolunteer",
  async (param) => {
    try {
      const response = await axios.get(`${process.env.API_URL}/campaigns`, {
        params: {
          page: param.currentPage + 1,
          page_size: 5,
          type: "VOLUNTEER",
          status: "ACCEPTED",
          sort: "created_at_desc",
        },
        headers: {
          Authorization: `Bearer ${param.token}`,
        },
      });
      const res = response.data;
      const data = res.data;

      return data;
    } catch (error) {
      throw error;
    }
  },
);

export const retrievePengajuanProgramVolunteer = createAsyncThunk(
  "volunteer/retrievePengajuanProgramVolunteer",
  async (param) => {
    try {
      const response = await axios.get(`${process.env.API_URL}/campaigns`, {
        params: {
          page: param.currentPage + 1,
          page_size: 5,
          type: "VOLUNTEER",
          status: "PENDING",
          sort: "created_at_desc",
        },
        headers: {
          Authorization: `Bearer ${param.token}`,
        },
      });
      const res = response.data;
      const data = res.data;

      return data;
    } catch (error) {
      throw error;
    }
  },
);
