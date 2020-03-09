import React, { Component } from 'react';
import TableBody from './common/tableBody';

class MobilesTable extends Component {
    columns = [
      { path: 'device.name', label: 'Device'},
      { path: 'platform', label: 'Platform'},
      { path: 'os_version', label: 'version'},
      { path: 'type', label: 'Type'},
      { path: 'status', label: 'Status'},
      { path: 'image', label: ''},
      { 
        key: "add",
        content: mobile => (
          <button 
            onClick={() => this.props.onDelete(mobile)} 
            className="btn btn-danger btn-sm"
          >
            +
          </button>
        )
      }
    ];  


    render() {
        const { mobiles, onDelete, onSelectPlatform } = this.props;
        return (
            <table className="table">
              <thead>
                <tr>
                  <th>Device</th>
                  <th>Platform  </th>
                  <th>version</th>
                  <th>Type    </th>
                  <th>Status</th>
                  <th />
                  <th />
                </tr>
                <tr>
                  <th>
                    <td>
                      <input className="form-control form-control-lg" type="text" />
                    </td>
                  </th>
                  <th>
                    <td>
                      <div className="">
                        <select onChange={(selectedPlatform) => onSelectPlatform(selectedPlatform)} className="form-control form-control-lg" >
                          <option selected></option>
                          <option>iOS</option>
                          <option>Android</option>
                        </select>
                      </div>
                    </td>
                  </th>
                  <th>
                    <td>
                      <input className="form-control form-control-lg" type="text" />
                    </td>
                  </th>
                  <th>
                    <td>
                      <div className="">
                        <select className="form-control form-control-lg">
                          <option selected></option>
                          <option>Phone</option>
                          <option>Tablet</option>
                        </select>
                      </div>
                    </td>
                  </th>
                  <th>
                    <td>
                      <div className="">
                        <select className="form-control form-control-lg">
                          <option selected></option>
                          <option>HIGHLY_AVAILABLE</option>
                          <option>AVAILABLE</option>
                        </select>
                      </div>
                    </td>
                  </th>
                </tr>
              </thead>
              <TableBody columns={this.columns} data={mobiles}/>
            </table>
        );
    }
}
 
export default MobilesTable;