import { memo, useState, useEffect } from 'react';

import Box from '../../Common/Box';
import RecentActivityRow from './RecentActivityRow';

const RecentActivity = memo(() => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dataArray = [
      {
        id: 1,
        type: 1,
        time: '06:25:57',
        amount: '2150',
        currency: 'USD',
        status: 1,
      },
      {
        id: 2,
        type: 1,
        time: '08:30:25',
        amount: '1.465',
        currency: 'USD',
        status: 1,
      },
      {
        id: 3,
        type: 2,
        time: '09:16:11',
        amount: '6.000',
        currency: 'USD',
        status: 2,
      },
      {
        id: 4,
        type: 1,
        time: '12:05:03',
        amount: '2.225',
        currency: 'USD',
        status: 1,
      },
      {
        id: 5,
        type: 1,
        time: '14:46:53',
        amount: '128,01',
        currency: 'USD',
        status: 3,
      },
      {
        id: 6,
        type: 2,
        time: '18:01:03',
        amount: '350,00',
        currency: 'USD',
        status: 2,
      },
    ];

    setData(dataArray);
  }, []);

  return (
    <Box>
      <div className='box-title box-vertical-padding box-horizontal-padding no-select'>
        <div className='flex flex-center flex-space-between'>
          <div>
            <p>Recent Transactions</p>
          </div>
          <ul>
            <li>
              <button type='button'>Yesterday</button>
            </li>
            <li>
              <button type='button' className='active'>
              Today
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className='box-content box-content-height-nobutton'>
        {data && data.map((item) => <RecentActivityRow key={item.id.toString()} item={item} />)}
      </div>
    </Box>
  );
});

export default RecentActivity;
