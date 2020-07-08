//import Board from '@lourenci/react-kanban'
import '@lourenci/react-kanban/dist/styles.css'
import Board, { addColumn } from '@lourenci/react-kanban'
import React, { Component } from 'react'

const board = {
   columns: [
      {
         id: 1,
         title: 'Backlog',
         cards: [
            {
               id: 1,
               title: 'Add card',
               description: 'Add capability to add a card in a column'
            }
         ]
      },
      {
         id: 2,
         title: 'Doing',
         cards: [
            {
               id: 2,
               title: 'Drag-n-drop support',
               description: 'Move a card between the columns'
            }
         ]
      }
   ]
}
class Wrapper extends Component {
   onCardNew = newCard => {
      const newCar = { id: new Date(), ...newCard }
      return newCar
   }

   render() {
      return (
         <Board
            initialBoard={board}
            allowAddCard
            onNewCardConfirm={this.onCardNew}
            onCardNew={console.log}
         />
      )
   }
}

export default Wrapper
