import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import existinghospitalEnumerators from 'src/modules/existinghospital/existinghospitalEnumerators';
import moment from 'moment';

export default [
  {
    name: 'name',
    label: i18n('entities.existinghospital.fields.name'),
    schema: schemas.string(
      i18n('entities.existinghospital.fields.name'),
      {
        "required": true,
        "min": 2,
        "max": 255
      },
    ),
  },

];