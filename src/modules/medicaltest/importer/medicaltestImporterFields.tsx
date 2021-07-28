import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import medicaltestEnumerators from 'src/modules/medicaltest/medicaltestEnumerators';

export default [
  {
    name: "medicaltestcode",
    label: i18n("entities.medicaltest.fields.medicaltestcode]"),
    schema: schemas.string(
      i18n("entities.medicaltest.fields.medicaltestcode"),
      {
        required: true,
        min: 2,
        max: 255,
      }
    ),
  },
  {
    name: "description",
    label: i18n("entities.medicaltest.fields.description"),
    schema: schemas.date(i18n("entities.medicaltest.fields.description"), {
      required: true,
      min: 2,
      max: 255,
    }),
  },
  {
    name: "medicaltestkind",
    label: i18n("entities.medicaltest.fields.medicaltestkind"),
    schema: schemas.enumerator(
      i18n("entities.medicaltest.fields.medicaltestkind"),
      {
        required: true,
        min: 2,
        max: 255,
      }
    ),
  },
  {
    name: "medicaltestcategory",
    label: i18n("entities.medicaltest.fields.medicaltestcategory"),
    schema: schemas.enumerator(
      i18n("entities.medicaltest.fields.medicaltestcategory"),
      {
        "options": medicaltestEnumerators.medicaltestcategory,
      }
    ),
  },
  {
    name: "status",
    label: i18n("entities.medicaltest.fields.status"),
    schema: schemas.enumerator(i18n("entities.medicaltest.fields.status"), {
      "options": medicaltestEnumerators.status,
    }),
  },
];