const en = {
  common: {
    or: 'or',
    cancel: 'Cancel',
    reset: 'Reset',
    save: 'Save',
    search: 'Search',
    edit: 'Edit',
    new: 'New',
    export: 'Export to Excel',
    noDataToExport: 'No data to export',
    import: 'Import',
    discard: 'Discard',
    yes: 'Yes',
    no: 'No',
    pause: 'Pause',
    areYouSure: 'Are you sure?',
    view: 'View',
    destroy: 'Delete',
    mustSelectARow: 'Must select a row',
    start: 'Start',
    end: 'End',
    select: 'Select',
    continue: 'Continue',
    filters: 'Filters',
  },

  app: {
    title: 'KokoFP Dev',
  },

  api: {
    menu: 'API',
  },

  entities: {
    customer: {
        name: 'customer',
        label: 'Customers',
        menu: 'Customers',
        exporterFileName: 'customer_export',
        list: {
          menu: 'Customers',
          title: 'Customers',
        },
        create: {
          success: 'Customer successfully saved',
        },
        update: {
          success: 'Customer successfully saved',
        },
        destroy: {
          success: 'Customer successfully deleted',
        },
        destroyAll: {
          success: 'Customer(s) successfully deleted',
        },
        edit: {
          title: 'Edit Customer',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'birthdateRange': 'Birthdate',
          'birthdate': 'Birthdate',
          'gender': 'Gender',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'gender': {
            'male': 'Male',
            'female': 'Female',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Customer',
        },
        view: {
          title: 'View Customer',
        },
        importer: {
          title: 'Import Customers',
          fileName: 'customer_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

         //patient
    profile: {
      name: 'profile',
      label: 'Profile',
      menu: 'profile',
      exporterFileName: 'patient_export',
      list: {
        menu: 'profile',
        title: 'Profile',
      },
      create: {
        success: 'Profile successfully saved',
      },
      update: {
        success: 'Profile successfully saved',
      },
      destroy: {
        success: 'Profile successfully deleted',
      },
      destroyAll: {
        success: 'Profile(s) successfully deleted',
      },
      edit: {
        title: 'Edit Profile',
      },
      fields: {
        id: 'Id',
        'stateoforigin': 'Stateoforigin',
        'allergies': 'Allergies',
        'bloodgroup': 'Bloodgroup',
        'genotype': 'Genotype',
        'relative': 'Relative',
        'nok': 'Nok',
        'noknumber': 'Noknumber',
        'birthdateRange': 'Birthdate',
        'birthdate': 'Birthdate',
        'gender': 'Gender',
        'donor': 'Do you want to be a donor',
        'cityofresidence': 'Cityofresidence',
        'stateofresidence': 'Stateofresidence',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'gender': {
          'male': 'Male',
          'female': 'Female',
        },
        'title': {
          'Mr': 'Mr',
          'Mrs': 'Mrs',
          'Miss': 'Miss',
        },
        'bloodgroup': {
          'A+': 'A+',
          'B+': 'B+',
          'AB+': 'AB+',
          'O+': 'O+',
          'A-': 'A-',
          'B-': 'B-',
          'AB-': 'AB-',
          'O-': 'O-',
        },
        'genotype': {
          'AA': 'AA',
          'AS': 'AS',
          'AC': 'AC',
          'SS': 'SS',
          'SC': 'SC',
          'CC': 'CC',
        },
        'donor': {
          'yes': 'yes',
          'no': 'no',
        },
      },
      placeholders: {
  
      },
      hints: {
  
      },
      new: {
        title: 'New Profile',
      },
      view: {
        title: 'View Profile',
      },
      importer: {
        title: 'Import Profile',
        fileName: 'profile_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    product: {
        name: 'product',
        label: 'Products',
        menu: 'Products',
        exporterFileName: 'product_export',
        list: {
          menu: 'Products',
          title: 'Products',
        },
        create: {
          success: 'Product successfully saved',
        },
        update: {
          success: 'Product successfully saved',
        },
        destroy: {
          success: 'Product successfully deleted',
        },
        destroyAll: {
          success: 'Product(s) successfully deleted',
        },
        edit: {
          title: 'Edit Product',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'description': 'Description',
          'unitPriceRange': 'Unit Price',
          'unitPrice': 'Unit Price',
          'photos': 'Photos',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Product',
        },
        view: {
          title: 'View Product',
        },
        importer: {
          title: 'Import Products',
          fileName: 'product_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

      personalvitals: {
        name: 'personalvitals',
        label: 'Personalvitals',
        menu: 'Personalvitals',
        exporterFileName: 'personalvitals_export',
        list: {
          menu: 'Personalvitals',
          title: 'Personalvitals',
        },
        create: {
          success: 'Personalvitals successfully saved',
        },
        update: {
          success: 'Personalvitals successfully saved',
        },
        destroy: {
          success: 'Personalvitals successfully deleted',
        },
        destroyAll: {
          success: 'Personalvitals(s) successfully deleted',
        },
        edit: {
          title: 'Edit Personalvitals',
        },
        fields: {
            id: 'Id',
            'name': 'Name',
            'birthdateRange': 'Birthdate',
            'birthdate': 'Birthdate',
            'gender': 'Gender',
            'temperature': 'Temprature(°C)',
            'weight': 'Weight(kg)',
            'height': 'Height(m)',
            'bloodpressure': 'Bloodpressure',
            'date': 'Date',
            'bmi': 'BMI',
            'pulse': 'Pulse(bpm)',
            createdAt: 'Created at',
            updatedAt: 'Updated at',
            createdAtRange: 'Created at',
          },
          enumerators: {
            'gender': {
              'male': 'Male',
              'female': 'Female',
            },
          },
        placeholders: {
    
        },
        hints: {
    
        },
        new: {
          title: 'New Personalvitals',
        },
        view: {
          title: 'View Personalvitals',
        },
        importer: {
          title: 'Import Personalvitals',
          fileName: 'personalvitals_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    order: {
        name: 'order',
        label: 'Orders',
        menu: 'Orders',
        exporterFileName: 'order_export',
        list: {
          menu: 'Orders',
          title: 'Orders',
        },
        create: {
          success: 'Order successfully saved',
        },
        update: {
          success: 'Order successfully saved',
        },
        destroy: {
          success: 'Order successfully deleted',
        },
        destroyAll: {
          success: 'Order(s) successfully deleted',
        },
        edit: {
          title: 'Edit Order',
        },
        fields: {
          id: 'Id',
          'customer': 'Customer',
          'products': 'Products',
          'employee': 'Employee',
          'delivered': 'Delivered',
          'attachments': 'Attachments',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Order',
        },
        view: {
          title: 'View Order',
        },
        importer: {
          title: 'Import Orders',
          fileName: 'order_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },
        //Allergies
    allergies: {
      name: "allergies",
      label: "Allergies",
      menu: "Allergies",
      exporterFileName: "allergies_export",
      list: {
        menu: "Allergies",
        title: "Allergies",
      },
      create: {
        success: "Allergies successfully saved",
      },
      update: {
        success: "Allergies successfully saved",
      },
      destroy: {
        success: "Allergies successfully deleted",
      },
      destroyAll: {
        success: "Allergies successfully deleted",
      },
      edit: {
        title: "Edit Allergies",
      },
      fields: {
        name: "Name of Allergies",
        created_date: "Created Date",
        created_by: "Created By",
        description: "Description",
        status: "Status",
        id: "ID",
        is_deleted: "Deleted",
        modified_date: "Date Modified",
        modified_by: "Modified By",
      },
      enumerators: {
        status: {
          false: "false",
          true: "true",
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: "New Allergies",
      },
      view: {
        title: "View Allergies",
      },
      importer: {
        title: "Import Allergies",
        fileName: "allergies_import_template",
        hint: "Files/Images columns must be the URLs of the files separated by space.",
      },
    },
    //Drugs

    drugs: {
      name: "drugs",
      label: "Drugs",
      menu: "Drugs",
      exporterFileName: "drugs_export",
      list: {
        menu: "Drugs",
        title: "Drugs",
      },
      create: {
        success: "Drugs successfully saved",
      },
      update: {
        success: "Drugs successfully saved",
      },
      destroy: {
        success: "Drugs successfully deleted",
      },
      destroyAll: {
        success: "Drug(s) successfully deleted",
      },
      edit: {
        title: "Edit Drugs",
      },
      fields: {
        drugcode: "Drug Code",
        created_date: "Created Date",
        created_by: "Created By",
        drugkind: "Drug Kind",
        status: "Status",
        id: "ID",
        drugcategory: "Drug Category",
        description: "Description",
        modified_date: "Date Modified",
        modified_by: "Modified By",
      },
      enumerators: {
        status: {
          false: "false",
          true: "true",
        },
        drugcategory: {
          Malaria: "Malaria",
          Typhoid: "Typhoid",
        },
        drugkind: {
          Cream: "Cream",
          Syrup: "Syrup",
          Powder: "Powder",
          Tablet: "Tablet",
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: "New Drugs",
      },
      view: {
        title: "View Drugs",
      },
      importer: {
        title: "Import Drugs",
        fileName: "drugs_import_template",
        hint: "Files/Images columns must be the URLs of the files separated by space.",
      },
    },
    //Medical Test
    medicaltest: {
      name: "medicaltest",
      label: "Medical Tests",
      menu: "Medicaltest",
      exporterFileName: "medicaltest_export",
      list: {
        menu: "Medicaltest",
        title: "Medicaltest",
      },
      create: {
        success: "Medical Test successfully saved",
      },
      update: {
        success: "Medical Test successfully saved",
      },
      destroy: {
        success: "Medical Test successfully deleted",
      },
      destroyAll: {
        success: "Medical Test(s) successfully deleted",
      },
      edit: {
        title: "Edit Medical Test",
      },
      fields: {
        medicaltestkind: "Medical Test Kind",
        created_date: "Created Date",
        created_by: "Created By",
        medicaltestcategory: "Medical Category",
        status: "Status",
        id: "ID",
        medicaltestcode: "Medical Test Code",
        description: "Description",
        modified_date: "Date Modified",
        modified_by: "Modified By",
      },
      enumerators: {
        status: {
          false: "false",
          true: "true",
        },
        medicaltestcategory: {
          Pregnancy: "Pregnancy",
          Typhoid: "Typhoid",
        },
        medicaltestkind: {
          Pregnancy: "Pregnancy",
          Typhoid: "Typhoid",
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: "New Medical Test",
      },
      view: {
        title: "View Medical Test",
      },
      importer: {
        title: "Import Medical Tests",
        fileName: "medicaltest_import_template",
        hint: "Files/Images columns must be the URLs of the files separated by space.",
      },
    },
     //organization Setup
     organizationsetup: {
      name: "organizationsetup",
      label: "Organization Setup",
      menu: "Organizationsetup",
      exporterFileName: "organizationsetup_export",
      list: {
        menu: "Organizationsetup",
        title: "Organization setup",
      },
      create: {
        success: "Organization Setup successfully saved",
      },
      update: {
        success: "Organization Setup successfully saved",
      },
      destroy: {
        success: "Organization Setup successfully deleted",
      },
      destroyAll: {
        success: "Organization Setup(s) successfully deleted",
      },
      edit: {
        title: "Edit Organization Setup",
      },
      fields: {
        email: "Email",
        created_date: "Created Date",
        created_by: "Created By",
        name: "Name",
        status: "Status",
        id: "ID",
        shortcode: "Short Code",
        domain: "Domain",
        dateofestablishment: "Date of Establishment",
        description: "Description",
        phoneno: "Phone Number",
        address1: "Main Address",
        address2: "Secondary Address",
        country_code: "Country code",
        state_code: "State code",
        lga_code: "LGA code",
        Regno: "Reg No",
        organisation_type: "Organization Type",
        logo: "Logo",
        is_deleted: "Deleted",
        modified_date: "Date Modified",
        modified_by: "Modified By",
      },
      enumerators: {
        status: {
          false: "false",
          true: "true",
        },
        organisation_type: {
          Provider: "Provider",
          Laboratory: "Laboratory",
          Pharmacy: "Pharmacy",
          Radiology: "Radiology",
        },
        country_code: {
          Nigeria: "Nigeria",
          Canada: "Canada",
        },
        state_code: {
          Lagos: "Lagos",
          Ontario: "Ontario",
        },
        lga_code: {
          Ikeja: "Ikeja",
          Surulere: "Surulere",
        },
      },
      placeholders: {},
      hints: {},
      new: {
        title: "New Organization Setup",
      },
      view: {
        title: "View Organization setup",
      },
      importer: {
        title: "Import Organization Setup",
        fileName: "organizationsetup_import_template",
        hint: "Files/Images columns must be the URLs of the files separated by space.",
      },
    },
    //branch
    branch: {
      name: "branch",
      label: "Branch",
      menu: "Branch",
      exporterFileName: "branch_export",
      list: {
        menu: "Branch",
        title: "Branch",
      },
      create: {
        success: "Branch successfully saved",
      },
      update: {
        success: "Branch successfully saved",
      },
      destroy: {
        success: "Branch successfully deleted",
      },
      destroyAll: {
        success: "Branch successfully deleted",
      },
      edit: {
        title: "Edit Branch",
      },
      fields: {
        created_date: "Created Date",
        created_by: "Created By",
        description: "Description",
        organizationid: "Organization ID",
        branchcode: "Branch Code",
        branchkind: "Branch Kind",
        branchcategory: "Branch Category",
        status: "Status",
        id: "ID",
        is_deleted: "Deleted",
        modified_date: "Date Modified",
        modified_by: "Modified By",
      },
      enumerators: {
        status: {
          open: "open",
          close: "close",
        },
        branchcategory:{
          Headquater: "Headquater",
          Branch:"Branch",
        }
      },
      placeholders: {},
      hints: {},
      new: {
        title: "New Branch",
      },
      view: {
        title: "View Branch",
      },
      importer: {
        title: "Import Branch",
        fileName: "branch_import_template",
        hint: "Files/Images columns must be the URLs of the files separated by space.",
      },
    },

     //search

     search: {
      name: "Search",
    
      fields: {
        specialization: "Specialization",
        country: "Country",
        hospital: "Hospital",
        city: "City",
        status: "Status",
      },
  
    },

    //patient
    patient: {
      name: 'patient',
      label: 'patients',
      menu: 'patients',
      exporterFileName: 'patient_export',
      list: {
        menu: 'patients',
        title: 'patients',
      },
      create: {
        success: 'patient successfully saved',
      },
      update: {
        success: 'patient successfully saved',
      },
      destroy: {
        success: 'patient successfully deleted',
      },
      destroyAll: {
        success: 'patient(s) successfully deleted',
      },
      edit: {
        title: 'Edit patient',
      },
      fields: {
        id: 'Id',
        'name': 'Name',
        'title': 'Title',
        'lastname': 'Lastname',
        'firstname': 'Firstname',
        'middlename': 'Middlename',
        'email': 'Email',
        'phonenumber': 'Phonenumber',
        'address': 'Address',
        'stateoforigin': 'Stateoforigin',
        'allergies': 'Allergies',
        'bloodgroup': 'Bloodgroup',
        'genotype': 'Genotype',
        'relative': 'Relative',
        'nok': 'Nok',
        'noknumber': 'Noknumber',
        'birthdateRange': 'Birthdate',
        'birthdate': 'Birthdate',
        'gender': 'Gender',
        'donor': 'Do you want to be a donor',
        'cityofresidence': 'Cityofresidence',
        'stateofresidence': 'Stateofresidence',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'gender': {
          'male': 'Male',
          'female': 'Female',
        },
        'title': {
          'Mr': 'Mr',
          'Mrs': 'Mrs',
          'Miss': 'Miss',
        },
        'bloodgroup': {
          'A+': 'A+',
          'B+': 'B+',
          'AB+': 'AB+',
          'O+': 'O+',
          'A-': 'A-',
          'B-': 'B-',
          'AB-': 'AB-',
          'O-': 'O-',
        },
        'genotype': {
          'AA': 'AA',
          'AS': 'AS',
          'AC': 'AC',
          'SS': 'SS',
          'SC': 'SC',
          'CC': 'CC',
        },
        'donor': {
          'yes': 'yes',
          'no': 'no',
        },
      },
      placeholders: {
  
      },
      hints: {
  
      },
      new: {
        title: 'New patient',
      },
      view: {
        title: 'View patient',
      },
      importer: {
        title: 'Import patients',
        fileName: 'patient_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    setup: {
      title: 'Set Up',
      menu: 'Setup',
      save: {
        success:
          'Setups successfully saved. The page will reload in {0} seconds for changes to take effect.',
      },
      fields: {
        primary: 'Primary Color',
        secondary: 'Secondary Color',
        logos: 'Logo',
        backgroundImages: 'Background Images',
        shade: 'Shade',
      },
    },
    report: {
      title: 'Report',
      menu: 'Report',
      save: {
        success:
          'Report successfully saved. The page will reload in {0} seconds for changes to take effect.',
      },
      fields: {
        primary: 'Primary Color',
        secondary: 'Secondary Color',
        logos: 'Logo',
        backgroundImages: 'Background Images',
        shade: 'Shade',
      },
    },

  },

  auth: {
    tenants: 'Workspaces',
    profile: {
      title: 'Profile',
      success: 'Profile successfully updated',
    },
    createAnAccount: 'Create an account',
    rememberMe: 'Remember me',
    forgotPassword: 'Forgot password',
    signin: 'Sign in',
    signup: 'Sign up',
    signout: 'Sign out',
    alreadyHaveAnAccount:
      'Already have an account? Sign in.',
    social: {
      errors: {
        'auth-invalid-provider':
          'This email is already registered to another provider.',
        'auth-no-email': `The email associated with this account is private or inexistent.`,
      },
    },
    signinWithAnotherAccount:
      'Sign in with another account',
    emailUnverified: {
      message: `Please confirm your email at <strong>{0}</strong> to continue.`,
      submit: `Resend email verification`,
    },
    emptyPermissions: {
      message: `You have no permissions yet. Wait for the admin to grant you privileges.`,
    },
    passwordResetEmail: {
      message: 'Send password reset email',
      error: `Email not recognized`,
    },
    passwordReset: {
      message: 'Reset password',
    },
    passwordChange: {
      title: 'Change Password',
      success: 'Password successfully changed',
      mustMatch: 'Passwords must match',
    },
    emailAddressVerificationEmail: {
      error: `Email not recognized`,
    },
    verificationEmailSuccess: `Verification email successfully sent`,
    passwordResetEmailSuccess: `Password reset email successfully sent`,
    passwordResetSuccess: `Password successfully changed`,
    verifyEmail: {
      success: 'Email successfully verified.',
      message:
        'Just a moment, your email is being verified...',
    },
  },

  roles: {
    admin: {
      label: 'Admin',
      description: 'Full access to all resources',
    },
    custom: {
      label: 'Custom Role',
      description: 'Custom role access',
    },
    user: {
      label: 'User Role',
      description: 'User role access',
    },
  },

  user: {
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Name',
      firstName: 'First Name',
      lastName: 'Last Name',
      middlename: 'Middlename',
      status: 'Status',
      phoneNumber: 'Phone Number',
      address: 'Address',
      role: 'Role',
      createdAt: 'Created at',
      updatedAt: 'Updated at',
      roleUser: 'Role/User',
      roles: 'Roles',
      createdAtRange: 'Created at',
      password: 'Password',
      oldPassword: 'Old Password',
      newPassword: 'New Password',
      newPasswordConfirmation: 'New Password Confirmation',
      rememberMe: 'Remember me',
   
    },
 
    status: {
      active: 'Active',
      invited: 'Invited',
      'empty-permissions': 'Waiting for Permissions',
    },
    invite: 'Invite',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} is invalid',
    },
    title: 'Users',
    menu: 'Users',
    doAddSuccess: 'User(s) successfully saved',
    doUpdateSuccess: 'User successfully saved',
    exporterFileName: 'users_export',
    doDestroySuccess: 'User successfully deleted',
    doDestroyAllSelectedSuccess:
      'Users successfully deleted',
    edit: {
      title: 'Edit User',
    },
    new: {
      title: 'Invite User(s)',
      titleModal: 'Invite User',
      emailsHint:
        'Separate multiple email addresses using the comma character.',
    },
    view: {
      title: 'View User',
      activity: 'Activity',
    },
    importer: {
      title: 'Import Users',
      fileName: 'users_import_template',
      hint:
        'Files/Images columns must be the URLs of the files separated by space. Relationships must be the ID of the referenced records separated by space. Roles must be the role ids separated by space.',
    },
    errors: {
      userAlreadyExists:
        'User with this email already exists',
      userNotFound: 'User not found',
      revokingOwnPermission: `You can't revoke your own admin permission`,
    },
  },

  tenant: {
    name: 'tenant',
    label: 'Workspaces',
    menu: 'Workspaces',
    list: {
      menu: 'Workspaces',
      title: 'Workspaces',
    },
    create: {
      button: 'Create Workspace',
      success: 'Workspace successfully saved',
    },
    update: {
      success: 'Workspace successfully saved',
    },
    destroy: {
      success: 'Workspace successfully deleted',
    },
    destroyAll: {
      success: 'Workspace(s) successfully deleted',
    },
    edit: {
      title: 'Edit Workspace',
    },
    fields: {
      id: 'Id',
      name: 'Name',
      url: 'URL',
      tenantName: 'Workspace Name',
      tenantId: 'Workspace',
      tenantUrl: 'Workspace URL',
      plan: 'Plan',
    },
    enumerators: {},
    new: {
      title: 'New Workspace',
    },
    invitation: {
      view: 'View Invitations',
      invited: 'Invited',
      accept: 'Accept Invitation',
      decline: 'Decline Invitation',
      declined: 'Invitation successfully declined',
      acceptWrongEmail: 'Accept Invitation With This Email',
    },
    select: 'Select Workspace',
    validation: {
      url:
        'Your workspace URL can only contain lowercase letters, numbers and dashes (and must start with a letter or number).',
    },
  },

  plan: {
    menu: 'Plans',
    title: 'Plans',

    free: {
      label: 'Free',
      price: '$0',
    },
    growth: {
      label: 'Growth',
      price: '$10',
    },
    enterprise: {
      label: 'Enterprise',
      price: '$50',
    },

    pricingPeriod: '/month',
    current: 'Current Plan',
    subscribe: 'Subscribe',
    manage: 'Manage Subscription',
    cancelAtPeriodEnd:
      'This plan will be canceled at the end of the period.',
    somethingWrong:
      'There is something wrong with your subscription. Please go to manage subscription for more details.',
    notPlanUser: `You are not the manager of this subscription.`,
  },

  auditLog: {
    menu: 'Audit Logs',
    title: 'Audit Logs',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Separate multiple entities using the comma character.',
    fields: {
      id: 'Id',
      timestampRange: 'Period',
      entityName: 'Entity',
      entityNames: 'Entities',
      entityId: 'Entity ID',
      action: 'Action',
      values: 'Values',
      timestamp: 'Date',
      createdByEmail: 'User Email',
    },
  },
 
  settings: {
    title: 'Settings',
    menu: 'Settings',
    save: {
      success:
        'Settings successfully saved. The page will reload in {0} seconds for changes to take effect.',
    },
    fields: {
      primary: 'Primary Color',
      secondary: 'Secondary Color',
      logos: 'Logo',
      backgroundImages: 'Background Images',
      shade: 'Shade',
    },
  },
  dashboard: {
    menu: 'Dashboard',
    message: ` Dashboard `,
    charts: {
      day: 'Day',
      red: 'Red',
      green: 'Green',
      yellow: 'Yellow',
      grey: 'Grey',
      blue: 'Blue',
      orange: 'Orange',
      months: {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
      },
      eating: 'Eating',
      drinking: 'Drinking',
      sleeping: 'Sleeping',
      designing: 'Designing',
      coding: 'Coding',
      cycling: 'Cycling',
      running: 'Running',
      customer: 'Customer',
    },
  },
  errors: {
    backToHome: 'Back to home',
    403: `Sorry, you don't have access to this page`,
    404: 'Sorry, the page you visited does not exist',
    500: 'Sorry, the server is reporting an error',
    429: 'Too many requests. Please try again later.',
    forbidden: {
      message: 'Forbidden',
    },
    validation: {
      message: 'An error occurred',
    },
    defaultErrorMessage: 'Ops, an error occurred',
  },

  preview: {
    error:
      'Sorry, this operation is not allowed in preview mode.',
  },
  
  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} is invalid',
      required: '${path} is required',
      oneOf:
        '${path} must be one of the following values: ${values}',
      notOneOf:
        '${path} must not be one of the following values: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} must be a ${type}`;
      },
    },
    string: {
      length:
        '${path} must be exactly ${length} characters',
      min: '${path} must be at least ${min} characters',
      max: '${path} must be at most ${max} characters',
      matches:
        '${path} must match the following: "${regex}"',
      email: '${path} must be a valid email',
      url: '${path} must be a valid URL',
      trim: '${path} must be a trimmed string',
      lowercase: '${path} must be a lowercase string',
      uppercase: '${path} must be a upper case string',
      selected: '${path} must be selected',
    },
    number: {
      min:
        '${path} must be greater than or equal to ${min}',
      max: '${path} must be less than or equal to ${max}',
      lessThan: '${path} must be less than ${less}',
      moreThan: '${path} must be greater than ${more}',
      notEqual: '${path} must be not equal to ${notEqual}',
      positive: '${path} must be a positive number',
      negative: '${path} must be a negative number',
      integer: '${path} must be an integer',
    },
    date: {
      min: '${path} field must be later than ${min}',
      max: '${path} field must be at earlier than ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} field cannot have keys not specified in the object shape',
    },
    array: {
      min: ({ min, path }) =>
        min === 1
          ? `${path} is required`
          : `${path} field must have at least ${min} items`,
      max:
        '${path} field must have less than or equal to ${max} items',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'You must upload an image',
    size: 'File is too big. Max allowed size is {0}',
    formats: `Invalid format. Must be one of: {0}.`,
  },
  importer: {
    line: 'Line',
    status: 'Status',
    pending: 'Pending',
    imported: 'Imported',
    error: 'Error',
    total: `{0} imported, {1} pending and {2} with error`,
    importedMessage: `Processed {0} of {1}.`,
    noNavigateAwayMessage:
      'Do not navigate away from this page or import will be stopped.',
    completed: {
      success:
        'Import completed. All rows were successfully imported.',
      someErrors:
        'Processing completed, but some rows were unable to be imported.',
      allErrors: 'Import failed. There are no valid rows.',
    },
    form: {
      downloadTemplate: 'Download the template',
      hint:
        'Click or drag the file to this area to continue',
    },
    list: {
      discardConfirm:
        'Are you sure? Non-imported data will be lost.',
    },
    errors: {
      invalidFileEmpty: 'The file is empty',
      invalidFileExcel:
        'Only excel (.xlsx) files are allowed',
      invalidFileUpload:
        'Invalid file. Make sure you are using the last version of the template.',
      importHashRequired: 'Import hash is required',
      importHashExistent: 'Data has already been imported',
    },
  },

  autocomplete: {
    loading: 'Loading...',
    noOptions: 'No data found',
  },

  imagesViewer: {
    noImage: 'No image',
  },

  table: {
    noData: 'No records found',
    loading: 'Loading...',
  },

  pagination: {
    labelDisplayedRows: '{0}-{1} of {2}',
    labelRowsPerPage: 'Per page:',
  },
};

export default en;
