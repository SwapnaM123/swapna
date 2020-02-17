import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Login';


constructor(private fm:FormBuilder, private ht:HttpClient){}
dis:any;

myform=this.fm.group({
  username:[],
  password:[]
})

a(){

  if(this.myform.value.username=="18164" && this.myform.value.password=="Ojas1525")
  {
    this.ht.post('http://192.168.1.155:8089/login',this.myform.value).subscribe( response => { console.log(response);
  this.dis=response['Authorization']
  localStorage.setItem('tok',this.dis);


})

  }
  else{

    alert('Invalid credentials');
  }
}



}
