import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { TabsModule } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TabsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild('staticTabs', { static: false }) staticTabs?: TabsetComponent;
 
  selectTab(tabId: number) {
    if (this.staticTabs?.tabs[tabId]) {
      this.staticTabs.tabs[tabId].active = true;
    }
  }
  title = 'AngularTest';
}
