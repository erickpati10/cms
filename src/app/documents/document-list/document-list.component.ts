import { Component, Output, EventEmitter } from '@angular/core';
import { Document } from '../document.model';

@Component({
  selector: 'cms-document-list',
  standalone: false,
  templateUrl: './document-list.component.html',
  styleUrl: './document-list.component.css',
})
export class DocumentListComponent {
  @Output() selectedDocumentEvent: EventEmitter<Document> =
    new EventEmitter<Document>();

  documents: Document[] = [
    new Document(
      1,
      'ITM 111',
      'Introduction to Databases',
      'http://example.com/doc1'
    ),
    new Document(
      2,
      'PUBH 132',
      'Personal Health & Wellness',
      'http://example.com/doc2'
    ),
    new Document(
      3,
      'CSE 340',
      'Web Backend Development',
      'http://example.com/doc3'
    ),
    new Document(
      4,
      'WDD 430',
      'Web Full-Satack Development',
      'http://example.com/doc4'
    ),
    new Document(
      5,
      'ENG 150',
      'Writing-Reasoning Foundation',
      'http://example.com/doc5'
    ),
  ];

  constructor() {}

  onSelected(document: Document) {
    this.selectedDocumentEvent.emit(document);
  }
}
