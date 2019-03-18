import { TOGGLE_FOO, FETCH_DONATIONS } from "./actionTypes";

export const toggleFoo = () => ({
  type: TOGGLE_FOO,
});

export const fetchDonations = () => ({
  type: FETCH_DONATIONS
});
