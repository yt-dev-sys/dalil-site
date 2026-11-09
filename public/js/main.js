/* ====== EDIT HERE ======
   downloadUrl : link of the download button. Paste the exact pre-release URL if you want,
                 e.g. https://github.com/yt-dev-sys/Dalil-Pub/releases/tag/v1.0.7
   seatsLeft   : seats remaining in the promo. Change this number any time.
   promoTotal  : total promo seats.
   videoId     : YouTube video id (the part after youtu.be/). */
var CONFIG={
  downloadUrl:"https://github.com/yt-dev-sys/Dalil-Pub/releases/tag/beta",
  dl64:"https://github.com/yt-dev-sys/Dalil-Pub/releases/download/beta/Dalil-Beta-64bit.exe",
  dl32:"https://github.com/yt-dev-sys/Dalil-Pub/releases/download/beta/Dalil-Beta-32bit.exe",
  promoTotal:50,
  seatsLeft:50,
  videoId:"apQj7ovwVSE"
};
var T={
ar:{vid_t:"شاهد كيف تثبّت دليل وتستعمله",vid_play:"تشغيل الفيديو",vid_yt:"شاهده على يوتيوب",promo_cta:"كيفاش نولّي مستعمل نشط؟",promo_live:"العرض مفتوح",promo_t:"150 درهمًا في السنة بدل 300 — لأول 50 مستعملًا نشطًا",promo_d:"العرض للمستعملين النشطين فقط: ثبّت دليل، فهرس مجلدًا واحدًا على الأقل، وابحث عن أول كلمة خلال التجربة. التسجيل وحده لا يكفي.",promo_reg:"للتسجيل، تواصل معي:",seats_l:"مقعدًا مؤسسًا متبقيًا",promo_full:"اكتملت المقاعد",q0:"كيفاش نستافد من 150 درهمًا؟",a0:"1) حمّل النسخة التجريبية وثبّتها. 2) اختر مجلدًا وخلّي دليل يفهرسه. 3) ابحث عن أول كلمة. 4) صوّر شاشة النتائج وأرسلها على واتساب مع اسمك ومدينتك ورقم هاتفك. أول 50 محاميًا يكملون هاد الخطوات كيحتفظو بسعر 150 درهمًا في السنة مدى الحياة. التسجيل بوحدو ما كيكفيش.",nav1:"المزايا",nav2:"كيف يعمل",nav3:"أسئلة شائعة",dl:"تحميل",dl2:"حمّل نسخة 64 بت",dl32:"نسخة 32 بت",dlhint:"كل الملفات والتحقق من SHA-256",
badge:"تجربة مجانية 14 يومًا",
h1:"ابحث عن أي كلمة داخل كل ملفاتك.",
lead:"دليل يفهرس ملفات Word وExcel وPDF على حاسوبك، فتكتب الكلمة وتظهر لك كل الملفات التي تحتوي عليها في ثوانٍ، بدون إنترنت. مصمّم للمحامين ومكاتب المحاماة.",
meta:"ويندوز 10/11 · 64 و32 بت · بلا إنترنت · 150 درهمًا لأول 50 مستعملًا نشطًا",
fh:"ما الذي يقدمه دليل",
f1t:"بحث داخل الملفات",f1d:"يقرأ محتوى ملفات Word وExcel وPDF والنصوص وMarkdown، لا أسماء الملفات فقط.",
f2t:"عربية مفهومة",f2d:"يتجاهل التشكيل والتطويل، ويوحّد أشكال الألف والياء والتاء المربوطة والأرقام الهندية.",
f3t:"نتائج فورية",f3d:"فهرس محلي سريع يعرض النتائج أثناء الكتابة، حتى مع آلاف الملفات.",
f4t:"خصوصية كاملة",f4d:"لا حساب ولا سحابة ولا رفع للملفات. كل شيء يبقى على جهازك.",
f5t:"ملفات PDF الممسوحة",f5d:"قراءة ضوئية للنصوص العربية بأفضل جهد، وتتطلب حزمة اللغة العربية في ويندوز. بدونها يُعثر على الملف باسمه.",
f6t:"بثلاث لغات",f6d:"واجهة بالعربية والفرنسية والإنجليزية مع دعم الكتابة من اليمين، وتحديث تلقائي للنسخ.",
hh:"ثلاث خطوات فقط",
s1t:"اختر المجلدات",s1d:"حدد المجلدات التي تريد البحث فيها.",
s2t:"دليل يفهرس",s2d:"تُبنى القاعدة المحلية مرة واحدة، ثم تُحدَّث عند الحاجة.",
s3t:"اكتب كلمة",s3d:"تظهر كل الملفات التي تحتوي عليها، مع المقطع الذي وردت فيه.",
ph:"ملفاتك تبقى عندك.",
pp:"يعمل دليل بدون اتصال. الفهرس قاعدة بيانات على حاسوبك، ولا يُرسل أي ملف أو كلمة بحث إلى أي خادم. مناسب للمحامين وكل من يتعامل مع ملفات حساسة.",
qh:"أسئلة شائعة",
q1:"شحال الثمن؟",a1:"التجربة مجانية 14 يومًا. السعر العادي 300 درهم في السنة، وأول 50 مستعملًا نشطًا عندهم 150 درهمًا في السنة، وهاد السعر كيبقى معاهم مدى الحياة ما دامو كيجددو بلا انقطاع. الدفع بتحويل بنكي، وكتوصلك الرخصة من بعد الأداء.",
q2:"ظهر تحذير من ويندوز عند التثبيت، هل هذا طبيعي؟",a2:"نعم. التطبيق غير موقّع رقميًا بعد، لذلك يعرض SmartScreen تحذيرًا. اضغط «مزيد من المعلومات» ثم «تشغيل على أي حال».",
q3:"هل يقرأ الملفات الممسوحة؟",a3:"بأفضل جهد، وبشرط تثبيت حزمة اللغة العربية في ويندوز. الملفات المحمية بكلمة مرور يُبحث عنها باسمها فقط.",
q4:"هل يعمل على ماك أو الهاتف؟",a4:"لا، دليل لويندوز فقط حاليًا. لا يدعم PowerPoint.",
q5:"هل يُرسل ملفاتي إلى الإنترنت؟",a5:"لا. الفهرس محلي بالكامل، والإنترنت يُستعمل فقط للتحقق من التحديثات.",
q6:"شنو وقع من بعد 14 يوم؟",a6:"كيتوقف البرنامج حتى تجدد الرخصة: 150 درهمًا في السنة إذا كنت من أول 50 مستعملًا نشطًا، أو 300 درهمًا. ملفاتك ما كتتحذفش وما كتتبدلش.",
fin:"ثبّت دليل اليوم",finp:"حمّله، فهرس مجلدًا، وابحث عن أول كلمة. وإذا بغيتي مساعدة، راسلني على واتساب.",
ftc:"تواصل مع المطوّر",rights:"جميع الحقوق محفوظة",made:"صُنع في خريبكة، المغرب"},
fr:{vid_t:"Voyez comment installer et utiliser Dalil",vid_play:"Lire la vidéo",vid_yt:"Regarder sur YouTube",promo_cta:"Comment devenir utilisateur actif ?",promo_live:"Offre ouverte",promo_t:"150 DH/an au lieu de 300 — pour les 50 premiers utilisateurs actifs",promo_d:"Offre réservée aux utilisateurs actifs : installez Dalil, indexez au moins un dossier et lancez une première recherche pendant l’essai. Une simple inscription ne suffit pas.",promo_reg:"Pour vous inscrire, contactez-moi :",seats_l:"places fondateur restantes",promo_full:"Toutes les places sont prises",q0:"Comment obtenir le tarif de 150 DH ?",a0:"1) Installez la bêta. 2) Indexez au moins un dossier. 3) Lancez une première recherche. 4) Envoyez une capture des résultats sur WhatsApp avec votre nom, votre ville et votre téléphone. Les 50 premiers avocats à le faire gardent 150 DH/an à vie. L’inscription seule ne suffit pas.",nav1:"Fonctionnalités",nav2:"Fonctionnement",nav3:"FAQ",dl:"Télécharger",dl2:"Télécharger la version 64 bits",dl32:"Version 32 bits",dlhint:"Tous les fichiers et vérification SHA-256",
badge:"Essai gratuit 14 jours",
h1:"Retrouvez n’importe quel mot dans tous vos fichiers.",
lead:"Dalil indexe vos documents Word, Excel et PDF. Tapez un mot et voyez en quelques secondes tous les fichiers qui le contiennent, sans connexion internet. Conçu pour les avocats et les cabinets.",
meta:"Windows 10/11 · 64 et 32 bits · hors ligne · 150 DH pour les 50 premiers utilisateurs actifs",
fh:"Ce que fait Dalil",
f1t:"Recherche dans le contenu",f1d:"Lit Word, Excel, PDF, texte et Markdown, pas seulement les noms de fichiers.",
f2t:"Un arabe bien compris",f2d:"Ignore voyelles brèves et tatwil, unifie les formes d’alef, de yé, de tā’ marbūta et les chiffres arabo-indiens.",
f3t:"Résultats instantanés",f3d:"Un index local rapide affiche les résultats pendant la frappe, même avec des milliers de fichiers.",
f4t:"Vie privée totale",f4d:"Pas de compte, pas de cloud, aucun envoi de fichier. Tout reste sur votre PC.",
f5t:"PDF numérisés",f5d:"OCR arabe au mieux de ses capacités, avec le pack de langue arabe de Windows. Sans lui, le fichier est trouvé par son nom.",
f6t:"Trois langues",f6d:"Interface en arabe, français et anglais, écriture de droite à gauche, mises à jour automatiques.",
hh:"Trois étapes",
s1t:"Choisissez vos dossiers",s1d:"Indiquez où Dalil doit chercher.",
s2t:"Dalil indexe",s2d:"La base locale est créée une fois, puis mise à jour au besoin.",
s3t:"Tapez un mot",s3d:"Tous les fichiers concernés s’affichent, avec l’extrait où le mot apparaît.",
ph:"Vos fichiers restent chez vous.",
pp:"Dalil fonctionne hors ligne. L’index est une base de données sur votre ordinateur et aucun fichier ni mot recherché n’est envoyé à un serveur. Idéal pour les avocats et les dossiers sensibles.",
qh:"Questions fréquentes",
q1:"Combien ça coûte ?",a1:"L’essai est gratuit 14 jours. Ensuite 300 DH/an, ou 150 DH/an pour les 50 premiers utilisateurs actifs, à vie tant qu’ils renouvellent sans interruption. Paiement par virement bancaire ; la licence est envoyée après réception.",
q2:"Windows affiche un avertissement à l’installation, est-ce normal ?",a2:"Oui. L’application n’est pas encore signée, donc SmartScreen avertit. Cliquez sur « Informations complémentaires » puis « Exécuter quand même ».",
q3:"Lit-il les PDF numérisés ?",a3:"Au mieux, à condition d’installer le pack de langue arabe de Windows. Les fichiers protégés par mot de passe sont trouvés par leur nom seulement.",
q4:"Existe-t-il sur Mac ou mobile ?",a4:"Non, Dalil fonctionne uniquement sous Windows pour l’instant. PowerPoint n’est pas pris en charge.",
q5:"Mes fichiers sont-ils envoyés sur internet ?",a5:"Non. L’index est entièrement local. Internet sert uniquement à vérifier les mises à jour.",
q6:"Que se passe-t-il après les 14 jours ?",a6:"Le logiciel s’arrête jusqu’au renouvellement : 150 DH/an pour les 50 premiers utilisateurs actifs, sinon 300 DH/an. Vos fichiers ne sont ni supprimés ni modifiés.",
fin:"Installez Dalil aujourd’hui",finp:"Téléchargez, indexez un dossier, tapez votre premier mot. Besoin d’aide ? Écrivez-moi sur WhatsApp.",
ftc:"Contacter le développeur",rights:"Tous droits réservés",made:"Fait à Khouribga, Maroc"},
en:{vid_t:"Watch how to install and use Dalil",vid_play:"Play video",vid_yt:"Watch on YouTube",promo_cta:"How do I become an active user?",promo_live:"Offer open",promo_t:"150 MAD a year instead of 300 — for the first 50 active users",promo_d:"Active users only: install Dalil, index at least one folder and run your first search during the trial. Registering alone does not count.",promo_reg:"To register, contact me:",seats_l:"founding seats left",promo_full:"All seats are taken",q0:"How do I get the 150 MAD price?",a0:"1) Install the beta. 2) Index at least one folder. 3) Run your first search. 4) Send a screenshot of the results on WhatsApp with your name, city and phone. The first 50 lawyers to do this keep 150 MAD/year for life. Registering alone does not count.",nav1:"Features",nav2:"How it works",nav3:"FAQ",dl:"Download",dl2:"Download the 64-bit version",dl32:"32-bit version",dlhint:"All files and SHA-256 check",
badge:"14-day free trial",
h1:"Find any word inside all your files.",
lead:"Dalil indexes your Word, Excel and PDF files. Type a word and see every file that contains it in seconds, with no internet connection. Built for lawyers and law firms.",
meta:"Windows 10/11 · 64-bit and 32-bit · offline · 150 MAD for the first 50 active users",
fh:"What Dalil does",
f1t:"Search inside files",f1d:"Reads Word, Excel, PDF, text and Markdown content, not just file names.",
f2t:"Arabic done right",f2d:"Ignores vowel marks and tatweel, and unifies alef, yeh and teh marbuta variants and Arabic-Indic digits.",
f3t:"Instant results",f3d:"A fast local index shows results as you type, even across thousands of files.",
f4t:"Fully private",f4d:"No account, no cloud, no file uploads. Everything stays on your PC.",
f5t:"Scanned PDFs",f5d:"Best-effort Arabic OCR, which needs the Windows Arabic language pack. Without it, files are found by name.",
f6t:"Three languages",f6d:"Arabic, French and English interface with right-to-left support and automatic updates.",
hh:"Three steps",
s1t:"Pick your folders",s1d:"Tell Dalil where to look.",
s2t:"Dalil indexes",s2d:"The local database is built once, then refreshed when needed.",
s3t:"Type a word",s3d:"Every matching file appears, with the passage where the word occurs.",
ph:"Your files stay with you.",
pp:"Dalil works offline. The index is a database on your own computer, and no file or search term is sent to any server. Built for lawyers and anyone handling sensitive documents.",
qh:"Frequently asked questions",
q1:"What does it cost?",a1:"The trial is free for 14 days. Then 300 MAD a year, or 150 MAD a year for the first 50 active users, for life as long as they renew without a break. Payment by bank transfer; the licence file is sent after payment.",
q2:"Windows showed a warning during install. Is that normal?",a2:"Yes. The app is not code-signed yet, so SmartScreen warns you. Click “More info”, then “Run anyway”.",
q3:"Does it read scanned PDFs?",a3:"On a best-effort basis, and only with the Windows Arabic language pack installed. Password-protected files are found by name only.",
q4:"Does it run on Mac or mobile?",a4:"No, Dalil is Windows-only for now. PowerPoint files are not supported.",
q5:"Are my files sent over the internet?",a5:"No. The index is fully local. The internet is used only to check for updates.",
q6:"What happens after 14 days?",a6:"The app stops until you renew: 150 MAD a year for the first 50 active users, otherwise 300 MAD. Your files are never deleted or modified.",
fin:"Install Dalil today",finp:"Download it, index a folder and type your first word. Need help? Message me on WhatsApp.",
ftc:"Contact the Dev",rights:"All rights reserved",made:"Made in Khouribga, Morocco"}
};
function setLang(l){
  var d=T[l];document.documentElement.lang=l;document.documentElement.dir=l==="ar"?"rtl":"ltr";
  document.querySelectorAll("[data-i]").forEach(function(e){var v=d[e.getAttribute("data-i")];if(v!==undefined)e.textContent=v});
  document.title=l==="ar"?"دليل — بحث داخل ملفاتك بالعربية، بدون إنترنت":l==="fr"?"Dalil — Recherche dans vos documents, hors ligne":"Dalil — Search your documents offline";
  document.querySelectorAll(".lang button").forEach(function(b){b.setAttribute("aria-pressed",b.dataset.l===l)});
  try{localStorage.setItem("dalil-lang",l)}catch(e){}
}
document.querySelectorAll(".lang button").forEach(function(b){b.addEventListener("click",function(){setLang(b.dataset.l)})});
var s="ar";try{s=localStorage.getItem("dalil-lang")||"ar"}catch(e){}
setLang(T[s]?s:"ar");

