import React from "react";
import drag from "../../../image/drag.png";
import Down from "../../../image/tick-red.png";
import Up from "../../../image/tick-green.png";
import sortingImg from "../../../image/sortingLogo.png";
import  "./Table.css"
const DeviceInventory = () => {
  const devices = [
    {
      ip: "192.168.1.33",
      device: "Cisco IOS-XR",
      name: "San Francisco Core",
      operationalState: "Down",
      adminState: "Up",
      errors: 3,
    },
    {
      ip: "192.168.1.128",
      device: "Cisco IOS-XE",
      name: "San Francisco Edge",
      operationalState: "Down",
      adminState: "Up",
      errors: 2,
    },
  ];

  const headerData = [
    "Device Type",
    "IP Address",
    "Device",
    "Device Name",
    "Operational State",
    "Admin State",
    "Errors",
    "Device Config",
  ];

  return (
    <div className="box-inventory">
      <h3 className="box-heading">Device Inventory</h3>
      <div className="table-container">
      <div className="table-container">
  <table className="responsive-table">
    <thead>
      <tr className="row-table-border">
        {headerData.map((header, index) => (
          <th key={index} className="header-cell">
            <span>
              {header} <img src={sortingImg} alt="Sort" className="sort-icon" />
            </span>
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {devices.map((device, index) => (
        <tr key={index} className="table-row">
          <td>
            <img src={drag} alt="Drag" className="icon" />
          </td>
          <td>{device.ip}</td>
          <td>{device.device}</td>
          <td>{device.name}</td>
          <td>
            <div className="state">
              <img
                src={device.operationalState === "Up" ? Up : Down}
                alt="State"
                className="icon"
              />
              {device.operationalState}
            </div>
          </td>
          <td>
            <div className="state">
              <img
                src={device.adminState === "Up" ? Up : Down}
                alt="State"
                className="icon"
              />
              {device.adminState}
            </div>
          </td>
          <td className="errors">
            {device.errors} <span className="critical">Critical</span>
          </td>
          <td>
            <button className="config-button">Show Config</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

</div>

    </div>
  );
};

export default DeviceInventory;
