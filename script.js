console.log("🚀 التطبيق بدأ العمل");

// محتوى المفاهيم لكل لغة
const conceptsData = {
  javascript:{
    Syntax:[
      {name:"المتغيرات", desc:"var, let, const لتخزين البيانات"},
      {name:"الدوال", desc:"function myFunc() {...}"}
    ],
    Loops:[
      {name:"for loop", desc:"for(let i=0;i<5;i++){}"},
      {name:"while loop", desc:"while(condition){}"}
    ]
  },
  python:{
    Syntax:[
      {name:"المتغيرات", desc:"x = 5"},
      {name:"الدوال", desc:"def my_func():"}
    ],
    Loops:[
      {name:"for loop", desc:"for i in range(5):"},
      {name:"while loop", desc:"while condition:"}
    ]
  },
  cpp:{
    Syntax:[
      {name:"المتغيرات", desc:"int x = 5;"},
      {name:"الدوال", desc:"void myFunc() {}"}
    ],
    Loops:[
      {name:"for loop", desc:"for(int i=0;i<5;i++){}"},
      {name:"while loop", desc:"while(condition){}"}
    ]
  },
  java:{
    Syntax:[
      {name:"المتغيرات", desc:"int x = 5;"},
      {name:"الدوال", desc:"void myFunc() {}"}
    ],
    Loops:[
      {name:"for loop", desc:"for(int i=0;i<5;i++){}"},
      {name:"while loop", desc:"while(condition){}"}
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
