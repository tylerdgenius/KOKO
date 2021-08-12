import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';

function ProviderView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <TextViewItem
          label={i18n('entities.provider.fields.medical_no')}
          value={record.medical_no}
        />

        <TextViewItem
          label={i18n('entities.provider.fields.practice_area')}
          value={record.practice_area}
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

export default ProviderView;
