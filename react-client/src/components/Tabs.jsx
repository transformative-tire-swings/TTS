import React from 'react';
import { Label, Menu, Tab, Image, Video} from 'semantic-ui-react';

const panes = [
  {
    menuItem: { key: 'directions', icon: 'marker', content: 'Directions' },
    render: () =>
      <Tab.Pane>
        <Image fluid src='../libs/directions.png' />
      </Tab.Pane>,
  },
  {
    menuItem: { key: 'weather', icon: 'sun', content: 'Weather' },
    render: () =>
      <Tab.Pane>
        <Image fluid src='../libs/weather.png' />
      </Tab.Pane>,
  },
  {
    menuItem: { key: 'food', icon: 'yelp', content: 'Food Recommendations' },
    render: () =>
      <Tab.Pane>
        <Image fluid src='../libs/yelp.png' />
      </Tab.Pane>,
  },
  {
    menuItem: { key: 'users', icon: 'smile', content: 'Goats' },
    render: () =>
      <Tab.Pane>
        <Image fluid src='../libs/goat.gif' style={{height: '65%'}} />
      </Tab.Pane>,
  },
];

const Tabs = () => (
  <Tab menu={{color: 'red', attached: true, tabular: false}} style={{color: 'red'}} panes={panes} />
);

export default Tabs;
