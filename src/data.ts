export type Project = {
  id: string
  number: string
  category: string
  title: string
  description: string
  stack: string[]
  url: string
  visual: 'weather' | 'menu' | 'calculator' | 'lamp' | 'car'
}

export const projects: Project[] = [
  {
    id: 'weather', number: '01', category: 'WEB APP / API',
    title: 'Clima Interativo',
    description: 'Aplicação que consulta a API do OpenWeatherMap e apresenta as condições climáticas da cidade pesquisada.',
    stack: ['HTML', 'CSS', 'JavaScript', 'OpenWeatherMap API'],
    url: 'https://dantejrfl.github.io/API-OpenWeatherMap/', visual: 'weather',
  },
  {
    id: 'menu', number: '02', category: 'WEB APP',
    title: 'Sabor da Terra',
    description: 'Cardápio digital de pizzaria com produtos, carrinho de compras e total do pedido atualizado em tempo real.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://dantejrfl.github.io/Cardapio-Pizzaria/', visual: 'menu',
  },
  {
    id: 'calculator', number: '03', category: 'INTERFACE / LÓGICA',
    title: 'Calculadora',
    description: 'Calculadora funcional com operações básicas, entrada decimal e controles para limpar ou apagar dígitos.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://dantejrfl.github.io/Calculadora/', visual: 'calculator',
  },
  {
    id: 'lamp', number: '04', category: 'INTERAÇÃO',
    title: 'Lâmpada',
    description: 'Experimento interativo de ligar e desligar uma lâmpada virtual com mudança visual de estado.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://dantejrfl.github.io/Lampada/', visual: 'lamp',
  },
  {
    id: 'cars', number: '05', category: 'INTERAÇÃO',
    title: 'Dinâmica de Carros',
    description: 'Experiência interativa para selecionar a cor de um carro e controlar aceleração, desaceleração e reset.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://dantejrfl.github.io/Dinamica-Carros/', visual: 'car',
  },
]

export const technologies = [
  'React', 'React Native', 'TypeScript', 'JavaScript', 'Python', 'C#',
  'HTML5', 'CSS3', 'Expo', 'Supabase', 'PostgreSQL', 'MySQL',
  'SQL Server', 'REST APIs', 'Git & GitHub', 'Kanban',
]
