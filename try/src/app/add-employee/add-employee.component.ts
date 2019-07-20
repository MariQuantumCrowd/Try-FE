import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../_services/my-service.service';
import { createUserModel } from '../_models/createUserModel';
// import { NgxSpinnerService } from 'ngx-spinner';
import swal from 'sweetalert2';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})

export class AddEmployeeComponent implements OnInit {
  form: createUserModel = new createUserModel();

  constructor(
    private MyServiceService: MyServiceService,
    // private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    console.log('hahaha')
  }

  registerEmployee(){
    console.log('click')
    console.log(this.form)
    // this.spinner.show();
            this.MyServiceService.doBuy(this.form).subscribe(res =>{
              console.log(res)
                if(res.status === 'success'){
                    swal.fire('Successfully Move Token!',res.message,'success');
                    // this.registerEmployee();
                    // this.spinner.hide();
                } else if(res.status === 'Error'){
                    swal.fire('Failed Move Token',
                              res.message,
                              'error');
                              // this.registerEmployee();
                              // this.spinner.hide();
                } 
                else {
                    swal.fire('Unkown Error',
                              res.message,
                              'error');
                              // this.getBalance();
                              // this.spinner.hide();
                } 
            })
  }

}
