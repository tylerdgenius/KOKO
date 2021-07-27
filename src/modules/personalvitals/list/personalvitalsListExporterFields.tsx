import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: "id",
    label: i18n("entities.personalvitals.fields.id"),
  },
  {
    name: "temperature",
    label: i18n("entities.personalvitals.fields.temprature"),
  },
  {
    name: "weight",
    label: i18n("entities.personalvitals.fields.weight"),
  },
  {
    name: "height",
    label: i18n("entities.personalvitals.fields.height"),
  },
  {
    name: "bloodpressure",
    label: i18n("entities.personalvitals.fields.bloodpressure"),
  }
];
