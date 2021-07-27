import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import personalvitalsEnumerators from 'src/modules/personalvitals/personalvitalsEnumerators';
import moment from 'moment';

export default [
  {
    name: "temperture",
    label: i18n("entities.personalvitals.fields.temperature"),
    schema: schemas.string(i18n("entities.personalvitals.fields.temperature"), {
      required: true,
      min: 2,
      max: 255,
    }),
  },
  {
    name: "height",
    label: i18n("entities.personalvitals.fields.height"),
    schema: schemas.string(i18n("entities.personalvitals.fields.height"), {
      required: true,
      min: 2,
      max: 255,
    }),
  },
  {
    name: "weight",
    label: i18n("entities.personalvitals.fields.weight"),
    schema: schemas.string(i18n("entities.personalvitals.fields.weight"), {
      required: true,
      min: 2,
      max: 255,
    }),
  },
  {
    name: "bloodpressure",
    label: i18n("entities.personalvitals.fields.bloodpressure"),
    schema: schemas.string(i18n("entities.personalvitals.fields.bloodpressure"), {
      required: true,
      min: 2,
      max: 255,
    }),
  }
];