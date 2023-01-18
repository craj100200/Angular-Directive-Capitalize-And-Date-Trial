import { Directive , ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appCapitalize]'
})
export class CapitalizeDirective {

  constructor(private el : ElementRef, private r2 : Renderer2) { 


let myCurrentContent:string = el.nativeElement.innerHTML; // get the content of your element
el.nativeElement.innerHTML = 'my new content'; // set content of your element  <==THIS DOES NOT RENDER !!!!
	}



 @HostListener('input', ['$event']) onKeyUp(event : any) {
    event.target['value'] = event.target['value'].toUpperCase();
  }

//@HostListener("input") logChange() {
//    console.log(this.el.nativeElement.value);
//    let dt = new Date(this.el.nativeElement.value);
//	console.log(dt.getFullYear() + " " + dt.getMonth() + " " + dt.getDate());
//	this.r2.setProperty(this.el.nativeElement, 'value',  dt.getDate() + "/" + dt.getMonth() + "/" + dt.getFullYear()  );
//  }


//throws err
//platform-browser.js:745 
//        
//   The specified value "20/0/2023" does not conform to the required format, "yyyy-MM-dd".



}
