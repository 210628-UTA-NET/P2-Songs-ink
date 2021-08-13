import { Component, Injectable, OnInit} from '@angular/core';
import { SocketIoService } from 'src/app/services/socketio.service';
import { Socket } from 'ngx-socket-io';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})

@Injectable()
export class CanvasComponent implements OnInit {

  mouse: mouse;
  canvas: HTMLCanvasElement;
  colorSelector: HTMLInputElement;
  context: CanvasRenderingContext2D;
  width: number;
  height: number;
  lineColor: string;
  lineWidth: number;
  activeDrawer: boolean;
  private _roomsub:Subscription;

  constructor(private socket: Socket, private socketService:SocketIoService)  { }

  ngOnInit() {
    this.mouse = {
      click: false,
      move: false,
      pos: {x: 0, y: 0},
      pos_prev: false
    };

    this._roomsub = this.socketService.activeDrawer.subscribe(drawer=>this.activeDrawer=drawer);

    this.canvas = <HTMLCanvasElement> document.getElementById('drawing');
    this.context =  <CanvasRenderingContext2D>this.canvas.getContext('2d');
    
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.canvas.getBoundingClientRect().width;
    this.canvas.height = this.canvas.getBoundingClientRect().height;
    
    this.colorSelector = <HTMLInputElement> document.getElementById('color-selector');
    this.lineColor = 'black';
    this.lineWidth = 4;
    this.context.lineWidth = this.lineWidth;
    this.context.strokeStyle = this.lineColor;
    
    this.canvas.addEventListener('mousedown', () => {
      this.mouse.click = true;
    });
    this.canvas.addEventListener('mouseleave', () => {
      this.mouse.click = false;
      this.mouse.move = false;
    });
    this.canvas.addEventListener('mouseup', () => {
      this.mouse.click = false;
    });
    this.canvas.addEventListener('mousemove', (uMouse: any)=> {    
      this.mouse.pos.x = uMouse.clientX   / this.canvas.width; 
      this.mouse.pos.y = uMouse.clientY / this.canvas.height; 
      this.mouse.move = true;
    })
    this.socket.fromEvent('draw_line').subscribe((data: any) => {
      this.draw(data);
    });   
    this.socket.fromEvent('redraw').subscribe((data: any) => {
      this.redraw(data);
    });
    this.socket.fromEvent('clear').subscribe((data: any) => {
      this.redraw(data);
    });
    
    this.colorSelector.addEventListener('input', (evt : any) => {
      this.lineColor = evt.target.value;
    });
  }
  ngAfterViewInit() {
  }
  ngOnDestroy() {  
  }

  draw(data: any) {
    var line = data.line;
    this.context.strokeStyle = data.line[2];
    this.context.lineWidth = data.line[3];
    this.context.beginPath();
    this.context.moveTo(line[0].x * this.canvas.width - this.canvas.offsetLeft, line[0].y * this.canvas.height - this.canvas.offsetTop);
    this.context.lineTo(line[1].x * this.canvas.width - this.canvas.offsetLeft, line[1].y * this.canvas.height - this.canvas.offsetTop);
    this.context.stroke();
  }

  redraw(data: any) {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (let i= 0; i < data.length; i++) 
    {
      this.draw( {line: data[i] } );
    }
  }

  changeColor(color: string) {
    this.lineColor = color;
  }
  changeWidth(size: string) {
    if (size == 'small')
      this.lineWidth = 2.5;
    
    else if (size == 'medium')
      this.lineWidth = 4.0;
    
    else if (size == 'large')
      this.lineWidth = 6.0;
  }
  
  Undo() {
    this.socket.emit('Undo');
  }
  Clear() {
    this.socket.emit('Clear');
  }

  checkDraw = () => {
    if (this.mouse.click && this.mouse.move && this.mouse.pos_prev)
    {
      this.socket.emit('draw_line', 
      { line: [this.mouse.pos, this.mouse.pos_prev, this.lineColor, this.lineWidth] });
      this.mouse.move = false;
    }
    this.mouse.pos_prev = {x: this.mouse.pos.x, y: this.mouse.pos.y};
  }

   loop = setInterval(this.checkDraw, 25);
}

interface mouse {
  click: boolean,
  move: boolean,
  pos: {
    x: number,
    y: number
  },
  pos_prev: {
    x: number,
    y: number
  } | boolean
};