import { combineReducers } from "redux";

import existingDonations from "./existing-donations";
import user from "./user"

export default combineReducers({ user, existingDonations });
