import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Center from 'react-center';

class Main extends Component {
	render() {
		return <Center>
			<div id="main">

			<h4>&nbsp;</h4><h4>&nbsp;</h4><h4>&nbsp;</h4><h4>&nbsp;</h4><h4>&nbsp;</h4><h4>&nbsp;</h4><h4>&nbsp;</h4>
			<h1 styles={{alignSelf:'center',fontSize:20,justifyContent:'center',alignItems:'center'}}><strong>Yifan Xing</strong></h1>
			
			<h4>&nbsp;</h4><h4>&nbsp;</h4><h4>&nbsp;</h4>
    		<h4>Hi&nbsp;<img src="https://html-cleaner.com/tinymce2016/plugins/emoticons/img/smiley-cool.gif" alt="cool" /></h4>
    		<h4>I am Yifan Xing,&nbsp;a software developer - primarily&nbsp;focused on the back end.</h4>
    		<h4>&nbsp;</h4>

			</div>
		</Center>

			  document.getElementById('app')
	}
}

export default Main;