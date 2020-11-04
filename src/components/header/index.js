import React,{Component} from 'react'
import PropTypes from 'prop-types'

class HeaderComponent extends Component{


    render() {
        return (
            <div id='header'>
                {this.props.title}
            </div>
        );
    }
};


//字符串类型，必填
HeaderComponent.propTypes={
    title:PropTypes.string.isRequired
};

//默认值
HeaderComponent.defaultProps={
    title:'默认导航'
}

export default HeaderComponent;