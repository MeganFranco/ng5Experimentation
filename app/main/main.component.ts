import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl,
   FormBuilder, Validators, ReactiveFormsModule,
 FormControlName  } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public badgeForm: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    //what we want, { first name, last name, }, { city and state, neightborhood, job},
    // { favorite color/animal }
    this.badgeForm = new FormGroup({
      name: new FormControl( '', [<any>Validators.required, <any>Validators.minLength(5)] ),
      address: new FormGroup ({
        city: new FormControl ('', <any>Validators.required),
        state: new FormControl ('', <any>Validators.required),
        neighborhood: new FormControl ('', <any>Validators.required),
        zip: new FormControl ('', <any>Validators.required)
      }),
      favorites: new FormGroup({
         animal: new FormControl ('', <any>Validators.required),
         color:  new FormControl ('', <any>Validators.required)
      })
    })
  }

}
