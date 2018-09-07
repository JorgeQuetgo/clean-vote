import React from 'react';
import {cyan600, pink600, purple600, orange600} from 'material-ui/styles/colors';
import Assessment from 'material-ui/svg-icons/action/assessment';
import Face from 'material-ui/svg-icons/action/face';
import ThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import InfoBox from '../components/dashboard/InfoBox';
import NewOrders from '../components/dashboard/NewOrders';
import MonthlySales from '../components/dashboard/MonthlySales';
import BrowserUsage from '../components/dashboard/BrowserUsage';
import RecentlyProducts from '../components/dashboard/RecentlyProducts';
import globalStyles from '../styles';
import Data from '../data';
import MapsPersonPin from 'material-ui/svg-icons/action/assessment';
import ImageNaturePeople from 'material-ui/svg-icons/action/assessment';

const DashboardPage = () => {

  return (
    <div>
      <h3 style={globalStyles.navigation}>Application / Dashboard</h3>

      <div className="row">
        {Data.tablePage.items.map(item =>
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
            <InfoBox Icon={Face}
                    color={pink600}
                    title={item.name}
                    value={item.votes}
            />
          </div>
        )}

      </div>

      <div className="row">

      </div>

      <div className="row">
        <div className="col-xs-1 col-sm-1 col-md-6 col-lg-3 m-b-15 ">
          
        </div>

        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
          <BrowserUsage data={Data.dashBoardPage.browserUsage}/>
        </div>



      </div>
    </div>
  );
};

export default DashboardPage;
