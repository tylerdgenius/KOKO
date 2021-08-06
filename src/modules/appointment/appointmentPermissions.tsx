import Roles from 'src/security/roles';
import Plans from 'src/security/plans';
import Storage from 'src/security/storage';

const storage = Storage.values;
const roles = Roles.values;
const plans = Plans.values;

class AppointmentPermissions {
  static get values() {
    return {

      appointmentImport: {
        id: 'appointmentImport',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      appointmentCreate: {
        id: 'appointmentCreate',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      appointmentEdit: {
        id: 'appointmentEdit',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      appointmentDestroy: {
        id: 'appointmentDestroy',
        allowedRoles: [roles.admin],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      appointmentRead: {
        id: 'appointmentRead',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      appointmentAutocomplete: {
        id: 'appointmentAutocomplete',
        allowedRoles: [roles.admin, roles.custom],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

    };
  }

  static get asArray() {
    return Object.keys(this.values).map((value) => {
      return this.values[value];
    });
  }
}

export default AppointmentPermissions;
