import { NgClass } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements  OnInit {

  mainText: string = '';
  additionalText: string= '';

  mainTexts: string[] = [
    "OHCOMA",
    "Another Text",
    "Yet Another Text"
  ]; 

  additionalTexts: string[] = [
    "One Healthy Connect Malawi",
    "Additional Text 1",
    "Additional Text 2"
  ];



  constructor() { }

  ngOnInit(): void {
    this.mainText = this.mainTexts[0];
    this.additionalText = this.additionalTexts[0];
  }
}
