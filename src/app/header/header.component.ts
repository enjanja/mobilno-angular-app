import { Component } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    //moze i samo template
    //izgled stranice def u h.c.html fajlu
    styleUrls: ['./header.component.css']
    //moze i samo style
    //def stila nase app

})

export class HeaderComponent{
    title = 'Quotes';

    getTitle(): string{
        return 'Quotes';
        //f-ja koja vraca string koji se nalazi u promenljivoj title
    }
}