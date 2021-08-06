import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.appointment.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.appointment.fields.name'),
  },
  {
    name: 'birthdate',
    label: i18n('entities.appointment.fields.birthdate'),
  },
  {
    name: 'gender',
    label: i18n('entities.appointment.fields.gender'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.appointment.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.appointment.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
