import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlbumSearchService } from './album-search.service';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
  AlbumSearchService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
