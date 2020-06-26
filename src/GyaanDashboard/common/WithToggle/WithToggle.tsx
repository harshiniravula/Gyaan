import React from 'react'
import {observer} from 'mobx-react' 
import {observable} from 'mobx'
interface StateProps{
   toggleStatus:boolean
   onToggle:()=>void
}
function WithToggle(props) {
   @observer
   class Toggle extends React.Component {
      @observable toggleStatus
      constructor(props) {
         super(props)
            this.toggleStatus= false
         }

      onToggle = () => {
         this.toggleStatus=!this.toggleStatus
      }
      render() {
         const state={toggleStatus:this.toggleStatus,onToggle:this.onToggle}
         return props.children(state)
      }
   }
   return <Toggle {...props} />
}

export default WithToggle
