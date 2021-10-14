import PageTemplate from 'components/Common/Base/PageTemplate';
import Complete from 'components/Complete';
import useBring from 'hooks/Bring/useBring';

const BringCompletePage = (): JSX.Element => {
  const { onClickComplete } = useBring();
  return (
    <PageTemplate isHeader isFooter={false} isLogout={false}>
      <Complete
        title="가져오기완료"
        type="가져오기"
        handleClick={onClickComplete}
        bringAccount="001-01-1234567"
        bringMoney="10000"
      />
    </PageTemplate>
  );
};

export default BringCompletePage;
