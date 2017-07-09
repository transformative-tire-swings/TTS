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
    menuItem: { key: 'users', icon: 'marker', content: 'Goats' },
    render: () =>
      <Tab.Pane>
        <Image fluid src='https://media.giphy.com/media/13EklP8BpX3m80/giphy.gif' />
      </Tab.Pane>,
  },
];

const Tabs = () => (
  <Tab menu={{color: 'red', attached: true, tabular: false}} style={{color: 'red'}} panes={panes} />
);

export default Tabs;
