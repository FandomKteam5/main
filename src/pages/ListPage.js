import CreditApp from '../components/listpage/CreditApp';
import IdolCarousel from '../components/listpage/idolcarousel/IdolCarousel';
import ChartOfMonth from '../components/listpage/ranklist/ChartOfMonth';

const ListPage = () => {
  return (
    <div>
      <CreditApp />
      <IdolCarousel />
      <ChartOfMonth />
    </div>
  );
};

export default ListPage;
