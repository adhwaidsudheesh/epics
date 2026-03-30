const quizData = {
    physics: [
        {
            q: { en: "A particle is moving in a circular path of radius r with a uniform speed v. What is the magnitude of change in velocity when it completes half a revolution?", hi: "एक कण एकसमान चाल v के साथ r त्रिज्या के वृत्ताकार पथ में गतिमान है। जब यह आधा चक्कर पूरा करता है तो वेग में परिवर्तन का परिमाण क्या होता है?" },
            options: [
                { en: "0", hi: "0" },
                { en: "v", hi: "v" },
                { en: "2v", hi: "2v" },
                { en: "v / 2", hi: "v / 2" }
            ],
            correctIndex: 2,
            solution: {
                en: "Let initial velocity v1 = v ĵ. After half revolution, velocity will be in opposite direction v2 = -v ĵ. Change in velocity Δv = v2 - v1 = -v ĵ - v ĵ = -2v ĵ. Magnitude = |Δv| = 2v.",
                hi: "माना प्रारंभिक वेग v1 = v ĵ। आधा चक्कर लगाने के बाद, वेग विपरीत दिशा में होगा v2 = -v ĵ। वेग में परिवर्तन Δv = v2 - v1 = -v ĵ - v ĵ = -2v ĵ। परिमाण = |Δv| = 2v।"
            }
        },
        {
            q: { en: "Which of the following remains constant in a uniform circular motion?", hi: "एकसमान वृत्तीय गति में निम्नलिखित में से क्या स्थिर रहता है?" },
            options: [
                { en: "Velocity", hi: "वेग" },
                { en: "Kinetic Energy", hi: "गतिज ऊर्जा" },
                { en: "Momentum", hi: "संवेग" },
                { en: "Acceleration", hi: "त्वरण" }
            ],
            correctIndex: 1,
            solution: {
                en: "In uniform circular motion, speed (magnitude of velocity) remains constant. Since Kinetic Energy = 1/2 mv^2, and both mass and speed are constant, the kinetic energy remains constant.",
                hi: "एकसमान वृत्तीय गति में, चाल (वेग का परिमाण) स्थिर रहती है। चूंकि गतिज ऊर्जा = 1/2 mv^2, स्थिर है।"
            }
        },
        {
            q: { en: "A car accelerates uniformly from rest to a speed of 20 m/s in 10 s. What is the acceleration?", hi: "एक कार विरामावस्था से एकसमान रूप से त्वरित होकर 10 सेकंड में 20 m/s की चाल तक पहुँचती है। त्वरण क्या है?" },
            options: [
                { en: "1 m/s²", hi: "1 m/s²" },
                { en: "2 m/s²", hi: "2 m/s²" },
                { en: "4 m/s²", hi: "4 m/s²" },
                { en: "20 m/s²", hi: "20 m/s²" }
            ],
            correctIndex: 1,
            solution: {
                en: "Using the kinematic equation v = u + at, where u = 0, v = 20, and t = 10. Thus, 20 = 0 + a(10), which gives a = 2 m/s².",
                hi: "समीकरण v = u + at का उपयोग करते हुए, जहाँ u = 0, v = 20, और t = 10। इस प्रकार a = 2 m/s²।"
            }
        },
        {
            q: { en: "What is the unit of electric potential?", hi: "विद्युत विभव की इकाई क्या है?" },
            options: [{ en: "Joule", hi: "जूल" }, { en: "Coulomb", hi: "कूलॉम" }, { en: "Volt", hi: "वोल्ट" }, { en: "Watt", hi: "वाट" }],
            correctIndex: 2,
            solution: { en: "The unit of electric potential is the Volt (V).", hi: "विद्युत विभव की इकाई वोल्ट (V) है।" }
        },
        {
            q: { en: "If the distance between two point charges is doubled, the electrostatic force between them becomes:", hi: "यदि दो बिंदु आवेशों के बीच की दूरी दोगुनी कर दी जाए, तो उनके बीच स्थिरवैद्युत बल हो जाता है:" },
            options: [{ en: "Double", hi: "दोगुना" }, { en: "Half", hi: "आधा" }, { en: "One-fourth", hi: "एक चौथाई" }, { en: "Four times", hi: "चार गुना" }],
            correctIndex: 2,
            solution: { en: "According to Coulomb's law, Force is inversely proportional to the square of the distance. If distance is doubled, force becomes 1/4th.", hi: "कूलॉम के नियम के अनुसार, बल दूरी के वर्ग के व्युत्क्रमानुपाती होता है। दूरी दोगुनी होने पर बल 1/4 हो जाता है।" }
        },
        {
            q: { en: "The property of a body to remain at rest or in uniform motion is called:", hi: "किसी पिंड के विरामावस्था या एकसमान गति में रहने के गुण को क्या कहते हैं?" },
            options: [{ en: "Momentum", hi: "संवेग" }, { en: "Inertia", hi: "जड़त्व" }, { en: "Force", hi: "बल" }, { en: "Energy", hi: "ऊर्जा" }],
            correctIndex: 1,
            solution: { en: "This property is called Inertia, described by Newton's First Law.", hi: "इस गुण को जड़त्व कहा जाता है, जिसे न्यूटन के पहले नियम से वर्णित किया गया है।" }
        },
        {
            q: { en: "In an elastic collision, which of the following is conserved?", hi: "प्रत्यास्थ टक्कर में, निम्नलिखित में से क्या संरक्षित रहता है?" },
            options: [{ en: "Momentum only", hi: "केवल संवेग" }, { en: "Kinetic energy only", hi: "केवल गतिज ऊर्जा" }, { en: "Both momentum and kinetic energy", hi: "संवेग और गतिज ऊर्जा दोनों" }, { en: "Neither", hi: "कोई नहीं" }],
            correctIndex: 2,
            solution: { en: "An elastic collision conserves both total momentum and total kinetic energy.", hi: "प्रत्यास्थ टक्कर कुल संवेग और कुल गतिज ऊर्जा दोनों का संरक्षण करती है।" }
        },
        {
            q: { en: "The acceleration due to gravity on the surface of the moon is approximately:", hi: "चंद्रमा की सतह पर गुरुत्वाकर्षण के कारण त्वरण लगभग कितना है?" },
            options: [{ en: "Same as Earth", hi: "पृथ्वी के समान" }, { en: "1/6th of Earth", hi: "पृथ्वी का 1/6" }, { en: "1/2 of Earth", hi: "पृथ्वी का 1/2" }, { en: "Zero", hi: "शून्य" }],
            correctIndex: 1,
            solution: { en: "The gravity on the moon is about 1.62 m/s², which is approximately 1/6th of Earth's gravity.", hi: "चंद्रमा पर गुरुत्वाकर्षण लगभग 1.62 m/s² है, जो पृथ्वी के गुरुत्वाकर्षण का लगभग 1/6 है।" }
        },
        {
            q: { en: "Light-year is a unit of:", hi: "प्रकाश-वर्ष किसकी इकाई है?" },
            options: [{ en: "Time", hi: "समय" }, { en: "Speed", hi: "चाल" }, { en: "Distance", hi: "दूरी" }, { en: "Intensity", hi: "तीव्रता" }],
            correctIndex: 2,
            solution: { en: "A light-year is the distance that light travels in a vacuum in one year.", hi: "प्रकाश-वर्ष वह दूरी है जो प्रकाश निर्वात में एक वर्ष में तय करता है।" }
        },
        {
            q: { en: "The frequency of direct current (DC) is:", hi: "दिष्ट धारा (DC) की आवृत्ति कितनी होती है?" },
            options: [{ en: "0 Hz", hi: "0 Hz" }, { en: "50 Hz", hi: "50 Hz" }, { en: "60 Hz", hi: "60 Hz" }, { en: "100 Hz", hi: "100 Hz" }],
            correctIndex: 0,
            solution: { en: "Direct current flows in only one direction constantly, so its frequency is 0 Hz.", hi: "दिष्ट धारा केवल एक दिशा में लगातार बहती है, इसलिए इसकी आवृत्ति 0 हर्ट्ज है।" }
        },
        {
            q: { en: "Which color of light deviates the most in a prism?", hi: "प्रिज्म में प्रकाश का कौन सा रंग सबसे अधिक विचलित होता है?" },
            options: [{ en: "Red", hi: "लाल" }, { en: "Yellow", hi: "पीला" }, { en: "Green", hi: "हरा" }, { en: "Violet", hi: "बैंगनी" }],
            correctIndex: 3,
            solution: { en: "Violet light has the shortest wavelength and hence the highest refractive index, causing it to deviate the most.", hi: "बैंगनी प्रकाश की तरंग दैर्ध्य सबसे कम होती है इसलिए यह सबसे अधिक विचलित होता है।" }
        },
        {
            q: { en: "A transformer works on the principle of:", hi: "एक ट्रांसफार्मर किस सिद्धांत पर काम करता है?" },
            options: [{ en: "Self-induction", hi: "स्व-प्रेरण" }, { en: "Mutual induction", hi: "अन्योन्य प्रेरण" }, { en: "Ohm's Law", hi: "ओम का नियम" }, { en: "Fleming's Rule", hi: "फ्लेमिंग का नियम" }],
            correctIndex: 1,
            solution: { en: "Transformers operate based on Faraday's law of mutual induction between two coils.", hi: "ट्रांसफॉर्मर दो कुंडलियों के बीच अन्योन्य प्रेरण पर काम करते हैं।" }
        },
        {
            q: { en: "The SI unit of magnetic flux is:", hi: "चुंबकीय प्रवाह (फ्लक्स) की SI इकाई है:" },
            options: [{ en: "Tesla", hi: "टेस्ला" }, { en: "Weber", hi: "वेबर" }, { en: "Henry", hi: "हेनरी" }, { en: "Farad", hi: "फैराड" }],
            correctIndex: 1,
            solution: { en: "The Weber (Wb) is the SI unit of magnetic flux.", hi: "वेबर (Wb) चुंबकीय प्रवाह की SI इकाई है।" }
        },
        {
            q: { en: "What is the minimum escape velocity of a rocket to be launched into space?", hi: "अंतरिक्ष में लॉन्च किए जाने वाले रॉकेट का न्यूनतम पलायन वेग क्या है?" },
            options: [{ en: "5 km/s", hi: "5 km/s" }, { en: "8 km/s", hi: "8 km/s" }, { en: "11.2 km/s", hi: "11.2 km/s" }, { en: "15 km/s", hi: "15 km/s" }],
            correctIndex: 2,
            solution: { en: "The escape velocity from Earth's surface is approximately 11.2 km/s.", hi: "पृथ्वी की सतह से पलायन वेग लगभग 11.2 km/s है।" }
        },
        {
            q: { en: "Sound waves are:", hi: "ध्वनि तरंगें हैं:" },
            options: [{ en: "Transverse", hi: "अनुप्रस्थ" }, { en: "Longitudinal", hi: "अनुदैर्ध्य" }, { en: "Electromagnetic", hi: "विद्युतचुंबकीय" }, { en: "Non-mechanical", hi: "अयांत्रिक" }],
            correctIndex: 1,
            solution: { en: "Sound waves require a medium and propagate as longitudinal mechanical waves.", hi: "ध्वनि तरंगें अनुदैर्ध्य यांत्रिक तरंगों के रूप में फैलती हैं।" }
        }
    ],
    chemistry: [
        {
            q: { en: "Which of the following exhibits the +4 oxidation state most stably?", hi: "निम्नलिखित में से कौन +4 ऑक्सीकरण अवस्था को सबसे अधिक स्थिरता से प्रदर्शित करता है?" },
            options: [{ en: "Carbon (C)", hi: "कार्बन (C)" }, { en: "Lead (Pb)", hi: "सीसा (Pb)" }, { en: "Tin (Sn)", hi: "टिन (Sn)" }, { en: "Silicon (Si)", hi: "सिलिकॉन (Si)" }],
            correctIndex: 0,
            solution: { en: "Carbon forms very stable +4 oxidation states.", hi: "कार्बन बहुत स्थिर +4 ऑक्सीकरण अवस्था बनाते हैं।" }
        },
        {
            q: { en: "What is the geometry of the molecule IF7?", hi: "अणु IF7 की ज्यामिति क्या है?" },
            options: [{ en: "Octahedral", hi: "अष्टफलकीय" }, { en: "Pentagonal bipyramidal", hi: "पंचकोणीय द्विपिरामिडीय" }, { en: "Trigonal bipyramidal", hi: "त्रिकोणीय द्विपिरामिडीय" }, { en: "Tetrahedral", hi: "चतुष्फलकीय" }],
            correctIndex: 1,
            solution: { en: "In IF7, the hybridization is sp3d3, leading to a Pentagonal bipyramidal geometry.", hi: "IF7 में, संकरण sp3d3 है, जिससे पंचकोणीय द्विपिरामिडीय ज्यामिति होती है।" }
        },
        {
            q: { en: "Which of the following is commonly known as laughing gas?", hi: "निम्नलिखित में से किसे लाफिंग गैस (हास्य गैस) के रूप में जाना जाता है?" },
            options: [{ en: "Nitric oxide (NO)", hi: "नाइट्रिक ऑक्साइड (NO)" }, { en: "Nitrous oxide (N2O)", hi: "नाइट्रस ऑक्साइड (N2O)" }, { en: "Nitrogen dioxide (NO2)", hi: "नाइट्रोजन डाइऑक्साइड (NO2)" }, { en: "Ammonia (NH3)", hi: "अमोनिया (NH3)" }],
            correctIndex: 1,
            solution: { en: "Nitrous oxide (N2O) is commonly known as laughing gas.", hi: "नाइट्रस ऑक्साइड (N2O) को लाफिंग गैस के रूप में जाना जाता है।" }
        },
        {
            q: { en: "The pH of a neutral solution at 25°C is:", hi: "25°C पर उदासीन विलयन का pH मान है:" },
            options: [{ en: "0", hi: "0" }, { en: "7", hi: "7" }, { en: "14", hi: "14" }, { en: "1", hi: "1" }],
            correctIndex: 1,
            solution: { en: "Pure water and neutral solutions have a pH of exactly 7 at standard temperature (25°C).", hi: "शुद्ध जल और उदासीन विलयन का pH मान ठीक 7 होता है।" }
        },
        {
            q: { en: "Which acid is present in ant sting?", hi: "चींटी के डंक में कौन सा अम्ल होता है?" },
            options: [{ en: "Ascorbic acid", hi: "एस्कॉर्बिक अम्ल" }, { en: "Acetic acid", hi: "एसिटिक अम्ल" }, { en: "Formic acid", hi: "फॉर्मिक अम्ल" }, { en: "Citric acid", hi: "सिट्रिक अम्ल" }],
            correctIndex: 2,
            solution: { en: "Formic acid (Methanoic acid) is present in the sting of ants and bees.", hi: "चींटियों के डंक में फॉर्मिक अम्ल (मेथेनोइक अम्ल) होता है।" }
        },
        {
            q: { en: "Which of the following elements is a liquid at room temperature?", hi: "निम्नलिखित में से कौन सा तत्व कमरे के तापमान पर तरल होता है?" },
            options: [{ en: "Lithium", hi: "लिथियम" }, { en: "Bromine", hi: "ब्रोमीन" }, { en: "Iodine", hi: "आयोडीन" }, { en: "Phosphorus", hi: "फास्फोरस" }],
            correctIndex: 1,
            solution: { en: "Bromine and Mercury are the only two elements that are liquids at standard room temperature.", hi: "ब्रोमीन और पारा केवल दो तत्व हैं जो कमरे के तापमान पर तरल होते हैं।" }
        },
        {
            q: { en: "The process of coating iron with zinc to prevent rusting is known as:", hi: "लोहे को जंग से बचाने के लिए जिंक की परत चढ़ाने की प्रक्रिया को क्या कहते हैं?" },
            options: [{ en: "Vulcanization", hi: "वल्कनीकरण" }, { en: "Galvanization", hi: "गैल्वेनाइजेशन" }, { en: "Alloying", hi: "मिश्रधातु बनाना" }, { en: "Anodizing", hi: "एनोडाइजिंग" }],
            correctIndex: 1,
            solution: { en: "Galvanization is the application of a protective zinc coating to steel or iron.", hi: "लोहे पर सुरक्षात्मक जिंक कोटिंग लगाना गैल्वेनाइजेशन कहलाता है।" }
        },
        {
            q: { en: "What is the chemical formula for baking soda?", hi: "बेकिंग सोडा का रासायनिक सूत्र क्या है?" },
            options: [{ en: "Na2CO3", hi: "Na2CO3" }, { en: "NaHCO3", hi: "NaHCO3" }, { en: "NaOH", hi: "NaOH" }, { en: "NaCl", hi: "NaCl" }],
            correctIndex: 1,
            solution: { en: "Sodium bicarbonate (NaHCO3) is commonly known as baking soda.", hi: "सोडियम बाइकार्बोनेट (NaHCO3) को बेकिंग सोडा कहा जाता है।" }
        },
        {
            q: { en: "Mendeleev's periodic table was based on:", hi: "मेंडलीफ की आवर्त सारणी किस पर आधारित थी?" },
            options: [{ en: "Atomic number", hi: "परमाणु संख्या" }, { en: "Atomic mass", hi: "परमाणु द्रव्यमान" }, { en: "Valency", hi: "संयोजकता" }, { en: "Number of neutrons", hi: "न्यूट्रॉन की संख्या" }],
            correctIndex: 1,
            solution: { en: "Mendeleev arranged elements in order of increasing atomic mass.", hi: "मेंडलीफ ने तत्वों को बढ़ते परमाणु द्रव्यमान के क्रम में व्यवस्थित किया था।" }
        },
        {
            q: { en: "The hardest natural substance known is:", hi: "ज्ञात सबसे कठोर प्राकृतिक पदार्थ कौन सा है?" },
            options: [{ en: "Graphite", hi: "ग्रेफाइट" }, { en: "Diamond", hi: "हीरा" }, { en: "Quartz", hi: "क्वार्ट्ज" }, { en: "Platinum", hi: "प्लैटिनम" }],
            correctIndex: 1,
            solution: { en: "Diamond, an allotrope of carbon, is the hardest known naturally occurring material.", hi: "हीरा, जो कार्बन का एक अपरूप है, सबसे कठोर प्राकृतिक पदार्थ है।" }
        },
        {
            q: { en: "An alloy of copper and zinc is called:", hi: "तांबे और जस्ता की मिश्र धातु को क्या कहा जाता है?" },
            options: [{ en: "Bronze", hi: "कांस्य" }, { en: "Brass", hi: "पीतल" }, { en: "Solder", hi: "सोल्डर" }, { en: "Steel", hi: "स्टील" }],
            correctIndex: 1,
            solution: { en: "Brass is an alloy made of copper and zinc.", hi: "पीतल तांबे और जस्ता से बनी मिश्र धातु है।" }
        },
        {
            q: { en: "Which gas is responsible for the greenhouse effect?", hi: "ग्रीनहाउस प्रभाव के लिए कौन सी गैस मुख्य रूप से जिम्मेदार है?" },
            options: [{ en: "Oxygen", hi: "ऑक्सीजन" }, { en: "Nitrogen", hi: "नाइट्रोजन" }, { en: "Carbon dioxide", hi: "कार्बन डाइऑक्साइड" }, { en: "Argon", hi: "आर्गन" }],
            correctIndex: 2,
            solution: { en: "Carbon dioxide (CO2) is a primary greenhouse gas in Earth's atmosphere.", hi: "कार्बन डाइऑक्साइड (CO2) पृथ्वी के वायुमंडल में एक प्राथमिक ग्रीनहाउस गैस है।" }
        },
        {
            q: { en: "What is the chief ore of Aluminum?", hi: "एल्युमिनियम का मुख्य अयस्क क्या है?" },
            options: [{ en: "Bauxite", hi: "बॉक्साइट" }, { en: "Hematite", hi: "हेमेटाइट" }, { en: "Magnetite", hi: "मैग्नेटाइट" }, { en: "Galena", hi: "गैलेना" }],
            correctIndex: 0,
            solution: { en: "Bauxite is the most important aluminum ore, containing hydrated alumina.", hi: "बॉक्साइट एल्युमिनियम का सबसे महत्वपूर्ण अयस्क है।" }
        },
        {
            q: { en: "The number of moles of solute present in 1 liter of solution is called:", hi: "1 लीटर विलयन में मौजूद विलेय के मोलों की संख्या को क्या कहा जाता है?" },
            options: [{ en: "Molality", hi: "मोललिटी" }, { en: "Molarity", hi: "मोलरता" }, { en: "Normality", hi: "नॉर्मलता" }, { en: "Mole fraction", hi: "मोल अंश" }],
            correctIndex: 1,
            solution: { en: "Molarity (M) focuses on the volume of the solution in liters.", hi: "मोलरता (M) 1 लीटर विलयन में विलेय के मोलों की संख्या बताती है।" }
        },
        {
            q: { en: "Which type of bonding involves the sharing of electron pairs between atoms?", hi: "किस प्रकार के आबंध में परमाणुओं के बीच इलेक्ट्रॉन जोड़े साझा किए जाते हैं?" },
            options: [{ en: "Ionic bond", hi: "आयनिक आबंध" }, { en: "Covalent bond", hi: "सहसंयोजक आबंध" }, { en: "Hydrogen bond", hi: "हाइड्रोजन आबंध" }, { en: "Metallic bond", hi: "धात्विक आबंध" }],
            correctIndex: 1,
            solution: { en: "A covalent bond is a chemical bond that involves the sharing of electron pairs.", hi: "सहसंयोजक आबंध में इलेक्ट्रॉनों का साझा होता है।" }
        }
    ],
    maths: [
        {
            q: { en: "What is the derivative of sin(x) with respect to x?", hi: "x के सापेक्ष sin(x) का अवकलज क्या है?" },
            options: [{ en: "-cos(x)", hi: "-cos(x)" }, { en: "cos(x)", hi: "cos(x)" }, { en: "-sin(x)", hi: "-sin(x)" }, { en: "sec^2(x)", hi: "sec^2(x)" }],
            correctIndex: 1,
            solution: { en: "d/dx(sin x) = cos(x).", hi: "d/dx(sin x) = cos(x)।" }
        },
        {
            q: { en: "The value of integral from 0 to π/2 of cos^2(x) dx is?", hi: "0 से π/2 तक cos^2(x) dx के समाकलन का मान क्या है?" },
            options: [{ en: "π/2", hi: "π/2" }, { en: "π/4", hi: "π/4" }, { en: "1", hi: "1" }, { en: "0", hi: "0" }],
            correctIndex: 1,
            solution: { en: "Using the property integral of f(x) from 0 to a, the answer evaluates to π/4.", hi: "समाकलन के विशेष गुण का उपयोग करते हुए, उत्तर π/4 है।" }
        },
        {
            q: { en: "What is the value of log(100) to the base 10?", hi: "आधार 10 पर log(100) का मान क्या है?" },
            options: [{ en: "1", hi: "1" }, { en: "2", hi: "2" }, { en: "10", hi: "10" }, { en: "100", hi: "100" }],
            correctIndex: 1,
            solution: { en: "Since 10^2 = 100, log_10(100) = 2.", hi: "चूंकि 10^2 = 100, इसलिए log_10(100) = 2." }
        },
        {
            q: { en: "If A is a matrix of order 3x3 and |A| = 4, what is the value of |2A|?", hi: "यदि A कोटि 3x3 का एक आव्यूह है और |A| = 4, तो |2A| का मान क्या होगा?" },
            options: [{ en: "8", hi: "8" }, { en: "16", hi: "16" }, { en: "32", hi: "32" }, { en: "64", hi: "64" }],
            correctIndex: 2,
            solution: { en: "For an n x n matrix A, |kA| = (k^n)|A|. Therefore |2A| = (2^3)*4 = 8*4 = 32.", hi: "सूत्र |kA| = (k^n)|A| का उपयोग करते हुए: |2A| = (2^3)*4 = 8*4 = 32।" }
        },
        {
            q: { en: "The sum of the interior angles of a hexagon is:", hi: "एक षट्भुज के आंतरिक कोणों का योग कितना होता है?" },
            options: [{ en: "360°", hi: "360°" }, { en: "540°", hi: "540°" }, { en: "720°", hi: "720°" }, { en: "900°", hi: "900°" }],
            correctIndex: 2,
            solution: { en: "Formula: Sum = (n-2)*180. For hexagon n=6. Sum = 4*180 = 720°.", hi: "सूत्र: (n-2)*180. n=6 के लिए: 4*180 = 720°।" }
        },
        {
            q: { en: "What is the probability of getting a sum of 7 when two dice are rolled?", hi: "दो पांसे फेंकने पर योग 7 प्राप्त होने की प्रायिकता क्या है?" },
            options: [{ en: "1/6", hi: "1/6" }, { en: "1/12", hi: "1/12" }, { en: "1/36", hi: "1/36" }, { en: "1/2", hi: "1/2" }],
            correctIndex: 0,
            solution: { en: "There are 6 combinations that sum to 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1). Total outcomes = 36. Probability = 6/36 = 1/6.", hi: "7 योग वाली 6 संभावनाएँ हैं। कुल संभावनाएँ 36 हैं। प्रायिकता = 6/36 = 1/6।" }
        },
        {
            q: { en: "The equation of a line passing through the origin and having slope m is:", hi: "मूल बिंदु से गुजरने वाली और m ढलान वाली रेखा का समीकरण है:" },
            options: [{ en: "y = mx + c", hi: "y = mx + c" }, { en: "y = mx", hi: "y = mx" }, { en: "x/a + y/b = 1", hi: "x/a + y/b = 1" }, { en: "x = my", hi: "x = my" }],
            correctIndex: 1,
            solution: { en: "Since the line passes through origin (0,0), the y-intercept c is 0. So y = mx.", hi: "चूंकि रेखा मूल बिंदु (0,0) से होकर गुजरती है, इसलिए c=0। अतः y = mx।" }
        },
        {
            q: { en: "If the roots of the quadratic equation ax^2 + bx + c = 0 are equal, then:", hi: "यदि द्विघात समीकरण ax^2 + bx + c = 0 के मूल समान हैं, तो:" },
            options: [{ en: "b^2 > 4ac", hi: "b^2 > 4ac" }, { en: "b^2 < 4ac", hi: "b^2 < 4ac" }, { en: "b^2 = 4ac", hi: "b^2 = 4ac" }, { en: "b = 0", hi: "b = 0" }],
            correctIndex: 2,
            solution: { en: "For equal roots, the discriminant D must be zero. D = b^2 - 4ac = 0. Therefore b^2 = 4ac.", hi: "समान मूलों के लिए, विविक्तकर D शून्य होना चाहिए। अतः b^2 = 4ac।" }
        },
        {
            q: { en: "What is the factorial of 5 (5!)?", hi: "5 का फैक्टोरियल (5!) क्या है?" },
            options: [{ en: "20", hi: "20" }, { en: "60", hi: "60" }, { en: "120", hi: "120" }, { en: "100", hi: "100" }],
            correctIndex: 2,
            solution: { en: "5! = 5 * 4 * 3 * 2 * 1 = 120.", hi: "5! = 5 * 4 * 3 * 2 * 1 = 120." }
        },
        {
            q: { en: "In an arithmetic progression (AP), if a = 2 and d = 3, what is the 10th term?", hi: "एक समांतर श्रेढ़ी (AP) में यदि a=2 और d=3 है, तो 10वां पद क्या है?" },
            options: [{ en: "29", hi: "29" }, { en: "31", hi: "31" }, { en: "32", hi: "32" }, { en: "27", hi: "27" }],
            correctIndex: 0,
            solution: { en: "nth term = a + (n-1)d. 10th term = 2 + (9)3 = 2 + 27 = 29.", hi: "nवाँ पद = a + (n-1)d. 10वाँ पद = 2 + 27 = 29।" }
        },
        {
            q: { en: "The value of sin^2(x) + cos^2(x) for any value of x is:", hi: "x के किसी भी मान के लिए sin^2(x) + cos^2(x) का मान क्या है?" },
            options: [{ en: "0", hi: "0" }, { en: "1", hi: "1" }, { en: "tan^2(x)", hi: "tan^2(x)" }, { en: "Depends on x", hi: "x पर निर्भर है" }],
            correctIndex: 1,
            solution: { en: "This is a fundamental trigonometric identity: sin^2(x) + cos^2(x) = 1.", hi: "यह एक मौलिक त्रिकोणमितीय सर्वसमिका है।" }
        },
        {
            q: { en: "The volume of a sphere of radius r is given by:", hi: "त्रिज्या r वाले गोले का आयतन क्या होता है?" },
            options: [{ en: "4/3 πr^2", hi: "4/3 πr^2" }, { en: "4/3 πr^3", hi: "4/3 πr^3" }, { en: "4 πr^2", hi: "4 πr^2" }, { en: "3/4 πr^3", hi: "3/4 πr^3" }],
            correctIndex: 1,
            solution: { en: "By geometric integration, the volume is V = (4/3)πr^3.", hi: "सूत्र के अनुसार, गोले का आयतन (4/3)πr^3 होता है।" }
        },
        {
            q: { en: "Integration of 1/x dx is:", hi: "1/x dx का समाकलन क्या है?" },
            options: [{ en: "x^2/2 + C", hi: "x^2/2 + C" }, { en: "-1/x^2 + C", hi: "-1/x^2 + C" }, { en: "ln|x| + C", hi: "ln|x| + C" }, { en: "e^x + C", hi: "e^x + C" }],
            correctIndex: 2,
            solution: { en: "The anti-derivative of 1/x is the natural logarithm ln|x|.", hi: "1/x का समाकलन प्राकृतिक लघुगणक ln|x| होता है।" }
        },
        {
            q: { en: "A matrix having only one row is known as:", hi: "केवल एक पंक्ति वाले आव्यूह को क्या कहते हैं?" },
            options: [{ en: "Column matrix", hi: "स्तंभ आव्यूह" }, { en: "Row matrix", hi: "पंक्ति आव्यूह" }, { en: "Square matrix", hi: "वर्ग आव्यूह" }, { en: "Diagonal matrix", hi: "विकर्ण आव्यूह" }],
            correctIndex: 1,
            solution: { en: "A matrix with precisely one row is defined as a row matrix.", hi: "केवल एक पंक्ति वाले आव्यूह को पंक्ति आव्यूह कहा जाता है।" }
        },
        {
            q: { en: "The locus of points equidistant from a fixed point is a:", hi: "एक निश्चित बिंदु से समान दूरी पर स्थित बिंदुओं का बिंदुपथ होता है:" },
            options: [{ en: "Straight line", hi: "सीधी रेखा" }, { en: "Parabola", hi: "परवलय" }, { en: "Circle", hi: "वृत्त" }, { en: "Ellipse", hi: "दीर्घवृत्त" }],
            correctIndex: 2,
            solution: { en: "By definition, the set of all points equidistant from a center is a circle.", hi: "परिभाषा के अनुसार, केंद्र से समान दूरी पर स्थित बिंदुओं का समूह वृत्त होता है।" }
        }
    ]
};
