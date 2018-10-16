var Generator = require('yeoman-generator'); 
var yosay = require('yosay')

class MyBase extends Generator{
    helper(){
        console.log('methods on the parent generator won\'t be called automatically'); 
    }
}

module.exports = class extends Generator{
    constructor(args,opts){
        super(args,opts); 
        this.option('babel')
        this.config.save(); 
        this.helperMethod = function(){
            console.log('won\'t be called automatically'); 
        }; 
    }

    method1(){
        this.log('method 1 just ran'); 
    }

    method2(){
        this.log('method 2 just ran'); 
    }

    async prompting(){
        this.log(yosay('\'Allo \'allo! Out of the box I include HTML5 Boilerplate, jQuery, and a gulpfile to build your app.')); 
        this.answers = await this.prompt([{
        type: 'input', 
        name: 'name', 
        message: 'Your project name', 
        default: this.appname 
    },{
        type : 'confirm', 
        name: 'cool', 
        message : 'Would you like to enable the Cool feature?'
    }, {
        type: 'input', 
        name: 'username', 
        message: 'What\s your Github username', 
        store: true 
    }, {
        type: 'input', 
        name: 'email', 
        message: 'What\s your name', 
        store: true
    }])

        //this.log('app name ',answers.name)
        //this.log('cool feature',answers.cool)
    }

    writing(){
        this.log('cool feature',this.answers.cool); 
    }

    _private_method(){
        console.log('private hey')
    }
}; 