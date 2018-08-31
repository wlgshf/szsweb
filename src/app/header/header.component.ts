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
  vegetables = ['asparagus', 'bamboo', 'potato', 'carrot', 'cilantro', 'potato', 'eggplant'];
  validateForm: FormGroup;
  validateForm2: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
    this.validateForm2 = this.fb.group({
      userName: [null, [Validators.required]],
      captcha: [null, [Validators.required]]
    });
  }

  // 用户登录
  submitForm(): void {
    console.log('getpasss', this.validateForm.value['password']);
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    this.router.navigate(['/home'], {relativeTo: this.activatedRoute});
  }

  // 新用户注册
  submitForm2() {
    console.log('validateForm2', this.validateForm2.value['userName']);
    for (const i in this.validateForm2.controls) {
      this.validateForm2.controls[i].markAsDirty();
      this.validateForm2.controls[i].updateValueAndValidity();
    }
  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }


  openChildren(): void {
    this.childrenVisible = true;
  }

  closeChildren(): void {
    this.childrenVisible = false;
  }

  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
    console.log(e.preventDefault());
  }

}
