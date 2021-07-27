import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';

function MedicaltestView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <TextViewItem
          label={i18n("entities.medicaltest.fields.medicaltestcode")}
          value={record.medicaltestcode}
        />

        <TextViewItem
          label={i18n("entities.medicaltest.fields.description")}
          value={record.description}
        />

        <TextViewItem
          label={i18n("entities.medicaltest.fields.medicaltestkind")}
          value={
            record.medicaltestkind &&
            i18n(
              `entities.medicaltest.enumerators.medicaltestkind.${record.medicaltestkind}`
            )
          }
        />

        <TextViewItem
          label={i18n("entities.medicaltest.fields.medicaltestcategory")}
          value={
            record.medicaltestcategory &&
            i18n(
              `entities.medicaltest.enumerators.medicaltestcategory.${record.medicaltestcategory}`
            )
          }
        />

        <TextViewItem
          label={i18n("entities.medicaltest.fields.status")}
          value={
            record.status &&
            i18n(`entities.medicaltest.enumerators.status.${record.status}`)
          }
        />
      </div>
    );
  };

  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return renderView();
}

export default MedicaltestView;
