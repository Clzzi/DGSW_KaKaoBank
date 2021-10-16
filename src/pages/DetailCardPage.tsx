import React from 'react';
import DetailCard from 'components/DetailCard';
import { StyledTopBackground } from 'components/DetailCard/DetailCard.style';
import PageTemplate from 'components/Common/Base/PageTemplate';

const DetailCardPage = (): JSX.Element => {
  return (
    <>
      <PageTemplate isHeader={false} isFooter={false} isLogout={false}>
        <DetailCard />
      </PageTemplate>
      <StyledTopBackground />
    </>
  );
};

export default DetailCardPage;
