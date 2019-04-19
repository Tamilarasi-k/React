import React,{Component} from 'react'
class form extends Component{
    constructor(props){
     super(props)
     this.initialstate ={
         name:'',
         age:'' 
     }
     this.state = this.initialstate

     this.  handlechange = event =>{
        const{name,value}= event.target
        this.setState({
            [name]:value,
            
        })
    }

    this.submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }
}
render(){
    const { name, age } = this.state;
    return(
<form>

    <label>Name</label>
    <input type ="text" name ="name" value ={name} onChange={this.handlechange}/>
    <label>Age</label>
    <input type ="text" name ="age" value ={age} onChange ={this.handlechange}/>
    <input type ="button" value="Submit" onClick ={this.submitForm} />
</form>
    );
}
}
export default form;