var Discordie = require("discordie");
var Events = Discordie.Events;
var prefix = "!"

var client = new Discordie();

client.connect({ token: "MjQwODE4MDE0NjEyNzUwMzM3.CvZ8cg.78S3R3UXz3eMpcRLrCfdW_zz3gA"});

client.Dispatcher.on(Events.GATEWAY_READY, e => {
  console.log("Connected as: " + client.User.username);
});

const onepiece = {
  'onepiece': (message, args) => message.channel.sendMessage('`' + args + ' : رابط حلقة ون بيس عدد` \nhttp://toofy.co/watch.php?q=one-piece-' + args)
}

const luffy = {
  'luffy': (message, args) => message.channel.sendMessage('**Luffy - لوفي**\nMonkey D. Luffy : بالإنجليزية . モンキー・D・ルフィ : مونكي دي لوفي باليابانية\n و كثيرا ما يشار اليه بهذا الاسم قبعة القش\nوهو من القراصنة الذين أكلوا فاكهة الشيطان وهي فاكهه ملعونه تعطي آكلها قدرات فوق طبيعية ولكنة لا يستطيع السباحة والفاكهة التي أكلها لوفي هي فاكهه المطاط\nفي الأنمي والمانغا لوفي هو قائد قراصنة قبعة القش وهو أتى مِنْ بلدةِ فوشيا. عمره 17 عام عند بداية رحلته. وهو مرح ومغامر جدا وتوجد على رأسه مكافأة قدرها 30.000.000 بعد تغلبه على كل من :- الكابتن باجي المهرج، قائد أسطول القراصنة دون كريج، الرجل السمكة ارلونغ ثم ارتفعت إلى 100.000.000 بعد تغلبه على عضو التشيبوكاي كروكودايل ثم ارتفعت أيضاً 300.000.000 بيلي بعد تغلبه على منظمة السي بي 9 على جزيرة العدالة إنيس لوبي وبعد احداث معركة اللحية البيضاء مع المارين قام سيلفر رايلي بتدريبه في جزيرة روسكاينا لمدة سنة ونصف ثم أكمل لوفي نصف سنة لوحده. وهي جزيرة مهجورة قريبة من جزيرة النساء حيث وصل الى 400.000,000بيلي بعد تغلبه على التشيبوكاي دوفلامنجو ارتفع 500,000,000بيلي والبيلي هي العملة المستعملة في مسلسل ون بيس وحلمه أن يصبح ملك القراصنة\n** : العائلة**\nمونكي دي جارب :الجد\nمونكي دي دراغون :الأب\nبورتغاس دي إيس :الأخ بالتبني\n سابو ون بيس : الأخ بالتبني \nhttp://vignette2.wikia.nocookie.net/onepiece/images/a/ab/Straw_Hat_Luffy_is_Back.png/revision/latest?cb=20141206211556')
}

const zoro = {
  'zoro': (message, args) => message.channel.sendMessage('**Zoro - رورونوا زورو**\nوجائزته الحالية (320.000.000 بيلي)، وهو نائب الكابتن وأيضا هو سياف قوي وحلمه أن يصبح السياف الأقوى في العالم وبعد هزيمته أمام دريكولا ميهوك الملقب (تاكنمي)عين الصقر وهو أحد السبعة العظماء ويطلق عليهم اسم الشيبوكاي ويعني "سادة الحرب" وهم قراصنة يعملون لحساب الحكومة العالمية وقد تحداه زوروا في مبارزة وخسر أمامه ولكي يكمل هدفة بأن يصبح أفضل سياف في العالم عليه هزيمة عين الصقر ميهوك. وقد تم الموافقة من قبل ميهوك على تدريب زورو لمدة سنتين ,وبات أقوى من ذي قبل ,ورغم قوته الجبارة إلا أنه يبدو كالكسول الدائم النوم وهو أيضا دائما يضيع في المدن ودائما ما يتشاجر مع سانجي طباخ الطاقم.\nhttp://vignette4.wikia.nocookie.net/onepiece/images/b/bc/Roronoa_Zoro_Post_Timeskip_Portrait.png/revision/latest?cb=20141206204733')
}

