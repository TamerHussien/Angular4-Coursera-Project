import { Component, OnInit, Inject} from '@angular/core';
import { Dish } from '../shared/dish';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DishService } from '../services/dish.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comment } from '../shared/comment';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

dish: Dish;
dishIds: number[];
prev: number;
next: number;
errMess: string;

commentForm: FormGroup;
comment: Comment;
validationMessages = {
  'author': {
    'required': 'Author Name is Required.',
    'minlength': 'Author Name Must be More than 2 Characters Long',
    'maxlength': 'First Name cannot be more than 25 Characters long'
  },
  'comment': {
    'required': 'Comment is Required'
  }
};

formErrors = {
  'author': '',
  'comment': ''
};



  constructor(private dishservice: DishService, private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    @Inject ('BaseURL') private BaseURL) {
      this.createForm();
     }

  ngOnInit() {

    this.dishservice.getDishIds()
      .subscribe(ids => this.dishIds = ids);

      this.route.params
        .switchMap((params: Params) => this.dishservice.getDish(+params['id']))
        .subscribe(dish => { this.dish = dish; this.setPrevNext(dish.id); },
      errmess => this.errMess = <any>errmess);
  }

  setPrevNext(dishId: number) {
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }


  goBack(): void {
    this.location.back();
  }

  createForm() {
    this.commentForm = this.fb.group({
      rating : 1 ,
      comment: ['', [Validators.required]],
      author: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      date: ''
    });
    this.commentForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.commentForm) { return; }
    const form = this.commentForm;
    // tslint:disable-next-line:forin
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        // tslint:disable-next-line:forin
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  onSubmit() {
    this.commentForm.value.date = new Date();
      this.comment = this.commentForm.value;
      this.dish.comments.push(this.comment);
      console.log( this.comment);
      this.commentForm.reset({
        rating : 5,
        comment: '',
        author: '',
        date: ''
      });
  }

}
