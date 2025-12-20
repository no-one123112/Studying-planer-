console.log("🚀 التطبيق بدأ العمل - شرح Loops فقط");

// بيانات Loops لكل لغة
const loopsData = {
  javascript: [
    {
      name: "for loop",
      desc: "حلقة for تُستخدم للتكرار عدد محدد من المرات.\n\nالصياغة:\nfor( البداية; الشرط; التغيير ){ الكود }",
      example: `for(let i = 0; i < 5; i++) {
  console.log("i =", i);
}`
    },
    {
      name: "while loop",
      desc: "حلقة while تستمر طالما الشرط صحيح.\n\nالصياغة:\nwhile( الشرط ){ الكود }",
      example: `let i = 0;
while(i < 5){
  console.log("i =", i);
  i++;
}`
    },
    {
      name: "do-while loop",
      desc: "حلقة do-while تنفذ الكود مرة واحدة على الأقل ثم تتحقق من الشرط.\n\nالصياغة:\ndo{ الكود } while( الشرط );",
      example: `let i = 0;
do {
  console.log("i =", i);
  i++;
} while(i < 5);`
    }
  ],
  python: [
    {
      name: "for loop",
      desc: "حلقة for في بايثون تُستخدم للتكرار عبر قائمة أو نطاق معين.\n\nالصياغة:\nfor المتغير in sequence: الكود",
      example: `for i in range(5):
    print("i =", i)`
    },
    {
      name: "while loop",
      desc: "حلقة while تستمر طالما الشرط صحيح.\n\nالصياغة:\nwhile الشرط: الكود",
      example: `i = 0
while i < 5:
    print("i =", i)
    i += 1`
    }
  ],
  cpp: [
    {
      name: "for loop",
      desc: "حلقة for تُستخدم للتكرار عدد محدد من المرات.\n\nالصياغة:\nfor( البداية; الشرط; التغيير ){ الكود }",
      example: `for(int i=0; i<5; i++){
    std::cout << "i=" << i << std::endl;
}`
    },
    {
      name: "while loop",
      desc: "حلقة while تستمر طالما الشرط صحيح.\n\nالصياغة:\nwhile( الشرط ){ الكود }",
      example: `int i = 0;
while(i < 5){
    std::cout << "i=" << i << std::endl;
    i++;
}`
    },
    {
      name: "do-while loop",
      desc: "حلقة do-while تنفذ الكود مرة واحدة على الأقل.\n\nالصياغة:\ndo{ الكود } while( الشرط );",
      example: `int i = 0;
do{
    std::cout << "i=" << i << std::endl;
    i++;
} while(i < 5);`
    }
  ],
  java: [
    {
      name: "for loop",
      desc: "حلقة for تُستخدم للتكرار عدد محدد من المرات.\n\nالصياغة:\nfor( البداية; الشرط; التغيير ){ الكود }",
      example: `for(int i=0; i<5; i++){
    System.out.println("i=" + i);
}`
    },
    {
      name: "while loop",
      desc: "حلقة while تستمر طالما الشرط صحيح.\n\nالصياغة:\nwhile( الشرط ){ الكود }",
      example: `int i = 0;
while(i < 5){
    System.out.println("i=" + i);
    i++;
}`
    },
    {
      name: "do-while loop",
      desc: "حلقة do-while تنفذ الكود مرة واحدة على الأقل.\n\nالصياغة:\ndo{ الكود } while( الشرط );",
      example: `int i = 0;
do{
    System.out.println("i=" + i);
    i++;
} while(i < 5);`
    }
  ]
};

let currentLang = "javascript";

// عرض Loops
function showLoops() {
  const list = document.getElementById("conceptList");
  list.innerHTML = "";
  const loops = loopsData[currentLang] || [];
  loops.forEach(loop => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${loop.name}</strong><br>📝 ${loop.desc.replace(/\n/g,"<br>")}<br>💻 مثال:<pre>${loop.example}</pre>`;
    list.appendChild(li);
  });
}

// تغيير اللغة
function changeLanguage(){
  currentLang = document.getElementById("languageSelect").value;
  console.log("🔄 اللغة:", currentLang);
  showLoops();
}

// البحث داخل Loops
function searchConcepts(){
  const term = document.getElementById("searchInput").value.toLowerCase();
  const list = document.getElementById("conceptList");
  list.innerHTML = "";
  const loops = loopsData[currentLang] || [];
  loops.forEach(loop=>{
    if(loop.name.toLowerCase().includes(term) || loop.desc.toLowerCase().includes(term)){
      const li = document.createElement("li");
      li.innerHTML = `<strong>${loop.name}</strong><br>📝 ${loop.desc.replace(/\n/g,"<br>")}<br>💻 مثال:<pre>${loop.example}</pre>`;
      list.appendChild(li);
    }
  });
}

// عند التحميل
showLoops();
