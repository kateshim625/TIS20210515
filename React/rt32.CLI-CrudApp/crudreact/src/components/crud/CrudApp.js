import React, { Componen, PureComponent, Fragment } from 'react';
import CrudInput from './CrudInput';
import CrudList from './CrudList';
//...중략

export default class CrudApp extends React.Component {
  state = {
      items: [
          { id: 1, name: "슈퍼맨", power: 100 },
          { id: 2, name: "아쿠아맨", power: 300 },
          { id: 3, name: "스파이더맨", power: 500 },
          { id: 4, name: "배트맨", power: 30 },
      ]
  }
  func = {
      doIns(newitem) {
          //debugger;
          if (this.state.items.length > 0) {
              //add
              const maxitem = this.state.items.reduce((prev, curt) => {
                  //debugger
                  if (prev.id > curt.id)
                      return prev.id;
                  else
                      return curt;
              });
              newitem.id = maxitem.id + 1;
          }
          else {
              //create array
              newitem.id = 1;
          }
          const newitems = [...this.state.items, newitem];
          this.setState({
              ...this.state,
              items: newitems,
          })
      },
      doDel(index, item) {
          // ...생략
          const r = window.confirm("정말로 삭제하시겠습니까?")
          if (!r) return;

          const newitems = this.state.items.filter((element, index) => {
              return element.id !== item.id;
          });
          this.setState({
              ...this.state,
              items: newitems,
          })
      },
      doUp(index, item) {
          const newitems = this.state.items.map((element, index) => {
              if (element.id === item.id) {
                  element.power = element.power + 100;
              }
              return element;
          });
          this.setState({
              ...this.state,
              items: newitems,
          })
      },
      doDown(index, item) {
          const newitems = this.state.items.map((element, index) => {
              if (element.id === item.id) {
                  element.power = element.power - 50;
              }
              return element;
          });
          this.setState({
              ...this.state,
              items: newitems,
          })
      },
      doSave(newitem) {
          //debugger
          const newitems = this.state.items.map((element, index) => {
              if (element.id === newitem.id) {
                  return newitem;
              } else {
                  return element;
              }
          });
          this.setState({
              ...this.state,
              items: newitems,
          })
      },
  }
  constructor(props) {
      super()
      this.func.doIns = this.func.doIns.bind(this)
      this.func.doDel = this.func.doDel.bind(this)
      this.func.doUp = this.func.doUp.bind(this)
      this.func.doDown = this.func.doDown.bind(this)
      this.func.doSave = this.func.doSave.bind(this)
  }
  render() { // JSX로 화면 만들기
      return (
          <div id="app">
              <h1>Creat Read Update Delete</h1>
              <CrudInput {...this.props} {...this.state} {...this.func} {...this.sytle} />
              <hr />
              <CrudList {...this.props} {...this.state} {...this.func} {...this.sytle} />
          </div>
      )
  }
};
