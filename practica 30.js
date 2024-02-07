'use strict'

class User{
      constructor(username,password,email) {
        this.name = username;
        this.password = password;
        this.email = email;
      }
      login(username,password) {
        // validar usuario y contraseña if (var1 ===var && var1 ===var) else el usuario pasword incorrecto)
        if (this.name === username && this.password === password) {
            alert('welcome');
            
        }else {
            alert ('OOOps !!!');
        }
     }
        resetPassword (newPassword){
             this.password = newPassword
        }
      updataInfo(newEmail){
           this.email = newEmail
    } 
    showInfo (){
        alert(`Usuario: ${this.username}(${this.email})`)
    }    
    }
   // INSTANCIA: CREAR UN OBJETO DENTRO DE LA CLASE 
    let user = new User('magb', '1234','m@g.com');
    user.login ('magb', '1234');
    user.resetPassword('admin');
    user.login ('magb', 'admin');
    user.updataInfo('m@gcom');
    user.login('magb', 'm@g.com');
    user.showInfo();
    




 