import { SpecialtySector, ServicePillar } from '../types';

export const CLINIC_LOCATION = {
  address: 'Avenida Doce de Octubre 1-75',
  city: 'Cuenca, Ecuador',
  phone: '+593 96 966 7899',
  phoneRaw: '+593969667899',
  email: 'contacto@agalmavitalidad.com',
  hours: 'Lunes a Viernes: 08:00 - 19:30 | Sábados: 09:00 - 13:00',
  googleMapsUrl: 'https://maps.google.com/?q=Avenida+Doce+de+Octubre+1-75,+Cuenca,+Ecuador',
  googleMapsEmbedUrl: 'https://maps.google.com/maps?q=Avenida+Doce+de+Octubre+1-75,+Cuenca,+Ecuador&t=&z=16&ie=UTF8&iwloc=&output=embed',
  instagram: 'https://www.instagram.com/agalma_salud_bienestar/',
  facebook: 'https://www.facebook.com/profile.php?id=61587154387184',
  whatsapp: 'https://wa.me/593969667899'
};

export const PHILOSOPHY_CONTENT = {
  quote: 'El cuerpo humano no requiere parches ni intervenciones agresivas para sanar; requiere alineación biomecánica, movilidad articular sostenida y un ambiente fisiológico optimizado.',
  pillars: [
    {
      title: '1. Diagnóstico de Causa Raíz',
      text: 'Buscamos el origen real del dolor estructural y visceral, no solo la neutralización temporal del síntoma.'
    },
    {
      title: '2. Tratamiento Integrativo y Sinérgetico',
      text: 'Unimos la precisión anatómica de la Osteopatía Clínica y Kinesiología con la autorregulación biológica de la Acupuntura MTC.'
    },
    {
      title: '3. Autonomía y Longevidad Activa',
      text: 'Educamos en hábitos posturales y biomecánicos para que mantengas tu salud física sin dependencia constante.'
    }
  ]
};

