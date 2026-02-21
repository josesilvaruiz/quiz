export const questions = [

  // ===============================
  // SIGNIFICADO DE LAS LETRAS SOLID
  // ===============================

  {
    question: "¿Qué significa la 'S' en SOLID?",
    answers: [
      "Single Responsibility Principle",
      "Simple Responsibility Principle",
      "System Responsibility Principle",
      "Structured Responsibility Principle"
    ],
    correct: 0
  },
  {
    question: "¿Qué significa la 'O' en SOLID?",
    answers: [
      "Object Organization Principle",
      "Open/Closed Principle",
      "Optimized Code Principle",
      "Ordered Classes Principle"
    ],
    correct: 1
  },
  {
    question: "¿Qué significa la 'L' en SOLID?",
    answers: [
      "Layered Logic Principle",
      "Linked Objects Principle",
      "Liskov Substitution Principle",
      "Logical Separation Principle"
    ],
    correct: 2
  },
  {
    question: "¿Qué significa la 'I' en SOLID?",
    answers: [
      "Interface Segregation Principle",
      "Internal Inheritance Principle",
      "Independent Interfaces Principle",
      "Integrated Systems Principle"
    ],
    correct: 0
  },
  {
    question: "¿Qué significa la 'D' en SOLID?",
    answers: [
      "Dynamic Implementation Principle",
      "Data Isolation Principle",
      "Dependency Inversion Principle",
      "Distributed Interfaces Principle"
    ],
    correct: 2
  },

  // ===============================
  // SINGLE RESPONSIBILITY PRINCIPLE
  // ===============================

  {
    question: "¿Cuál es el objetivo principal del 'Single Responsibility Principle'?",
    answers: [
      "Reducir el número de clases",
      "Evitar que una clase tenga múltiples razones para cambiar",
      "Eliminar la herencia",
      "Usar únicamente métodos estáticos"
    ],
    correct: 1
  },
  {
    question: "¿Qué problema suele indicar que una clase viola el SRP?",
    answers: [
      "Tiene demasiados métodos relacionados con responsabilidades distintas",
      "Tiene pocos atributos",
      "Usa interfaces",
      "Tiene constructores"
    ],
    correct: 0
  },
  {
    question: "Según el SRP, una clase debería tener:",
    answers: [
      "Una sola razón para cambiar",
      "Muchos métodos públicos",
      "Múltiples dependencias externas",
      "Herencia múltiple"
    ],
    correct: 0
  },

  // ===============================
  // OPEN/CLOSED PRINCIPLE
  // ===============================

  {
    question: "El 'Open/Closed Principle' busca principalmente:",
    answers: [
      "Permitir modificar código existente constantemente",
      "Evitar extender el comportamiento del sistema",
      "Permitir extender comportamiento sin modificar código existente",
      "Eliminar la abstracción"
    ],
    correct: 2
  },
  {
    question: "¿Qué técnica ayuda a cumplir el OCP?",
    answers: [
      "Uso de condicionales extensivos",
      "Uso de herencia y polimorfismo",
      "Eliminación de interfaces",
      "Uso de variables globales"
    ],
    correct: 1
  },
  {
    question: "Si cada vez que añadimos una nueva funcionalidad modificamos una clase existente, estamos violando:",
    answers: [
      "Single Responsibility Principle",
      "Open/Closed Principle",
      "Interface Segregation Principle",
      "Dependency Inversion Principle"
    ],
    correct: 1
  },

  // ===============================
  // LISKOV SUBSTITUTION PRINCIPLE
  // ===============================

  {
    question: "El 'Liskov Substitution Principle' está relacionado principalmente con:",
    answers: [
      "Encapsulación",
      "Herencia y polimorfismo",
      "Interfaces pequeñas",
      "Inyección de dependencias"
    ],
    correct: 1
  },
  {
    question: "Se viola el LSP cuando:",
    answers: [
      "Una subclase cambia el comportamiento esperado de la clase base",
      "Se usan interfaces",
      "Se usa composición",
      "Se reduce el número de métodos"
    ],
    correct: 0
  },
  {
    question: "El LSP garantiza que:",
    answers: [
      "Las subclases puedan reemplazar a la clase base sin romper el sistema",
      "Todas las clases sean abstractas",
      "Las clases no usen herencia",
      "Las interfaces sean obligatorias"
    ],
    correct: 0
  },

  // ===============================
  // INTERFACE SEGREGATION PRINCIPLE
  // ===============================

  {
    question: "El 'Interface Segregation Principle' recomienda:",
    answers: [
      "Crear interfaces grandes y generales",
      "Dividir interfaces en otras más pequeñas y específicas",
      "Eliminar las interfaces",
      "Usar clases abstractas en lugar de interfaces"
    ],
    correct: 1
  },
  {
    question: "Una violación del ISP ocurre cuando:",
    answers: [
      "Una clase implementa métodos que no necesita",
      "Una clase tiene un constructor",
      "Se usa herencia",
      "Se usa polimorfismo"
    ],
    correct: 0
  },
  {
    question: "El ISP ayuda principalmente a:",
    answers: [
      "Reducir el acoplamiento innecesario",
      "Aumentar el tamaño del código",
      "Eliminar clases",
      "Evitar abstracciones"
    ],
    correct: 0
  },

  // ===============================
  // DEPENDENCY INVERSION PRINCIPLE
  // ===============================

  {
    question: "El 'Dependency Inversion Principle' establece que:",
    answers: [
      "Las clases concretas deben depender entre sí",
      "Los módulos de alto nivel deben depender de abstracciones",
      "Las dependencias deben ser globales",
      "No se deben usar interfaces"
    ],
    correct: 1
  },
  {
    question: "¿Qué herramienta se usa comúnmente para aplicar el DIP?",
    answers: [
      "Herencia múltiple",
      "Inyección de dependencias",
      "Variables estáticas",
      "Clases finales"
    ],
    correct: 1
  },
  {
    question: "El DIP reduce principalmente:",
    answers: [
      "La memoria usada",
      "El acoplamiento entre módulos",
      "El número de métodos",
      "El tamaño del ejecutable"
    ],
    correct: 1
  },
  {
    question: "Según el DIP, las abstracciones no deben depender de:",
    answers: [
      "Detalles",
      "Interfaces",
      "Clases abstractas",
      "Polimorfismo"
    ],
    correct: 0
  },

  // =========================
  // REPASO GENERAL SOLID
  // =========================

  {
    question: "¿Qué significa 'Single Responsibility Principle'?",
    answers: [
      "Una clase debe tener una única responsabilidad",
      "Una clase puede hacer varias cosas",
      "Una clase debe heredar de varias clases",
      "Una clase debe ser estática"
    ],
    correct: 0
  },
  {
    question: "¿Qué establece el 'Open/Closed Principle'?",
    answers: [
      "Las clases deben estar abiertas a modificación",
      "Las clases deben estar cerradas a extensión",
      "Las clases deben estar abiertas a extensión pero cerradas a modificación",
      "Las clases deben ser privadas"
    ],
    correct: 2
  },
  {
    question: "¿Qué indica el 'Liskov Substitution Principle'?",
    answers: [
      "Una subclase debe poder sustituir a su clase base sin alterar el comportamiento esperado",
      "Una clase base debe heredar de la subclase",
      "No se puede usar herencia",
      "Todas las clases deben ser abstractas"
    ],
    correct: 0
  },
  {
    question: "¿Qué promueve el 'Interface Segregation Principle'?",
    answers: [
      "Interfaces grandes y completas",
      "Muchas interfaces específicas en lugar de una general",
      "Una única interfaz global",
      "Eliminar las interfaces"
    ],
    correct: 1
  },
  {
    question: "¿Qué establece el 'Dependency Inversion Principle'?",
    answers: [
      "Los módulos de alto nivel no deben depender de módulos de bajo nivel, ambos deben depender de abstracciones",
      "Las clases concretas deben depender entre sí",
      "No se deben usar interfaces",
      "Las dependencias deben ser globales"
    ],
    correct: 0
  }

];