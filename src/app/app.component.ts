import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'japanese-phrases';

  showJapanese = true;
  showTranslation = true;
  showNotes = true;

  hideAllJapanese() {
    if(this.showJapanese) {
        this.phrases.forEach(phrase => {
        phrase.japanese.show = false;
        this.showJapanese = false
      })        
    } else {
        this.phrases.forEach(phrase => {
        phrase.japanese.show = true;
        this.showJapanese = true
      }); 
    }
  };

  hideAllTranslation() {
    if(this.showTranslation) {
      this.phrases.forEach(phrase => {
      phrase.translation.show = false;
      this.showTranslation = false
      })        
    } else {
        this.phrases.forEach(phrase => {
        phrase.translation.show = true;
        this.showTranslation = true
      }); 
    }
  };

  hideAllNotes() {
    if(this.showNotes) {
      this.phrases.forEach(phrase => {
      phrase.notes.show = false;
      this.showNotes = false
      })        
    } else {
        this.phrases.forEach(phrase => {
        phrase.notes.show = true;
        this.showNotes = true
      }); 
    }
  };

  phrases = [
    { 
      japanese: {
        text: 'Ohayo',
        show: true
      },
      translation: { 
        text: 'hello',
        show: true
      },
      notes: {
        text: 'use for early day greetings',
        show: true
      },
    },
    { 
      japanese: {
        text: 'Ohayo Gozaimasu',
        show: true
      },
      translation: { 
        text: 'hello',
        show: true
      },
      notes: {
        text: 'more polite',
        show: true
      },
    },
    { 
      japanese: {
        text: "Kon'nichi-wa!",
        show: true
      },
      translation: { 
        text: 'hello',
        show: true
      },
      notes: {
        text: 'use for day time greetings',
        show: true
      },
    },
    { 
      japanese: {
        text: 'Konban-wa!',
        show: true
      },
      translation: { 
        text: 'hello',
        show: true
      },
      notes: {
        text: 'use for evening greetings',
        show: true
      },
    },
    { 
      japanese: {
        text: 'Denki',
        show: true
      },
      translation: { 
        text: 'how are you?',
        show: true
      },
      notes: {
        text: '',
        show: true
      },
    },
    { 
      japanese: {
        text: 'Denki datta?',
        show: true
      },
      translation: { 
        text: "How's it going?",
        show: true
      },
      notes: {
        text: '',
        show: true
      },
    },
    { 
      japanese: {
        text: 'Do shita-no',
        show: true
      },
      translation: { 
        text: "What's happening?",
        show: true
      },
      notes: {
        text: 'When you know a little of whats going on',
        show: true
      },
    },
    { 
      japanese: {
        text: 'Nani-ka atta-no?',
        show: true
      },
      translation: { 
        text: "What's happening?",
        show: true
      },
      notes: {
        text: "When you dont know anything thats going on",
        show: true
      },
    },
    { 
      japanese: {
        text: 'Genki-dayo',
        show: true
      },
      translation: { 
        text: 'Im fine',
        show: true
      },
      notes: {
        text: 'use for early day greetings',
        show: true
      },
    },
    { 
      japanese: {
        text: 'Nemui',
        show: true
      },
      translation: { 
        text: 'Im sleepy',
        show: true
      },
      notes: {
        text: '',
        show: true
      },
    },
    { 
      japanese: {
        text: 'Betsu-ni',
        show: true
      },
      translation: { 
        text: 'Nothing',
        show: true
      },
      notes: {
        text: 'If someone asks you whats wrong and you mean nothing',
        show: true
      },
    },
    { 
      japanese: {
        text: 'Sugu(-ni) aitai',
        show: true
      },
      translation: { 
        text: 'I want to see you again soon',
        show: true
      },
      notes: {
        text: '',
        show: true
      },
    },
    { 
      japanese: {
        text: 'Ja mata ne',
        show: true
      },
      translation: { 
        text: 'see you later',
        show: true
      },
      notes: {
        text: '',
        show: true
      },
    },
    { 
      japanese: {
        text: 'Sayonara',
        show: true
      },
      translation: { 
        text: 'Goodbye',
        show: true
      },
      notes: {
        text: '',
        show: true
      },
    },
    { 
      japanese: {
        text: 'Bai-Bai',
        show: true
      },
      translation: { 
        text: 'Goodbye',
        show: true
      },
      notes: {
        text: '',
        show: true
      },
    },
    { 
      japanese: {
        text: 'Hai',
        show: true
      },
      translation: { 
        text: 'Yes',
        show: true
      },
      notes: {
        text: '',
        show: true
      },
    },
    { 
      japanese: {
        text: 'iie',
        show: true
      },
      translation: { 
        text: 'No',
        show: true
      },
      notes: {
        text: '',
        show: true
      },
    },
    { 
      japanese: {
        text: 'Iya Betsu-ni',
        show: true
      },
      translation: { 
        text: 'No, not especially',
        show: true
      },
      notes: {
        text: 'A softer way to say no.',
        show: true
      },
    },
    { 
      japanese: {
        text: 'So-dane',
        show: true
      },
      translation: { 
        text: 'Thats right',
        show: true
      },
      notes: {
        text: '',
        show: true
      },
    },
    { 
      japanese: {
        text: 'Wakatta',
        show: true
      },
      translation: { 
        text: 'I understand',
        show: true
      },
      notes: {
        text: '',
        show: true
      },
    },
    { 
      japanese: {
        text: 'Honto',
        show: true
      },
      translation: { 
        text: 'Really?',
        show: true
      },
      notes: {
        text: '',
        show: true
      },
    },
    { 
      japanese: {
        text: 'Nan-de?',
        show: true
      },
      translation: { 
        text: 'how come?',
        show: true
      },
      notes: {
        text: '',
        show: true
      },
    },
    { 
      japanese: {
        text: 'NANI????',
        show: true
      },
      translation: { 
        text: 'What?',
        show: true
      },
      notes: {
        text: '',
        show: true
      },
    },
    { 
      japanese: {
        text: 'Yokatta (yo)-ne',
        show: true
      },
      translation: { 
        text: 'That was good',
        show: true
      },
      notes: {
        text: '',
        show: true
      },
    },
    { 
      japanese: {
        text: 'Yoshi',
        show: true
      },
      translation: { 
        text: 'Right on! (Great!) / I did it',
        show: true
      },
      notes: {
        text: '',
        show: true
      },
    },
    { 
      japanese: {
        text: 'Mo ii-yo',
        show: true
      },
      translation: { 
        text: 'Forget it',
        show: true
      },
      notes: {
        text: '',
        show: true
      },
    },
    { 
      japanese: {
        text: 'Chotto ii?',
        show: true
      },
      translation: { 
        text: 'Got a minute?',
        show: true
      },
      notes: {
        text: '',
        show: true
      },
    },
    { 
      japanese: {
        text: 'Nanji-ni tsuku?',
        show: true
      },
      translation: { 
        text: 'What time do we arrive?',
        show: true
      },
      notes: {
        text: '',
        show: true
      },
    },
    { 
      japanese: {
        text: 'Eigo(-de) hanaso',
        show: true
      },
      translation: { 
        text: 'Lets talk in english',
        show: true
      },
      notes: {
        text: '',
        show: true
      },
    },
    { 
      japanese: {
        text: 'Eigo jozu-(da)ne',
        show: true
      },
      translation: { 
        text: 'Youre good at english',
        show: true
      },
      notes: {
        text: 'follow up to lets talk in english',
        show: true
      },
    },
    { 
      japanese: {
        text: 'Un, jozu-dayo',
        show: true
      },
      translation: { 
        text: 'Yes, you really are good',
        show: true
      },
      notes: {
        text: 'the follow up will probably lead to denial so this is a good final.',
        show: true
      },
    },
    { 
      japanese: {
        text: 'wan-wan',
        show: true
      },
      translation: { 
        text: 'dog barking',
        show: true
      },
      notes: {
        text: '',
        show: true
      },
    },
    { 
      japanese: {
        text: 'nyan-nyan',
        show: true
      },
      translation: { 
        text: 'cat meowing',
        show: true
      },
      notes: {
        text: '',
        show: true
      },
    },
    { 
      japanese: {
        text: 'shiku-shiku',
        show: true
      },
      translation: { 
        text: 'light crying',
        show: true
      },
      notes: {
        text: 'rub your eyes while saying it to be funny',
        show: true
      },
    },
    { 
      japanese: {
        text: 'goku-goku',
        show: true
      },
      translation: { 
        text: '(beer) drinking noise',
        show: true
      },
      notes: {
        text: '',
        show: true
      },
    },
    { 
      japanese: {
        text: 'Yoku wakaranai',
        show: true
      },
      translation: { 
        text: 'I dont understand',
        show: true
      },
      notes: {
        text: '',
        show: true
      },
    },
    { 
      japanese: {
        text: 'chotto kite',
        show: true
      },
      translation: { 
        text: 'come here',
        show: true
      },
      notes: {
        text: '',
        show: true
      },
    },
    { 
      japanese: {
        text: 'mo de-yo',
        show: true
      },
      translation: { 
        text: 'lets leave',
        show: true
      },
      notes: {
        text: '',
        show: true
      },
    },
    { 
      japanese: {
        text: 'hoteru',
        show: true
      },
      translation: { 
        text: 'hotel',
        show: true
      },
      notes: {
        text: '',
        show: true
      },
    },
    { 
      japanese: {
        text: 'kuko',
        show: true
      },
      translation: { 
        text: 'airport',
        show: true
      },
      notes: {
        text: '',
        show: true
      },
    },

  ]

  hide(value){
    value.show = !value.show;
  }
}
