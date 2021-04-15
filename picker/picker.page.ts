import { Component, OnInit } from '@angular/core';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from "@ionic/core";

@Component({
  selector: 'app-picker',
  templateUrl: './picker.page.html',
  styleUrls: ['./picker.page.scss'],
})
export class PickerPage implements OnInit {
  animals: string[] = ["Dog", "Cat", "Bird", "Lizard", "Chinchilla"];
  jobs: string[] = ["Minified", "Responsive", "Fullstack", "Mobile First", "Serverless"];
  fruits: string[] = ["Tomato", "Avocado","Onion","Potato","Artichoke"]
  constructor(private pickerController: PickerController) { }


  async showPicker() {
    let options: PickerOptions = {
      buttons: [
        {
          text: "Cancel",
          role: 'cancel'
        },
        {
          text:'confirm',
          handler:(value:any) => {
            console.log(value);
          }
        }
      ],
      columns:[{
        name:'Animals',
        options:this.getColumnOptions()
      }]
    };

    let picker = await this.pickerController.create(options);
    picker.present()
  }

  async showPickers() {
    let options: PickerOptions = {
      buttons: [
        {
          text: "Cancel",
          role: 'cancel'
        },
        {
          text:'confirm',
          handler:(value:any) => {
            console.log(value);
          }
        }
      ],
      columns:[{
        name:'Jobs',
        options:this.getColumnOptions1()
      },
      {
        name:'Fruits',
        options:this.getColumnOptions2()
      }]
    };

    let picker = await this.pickerController.create(options);
    picker.present()
  }

  getColumnOptions(){
    let options = [];
    this.animals.forEach(x => {
      options.push({text:x,value:x});
    });
    return options;
  }
  getColumnOptions1(){
    let options = [];
    this.jobs.forEach(x => {
      options.push({text:x,value:x});
    });
    return options;
  }
  getColumnOptions2(){
    let options = [];
    this.fruits.forEach(x => {
      options.push({text:x,value:x});
    });
    return options;
  }

  ngOnInit() {
  }
}
  


