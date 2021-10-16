import PageTemplate from "components/Common/Base/PageTemplate"
import BringMoney from 'components/BringMoney';

const BringMoneyPage = ():JSX.Element => {
  return (
    <PageTemplate isHeader isFooter={false} isLogout={false}>
      <BringMoney/>
    </PageTemplate>
  )
}

export default BringMoneyPage;