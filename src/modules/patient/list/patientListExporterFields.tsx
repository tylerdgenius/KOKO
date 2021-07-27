import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.patient.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.patient.fields.name'),
  },
  {
    name: 'birthdate',
    label: i18n('entities.patient.fields.birthdate'),
  },
  {
    name: 'gender',
    label: i18n('entities.patient.fields.gender'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.patient.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.patient.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];



