import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';

function DrugsView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <TextViewItem
          label={i18n("entities.drugs.fields.drugcode")}
          value={record.drugcode}
        />
        <TextViewItem
          label={i18n("entities.drugs.fields.description")}
          value={record.description}
        />

        <TextViewItem
          label={i18n("entities.drugs.fields.drugkind")}
          value={
            record.drugkind &&
            i18n(`entities.drugs.enumerators.drugkind.${record.drugkind}`)
          }
        />
        <TextViewItem
          label={i18n("entities.drugs.fields.drugcategory")}
          value={
            record.drugcategory &&
            i18n(
              `entities.drugs.enumerators.drugcategory.${record.drugcategory}`
            )
          }
        />
        <TextViewItem
          label={i18n("entities.drugs.fields.status")}
          value={
            record.status &&
            i18n(`entities.drugs.enumerators.status.${record.status}`)
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

export default DrugsView;
