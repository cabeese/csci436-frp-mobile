import { combineReducers } from "redux";

import existingDonations from "./existing-donations";
import claim from "./claim";
import newDonation from "./new-donation";
import user from "./user"

export default combineReducers({ user, newDonation, existingDonations, claim });
