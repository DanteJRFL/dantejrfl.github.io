import type { Project } from '../data'

export default function ProjectVisual({ project }: { project: Project }) {
  return (
    <div className={`project-visual visual-${project.visual}`}>
      <div className="browser-bar">
        <span /><span /><span />
        <div className="browser-address">dantejrfl.github.io / {project.id}</div>
      </div>
      {project.visual === 'weather' && <div className="weather-mock">
        <div className="weather-top"><span>ARACAJU, BR</span><span>•••</span></div>
        <div className="weather-main"><div><strong>27°</strong><small>Parcialmente nublado</small></div><div className="sun-orb" /></div>
        <div className="weather-bottom"><span>UMIDADE <b>65%</b></span><span>VENTO <b>12 km/h</b></span></div>
      </div>}
      {project.visual === 'menu' && <div className="menu-mock">
        <div className="menu-heading"><b>Sabor da Terra</b><span>SEU PEDIDO <i>02</i></span></div>
        <div className="food-grid"><div><i>🍕</i><b>Margherita</b><small>R$ 30,00</small></div><div><i>🍕</i><b>Calabresa</b><small>R$ 34,00</small></div><div><i>🥤</i><b>Refrigerante</b><small>R$ 8,00</small></div><div><i>🍕</i><b>Quatro queijos</b><small>R$ 38,00</small></div></div>
      </div>}
      {project.visual === 'calculator' && <div className="calculator-mock">
        <div className="calc-display"><small>128 + 64</small><b>192</b></div>
        <div className="calc-keys">{['C','±','%','÷','7','8','9','×','4','5','6','−','1','2','3','+','0','.','⌫','='].map((key, i) => <span className={i % 4 === 3 || key === '=' ? 'key-accent' : ''} key={key}>{key}</span>)}</div>
      </div>}
      {project.visual === 'lamp' && <div className="lamp-mock"><div className="lamp-glow" /><div className="lamp-bulb" /><div className="lamp-base" /><span className="lamp-switch">ON <i /></span></div>}
      {project.visual === 'car' && <div className="car-mock"><div className="car-label">ESCOLHA SUA EXPERIÊNCIA</div><div className="road-line" /><div className="car-shape"><i /><b /><span /><span /></div><div className="car-controls"><span>RESET</span><span>ACELERAR ↗</span><span>DESACELERAR</span></div></div>}
    </div>
  )
}
