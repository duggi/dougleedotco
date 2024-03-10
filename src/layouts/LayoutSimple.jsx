import { Outlet } from 'react-router-dom';

import Top from 'components/shared/Top';
import Footer from 'components/shared/Footer';



const LayoutSimple = () => {
  return (
    <div>
      <Top />
      <hr/>
      <h1>Title Block of LayoutSimple</h1>
      <div>
        <Outlet />
      </div>
      <hr />
      <Footer />
    </div>
  );
}



export default LayoutSimple;
