import React, { Componen, PureComponent, Fragment } from 'react';

export default class CrudListItem extends React.Component {
  state = {
      isEditMode: false
  }
  constructor(props) {
      super()
      this.refUserName = React.createRef()
      this.refUserPower = React.createRef()
  }
  doDel = (event) => {
      //debugger
      const { index, item } = this.props;
      this.props.doDel(index, item);
  }
  doUp = (event) => {
      //debugger
      const { index, item } = this.props;
      this.props.doUp(index, item);
  }
  doDown = (event) => {
      //debugger
      const { index, item } = this.props;
      this.props.doDown(index, item);
  }
  doEdit = (event) => {
      //debugger
      //this.state.isEditMode = true;
      this.setState({
          ...this.state,
          isEditMode: true
      })
  }
  doSave = (event) => {
      //debugger
      //this.state.isEditMode = true;
      this.setState({
          ...this.state,
          isEditMode: false
      })
      const newitem = {
          id: this.props.item.id,
          name: this.refUserName.current.value,
          power: Number(this.refUserPower.current.value),
      }
      this.props.doSave(newitem);
  }
  render() { // JSX로 화면 만들기
      //const {item} = this.props.item;
      const { item } = this.props;
      const strong = item.power >= 300 ? "strong" : "";
      const formEdit = (
          <tr className={strong}>
              <td>{item.id}</td>
              <td>
                  <input type="text" name="name" placeholder="이름을 입력하세요" ref={this.refUserName} defaultValue={item.name} />
              </td>
              <td><input type="text" name="power" placeholder="파워를 입력하세요" ref={this.refUserPower} defaultValue={item.power} />
              </td>
              <td>
                  <button onClick={this.doDel}>Del</button>
                  <button onClick={this.doUp}>Power Up</button>
                  <button onClick={this.doDown}>Power Down</button>
                  <button onClick={this.doSave}>Save</button>
              </td>
          </tr>
      )
      const formView = (
          <tr className={strong}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.power}</td>
              <td>
                  <button onClick={this.doDel}>Del</button>
                  <button onClick={this.doUp}>Power Up</button>
                  <button onClick={this.doDown}>Power Down</button>
                  <button onClick={this.doEdit}>Edit</button>
              </td>
          </tr>
      )
      if (this.state.isEditMode)
          return formEdit
      else
          return formView
  }
};