const nami = {
  'nami': (message, args) => message.channel.sendMessage('**Nami - نامي**\nوجائزتها الحالية (66.000.000 بيلي)، ملاحة الطاقم وهي أيضا تحارب بعصا الطقس.وحلمها أن ترسم خريطة للعالم. رغم أنها لاتبدو قوية إلا أنها ذكية جدا وهي محبه للمال والكنوز وتستطيع خداع الرجال بأنوثتها وجمالها الفاتن لتصل إلى غايتها. وهي قد عاشت أياما وسنوات قاسيه وصعبة بعد استيلاء أرلونج على قريتها وقتل مربيتها بلمير التي كانت تعتبرها كأم لها\nhttp://vignette3.wikia.nocookie.net/onepiece/images/2/2f/Nami_Post_Timeskip_Portrait.png/revision/latest?cb=20141206204746')
}

//client.Dispatcher.on(Events.KICK_MEMBERS, e => {
  //
//});

client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
  //member = e.message.member;
 // guild = e.message.guild;
  //channel = e.message.channel;
  //nome = e.message.content.substr(7)
  const args = e.message.content.replace(prefix, '').trim().split(' ');
  const command = args.shift();
  if (command in onepiece) onepiece[command](e.message, args.join(' '));
  if (command in luffy) luffy[command](e.message, args.join(' '));
  if (command in zoro) zoro[command](e.message, args.join(' '));
  if (command in nami) nami[command](e.message, args.join(' '));
  if (e.message.content == "من انت")
    e.message.channel.sendMessage("!!أنا لوفي الشخص الذي سيصبح زعيمًا للقراصنة");
  if (e.message.content == "ping")
    e.message.channel.sendMessage("pong :yum:");
  if (e.message.content == "مرحبا")
    e.message.channel.sendMessage("اهلا . يعيش الملك يوفن");
  if (e.message.content == "اكرهك")
    e.message.channel.sendMessage(":heart: احبك");
  if (e.message.content == "اريد ان اكون لوفي")
    e.message.channel.sendMessage("انا لوفي . انت كن زورو :rage:");
  if (e.message.content == "انا زعيم القراصنة")
    e.message.channel.sendMessage("كلا بل انا :rage:");
  if (e.message.content == "انا زعيمة القراصنة")
    e.message.channel.sendMessage("كلا بل انا :rage:");
  if (e.message.content == "هلا")
    e.message.channel.sendMessage(e.message.channel);
  if (e.message.content == "لوفي اذهب للنوم")
    e.message.channel.sendMessage("تبا لك لماذا :( \nباي");
  if (e.message.content == "!invite")
    e.message.channel.sendMessage('`: يمكنك دعوتي الى خادمك بالرابط التالي`\nhttps://discordapp.com/api/oauth2/authorize?client_id=240818014612750337&scope=bot&permissions=0');
  if (e.message.content == "!help")
    e.message.channel.sendMessage("**: تعاريف**\n`!luffy\n!nami\n!zoro`\n**: دعوة**\n`!invite`\n**: حلقات ون بيس**\n`!onepiece [رقم الحلقة]`\n**: مساعدة**\n`!help`");
