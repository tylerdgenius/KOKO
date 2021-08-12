import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import providerEnumerators from 'src/modules/provider/providerEnumerators';
import moment from 'moment';

export default [
  {
    name: "medical_no",
    label: i18n("entities.provider.fields.medical_no"),
    schema: schemas.string(i18n("entities.provider.fields.medical_no"), {
      required: true,
      min: 2,
      max: 255,
    }),
  },
  {
    name: "practice_area",
    label: i18n("entities.provider.fields.practice_area"),
    schema: schemas.string(i18n("entities.provider.fields.practice_area"), {
      required: true,
      min: 2,
      max: 1000,
    }),
  },
];