export const SPECIALTY_SECTORS: SpecialtySector[] = [
  {
    id: 'adultos-activos',
    title: 'Adultos & Vida Activa',
    description: '"Estar en forma es la consecuencia de disfrutar el movimiento diario."',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1000',
    video: 'https://res.cloudinary.com/dq9lqahdf/video/upload/v1785942267/Seniors_2_fu6wim.mp4',
    colSpanDesktop: 'col-span-12 md:col-span-6 lg:col-span-6',
    longDescription: 'Desarrollamos soluciones de mantenimiento físico integral para personas que buscan salud, autonomía y vitalidad constante. Redefiní tus hábitos y mantenete joven a través del movimiento consciente.',
    benefits: [
      'Preservación de la masa muscular, movilidad y flexibilidad',
      'Desbloqueo articular y prevención de dolencias crónicas',
      'Optimización de la postura corporal y equilibrio dinámico',
      'Aumento sostenido de la vitalidad y energía diaria'
    ],
    recommendedTreatments: [
      'Kinesiología Preventiva y Reeducación Motriz',
      'Osteopatía Estructural e Integrativa',
      'Acupuntura y Medicina Tradicional China'
    ],
    commonIssues: [
      'Rigidez articular y pérdida de amplitud de movimiento',
      'Molestias lumbares, cervicales y sobrecarga muscular',
      'Pérdida paulatina de agilidad o equilibrio'
    ]
  },
  {
    id: 'adultos-mayores',
    title: 'Adultos Mayores / Plenitud & Movilidad',
    description: '"Llegar a esta etapa con vitalidad es la clave para seguir creando recuerdos inolvidables."',
    image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=1000',
    video: 'https://res.cloudinary.com/dq9lqahdf/video/upload/v1785763871/Adultos_Mayores_ybaoku.mp4',
    colSpanDesktop: 'col-span-12 md:col-span-6 lg:col-span-6',
    longDescription: 'Autonomía Real: Mantené la fuerza y el equilibrio necesarios para tu ritmo diario. Desarrollamos tratamientos personalizados para preservar la movilidad articular, prevenir caídas y asegurar una longevidad activa y plena.',
    benefits: [
      'Autonomía Real: Mantené la fuerza y el equilibrio necesarios para tu ritmo diario',
      'Mejora del equilibrio dinámico y prevención de caídas',
      'Tratamiento compasivo y suave de articulaciones con artrosis',
      'Aumento de energía vital y estimulación circulatoria'
    ],
    recommendedTreatments: [
      'Osteopatía Suave Estructural y Visceral',
      'Moxibustión y Acupuntura Tonificante',
      'Rehabilitación de la Marcha y Equilibrio'
    ],
    commonIssues: [
      'Rigidez matutina en rodillas y caderas',
      'Pérdida de equilibrio y estabilidad',
      'Dolor lumbar crónico y desgaste articular'
    ]
  },
  {
    id: 'creadores-gamers',
    title: 'Creadores de Contenido, Influencers, Gamers & Trabajo Digital',
    description: '"Tu cuerpo es tu principal herramienta de trabajo: rinde frente a la cámara y en pantalla sin costo postural."',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000',
    video: 'https://res.cloudinary.com/dq9lqahdf/video/upload/v1785942869/Influencers_gamers_creadores_jy9dg3.mp4',
    colSpanDesktop: 'col-span-12 md:col-span-6 lg:col-span-6',
    longDescription: 'Cuidamos tu físico para que rindas al máximo frente a la cámara y la pantalla. Horas de rodaje, eventos de pie, maratones de gaming y jornadas de trabajo remoto generan tensiones acumuladas en cuello, hombros y columna. Diseñamos rutinas de prevención, descompresión y corrección postural.',
    benefits: [
      'Ergonomía Postural: Prevení la fatiga física en jornadas intensas de grabación',
      'Descarga y Alivio: Recuperación efectiva para piernas, columna y pies',
      'Cero Dolor: Neutralizá la postura de pantalla y mantené tu concentración',
      'Cuidado Integral: Ejercicios de descompresión y movilidad para el día a día'
    ],
    recommendedTreatments: [
      'Descompresión Vertebral y Masaje Fascial',
      'Ajuste Biomecánico de Columna y Postura',
      'Reeducación Postural Global (RPG) & Ergo-Active'
    ],
    commonIssues: [
      'Tensiones acumuladas en cuello, hombros y zona lumbar',
      'Fatiga física por bipedestación o sedentarismo digital prolongado',
      '💡 Atención Padres: Prevenir vicios posturales a tiempo evita problemas de columna en la adultez'
    ]
  },
  {
    id: 'ninos-jovenes',
    title: 'Niños y Jóvenes: Deporte & Desarrollo',
    description: '"Acompañamiento y prevención desde temprana edad."',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623266010b?auto=format&fit=crop&q=80&w=1000',
    video: 'https://res.cloudinary.com/dq9lqahdf/video/upload/v1785948896/Secci%C3%B3n_ni%C3%B1os_y_jovenes_y4raan.mp4',
    colSpanDesktop: 'col-span-12 md:col-span-6 lg:col-span-6',
    longDescription: 'Ciclismo, fútbol, entrenamiento o juego al aire libre: los chicos están en plena etapa de crecimiento y movimiento constante. Acompañamos su desarrollo deportivo con un enfoque preventivo para cuidar sus articulaciones, mejorar su rendimiento y prevenir lesiones mientras disfrutan de lo que aman.',
    benefits: [
      'Desarrollo Seguro: Evaluaciones posturales y de movilidad adaptadas al crecimiento de niños y adolescentes',
      'Prevención en el Deporte: Cuidado articular y muscular para chicos que practican fútbol, biking o actividades de alto impacto',
      'Hábitos de Vida: Educación física consciente para que construyan una relación sana y duradera con el movimiento'
    ],
    recommendedTreatments: [
      'Evaluaciones posturales y biomecánicas adaptadas al crecimiento',
      'Kinesiología Terapéutica y Prevención de Lesiones Deportivas',
      'Reeducación del Movimiento & Control Motor'
    ],
    commonIssues: [
      'Molestias por crecimiento, sobrecarga muscular y microtraumatismos deportivos',
      'Vicios posturales precoces por uso prolongado de dispositivos',
      '💡 Para las Familias: Fomentar el movimiento seguro durante la infancia y adolescencia es la mejor inversión para su postura y salud física del mañana.'
    ]
  }
];

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    id: 'osteopatia',
    title: 'Osteopatía Clínica',
    subtitle: 'Reajuste estructural para un funcionamiento orgánico óptimo.',
    description: 'Reajuste estructural para un funcionamiento orgánico óptimo.',
    icon: 'shield',
    longDescription: 'La Osteopatía Clínica aborda al cuerpo como una unidad funcional indivisible. Mediante manipulaciones articulares finas, liberación somatovisceral y trabajo craneosacral, eliminamos las restricciones estructurales que bloquean la movilidad y la circulación de los fluidos vitales.',
    techniques: [
      'Manipulación estructural articular de alta velocidad y baja amplitud (HVLA)',
      'Terapia Craneosacral para la liberación del flujo cefalorraquídeo',
      'Osteopatía visceral para la movilidad de órganos abdominales',
      'Técnicas de energía muscular y acortamiento posicional'
    ],
    benefits: [
      'Restablecimiento de la alineación articular natural',
      'Reducción drástica del dolor crónico y agudo',
      'Optimización del funcionamiento de los sistemas orgánicos',
      'Sensación inmediata de ligereza y simetría corporal'
    ],
    sessionDuration: '60 min'
  },
  {
    id: 'kinesiologia',
    title: 'Kinesiología & Rehabilitación',
    subtitle: 'Restauración del movimiento y biomecánica funcional.',
    description: 'Restauración del movimiento y biomecánica funcional.',
    icon: 'activity',
    longDescription: 'Especializados en la recuperación acelerada de lesiones musculares, articulares y ligamentarias. Combinamos agentes físicos de última generación con ejercicio terapéutico adaptado para devolver la funcionalidad completa al aparato locomotor.',
    techniques: [
      'Reeducación Postural Global (RPG) y cadenas musculares',
      'Protocolos de movilización articular analítica y global',
      'Fisioterapia avanzada y electroterapia analgésica',
      'Entrenamiento de fuerza funcional y control motor'
    ],
    benefits: [
      'Recuperación efectiva de lesiones y posquirúrgicos',
      'Erradicación de patrones de compensación patológicos',
      'Fortalecimiento de la musculatura estabilizadora profunda',
      'Prevención activa de recidivas musculares y articulares'
    ],
    sessionDuration: '60 min'
  },
  {
    id: 'acupuntura',
    title: 'Acupuntura & MTC',
    subtitle: 'Equilibrio energético y regulación neuro-vegetativa.',
    description: 'Equilibrio energético y regulación neuro-vegetativa.',
    icon: 'sparkles',
    longDescription: 'La Medicina Tradicional China (MTC) estimula puntos clave en los meridianos energéticos para liberar la estancación de Qi y Sangre. Regula el sistema nervioso autónomo, alivia el dolor persistente y restaura la capacidad autoreguladora del organismo.',
    techniques: [
      'Acupuntura con agujas filiformes de grado médico estériles',
      'Moxibustión con Artemisia para calentar canales y tonificar el Qi',
      'Cupping o Terapia con Ventosas para desintoxicación muscular',
      'Electroacupuntura para analgesia profunda y estimulación nerviosa'
    ],
    benefits: [
      'Modulación profunda del sistema nervioso y reducción del estrés',
      'Potente efecto analgésico y antiinflamatorio natural',
      'Mejora sustancial en la calidad del sueño y digestión',
      'Restablecimiento de la vitalidad y el equilibrio psico-emocional'
    ],
    sessionDuration: '50 min'
  }
];
