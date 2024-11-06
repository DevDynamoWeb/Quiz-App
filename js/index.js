// alert("Simple Quiz App")


const questions = [
  {
    que_no: 1,
    question: "What is the Internet of Things (IoT)?",
    ans: [
      { text: "A network of connected devices communicating over the internet", correct: true },
      { text: "A software platform for data analytics", correct: false },
      { text: "A cloud storage solution", correct: false },
      { text: "A programming framework for devices", correct: false }
    ]
  },
  {
    que_no: 2,
    question: "Which of the following is a defining characteristic of IoT?",
    ans: [
      { text: "Interconnectivity between physical devices", correct: true },
      { text: "A single, centralized control system", correct: false },
      { text: "A focus on traditional data storage methods", correct: false },
      { text: "Usage limited to industrial applications", correct: false }
    ]
  },
  {
    que_no: 3,
    question: "What are major components of an IoT system?",
    ans: [
      { text: "Sensors, actuators, connectivity, and data processing", correct: true },
      { text: "Only data storage and processing units", correct: false },
      { text: "Networking software only", correct: false },
      { text: "Standalone devices with limited connectivity", correct: false }
    ]
  },
  {
    que_no: 4,
    question: "What is the role of sensors in an IoT ecosystem?",
    ans: [
      { text: "Collecting data from the environment", correct: true },
      { text: "Processing data in the cloud", correct: false },
      { text: "Encrypting data for security", correct: false },
      { text: "Triggering physical actions based on data", correct: false }
    ]
  },
  {
    que_no: 5,
    question: "Which of the following best describes the 'Physical Design' of IoT?",
    ans: [
      { text: "Hardware components and communication technologies", correct: true },
      { text: "Only the data processing software", correct: false },
      { text: "Logical representations of data", correct: false },
      { text: "A cloud-based approach to networking", correct: false }
    ]
  },
  {
    que_no: 6,
    question: "What is included in the logical design of IoT?",
    ans: [
      { text: "Abstract models for data and communication", correct: true },
      { text: "Physical sensors and gateways", correct: false },
      { text: "Actuators and control systems", correct: false },
      { text: "Environmental factors and monitoring", correct: false }
    ]
  },
  {
    que_no: 7,
    question: "Greenfield IoT refers to:",
    ans: [
      { text: "Starting a new IoT project from scratch", correct: true },
      { text: "Integrating IoT with existing systems", correct: false },
      { text: "A focus on environmental IoT applications", correct: false },
      { text: "Replacing legacy IoT systems", correct: false }
    ]
  },
  {
    que_no: 8,
    question: "Brownfield IoT involves:",
    ans: [
      { text: "Integrating IoT into legacy systems", correct: true },
      { text: "Developing new IoT applications", correct: false },
      { text: "Designing IoT-specific hardware", correct: false },
      { text: "Only focusing on data processing", correct: false }
    ]
  },
  {
    que_no: 9,
    question: "Which component is responsible for performing actions in an IoT system?",
    ans: [
      { text: "Actuators", correct: true },
      { text: "Sensors", correct: false },
      { text: "Cloud gateways", correct: false },
      { text: "User interfaces", correct: false }
    ]
  },
  {
    que_no: 10,
    question: "What is a primary function of the IoT network layer?",
    ans: [
      { text: "Facilitating communication between devices", correct: true },
      { text: "Collecting environmental data", correct: false },
      { text: "Controlling device hardware", correct: false },
      { text: "Enabling device storage", correct: false }
    ]
  },
  {
    que_no: 11,
    question: "What is a primary privacy concern in IoT systems?",
    ans: [
      { text: "Unauthorized access to device data", correct: true },
      { text: "Data redundancy", correct: false },
      { text: "Increased device complexity", correct: false },
      { text: "Limited network range", correct: false }
    ]
  },
  {
    que_no: 12,
    question: "Which of the following best defines the concept of interconnectivity in IoT?",
    ans: [
      { text: "Devices communicating and sharing data", correct: true },
      { text: "Standalone operation of devices", correct: false },
      { text: "Limited interaction between devices", correct: false },
      { text: "Only one-way data flow", correct: false }
    ]
  },
  {
    que_no: 13,
    question: "What does 'scalability' refer to in IoT?",
    ans: [
      { text: "Ability to support more devices without degradation", correct: true },
      { text: "A reduction in network speed", correct: false },
      { text: "Limited device support", correct: false },
      { text: "Data redundancy and storage issues", correct: false }
    ]
  },
  {
    que_no: 14,
    question: "What is the role of a gateway in IoT?",
    ans: [
      { text: "Connecting IoT devices to the cloud", correct: true },
      { text: "Collecting data from devices", correct: false },
      { text: "Serving as a device actuator", correct: false },
      { text: "Encrypting communication", correct: false }
    ]
  },
  {
    que_no: 15,
    question: "What does 'Greenfield IoT' mean?",
    ans: [
      { text: "Developing a new IoT application from scratch", correct: true },
      { text: "Upgrading existing IoT systems", correct: false },
      { text: "Focusing on data privacy", correct: false },
      { text: "Enhancing IoT security", correct: false }
    ]
  },
  // Additional questions from 16 to 50
  {
    que_no: 16,
    question: "Which communication protocol is commonly used in IoT devices?",
    ans: [
      { text: "MQTT", correct: true },
      { text: "HTTP", correct: false },
      { text: "FTP", correct: false },
      { text: "SMTP", correct: false }
    ]
  },
  {
    que_no: 17,
    question: "What is a key benefit of using cloud computing in IoT?",
    ans: [
      { text: "Scalability and flexibility", correct: true },
      { text: "Limited storage capacity", correct: false },
      { text: "Increased latency", correct: false },
      { text: "Higher costs", correct: false }
    ]
  },
  {
    que_no: 18,
    question: "Which of the following best describes edge computing in IoT?",
    ans: [
      { text: "Data processing at the location of data generation", correct: true },
      { text: "Data processing solely in the cloud", correct: false },
      { text: "Using only local storage", correct: false },
      { text: "A traditional computing model", correct: false }
    ]
  },
  {
    que_no: 19,
    question: "What is the purpose of an IoT platform?",
    ans: [
      { text: "To manage and analyze IoT devices and data", correct: true },
      { text: "To solely store data", correct: false },
      { text: "To replace physical devices", correct: false },
      { text: "To enhance user interfaces", correct: false }
    ]
  },
  {
    que_no: 20,
    question: "What is a common security measure for IoT devices?",
    ans: [
      { text: "Encryption", correct: true },
      { text: "Ignoring software updates", correct: false },
      { text: "Using default passwords", correct: false },
      { text: "Open network connections", correct: false }
    ]
  },
  {
    que_no: 21,
    question: "Which protocol is known for its low power consumption in IoT?",
    ans: [
      { text: "LoRaWAN", correct: true },
      { text: "Ethernet", correct: false },
      { text: "Wi-Fi", correct: false },
      { text: "Bluetooth Classic", correct: false }
    ]
  },
  {
    que_no: 22,
    question: "What does 'real-time data processing' mean in IoT?",
    ans: [
      { text: "Analyzing data as it is generated", correct: true },
      { text: "Batch processing of data", correct: false },
      { text: "Storing data for future analysis", correct: false },
      { text: "Delayed data reporting", correct: false }
    ]
  },
  {
    que_no: 23,
    question: "Which technology can be used to track IoT devices?",
    ans: [
      { text: "GPS", correct: true },
      { text: "Only Wi-Fi", correct: false },
      { text: "NFC", correct: false },
      { text: "Ethernet", correct: false }
    ]
  },
  {
    que_no: 24,
    question: "What is the role of machine learning in IoT?",
    ans: [
      { text: "To analyze and predict patterns from data", correct: true },
      { text: "To store data", correct: false },
      { text: "To create hardware", correct: false },
      { text: "To disable devices", correct: false }
    ]
  },
  {
    que_no: 25,
    question: "What is a common application of IoT in smart homes?",
    ans: [
      { text: "Smart thermostats", correct: true },
      { text: "Standalone air conditioners", correct: false },
      { text: "Basic lighting systems", correct: false },
      { text: "Traditional locks", correct: false }
    ]
  },
  {
    que_no: 26,
    question: "What is 'device management' in IoT?",
    ans: [
      { text: "Monitoring and controlling devices remotely", correct: true },
      { text: "Creating physical devices", correct: false },
      { text: "Only storing device data", correct: false },
      { text: "Ignoring device security", correct: false }
    ]
  },
  {
    que_no: 27,
    question: "Which of the following is a common use of IoT in agriculture?",
    ans: [
      { text: "Precision farming", correct: true },
      { text: "Manual crop monitoring", correct: false },
      { text: "Traditional irrigation methods", correct: false },
      { text: "Non-automated machinery", correct: false }
    ]
  },
  {
    que_no: 28,
    question: "What is the role of a sensor in a smart city?",
    ans: [
      { text: "Monitoring environmental conditions", correct: true },
      { text: "Providing entertainment", correct: false },
      { text: "Storing historical data", correct: false },
      { text: "Controlling traffic lights only", correct: false }
    ]
  },
  {
    que_no: 29,
    question: "What does 'device interoperability' mean in IoT?",
    ans: [
      { text: "Devices from different manufacturers can work together", correct: true },
      { text: "Only similar devices can connect", correct: false },
      { text: "Devices can only communicate through the cloud", correct: false },
      { text: "Devices require the same software", correct: false }
    ]
  },
  {
    que_no: 30,
    question: "Which technology is often used for short-range communication in IoT?",
    ans: [
      { text: "Bluetooth Low Energy (BLE)", correct: true },
      { text: "Satellite communication", correct: false },
      { text: "5G", correct: false },
      { text: "Dial-up", correct: false }
    ]
  },
  {
    que_no: 31,
    question: "What does 'smart grid' refer to in IoT?",
    ans: [
      { text: "An electricity supply network using digital technology", correct: true },
      { text: "A basic electrical grid", correct: false },
      { text: "Only renewable energy sources", correct: false },
      { text: "Manual monitoring of power usage", correct: false }
    ]
  },
  {
    que_no: 32,
    question: "What is a 'smart contract' in the context of IoT?",
    ans: [
      { text: "Self-executing contracts with the terms directly written into code", correct: true },
      { text: "Contracts requiring manual execution", correct: false },
      { text: "Physical contracts only", correct: false },
      { text: "Contracts that do not involve technology", correct: false }
    ]
  },
  {
    que_no: 33,
    question: "Which type of IoT device can be used for health monitoring?",
    ans: [
      { text: "Wearable fitness trackers", correct: true },
      { text: "Basic watches", correct: false },
      { text: "Traditional stethoscopes", correct: false },
      { text: "Non-digital scales", correct: false }
    ]
  },
  {
    que_no: 34,
    question: "What is a potential drawback of IoT devices?",
    ans: [
      { text: "Privacy concerns due to data collection", correct: true },
      { text: "Increased efficiency", correct: false },
      { text: "Cost savings", correct: false },
      { text: "Enhanced security", correct: false }
    ]
  },
  {
    que_no: 35,
    question: "Which of the following is a critical aspect of IoT security?",
    ans: [
      { text: "Regular software updates", correct: true },
      { text: "Using outdated protocols", correct: false },
      { text: "Ignoring user authentication", correct: false },
      { text: "Minimal encryption", correct: false }
    ]
  },
  {
    que_no: 36,
    question: "Which network topology is often used in IoT applications?",
    ans: [
      { text: "Mesh topology", correct: true },
      { text: "Star topology only", correct: false },
      { text: "Ring topology", correct: false },
      { text: "Bus topology", correct: false }
    ]
  },
  {
    que_no: 37,
    question: "What does 'data analytics' mean in the context of IoT?",
    ans: [
      { text: "Extracting insights from collected data", correct: true },
      { text: "Storing data only", correct: false },
      { text: "Creating hardware devices", correct: false },
      { text: "Manual data processing", correct: false }
    ]
  },
  {
    que_no: 38,
    question: "What is a common communication technology used for IoT?",
    ans: [
      { text: "Zigbee", correct: true },
      { text: "Only Ethernet", correct: false },
      { text: "Dial-up connections", correct: false },
      { text: "Only cellular networks", correct: false }
    ]
  },
  {
    que_no: 39,
    question: "Which of the following is an example of IoT in transportation?",
    ans: [
      { text: "Connected vehicles that communicate with each other", correct: true },
      { text: "Manual traffic lights", correct: false },
      { text: "Only air travel", correct: false },
      { text: "Traditional maps", correct: false }
    ]
  },
  {
    que_no: 40,
    question: "What is 'predictive maintenance' in IoT?",
    ans: [
      { text: "Using data to predict equipment failures", correct: true },
      { text: "Waiting for equipment to fail", correct: false },
      { text: "Manual maintenance only", correct: false },
      { text: "Ignoring performance data", correct: false }
    ]
  },
  {
    que_no: 41,
    question: "Which of the following is an advantage of IoT in retail?",
    ans: [
      { text: "Improved inventory management", correct: true },
      { text: "Increased operational costs", correct: false },
      { text: "Limited customer engagement", correct: false },
      { text: "Manual checkout processes", correct: false }
    ]
  },
  {
    que_no: 42,
    question: "What is a common application of IoT in healthcare?",
    ans: [
      { text: "Remote patient monitoring", correct: true },
      { text: "Only in-hospital care", correct: false },
      { text: "Manual patient records", correct: false },
      { text: "Traditional prescriptions", correct: false }
    ]
  },
  {
    que_no: 43,
    question: "What does 'big data' refer to in IoT?",
    ans: [
      { text: "Large volumes of complex data generated from devices", correct: true },
      { text: "Small data sets", correct: false },
      { text: "Only textual data", correct: false },
      { text: "Data that is easy to manage", correct: false }
    ]
  },
  {
    que_no: 44,
    question: "What is the purpose of an IoT gateway?",
    ans: [
      { text: "To connect local devices to the internet", correct: true },
      { text: "Only for data storage", correct: false },
      { text: "To provide user interfaces", correct: false },
      { text: "To limit device communication", correct: false }
    ]
  },
  {
    que_no: 45,
    question: "Which of the following is an example of an IoT-enabled smart appliance?",
    ans: [
      { text: "Smart refrigerators that track inventory", correct: true },
      { text: "Traditional refrigerators", correct: false },
      { text: "Basic stoves", correct: false },
      { text: "Manual dishwashers", correct: false }
    ]
  },
  {
    que_no: 46,
    question: "What is 'network latency' in the context of IoT?",
    ans: [
      { text: "The delay before data transfer begins", correct: true },
      { text: "The speed of data transfer only", correct: false },
      { text: "The amount of data stored", correct: false },
      { text: "The number of connected devices", correct: false }
    ]
  },
  {
    que_no: 47,
    question: "What is the importance of user experience (UX) in IoT?",
    ans: [
      { text: "Ensuring devices are easy to use and understand", correct: true },
      { text: "Focusing solely on technical features", correct: false },
      { text: "Ignoring customer feedback", correct: false },
      { text: "Prioritizing device complexity", correct: false }
    ]
  },
  {
    que_no: 48,
    question: "What does 'device provisioning' mean in IoT?",
    ans: [
      { text: "Configuring devices to connect to a network", correct: true },
      { text: "Only storing device information", correct: false },
      { text: "Ignoring security measures", correct: false },
      { text: "Disabling devices", correct: false }
    ]
  },
  {
    que_no: 49,
    question: "Which of the following is a potential use of IoT in energy management?",
    ans: [
      { text: "Smart meters that track energy usage", correct: true },
      { text: "Manual readings only", correct: false },
      { text: "Only renewable energy sources", correct: false },
      { text: "Ignoring usage data", correct: false }
    ]
  },
  {
    que_no: 50,
    question: "What is the significance of interoperability in IoT?",
    ans: [
      { text: "Enabling different devices to work together seamlessly", correct: true },
      { text: "Limiting device compatibility", correct: false },
      { text: "Only using proprietary technologies", correct: false },
      { text: "Requiring manual configuration for each device", correct: false }
    ]
  }
];

