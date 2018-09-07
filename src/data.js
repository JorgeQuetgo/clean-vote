import React from 'react';
import Assessment from 'material-ui/svg-icons/action/assessment';
import GridOn from 'material-ui/svg-icons/image/grid-on';
import PermIdentity from 'material-ui/svg-icons/action/perm-identity';
import Web from 'material-ui/svg-icons/av/web';
import {cyan600, pink600, purple600, red100} from 'material-ui/styles/colors';
import ExpandLess from 'material-ui/svg-icons/navigation/expand-less';
import ExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';

const data = {
  menus: [
    { text: 'DashBoard', icon: <Assessment/>, link: '/dashboard' },
    { text: 'Add Participant', icon: <Web/>, link: '/form' },
    { text: 'Make your Vote', icon: <GridOn/>, link: '/table' },    
  ],
  tablePage: {
    items: [
      {id: 1, name: 'Partcipant1', partido: '$50.00', category: 'Democrata', votes: '1500'},
      {id: 2, name: 'Participant2', partido: '$150.00', category: 'democrata', votes: '4231'},
      {id: 3, name: 'Participant3', partido: '$250.00', category: 'Democarata', votes: '460'},
      {id: 4, name: 'Participant4', partido: '$70.00', category: 'Republicano', votes: '248'},      
    ]
  },
  dashBoardPage: {
    recentProducts: [
      {id: 1, title: 'Samsung TV', text: 'Samsung 32 1080p 60Hz LED Smart HDTV.'},
      {id: 2, title: 'Playstation 4', text: 'PlayStation 3 500 GB System'},
      {id: 3, title: 'Apple iPhone 6', text: 'Apple iPhone 6 Plus 16GB Factory Unlocked GSM 4G '},
      {id: 4, title: 'Apple MacBook', text: 'Apple MacBook Pro MD101LL/A 13.3-Inch Laptop'}
    ],
    monthlySales: [
      {name: 'Jan', uv: 3700},
      {name: 'Feb', uv: 3000},
      {name: 'Mar', uv: 2000},
      {name: 'Apr', uv: 2780},
      {name: 'May', uv: 2000},
      {name: 'Jun', uv: 1800},
      {name: 'Jul', uv: 2600},
      {name: 'Aug', uv: 2900},
      {name: 'Sep', uv: 3500},
      {name: 'Oct', uv: 3000},
      {name: 'Nov', uv: 2400},
      {name: 'Dec', uv: 2780}
    ],
    newOrders: [
      {pv: 2400},
      {pv: 1398},
      {pv: 9800},
      {pv: 3908},
      {pv: 4800},
      {pv: 3490},
      {pv: 4300}
    ],
    browserUsage: [
      {name: 'Participant1', value: 1500, color: cyan600, icon: <ExpandMore/>},
      {name: 'Participant2', value: 4231, color: pink600, icon: <ChevronRight/>},
      {name: 'Participant3', value: 460, color: purple600, icon: <ExpandLess/>},
      {name: 'Participant4', value: 248, color: red100, icon: <ExpandLess/>}
    ]
  }
};

export default data;
