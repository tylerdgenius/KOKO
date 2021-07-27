import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: "id",
    label: i18n("entities.drugs.fields.id"),
  },
  {
    name: "drugcode",
    label: i18n("entities.drugs.fields.drugcode"),
  },
  {
    name: "description",
    label: i18n("entities.drugs.fields.description"),
  },
  {
    name: "status",
    label: i18n("entities.drugs.fields.status"),
  },
  {
    name: "drugkind",
    label: i18n("entities.drugs.fields.drugkind"),
  },
  {
    name: "drugcategory",
    label: i18n("entities.drugs.fields.drugcategory"),
  },
];
