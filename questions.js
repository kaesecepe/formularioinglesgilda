// Banco completo de 100 preguntas - Cuarto Balotario Oficial (Inglés A1-A2)
// I.E.S.T.P. "Gilda Liliana Ballivian Rosado"

window.QUIZ_CONTEXTS = {
  ctx_5_7: {
    title: "Fill in the Blanks (Preguntas 5, 6 y 7)",
    text: "Last Monday, the maintenance team (5) ____ to the plant at 6:00 a.m. because the conveyor belt was not working. The technicians looked for the problem, but there weren't (6) ____ spare motors (7) ____ the storeroom."
  },
  ctx_18_20: {
    title: "Reading Comprehension (Preguntas 18, 19 y 20)",
    text: "Maria is a mechatronics technician at a bottling plant. Yesterday, there was a serious problem: a robotic arm stopped and the bottles didn't move. Maria was worried because the production was late. She found some loose cables behind the control panel and repaired them in twenty minutes. The supervisor wasn't angry; however, he asked Maria to write a report. Tomorrow, Maria is going to check the other robotic arms. She thinks they will work well, but she won't leave the plant until she finishes the inspection."
  },
  ctx_25_27: {
    title: "Fill in the Blanks (Preguntas 25, 26 y 27)",
    text: "Yesterday, the sales team (25) ____ a meeting in the conference room. The manager sat (26) ____ the secretary and the accountant. There weren't (27) ____ problems with the budget, so everybody was happy."
  },
  ctx_38_40: {
    title: "Reading Comprehension (Preguntas 38, 39 y 40)",
    text: "Last Friday, Tech Industrial S.A. had an inspection in its warehouse. The inspector arrived at 9:00 a.m. and was surprised: there were some boxes in front of the emergency exit, and there weren't any signs on the walls. The warehouse manager felt embarrassed. He said, \"We will move the boxes today, and we are going to put up new signs next week.\" The inspector wrote a report. He said the company will receive a second visit in a month; therefore, the staff needs to correct the problems quickly."
  },
  ctx_45_47: {
    title: "Fill in the Blanks (Preguntas 45, 46 y 47)",
    text: "Yesterday, Ana (45) ____ to the office by bus because her car was broken. Her desk is (46) ____ the manager's desk, on the other side of the room. She bought (47) ____ sandwiches in the cafeteria for lunch."
  },
  ctx_58_60: {
    title: "Reading Comprehension (Preguntas 58, 59 y 60)",
    text: "Daniel works as a junior developer in a logistics company. Last week, he was in a hurry because customers couldn't track their packages on the website. Daniel and his team found the problem in the database: some data was wrong. They fixed it, and the website worked again at 4:00 p.m. His boss was very proud of the team. Next month, the team is going to create a mobile app, and it will be easier for customers to check their orders. However, the app won't be ready before December."
  },
  ctx_65_67: {
    title: "Fill in the Blanks (Preguntas 65, 66 y 67)",
    text: "There (65) ____ a power cut in the factory yesterday. The workers were (66) ____ because the machines stopped, so they went to the emergency exit (67) ____ the end of the corridor."
  },
  ctx_78_80: {
    title: "Reading Comprehension (Preguntas 78, 79 y 80)",
    text: "NOTICE – SAFETY TRAINING. Last month, there were three small accidents in the workshop. Therefore, the company is going to organize a safety training next Tuesday at 9:00 a.m. in Room 3, next to the library. All employees will receive a helmet and gloves. There won't be any lunch, but the company will offer some coffee and sandwiches. Please arrive on time."
  },
  ctx_85_87: {
    title: "Fill in the Blanks (Preguntas 85, 86 y 87)",
    text: "My father (85) ____ in a car workshop. Yesterday, he (86) ____ home late because there were many cars to repair. His tools are (87) ____ the toolbox next to the door."
  },
  ctx_98_100: {
    title: "Reading Comprehension (Preguntas 98, 99 y 100)",
    text: "Carlos is a student of Industrial Process Mechanics. Every day, he studies at the institute from 8:00 a.m. to 2:00 p.m. Yesterday, he was in the workshop and he made a small metal box with a lathe. His teacher was very happy. Tomorrow, Carlos is going to paint the box, and next week he will take it to an exhibition. He isn't nervous because he practices a lot."
  }
};

