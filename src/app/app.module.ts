import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalculatorService } from './calculator/services/calculator.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, CalculatorComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [CalculatorService],
  bootstrap: [AppComponent],
})
export class AppModule {}
