import {
  createAsyncThunk,
  createSlice,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import { api } from "../../config/axios";

//validate name
export const validateName = createAsyncThunk(
  "transfer/validateName",
  async (FormData, { rejectWithValue }) => {
    try {
      const { data } = await api.post("/transfer/validate-name", FormData);
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to validate name"
      );
    }
  }
);

//initiate transfer
export const initiateTransfer = createAsyncThunk(
  "transfer/initiateTransfer",
  async (formData, { rejectWithValue }) => {
    try {
      const { data } = await api.post("transfer/initiate", formData);
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const checkTransferStatus = createAsyncThunk(
  "transfer/checkTransferStatus",
  async (formData, { rejectWithValue }) => {
    try {
      const { data } = await api.post("/transfer/status", formData);
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const transferSlice = createSlice({
  name: "transfer",
  initialState: {
    loading: false,
    data: null,
    error: null,
    success: false,
  },

  //Resets the Redux state for your transfer slice back to its initial “clean” state. after performing an operation  Redux state might hold data or error messages. so this is called to clear everything.
  reducers: {
    resetTransferState: (state) => {
      state.loading = false;
      state.data = null;
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(validateName.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(validateName.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.data = action.payload;
      })
      .addCase(validateName.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //initiate transfer
      .addCase(initiateTransfer.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(initiateTransfer.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.data = action.payload;
      })
      .addCase(initiateTransfer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //check status
      .addCase(checkTransferStatus.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(checkTransferStatus.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.data = action.payload;
      })
      .addCase(checkTransferStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetTransferState } = transferSlice.actions;
export default transferSlice.reducer;
