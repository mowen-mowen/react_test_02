import './App.css';
import React from "react";
import ReactDom from 'react-dom';
import HeaderCompoent from './components/header'


class App extends React.Component{

    //构造函数
    constructor(props) {
        super(props);
        this.state={
            boxShow:true,
            goods:[
                {id:1,name:'qwe'},
                {id:2,name:'wer'},
                {id:3,name:'ert'}
            ]
        }
    }

    //生命周期函数

    //页面将要加载
    UNSAFE_componentWillMount (){
        console.log('componentWillMount');
    };


    //更新
    shouldComponentUpdate(newProps,newStates){

    }


    componentDidMount(){
        console.log(this.refs.red);

        //获取真是Dmo，耗费性能
        // let header=document.getElementById('header');
        // console.log(header)

        //获取虚拟dmo，
        let header=ReactDom.findDOMNode(document.getElementById('header'));
        console.log(header.innerhtml);
    };

    changeShow(){
        this.setState({boxShow:!this.state.boxShow})
    }

    render(){

        //  输出变量
        const name='张三';
        //输出html标签
        const test="<span style='color:red'>红苹果</span>"

        const {boxShow}=this.state;

        let boxItem=boxShow?<div className='box'></div>:"";

        return (
            <div className="App">
                {/*<HeaderCompoent title='er' ></HeaderCompoent>*/}
                <HeaderCompoent  ></HeaderCompoent>

                {name}
                <br/>

                <div dangerouslySetInnerHTML={{__html:test}}></div>

                <button type='button' onClick={this.changeShow.bind(this)}>{boxShow?"隐藏方块":"显示方块"}</button>

                { boxShow && (<div className='box'></div>)  }

                {/*{boxItem}*/}

                <ul>
                    {
                        this.state.goods.map((item,index)=>{
                            return(
                                <li key={index}>{item.name}</li>
                            )
                        })
                    }
                </ul>

            </div>
        );
    }
}

export default App;
