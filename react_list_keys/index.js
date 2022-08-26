const root = ReactDOM.createRoot(
    document.getElementById('root')
  );

function Input({name}){
  return (
    <div>
    <label>{name}</label>
    <input />
    </div>
  );
}
  
class Example extends React.Component {
    constructor(){
      super();
      this.state = {
        list: [
          'A',
          'B'
        ]
      };
      this.handleOnClick = this.handleOnClick.bind(this)
    }

    handleOnClick(){
      this.setState((state)=>{
        return {list: ['C', ...state.list]}
      })
    }

    render(){
      return (
        <>
        <button onClick={this.handleOnClick}>Add input form</button>
        {this.state.list.map((item, index)=> {
          return <Input key={index} name={item} />
        })}
        </>
      )
    }
}

root.render(<Example />)