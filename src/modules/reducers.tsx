import { connectRouter } from 'connected-react-router';
import layout from 'src/modules/layout/layoutReducers';
import auth from 'src/modules/auth/authReducers';
import tenant from 'src/modules/tenant/tenantReducers';
import plan from 'src/modules/plan/planReducers';
import user from 'src/modules/user/userReducers';
import auditLog from 'src/modules/auditLog/auditLogReducers';
import settings from 'src/modules/settings/settingsReducers';
import medicaltest from 'src/modules/medicaltest/medicaltestReducers';
import allergies from "src/modules/allergies/allergiesReducers";
import drugs  from "src/modules/drugs/drugsReducers";
import organization from "src/modules/organization/organizationReducers";
import branch from "src/modules/branch/branchReducers";
import patient from 'src/modules/patient/patientReducers';
import personalvitals from 'src/modules/personalvitals/personalvitalsReducers';
import { combineReducers } from 'redux';
import appointment from 'src/modules/appointment/appointmentReducers';
import wallet from 'src/modules/wallet/walletReducers';
import provider from 'src/modules/provider/list/providerListReducers';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    layout,
    auth,
    tenant,
    plan,
    user,
    auditLog,
    settings,
    drugs,
    allergies,
    medicaltest,
    organization,
    branch,
    patient,
    personalvitals,
    appointment,
    wallet,
    provider

  });
