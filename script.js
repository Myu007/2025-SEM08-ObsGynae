const questions = [
  {
    question: "Note the drug of choice of eclampsia:",
    answers: [
      { text: "MgSo4", correct: true },
      { text: "Phenobarbitone ", correct: false },
      { text: "Methyldopa", correct: false },
      { text: "Clonazepam", correct: false },
      { text: "Nipidipine", correct: false },
    ],
  },
  {
    question: "Which of the following factors does not predispose to the development of gestational hypertension?",
    answers: [
      { text: "Low level of physical activity", correct: true },
      { text: "Multiple pregnancies", correct: false },
      { text: "History of hypertension", correct: false },
      { text: "Maternal age over 35 years", correct: false },
      { text: "all of them", correct: false },
    ],
  },
  {
    question: "A 28-year-old at 39 weeks is in early labor. She is 2 cm dilated and 90% effaced, with contractions every 4 to 5 minutes. The fetal heart tones are reassuring. Her nurse steps out for a moment and returns to find her having a seizure. Suggest the diagnosis?",
    answers: [
      { text: "Eclampsia", correct: true },
      { text: "Epilepsia", correct: false },
      { text: "Infection", correct: false },
      { text: "Hysteria", correct: false },
      { text: "Anemia", correct: false },
    ],
  },
  {
    question: "The most common type of anemia in pregnancy is due to which of the following?",
    answers: [
      { text: "iron deficiency", correct: true },
      { text: "sickle cell disease", correct: false },
      { text: "folate deficiency", correct: false },
      { text: "thalassemia", correct: false },
      { text: "vitamin B12 deficiency", correct: false },
    ],
  },
  {
    question: "A 28-year-old woman, in her third trimester of pregnancy, presents with a blood pressure of 150/95 mmHg. She reports mild headaches and some swelling in her ankles. Urinalysis shows no proteinuria. What is the most appropriate diagnosis for her condition?",
    answers: [
      { text: "Gestational Hypertension", correct: true },
      { text: "Preeclampsia", correct: false },
      { text: "Chronic Hypertension", correct: false },
      { text: "Eclampsia", correct: false },
      { text: "Hellp syndrome", correct: false },
    ],
  },
  {
    question: "A 19-year-old woman without prenatal care (gravida 1, para 0) in the third trimester of pregnancy arrives in the emergency department. She has presented because of headache and visual change. While being examined, she had a convulsion. You should do which of the following while waiting for the magnesium sulfate bolus to arrive from the labor and delivery department?",
    answers: [
      { text: "protect the patient from self-harm", correct: true },
      { text: "prepare to perform an emergency cesarean delivery", correct: false },
      { text: "give intravenous (IV) phenytoin", correct: false },
      { text: "obtain an ultrasound to rule out molar pregnancy", correct: false },
      { text: "prepare for immediate delivery by cesarean section", correct: false },
    ],
  },
  {
    question: "At what blood pressure measurement is hypertension diagnosed in pregnancy?",
    answers: [
      { text: "140/90 mmHg", correct: true },
      { text: "120/80 mmHg", correct: false },
      { text: "160/110 mmHg", correct: false },
      { text: "130/85 mmHg", correct: false },
      { text: "120/80 mmHg", correct: false },
    ],
  },
  {
    question: "An asymptomatic pregnant woman consults you because she has been sexually active with a partner who has been diagnosed with gonorrhea. What should be your next step?",
    answers: [
      { text: "treat her with ceftriaxone 250-mg intramuscular (IM)", correct: true },
      { text: "culture her endocervix and treat on the basis of a positive culture", correct: false },
      { text: "treat when she is past 12 weeks (the first trimester) pregnant", correct: false },
      { text: "reassure her and await symptoms", correct: false },
      { text: "give intravenous (IV) phenytoin", correct: false },
    ],
  },
  {
    question: "Which of the following is a risk factor for developing gestational hypertension or preeclampsia?",
    answers: [
      { text: "All of the above", correct: true },
      { text: "Low body mass index (BMI)", correct: false },
      { text: "Advanced maternal age", correct: false },
      { text: "Previous preeclampsia", correct: false },
      { text: "Previous eclampsia", correct: false },
    ],
  },
  {
    question: "What is the most effective way to prevent the progression of preeclampsia?",
    answers: [
      { text: "Low-dose aspirin therapy", correct: true },
      { text: "Regular exercise", correct: false },
      { text: "Early delivery of the baby", correct: false },
      { text: "Increased salt intake", correct: false },
      { text: "all of them", correct: false },
    ],
  },
  {
    question: "A miscarriage is the pregnancy loss before:",
    answers: [
      { text: "22 weeks", correct: true },
      { text: "12 weeks", correct: false },
      { text: "28 weeks", correct: false },
      { text: "8 weeks", correct: false },
      { text: "21 weeks", correct: false },
    ],
  },
  {
    question: "What is a major risk factor associated with the termination of pregnancy?",
    answers: [
      { text: "Advanced maternal age", correct: true },
      { text: "Regular exercise", correct: false },
      { text: "Low body mass index (BMI)", correct: false },
      { text: "Healthy diet", correct: false },
      { text: "Smoking", correct: false },
    ],
  },
  {
    question: "Suggest which of the following factors tends to increase the average duration of labor?",
    answers: [
      { text: "occiput posterior (OP) position of the baby", correct: true },
      { text: "increasing age of the mother", correct: false },
      { text: "decreasing size of the baby", correct: false },
      { text: "increasing parity", correct: false },
      { text: "occiput anterior (OA) position of the baby", correct: false },
    ],
  },
  {
    question: "What is the most common cause of early miscarriage (first trimester)?",
    answers: [
      { text: "Genetic abnormalities", correct: true },
      { text: "Maternal age", correct: false },
      { text: "Hormonal imbalances", correct: false },
      { text: "Environmental factors", correct: false },
      { text: "Stress condition", correct: false },
    ],
  },
  {
    question: "Which of the following methods is considered the most common for medical termination of pregnancy in the first trimester?",
    answers: [
      { text: "Mifepristone followed by Misoprostol", correct: true },
      { text: "Dilation and curettage (D&C)", correct: false },
      { text: "Vacuum aspiration", correct: false },
      { text: "Hysterectomy", correct: false },
      { text: "all of them", correct: false },
    ],
  },
  {
    question: "A 28-year-old presents in labor at 41 weeks. You examine her and feel the nose and mouth of the fetus. She is 5 cm, 100% effaced, 0 station, external heart tones are 140 bit per min. What should you do?",
    answers: [
      { text: "perform a cesarean delivery", correct: true },
      { text: "perform a cesarean delivery", correct: false },
      { text: "give an epidural and very gently manually rotate the baby to vertex", correct: false },
      { text: "give low-dose oxytocin until the head rotates to vertex", correct: false },
      { text: "use vacuum extraction", correct: false },
    ],
  },
  {
    question: "What is the most common cause of abnormal labor?",
    answers: [
      { text: "Fetal position abnormalities", correct: true },
      { text: "Maternal obesity", correct: false },
      { text: "Advanced maternal age", correct: false },
      { text: "Multiple gestations", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "A 30-year-old woman presents to the emergency department at 10 weeks of gestation with heavy vaginal bleeding and cramping. An ultrasound confirms a missed miscarriage. Which of the following management options is considered appropriate for this patient?",
    answers: [
      { text: "Observation and contol amount of bleeding.", correct: true },
      { text: "Immediate dilation and curettage (D&C)", correct: false },
      { text: "Administration of methotrexate", correct: false },
      { text: "Expectant management with no intervention", correct: false },
      { text: "Start blood tranfussion", correct: false },
    ],
  },
  {
    question: "A 17-year-old woman with no prenatal care at 29 weeks’ gestation presents with painful contractions and pressure. Her cervix is 3 cm, 60% effaced, and breech at –2 station. There is no evidence of ruptured membranes. Her contractions are every 3 minutes. FHT are 150 with accelerations. Maternal vital signs are temperature 36.8 degrees, pulse 96, BP 110/72. What should you do?",
    answers: [
      { text: "begin tocolytic agents", correct: true },
      { text: "perform amniocentesis to rule out chorioamnionitis", correct: false },
      { text: "do a fetal fibronectin", correct: false },
      { text: "observe to look for cervical change", correct: false },
      { text: "perform a cesarean delivery", correct: false },
    ],
  },
  {
    question: "Which of the following factors is NOT typically associated with an increased risk of miscarriage?",
    answers: [
      { text: "Regular exercise", correct: true },
      { text: "Previous history of miscarriage", correct: false },
      { text: "Maternal age over 35", correct: false },
      { text: "Smoking", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "What is the mean doubling time for β-hCG during early pregnancy?",
    answers: [
      { text: "48 h", correct: true },
      { text: "24 h", correct: false },
      { text: "12 h", correct: false },
      { text: "72 h", correct: false },
      { text: "2 h", correct: false },
    ],
  },
  {
    question: "Which symptom is most commonly associated with ovarian torsion?",
    answers: [
      { text: "Unilateral pelvic pain", correct: true },
      { text: "Nausea and vomiting", correct: false },
      { text: "Fever", correct: false },
      { text: "Dysuria", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "Which of the following is the most common cause of acute abdomen in women of reproductive age?",
    answers: [
      { text: "Ectopic pregnancy", correct: true },
      { text: "Ovarian torsion", correct: false },
      { text: "Appendicitis", correct: false },
      { text: "Pelvic inflammatory disease", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "A 28-year-old has a quantitative hCG of 2,850. She has spotting and abdominal pain. An ultrasound shows fluid in the cal de sac and no intrauterine pregnancy. What is the most likely site of an ectopic pregnancy?",
    answers: [
      { text: "ampulla of the fallopian tube", correct: true },
      { text: "ovarian surface", correct: false },
      { text: "mesosalpinx", correct: false },
      { text: "external fallopian tube", correct: false },
      { text: "uterine cavity", correct: false },
    ],
  },
  {
    question: "A 28-year-old woman presents with sudden onset of lower abdominal pain and vaginal bleeding. On examination, there is unilateral adnexal tenderness. Which diagnostic test is most appropriate to confirm the suspected diagnosis?",
    answers: [
      { text: "Transvaginal ultrasound", correct: true },
      { text: "MRI of the abdomen", correct: false },
      { text: "CT scan of the abdomen", correct: false },
      { text: "Hysteroscopy", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "In a case of acute abdomen with suspected pelvic inflammatory disease, what is the most appropriate initial imaging study?",
    answers: [
      { text: "Ultrasound", correct: true },
      { text: "MRI", correct: false },
      { text: "CT scan", correct: false },
      { text: "X-ray", correct: false },
      { text: "Blood test", correct: false },
    ],
  },
  {
    question: "A 19-year-old woman at 7 weeks’ gestation by last menstrual period (LMP) complains of vaginal spotting. She denies the passage of tissue per vagina, any trauma, or recent intercourse. Her past medical history is significant for a pelvic infection approximately 3 years ago. She had used an oral contraceptive agent 1 year previously. Her appetite is normal. On examination, her blood pressure (BP) is 100/60 mm Hg, heart rate (HR) is 90 beats per minute (bpm), and temperature is afebrile. The abdomen is nontender with normoactive bowel sounds. On pelvic examination, the external genitalia are normal. The cervix is closed and nontender. The uterus is 4 weeks’ size, and no adnexal tenderness is noted. The quantitative beta-human chorionic gonadotropin (P -hCG) is 2300 mlU/mL (Third International Standard). A transvaginal sonogram reveals an empty uterus and no adnexal masses. What is your next step",
    answers: [
      { text: "perform a laparoscopy", correct: true },
      { text: "transfuse as needed until viability of fetus is assured", correct: false },
      { text: "estrogen injections and bed rest", correct: false },
      { text: "chemotherapy with methotrexate", correct: false },
      { text: "hysterectomy", correct: false },
    ],
  },
  {
    question: "What is a potential complication of untreated acute appendicitis in a pregnant patient?",
    answers: [
      { text: "All of the above", correct: true },
      { text: "Preterm labor", correct: false },
      { text: "Fetal distress", correct: false },
      { text: "Placental abruption", correct: false },
      { text: "Sepsis", correct: false },
    ],
  },
  {
    question: "A 23-year-old G2P1 woman at 16 weeks’ gestation with an 8-cm ovarian cyst complains of a 12-hour history of colicky, right lower abdominal pain, and nausea with vomiting. The abdomen is tender in the right lower quadrant region with significant involuntary guarding. Most likely diagnosis is torsion of the ovary. What is your treatment for this condition?",
    answers: [
      { text: "laparotomy due to the pregnancy", correct: true },
      { text: "observation at hospital", correct: false },
      { text: "house surveillance", correct: false },
      { text: "medical termination of pregnancy", correct: false },
      { text: "chemotherapy with methotrexate", correct: false },
    ],
  },
  {
    question: "A patient presents with acute abdominal pain and a history of irregular menstrual cycles. Which of the following is the most likely underlying condition?",
    answers: [
      { text: "Endometriosis", correct: true },
      { text: "Ovarian cysts", correct: false },
      { text: "Fibroids", correct: false },
      { text: "Pelvic inflammatory disease", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "Name the safest, most precise, and simplest method of placental localization? ",
    answers: [
      { text: " ultrasonography", correct: true },
      { text: "auscultation", correct: false },
      { text: "radioisotope study", correct: false },
      { text: "soft tissue X-ray ", correct: false },
      { text: "palpation", correct: false },
    ],
  },
  {
    question: "At what gestational age is placenta previa most commonly diagnosed?",
    answers: [
      { text: "20 weeks", correct: true },
      { text: "12 weeks", correct: false },
      { text: "28 weeks", correct: false },
      { text: "36 weeks", correct: false },
      { text: "40 weeks", correct: false },
    ],
  },
  {
    question: "What is the most common cause of first-trimester bleeding in pregnancy?",
    answers: [
      { text: "Miscarriage", correct: true },
      { text: "Ectopic pregnancy", correct: false },
      { text: "Placenta previa", correct: false },
      { text: "Molar pregnancy", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "A woman develops bleeding at 5-cm dilation with fetal distress. You perform a cesarean birth and find a couvelaire uterus. Which of the following causes a couvelaire uterus?",
    answers: [
      { text: "intramyometrial bleeding", correct: true },
      { text: "uterine, retroflexion, and adherence to the cul-de-sac peritoneum of the uterine serosa", correct: false },
      { text: "a congenital anomalous development of the uterus", correct: false },
      { text: "enlargement and invasion by placental tissue into the uterus", correct: false },
      { text: "Intrauterine infection", correct: false },
    ],
  },
  {
    question: "Which of the following is a potential complication of placenta previa?",
    answers: [
      { text: "All of the above", correct: true },
      { text: "Placental abruption", correct: false },
      { text: "Hemorrhage", correct: false },
      { text: "Preterm labor", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "A patient presents with bright red vaginal bleeding at 28 weeks of gestation, and a transabdominal ultrasound reveals the placenta is covering the cervical os. What is the most appropriate management for this condition?",
    answers: [
      { text: "Outpatient management with pelvic rest", correct: true },
      { text: "Bed rest and follow-up ultrasound", correct: false },
      { text: "Administer steroids for fetal lung maturity", correct: false },
      { text: "Immediate delivery", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "What is the primary concern with abruptio placentae?",
    answers: [
      { text: "Fetal hypoxia", correct: true },
      { text: "Maternal dehydration", correct: false },
      { text: "Maternal anemia", correct: false },
      { text: "Placental insufficiency", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "A 30-year-old woman (gravida 4, para 2, abortus 1) has been seen in the emergency department at 29 weeks’ gestation because of the sudden onset of painless vaginal bleeding that soaked four perineal pads and now continue. The mother’s vital signs and Hg are normal, and the FHTs are regular at 140 bpm. At this time, what should you do?",
    answers: [
      { text: "perform a cesarean section", correct: true },
      { text: "order an ultrasound examination", correct: false },
      { text: "perform a double setup examination", correct: false },
      { text: "send the patient home on bed rest", correct: false },
      { text: "hysterectomy", correct: false },
    ],
  },
  {
    question: "In cases of suspected ectopic pregnancy, which diagnostic test is most definitive?",
    answers: [
      { text: "Transvaginal ultrasound", correct: true },
      { text: "Serum hCG levels", correct: false },
      { text: "Pelvic exam", correct: false },
      { text: "MRI", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "A 28-year-old pregnant woman at 20 weeks of gestation presents to the emergency department with vaginal bleeding and mild abdominal cramping. On examination, her vital signs are stable, and the fetal heart rate is normal. Which of the following is the most likely cause of her bleeding?",
    answers: [
      { text: "Subchorionic hemorrhage", correct: true },
      { text: "Abruptio placentae", correct: false },
      { text: "Cervical insufficiency", correct: false },
      { text: "Placenta previa", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "A 18 year-old pregnant woman, who now is at approximately 38 weeks’ gestation was admitted to the maternity hospital by ambulance. She complains of severe pain in abdomen, scanty bleeding from the vagina, and weakness during last hour. What treatment you should recommend?",
    answers: [
      { text: "perform a cesarean section", correct: true },
      { text: "ultrasound for placental localization ", correct: false },
      { text: "continued hospital monitoring", correct: false },
      { text: "very gentle vaginal examination of the fornices with care not to go through the os", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "What is the immediate management step for a patient with significant antepartum hemorrhage?",
    answers: [
      { text: "Stabilize the patient and initiate IV fluids", correct: true },
      { text: "Perform an emergency cesarean section", correct: false },
      { text: "Administer antibiotics", correct: false },
      { text: "Schedule for an outpatient follow-up", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "Name the most common situation to have the complication of a contracted pelvis?",
    answers: [
      { text: "short maternal stature", correct: true },
      { text: "pendulous abdomen in a primigravida", correct: false },
      { text: "morbidly obese multigravida", correct: false },
      { text: "long-standing maternal drug use", correct: false },
      { text: "normal labor", correct: false },
    ],
  },
  {
    question: "Which type of pelvic contraction is characterized by a reduction in the pelvic inlet dimensions?",
    answers: [
      { text: "Android pelvis", correct: true },
      { text: "Gynecoid pelvis", correct: false },
      { text: "Platypelloid pelvis", correct: false },
      { text: "Anthropoid pelvis", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "What is the most common type of contracted pelvis?",
    answers: [
      { text: "Android", correct: true },
      { text: "Gynecoid", correct: false },
      { text: "Anthropoid", correct: false },
      { text: "Platypelloid", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "What situation is the most appropriate to use a vacuum extractor?",
    answers: [
      { text: "cervix is full opened with fetal intolerance of labor ", correct: true },
      { text: "fetal coagulopathies", correct: false },
      { text: "cervix is 9 cm dilation with fetal intolerance of labor", correct: false },
      { text: "nonvertex presentation", correct: false },
      { text: "face presentation", correct: false },
    ],
  },
  {
    question: "Which measurement is most critical in assessing pelvic contraction?",
    answers: [
      { text: "Pelvic inlet diameter", correct: true },
      { text: "Pelvic outlet diameter", correct: false },
      { text: "Interspinous distance", correct: false },
      { text: "Sacral promontory height", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "Application of forceps is appropriate in which of the following situations?",
    answers: [
      { text: "vertex at +3 station, cervix +9 cm dilated, membranes ruptured ", correct: true },
      { text: "vertex at +1 station, cervix completely dilated, membranes intact", correct: false },
      { text: "breech at +3 station, cervix completely dilated, membranes ruptured", correct: false },
      { text: "transverse lie, +3 station, cervix completely dilated, membranes ruptured.", correct: false },
      { text: "oblique lie", correct: false },
    ],
  },
  {
    question: "What is a primary concern in delivering a baby through a contracted pelvis?",
    answers: [
      { text: "All of the above", correct: true },
      { text: "Fetal distress", correct: false },
      { text: "Prolonged labor", correct: false },
      { text: "Increased maternal blood loss", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "In cases of contracted pelvis, which of the following delivery methods may be indicated?",
    answers: [
      { text: "All of the above", correct: true },
      { text: "Vacuum extraction", correct: false },
      { text: "Cesarean section", correct: false },
      { text: "Forceps delivery", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 34-year-old multipara is examined in the latent phase of labor. The cervix is 3 cm dilated, 80% effaced and the presenting part is at station – 2. Eight hours later, the cervix is found to be fully dilated with the fetal head at station – 2 in an occiput transverse position. The fetal heart rate pattern is normal. What should you do?",
    answers: [
      { text: "Offer a caesarean section", correct: true },
      { text: "The labor is normal and the patient should be observed", correct: false },
      { text: "Offer a vacuum extraction", correct: false },
      { text: "Epidural anesthesia should be withheld", correct: false },
      { text: "Forceps", correct: false },
    ],
  },
  {
    question: "What imaging technique is often used to assess pelvic dimensions in pregnant women?",
    answers: [
      { text: "Ultrasound", correct: true },
      { text: "MRI", correct: false },
      { text: "CT scan", correct: false },
      { text: "X-ray", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "Which clinical finding is a potential indicator of a contracted pelvis during a physical examination?",
    answers: [
      { text: "Abnormal fetal position", correct: true },
      { text: "Reduced fundal height", correct: false },
      { text: "Increased fetal heart rate", correct: false },
      { text: "All of the above", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "What is the role of the McRoberts maneuver in cases of obstructed labor due to a contracted pelvis?",
    answers: [
      { text: "To relieve shoulder dystocia", correct: true },
      { text: "To reposition the fetus", correct: false },
      { text: "To facilitate vaginal delivery", correct: false },
      { text: "To assess pelvic dimensions", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "A multipara in the gestational age of 40 weeks in the delivery room. Second stage of her labor lasts more than 2 hours. Amniotic sac membranes rupture 3 hours ago. The cervix is fully dilated and the presenting part is at station – 1. FHTs are 140 and regular. What treatment you should recommend?",
    answers: [
      { text: "caesarean section", correct: true },
      { text: "vacuum extraction", correct: false },
      { text: "oxytocin augmentation", correct: false },
      { text: "expectant menagement", correct: false },
      { text: "Forceps", correct: false },
    ],
  },
  {
    question: "A patient with a known contracted pelvis is in the second stage of labor. What finding during a vaginal exam would most likely indicate the need for operative intervention?",
    answers: [
      { text: "Lack of descent after two hours of pushing", correct: true },
      { text: "Severe perineal pain", correct: false },
      { text: "Caput succedaneum on the fetus", correct: false },
      { text: "Fully effaced cervix", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "What is a key characteristic of a transverse lie?",
    answers: [
      { text: "The fetus is positioned sideways across the uterus.", correct: true },
      { text: "The fetus is positioned head down in the uterus.", correct: false },
      { text: "The fetus is in a breech position.", correct: false },
      { text: "The fetus is in a vertical position.", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "Which of the following is the most common type of malpresentation during labor? ",
    answers: [
      { text: "Breech presentation", correct: true },
      { text: "Transverse lie", correct: false },
      { text: "Occipito-posterior position", correct: false },
      { text: "Face presentation", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "In the occipito-posterior position, which way is the baby’s face directed?",
    answers: [
      { text: "Towards the mother’s back", correct: true },
      { text: "Towards the mother’s abdomen", correct: false },
      { text: "Towards the right side of the mother", correct: false },
      { text: "Towards the left side of the mother", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "Transverse lie in a multipara at term in labor is best treated by which of the following?",
    answers: [
      { text: "cesarean delivery", correct: true },
      { text: "internal version and extraction", correct: false },
      { text: "oxytocin induction", correct: false },
      { text: "external version", correct: false },
      { text: "Forceps", correct: false },
    ],
  },
  {
    question: "What is the most common type of malpresentation during delivery?",
    answers: [
      { text: "Breech presentation", correct: true },
      { text: "Transverse lie", correct: false },
      { text: "Face presentation", correct: false },
      { text: "Shoulder presentation", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "Which of the following is a risk factor for shoulder dystocia?",
    answers: [
      { text: "All of the above", correct: true },
      { text: "Obesity", correct: false },
      { text: "Previous shoulder dystocia", correct: false },
      { text: "Maternal age over 35", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "A 25-year-old G1 at 37 weeks presents to labor and delivery with gross rupture of membranes. The fluid is noted to be clear and the patient is noted to have regular painful contractions every 2 to 3 minutes lasting for 60 seconds each. The fetal heart rate tracing is reactive. On cervical examination she is noted to be 4 cm dilated, 90% effaced with the presenting part a −3 station. The presenting part is soft and felt to be the fetal buttock. A quick bedside ultrasound reveals a breech presentation with both hips flexed and knees extended. Find out from the description which type of breech presentation is described?",
    answers: [
      { text: "Complete", correct: true },
      { text: "Incomplete, single footling", correct: false },
      { text: "Frank", correct: false },
      { text: "Double footling", correct: false },
      { text: "Shoulder", correct: false },
    ],
  },
  {
    question: "In a transverse lie, how is the fetus positioned in relation to the mother’s body?",
    answers: [
      { text: "Horizontally, across the uterus", correct: true },
      { text: "Longitudinally, feet down", correct: false },
      { text: "Longitudinally, head down", correct: false },
      { text: "Diagonally", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "In the case of shoulder dystocia, which of the following maneuvers is commonly employed to resolve the situation?",
    answers: [
      { text: "McRoberts maneuver", correct: true },
      { text: "Fundal pressure", correct: false },
      { text: "Vacuum extraction", correct: false },
      { text: "Cesarean section", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "A 24-year-old woman (G3P2) is at 40 weeks gestation. The fetus is in the transverse lie presentation. What should you do?",
    answers: [
      { text: "Low transverse cesarean section", correct: true },
      { text: "Midforceps rotation", correct: false },
      { text: "Internal version", correct: false },
      { text: "Classic cesarean section", correct: false },
      { text: "ventouse", correct: false },
    ],
  },
  {
    question: "A 30-year-old pregnant woman at 37 weeks of gestation presents with a fetus in the breech position. Which of the following is the most appropriate management option if she desires a vaginal delivery?",
    answers: [
      { text: "External cephalic version", correct: true },
      { text: "Cesarean section", correct: false },
      { text: "Vaginal delivery", correct: false },
      { text: "Induction of labor", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "Which of the following is considered a malpresentation during labor?",
    answers: [
      { text: "Breech presentation", correct: true },
      { text: "Vertex presentation", correct: false },
      { text: "Occipito-anterior position", correct: false },
      { text: "Transverse lie", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "A patient presents at 39 weeks of gestation with a persistent occipito-posterior (OP) position. Which of the following complications is most commonly associated with OP position during labor?",
    answers: [
      { text: "Prolonged labor", correct: true },
      { text: "Fetal distress", correct: false },
      { text: "Umbilical cord prolapse", correct: false },
      { text: "Shoulder dystocia", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "A 30-year-old multigravida presented with transverse lie with hand prolapse in IInd stage of labour with dead fetus. What should you do?",
    answers: [
      { text: "Classical cesarean section and decapitation ", correct: true },
      { text: "LSCS", correct: false },
      { text: "Craniotomy", correct: false },
      { text: "D. Cleidotomy", correct: false },
      { text: "ventouse", correct: false },
    ],
  },
  {
    question: "Which of the following is a common reason for inducing labor?",
    answers: [
      { text: "All of the above", correct: true },
      { text: "Chorioamnionitis", correct: false },
      { text: "Fetal macrosomia", correct: false },
      { text: "Maternal obesity", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "Specify a contraindication for induction of labor: ",
    answers: [
      { text: "Heart disease", correct: true },
      { text: "Preeclampsia", correct: false },
      { text: "Diabetes", correct: false },
      { text: "Chronic polyhydramnios.", correct: false },
      { text: "anemia", correct: false },
    ],
  },
  {
    question: "Which of the following is a common birth injury associated with shoulder dystocia?",
    answers: [
      { text: "Both A and C", correct: true },
      { text: "Cerebral palsy", correct: false },
      { text: "Brachial plexus injury", correct: false },
      { text: "Fractured clavicle", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "What is the most common maternal injury during delivery?",
    answers: [
      { text: "Perineal tear", correct: true },
      { text: "Uterine rupture", correct: false },
      { text: "Bladder injury", correct: false },
      { text: "Laceration of the cervix", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "In a multipara with three previous vaginal deliveries, the cervix reaches 9 cm after a normal rate of dilation. Two hours later the cervix reaches full dilation and the presenting part is at 0 station. Which of the following is the correct diagnosis?",
    answers: [
      { text: "Prolonged deceleration phase", correct: true },
      { text: "Normal labor", correct: false },
      { text: "Cephalopelvic disproportion", correct: false },
      { text: "Arrest of descent", correct: false },
      { text: "uterine inertia", correct: false },
    ],
  },
  {
    question: "What is the most common reason for inducing labor?",
    answers: [
      { text: "Post-term pregnancy", correct: true },
      { text: "Maternal request", correct: false },
      { text: "Fetal distress", correct: false },
      { text: "Maternal hypertension", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "Which of the following is NOT a common method of inducing labor?",
    answers: [
      { text: "Cesarean section", correct: true },
      { text: "Amniotomy", correct: false },
      { text: "Administration of oxytocin", correct: false },
      { text: "Membrane sweeping", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "A 19-year-old primiparous woman develops postpartum hemorrhage unresponsive to oxytocin and uterine massage. Her infant was 8.5 pounds. She has bled 750 cc. What is the most likely diagnosis?",
    answers: [
      { text: "laceration(s) of cervix or vagina", correct: true },
      { text: "placenta accrete", correct: false },
      { text: "uterine inversion", correct: false },
      { text: "ruptured uterus", correct: false },
      { text: "placenta percrete", correct: false },
    ],
  },
  {
    question: "What is a potential complication of induced labor?",
    answers: [
      { text: "Increased risk of cesarean delivery", correct: true },
      { text: "Decreased fetal heart rate", correct: false },
      { text: "Maternal dehydration", correct: false },
      { text: "Reduced contraction strength", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "Which of the following describes a birth injury?",
    answers: [
      { text: "An injury to the newborn during delivery", correct: true },
      { text: "An injury sustained by the mother during delivery", correct: false },
      { text: "A maternal health issue affecting labor", correct: false },
      { text: "A genetic condition present at birth", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "What is a common birth injury resulting from excessive force during delivery?",
    answers: [
      { text: "Cephalohematoma", correct: true },
      { text: "Spina bifida", correct: false },
      { text: "Cleft palate", correct: false },
      { text: "Down syndrome", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "A 24-year-old woman underwent a normal vaginal delivery of a term infant female. After the delivery, the placenta does not deliver even after 30 minutes. Which of the following would be the next step for this patient?",
    answers: [
      { text: "Attempt a manual extraction of the placenta", correct: true },
      { text: " Wait for an additional 30 minutes", correct: false },
      { text: "Hysterectomy", correct: false },
      { text: "Initiate oxytocin", correct: false },
      { text: "cesarean section", correct: false },
    ],
  },
  {
    question: "Which condition is NOT typically associated with maternal traumatism during labor?",
    answers: [
      { text: "Oligohydramnios", correct: true },
      { text: "Perineal laceration", correct: false },
      { text: "Fetal macrosomia", correct: false },
      { text: "Uterine rupture", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "A 28-year-old woman is in labor but experiences prolonged labor lasting more than 20 hours. Which of the following is the most likely diagnosis?",
    answers: [
      { text: "Labor dystocia", correct: true },
      { text: "Preterm labor", correct: false },
      { text: "Placental abruption", correct: false },
      { text: "Uterine hyperstimulation", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "A physician decides to induce labor in a patient at 41 weeks gestation using oxytocin. Which of the following is a potential risk associated with the use of oxytocin for labor induction?",
    answers: [
      { text: "Fetal heart rate deceleration", correct: true },
      { text: "Uterine atony", correct: false },
      { text: "Hyperglycemia", correct: false },
      { text: "Maternal hypertension", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "Which maternal position is often recommended to reduce the risk of fetal distress during labor?",
    answers: [
      { text: "Lateral (side-lying)", correct: true },
      { text: "Lithotomy", correct: false },
      { text: "Supine", correct: false },
      { text: "Standing", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "A 25-year-old G3P2 at 39 weeks is admitted in labor at 5 cm dilated. The fetal heart rate tracing is reactive. Two hours later, she is reexamined and her cervix is unchanged at 5 cm dilated. An IUPC is placed and the patient is noted to have 280 Montevideo units (MUV) by the IUPC. After an additional 2 hours of labor, the patient is noted to still be 5 cm dilated. The fetal heart rate tracing remains reactive. Which of the following is the best next step in the management of this labor?",
    answers: [
      { text: "Augment labor with oxytocin", correct: true },
      { text: "Continue to wait and observe the patient", correct: false },
      { text: "Perform a cesarean section", correct: false },
      { text: "Attempt delivery via vacuum extraction", correct: false },
      { text: "Attempt delivery via forceps", correct: false },
    ],
  },
  {
    question: "In the case of a shoulder dystocia, which maneuver is commonly employed?",
    answers: [
      { text: "McRoberts maneuver", correct: true },
      { text: "Bimanual compression", correct: false },
      { text: "Fundal pressure", correct: false },
      { text: "External cephalic version", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "What is the most common microorganism in mastitis after delivery?",
    answers: [
      { text: "Staphylococcus aureus", correct: true },
      { text: "aerobic Streptococcus", correct: false },
      { text: "E. coli", correct: false },
      { text: "Neisseria", correct: false },
      { text: "chlamidia", correct: false },
    ],
  },
  {
    question: "Which of the following is NOT a risk factor for developing postpartum septic disease?",
    answers: [
      { text: "Normal vaginal delivery without complications", correct: true },
      { text: "Retained placental tissue", correct: false },
      { text: "Emergency cesarean section", correct: false },
      { text: "Prolonged labor", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "What is the most common cause of postpartum infection?",
    answers: [
      { text: "Endometritis", correct: true },
      { text: "Urinary tract infection", correct: false },
      { text: "Wound infection", correct: false },
      { text: "Mastitis", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "A previously energetic woman complains of crying, loss of appetite, difficulty in sleeping, and feeling of low self-worth, beginning approximately 3 days after a normal vaginal delivery. These feelings persisted for approximately 1 week and then progressively diminished. Which of the following is the best term to describe her symptoms postpartum?",
    answers: [
      { text: "blues", correct: true },
      { text: "manic depression", correct: false },
      { text: " neurosis", correct: false },
      { text: "psychosis", correct: false },
      { text: "insult", correct: false },
    ],
  },
  {
    question: "Which of the following is a risk factor for developing postpartum septic disease?",
    answers: [
      { text: "Cesarean delivery", correct: true },
      { text: "Use of epidural anesthesia", correct: false },
      { text: "Vaginal delivery with no complications", correct: false },
      { text: "Pre-existing diabetes", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "The late phase of septic shock is characterized by:",
    answers: [
      { text: "Decreased body temperature, diminished mental status, hypotension", correct: true },
      { text: "Clammy skin, fever, and diminished mental status", correct: false },
      { text: "Warm skin, fever, and diaphoresis", correct: false },
      { text: "Warm skin, diaphoresis, and hypotension", correct: false },
      { text: "manic depression", correct: false },
    ],
  },
  {
    question: "What is the primary risk factor for developing postpartum septic disease?",
    answers: [
      { text: "Prolonged labor", correct: true },
      { text: "Advanced maternal age", correct: false },
      { text: "Vaginal delivery", correct: false },
      { text: "Use of analgesics", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "Which of the following clinical manifestations is most commonly associated with postpartum endometritis?",
    answers: [
      { text: "All of the above", correct: true },
      { text: "Abdominal pain and tenderness", correct: false },
      { text: "Foul-smelling lochia", correct: false },
      { text: "Fever and chills", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "A 30-year-old woman is brought into the emergency department with fever and a blood pressure of 70/ 40 mm H g. She is presumed to be in septic shock. Which of the following is a fundamental principle for the treatment?",
    answers: [
      { text: "Intravenous normal saline", correct: true },
      { text: "Plasmapheresis", correct: false },
      { text: "Oral fluid resuscitation", correct: false },
      { text: "Await blood culture results prior to initiation of antibiotic therapy", correct: false },
      { text: "hysterectomy", correct: false },
    ],
  },
  {
    question: "In postpartum septic disease, what is the recommended initial management?",
    answers: [
      { text: "Broad-spectrum intravenous antibiotics", correct: true },
      { text: "Immediate surgery", correct: false },
      { text: "Blood transfusion", correct: false },
      { text: "Antipyretics only", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "A 28-year-old woman who delivered her baby via cesarean section presents to the emergency department on the third day postpartum with fever, chills, and abdominal pain. Examination reveals a tender uterus and foul-smelling lochia. Which of the following is the most likely diagnosis?",
    answers: [
      { text: "Endometritis", correct: true },
      { text: "Thrombophlebitis", correct: false },
      { text: "Wound infection", correct: false },
      { text: "Urinary tract infection", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "A 25-year-old woman develops a high fever, chills, and severe abdominal pain three days after a cesarean delivery. Laboratory tests show leukocytosis, and an ultrasound reveals fluid accumulation in the uterus. What is the most appropriate initial management step for this patient?",
    answers: [
      { text: "Administration of intravenous antibiotics", correct: true },
      { text: "Immediate hysterectomy", correct: false },
      { text: "Observation and follow-up", correct: false },
      { text: "Intravenous fluids and analgesia only", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "What is the most common cause of early postpartum hemorrhage?",
    answers: [
      { text: "Uterine atony", correct: true },
      { text: "Retained placenta", correct: false },
      { text: "Lacerations", correct: false },
      { text: "Coagulation disorders", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "A patient develops marked bleeding after delivery of the infant that continues as severe hemorrhage after the spontaneous delivery of the placenta that appears intact on inspection. The bladder is empty. The uterine fundus is firm at the umbilicus. What is the most likely cause of the bleeding?",
    answers: [
      { text: "cervical tear", correct: true },
      { text: "dehiscence of a uterine scar", correct: false },
      { text: "spontaneous rupture of an intact uterus", correct: false },
      { text: "rupture of a classic uterine scar", correct: false },
      { text: "perineal tear", correct: false },
    ],
  },
  {
    question: "Which of the following is a potential complication of retained placenta?",
    answers: [
      { text: "Infection and hemorrhage", correct: true },
      { text: "Uterine rupture", correct: false },
      { text: "Chorioamnionitis", correct: false },
      { text: "Placenta previa", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "Chorioamnionitis is most commonly caused by",
    answers: [
      { text: "Bacterial infections", correct: true },
      { text: "Viral infections", correct: false },
      { text: "Fungal infections", correct: false },
      { text: "Parasitic infections", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "A patient calls your clinic complaining of continued heavy vaginal bleeding. She had an “uncomplicated” vaginal birth 2 weeks ago of her second child. What is the most likely diagnosis from the following differentials?",
    answers: [
      { text: "uterine rupture", correct: true },
      { text: "retained placental fragments", correct: false },
      { text: "uterine atony", correct: false },
      { text: "coagulopathies", correct: false },
      { text: "cervical tear ", correct: false },
    ],
  },
  {
    question: "A 20-year-old woman (gravida 1) has just delivered. After expression of the placenta, a red, raw surface is seen at the vaginal introitus. Simultaneously, the nurse states that the patient is pale and her BP is 70/40 mm Hg. External bleeding has been of normal amount. Emergency treatment would initially consist of which of the following?",
    answers: [
      { text: "immediate examination of the fundus", correct: true },
      { text: "exploratory laparotomy", correct: false },
      { text: "immediate hysterectomy", correct: false },
      { text: "delivery of the infant", correct: false },
      { text: "D&C", correct: false },
    ],
  },
  {
    question: "A diagnosis of chorioamnionitis typically requires evidence of which of the following?",
    answers: [
      { text: "Maternal fever and uterine tenderness", correct: true },
      { text: "Increased fetal heart rate", correct: false },
      { text: "Abnormal fetal movements", correct: false },
      { text: "Presence of meconium", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "A 32-year-old woman who recently gave birth presents to the emergency department with heavy vaginal bleeding. She has a history of chorioamnionitis during labor. Upon examination, the uterus is found to be soft and boggy. What is the most likely cause of her postpartum hemorrhage?",
    answers: [
      { text: "Uterine atony", correct: true },
      { text: "Retained placental tissue", correct: false },
      { text: "Coagulation disorder", correct: false },
      { text: "Lacerations", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "After 45 minutes, the patient has lost 1,400 cc. The uterus is very “boggy” and does not contract well. Pulse is 105 bpm, blood pressure is 95/58, and oxygenation is 98%. Studies show a hemoglobin of 7.2 with a hematocrit of 22%, a platelet count of 95,000. What should be your next step?",
    answers: [
      { text: "transfer 2 units packed cells and 2 units fresh frozen plasma", correct: true },
      { text: "evaluate for HELLP syndrome", correct: false },
      { text: "prepare for laproscopy", correct: false },
      { text: "recheck of the hematocrit", correct: false },
      { text: "hysterectomy", correct: false },
    ],
  },
  {
    question: "A 28-year-old woman delivers a healthy baby but experiences significant vaginal bleeding within the first hour postpartum. She was diagnosed with chorioamnionitis during labor, and a retained placenta is suspected. Which of the following is the most appropriate initial management step for this patient?",
    answers: [
      { text: "Start oxytocin infusion", correct: true },
      { text: "Perform manual removal of the placenta", correct: false },
      { text: "Administer IV fluids and blood transfusion", correct: false },
      { text: "nan", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "Chorioamnionitis can lead to which of the following neonatal complications?",
    answers: [
      { text: "All of the above", correct: true },
      { text: "Neonatal sepsis", correct: false },
      { text: "Hyperbilirubinemia", correct: false },
      { text: "Low birth weight", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "In managing postpartum hemorrhage, what is the significance of checking for lacerations?",
    answers: [
      { text: "It may require surgical repair to control bleeding", correct: true },
      { text: "It indicates the need for more blood products", correct: false },
      { text: "It has no significance", correct: false },
      { text: "It indicates that chorioamnionitis is present", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "What is the recommended timing for administering prophylactic antibiotics in cases of chorioamnionitis?",
    answers: [
      { text: "As soon as diagnosis is made", correct: true },
      { text: "Before delivery only", correct: false },
      { text: "After delivery only", correct: false },
      { text: "Not recommended", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "What is the most common cause of clonic seizures in the initial 24-hour newborn period?",
    answers: [
      { text: "hypoxic-ischemic encephalopathy", correct: true },
      { text: "intracranial hemorrhage", correct: false },
      { text: " infection", correct: false },
      { text: "hypoglycemia", correct: false },
      { text: "insult", correct: false },
    ],
  },
  {
    question: "What is the primary concern in Rh incompatibility during pregnancy?",
    answers: [
      { text: "Fetal anemia", correct: true },
      { text: "Maternal hypertension", correct: false },
      { text: "Gestational diabetes", correct: false },
      { text: "Preterm labor", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "You deliver an infant who has a moderate shoulder dystocia and at 1 minute it does not cry, as well as has flexed extremities, irregular respiration, a bluish color, and a heart rate of 90 bpm. What is the most appropriate Apgar score for this infant?",
    answers: [
      { text: "3", correct: true },
      { text: "1", correct: false },
      { text: "5", correct: false },
      { text: "7", correct: false },
      { text: "9", correct: false },
    ],
  },
  {
    question: "What condition is characterized by a significant difference in the growth of the fetus compared to gestational age?",
    answers: [
      { text: "Intrauterine growth restriction (IUGR)", correct: true },
      { text: "Fetal macrosomia", correct: false },
      { text: "Oligohydramnios", correct: false },
      { text: "Ectopic pregnancy", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "A pregnant woman is found to be Rh-negative and her partner is Rh-positive. What is the primary concern for this pregnancy?",
    answers: [
      { text: "Hemolytic disease of the newborn", correct: true },
      { text: "Fetal growth restriction", correct: false },
      { text: "Maternal hypertension", correct: false },
      { text: "Gestational diabetes", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "A 30-week pregnant woman undergoes an ultrasound, which shows that her fetus has a large abdominal circumference but normal head circumference. What condition might this indicate?",
    answers: [
      { text: "Macrosomia", correct: true },
      { text: "Oligohydramnios", correct: false },
      { text: "Fetal growth restriction", correct: false },
      { text: "Polyhydramnios", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "An Rh-negative pregnant woman at 18 weeks’ gestation was found to have a titer of 1:32 anti-Lewis antibodies and no other evidence of sensitization to red-cell antigens. What should your next step be?",
    answers: [
      { text: "plan to give D-immunoglobulin at 28 weeks’ gestation", correct: true },
      { text: "plan serial amniocentesis, starting at 24–26 weeks", correct: false },
      { text: "plan middle cerebral artery velocity measurements at 24 weeks", correct: false },
      { text: "advise termination of pregnancy", correct: false },
      { text: "infusion therapy", correct: false },
    ],
  },
  {
    question: "A 28-year-old pregnant woman with a history of Rh-negative blood type is in her second trimester. She receives a blood test showing her partner is Rh-positive. What is the most appropriate management step to prevent complications?",
    answers: [
      { text: "Administer Rho(D) immune globulin (Rhogam)", correct: true },
      { text: "Schedule a follow-up ultrasound", correct: false },
      { text: "Perform an amniocentesis", correct: false },
      { text: "Increase prenatal visits", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "What is the most common cause of Pelvic Inflammatory Disease?",
    answers: [
      { text: "Bacterial infections", correct: true },
      { text: "Viral infections", correct: false },
      { text: "Fungal infections", correct: false },
      { text: "Parasitic infections", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "A 44-year-old schoolteacher returns from a vacation in Haiti, where she had unprotected intercourse with a native Haitian approximately 3 weeks previously; she now has a painless vulvar ulcer. What is your diagnosis?",
    answers: [
      { text: "syphilis", correct: true },
      { text: "disseminated gonococcal infection", correct: false },
      { text: "nan", correct: false },
      { text: "scabies", correct: false },
      { text: "salpingitis", correct: false },
    ],
  },
  {
    question: "Which of the following is NOT a typical symptom of Pelvic Inflammatory Disease?",
    answers: [
      { text: "Hair loss", correct: true },
      { text: "Fever", correct: false },
      { text: "Nausea", correct: false },
      { text: "Abdominal pain", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "Which of the following symptoms is most commonly associated with Pelvic Inflammatory Disease?",
    answers: [
      { text: "Fever", correct: true },
      { text: "Chest pain", correct: false },
      { text: "Severe headache", correct: false },
      { text: "Jaundice", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "Which of the following tests is commonly used to diagnose Pelvic Inflammatory Disease?",
    answers: [
      { text: "Ultrasound", correct: true },
      { text: "MRI", correct: false },
      { text: "CT scan", correct: false },
      { text: "Blood test", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "An 18-year-old adolescent female presents to the emergency department with a 36-hour history of abdominal pain and nausea. Her temperature is 100.5°F (38.05°C). Her abdominal examination reveals tenderness in the right lower quadrant with some mild rebound tenderness. Pelvic examina-tion shows some cervical motion tenderness and adnexal tenderness, and also some right-sided abdominal tenderness. The pregnancy test is negative. What should you do to differentiate appendicitis versus PID?",
    answers: [
      { text: "Laparoscopy", correct: true },
      { text: "Sonography of the pelvis and abdomen", correct: false },
      { text: "Serum leukocyte count and cell differential", correct: false },
      { text: "Following serial abdominal examinations", correct: false },
      { text: "D&C", correct: false },
    ],
  },
  {
    question: "What is the primary treatment for Pelvic Inflammatory Disease?",
    answers: [
      { text: "Antibiotics", correct: true },
      { text: "Antivirals", correct: false },
      { text: "Surgery", correct: false },
      { text: "Hormonal therapy", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "A 30-year-old woman presents to the clinic with complaints of pelvic pain, dyspareunia, and a purulent vaginal discharge. She has a history of chlamydia infection and irregular menstrual cycles. On examination, she has tenderness in the lower abdomen and cervix. What is the most likely causative organism in this case?",
    answers: [
      { text: "Chlamydia trachomatis", correct: true },
      { text: "Escherichia coli", correct: false },
      { text: "Mycoplasma hominis", correct: false },
      { text: "Neisseria gonorrhoeae", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "Which of the following symptoms is most commonly associated with menopausal syndrome?",
    answers: [
      { text: "Hot flashes", correct: true },
      { text: "Increased libido", correct: false },
      { text: "Regular menstrual cycles", correct: false },
      { text: "Weight loss", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "Which hormonal change primarily characterizes menopause?",
    answers: [
      { text: "Increased luteinizing hormone (LH) levels", correct: true },
      { text: "Decreased progesterone levels", correct: false },
      { text: "Increased estrogen levels", correct: false },
      { text: "Decreased follicle-stimulating hormone (FSH) levels", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "During the evaluation of infertility in a 25-year-old female, a hysterosalpingogram showed evidence of Asherman syndrome. Which one of the following symptoms would you expect this patient to have?",
    answers: [
      { text: "Amenorrhea", correct: true },
      { text: "Oligomenorrhea", correct: false },
      { text: "Menorrhagia", correct: false },
      { text: "Metrorrhagia", correct: false },
      { text: "menometrorragia", correct: false },
    ],
  },
  {
    question: "What is the average age at which women typically experience menopause?",
    answers: [
      { text: "51 years", correct: true },
      { text: "45 years", correct: false },
      { text: "40 years", correct: false },
      { text: "55 years", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "A 26-year-old comes to your office with a chief complaint of being too hairy. She reports that her menses started at age 13 and have always been very irregular. She has menses every 2 to 6 months. She also complains of acne and is currently seeing a dermatologist for the skin condition. She denies any medical problems. Her only surgery was an appendectomy at age 8. Her height is 5 ft 5 in., her weight is 180 lb, and her blood pressure is 100/60 mm Hg. On physical examination, there is sparse hair around the nipples, chin, and upper lip. No galactorrhea, thyromegaly, or temporal balding is noted. Pelvic examination is normal and there is no evidence of clitoromegaly. Which of the following is the most likely explanation for this patient’s problem?",
    answers: [
      { text: "Polycystic ovarian syndrome", correct: true },
      { text: "Idiopathic hirsutism", correct: false },
      { text: "Late-onset congenital adrenal hyperplasia", correct: false },
      { text: "Sertoli-Leydig cell tumor of the ovary", correct: false },
      { text: "Metrorrhagia", correct: false },
    ],
  },
  {
    question: "Which of the following best describes the term \"perimenopause\"?",
    answers: [
      { text: "The time leading up to menopause", correct: true },
      { text: "The time after menopause", correct: false },
      { text: "A type of hormone therapy", correct: false },
      { text: "A surgical procedure", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "A 48-year-old woman presents with symptoms of hot flashes, night sweats, and irregular menstrual cycles. She is concerned about her fertility as she wishes to conceive in the near future. Which of the following is the most appropriate management option for her?",
    answers: [
      { text: "Refer for assisted reproductive technology (ART)", correct: true },
      { text: "Recommend lifestyle modifications and regular exercise", correct: false },
      { text: "Start combined oral contraceptives", correct: false },
      { text: "Begin hormone replacement therapy (HRT)", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "Which medication is often prescribed to stimulate ovulation in women experiencing infertility?",
    answers: [
      { text: "Clomiphene citrate", correct: true },
      { text: "Metformin", correct: false },
      { text: "Progesterone", correct: false },
      { text: "Estrogen", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "A 34-year-old infertile woman is noted to have evidence of blocked fallopian tubes by hysterosalpingogram. Which of the following is the best next step for this patient?",
    answers: [
      { text: "Laparoscopy", correct: true },
      { text: "Clomiphene citrate therapy", correct: false },
      { text: "FSH therapy", correct: false },
      { text: "Intrauterine insemination", correct: false },
      { text: "hysterectomy", correct: false },
    ],
  },
  {
    question: "How can regular health check-ups benefit women approaching menopause?",
    answers: [
      { text: "They help monitor hormone levels and overall health", correct: true },
      { text: "They can prevent menopause", correct: false },
      { text: "They guarantee fertility preservation", correct: false },
      { text: "They have no significant benefits", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "What is the primary goal of Hormone Replacement Therapy (HRT) in menopausal women?",
    answers: [
      { text: "To alleviate menopausal symptoms", correct: true },
      { text: "To prevent pregnancy", correct: false },
      { text: "To increase bone density", correct: false },
      { text: "To regulate menstrual cycles", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "A 48-year-old healthy postmenopausal woman has a Pap smear performed, which reveals atypical glandular cells. She does not have a history of abnormal Pap smears. Which of the following is the best next step?",
    answers: [
      { text: "Colposcopy, endocervical curettage, endometrial sampling", correct: true },
      { text: "Repeat Pap smear in 3 months", correct: false },
      { text: "Hormone-replacement therapy", correct: false },
      { text: "Vaginal sampling", correct: false },
      { text: "hysterectomy", correct: false },
    ],
  },
  {
    question: "Which of the following is the most common benign tumor of the uterus?",
    answers: [
      { text: "Uterine fibroid (leiomyoma)", correct: true },
      { text: "Endometrial polyp", correct: false },
      { text: "Adenomyosis", correct: false },
      { text: "Endometriosis", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "Which type of ovarian tumor is most commonly associated with malignant potential?",
    answers: [
      { text: "Serous cystadenocarcinoma", correct: true },
      { text: "Mucinous cystadenoma", correct: false },
      { text: "Teratoma (dermoid cyst)", correct: false },
      { text: "Serous cystadenoma", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "Which of the following conditions is characterized by the presence of endometrial tissue outside the uterus?",
    answers: [
      { text: "Endometriosis", correct: true },
      { text: "Uterine fibroids", correct: false },
      { text: "Adenomyosis", correct: false },
      { text: "Uterine prolapse", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "What is the most common type of benign tumor of the ovary?",
    answers: [
      { text: "Dermoid cyst", correct: true },
      { text: "Serous cystadenoma", correct: false },
      { text: "Mucinous cystadenoma", correct: false },
      { text: "Fibroma", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "A 29-year-old woman is noted to have three consecutive first-trimester spon¬taneous abortions. After an evaluation for the recurrent abortions including karyotype of the parents, hysterosalpingogram, vaginal sonogram, and test¬ing for antiphospholipid syndrome, the obstetrician concludes the uterine fibroids are the etiology. Which of the following types of uterine fibroids would most likely lead to recurrent abortion?",
    answers: [
      { text: "nan", correct: true },
      { text: "Intramural", correct: false },
      { text: "Subserosal", correct: false },
      { text: "Pedunculated", correct: false },
      { text: "Intramural-Subserosal", correct: false },
    ],
  },
  {
    question: "A 35-year-old woman presents with heavy menstrual bleeding, pelvic pain, and an enlarged uterus on examination. An ultrasound reveals multiple fibroids. What is the most likely diagnosis?",
    answers: [
      { text: "Uterine fibroids (leiomyomas)", correct: true },
      { text: "Endometriosis", correct: false },
      { text: "Adenomyosis", correct: false },
      { text: "Uterine polyp", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "A 28-year-old woman presents with abdominal discomfort and irregular menstrual cycles. An imaging study reveals a cystic mass in the left ovary measuring 7 cm. The mass is unilateral and shows no solid components. What is the most likely diagnosis?",
    answers: [
      { text: "Functional ovarian cyst", correct: true },
      { text: "Dermoid cyst (teratoma)", correct: false },
      { text: "Ovarian cancer", correct: false },
      { text: "Serous cystadenoma", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "A 25-year-old woman is noted to have a 4-cm simple cyst of the right ovary. She denies any abdominal pain, nausea, or vomiting. Which of the following is the next best step?",
    answers: [
      { text: "Expectant management", correct: true },
      { text: "Laparoscopy", correct: false },
      { text: "Exploratory laparotomy", correct: false },
      { text: "Chemotherapy", correct: false },
      { text: "Oral contraceptive therapy", correct: false },
    ],
  },
  {
    question: "What is the typical management approach for a benign ovarian cyst that is asymptomatic?",
    answers: [
      { text: "Observation and follow-up", correct: true },
      { text: "Immediate surgery", correct: false },
      { text: "Chemotherapy", correct: false },
      { text: "Hormonal therapy", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "A 25-year-old patient with her last menstrual period (LMP) 3 weeks ago is being followed for a 5 cm x 4 cm x 4 cm right ovarian cystic mass. She comes to the emergency department complaining of sudden right-sided low abdominal pain and nausea that has been constant for 2 hours. She had intermittent spasms of pain for a week preceding this episode (when you first felt the cyst). All these pain episodes resolved within minutes. The patient denies fever or recent coitus (none in 6 months). Examination demonstrates a 10 cm x 8 cm x 6 cm right pelvic mass that is very tender. White blood cell (WBC) count is 12,500/mL and temperature is 100.2°F. She has had no prior surgery. The patient undergoes diagnostic laparoscopy, and a black mass is seen replacing the entire right ovary. Which of the following is the most appropriate management of this patient?",
    answers: [
      { text: "removal of the ovary", correct: true },
      { text: "antibiotic therapy", correct: false },
      { text: "Clostridium antitoxin", correct: false },
      { text: "anticoagulation", correct: false },
      { text: "Chemotherapy", correct: false },
    ],
  },
  {
    question: "Snow storm appearance on USG is seen in:",
    answers: [
      { text: "Hydatidiform mole", correct: true },
      { text: "Ectopic pregnancy", correct: false },
      { text: "Anencephaly", correct: false },
      { text: "infection", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: "Which type of gestational trophoblastic disease is characterized by the presence of both fetal and trophoblastic tissue?",
    answers: [
      { text: "Molar pregnancy", correct: true },
      { text: "Choriocarcinoma", correct: false },
      { text: "Placental site trophoblastic tumor", correct: false },
      { text: "Complete hydatidiform mole", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "Which of the following conditions is considered a precancerous disease?",
    answers: [
      { text: "Adenomatous Polyps", correct: true },
      { text: "Celiac Disease", correct: false },
      { text: "Gestational Trophoblastic Disease", correct: false },
      { text: "Systemic Lupus Erythematosus", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "Which of the following is the most common benign neoplasm of the cervix and endocervix?",
    answers: [
      { text: "polyp", correct: true },
      { text: "leiomyoma", correct: false },
      { text: "nabothian cyst", correct: false },
      { text: "endometriosis", correct: false },
      { text: "endometritis", correct: false },
    ],
  },
  {
    question: "Which of the following statements about gestational trophoblastic disease (GTD) is true?",
    answers: [
      { text: "GTD can include conditions like hydatidiform mole and choriocarcinoma", correct: true },
      { text: "GTD is always benign and does not pose a risk of cancer", correct: false },
      { text: "GTD only occurs during pregnancy and has no relation to cancer risk", correct: false },
      { text: "GTD is a form of breast cancer", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "Which of the following best describes the relationship between precancerous conditions and cancer?",
    answers: [
      { text: "Some precancerous conditions have a higher risk of developing into cancer, but not all do", correct: true },
      { text: "All precancerous conditions will definitely lead to cancer", correct: false },
      { text: "Precancerous conditions are synonymous with cancer", correct: false },
      { text: "Precancerous conditions can only be found in the digestive system", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "A 35-year-old woman comes to the clinic for a routine check-up. She has a history of abnormal Pap smears and has been treated for cervical dysplasia in the past. She is sexually active and has multiple partners.What is the most likely precancerous condition she is at risk for developing?",
    answers: [
      { text: "Cervical intraepithelial neoplasia (CIN)", correct: true },
      { text: "Endometrial hyperplasia", correct: false },
      { text: "Paget's disease of the nipple", correct: false },
      { text: "Hepatic adenoma", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "An obese 63-year-old woman presents with a 3-month history of continuous scanty vaginal bleeding. She denies the use of hormone replacement therapy. Adequate history and physical examination in the office reveal no other abnormalities. A Pap smear is negative. Which of the following is the next most appropriate step in her management?",
    answers: [
      { text: "sample the endometrium", correct: true },
      { text: "begin estrogen replacement therapy", correct: false },
      { text: "perform colposcopic evaluation of the cervix", correct: false },
      { text: "obtain random biopsies of the cervix", correct: false },
      { text: "Hysterectomy", correct: false },
    ],
  },
  {
    question: "A 28-year-old woman presents with irregular vaginal bleeding and elevated levels of beta-hCG following a recent miscarriage. An ultrasound reveals a mass in the uterus. What is the most likely diagnosis?",
    answers: [
      { text: "Molar pregnancy", correct: true },
      { text: "Ectopic pregnancy", correct: false },
      { text: "Choriocarcinoma", correct: false },
      { text: "Placental abruption", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "Which screening method is often used to detect precancerous lesions in the cervix?",
    answers: [
      { text: "Pap smear", correct: true },
      { text: "Ultrasound", correct: false },
      { text: "CT scan", correct: false },
      { text: "Blood test", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "Which type of gestational trophoblastic disease is characterized by the presence of both hydatidiform mole and malignant choriocarcinoma?",
    answers: [
      { text: "Choriocarcinoma", correct: true },
      { text: "Complete mole", correct: false },
      { text: "Invasive mole", correct: false },
      { text: "Partial mole", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "A 52-year-old woman, who has hypertension and diabetes, is diagnosed with endometrial cancer. Her diseases are well controlled. Her physician has diagnosed the condition as tentatively stage I disease (confined to the uterus). Which of the following is the most important therapeutic measure in the treatment of this patient?",
    answers: [
      { text: "Surgical therapy", correct: true },
      { text: "Chemotherapy", correct: false },
      { text: "Progestin therapy", correct: false },
      { text: "Radiation therapy", correct: false },
      { text: "sample the endometrium", correct: false },
    ],
  },
  {
    question: "Which of the following is a common symptom of premenstrual syndrome (PMS)?",
    answers: [
      { text: "Abdominal pain", correct: true },
      { text: "Increased energy levels", correct: false },
      { text: "Decreased appetite", correct: false },
      { text: "Enhanced concentration", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "What is defined as delayed puberty in girls?",
    answers: [
      { text: "Both A and B", correct: true },
      { text: "Menarche occurring after age 16", correct: false },
      { text: "No breast development by age 13", correct: false },
      { text: "Menarche before age 10", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "A 16-year-old adolescent female is brought into the pediatrician’s office due to no breast development. The patient’s mother notes that both of patient’s sisters had onset of breast development at age 10, and also all of her friends have already begun menstruating. Examination reveals Tanner stage I breast and pubic/ axillary hair, and is otherwise unremarkable. Which of the following is the most likely diagnosis?",
    answers: [
      { text: "Delayed puberty", correct: true },
      { text: "Development is within normal limits and should be observed", correct: false },
      { text: "Primary amenorrhea", correct: false },
      { text: "Likely craniopharyngioma", correct: false },
      { text: " growth acceleration", correct: false },
    ],
  },
  {
    question: "What is the most common symptom of premenstrual syndrome (PMS)?",
    answers: [
      { text: "Mood swings", correct: true },
      { text: "Severe headache", correct: false },
      { text: "Menorrhagia", correct: false },
      { text: "Breast cancer", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: " A 9-year-old girl has breast and pubic hair development. Evaluation demonstrates a pubertal response to a GnRH-stimulation test and a prominent increase in luteinizing hormone (LH) pulses during sleep. These findings are characteristic of patients with which of the following?",
    answers: [
      { text: "Constitutional precocious puberty", correct: true },
      { text: "Iatrogenic sexual precocity", correct: false },
      { text: "Granulosa cell tumors", correct: false },
      { text: "Theca cell tumors", correct: false },
      { text: "Likely craniopharyngioma", correct: false },
    ],
  },
  {
    question: "Which of the following is a common cause of delayed puberty in girls?",
    answers: [
      { text: "Hypothyroidism", correct: true },
      { text: "Hyperthyroidism", correct: false },
      { text: "Polycystic ovary syndrome", correct: false },
      { text: "Premature ovarian failure", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "For most girls, the onset of puberty is heralded by which of the following?",
    answers: [
      { text: "growth acceleration", correct: true },
      { text: "thelarche", correct: false },
      { text: "pubarche", correct: false },
      { text: "menarche", correct: false },
      { text: "Delayed puberty", correct: false },
    ],
  },
  {
    question: "What is the most common form of precocious puberty in girls?",
    answers: [
      { text: "Central precocious puberty", correct: true },
      { text: "Peripheral precocious puberty", correct: false },
      { text: "Premature thelarche", correct: false },
      { text: "Congenital adrenal hyperplasia", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "In cases of suspected delayed puberty, which of the following should be the first step in evaluation?",
    answers: [
      { text: "Detailed medical history and physical examination", correct: true },
      { text: "Pelvic ultrasound", correct: false },
      { text: "Hormonal therapy", correct: false },
      { text: "MRI of the brain", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "A 16-year-old girl reports experiencing mood swings, bloating, and breast tenderness in the week before her period. What is the most likely diagnosis?",
    answers: [
      { text: "Premenstrual syndrome (PMS)", correct: true },
      { text: "Polycystic ovary syndrome (PCOS)", correct: false },
      { text: "Endometriosis", correct: false },
      { text: "Ovarian cysts", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "Which of the following is the most appropriate first-line treatment for central precocious puberty in girls?",
    answers: [
      { text: "GnRH agonists", correct: true },
      { text: "Observation only", correct: false },
      { text: "Estrogen therapy", correct: false },
      { text: "Progesterone therapy", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "An 8-year-old girl is brought to your office soon after suffering a fall on her brother’s bicycle. Her mother reports that the girl’s foot slipped off the bicycle pedal, which resulted in the girl falling on the center bar of the bicycle. The girl complains of sharp pain between her legs. There has been no obvious bleeding and no other injuries are apparent. The girl is in moderate distress with a pulse of 110 bpm, blood pressure of 118/68 mm Hg, and respirations of 28/min. Physical examination is normal with the exception of inspection of the vulva where a 6-cm tender bluish mass is present in the area of the right labia majora. No further examination is possible because of the girl’s discomfort. Which management is most safe and directly related to an uncomplicated outcome? ",
    answers: [
      { text: "topical application of ice", correct: true },
      { text: "use of prophylactic antibiotics", correct: false },
      { text: "bed rest for the next 24 hours", correct: false },
      { text: "examination under anesthesia", correct: false },
      { text: "birth control pills", correct: false },
    ],
  },
  {
    question: "Which of the following is a potential cause of precocious puberty?",
    answers: [
      { text: "Hormonal imbalances", correct: true },
      { text: "Excessive exercise", correct: false },
      { text: "Low body weight", correct: false },
      { text: "Nutritional deficiencies", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "A 6-cm nontender, mobile, right adnexal mass is present in a 17-year-old woman. One year ago, while using OCs, she was hospitalized for left leg deep vein thrombophlebitis. Transvaginal sonography shows a 4-cm unilocular smooth ovarian cyst without internal excrescences. A serum pregnancy test is negative. Which of the following is the most appropriate next step in this patient’s management?",
    answers: [
      { text: "observation", correct: true },
      { text: "OCs", correct: false },
      { text: "estrogen therapy", correct: false },
      { text: "laparoscopy", correct: false },
      { text: "hysterectomy", correct: false },
    ],
  },
  {
    question: "Menorrhagia is:",
    answers: [
      { text: "Cyclic uterine bleeding", correct: true },
      { text: "Acyclic Uterine Bleeding", correct: false },
      { text: "Painful and heavy menstruation", correct: false },
      { text: "Pre and postmenstrual bleeding", correct: false },
      { text: "absense of menses", correct: false },
    ],
  },
  {
    question: "Which of the following is considered a barrier method of contraception?",
    answers: [
      { text: "Male condom", correct: true },
      { text: "Intrauterine device (IUD)", correct: false },
      { text: "Oral contraceptive pills", correct: false },
      { text: "Hormonal implant", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "A 33-year-old patient has been diagnosed as having adenomyosis. Which of the following symptoms is most consistent with this diagnosis?",
    answers: [
      { text: "secondary dysmenorrhea", correct: true },
      { text: "mood swings", correct: false },
      { text: "painful defecation", correct: false },
      { text: "dyspareunia", correct: false },
      { text: "absense of menses", correct: false },
    ],
  },
  {
    question: "What is the most common disorder of the menstrual cycle characterized by irregular or absent periods?",
    answers: [
      { text: "Polycystic Ovary Syndrome (PCOS)", correct: true },
      { text: "Amenorrhea", correct: false },
      { text: "Dysmenorrhea", correct: false },
      { text: "Oligomenorrhea", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "A 19-year-old woman and her boyfriend wish to use condoms as a barrier contraceptive method. This couple should be advised that the most common reason for failure (pregnancy or STD transmission) is which of the following?",
    answers: [
      { text: "inconstant use", correct: true },
      { text: "breakage", correct: false },
      { text: "leakage caused by spermicidal creams", correct: false },
      { text: "use without concomitant use of a spermicide", correct: false },
      { text: "Oral contraceptive therapy", correct: false },
    ],
  },
  {
    question: "In family planning, what does the term 'fertility awareness' refer to?",
    answers: [
      { text: "Tracking ovulation and menstrual cycles", correct: true },
      { text: "Using contraceptives", correct: false },
      { text: "Surgical sterilization", correct: false },
      { text: "Hormonal treatments", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "A 24-year-old G2P2 is requesting contraception 6 weeks postpartum. Her history is unremarkable except for significant primary dysmenorrhea. Which of the following contraceptive methods is most closely associated with an increase in dysmenorrhea?",
    answers: [
      { text: "copper-containing IUCD", correct: true },
      { text: "progestin-only pill (the minipill)", correct: false },
      { text: "cervical cap", correct: false },
      { text: "OCs", correct: false },
      { text: "Male condom", correct: false },
    ],
  },
  {
    question: "Which contraceptive method is based on the interruption of sexual intercourse before ejaculation?",
    answers: [
      { text: "Withdrawal method", correct: true },
      { text: "IUD", correct: false },
      { text: "Birth control pills", correct: false },
      { text: "Diaphragm", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "A family planning counselor is explaining options to a woman who wants to delay pregnancy. She emphasizes the importance of understanding each method. Which principle of family planning is the counselor demonstrating?",
    answers: [
      { text: "Informed choice", correct: true },
      { text: "Access to services", correct: false },
      { text: "Equity", correct: false },
      { text: "Community involvement", correct: false },
      { text: "none of them", correct: false },
    ],
  },
  {
    question: "What method of contraception you will not prescribe for a woman with a history of deep vein thrombosis?",
    answers: [
      { text: "Oral contraceptives", correct: true },
      { text: "IUD", correct: false },
      { text: "Condoms", correct: false },
      { text: "Laparoscopic tubal ligation ", correct: false },
      { text: "cervical cap", correct: false },
    ],
  },
  {
    question: "Note the drug of choice of eclampsia:",
    answers: [
      { text: "MgSo4", correct: true },
      { text: "Phenobarbitone ", correct: false },
      { text: "Methyldopa", correct: false },
      { text: "Clonazepam", correct: false },
      { text: "Nipidipine", correct: false },
    ],
  },
  {
    question: "Which of the following factors does not predispose to the development of gestational hypertension?",
    answers: [
      { text: "Low level of physical activity", correct: true },
      { text: "Multiple pregnancies", correct: false },
      { text: "History of hypertension", correct: false },
      { text: "Maternal age over 35 years", correct: false },
      { text: "all of them", correct: false },
    ],
  },
  {
    question: "A 28-year-old at 39 weeks is in early labor. She is 2 cm dilated and 90% effaced, with contractions every 4 to 5 minutes. The fetal heart tones are reassuring. Her nurse steps out for a moment and returns to find her having a seizure. Suggest the diagnosis?",
    answers: [
      { text: "Eclampsia", correct: true },
      { text: "Epilepsia", correct: false },
      { text: "Infection", correct: false },
      { text: "Hysteria", correct: false },
      { text: "Anemia", correct: false },
    ],
  },
  {
    question: "The most common type of anemia in pregnancy is due to which of the following?",
    answers: [
      { text: "iron deficiency", correct: true },
      { text: "sickle cell disease", correct: false },
      { text: "folate deficiency", correct: false },
      { text: "thalassemia", correct: false },
      { text: "vitamin B12 deficiency", correct: false },
    ],
  },
  {
    question: "A 28-year-old woman, in her third trimester of pregnancy, presents with a blood pressure of 150/95 mmHg. She reports mild headaches and some swelling in her ankles. Urinalysis shows no proteinuria. What is the most appropriate diagnosis for her condition?",
    answers: [
      { text: "Gestational Hypertension", correct: true },
      { text: "Preeclampsia", correct: false },
      { text: "Chronic Hypertension", correct: false },
      { text: "Eclampsia", correct: false },
      { text: "Hellp syndrome", correct: false },
    ],
  },
  {
    question: "A 19-year-old woman without prenatal care (gravida 1, para 0) in the third trimester of pregnancy arrives in the emergency department. She has presented because of headache and visual change. While being examined, she had a convulsion. You should do which of the following while waiting for the magnesium sulfate bolus to arrive from the labor and delivery department?",
    answers: [
      { text: "protect the patient from self-harm", correct: true },
      { text: "prepare to perform an emergency cesarean delivery", correct: false },
      { text: "give intravenous (IV) phenytoin", correct: false },
      { text: "obtain an ultrasound to rule out molar pregnancy", correct: false },
      { text: "prepare for immediate delivery by cesarean section", correct: false },
    ],
  },
  {
    question: "At what blood pressure measurement is hypertension diagnosed in pregnancy?",
    answers: [
      { text: "140/90 mmHg", correct: true },
      { text: "120/80 mmHg", correct: false },
      { text: "160/110 mmHg", correct: false },
      { text: "130/85 mmHg", correct: false },
      { text: "120/80 mmHg", correct: false },
    ],
  },
  {
    question: "An asymptomatic pregnant woman consults you because she has been sexually active with a partner who has been diagnosed with gonorrhea. What should be your next step?",
    answers: [
      { text: "treat her with ceftriaxone 250-mg intramuscular (IM)", correct: true },
      { text: "culture her endocervix and treat on the basis of a positive culture", correct: false },
      { text: "treat when she is past 12 weeks (the first trimester) pregnant", correct: false },
      { text: "reassure her and await symptoms", correct: false },
      { text: "give intravenous (IV) phenytoin", correct: false },
    ],
  },
  {
    question: "Which of the following is a risk factor for developing gestational hypertension or preeclampsia?",
    answers: [
      { text: "All of the above", correct: true },
      { text: "Low body mass index (BMI)", correct: false },
      { text: "Advanced maternal age", correct: false },
      { text: "Previous preeclampsia", correct: false },
      { text: "Previous eclampsia", correct: false },
    ],
  },
  {
    question: "What is the most effective way to prevent the progression of preeclampsia?",
    answers: [
      { text: "Low-dose aspirin therapy", correct: true },
      { text: "Regular exercise", correct: false },
      { text: "Early delivery of the baby", correct: false },
      { text: "Increased salt intake", correct: false },
      { text: "all of them", correct: false },
    ],
  },
  {
    question: "A miscarriage is the pregnancy loss before:",
    answers: [
      { text: "22 weeks", correct: true },
      { text: "12 weeks", correct: false },
      { text: "28 weeks", correct: false },
      { text: "8 weeks", correct: false },
      { text: "21 weeks", correct: false },
    ],
  },
  {
    question: "Which of the following methods is considered the most common for medical termination of pregnancy in the first trimester?",
    answers: [
      { text: "Mifepristone followed by Misoprostol", correct: true },
      { text: "Dilation and curettage (D&C)", correct: false },
      { text: "Vacuum aspiration", correct: false },
      { text: "Hysterectomy", correct: false },
      { text: "all of them", correct: false },
    ],
  },
  {
    question: "A 28-year-old presents in labor at 41 weeks. You examine her and feel the nose and mouth of the fetus. She is 5 cm, 100% effaced, 0 station, external heart tones are 140 bit per min. What should you do?",
    answers: [
      { text: "perform a cesarean delivery", correct: true },
      { text: "perform a cesarean delivery", correct: false },
      { text: "give an epidural and very gently manually rotate the baby to vertex", correct: false },
      { text: "give low-dose oxytocin until the head rotates to vertex", correct: false },
      { text: "use vacuum extraction", correct: false },
    ],
  },
  {
    question: "What is the most common cause of abnormal labor?",
    answers: [
      { text: "Fetal position abnormalities", correct: true },
      { text: "Maternal obesity", correct: false },
      { text: "Advanced maternal age", correct: false },
      { text: "Multiple gestations", correct: false },
      { text: "none of them", correct: false },
    ],
  },
]


const questionElement = document.getElementById('question'); 
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const backButton = document.getElementById('back-btn');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = 'Next';
  backButton.innerHTML = 'Back';
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  const questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

  const shuffledAnswers = [...currentQuestion.answers];
  for (let i = shuffledAnswers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledAnswers[i], shuffledAnswers[j]] = [shuffledAnswers[j], shuffledAnswers[i]];
  }

  shuffledAnswers.forEach((answer) => {
    const button = document.createElement('button');
    button.innerHTML = answer.text;
    button.classList.add('btn');

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener('click', selectAnswer);
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = 'none';
  backButton.style.display = 'none';

  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === 'true';
  if (isCorrect) {
    selectedBtn.classList.add('correct');
    score++;
  } else {
    selectedBtn.classList.add('incorrect');
  }

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === 'true') {
      button.classList.add('correct');
    }
    button.disabled = true;
  });

  nextButton.style.display = 'inline';
  backButton.style.display = 'inline';
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = 'Solve Again';
  nextButton.style.display = 'inline';
  backButton.style.display = 'inline';
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener('click', () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

function handleBackButton() {
  currentQuestionIndex--;
  if (currentQuestionIndex >= 0) {
    showQuestion();
  }
}

backButton.addEventListener('click', () => {
  if (currentQuestionIndex > 0) {
    handleBackButton();
  }
});

searchButton.addEventListener('click', () => {
  const questionNumber = parseInt(searchInput.value, 10);
  if (questionNumber > 0 && questionNumber <= questions.length) {
    currentQuestionIndex = questionNumber - 1;
    showQuestion();
  } else {
    alert('Please enter a valid question number between 1 and ' + questions.length);
  }
});

startQuiz();
