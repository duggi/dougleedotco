import { Outlet } from 'react-router-dom';

import Top from 'layouts/shared/Top';
import Bottom from 'layouts/shared/Bottom';



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
      <Bottom />
    </div>
  );
}



export default LayoutSimple;
