import React, { Componen, PureComponent, Fragment } from 'react';

export default class CrudInput extends React.Component {
  constructor(props) {
      super()
      this.refUserName = React.createRef()
      this.refUserPower = React.createRef()

  }
  doIns = (event) => {
      // 이벤트 핸들러는 화살표 함수로 만들면 this bind()를 생략해도 된다
      console.log(event.target)

      // 유효성 검사: 생략
      if (this.refUserName.current.value.trim() === '') {
          alert('이름을 입력하세요')
          this.refUserName.current.focus()
          event.preventDefault()
          return false
      }
      if (this.refUserName.current.value.trim() === '') {
          alert('파워를 입력하세요')
          this.refUserPower.current.focus()
          event.preventDefault()
          return false
      }
      if (isNaN(Number(this.refUserPower.current.value))) {
          alert('파워에 숫자를 입력하세요')
          this.refUserPower.current.value = ""
          this.refUserPower.current.focus()
          event.preventDefault()
          return false
      }

      // ref 를 사용하여 현재 입력된 값을 가져온다.
      //const name = this.refUserName.current.value
      //const power = Number(this.refUserPower.current.value)
      const newitem = {
          id: null,
          name: this.refUserName.current.value,
          power: Number(this.refUserPower.current.value),
      }
      //부모의 입력값을 전달 > 부모 컴포넌트 콜백 메서드 호출
      this.props.doIns(newitem);

      //입력값 초기화
      this.refUserName.current.value = "";
      this.refUserPower.current.value = 0;
  }
  render() { // JSX로 화면 만들기
      return (
          <div>
              <div>
                  <label htmlFor="">Name : </label>
                  <input type="text" name="name" placeholder="이름을 입력하세요" ref={this.refUserName} defaultValue={""} />
              </div>
              <div>
                  <label htmlFor="">Power : </label>
                  <input type="text" name="power" placeholder="파워를 입력하세요" ref={this.refUserPower} defaultValue={0} />
              </div>
              <button onClick={this.doIns}>Add</button>
          </div>
      )
  }
};