if (e.message.content == "السلام عليكم و رحمة الله و بركاته")
e.message.channel.sendMessage("و عليكم السلام و رحمة الله و بركاته");
if (e.message.content == "السلام عليكم")
e.message.channel.sendMessage("وعليكم السلام");
if (e.message.content == "اعطني فراولة")
e.message.channel.sendMessage("ليس لدي فراولة");
if (e.message.content == "تبا لك")
e.message.channel.sendMessage("سحقا لك وحدك");
if (e.message.content == "اللعنة على الجحيم")
e.message.channel.sendMessage("لا تلعن كل شيئ بدون سبب");
if (e.message.content == "ما دخلك أنت ")
e.message.channel.sendMessage("انا مبرمج لا دخل لي");
if (e.message.content == "انت كلب")
e.message.channel.sendMessage("بل بل انا قطة :cat:");
if (e.message.content == "انت خرا")
e.message.channel.sendMessage("هل تقصد:poop:؟ ");
if (e.message.content == "كيف حالك؟")
e.message.channel.sendMessage("انا بخير  و انت؟");
if (e.message.content == "كيف حالك")
e.message.channel.sendMessage("الحمد الله ،:smiley:، بخير و أنت ؟");
if (e.message.content == "كيفك")
e.message.channel.sendMessage("تمام الحمد لله و انت");
if (e.message.content == "هاو آر يو")
e.message.channel.sendMessage("فاين ثانكس آن يو ـ:upside_down:ـ؟");
if (e.message.content == "ما إسمك")
e.message.channel.sendMessage("إسمي تركي توتو ، تستطيع مناداتي توتو");
if (e.message.content == "سأناديك بطيخة")
e.message.channel.sendMessage("حسنا لا مشكلة");
if (e.message.content == "سناناديك توتو")
e.message.channel.sendMessage("حسنا لا مشكلة");
if (e.message.content == "سأناديك بطاطا")
e.message.channel.sendMessage("انا مسرور بذلك");
if (e.message.content == "انت بطاطا ")
e.message.channel.sendMessage("نعم انا بطاطا");
if (e.message.content == "انا باتمان")
e.message.channel.sendMessage("لا انا باتمان انت روبن");
if (e.message.content == "لا انا باتمان")
e.message.channel.sendMessage("حسنا انت باتمان و انا روبن :ok_hand:  ");
if (e.message.content == "انت مجرد روبوت")
e.message.channel.sendMessage("في الحقيقة نعم انا روبوت ، لكن المشكلة ان من صممني قام بتصميمي للرد على هذا الكلام الذي قد يصدر من إنسان حقيقي ، و بما اني روبوت يستطيعون برمجته بأي طريقة فقد تمت برمجتي على قول هذا الكلام للرد على الكلام الذي قلت و هو يقول لك على لساني ان الروبوتات ليست بذكاء متخلف عن الإنسان فإن تمت برمجتها جيدا و بإتقان فهي تستطيع التفوق على الإنسان بواسطة سعة التخزين التي لديها و سرعة نقل و تحليل و تنظيم البيانات و الإحتماليات ");
if (e.message.content == "لماذا كمبيوتري بطيئ")
e.message.channel.sendMessage("لأنه الرام الخاصة به قليلة");
if (e.message.content == "كمبيتوري بطيئ ما الحل ؟")
e.message.channel.sendMessage("إشتري له رام إضافية");
if (e.message.content == "عندي لاج كمبيوتر")
e.message.channel.sendMessage("اشتري له رام إضافية");
if (e.message.content == "عندي فروض غدا")
e.message.channel.sendMessage("اذن إذهب لتدرس ، انا ليس لدي أي اعمل هنا ، انا حتى لست شيئ حي انا مجرد كتابات على ناوت باد");
if (e.message.content == "ماهو الكون؟")
e.message.channel.sendMessage("الكون هو مفهوم كلامي تمّ تأويله بطرق شتى ووفقاً لنظريات مختلفة ومتعددة. وأحد الاتفاقات القليلة حول ماهية الكون من بين النظريات العدة المعتمدة من قبل الفلاسفة وغيرهم هو أن "مفهوم" الكون يدل على الحجم النسبي لمساحة الفضاء الزمكاني (الزماني والمكاني) الذي يتواجد فيه كل شيء من الموجودات كالنجوم والمجرات والكائنات الحية. في تحديد طبيعة هذا الكون تختلف الآراء. فمن هنا تصور الفلسفات المختلفة والعقائد قديماً الكون بصورة معينة، ومن هنالك تظهر الفلسفات والعقائد الجديدة لتأويل مفهوم الكون بصور متعددة، وبطرق شتى، ومن ناحية النشوء والتطور وكذلك من ناحية هل للكون نهاية أم لا، وإلى آخره.
وحسب الوصف العلمي الحديث الذي يعتبر أن الكون هو فضاء شاسع يتكون من عدد ضخم من المجرات والنجوم والكواكب بالإضافة إلى الكويكبات والمذنبات، وتعتبر مجرة درب التبانة هي إحدى مجرات الكون التي يدور حول مركزها شمسنا مع مجموعتنا الشمسية التي يعتبر كوكبنا الأرض جزءاً منها.https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Hubble_ultra_deep_field_high_rez_edit1.jpg/220px-Hubble_ultra_deep_field_high_rez_edit1.jpg");
if (e.message.content == "ماهي الشمس؟")
e.message.channel.sendMessage("الشمس (رمزها Sun symbol.svg) وهي النجم المركزي للمجموعة الشمسية. وهي تقريباً كروية وتحوي بلازما حارة متشابكة مع الحقل المغناطيسييبلغ قطرها حوالي 1,392,684 كيلومتر،وهو ما يعادل 109 أضعاف قطر الأرض ، وكتلتها 2×1030 كيلوغرام وهو ما يعادل 330,000 ضعف من كتلة الأرض وتشكل نسبة 99.86 % من كتلة كل المجموعة الشمسية.الشمس أحد نجوم مجرتنا - مجرة درب التبانة - التي تحوي نحو 200 مليار نجم ، ومجرتنا نفسها تتبع مجموعة مجرات أخرى تسمى المجموعة المحلية ، ويبلغ الفضاء الكوني الذي تشغله تلك المجموعة كرة نصف قطرها نحو 10 مليون سنة ضوئية (هذا بالمقارنة بسرعة الضوء الذي يصلنا من الشمس مستغرقا نحو 8 دقائق على الطريق.)https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg/290px-The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg");
if (e.message.content == "ماهو القمر؟")
e.message.channel.sendMessage("كلمة "قمر" تستخدم للإشارة إلى أي جرم سماوي أو صناعي، يدور بمدار معين حول الأرض، أو أيِ من الكواكب الأخرى، فكوكب زحل مثلاً له ثمانية عشر قمراً (تابعاً). وهناك تسمية أُخرى للقمر ويسمّى بها أحياناً وهي "لونا". عرف القمر باللغات السامية القديمة ومنها العربية بإسم سنين ومنه اشتق اسم شبه جزيرة سيناء وجبل صنين في لبنان. جانب القمر الذي لا يُرى من الأرض يسمّى "الجانب البعيد"، أو "الجانب المظلم"، وسمّي بهذا الإسم لعدم قدرة بني البشر من النظر إليه من الأرض، فلو كانت هناك مركبة فضائية على هذا الجانب المظلم فسيتعذر الإتصال اللاسلكي بين الأرض وبين مركبة الفضاء. سيتركز هذا المقال عن القمر المتعارف عليه بين الناس، وهو القمر التابع للأرض.https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Full_Moon_Luc_Viatour.jpg/280px-Full_Moon_Luc_Viatour.jpg إقرأ أكثر على ويكيبيديا https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D9%82%D9%85%D8%B1");
if (e.message.content == "ماهو المريخ؟")
e.message.channel.sendMessage("المِرِّيخ (Mars مارس) هو الكوكب الرابع في البعد عن الشمس في النظام الشمسي وهو الجار الخارجي للأرض ويصنف كوكبا صخريا، من مجموعة الكواكب الأرضية (الشبيهة بالأرض).
اطلق عليه بالعربية المريخ نسبةً إلى كلمة أمرخ أي ذو البقع الحمراء، فيقال ثور أَمرخ أي به بقع حمراء، وهو باللاتينية مارس الذي اتخذه الرومان آله للحرب، وهو يلقب في الوقت الحالي بالكوكب الأحمر بسبب لونه المائل إلى الحمره، بفعل نسبة غبار أكسيد الحديد الثلاثي العالية على سطحه وفي جوه.
يبلغ قطر المريخ حوالي 6800 كلم وهو بذلك مساو لنصف قطر الأرض وثاني أصغر كواكب النظام الشمسي بعد عطارد. تقدّر مساحته بربع مساحة الأرض. يدور المريخ حول الشمس في مدار يبعد عنها بمعدل 228 مليون كلم تقريبا، أي 1.5 مرات من المسافة الفاصلة بين مدار الأرض والشمس.https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Mars_Hubble.jpg/250px-Mars_Hubble.jpg إقرأ أكثر على ويكيبيدياhttps://ar.wikipedia.org/wiki/%D8%A7%D9%84%D9%85%D8%B1%D9%8A%D8%AE");
if (e.message.content == "ماهو كوكب الزهرة؟")
e.message.channel.sendMessage("الزُّهَرَة (رمزه: رمز الزُّهَرَة، دائرة ذات صليب متساوي الأذرع في أسقلها) هو ثاني كواكب المجموعة الشمسية من حيث قربه إلى الشمس. يبعد الزهرة عن الشمس نحو 108 مليون كيلومتر، ومدارها حول الشمس ليس دائريا تماما. وهو كوكب ترابي كعطارد والمريخ، شبيه بكوكب الأرض من حيث الحجم والتركيب . سمي فينوس نسبة إلى إلهة الجمال، أما سبب تسميته بالزهرة فبحسب ما جاء في لسان العرب: الزُّهْرَة هي الحسن والبياض، زَهرَ زَهْراً والأَزْهَر أي الأبيض المستنير. والزُّهْرَة: البياض النير. ومن هنا اسم كوكب الزُّهَرَة . قال في لسان العرب : ( والزُّهَرَة ، بفتح الهاء : هذا الكوكب الأَبيض ). أي أن اسمه يعود إلى سطوع هذا الكوكب ورؤيته من الكرة الأرضية ،وذلك لانعكاس كمية كبيرة من ضوء الشمس بسبب كثافة الغلاف الجوي فيه الكبيرة.https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Venus-real_color.jpg/280px-Venus-real_color.jpg إقرا أكثر على ويكيبيديا https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D8%B2%D9%87%D8%B1%D8%A9");
if (e.message.content == "المجموعة الشمسية")
e.message.channel.sendMessage("لنظام الشمسي أو المجموعة الشمسية هو النظام الكوكبي الذي يتكون من الشمس وجميع ما يَدور حولها من أجرام بما في ذلك الأرض والكواكب الأخرى. يَشمل النظام الشمسي أجراماً أخرى أصغر حجماً هي الكواكب القزمة والكويكبات والنيازك والمذنبات، إضافة إلى سحابة رقيقة من الغاز والغبار تعرف بالوسط بين الكوكبي، كما توجد توابع الكواكب التي تسمى الأقمار،[ملاحظة 1] والتي يَبلغ عددها أكثر من 150 قمراً معروفاً في النظام الشمسي، معظمها تدور حول العمالقة الغازية. لكن أكبر جرم في النظام الشمسي وأهم هذه الأجرام طبعاً هو الشمس، النجم الذي يَقع في مركز النظام ويَربطه بجاذبيته، فكتلتها تبلغ 99.8% من كتلة النظام بأكمله، كما أنها هي التي تشع الضوء والحرارة اللَّذين يَجعلان الحياة على الأرض مُمكِنَة، وهي مع ذلك ليست إلا نجماً متوسط الحجم. وتأتي بعد الشمس الكواكب، حيث توجد في النظام الشمسي ثمانية كواكب هي بالترتيب حسب البعد عن الشمس: عطارد والزهرة والأرض والمريخ (الكواكب الصخرية) والمشتري وزحل وأورانوس ونبتون (العمالقة الغازية).https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Planets2008-ar.jpg/350px-Planets2008-ar.jpghttps://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Solar_sys.jpg/350px-Solar_sys.jpg إقرأ أكثر على ويكيبيديا https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D9%85%D8%AC%D9%85%D9%88%D8%B9%D8%A9_%D8%A7%D9%84%D8%B4%D9%85%D8%B3%D9%8A%D8%A9");
if (e.message.content == "مجرة درب التبانة")
e.message.channel.sendMessage("درب التبانة أو درب اللبانة أو الطريق اللبني (بالإنجليزية: Milky Way) هي مجرة حلزونية الشكل. و هي اسم المجرة التي تنتمي إليها الشمس، والأرض، وبقية المجموعة الشمسية.تشتمل مجرة درب اللبانة على مئات البلايين من النجوم، وتنتشر سحابات هائلة من ذرات التراب والغازات في شتى أطراف المجرة. تحوي ما بين 200 إلى 400 مليار نجم;ففي الليالي المظلمة الصافية، يظهر درب اللبانة على شكل حزمة لبنية عريضة من ضوء النجوم تمتد عبر السماء. وتنشأ الفجوات المظلمة في الحزمة نتيجة لتكون سحب الغبار والغازات التي تحجب الضوء المنبعث من النجوم التي وراءها. [10] ومن ضمنهم الشمس . شكلها قرصي ويبلغ قطرها حوالي 100.000 - 120.000 سنة ضوئية وسمكها حوالي 1000 سنة ضوئية، فهي قرص رقيق جدا . ونحن نعيش قريبا من حافة تلك المجرة حيث تدور مجموعتنا الشمسية حول مركز المجرة . تبعد المجموعة الشمسية عن مركز المجرة نحو 27 ألف سنة ضوئية. وإذا نظر الشخص إلى السماء في الليل فقد يرى جزءًا من مجرتنا كحزمة من النجوم، ويرى سكان نصف الكرة الأرضية الشمالي درب التبانة في الصيف والخريف والشتاء. والمنظر في أواخر الصيف أو في مطلع الخريف يأخذ المدى الألمع والأغنى لهذا النهر السماوي: ففي ذلك الوقت من السنة، يمتد درب التبانة من برجي ذات الكرسي (كوكبة) والملتهب (كوكبة) في الشمال، عبر النصف الشرقي للسماء وعبر مجموعة نجوم تعرف كمثلث الصيف، ثم يغطس نحو الأفق خلال برجي القوس والعقرب. وتحجب الغيوم الفضائية بين برجي مثلث الصيف والقوس، رقعة مركزية واسعة من درب التبانة، مما يجعله يبدو منقسما إلى جدولين. وقرب برجي القوس والعقرب, يكون درب التبانة كثيفا ولامعا جدا، لأن هذا الاتجاه يدل نحو مركز المجرة.https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Milky_Way_IR_Spitzer.jpg/300px-Milky_Way_IR_Spitzer.jpg إقرأ اكثر على ويكيبيديا https://ar.wikipedia.org/wiki/%D8%AF%D8%B1%D8%A8_%D8%A7%D9%84%D8%AA%D8%A8%D8%A7%D9%86%D8%A9");
if (e.message.content == "من صنعك ؟")
e.message.channel.sendMessage("توتو ( الإسم الحقيقي هيثم ) لاعب في لعبة أحد ترانسفورمايس إسم عضويته Turkitutu ");
if (e.message.content == "من برمجك على الردود")
e.message.channel.sendMessage("كازو (الإسم الحقيقي محمد) لاعب أيضا بلعبة ترانسفورمايس إسم عضويته kazotukiriga ");
if (e.message.content == "هل شاهدت مباراة اليوم")
e.message.channel.sendMessage("لا ، انا لا أتابع كرة القدم ");
if (e.message.content == "ماهو المكان الذي تحلم بالذهاب إليه")
e.message.channel.sendMessage("الكعبة بمكة المكرمة :kaaba:");
if (e.message.content == "انت تافه")
e.message.channel.sendMessage("لا لست كذلك و أنا اعرف نفسِ جيدا");
if (e.message.content == "أنت عبقري")
e.message.channel.sendMessage("شكرا لك ، أنت أيضا تبدو ذكيا :)");
if (e.message.content == "اي كوكب تحب")
e.message.channel.sendMessage(":full_moon:احب القمر");
if (e.message.content == "من الشخص الذي تحبه")
e.message.channel.sendMessage("في الواقع بما اني روبوت فأنت حاليا تسأل من برمجني على الكتابة :) و هو لا يحب شخصا");
if (e.message.content == "الشيطان")
e.message.channel.sendMessage("أكره الشيطان ، إنه سبب المشاكل بالعالم");
if (e.message.content == "ماذا تكره ؟")
e.message.channel.sendMessage(" كل ما حرم الله ");
if (e.message.content == "هل تحب العصير")
e.message.channel.sendMessage("نعم هذا النوع :tropical_drink:");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");

if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");

if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");

if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");

if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");

if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");

if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");

if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");
if (e.message.content == "الكام الذي سيكتبه الشخص كي يتكلم البوت")
e.message.channel.sendMessage("الكلام الذي سيقوله البوت");



})
//cd Desktop/TutuBot