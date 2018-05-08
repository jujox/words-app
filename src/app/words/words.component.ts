import { Component, OnInit } from '@angular/core';
import { WordsService } from '../words.service';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {

  words: any[];

  constructor(private wordService: WordsService) { }

  ngOnInit() {
    this.wordService.getWords().subscribe((data: any) => this.words = data);
  }
}
