import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import branchEnumerators from 'src/modules/branch/branchEnumerators';
import moment from 'moment';

export default [
  {
    name: "organizationid",
    label: i18n("entities.branch.fields.organizationid"),
    schema: schemas.string(i18n("entities.branch.fields.organizationid"), {
      required: true,
      min: 2,
      max: 255,
    }),
  },
  {
    name: "branchcode",
    label: i18n("entities.branch.fields.branchcode"),
    schema: schemas.string(i18n("entities.branch.fields.branchcode"), {
      required: true,
      min: 2,
      max: 255,
    }),
  },
  {
    name: "branchkind",
    label: i18n("entities.branch.fields.branchkind"),
    schema: schemas.string(i18n("entities.branch.fields.branchkind"), {
      required: true,
      min: 2,
      max: 255,
    }),
  },
  {
    name: "branchcategory",
    label: i18n("entities.branch.fields.branchcategory"),
    schema: schemas.enumerator(i18n("entities.branch.fields.branchcategory"), {
      options: branchEnumerators.branchcategory,
    }),
  },
  {
    name: "description",
    label: i18n("entities.branch.fields.description"),
    schema: schemas.string(i18n("entities.branch.fields.description"), {
      required: true,
      min: 2,
      max: 520,
    }),
  },

  {
    name: "status",
    label: i18n("entities.branch.fields.status"),
    schema: schemas.enumerator(i18n("entities.branch.fields.status"), {
      options: branchEnumerators.status,
    }),
  },
];