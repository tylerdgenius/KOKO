import Permissions from 'src/security/permissions';
import config from 'src/config';
const permissions = Permissions.values;

const privateRoutes = [
  {
    path: '/',
    loader: () =>
      import('src/view/dashboard/DashboardPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/Dashboard',
    loader: () =>
      import('src/view/Admin/dashboard/DashboardPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/EMR',
    loader: () =>
      import('src/view/EMR/EMRPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/EMR/:id',
    loader: () =>
      import('src/view/EMR/EMRDetails'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/setup',
    loader: () =>
      import('src/view/setup/SetupFormPage'),
    permissionRequired: permissions.settingsEdit,
  },

  {
    path: '/patient-report',
    loader: () =>
      import('src/view/patient/PatientReportFormPage'),
    permissionRequired: null,
  },
  {
    path: '/report',
    loader: () =>
      import('src/view/report/ReportListPage'),
    permissionRequired: permissions.settingsEdit,
  },
  {
    path: '/report/:id',
    loader: () =>
      import('src/view/report/ReportDetailsPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/consultations',
    loader: () => import('src/view/consultations/AvailableConsultantsPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/consultations/:id',
    loader: () => import('src/view/consultations/AvailableConsultantsPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/forums',
    loader: () => import('src/view/forums/ForumPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/profile',
    loader: () => import('src/view/auth/ProfileFormPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/password-change',
    loader: () =>
      import('src/view/auth/PasswordChangeFormPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/tenant',
    loader: () =>
      import('src/view/tenant/list/TenantListPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/tenant/new',
    loader: () =>
      import('src/view/tenant/form/TenantFormPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/tenant/:id/edit',
    loader: () =>
      import('src/view/tenant/form/TenantFormPage'),
    permissionRequired: null,
    exact: true,
  },

  config.isPlanEnabled && {
    path: '/plan',
    loader: () => import('src/view/plan/PlanPage'),
    permissionRequired: permissions.planRead,
    exact: true,
  },

  {
    path: '/user',
    loader: () => import('src/view/user/list/UserPage'),
    permissionRequired: permissions.userRead,
    exact: true,
  },

  {
    path: '/user/new',
    loader: () => import('src/view/user/new/UserNewPage'),
    permissionRequired: permissions.userCreate,
    exact: true,
  },

  {
    path: '/user/importer',
    loader: () =>
      import('src/view/user/importer/UserImporterPage'),
    permissionRequired: permissions.userImport,
    exact: true,
  },
  {
    path: '/user/:id/edit',
    loader: () => import('src/view/user/edit/UserEditPage'),
    permissionRequired: permissions.userEdit,
    exact: true,
  },
  {
    path: '/user/:id',
    loader: () => import('src/view/user/view/UserViewPage'),
    permissionRequired: permissions.userRead,
    exact: true,
  },

  {
    path: '/audit-logs',
    loader: () => import('src/view/auditLog/AuditLogPage'),
    permissionRequired: permissions.auditLogRead,
  },

  {
    path: '/settings',
    loader: () =>
      import('src/view/settings/SettingsFormPage'),
    permissionRequired: permissions.settingsEdit,
  },

  // Onboarding
  {
    path: '/onboarding',
    loader: () => import("src/view/onboarding/list/OnboardingListPage"),
    permissionRequired: null,
    exact: true,
  },
  {
    path: "/onboarding/new",
    loader: () => import("src/view/onboarding/form/OnboardingFormPage"),
    permissionRequired: null,
    exact: true,
  },
  {
    path: "/onboarding/importer",
    loader: () => import("src/view/onboarding/importer/OnboardingImporterPage"),
    permissionRequired: null,
    exact: true,
  },
  {
    path: "/onboarding/:id/edit",
    loader: () => import("src/view/onboarding/form/OnboardingFormPage"),
    permissionRequired: null,
    exact: true,
  },
  {
    path: "/onboarding/:id",
    loader: () => import("src/view/onboarding/view/OnboardingViewPage"),
    permissionRequired: null,
    exact: true,
  },
    // exisiting Hospital
    {
      path: "/existinghospital",
      loader: () => import("src/view/onboarding/Components/ExistingHospital"),
      permissionRequired: null,
      exact: true,
    },
    //default Hospital
  {
    path: "/defaulthospital",
    loader: () => import("src/view/onboarding/Components/defaulthospital"),
    permissionRequired: null,
    exact: true,
  },
  //create neew  Hospital
  {
    path: "/createhospital",
    loader: () => import("src/view/onboarding/Components/createhospital"),
    permissionRequired: null,
    exact: true,
  },

  //Allergies
  {
    path: "/allergies",
    loader: () => import("src/view/allergies/list/AllergiesListPage"),
    permissionRequired: null,
    exact: true,
  },
  {
    path: "/allergies/new",
    loader: () => import("src/view/allergies/form/AllergiesFormPage"),
    permissionRequired: null,
    exact: true,
  },
  {
    path: "/allergies/importer",
    loader: () => import("src/view/allergies/importer/AllergiesImporterPage"),
    permissionRequired: null,
    exact: true,
  },
  {
    path: "/allergies/:id/edit",
    loader: () => import("src/view/allergies/form/AllergiesFormPage"),
    permissionRequired: null,
    exact: true,
  },
  {
    path: "/allergies/:id",
    loader: () => import("src/view/allergies/view/AllergiesViewPage"),
    permissionRequired: null,
    exact: true,
  },
  //Appointment
  {
    path: "/appointment",
    loader: () => import("src/view/appointment/list/AppointmentListPage"),
    permissionRequired: null,
    exact: true,
  },
  {
    path: "/appointment/new",
    loader: () => import("src/view/appointment/form/AppointmentFormPage"),
    permissionRequired: null,
    exact: true,
  },
  {
    path: "/appointment/importer",
    loader: () => import("src/view/appointment/importer/AppointmentImporterPage"),
    permissionRequired: null,
    exact: true,
  },
  {
    path: "/appointment/:id/edit",
    loader: () => import("src/view/appointment/form/AppointmentFormPage"),
    permissionRequired: null,
    exact: true,
  },
  {
    path: "/appointment/:id",
    loader: () => import("src/view/appointment/view/AppointmentViewPage"),
    permissionRequired: null,
    exact: true,
  },
  //Drugs

  {
    path: "/drugs",
    loader: () => import("src/view/drugs/list/DrugsListPage"),
    permissionRequired: null,
    exact: true,
  },
  {
    path: "/drugs/new",
    loader: () => import("src/view/drugs/form/DrugsFormPage"),
    permissionRequired: null,
    exact: true,
  },
  {
    path: "/drugs/importer",
    loader: () => import("src/view/drugs/importer/DrugsImporterPage"),
    permissionRequired: null,
    exact: true,
  },
  {
    path: "/drugs/:id/edit",
    loader: () => import("src/view/drugs/form/DrugsFormPage"),
    permissionRequired: null,
    exact: true,
  },
  {
    path: "/drugs/:id",
    loader: () => import("src/view/drugs/view/DrugsViewPage"),
    permissionRequired: null,
    exact: true,
  },
  //medical Test
  {
    path: "/medicaltest",
    loader: () => import("src/view/medicaltest/list/MedicaltestListPage"),
    permissionRequired: null,
    exact: true,
  },
  {
    path: "/medical",
    loader: () => import("src/view/medicaltest/list/MedicaltestListPage"),
    permissionRequired: null,
    exact: true,
  },
  {
    path: "/medicaltest/new",
    loader: () => import("src/view/medicaltest/form/MedicaltestFormPage"),
    permissionRequired: null,
    exact: true,
  },
  {
    path: "/medicaltest/importer",
    loader: () =>
      import("src/view/medicaltest/importer/MedicaltestImporterPage"),
    permissionRequired: null,
    exact: true,
  },
  {
    path: "/medicaltest/:id/edit",
    loader: () => import("src/view/medicaltest/form/MedicaltestFormPage"),
    permissionRequired: null,
    exact: true,
  },
  {
    path: "/medicaltest/:id",
    loader: () => import("src/view/medicaltest/view/MedicaltestViewPage"),
    permissionRequired: null,
    exact: true,
  },

   {
    path: '/wallet/list',
    loader: () =>
      import('src/view/wallet/list/WalletListPage'),
    permissionRequired: null,
    exact: true,
  },
  // {
  //   path: '/wallet/list/account',
  //   loader: () =>
  //     import(
  //       'src/view/wallet/form/WalletFormPage'
  //     ),
  //   permissionRequired: null,
  //   exact: true,
  // },
  // {
  //   path: '/wallet/:id/edit',
  //   loader: () =>
  //     import('src/view/wallet/form/WalletFormPage'),
  //   permissionRequired: null,
  //   exact: true,
  // },
  // {
  //   path: '/wallet/:id',
  //   loader: () =>
  //     import('src/view/wallet/view/WalletViewPage'),
  //   permissionRequired: null,
  //   exact: true,
  // },


  //Oranization Setup
  {
    path: "/organization",
    loader: () =>
      import("src/view/organization/list/OrganizationListPage"),
    permissionRequired: null,
    exact: true,
  },
  {
    path: "/organization/new",
    loader: () =>
      import("src/view/organization/form/OrganizationFormPage"),
    permissionRequired: null,
    exact: true,
  },
  {
    path: "/organization/importer",
    loader: () =>
      import(
        "src/view/organization/importer/OrganizationImporterPage"
      ),
    permissionRequired: null,
    exact: true,
  },
  {
    path: "/organization/:id/edit",
    loader: () =>
      import("src/view/organization/form/OrganizationFormPage"),
    permissionRequired: null,
    exact: true,
  },
  {
    path: "/organization/:id",
    loader: () =>
      import("src/view/organization/view/OrganizationViewPage"),
    permissionRequired: null,
    exact: true,
  },
  //branch
  {
    path: "/branch",
    loader: () => import("src/view/branch/list/BranchListPage"),
    permissionRequired: null,
    exact: true,
  },
  {
    path: "/branch/new",
    loader: () => import("src/view/branch/form/BranchFormPage"),
    permissionRequired: null,
    exact: true,
  },
  {
    path: "/branch/importer",
    loader: () =>
      import("src/view/branch/importer/BranchImporterPage"),
    permissionRequired: null,
    exact: true,
  },
  {
    path: "/branch/:id/edit",
    loader: () => import("src/view/branch/form/BranchFormPage"),
    permissionRequired: null,
    exact: true,
  },
  {
    path: "/branch/:id",
    loader: () => import("src/view/branch/view/BranchViewPage"),
    permissionRequired: null,
    exact: true,
  },
  // Patient route
  {
    path: '/patient',
    loader: () =>
      import('src/view/patient/list/PatientListPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/patient/new',
    loader: () =>
      import('src/view/patient/form/PatientFormPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/patient/importer',
    loader: () =>
      import(
        'src/view/patient/importer/PatientImporterPage'
      ),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/patient/:id/edit',
    loader: () =>
      import('src/view/patient/form/PatientFormPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/patient/:id',
    loader: () =>
      import('src/view/patient/view/PatientViewPage'),
    permissionRequired: null,
    exact: true,
  },
  // personalvitals
  {
    path: '/personalvitals',
    loader: () =>
      import('src/view/personalvitals/list/PersonalvitalsListPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/personalvitals/new',
    loader: () =>
      import('src/view/personalvitals/form/PersonalvitalsFormPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/personalvitals/importer',
    loader: () =>
      import(
        'src/view/personalvitals/importer/PersonalvitalsImporterPage'
      ),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/personalvitals/:id/edit',
    loader: () =>
      import('src/view/personalvitals/form/PersonalvitalsFormPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/personalvitals/:id',
    loader: () =>
      import('src/view/personalvitals/view/PersonalvitalsViewPage'),
    permissionRequired: null,
    exact: true,
  },



].filter(Boolean);

const publicRoutes = [
  {
    path: '/auth/signin',
    loader: () => import('src/view/auth/SigninPage'),
  },
  {
    path: '/auth/signup',
    loader: () => import('src/view/auth/SignupPage'),
  },
  {
    path: '/auth/forgot-password',
    loader: () =>
      import('src/view/auth/ForgotPasswordPage'),
  },
].filter(Boolean);

const emptyTenantRoutes = [
  {
    path: '/auth/tenant',
    loader: () => import('src/view/auth/TenantPage'),
  },
].filter(Boolean);

const emptyPermissionsRoutes = [
  {
    path: '/auth/empty-permissions',
    loader: () =>
      import('src/view/auth/EmptyPermissionsPage'),
  },
].filter(Boolean);

const emailUnverifiedRoutes = [
  {
    path: '/auth/email-unverified',
    loader: () =>
      import('src/view/auth/EmailUnverifiedPage'),
  },
].filter(Boolean);

const simpleRoutes = [
  {
    path: '/auth/password-reset',
    loader: () => import('src/view/auth/PasswordResetPage'),
  },
  {
    path: '/auth/invitation',
    loader: () => import('src/view/auth/InvitationPage'),
  },
  {
    path: '/auth/verify-email',
    loader: () => import('src/view/auth/VerifyEmailPage'),
  },
  {
    path: '/auth/verify-onboarding',
    loader: () => import('src/view/auth/VerifyOnboardingPage'),
  },
  {
    path: '/403',
    loader: () =>
      import('src/view/shared/errors/Error403Page'),
  },
  {
    path: '/500',
    loader: () =>
      import('src/view/shared/errors/Error500Page'),
  },
  {
    path: '**',
    loader: () =>
      import('src/view/shared/errors/Error404Page'),
  },

].filter(Boolean);

export default {
  privateRoutes,
  publicRoutes,
  emptyTenantRoutes,
  emptyPermissionsRoutes,
  emailUnverifiedRoutes,
  simpleRoutes,
};
