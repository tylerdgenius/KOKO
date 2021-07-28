import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import patientEnumerators from 'src/modules/patient/patientEnumerators';
import moment from 'moment';

export default [
  {
    name: 'name',
    label: i18n('entities.patient.fields.name'),
    schema: schemas.string(
      i18n('entities.patient.fields.name'),
      {
        "required": true,
        "min": 2,
        "max": 255
      },
    ),
  },
  {
    name: 'birthdate',
    label: i18n('entities.patient.fields.birthdate'),
    schema: schemas.date(
      i18n('entities.patient.fields.birthdate'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'gender',
    label: i18n('entities.patient.fields.gender'),
    schema: schemas.enumerator(
      i18n('entities.patient.fields.gender'),
      {
        "options": patientEnumerators.gender
      },
    ),
  },
];


