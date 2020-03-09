import React, { Component } from 'react';
import _ from 'lodash';

class TableBody extends Component {

    renderCell = (item, column) => {
        if (column.content) return column.content(item)
        
        return _.get(item, column.path)
    };  
  
    createKey = (item, column) => {
        return item._id + (column.path || column.key);
    };

    isAddElements = (rows) => {
        if (typeof(rows) === 'string' && rows.indexOf("imageLink => ") === -1  || typeof(rows) !== 'string')  {
            return rows;
        }
      
        if (typeof(rows) === 'string' && rows.search("imageLink => ") !== -1 ) {
          return this.addElements(rows.substring("imageLink => ".length, rows.length));
        }

    };

    addElements = (imgLink) => {
        // 需要指定key 不重复，否则会报警告
        return <img src={imgLink} style={{width:'10%'}}/>;
    };

    render() { 
        const { data, columns } = this.props;   
        
        return ( 
            <tbody>
              {data.map(item => (
                <tr key={item._id}>
                  {columns.map(column => <td key={this.createKey(item, column)}>{this.isAddElements(this.renderCell(item, column))}</td>)}
                </tr>
              ))}
            </tbody>
        );
    }
}
 
export default TableBody;