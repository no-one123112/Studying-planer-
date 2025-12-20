console.log("🚀 التطبيق بدأ العمل");

// بيانات كل لغة مع شرح ومثال كود
const conceptsData = {
  javascript:{
    Syntax:[
      {name:"المتغيرات", desc:"تستخدم لتخزين البيانات. مثال:\nlet x = 5; const y = 10;"},
      {name:"الدوال", desc:"تستخدم لتنفيذ كود عند الطلب. مثال:\nfunction greet(){ console.log('Hello'); }"},
      {name:"الشروط", desc:"if, else if, else لتحديد القرارات. مثال:\nif(x>0){console.log('Positive');}"}
    ],
    Loops:[
      {name:"for loop", desc:"حلقة مكررة لعدد محدد. مثال:\nfor(let i=0;i<5;i++){console.log(i);}"},
      {name:"while loop", desc:"حلقة تكرار حسب شرط. مثال:\nwhile(x>0){x--;}"}
    ],
    Arrays:[
      {name:"المصفوفات", desc:"لتخزين عدة قيم. مثال:\nlet arr = [1,2,3]; arr.push(4);"}
    ],
    DOM:[
      {name:"DOM", desc:"التعامل مع عناصر الصفحة. مثال:\ndocument.getElementById('id').innerText = 'Hello';"}
    ]
  },
  python:{
    Syntax:[
      {name:"المتغيرات", desc:"x = 5\ny = 'Hello'"},
      {name:"الدوال", desc:"def greet():\n    print('Hello')"},
      {name:"الشروط", desc:"if x>0:\n    print('Positive')\nelif x==0:\n    print('Zero')\nelse:\n    print('Negative')"}
    ],
    Loops:[
      {name:"for loop", desc:"for i in range(5):\n    print(i)"},
      {name:"while loop", desc:"while x>0:\n    x -=1"}
    ],
    Lists:[
      {name:"القوائم", desc:"لتخزين قيم متعددة. مثال:\nmyList = [1,2,3]\nmyList.append(4)"}
    ]
  },
  cpp:{
    Syntax:[
      {name:"المتغيرات", desc:"int x = 5; float y = 3.14;"},
      {name:"الدوال", desc:"void greet(){ std::cout << 'Hello'; }"},
      {name:"الشروط", desc:"if(x>0){ cout << 'Positive'; } else { cout << 'Non-positive'; }"}
    ],
    Loops:[
      {name:"for loop", desc:"for(int i=0;i<5;i++){ cout << i; }"},
      {name:"while loop", desc:"while(x>0){ x--; }"}
    ],
    Arrays:[
      {name:"المصفوفات", desc:"int arr[3] = {1,2,3}; arr[0]=5;"}
    ]
  },
  java:{
    Syntax:[
      {name:"المتغيرات", desc:"int x = 5; String y = 'Hello';"},
      {name:"الدوال", desc:"void greet(){ System.out.println('Hello'); }"},
      {name:"الشروط", desc:"if(x>0){ System.out.println('Positive'); } else { System.out.println('Non-positive'); }"}
    ],
    Loops:[
      {name:"for loop", desc:"for(int i=0;i<5;i++){ System.out.println(i); }"},
      {name:"while loop", desc:"while(x>0){ x--; }"}
    ],
    Arrays:[
      {name:"المصفوفات", desc:"int[] arr = {1,2,3}; arr[0]=5;"}
    ]
  }
};

let currentLang = "javascript";

// عرض المفاهيم
function showConcepts() {
  const list = document.getElementById("conceptList");
  list.innerHTML = "";
  const sections = conceptsData[currentLang] || {};
  for(let section in sections){
    const liSection = document.createElement("li");
    liSection.innerHTML = `<strong>${section}</strong>`;
    list.appendChild(liSection);
    sections[section].forEach(concept=>{
      const li = document.createElement("li");
      li.innerHTML = `💡 ${concept.name}<br>📝 ${concept.desc}`;
      list.appendChild(li);
    });
  }
}

// تغيير اللغة
function changeLanguage(){
  currentLang = document.getElementById("languageSelect").value;
  console.log("🔄 اللغة:", currentLang);
  showConcepts();
}

// البحث الداخلي
function searchConcepts(){
  const term = document.getElementById("searchInput").value.toLowerCase();
  const list = document.getElementById("conceptList");
  list.innerHTML = "";
  const sections = conceptsData[currentLang] || {};
  for(let sec in sections){
    sections[sec].forEach(concept=>{
      if(concept.name.toLowerCase().includes(term) || concept.desc.toLowerCase().includes(term)){
        const li = document.createElement("li");
        li.innerHTML = `💡 ${concept.name}<br>📝 ${concept.desc}<br><em>${sec}</em>`;
        list.appendChild(li);
      }
    });
  }
}

// عند التحميل
showConcepts();
