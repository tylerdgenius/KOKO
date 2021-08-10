import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: "id",
    label: i18n("entities.organization.fields.id"),
  },
  {
    name: "name",
    label: i18n("entities.organization.fields.name"),
  },
  {
    name: "email",
    label: i18n("entities.organization.fields.email"),
  },
  {
    name: "shortcode",
    label: i18n("entities.organization.fields.shortcode"),
  },
  {
    name: "domain",
    label: i18n("entities.organization.fields.domain"),
  },
  {
    name: "dateofestablishment",
    label: i18n("entities.organization.fields.dateofestablishment"),
  },
  {
    name: "description",
    label: i18n("entities.organization.fields.description"),
  },
  {
    name: "phoneno",
    label: i18n("entities.organization.fields.phoneno"),
  },
  {
    name: "address1",
    label: i18n("entities.organization.fields.address1"),
  },
  {
    name: "address2",
    label: i18n("entities.organization.fields.address2"),
  },
  {
    name: "country_code",
    label: i18n("entities.organization.fields.country_code"),
  },
  {
    name: "state_code",
    label: i18n("entities.organization.fields.state_code"),
  },
  {
    name: "lga_code",
    label: i18n("entities.organization.fields.lga_code"),
  },
  {
    name: "Regno",
    label: i18n("entities.organization.fields.Regno"),
  },
  {
    name: "organisation_type",
    label: i18n("entities.organization.fields.organisation_type"),
  },
  {
    name: "status",
    label: i18n("entities.organization.fields.status"),
  },
  {
    name: "logo",
    label: i18n("entities.organization.fields.logo"),
  },
  {
    name: "is_deleted",
    label: i18n("entities.organization.fields.is_deleted"),
  },
  {
    name: "organisation_type",
    label: i18n("entities.organization.fields.organisation_type"),
  },
  {
    name: "created_by",
    label: i18n("entities.organization.fields.created_by"),
  },
  {
    name: "created_date",
    label: i18n("entities.organization.fields.created_date"),
    render: exporterRenders.datetime(),
  },
  {
    name: "modified_by",
    label: i18n("entities.organization.fields.modified_by"),
  },
  {
    name: "modified_date",
    label: i18n("entities.organization.fields.modified_date"),
    render: exporterRenders.datetime(),
  },
];
