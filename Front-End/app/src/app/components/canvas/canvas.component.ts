import { Component, Injectable, OnInit} from '@angular/core';
import { SocketIoService } from 'src/app/services/socketio.service';
import { Socket } from 'ngx-socket-io';


@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})

@Injectable()
export class CanvasComponent implements OnInit {

  mouse: mouse;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  width: number;
  height: number;
  lineColor: string;
  lineWidth: number;

  constructor(private socket: Socket)  { }
    
  ngOnInit() {
    this.mouse = {
      click: false,
      move: false,
      pos: {x: 0, y: 0},
      pos_prev: false
    };
    this.lineColor = 'black';
    this.lineWidth = 4;

    this.canvas = <HTMLCanvasElement> document.getElementById('drawing');
    this.context =  <CanvasRenderingContext2D>this.canvas.getContext('2d');
    
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.canvas.getBoundingClientRect().width;
    this.canvas.height = this.canvas.getBoundingClientRect().height;
    this.context.lineWidth = this.lineWidth;
    this.context.strokeStyle = this.lineColor;
    
    this.canvas.addEventListener('mousedown', () => {
      this.mouse.click = true;
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
  }
  ngAfterViewInit() {
  }
  ngOnDestroy() {  
    // unsubscribe here
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

    console.log
    
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