export interface Appointment {
  time: string
  service: string
  client: string
}

export const appointments: Appointment[] = [
  {
    time: '09:00',
    service: 'Corte de cabelo',
    client: 'Julia Silva',
  },
  {
    time: '10:30',
    service: 'Barba',
    client: 'Lucas Oliveira',
  },
  {
    time: '14:00',
    service: 'Coloração',
    client: 'Mariana Santos',
  },
]