document.querySelectorAll("a[data-dl]").forEach(function(a){a.href=CONFIG.downloadUrl});
(function(){
  var m={dl64:CONFIG.dl64,dl32:CONFIG.dl32,dlall:CONFIG.downloadUrl};
  Object.keys(m).forEach(function(id){var e=document.getElementById(id);if(e&&m[id])e.href=m[id]});
})();
(function(){
  var t=CONFIG.promoTotal,l=Math.max(0,Math.min(t,Number(CONFIG.seatsLeft)||0));
  var n=document.getElementById("left"),g=document.getElementById("grid"),box=document.getElementById("promo");
  document.getElementById("tot").textContent=t;n.textContent=l;
  for(var i=0;i<t;i++){var d=document.createElement("i");if(i<t-l)d.className="taken";else d.style.animationDelay=((i*137)%1400)+"ms";g.appendChild(d)}
  box.classList.toggle("full",l===0);
  if(!("IntersectionObserver" in window)||matchMedia("(prefers-reduced-motion: reduce)").matches)return;
  var io=new IntersectionObserver(function(e){
    if(!e[0].isIntersecting)return;io.disconnect();var s=null;
    function f(ts){s=s||ts;var q=Math.min(1,(ts-s)/1100);n.textContent=Math.round(l*(1-Math.pow(1-q,3)));if(q<1)requestAnimationFrame(f)}
    requestAnimationFrame(f)},{threshold:.4});
  io.observe(box);
})();
(function(){
  var v=document.getElementById("vid"),id=CONFIG.videoId;if(!v||!id)return;
  var base="https://i.ytimg.com/vi/"+id+"/";
  v.style.backgroundImage="url("+base+"mqdefault.jpg)";
  var im=new Image();im.onload=function(){if(im.naturalWidth>300)v.style.backgroundImage="url("+im.src+")"};
  im.src=base+"maxresdefault.jpg";
  document.getElementById("vyt").href="https://youtu.be/"+id;
  v.querySelector(".vplay").addEventListener("click",function(){
    var f=document.createElement("iframe");
    f.src="https://www.youtube-nocookie.com/embed/"+id+"?autoplay=1&rel=0";
    f.title="Dalil";
    f.allow="accelerometer; autoplay; encrypted-media; picture-in-picture; fullscreen";
    f.allowFullscreen=true;
    v.innerHTML="";v.appendChild(f);
  });
})();
