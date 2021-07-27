import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import organizationsetupEnumerators from 'src/modules/organizationsetup/organizationsetupEnumerators';
import moment from 'moment';

export default [
  {
    name: "name",
    label: i18n("entities.organizationsetup.fields.name"),
    schema: schemas.string(i18n("entities.organizationsetup.fields.name"), {
      required: true,
      min: 2,
      max: 255,
    }),
  },
  {
    name: "email",
    label: i18n("entities.organizationsetup.fields.email"),
    schema: schemas.string(i18n("entities.organizationsetup.fields.email"), {
      required: true,
      min: 2,
      max: 255,
    }),
  },
  {
    name: "shortcode",
    label: i18n("entities.organizationsetup.fields.shortcode"),
    schema: schemas.string(
      i18n("entities.organizationsetup.fields.shortcode"),
      {
        required: true,
        min: 2,
        max: 255,
      }
    ),
  },
  {
    name: "domain",
    label: i18n("entities.organizationsetup.fields.domain"),
    schema: schemas.string(i18n("entities.organizationsetup.fields.domain"), {
      required: true,
      min: 2,
      max: 255,
    }),
  },
  {
    name: "description",
    label: i18n("entities.organizationsetup.fields.description"),
    schema: schemas.string(
      i18n("entities.organizationsetup.fields.description"),
      {
        required: true,
        min: 2,
        max: 500,
      }
    ),
  },
  {
    name: "phoneno",
    label: i18n("entities.organizationsetup.fields.phoneno"),
    schema: schemas.string(i18n("entities.organizationsetup.fields.phoneno"), {
      required: true,
      min: 2,
      max: 255,
    }),
  },
  {
    name: "address1",
    label: i18n("entities.organizationsetup.fields.address1"),
    schema: schemas.string(i18n("entities.organizationsetup.fields.address1"), {
      required: true,
      min: 2,
      max: 255,
    }),
  },
  {
    name: "address2",
    label: i18n("entities.organizationsetup.fields.address2"),
    schema: schemas.string(i18n("entities.organizationsetup.fields.address2"), {
      required: true,
      min: 2,
      max: 255,
    }),
  },
  {
    name: "Regno",
    label: i18n("entities.organizationsetup.fields.Regno"),
    schema: schemas.string(i18n("entities.organizationsetup.fields.Regno"), {
      required: true,
      min: 2,
      max: 255,
    }),
  },
  {
    name: "logo",
    label: i18n("entities.organizationsetup.fields.logo"),
    schema: schemas.string(i18n("entities.organizationsetup.fields.logo"), {
      required: true,
      min: 2,
      max: 255,
    }),
  },

  {
    name: "dateofestablishment",
    label: i18n("entities.organizationsetup.fields.dateofestablishment"),
    schema: schemas.date(
      i18n("entities.organizationsetup.fields.dateofestablishment"),
      {}
    ),
    render: (value) =>
      value && value instanceof Date
        ? moment(value).format("YYYY-MM-DD")
        : value,
  },
  {
    name: "country_code",
    label: i18n("entities.organizationsetup.fields.country_code"),
    schema: schemas.enumerator(
      i18n("entities.organizationsetup.fields.country_code"),
      {
        options: organizationsetupEnumerators.country_code,
      }
    ),
  },
  {
    name: "state_code",
    label: i18n("entities.organizationsetup.fields.state_code"),
    schema: schemas.enumerator(
      i18n("entities.organizationsetup.fields.state_code"),
      {
        options: organizationsetupEnumerators.state_code,
      }
    ),
  },
  {
    name: "lga_code",
    label: i18n("entities.organizationsetup.fields.lga_code"),
    schema: schemas.enumerator(
      i18n("entities.organizationsetup.fields.lga_code"),
      {
        options: organizationsetupEnumerators.lga_code,
      }
    ),
  },
  {
    name: "organisation_type",
    label: i18n("entities.organizationsetup.fields.organisation_type"),
    schema: schemas.enumerator(
      i18n("entities.organizationsetup.fields.organisation_type"),
      {
        options: organizationsetupEnumerators.organisation_type,
      }
    ),
  },
  {
    name: "status",
    label: i18n("entities.organizationsetup.fields.status"),
    schema: schemas.enumerator(
      i18n("entities.organizationsetup.fields.status"),
      {
        options: organizationsetupEnumerators.status,
      }
    ),
  },
];