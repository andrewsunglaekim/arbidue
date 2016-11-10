import React, {Component} from 'react'
import Number from './Number'
import AnswerForm from './AnswerForm'
import Timer from '../components/Timer'

class Quiz extends Component {
  render(){
    return (
      <div className='quiz-container'>
        <Timer time={this.props.time}/>
        <Number number={this.props.numbers[0]}/>
        <div className="operator">{this.props.operator}</div>
        <Number number={this.props.numbers[1]}/>
        <div className="operator">=</div>
        <AnswerForm
          submitAnswer={this.props.submitAnswer}
          />
      </div>
    )
  }
}

export default Quiz
