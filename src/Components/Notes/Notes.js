import React from 'react';

class Notes extends React.Component {
  constructor(props){
    super(props);
    this.state={
       newItem:"",
      list:[]
    }
  }
  updateInput(key,value){
    //update react state
    this.setState({
      [key]: value
    });
  }
  addItem(){
    //create item with inique id
    const newItem={
      idn: 1+Math.random(),
      value: this.state.newItem.slice()
    };
    //copy of current list of items
    const list=[...this.state.list];
    //add new item to list
    list.push(newItem);
    //update state with new list and reset newItem input
    this.setState({
      list,
      newItem:""
    }); 
}
deleteItem(idn){
  //copy current list of items
  const list=[...this.state.list];
  //filter out item being deleted
  const updatedList=list.filter(item=> item.idn!==idn);
  
  this.setState({list:updatedList}); 
}

render(){
	return(
<div className="white f3">
       Make your To-Do-List here....
       <br/>
       
        <textarea rows="10" cols="65" className="white bg-black"
        value={this.state.newItem} 
        onChange={e=>this.updateInput("newItem",e.target.value)}
        >
        </textarea>
        <button className='w-5 grow f4 link ph3 pv2 dib white bg-black'
          onClick={()=>this.addItem()}
          >
          <strong>Add</strong>
        </button>
        <br/>
        <ul>
        {this.state.list.map(item=>{
          return(
              <li key={item.idn}>
              {item.value}
              <button className='w-5 grow f4 link ph3 pv2 dib white bg-black center'
                onClick={()=>this.deleteItem(item.idn)}
                >
                Done
              </button>
              </li>
            
            )
        })
        }
        </ul>
        </div>
        );
}}

export default Notes;