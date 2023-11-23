import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCustomerStatistic = createAsyncThunk(
  "dashboard/statistic-customer",
  async (param) => {
    try {
      const response = await axios.get(
        `${process.env.API_URL}/dashboard/statistic-customer`,
        {
          headers: {
            Authorization: `Bearer ${param.token}`,
          },
        },
      );
      const res = response.data;
      const customerStatistic = res.data;
      return customerStatistic;
    } catch (error) {
      throw error;
    }
  },
);
export const getVolunteerStatistic = createAsyncThunk(
  "dashboard/statistic-volunteer",
  async (param) => {
    try {
      const response = await axios.get(
        `${process.env.API_URL}/dashboard/statistic-volunteer`,
        {
          headers: {
            Authorization: `Bearer ${param.token}`,
          },
        },
      );
      const res = response.data;
      const volunterStatistic = res.data;
      return volunterStatistic;
    } catch (error) {
      throw error;
    }
  },
);
export const getFundraisingStatistic = createAsyncThunk(
  "dashboard/statistic-fundraising",
  async (param) => {
    try {
      const response = await axios.get(
        `${process.env.API_URL}/dashboard/statistic-fundraising`,
        {
          headers: {
            Authorization: `Bearer ${param.token}`,
          },
        },
      );
      const res = response.data;
      const fundraisingStatistic = res.data;
      return fundraisingStatistic;
    } catch (error) {
      throw error;
    }
  },
);
