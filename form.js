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
    const {RollNo,Name,Tamil,English,Maths,Science,Social} = this.state;
    return(
<form>

<label>Rollno</label>
    <input type ="text" name ="RollNo" value ={RollNo} onChange={this.handlechange}/><br/><br/>
    <label>Name</label>
    <input type ="text" name ="Name" value ={Name} onChange ={this.handlechange}/><br/><br/>
    <label>Tamil</label>
    <input type ="text" name ="Tamil" value ={Tamil} onChange ={this.handlechange}/><br/><br/>
    <label>English</label>
    <input type ="text" name ="English" value ={English} onChange ={this.handlechange}/><br/><br/>
    <label>Maths</label>
    <input type ="text" name ="Maths" value ={Maths} onChange ={this.handlechange}/><br/><br/>
    <label>Science</label>
    <input type ="text" name ="Science" value ={Science} onChange ={this.handlechange}/><br/><br/>
    <label>Social</label>
    <input type ="text" name ="Social" value ={Social} onChange ={this.handlechange}/><br/><br/>
    <input type ="button" value="Submit" onClick ={this.submitForm} />
</form>
    );
}
}
export default form;
