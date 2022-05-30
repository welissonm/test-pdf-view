import { Component, OnInit } from '@angular/core';
// import * as pdfjs from 'pdfjs-dist';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  pdfSrc = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';

  constructor() {
    // pdfjs.GlobalWorkerOptions.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.js';
  }

  ngOnInit(): void {
    // pdfjs.getDocument(this.pdfSrc)
    // .promise
    // .then(r => console.log('success', r))
    // .catch(e => console.log('error', e));
  }

}
