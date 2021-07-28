import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: "id",
    label: i18n("entities.branch.fields.id"),
  },
  {
    name: "organizationid",
    label: i18n("entities.branch.fields.organizationid"),
  },
  {
    name: "description",
    label: i18n("entities.branch.fields.description"),
  },
  {
    name: "branchcode",
    label: i18n("entities.branch.fields.branchcode"),
  },
  {
    name: "branchkind",
    label: i18n("entities.branch.fields.branchkind"),
  },
  {
    name: "branchcategory",
    label: i18n("entities.branch.fields.branchcategory"),
  },
  {
    name: "status",
    label: i18n("entities.branch.fields.status"),
  },
];