const questionelemnt = document.getElementById('Question');
const ansButton = document.getElementById('ans-btn');
const nextButton = document.getElementById('next-btn');

let questionsIndex = 0;
let score = 0;

function startQuiz() {
  questionsIndex = 0;
  score = 0;
 nextButton.innerHTML="NEXT"
showQuestion();
}
function showQuestion() {
  resetPreviousQue();
  let currentQuestion = questions[questionsIndex];
  let queNo = questionsIndex+1;

  questionelemnt.innerHTML = queNo + '.' + currentQuestion.question;

  currentQuestion.ans.forEach(ans => {
    const button = document.createElement('button');
    button.innerHTML = ans.text;
    button.classList.add('btn');
    ansButton.appendChild(button);
    if (ans.correct) {
      button.dataset.correct = ans.correct;
     }
    button.addEventListener("click", selectAns);
  })
}

function resetPreviousQue() {
  nextButton.style.display = "none";
  while (ansButton.firstChild) {
    ansButton.removeChild(ansButton.firstChild);
  }
}
  
function selectAns(e) {
  const selectBtn = e.target;
  const correctAns = selectBtn.dataset.correct === 'true';
  if (correctAns) {
    selectBtn.classList.add('correct');
    score++;
  }
  else {
    selectBtn.classList.add('incorrect');
  
  }

  Array.from(ansButton.children).forEach(button => {
    if (button.dataset.correct === 'true') {
      button.classList.add('correct');
    }
    button.disabled = true;
  });
  nextButton.style.display = 'block';
  
}

function handleNextButton() {
  questionsIndex++;
  if (questionsIndex < questions.length) {
    showQuestion()
    
  }
  else {
    showScore();

  }
}


function showScore() {
  resetPreviousQue();
  questionelemnt.innerHTML = `Your scored ${score} out of ${questions.length} `
  
  nextButton.innerHTML = 'Play Again';
  nextButton.style.display = 'block';
}

nextButton.addEventListener('click',()=> {
  if(questionsIndex < questions.length){
  handleNextButton();
  } else {
    startQuiz();
  }
})

startQuiz();

// localStorage.setItem()


