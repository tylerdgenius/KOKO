import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import allergiesEnumerators from 'src/modules/allergies/allergiesEnumerators';
import moment from 'moment';

export default [
  {
    name: "name",
    label: i18n("entities.allergies.fields.name"),
    schema: schemas.string(i18n("entities.allergies.fields.name"), {
      required: true,
      min: 2,
      max: 255,
    }),
  },
  {
    name: "description",
    label: i18n("entities.allergies.fields.description"),
    schema: schemas.string(i18n("entities.allergies.fields.description"), {
      required: true,
      min: 2,
      max: 1000,
    }),
  },

  {
    name: "status",
    label: i18n("entities.allergies.fields.status"),
    schema: schemas.enumerator(i18n("entities.allergies.fields.status"), {
      options: allergiesEnumerators.status,
    }),
  },
];