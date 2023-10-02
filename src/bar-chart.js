class BarChart extends HTMLElement {
			static get is() {return 'bar-chart';}
			
			constructor() {
				super();
				this.setup = {eWidth:1400,offset:50,eHeight:900, viewBox:'0 0 1500 1000'}
			}
			connectedCallback(){
				this.innerHTML = this.html();
				this.loadElements();
			}
			html() {
				return `
					<div class="vw-25">
						<p>test</p>
						
					</div>
					`;
			}
			static get observedAttributes() { return ['data']}
			loadElements() {
				this.containter = document.querySelector('div');
				this.svg = document.createElementNS(NS,'svg');
				this.svg.setAttribute('viewBox',this.setup.viewBox);
				this.graphicTarget = document.createElementNS(NS, 'g');
				this.path = document.createElementNS(NS,'path');
				this.path.setAttribute('d','M 50 50 L 50 950 M 50 950 L 1450 950');
				this.path.setAttribute('stroke','black');
				this.path.setAttribute('stroke-width','4');
				this.svg.appendChild(this.path);
				if( !this.model  )
				this.model = {
					values: [.94,.90,.84,.76,.70,.69,.50,.34,.23,.20,.19,.18,.07]
				}
				this.graphicTarget.innerHTML = '';
				this.setup.barWitdth = Math.floor(this.setup.eWidth/this.model.values.length);
				this.setup.denominator = Math.max(... this.model.values);
				const rectangle = document.createElementNS(NS,'rect');
				this.calculateHeight(this.setup, this.model.values).forEach((v, ix) => {
					const rElement = 
					document.createElementNS(NS,'rect');
					rElement.setAttribute('x', v.x);
					rElement.setAttribute('y', v.y);
					rElement.setAttribute('height', v.height);
					rElement.setAttribute('width', this.setup.barWitdth);
					rElement.setAttribute('fill', 'red');
					rElement.innerHTML = `<title>${this.model.values[ix]}</title>`;
					this.graphicTarget.appendChild(rElement);
				});
				this.svg.appendChild(this.graphicTarget);
				this.containter.append(this.svg);
				//console.log({g:this.graphicTarget,model: this.model});
			}
			calculateHeight(setup, arr=[]){
				const rectPos = {x:0,y:0,h:0};
				const rect=[];
				arr.forEach((item,index) => {
					const val = Math.floor( (item / setup.denominator ) * setup.eHeight ) ;
					const nRect = Object.assign([],rectPos);
					nRect.x = (index*setup.barWitdth)+setup.offset;
					nRect.y = setup.offset + setup.eHeight - val;
					nRect.height = val;
					rect.push(nRect);
				});
				return rect;
			}
		}
		customElements.define(BarChart.is,BarChart);
