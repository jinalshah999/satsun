import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  FormArray,
} from "@angular/forms";

@Component({
  selector: "app-usersignup",
  templateUrl: "./usersignup.component.html",
  styleUrls: ["./usersignup.component.css"],
})
export class UsersignupComponent implements OnInit {
  signupForm: FormGroup;
  constructor() {}
  slangWords: string[] = ["jinal", "xyz", "abc"];
  ngOnInit(): void {
    this.signupForm = new FormGroup({
      user_name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern("[a-zA-z]*"),
        this.invalidNames.bind(this),
      ]),
      user_email: new FormControl(null),
      password_group: new FormGroup(
        {
          user_password: new FormControl(null, Validators.required),
          user_confirm_password: new FormControl(null),
        },
        this.matchPassword.bind(this)
      ),
      user_notification: new FormControl("x"),
      x: new FormControl(null, Validators.required),
      y: new FormControl(null),
      user_hobbies: new FormArray([]),
    });
    this.signupForm.get("user_notification").valueChanges.subscribe((x) => {
      this.applyValidation(x);
    });
  }
  getHobbies() {
    return (<FormArray>this.signupForm.get("user_hobbies")).controls;
  }
  onAddHobby() {
    const cntrl = new FormControl(null);
    (<FormArray>this.signupForm.get("user_hobbies")).push(cntrl);
  }
  onHobbyRemove(i) {
    (<FormArray>this.signupForm.get("user_hobbies")).removeAt(i);
  }
  onUserSubmit() {
    console.log(this.signupForm);
  }
  invalidNames(c: AbstractControl): { [key: string]: boolean } | null {
    if (this.slangWords.indexOf(c.value) >= 0) {
      return { invalidName: true };
    }
    return null;
  }
  matchPassword(c: AbstractControl): { [key: string]: boolean } | null {
    if (c.get("user_password").value != c.get("user_confirm_password").value) {
      return { passwordNotMatched: true };
    }
    return null;
  }
  applyValidation(value: string) {
    let x = this.signupForm.get("x");
    let y = this.signupForm.get("y");
    if (value == "x") {
      y.clearValidators();
      x.setValidators([Validators.required]);
    } else {
      x.clearValidators();
      y.setValidators([Validators.required]);
    }
    x.updateValueAndValidity();
    y.updateValueAndValidity();
  }
}
