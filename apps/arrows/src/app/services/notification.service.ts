import { Injectable } from '@angular/core';
import SlAlert from '@shoelace-style/shoelace/dist/components/alert/alert.js';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  private _stack: SlAlert[] = [];
  private _showing = false;

  private addToStack(alert: SlAlert) {
    this._stack.push(alert);

    alert.addEventListener('sl-after-hide', () => {
      this._stack.splice(0, 1);
      this._showing = false;
      this.processStack();
    });

    alert.addEventListener('sl-show', () => {
      this._showing = true;
    });

    this.processStack();
  }

  private processStack() {
    if (this._stack.length > 0 && !this._showing) {
      this._showing = true;
      const alert = this._stack[0];
      document.body.append(alert);
      alert?.toast();
    }
  }

  public customNotification(mainContent: string, subtitle: string, variant: string, duration = 6000) {
    return this.notify(mainContent, subtitle, variant, duration);
  }

  public registrationRequiredToBuy(duration = 6000) {
    return this.notify('Please register to be able to buy', 'Registration Required', 'danger', duration);
  }



  private escapeHtml(html: string) {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.innerHTML;
  }

  private notify(title: string, subtitle?: string, variant = 'neutral', duration = 3000) {
    this.addToStack(Object.assign(document.createElement('sl-alert'), {
      variant,
      closable: false,
      duration: duration,
      className: 'velorum-toast',
      innerHTML: `
      <div class="border-top"></div>
        <div class="title">${this.escapeHtml(title)}</div>
        ${subtitle ? '<div class="subtitle">' + this.escapeHtml(subtitle ?? '') + '</div>' : ''}
      <div class="border-bottom"></div>
      `
    }) as SlAlert);
  }
}
