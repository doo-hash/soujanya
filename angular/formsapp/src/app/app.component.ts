import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators,FormBuilder,FormArray } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formsapp';

  langs:string[]=['English','German','French','Arabic','Hindi'];
  myForm=new FormGroup({
    fullname:new FormGroup({
      firstname:new FormControl('',Validators.required),
      lastname: new FormControl('',Validators.required)
    }),
    email:new FormControl('',[Validators.required,Validators.pattern("[^@]*@[^@]*")]),
    password:new FormControl('',[Validators.required,Validators.minLength(8)]),
    language:new FormControl('')
  });
  onSubmit(){
    if(this.myForm.valid){
      console.log("form submitted");
      this.myForm.reset();
    }
  }

/*  //FORM BUILDER
  constructor(private fb1:FormBuilder){}
  userData1=this.fb1.group({
    fname1:['',Validators.required],
    lname1:[''],
    contact_info:this.fb1.group({
      address1:[''],phone:['']
    })
  });
onSubmit(){
  var fn1=this.userData1.controls['fname1'].value;
  var ln1=this.userData1.get('lname1')?.value;
  console.log('first name: '+fn1);
  console.log('lastname'+ln1);
  console.log("contact info>> phone: "+this.userData1.get(['contact_info','phone'])?.value);
}
*/
/*//PARTIALLY UPDATE THE FORM
updateprofile(){
  this.userData1.patchValue({
    fname1:'soujanya',
    contact_info:{
      address1:" 296 vt colony"
    }
  })*/
}
 /* 
 //FORM CONTROL, FORMGROUP, PATCHVALUE
 frm=new FormControl('');
  changeValue(){
    this.frm.setValue('souji');
  }
  profilefrm=new FormGroup({
    firstname:new FormControl('soujanya',Validators.required),
    lastname:new FormControl('maachannagari'),
    emailid:new FormControl(''),
    address:new FormGroup({
      street:new FormControl(""),
      city:new FormControl(''),
      state1:new FormControl(''),
      pincode:new FormControl('')
    })
  });
  profilefrm=this.fb.group({
      firstname:['soujanya',Validators.required],
      lastname:['maachannagari'],
      emailid:[''],
      address:this.fb.group({
        street:[""],
        city:[''],
        state1:[''],
        pincode:['']
      }),
      aliases:this.fb.array([
        this.fb.control('')
      ])
    });
    constructor(private fb:FormBuilder){}
    get aliases(){
      return this.profilefrm.get('aliases') as FormArray; 
    }
    adaliases(){
      return this.aliases.push(this.fb.control(''));
    }
    onSubmit(){
      console.warn(this.profilefrm.value);
    }
    updateprofile(){
      this.profilefrm.patchValue({
        emailid:"sou@ff.con",
        address:{
          street: "296 vt colony",
          city:"vikarabad",
          state1:"vikarabad",
          pincode:"501101"
        }
      });
    }  
  }
frm= new FormControl('hai welcome');
  setDefaultValue(){
    this.frm.setValue('hello');
    console.log(this.frm.value);
  }
  userData=new FormGroup({
    fname:new FormControl('',Validators.required),
    lname:new FormControl('',Validators.required),
    email:new FormControl('', Validators.required),
    salary:new FormControl('')
  });
  onSubmit(){
    console.warn(this.userData.value);
  }*/

