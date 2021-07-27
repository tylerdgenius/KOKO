import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import drugsEnumerators from 'src/modules/drugs/drugsEnumerators';
import moment from 'moment';

export default [
  {
    name: "drugcode",
    label: i18n("entities.drugs.fields.drugcode"),
    schema: schemas.string(i18n("entities.drugs.fields.drugcode"), {
      required: true,
      min: 2,
      max: 255,
    }),
  },
  {
    name: "description",
    label: i18n("entities.drugs.fields.description"),
    schema: schemas.string(i18n("entities.drugs.fields.name"), {
      required: true,
      min: 2,
      max: 255,
    }),
  },

  {
    name: "status",
    label: i18n("entities.drugs.fields.status"),
    schema: schemas.enumerator(i18n("entities.drugs.fields.status"), {
      options: drugsEnumerators.status,
    }),
  },
  {
    name: "drugkind",
    label: i18n("entities.drugs.fields.drugkind"),
    schema: schemas.enumerator(i18n("entities.drugs.fields.drugkind"), {
      options: drugsEnumerators.drugkind,
    }),
  },
  {
    name: "drugcategory",
    label: i18n("entities.drugs.fields.drugcategory"),
    schema: schemas.enumerator(i18n("entities.drugs.fields.drugcategory"), {
      options: drugsEnumerators.drugcategory,
    }),
  },
];