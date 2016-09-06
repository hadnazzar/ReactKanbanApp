import React, { Component, PropTypes } from 'react';
import {DropTarget} from 'react-dnd';
import Card from './Card';
import constants from './constants';

const ListTargetSpec = {
	hover (props,monitor){
		const draggedId = monitor.getItem().id;
		props.cardCallbacks.updateStatus(draggedId,props.id)
	}
};

function collect(connect,monitor) {
	return{
		connectDropTarget: connect.dropTarget()
	}
}

class List extends React.Component{
	render(){

		const {connectDropTarget} = this.props;

		let cards = this.props.cards.map((card) => {
			return <Card key={card.id}
						 taskCallbacks={this.props.taskCallbacks}
						 cardCallbacks={this.props.cardCallbacks}
						 id={card.id}
						 title={card.title}
						 description={card.description}
						 color={card.color}
						 tasks={card.tasks}
				   />
		});
		return connectDropTarget (
		<div className="list">
		<h1>{this.props.title}</h1>
			{cards}
		</div>
		)
	}
}

List.PropTypes ={
	title: PropTypes.string.isRequired,
	cards: PropTypes.arrayOf(PropTypes.object),
	taskCallBacks : PropTypes.object,
	cardCallbacks: PropTypes.object,
	connectDropTarget: PropTypes.func.isRequired
}

export default DropTarget(constants.CARD, ListTargetSpec,collect)(List);