import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.css'
})
export class SpinnerComponent implements OnInit {
  constructor(){}
  ngOnInit(): void {
    console.log('SpinnerComponent initialized');

  }

}