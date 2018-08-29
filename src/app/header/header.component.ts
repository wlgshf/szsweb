import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  visible = false;
  childrenVisible = false;
  // vegetables = ['asparagus', 'bamboo', 'potato', 'carrot', 'cilantro', 'potato', 'eggplant'];
  validateForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  submitForm(): void {
    console.log('getpasss', this.validateForm.value['password']);

    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    this.router.navigate(['/home'], {relativeTo: this.activatedRoute});
  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  //
  // openChildren(): void {
  //   this.childrenVisible = true;
  // }
  //
  // closeChildren(): void {
  //   this.childrenVisible = false;
  // }
}
