import { Component } from '@angular/core';
import {  FormBuilder,FormGroup,ReactiveFormsModule,Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


interface employee{
name:string,
post: string,
address: string
}


@Component({
  selector: 'app-displaypost',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './displaypost.component.html',
  styleUrl: './displaypost.component.css'
})



export class DisplaypostComponent {


 

  userForm!: FormGroup;
   userData: employee | null=null;
   userDataList:employee[]=[];
  editingUserIndex!: number;
  constructor(private fb: FormBuilder) {
   
  }

  ngOnInit(): void{
    this.userForm = this.fb.group({
      employeename: ['', Validators.required],
      employeeaddress: ['', [Validators.required]],
      employeepost: [''],
    });

  }
  onSubmit() {
    if (this.userForm.valid) {
      console.log('Form Submitted:', this.userForm.value);

this.userData={
  name:this.userForm.get('employeename')?.value,
post: this.userForm.get('employeepost')?.value,
address: this.userForm.get('employeeaddress')?.value

}

this.userDataList.push(this.userData);



      this.userForm.reset();
    } else {
      console.log('Form is invalid');
    }
  }

  UpdateForm(EmployeeData: employee) {
    this.userForm.setValue({
      employeename: EmployeeData.name,
      employeeaddress: EmployeeData.address,
      employeepost: EmployeeData.post
    });
    this.editingUserIndex = this.userDataList.indexOf(EmployeeData);
    

}
UpdateFormData() {

const tempUseData={
  name:this.userForm.get('employeename')?.value,
  post: this.userForm.get('employeepost')?.value,
  address: this.userForm.get('employeeaddress')?.value
}
this.userDataList[this.editingUserIndex]=tempUseData;
console.log(this.userDataList);


}



}


