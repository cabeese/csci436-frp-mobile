import { combineReducers } from "redux";

import existingDonations from "./existing-donations";
import claim from "./claim";
import user from "./user"

export default combineReducers({ user, existingDonations, claim });
