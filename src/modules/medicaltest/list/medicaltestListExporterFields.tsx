import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: "id",
    label: i18n("entities.medicaltest.fields.id"),
  },
  {
    name: "rowid",
    label: i18n("entities.medicaltest.fields.rowid"),
  },
  {
    name: "medicaltestcode",
    label: i18n("entities.medicaltest.fields.medicaltestcode"),
  },
  {
    name: "description",
    label: i18n("entities.medicaltest.fields.description"),
  },
  {
    name: "status",
    label: i18n("entities.medicaltest.fields.status"),
  },
  {
    name: "medicaltestkind",
    label: i18n("entities.medicaltest.fields.medicaltestkind"),
  },
  {
    name: "medicaltestcategory",
    label: i18n("entities.medicaltest.fields.medicaltestcategory"),
  },
  {
    name: "is_deleted",
    label: i18n("entities.medicaltest.fields.is_deleted"),
  },

  {
    name: "created_by",
    label: i18n("entities.medicaltest.fields.created_by"),
  },
  {
    name: "created_date",
    label: i18n("entities.medicaltest.fields.created_date"),
    render: exporterRenders.datetime(),
  },
  {
    name: "modified_date",
    label: i18n("entities.medicaltest.fields.modified_date"),
    render: exporterRenders.datetime(),
  },
  {
    name: "modified_by",
    label: i18n("entities.medicaltest.fields.modified_by"),
  },
];
