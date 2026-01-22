import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

import SlButton from '@shoelace-style/shoelace/dist/components/button/button.js';

@Component({
  imports: [RouterModule],
  selector: 'arrows-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class App {
  @ViewChild('signInWithGoogleButton') signInWithGoogleButton!: ElementRef<SlButton>;

  private readonly authService = inject(AuthService);

  signInWithGoogle() {
    return this.authService.signInWithGoogle();
  }
}
