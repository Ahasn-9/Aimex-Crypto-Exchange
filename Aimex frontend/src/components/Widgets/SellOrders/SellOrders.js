import { memo, useState, useEffect } from "react";

import Box from "../../Common/Box";
import SellOrdersRow from "./SellOrdersRow";

const SellOrders = memo(() => {
  const [data, setData] = useState([]);
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    const dataArray = [
      {
        id: 1,
        price: "803",
        amount: "0,15",
        total: "237,31",
        currency: "USD",
        type: 3,
      },
      {
        id: 2,
        price: "603",
        amount: "0,15",
        total: "237,31",
        currency: "USD",
        type: 3,
      },
      {
        id: 3,
        price: "103",
        amount: "0,15",
        total: "237,31",
        currency: "USD",
        type: 1,
      },
      {
        id: 4,
        price: "903",
        amount: "0,15",
        total: "237,31",
        currency: "USD",
        type: 3,
      },
      {
        id: 5,
        price: "303",
        amount: "0,15",
        total: "237,31",
        currency: "USD",
        type: 2,
      },
      {
        id: 6,
        price: "2203",
        amount: "0,15",
        total: "237,31",
        currency: "USD",
        type: 1,
      },
      {
        id: 7,
        price: "82,03",
        amount: "0,15",
        total: "237,31",
        currency: "USD",
        type: 1,
      },
      {
        id: 8,
        price: "1703",
        amount: "0,15",
        total: "237,31",
        currency: "USD",
        type: 3,
      },
      {
        id: 9,
        price: "1603",
        amount: "0,15",
        total: "237,31",
        currency: "USD",
        type: 2,
      },
    ];

    setData(dataArray);
  }, []);

  const handleMenuOpen = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <Box>
      <div className="box-title box-vertical-padding box-horizontal-padding no-select">
        <div className="flex flex-center flex-space-between">
          <p>Sales orders</p>
          <button
            type="button"
            className="box-icon pointer"
            onClick={() => handleMenuOpen()}
          >
            <i className="material-icons">more_vert</i>
          </button>

          {menuOpened && (
            <div className="box-dropdown">
              <ul>
                <li>
                  <button type="button">
                    <i className="material-icons">settings</i>
                    Button 1
                  </button>
                </li>
                <li>
                  <button type="button">
                    <i className="material-icons">favorite</i>
                    Button 2
                  </button>
                </li>
                <li>
                  <button type="button">
                    <i className="material-icons">info</i>
                    Button 3
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="box-content box-content-height-nobutton">
        <div className="orders-row">
          {data && data.length > 0 && (
            <table>
              <thead>
                <tr>
                  <th className="left no-select">Fiyat</th>
                  <th className="center no-select">Amount</th>
                  <th className="right no-select">Total</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <SellOrdersRow key={item.id.toString()} item={item} />
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </Box>
  );
});

export default SellOrders;