window.QUIZ_QUESTIONS = [
  // BLOQUE 1 (1 - 20)
  {
    id: 1,
    block: 1,
    category: "Vocabulary",
    question: "The operator felt ____ when the hydraulic press stopped suddenly, so he pressed the emergency button immediately.",
    options: ["alarmed", "relaxed", "bored", "amused"],
    correct: 0,
    explanation: "Sintió alarma (alarmed) ante la detención repentina de la prensa hidráulica."
  },
  {
    id: 2,
    block: 1,
    category: "Vocabulary",
    question: "The new gearbox is very ____; it can work for many years without breaking.",
    options: ["defective", "durable", "fragile", "temporary"],
    correct: 1,
    explanation: "\"Durable\" significa duradero, capaz de funcionar muchos años sin romperse."
  },
  {
    id: 3,
    block: 1,
    category: "Vocabulary",
    question: "What is \"maintenance\" in an industrial plant?",
    options: [
      "The sale of finished products to customers",
      "The first drawing of a new machine",
      "Regular work to keep machines in good condition",
      "A document with the salaries of employees"
    ],
    correct: 2,
    explanation: "Mantenimiento es el trabajo regular para mantener los equipos en buen estado."
  },
  {
    id: 4,
    block: 1,
    category: "Vocabulary",
    question: "The CNC machine was old and slow; ____, the manager decided to replace it.",
    options: ["otherwise", "therefore", "however", "meanwhile"],
    correct: 1,
    explanation: "\"Therefore\" indica causa/efecto (por lo tanto, el gerente decidió reemplazarla)."
  },
  {
    id: 5,
    block: 1,
    category: "Fill in the Blanks",
    contextId: "ctx_5_7",
    question: "Blank (5)",
    options: ["gone", "going", "goed", "went"],
    correct: 3,
    explanation: "Pasado simple del verbo ir (went) por la pista del pasado \"Last Monday\"."
  },
  {
    id: 6,
    block: 1,
    category: "Fill in the Blanks",
    contextId: "ctx_5_7",
    question: "Blank (6)",
    options: ["any", "an", "a", "some"],
    correct: 0,
    explanation: "Regla del \"ANY\": se usa obligatoriamente tras negaciones plurales (there weren't)."
  },
  {
    id: 7,
    block: 1,
    category: "Fill in the Blanks",
    contextId: "ctx_5_7",
    question: "Blank (7)",
    options: ["under", "on", "between", "in"],
    correct: 3,
    explanation: "Preposición \"in\" indica dentro de un lugar cerrado (in the storeroom = en el almacén)."
  },
  {
    id: 8,
    block: 1,
    category: "Grammar",
    question: "Which sentence is grammatically correct?",
    options: [
      "She doesn't work on weekends because the plant close.",
      "She doesn't work on weekends because the plant closes.",
      "She doesn't works on weekends because the plant closes.",
      "She not works on weekends because the plant closes."
    ],
    correct: 1,
    explanation: "Tras \"doesn't\" el verbo vuelve a su estado normal (work), y la planta (3ª persona) lleva -s (closes)."
  },
  {
    id: 9,
    block: 1,
    category: "Grammar",
    question: "____ the technician ____ the faulty sensor before the machine stopped?",
    options: ["Did / find", "Was / find", "Did / found", "Does / find"],
    correct: 0,
    explanation: "En preguntas de pasado simple se usa el auxiliar \"Did\" y el verbo vuelve a forma base (find)."
  },
  {
    id: 10,
    block: 1,
    category: "Grammar",
    question: "The company has no money this year, so it ____ buy new machines.",
    options: ["doesn't going to", "not going to", "aren't going to", "isn't going to"],
    correct: 3,
    explanation: "Futuro planeado negativo para \"It\" (la compañía): isn't going to."
  },
  {
    id: 11,
    block: 1,
    category: "Grammar",
    question: "Yesterday, the supplier ____ us the wrong parts; however, I think he ____ make the same mistake next time.",
    options: ["sent / won't", "sended / won't", "send / won't", "sent / doesn't"],
    correct: 0,
    explanation: "Pasado irregular \"sent\" por \"yesterday\" y futuro negativo \"won't\" por la promesa/predicción."
  },
  {
    id: 12,
    block: 1,
    category: "Grammar",
    question: "The workshop ____ clean yesterday, so the inspector ____ angry.",
    options: ["weren't / was", "wasn't / was", "wasn't / were", "was / was"],
    correct: 1,
    explanation: "Verbo To Be en pasado: \"the workshop wasn't\" (singular) y \"the inspector was\"."
  },
  {
    id: 13,
    block: 1,
    category: "Technical Vocabulary",
    question: "What is a \"sensor\"?",
    options: [
      "A program that protects a computer",
      "A tool used to cut metal sheets",
      "A cable that connects two printers",
      "A device that detects changes such as temperature, light or movement"
    ],
    correct: 3,
    explanation: "Un sensor es un dispositivo que detecta variaciones físicas como luz, temperatura o movimiento."
  },
  {
    id: 14,
    block: 1,
    category: "Technical Vocabulary",
    question: "What is \"torque\" in mechanics?",
    options: [
      "A safety helmet for workers",
      "A unit of electric current",
      "A turning force applied to an object",
      "A type of industrial oil"
    ],
    correct: 2,
    explanation: "Torque es la fuerza de giro o torsión aplicada a un cuerpo."
  },
  {
    id: 15,
    block: 1,
    category: "Technical Vocabulary",
    question: "What is an \"invoice\"?",
    options: [
      "A document that lists the products or services sold and the amount to pay",
      "A schedule of the workers' shifts",
      "A report about workplace accidents",
      "A machine that prints product labels"
    ],
    correct: 0,
    explanation: "An invoice es la factura comercial de venta."
  },
  {
    id: 16,
    block: 1,
    category: "Technical Vocabulary",
    question: "What does \"debugging\" mean?",
    options: [
      "Designing the logo of an application",
      "Buying licenses for a program",
      "Finding and fixing errors in a program",
      "Installing a new operating system"
    ],
    correct: 2,
    explanation: "Debugging es la depuración o corrección de errores de programación."
  },
  {
    id: 17,
    block: 1,
    category: "Technical Vocabulary",
    question: "What is the function of a \"resistor\" in an electronic circuit?",
    options: [
      "To store information permanently",
      "To cut metal parts",
      "To limit the flow of electric current",
      "To produce sound"
    ],
    correct: 2,
    explanation: "La resistencia (resistor) limita o regula el paso de la corriente eléctrica."
  },
  {
    id: 18,
    block: 1,
    category: "Reading Comprehension",
    contextId: "ctx_18_20",
    question: "Why was Maria worried?",
    options: [
      "There weren't any bottles",
      "She lost her tools",
      "The production was late",
      "The supervisor was angry"
    ],
    correct: 2,
    explanation: "Copia directa del texto: \"Maria was worried because the production was late\"."
  },
  {
    id: 19,
    block: 1,
    category: "Reading Comprehension",
    contextId: "ctx_18_20",
    question: "Where did Maria find the loose cables?",
    options: [
      "Next to the supervisor's office",
      "Behind the control panel",
      "Inside the report",
      "Under the conveyor belt"
    ],
    correct: 1,
    explanation: "Copia directa del texto: \"She found some loose cables behind the control panel\"."
  },
  {
    id: 20,
    block: 1,
    category: "Reading Comprehension",
    contextId: "ctx_18_20",
    question: "What is Maria going to do tomorrow?",
    options: [
      "Leave the plant early",
      "Repair the same robotic arm again",
      "Write a new report",
      "Check the other robotic arms"
    ],
    correct: 3,
    explanation: "Copia directa del texto: \"Tomorrow, Maria is going to check the other robotic arms\"."
  },

  // BLOQUE 2 (21 - 40)
  {
    id: 21,
    block: 2,
    category: "Vocabulary",
    question: "The programmer was ____ when the new application crashed again; he was tired of the same error.",
    options: ["frustrated", "relaxed", "proud", "delighted"],
    correct: 0,
    explanation: "Frustrated (frustrado) al repetirse la falla del programa."
  },
  {
    id: 22,
    block: 2,
    category: "Vocabulary",
    question: "The old lathe is ____; it uses technology from the 1960s and nobody makes spare parts for it.",
    options: ["precise", "obsolete", "efficient", "portable"],
    correct: 1,
    explanation: "Obsolete (obsoleto), tecnología antigua de la que ya no fabrican repuestos."
  },
  {
    id: 23,
    block: 2,
    category: "Vocabulary",
    question: "What is a \"prototype\"?",
    options: [
      "A discount on raw materials",
      "The final invoice of a purchase",
      "The first model of a product, used for testing",
      "A group of employees in a team"
    ],
    correct: 2,
    explanation: "Un prototipo es el primer modelo o versión de prueba de un producto."
  },
  {
    id: 24,
    block: 2,
    category: "Vocabulary",
    question: "The new server is fast; ____, it uses less energy.",
    options: ["Otherwise", "Moreover", "However", "Instead"],
    correct: 1,
    explanation: "\"Moreover\" (además) suma otra característica positiva del servidor."
  },
  {
    id: 25,
    block: 2,
    category: "Fill in the Blanks",
    contextId: "ctx_25_27",
    question: "Blank (25)",
    options: ["haved", "has", "having", "had"],
    correct: 3,
    explanation: "Pasado simple del verbo tener (had) por la pista inicial \"Yesterday\"."
  },
  {
    id: 26,
    block: 2,
    category: "Fill in the Blanks",
    contextId: "ctx_25_27",
    question: "Blank (26)",
    options: ["among", "over", "between", "behind"],
    correct: 2,
    explanation: "Preposición \"between\" indica \"entre dos personas o cosas\" (la secretaria y el contador)."
  },
  {
    id: 27,
    block: 2,
    category: "Fill in the Blanks",
    contextId: "ctx_25_27",
    question: "Blank (27)",
    options: ["much", "any", "a", "some"],
    correct: 1,
    explanation: "Uso obligatorio de \"any\" tras negaciones plurales (there weren't)."
  },
  {
    id: 28,
    block: 2,
    category: "Grammar",
    question: "A: Does your company export products? B: ____",
    options: ["Yes, it does.", "Yes, it do.", "Yes, it exports.", "Yes, it is."],
    correct: 0,
    explanation: "Respuesta corta afirmativa correcta en Presente Simple con el auxiliar \"does\"."
  },
  {
    id: 29,
    block: 2,
    category: "Grammar",
    question: "Yesterday, the technician ____ the error message and ____ the supervisor immediately.",
    options: ["saw / telled", "sawed / tell", "seen / told", "saw / told"],
    correct: 3,
    explanation: "Pasados simples irregulares: \"saw\" (vio) y \"told\" (informó/dijo)."
  },
  {
    id: 30,
    block: 2,
    category: "Grammar",
    question: "____ you ____ attend the training session on Friday?",
    options: ["Are / go to", "Are / going to", "Will / going to", "Do / going to"],
    correct: 1,
    explanation: "Estructura interrogativa de futuro planeado: Are + sujeto + going to."
  },
  {
    id: 31,
    block: 2,
    category: "Grammar",
    question: "Don't worry about tomorrow's update. The system ____ delete your files; I made a backup.",
    options: ["doesn't", "isn't", "didn't", "won't"],
    correct: 3,
    explanation: "Futuro negativo \"won't\" para dar la seguridad de que no borrará los archivos."
  },
  {
    id: 32,
    block: 2,
    category: "Grammar",
    question: "Yesterday, the supplier ____ late, so the machines ____ idle for two hours.",
    options: ["was / was", "were / was", "were / were", "was / were"],
    correct: 3,
    explanation: "Verbo To Be en pasado: \"the supplier was\" (singular) y \"the machines were\" (plural)."
  },
  {
    id: 33,
    block: 2,
    category: "Technical Vocabulary",
    question: "What is a \"lathe\"?",
    options: [
      "A tool for measuring temperature",
      "A computer program for drawing",
      "A machine that rotates a piece of material to shape it",
      "A type of conveyor belt"
    ],
    correct: 2,
    explanation: "Un torno (lathe) hace girar materiales para mecanizarlos y darles forma."
  },
  {
    id: 34,
    block: 2,
    category: "Technical Vocabulary",
    question: "What does \"PLC\" stand for in industrial automation?",
    options: [
      "Power Line Circuit",
      "Primary Logic Computer",
      "Programmable Logic Controller",
      "Portable Light Control"
    ],
    correct: 2,
    explanation: "PLC = Controlador Lógico Programable para automatización industrial."
  },
  {
    id: 35,
    block: 2,
    category: "Technical Vocabulary",
    question: "What is a \"purchase order\"?",
    options: [
      "The manual of a machine",
      "A document sent to a supplier to request goods or services",
      "A report about workplace accidents",
      "A list of the employees of a company"
    ],
    correct: 1,
    explanation: "Una orden de compra es el pedido formal enviado al proveedor."
  },
  {
    id: 36,
    block: 2,
    category: "Technical Vocabulary",
    question: "What is a \"database\"?",
    options: [
      "An organized collection of data stored in a computer",
      "A type of printer",
      "A keyboard connected to a computer",
      "A programming error"
    ],
    correct: 0,
    explanation: "Una base de datos es una colección organizada de datos almacenados en computadora."
  },
  {
    id: 37,
    block: 2,
    category: "Technical Vocabulary",
    question: "What does a \"circuit breaker\" do?",
    options: [
      "It stops the electricity when there is too much current",
      "It measures the temperature of a room",
      "It increases the speed of a motor",
      "It stores data in a computer"
    ],
    correct: 0,
    explanation: "Un interruptor o llave termomagnética (circuit breaker) corta la electricidad ante sobrecargas."
  },
  {
    id: 38,
    block: 2,
    category: "Reading Comprehension",
    contextId: "ctx_38_40",
    question: "What did the inspector see in front of the emergency exit?",
    options: ["A forklift", "Nothing", "Some signs", "Some boxes"],
    correct: 3,
    explanation: "Copia directa del texto: \"there were some boxes in front of the emergency exit\"."
  },
  {
    id: 39,
    block: 2,
    category: "Reading Comprehension",
    contextId: "ctx_38_40",
    question: "How did the warehouse manager feel?",
    options: ["Embarrassed", "Excited", "Bored", "Proud"],
    correct: 0,
    explanation: "Copia directa del texto: \"The warehouse manager felt embarrassed\"."
  },
  {
    id: 40,
    block: 2,
    category: "Reading Comprehension",
    contextId: "ctx_38_40",
    question: "When is the company going to put up new signs?",
    options: ["Today", "Last Friday", "Next week", "In a month"],
    correct: 2,
    explanation: "Copia directa del texto: \"we are going to put up new signs next week\"."
  },

  // BLOQUE 3 (41 - 60)
  {
    id: 41,
    block: 3,
    category: "Vocabulary",
    question: "The technician was ____ because he didn't understand the instructions in the manual.",
    options: ["confused", "excited", "calm", "proud"],
    correct: 0,
    explanation: "Confused (confundido) al no poder interpretar las instrucciones."
  },
  {
    id: 42,
    block: 3,
    category: "Vocabulary",
    question: "A ____ measurement is very exact and has no mistakes.",
    options: ["flexible", "precise", "approximate", "faulty"],
    correct: 1,
    explanation: "Precise (preciso), medición exacta y sin margen de error."
  },
  {
    id: 43,
    block: 3,
    category: "Vocabulary",
    question: "What is a \"budget\"?",
    options: [
      "A machine that counts coins",
      "A plan of the money a company expects to receive and spend",
      "A list of customer complaints",
      "A meeting about safety rules"
    ],
    correct: 1,
    explanation: "El presupuesto (budget) es el plan financiero de ingresos y gastos."
  },
  {
    id: 44,
    block: 3,
    category: "Vocabulary",
    question: "The machine is expensive; ____, it saves a lot of energy.",
    options: ["meanwhile", "therefore", "however", "besides"],
    correct: 2,
    explanation: "\"However\" (sin embargo) introduce el contraste entre costo y ahorro de energía."
  },
  {
    id: 45,
    block: 3,
    category: "Fill in the Blanks",
    contextId: "ctx_45_47",
    question: "Blank (45)",
    options: ["coming", "comed", "come", "came"],
    correct: 3,
    explanation: "Pasado simple del verbo venir (came) por la palabra inicial \"Yesterday\"."
  },
  {
    id: 46,
    block: 3,
    category: "Fill in the Blanks",
    contextId: "ctx_45_47",
    question: "Blank (46)",
    options: ["opposite", "inside", "under", "on"],
    correct: 0,
    explanation: "Preposición \"opposite\" significa al frente o al lado opuesto del salón."
  },
  {
    id: 47,
    block: 3,
    category: "Fill in the Blanks",
    contextId: "ctx_45_47",
    question: "Blank (47)",
    options: ["any", "an", "a", "some"],
    correct: 3,
    explanation: "Se usa \"some\" en oraciones afirmativas con sustantivos plurales (sandwiches)."
  },
  {
    id: 48,
    block: 3,
    category: "Grammar",
    question: "Which sentence is NOT correct?",
    options: [
      "The mechanic doesn't check the oil.",
      "Do the operators wear helmets?",
      "My boss works on Saturdays.",
      "The inspector don't sign the report."
    ],
    correct: 3,
    explanation: "Oración incorrecta: con sujeto singular \"The inspector\" debe usarse \"doesn't\", no \"don't\"."
  },
  {
    id: 49,
    block: 3,
    category: "Grammar",
    question: "The supplier ____ the materials on time, so the production stopped.",
    options: ["didn't send", "not send", "didn't sent", "wasn't send"],
    correct: 0,
    explanation: "Pasado negativo: auxiliar \"didn't\" + verbo en su forma base normal (send)."
  },
  {
    id: 50,
    block: 3,
    category: "Grammar",
    question: "Look at those dark clouds! It ____ rain, so the workers are putting the tools inside.",
    options: ["is going to", "are going to", "going to", "goes to"],
    correct: 0,
    explanation: "Predicción con evidencia física presente (las nubes): \"is going to rain\"."
  },
  {
    id: 51,
    block: 3,
    category: "Grammar",
    question: "I'm sorry I forgot to send the invoice. I promise I ____ forget again.",
    options: ["am not", "won't", "don't", "wasn't"],
    correct: 1,
    explanation: "Promesa de futuro personal: \"I won't forget again\"."
  },
  {
    id: 52,
    block: 3,
    category: "Grammar",
    question: "Where ____ you when the power went out?",
    options: ["did", "were", "was", "are"],
    correct: 1,
    explanation: "Pasado del verbo To Be correspondiente a \"you\": \"were\"."
  },
  {
    id: 53,
    block: 3,
    category: "Technical Vocabulary",
    question: "What is an \"actuator\"?",
    options: [
      "A device that measures distance",
      "A component that produces movement in a machine",
      "A person who sells industrial machines",
      "A program that detects computer viruses"
    ],
    correct: 1,
    explanation: "Un actuador es el componente mecánico que produce movimiento en la máquina."
  },
  {
    id: 54,
    block: 3,
    category: "Technical Vocabulary",
    question: "What does \"to weld\" mean?",
    options: [
      "To measure the thickness of metal",
      "To paint a metal surface",
      "To join metal pieces using heat",
      "To cut metal with water"
    ],
    correct: 2,
    explanation: "\"Weld\" significa soldar o unir piezas metálicas mediante calor."
  },
  {
    id: 55,
    block: 3,
    category: "Technical Vocabulary",
    question: "What is a \"supplier\"?",
    options: [
      "A customer who returns a product",
      "A document that proves a payment",
      "An employee who cleans the office",
      "A person or company that provides goods or services"
    ],
    correct: 3,
    explanation: "Un supplier es el proveedor que suministra bienes o servicios."
  },
  {
    id: 56,
    block: 3,
    category: "Technical Vocabulary",
    question: "What is an \"algorithm\"?",
    options: [
      "A person who tests hardware",
      "A damaged hard drive",
      "A set of steps to solve a problem",
      "A type of internet cable"
    ],
    correct: 2,
    explanation: "Un algoritmo es el conjunto de pasos lógicos para resolver un problema."
  },
  {
    id: 57,
    block: 3,
    category: "Technical Vocabulary",
    question: "What is \"voltage\"?",
    options: [
      "The size of a screen",
      "The temperature of a wire",
      "The speed of a motor",
      "The electrical force that pushes current through a circuit"
    ],
    correct: 3,
    explanation: "El voltaje es la tensión o fuerza eléctrica que impulsa la corriente."
  },
  {
    id: 58,
    block: 3,
    category: "Reading Comprehension",
    contextId: "ctx_58_60",
    question: "What was the problem last week?",
    options: [
      "The mobile app didn't work",
      "The database was deleted",
      "Customers couldn't track their packages",
      "The boss was angry"
    ],
    correct: 2,
    explanation: "Copia directa del texto: \"customers couldn't track their packages on the website\"."
  },
  {
    id: 59,
    block: 3,
    category: "Reading Comprehension",
    contextId: "ctx_58_60",
    question: "How did Daniel's boss feel?",
    options: ["Proud", "Worried", "Confused", "Bored"],
    correct: 0,
    explanation: "Copia directa del texto: \"His boss was very proud of the team\"."
  },
  {
    id: 60,
    block: 3,
    category: "Reading Comprehension",
    contextId: "ctx_58_60",
    question: "What is the team going to create next month?",
    options: [
      "A logistics company",
      "A new website",
      "A mobile app",
      "A new database"
    ],
    correct: 2,
    explanation: "Copia directa del texto: \"the team is going to create a mobile app\"."
  },

  // BLOQUE 4 (61 - 80)
  {
    id: 61,
    block: 4,
    category: "Vocabulary",
    question: "Our client was ____ with the quick delivery, so he gave us a five-star review.",
    options: ["satisfied", "disappointed", "nervous", "scared"],
    correct: 0,
    explanation: "Satisfied (satisfecho) por la rapidez en la entrega del producto."
  },
  {
    id: 62,
    block: 4,
    category: "Vocabulary",
    question: "This tablet is light and easy to carry; it is very ____.",
    options: ["heavy", "defective", "portable", "fixed"],
    correct: 2,
    explanation: "Portable (portátil), liviana y fácil de transportar a cualquier lado."
  },
  {
    id: 63,
    block: 4,
    category: "Vocabulary",
    question: "What is a \"warranty\"?",
    options: [
      "A person who inspects the factory",
      "A promise to repair or replace a product if it fails",
      "A list of employee salaries",
      "A tool for cutting metal"
    ],
    correct: 1,
    explanation: "Garantía: compromiso del fabricante de reparar o cambiar el equipo si falla."
  },
  {
    id: 64,
    block: 4,
    category: "Vocabulary",
    question: "First, turn off the machine. ____, remove the cover. Finally, check the wires.",
    options: ["Instead", "Then", "Therefore", "However"],
    correct: 1,
    explanation: "Conector de secuencia temporal: \"First... Then... Finally...\" (Primero... Luego... Finalmente...)."
  },
  {
    id: 65,
    block: 4,
    category: "Fill in the Blanks",
    contextId: "ctx_65_67",
    question: "Blank (65)",
    options: ["was", "is", "were", "be"],
    correct: 0,
    explanation: "Pasado singular para \"a power cut\" (un corte de energía): there was."
  },
  {
    id: 66,
    block: 4,
    category: "Fill in the Blanks",
    contextId: "ctx_65_67",
    question: "Blank (66)",
    options: ["worried", "worrying", "worries", "worry"],
    correct: 0,
    explanation: "Adjetivo que describe la emoción de las personas: \"worried\" (preocupados)."
  },
  {
    id: 67,
    block: 4,
    category: "Fill in the Blanks",
    contextId: "ctx_65_67",
    question: "Blank (67)",
    options: ["over", "on", "between", "at"],
    correct: 3,
    explanation: "Preposición de ubicación exacta en el espacio: \"at the end of the corridor\"."
  },
  {
    id: 68,
    block: 4,
    category: "Grammar",
    question: "A: ____ your company use renewable energy? B: Yes, it does.",
    options: ["Did", "Do", "Is", "Does"],
    correct: 3,
    explanation: "Auxiliar en Presente Simple para sujeto singular \"your company\": \"Does\"."
  },
  {
    id: 69,
    block: 4,
    category: "Grammar",
    question: "Last year, our company ____ two new machines from Germany.",
    options: ["buyed", "bought", "buy", "buys"],
    correct: 1,
    explanation: "Pasado simple irregular del verbo comprar (bought) por \"Last year\"."
  },
  {
    id: 70,
    block: 4,
    category: "Grammar",
    question: "We ____ install the new software next Monday.",
    options: ["are going to", "going to", "is going to", "will to"],
    correct: 0,
    explanation: "Estructura de futuro planeado para \"We\": \"are going to\"."
  },
  {
    id: 71,
    block: 4,
    category: "Grammar",
    question: "I think the meeting ____ be long. We only have two topics.",
    options: ["isn't", "won't", "don't", "doesn't"],
    correct: 1,
    explanation: "Futuro negativo \"won't\" para hacer una estimación personal sobre la reunión."
  },
  {
    id: 72,
    block: 4,
    category: "Grammar",
    question: "Yesterday there ____ some visitors in the plant, but there ____ any guides.",
    options: ["were / aren't", "was / weren't", "were / weren't", "was / wasn't"],
    correct: 2,
    explanation: "Estructuras plurales en pasado: \"there were\" (afirmativo) y \"there weren't\" (negativo)."
  },
  {
    id: 73,
    block: 4,
    category: "Technical Vocabulary",
    question: "What is a \"robotic arm\"?",
    options: [
      "A mechanical device that moves like a human arm to do tasks",
      "A program to store documents",
      "A type of safety glove",
      "A tool to measure electric voltage"
    ],
    correct: 0,
    explanation: "Un brazo robótico es un dispositivo mecánico automatizado que simula el movimiento del brazo."
  },
  {
    id: 74,
    block: 4,
    category: "Technical Vocabulary",
    question: "What is a \"lubricant\" used for?",
    options: [
      "To cut electric wires",
      "To measure pressure",
      "To reduce friction between moving parts",
      "To join two metal pieces"
    ],
    correct: 2,
    explanation: "El lubricante sirve para reducir la fricción entre componentes en movimiento."
  },
  {
    id: 75,
    block: 4,
    category: "Technical Vocabulary",
    question: "What is a \"payroll\"?",
    options: [
      "A contract with a supplier",
      "A list of employees and the salaries the company pays them",
      "An inventory of tools",
      "A machine that counts products"
    ],
    correct: 1,
    explanation: "La planilla de pagos o nómina (payroll) registra los sueldos del personal."
  },
  {
    id: 76,
    block: 4,
    category: "Technical Vocabulary",
    question: "What is \"cloud storage\"?",
    options: [
      "A computer virus",
      "A weather forecast application",
      "An Internet service to save files instead of using only your computer",
      "A type of keyboard"
    ],
    correct: 2,
    explanation: "Almacenamiento en la nube (cloud storage) para guardar archivos en servidores online."
  },
  {
    id: 77,
    block: 4,
    category: "Technical Vocabulary",
    question: "What is a \"capacitor\"?",
    options: [
      "A type of computer screen",
      "A tool used for soldering",
      "A device that cuts the current in an emergency",
      "A component that stores electric energy"
    ],
    correct: 3,
    explanation: "Un condensador o capacitor almacena energía en forma de campo eléctrico."
  },
  {
    id: 78,
    block: 4,
    category: "Reading Comprehension",
    contextId: "ctx_78_80",
    question: "Why is the company going to organize the training?",
    options: [
      "The workshop was closed",
      "The library is new",
      "There were new employees",
      "There were three small accidents last month"
    ],
    correct: 3,
    explanation: "Copia directa del texto: \"Last month, there were three small accidents in the workshop. Therefore...\"."
  },
  {
    id: 79,
    block: 4,
    category: "Reading Comprehension",
    contextId: "ctx_78_80",
    question: "Where is the training?",
    options: [
      "In the workshop",
      "In front of the library",
      "In Room 3, next to the library",
      "In the cafeteria"
    ],
    correct: 2,
    explanation: "Copia directa del texto: \"in Room 3, next to the library\"."
  },
  {
    id: 80,
    block: 4,
    category: "Reading Comprehension",
    contextId: "ctx_78_80",
    question: "What will the company offer?",
    options: [
      "Some new tools",
      "A complete lunch",
      "New computers",
      "Some coffee and sandwiches"
    ],
    correct: 3,
    explanation: "Copia directa del texto: \"the company will offer some coffee and sandwiches\"."
  },

  // BLOQUE 5 (81 - 100)
  {
    id: 81,
    block: 5,
    category: "Vocabulary",
    question: "I am very ____ about my new job at the factory. Today is my first day!",
    options: ["bored", "angry", "excited", "tired"],
    correct: 2,
    explanation: "Excited (entusiasmado) por empezar su primer día laboral."
  },
  {
    id: 82,
    block: 5,
    category: "Vocabulary",
    question: "This machine is very ____; it works fast and doesn't waste energy.",
    options: ["efficient", "noisy", "broken", "dangerous"],
    correct: 0,
    explanation: "Efficient (eficiente), rápida y sin desperdicio energético."
  },
  {
    id: 83,
    block: 5,
    category: "Vocabulary",
    question: "What is a \"schedule\"?",
    options: [
      "A machine that cuts wood",
      "A group of customers",
      "A person who repairs computers",
      "A plan that shows times and dates for activities"
    ],
    correct: 3,
    explanation: "Un cronograma o horario (schedule) con fechas y horas programadas."
  },
  {
    id: 84,
    block: 5,
    category: "Vocabulary",
    question: "The engineer is repairing the pump; ____, the assistant is cleaning the floor.",
    options: ["Therefore", "Otherwise", "However", "Meanwhile"],
    correct: 3,
    explanation: "\"Meanwhile\" (mientras tanto) indica acciones que ocurren en simultáneo."
  },
  {
    id: 85,
    block: 5,
    category: "Fill in the Blanks",
    contextId: "ctx_85_87",
    question: "Blank (85)",
    options: ["working", "works", "is work", "work"],
    correct: 1,
    explanation: "Presente Simple para rutinas habituales del padre (My father works)."
  },
  {
    id: 86,
    block: 5,
    category: "Fill in the Blanks",
    contextId: "ctx_85_87",
    question: "Blank (86)",
    options: ["get", "got", "getted", "gets"],
    correct: 1,
    explanation: "Pasado simple del verbo get (got) por la pista \"Yesterday\"."
  },
  {
    id: 87,
    block: 5,
    category: "Fill in the Blanks",
    contextId: "ctx_85_87",
    question: "Blank (87)",
    options: ["in", "between", "at", "across"],
    correct: 0,
    explanation: "Preposición \"in\" señala dentro de la caja de herramientas (in the toolbox)."
  },
  {
    id: 88,
    block: 5,
    category: "Grammar",
    question: "She ____ work on Sundays.",
    options: ["doesn't", "isn't", "don't", "not"],
    correct: 0,
    explanation: "Negación en Presente Simple para \"She\": doesn't work."
  },
  {
    id: 89,
    block: 5,
    category: "Grammar",
    question: "Last night, I ____ a good movie about robots.",
    options: ["saw", "sawed", "seen", "see"],
    correct: 0,
    explanation: "Pasado simple del verbo ver (saw) debido a \"Last night\"."
  },
  {
    id: 90,
    block: 5,
    category: "Grammar",
    question: "What ____ you going to do after the exam?",
    options: ["did", "do", "are", "is"],
    correct: 2,
    explanation: "Auxiliar To Be del futuro planeado para \"you\": \"What are you going to do...?\"."
  },
  {
    id: 91,
    block: 5,
    category: "Grammar",
    question: "Tomorrow's test is easy. You ____ have problems.",
    options: ["didn't", "won't", "aren't", "don't"],
    correct: 1,
    explanation: "Futuro negativo \"won't\" para expresar la seguridad de no tener problemas."
  },
  {
    id: 92,
    block: 5,
    category: "Grammar",
    question: "Yesterday, there weren't ____ chairs in the meeting room.",
    options: ["some", "any", "an", "a"],
    correct: 1,
    explanation: "Uso obligatorio de \"any\" tras la negación en plural \"there weren't\"."
  },
  {
    id: 93,
    block: 5,
    category: "Technical Vocabulary",
    question: "What is a \"wrench\" used for?",
    options: [
      "To print documents",
      "To measure temperature",
      "To write computer code",
      "To tighten or loosen nuts and bolts"
    ],
    correct: 3,
    explanation: "Una llave inglesa o de tuercas (wrench) ajusta o afloja tuercas y pernos."
  },
  {
    id: 94,
    block: 5,
    category: "Technical Vocabulary",
    question: "What does a \"conveyor belt\" do?",
    options: [
      "It cuts metal into small pieces",
      "It protects a computer from viruses",
      "It moves products from one place to another",
      "It stores electric energy"
    ],
    correct: 2,
    explanation: "Una cinta o faja transportadora traslada materiales de un punto a otro."
  },
  {
    id: 95,
    block: 5,
    category: "Technical Vocabulary",
    question: "What is a \"receipt\"?",
    options: [
      "A machine that prints labels",
      "A type of safety equipment",
      "A document that proves a payment",
      "A plan of the production process"
    ],
    correct: 2,
    explanation: "Un recibo es el comprobante físico o digital de un pago realizado."
  },
  {
    id: 96,
    block: 5,
    category: "Technical Vocabulary",
    question: "What is \"hardware\"?",
    options: [
      "The physical parts of a computer",
      "A type of internet connection",
      "A password for an account",
      "The programs and applications of a computer"
    ],
    correct: 0,
    explanation: "Hardware son todos los componentes y partes físicas tangibles de la computadora."
  },
  {
    id: 97,
    block: 5,
    category: "Technical Vocabulary",
    question: "What does a \"multimeter\" measure?",
    options: [
      "The speed of a conveyor belt",
      "Voltage, current and resistance",
      "The weight of a package",
      "The size of a screen"
    ],
    correct: 1,
    explanation: "Un multímetro o téster mide voltaje, corriente y resistencia eléctrica."
  },
  {
    id: 98,
    block: 5,
    category: "Reading Comprehension",
    contextId: "ctx_98_100",
    question: "Where was Carlos yesterday?",
    options: [
      "In the library",
      "At home",
      "At an exhibition",
      "In the workshop"
    ],
    correct: 3,
    explanation: "Copia directa del texto: \"Yesterday, he was in the workshop\"."
  },
  {
    id: 99,
    block: 5,
    category: "Reading Comprehension",
    contextId: "ctx_98_100",
    question: "What did Carlos make?",
    options: ["A table", "A robot", "A lathe", "A small metal box"],
    correct: 3,
    explanation: "Copia directa del texto: \"he made a small metal box with a lathe\"."
  },
  {
    id: 100,
    block: 5,
    category: "Reading Comprehension",
    contextId: "ctx_98_100",
    question: "What is Carlos going to do tomorrow?",
    options: [
      "Buy a lathe",
      "Study at home",
      "Paint the box",
      "Take it to an exhibition"
    ],
    correct: 2,
    explanation: "Copia directa del texto: \"Tomorrow, Carlos is going to paint the box\"."
  }
];
