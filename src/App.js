import './App.css';
import React from "react";

class App extends React.Component{

    constructor(){
        super();

        this.state={
            users:[
                {name:'张三',sex:'男',checked:false},
                {name:'李四',sex:'男',checked:true},
                {name:'王五',sex:'女',checked:false},
                {name:'冯六',sex:'女',checked:false},
            ],

            allChecked:false
        }
    }

    selectUser(index){
        let tempUsers=this.state.users;
        tempUsers[index].checked=true;

        this.setState({users:tempUsers})
    }

    selectAllUser(){
        this.setState({allChecked:true})
    }


    render(){
        const {allChecked}=this.state;

        return (
            <div className="App">
                <table width="100%" border="1" cellSpacing="0" cellPadding="0">

                    <tbody>
                        <tr style={{color:"white",fontSize:"14px"}}>
                            <td height='40px' align='center' bgcolor="#0099cc" ><input type='checkbox'
                                 checked={allChecked} onChange={this.selectAllUser.bind(this)}/>全选</td>
                            <td align='center' bgcolor="#0099cc" >姓名</td>
                            <td align='center' bgcolor="#0099cc" >管理</td>
                        </tr>

                        {
                            this.state.users.map((item,index)=>{
                                return (
                                    <tr key={index}>
                                        <td height='40px' align='center' ><input type='checkbox' checked={item.checked}
                                            onChange={this.selectUser.bind(this,index)} /></td>
                                        <td align='center' >{item.name}</td>
                                        <td align='center' >删除</td>
                                     </tr>
                                )
                            })
                        }


                    </tbody>


                </table>


            </div>
        );
    }
}

export default App;
