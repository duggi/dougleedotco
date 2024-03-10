import { Outlet } from 'react-router-dom';

import Top from 'components/shared/Top';
import Footer from 'components/shared/Footer';




const LayoutStandard = () => {
  return (
    <div>
      <Top />
      <hr/>
      <div>
        LeftNav
      </div>
      <div>
        <h1>Title Block of LayoutStandard</h1>
        OUTLET
        <Outlet />
      </div>
      <div>
        RightBar
      </div>
      <hr />
      <Footer />
    </div>
  );
}



export default LayoutStandard;

