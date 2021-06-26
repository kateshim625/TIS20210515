import React, { Componen, PureComponent, Fragment } from 'react';
import CrudListItem from './CrudListItem';

export default class CrudList extends React.Component {
  render() { // JSX로 화면 만들기
      const { items } = this.props;
      //debugger
      const arrs = items.map((item, index, array) => {
          //필드값이아니라 맴안에서사용하는 매게변수이기때문에 this안써도된다
          return (
              <CrudListItem key={index}
                  item={item}
                  index={index}
                  {...this.props} />
          )
      });
      return (
          <table>
              <thead>
                  <tr>
                      <th>ID</th>
                      <th>NAME</th>
                      <th>POWER</th>
                      <th>CRUD</th>
                  </tr>

              </thead>
              <tbody>
                  {arrs}
              </tbody>
          </table>
      )
  }
};

