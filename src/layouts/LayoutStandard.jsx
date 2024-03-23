import { Outlet } from 'react-router-dom';

import Top from 'layouts/shared/Top';
import Bottom from 'layouts/shared/Bottom';



const LayoutStandard = () => {
  return (
    <>
      <div className="grid main-grid lg:mx-auto">
        <Top />
        <div className="left-rail bg-green-100">
          LeftRail
        </div>
        <div className="content bg-red-100">
          <h1>Title Block of LayoutStandard</h1>
          Content OUTLET
          <Outlet />
        </div>
        <div className="right-rail bg-blue-100 p-6">
          RightRail
          <div className="card p-4 bg-white mb-4">
            <h2>I am a card</h2>
            <p>Lorem ipsum dolor amet</p>
          </div>
          <div className="card p-4 bg-white mb-4">
            <h2>I am a card</h2>
            <p>Lorem ipsum dolor amet</p>
          </div>
          <div className="card p-4 bg-white mb-4">
            <h2>I am a card</h2>
            <p>Lorem ipsum dolor amet</p>
          </div>
        </div>
        <Bottom />
      </div>
    </>
  );
}



export default LayoutStandard;
