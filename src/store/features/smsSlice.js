import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../config/axios";

//Send SMS
export const sendSms = createAsyncThunk(
  "sms/sendSms",
  async (formData, { rejectWithValue }) => {
    try {
      const { data } = await api.post("/sms/send", formData);
      return data; // The Moolre response
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to send SMS"
      );
    }
  }
);



const smsSlice = createSlice({
  name: "sms",
  initialState: {
    loading: false,
    data: null,
    error: null,
    success: false,
  },
  reducers: {
    resetSmsState: (state) => {
      state.loading = false;
      state.data = null;
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendSms.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(sendSms.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.success = true;
      })
      .addCase(sendSms.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });
  },
});

export const { resetSmsState } = smsSlice.actions;
export default smsSlice.reducer;