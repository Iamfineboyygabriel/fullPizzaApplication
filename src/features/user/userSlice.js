// Remove the import statement for action
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAddress } from '../../services/apiGeocoding';

// Helper function to get the user's geolocation position
function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

// Async thunk for fetching the user's address
export const fetchAddress = createAsyncThunk(
  'user/fetchAddress',
  async function () {
    // 1) Get the user's geolocation position
    const positionObj = await getPosition();
    const position = {
      latitude: positionObj.coords.latitude,
      longitude: positionObj.coords.longitude,
    };

    // 2) Use a reverse geocoding API to get a description of the user's address
    const addressObj = await getAddress(position);
    const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

    // 3) Return an object with the data of interest
    return { position, address };
  },
);

// Initial state for the user slice
const initialState = {
  username: '',
  status: 'idle',
  position: {},
  address: '',
  error: '',
};

// User slice with reducer and extra reducers for handling async thunk
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Reducer to update the username
    updateName(state, action) {
      state.username = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchAddress.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.position = action.payload.position;
        state.address = action.payload.address;
        state.status = 'idle';
      })
      .addCase(fetchAddress.rejected, (state) => {
        state.status = 'error';
        state.error =
          'There was a problem getting your address, mke sure to fill this field in order to complete your order';
      }),
});

// Export the generated action creators and reducer
export const { updateName } = userSlice.actions;
export default userSlice.reducer;

/**1) set initial state in the  redux and create slice
 * 2) then head to the store.js file in the src
 * 3) head to the main.js file and wrap the app component in the provider tag
 * 4) then its connected
 * to test this, we use useSelector to get data from redux store
 *
 * 5)we use action creator to update state, so head to create user
 */
