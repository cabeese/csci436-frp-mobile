import { TOGGLE_FOO, CALL_FETCH_DONATIONS, FETCH_DONATIONS_FAIL, FETCH_DONATIONS_SUCC } from "./actionTypes";

const ROOT_URL = "https://foodbanks-staging.herokuapp.com/mob/v1/donation/";

export const toggleFoo = () => ({
  type: TOGGLE_FOO,
});

export const fetchDonations = () => {
  return async (dispatch) => {
    dispatch({ type: CALL_FETCH_DONATIONS });

    const response = await fetch(ROOT_URL + "get-avail");
    if(response.ok){
      const donations = await response.json();
      dispatch(fetchDonationsSucc(donations));
    } else {
      dispatch(fetchDonationsFail(`Response was ${response.status}`));
    }
  }
}

const fetchDonationsFail = errorMessage => ({
  type: FETCH_DONATIONS_FAIL,
  errorMessage: errorMessage
});

const fetchDonationsSucc = donations => ({
  type: FETCH_DONATIONS_SUCC,
  donations,
});
