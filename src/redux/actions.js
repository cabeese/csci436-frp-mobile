import { TOGGLE_FOO, CALL_FETCH_DONATIONS, FETCH_DONATIONS_FAIL, FETCH_DONATIONS_SUCC, SET_ACTIVE_DONATION, CLAIM_DONATION_PART, CLAIM_DONATION_SUCC, CLAIM_DONATION_FAIL, NEW_DONATION_POST, NEW_DONATION_FAIL, NEW_DONATION_SUCC } from "./actionTypes";

const ROOT_URL = "https://foodbanks-staging.herokuapp.com/mob/v1/donation/";

export const toggleFoo = () => ({
  type: TOGGLE_FOO,
});

export const setActiveDonation = (id) => ({
  type: SET_ACTIVE_DONATION,
  id: id || 0,
});

export const claimDonationPart = (donationID, details) => {
  return async (dispatch) => {
    dispatch({type: CLAIM_DONATION_PART});

    const url = ROOT_URL + "claim-part";
    let data = {
      donationID,
      ...details[0]
    };
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if(response.ok){
      dispatch(claimDonationSucc());
      dispatch(fetchDonations());
    } else {
      dispatch(claimDonationFail(`Response was ${response.status}`));
    }
  }
}
const claimDonationSucc = () => ({
  type: CLAIM_DONATION_SUCC
});
const claimDonationFail = errorMessage => ({
  type: CLAIM_DONATION_FAIL,
  errorMessage
});

export const postDonation = (donation) => {
  return async dispatch => {
    dispatch({type: NEW_DONATION_POST});
    const url = ROOT_URL + "claim-part";
    let body = JSON.stringify(donation);
    console.log(body);
    return;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: body,
    });
    if(response.ok){
      dispatch(newDonationSucc());
    } else {
      dispatch(newDonationFail(`Response was ${response.status}`));
    }
  }
}
const newDonationSucc = () => ({
  type: NEW_DONATION_SUCC
});
const newDonationFail = errorMessage => ({
  type: NEW_DONATION_FAIL,
  errorMessage
});

export const fetchDonations = () => {
  return async (dispatch) => {
    dispatch({ type: CALL_FETCH_DONATIONS });

    const response = await fetch(ROOT_URL + "get-avail?includeItems=true");
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
