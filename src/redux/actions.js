import { TOGGLE_FOO, CALL_FETCH_DONATIONS, FETCH_DONATIONS_FAIL, FETCH_DONATIONS_SUCC } from "./actionTypes";

export const toggleFoo = () => ({
  type: TOGGLE_FOO,
});

export const fetchDonations = () => {
  return dispatch => {
    dispatch({ type: CALL_FETCH_DONATIONS });

    setTimeout(()=>{
      console.log("finished");
      dispatch(fetchDonationsSucc({donations: []}));
    }, 2000);
  }
}

const fetchDonationsFail = error => ({
  type: FETCH_DONATIONS_FAIL,
  errorMessage: error.message
});

const fetchDonationsSucc = result => ({
  /* Include new donation! */
  type: FETCH_DONATIONS_SUCC,
});
