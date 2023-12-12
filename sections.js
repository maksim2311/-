tobiz.sections = [
{
	name:'Шапка и меню',
	icon:'fa fa-graduation-cap',
	icon_new:'menusymbol.svg',
	blocks:[
		{
			id:106,
			default:1,
			title:'100. Шапка с графиком работы, email, телефоном и кнопокой',
			description:'Есть возможность закрепить блок сверху сайта и скрыть кнопку',
			position:1000,
			default_values:{}
		},
		{
			id:107,
			default:1,
			title:'101. Шапка сайта с меню, кнопкой и социальными сетями',
			description:'Есть возможность закрепить блок сверху сайта и скрыть кнопку',
			position:1100,
			default_values:{}
		},
		{
			id:105,
			default:1,
			position:1200,
			title:'102. Шапка сайта с меню, кнопкой и телефоном',
			description:'Можно закрепить блок сверху сайта, скрыть кнопку и включить кнопки соцсетей',
			default_values:{}
		},
		{
			id:103,
			default:1,
			position:1300,
			title:'103. Шапка сайта с описанием, кнопкой и телефоном',
			description:'Есть возможность закрепить блок сверху сайта и скрыть кнопку',
			default_values:{}
		},
		{
			id:116,
			default:1,
			position:2100,
			title:'104. Простое меню сайта по центру',
			description:'Используется для создания многостраничных сайтов',
			default_values:{}
		},
		{
			id:2116,
			default:1,
			position:2110,
			title:'105. Меню сайта по центру',
			description:'Данный блок используют для создания многостраничного сайта. Изменение расположения логотипа',
			default_values:{
				menu_color:'#084673',
				logo_img:'tobiz_logo_def_blue.png'
			}
		},
		{
			id:2116,
			default:1,
			position:2120,
			title:'106. Меню сайта слева',
			description:'Данный блок используют для создания многостраничного сайта. Изменение расположения логотипа',
			default_values:{
				menu_type:'logo_left',
				menu_color:'#fff',
				bg:'#424242',
				logo_img:'tobiz_logo_def_white.png',
				menu1:[
					{title:'Главная',link:'#anchor0'},
					{title:'О компании',link:'#anchor1'},
					{title:'Почему мы',link:'#anchor2'},
					{title:'Отзывы',link:'#anchor4'},
					{title:'Преимущества',link:'#anchor6'},
					{title:'Блог',link:'#anchor7'},
					{title:'Галерея',link:'#anchor8'},
					{title:'Партнерам',link:'#anchor9'},
					{title:'Контакты',link:'#anchor5'}
				]
			}
		},
		{
			id:120,
			default:1,
			position:2150,
			title:'107. Меню сайта',
			description:'Можно настроить социальные сети, включить поиск или кнопку',
			default_values:{}
		},
		{
			id:120,
			default:0,
			position:2155,
			title:'108. Меню сайта',
			description:'Можно настроить социальные сети, включить поиск или кнопку',
			default_values:{
				fixed_top:1,
				show_icons_phone:'show_search'
			}
		},
		{
			id:302,
			default:1,
			position:2200,
			title:'109. Боковое меню сайта',
			description:'Данный блок используется для создания классификатора',
			default_values:{back_dark:1}
		},
		{
			id:302,
			default:0,
			position:2300,
			title:'110. Боковое меню сайта с видео',
			description:'Данный блок используется для создания классификатора',
			default_values:{use_video:1}
		},
		{
			id:120,
			default:0,
			position:2301,
			title:'111. Меню сайта с кнопкой',
			description:'Меню для сайта слева и с кнопкой справа',
			default_values:{
				bg:'#f5f5f5',
				width1170:1,
				show_icons_phone:'show_right_btn',
				hover_menu_border_bottom:1,
				menu_color:'#353535',
				menu_fs:'16px',
				hover_color:'#353535',
				btn1:{
					title:'Обратная связь',
					color:'#353535',
					style:5
				}
			}
		},
		{
			id:105,
			default:1,
			position:2302,
			title:'112. Широкая шапка с лого, меню и кнопкой',
			description:'Можно закрепить блок сверху сайта, скрыть кнопку и включить кнопки соцсетей и флаги стран',
			default_values:{
				width1920:1,
				menu_color:"#565656",
				menu_fs:"17px",
				menu_fweight:"400",
				hide_phone:1,
				padd_top:25,
				padd_bottom:25,
				menu1:[
					{title:"Шаблоны",link:"#"},
					{title:"Примеры",link:"#"},
					{title:"Инструкции",link:"#"},
					{title:"Иконки",link:"#"},
					{title:"Цены",link:"#anchor"},
					{title:"Сообщество",link:"#anchor"}
				],
				btn1:{title:'Перезвоните мне',color:'#f9b642',surround:3,style:5,use_form:1,link:'',fw:400}
			}
		}
	],
	group:[107, 108, 105, 103, 116, 302, 333],
	deleted:[3, 5, 7, 9, 8, 6, 4, 2, 1, 19],
	widget:0
},
{
	name:'Обложка',
	icon:'fa fa-crosshairs',
	icon_new:'cover.svg',
	blocks:[
		{
			id:153,
			default:1,
			position:3100,
			title:'201. Блок с фоновым изображением и кнопкой',
			description:'Возможность вставки фонового видео, изменения размера кнопки, вставка формы вместо кнопки.',
			default_values:{
				no_fontsize:1,
				padd_top:'160',
				padd_bottom:'160',
				show_descr:0,
				back_dark:1,
				bg_opacity:0.35,
				opacity_color1:'#3e4466',
				opacity_color2:'#3e4466',
				big:0,
				dark:0,
				bg_image:'section153_bg_new.jpg',
				title:'<b><span style="font-size:62px">Туристическое снаряжение для активного отдыха</span></b>',
				sub_title:'<p><br></p><p><span style="font-size:24px">Одежда, обувь, палатки, расходники<br>и альпинистское снаряжение</span></p>',
				hover_color:'#f79f00',
				btn1:{
					title:'Посмотреть каталог',
					color:'#f79f00',
					surround:3,
					style:1
				}
			}
		},
		{
			id:153,
			default:0,
			position:3200,
			title:'202. Блок с фоновым видео и кнопкой',
			description:'Возможность вставки фонового видео, изменения размера кнопки, скрыть/вставить форму.',
			default_values:{
				no_fontsize:1,
				padd_top:'170',
				padd_bottom:'190',
				big:0,
				dark:0,
				show_descr:0,
				title:'<p style="text-align:left"><span style="font-size:64px">Откройте для себя чудесный<b> мир зеленых гор</b></span></p>',
				sub_title:'<p style="text-align:left"><br></p><p style="text-align:left"><span style="font-size:22px">Каждый месяц мы организовываем пешие маршруты и туры по живописным местам края. Поднимаемся в горы, исследуем новые места и наслаждаемся красивыми видами.</span></p>',
				video_bg:'https://youtu.be/eDqm77tbs2U',
				use_videobg:'use',
				hover_color:'#448e37',
				btn_align:'left',
				btn1:{
					title:'Узнать расписание',
					color:'#448e37',
					shadow:4,
					surround:3,
					style:17
				}
			}
		},
		{
			id:153,
			default:0,
			position:3400,
			title:'203. Блок с фоновым изображением и формой',
			description:'Возможность вставки фонового видео, скрыть/вставить кнопку.',
			default_values:{
				big:0,
				mode:'2',
				back_dark:1,
				padd_top:'70',
				padd_bottom:'100',
				opacity_color1:'#5a4036',
				opacity_color2:'#5a4036',
				bg_opacity:0.5,
				brd_color:"#5a4036",
				bg_image:'image_8335.jpg',
				title:'<b>Профессиональная перетяжка салона с гарантией качества</b>',
				sub_title:'Более 10 лет занимаемся ремонтом автомобилей, делая их уникальными',
				form2:[
					{type:'hidden',title:'Название формы',description:''},
					{type:'text',title:'Введите имя',description:'',required:1},
					{type:'phone',title:'Введите телефон',description:'',required:1},
					{type:'btn',title:'Рассчитать стоимость',color:'#5a4036',action:'thanks',surround:3,style:17,url:'',amount:0}
				]
			}
		},
		{
			id:154,
			default:1,
			position:3500,
			title:'204. Блок с фоновым изображением и текстом',
			description:'Возможность вставки фонового видео, вставить таймер, изменение местоположения формы.',
			default_values:{
				big:1,
				no_fontsize:1,
				width1170:1,
				dark:0,
				align_center:1,
				all_border:0,
				brd_color:'rgba(0,0,0,0)',
				padd_top:'100',
				padd_bottom:'100',
				back_dark:1,
				opacity_color1:'#b38b7a',
				opacity_color2:'#3a1b10',
				bg_image:'section154_202_bg_new.jpg',
				form_title:'<p style="text-align:left"><span style="font-family:roboto condensed"><span style="color:#3a1b10"><b>Онлайн запись на маникюр</b></span></span></p>',
				form_sub_title:'<p style="text-align:left"><span style="color:#696969">МЫ ПЕРЕЗВОНИМ ДЛЯ УТОЧНЕНИЯ ВРЕМЕНИ</span></p>',
				form_text:'<span style="font-size:16px">Нажимая на кнопку, Вы принимаете <a target="_blank" data-cke-saved-href="/personal-data-1/" href="/personal-data-1/">Положение</a> и <a target="_blank" data-cke-saved-href="/personal-data-2/" href="/personal-data-2/">Согласие</a> на обработку персональных данных.</span>',
				title:'<div><span style="font-size:72px"><span style="font-family:roboto condensed"><b>Маникюр, педикюр, наращивание ногтей</b></span></span></div>',
				sub_title:'<div><span style="font-size:22px"><b>Премиальный</b> салон красоты, доступный каждому.</span></div><div><span style="font-size:22px">Даем <b>гарантию</b> на покрытие до <b>3-х месяцев</b>!</span></div>',
				hover_color:'#c72e13',
				form1:[
					{type:'hidden',title:'Название формы',description:''},
					{type:'text',title:'Введите имя',description:'',required:1},
					{type:'phone',title:'Введите телефон',description:'',required:1},
					{type:'btn',title:'Записаться сейчас!',color:'#c72e13',action:'thanks',surround:3,style:1,url:'',amount:0}
				]
			}
		},
		{
			id:154,
			default:0,
			position:3600,
			title:'205. Блок с фоновым изображением, таймером и текстом',
			description:'Возможность вставки фонового видео, вставить/убрать таймер, изменение местоположения формы.',
			default_values:{
				show_timer:1,
				padd_top:'120',
				padd_bottom:'120',
				bg_image:'section154_bg_new.jpg',
				no_fontsize:1,
				align_center:1,
				width1170:1,
				dark:0,
				form_bg:1,
				form_bg_opacity:0,
				color:'#212121',
				brd_color:'rgba(0,0,0,0)',
				hover_color:'#c6b295',
				form_title:'<p style="text-align:left"><span style="font-family:ubuntu"><b>Заполните форму</b></span></p>',
				form_sub_title:'<p style="text-align:left"><span style="font-family:ubuntu">МЫ СВЯЖЕМСЯ В ТЕЧЕНИЕ 10 МИНУТ</span></p>',
				title:'<span style="font-size:48px"><span style="font-family:ubuntu"><b>Вебинар-практикум по масштабированию бизнеса и увеличению прибыли</b></span></span>',
				sub_title:'<div><div><span style="font-family:ubuntu">За 4 часа практических занятий вы узнаете, как создать цельный и сбалансированный бизнес, работающий вне зависимости от времени года и других факторов.</span></div><div><br></div><div><span style="font-family:ubuntu">Успей зарегистрироваться до конца недели и получи скидку 50% на следующий вебинар!</span></div></div>',
				form1:[
					{type:'hidden',title:'Название формы',description:''},
					{type:'email',title:'Введите email',description:'',required:1},
					{type:'phone',title:'Введите телефон',description:'Наш менеджер Вам перезвонит',required:1},
					{type:'btn',title:'Забронировать место',color:'#c6b295',action:'thanks',surround:3,style:1,url:'',amount:0}
				]
			}
		},
		{
			id:1154,
			default:1,
			position:3605,
			title:'206. Блок с фоновым изображением, текстом и кнопкой',
			description:'Возможность вставки фонового видео.',
			default_values:{
				dark:0,
				width1170:1,
				padd_top:'190',
				padd_bottom:'190',
				title:'<div><span style="font-size:72px"><span style="font-family:ubuntu condensed"><b>Ваш персональный тренер по фитнесу</b></span></span></div>',
				sub_title:'<p><span style="font-family:ubuntu">Добро пожаловать на персональные фитнес тренировки с тренером!</span></p><p><span style="font-family:ubuntu">Тренер обучит всем тонкостям упражнений, составит программу тренировок и питания для Вас! Пробное индивидуальное занятие бесплатно</span></p>',
				bg_image:'section1154_206_bg_new.jpg',
				hover_color:'#ea402f',
				btn1:{
					title:'Записаться на пробное занятие',
					color:'#ca2d2a',
					surround:3,
					style:1
				}
			}
		},
		{
			id:155,
			default:1,
			position:3650,
			title:'207. Блок с фоновым изображением и двумя кнопками',
			description:'Возможность вставки видео на фон, анимация.',
			default_values:{
				dark:0,
				big:0,
				no_fontsize:1,
				bg_image:'section155_207_bg_new.jpg',
				back_dark:1,
				bg_opacity:0.6,
				padd_top:'180',
				padd_bottom:'180',
				opacity_color1:'#212121',
				opacity_color2:'#4d5b58',
				title:'<span style="font-size:68px"><b>Аренда спецтехники от «Альянс Трансфер»</b></span>',
				sub_title:'<p><span style="font-size:24px">В аренду доступны самосвалы, тягачи, бульдозеры, экскаваторы и многое другое. Вас ждут выгодные цены и бонусная программа!</span>',
				hover_color:'#f9b642',
				arr1:[
					{
						btn1:{title:'Получить прайс',color:'#f9b642',surround:3,fsize:3,style:1},
						btn2:{title:'Нужна консультация',color:'#778e95',surround:3,fsize:3,style:1},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'text',title:'Введите имя',description:'',required:1},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#778e95',action:'thanks',surround:3,style:1,url:'',amount:0}
						],
						form2:[
							{type:'hidden',title:'Название второй формы',description:''},
							{type:'text',title:'Введите имя',description:'',required:1},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#778e95',action:'thanks',surround:3,style:1,url:'',amount:0}
						]
					}
				]
			}
		},
		{
			id:159,
			default:1,
			position:3660,
			title:'208. Блок с фоновым изображением и видео',
			description:'Возможность встаки видео на фон, анимация.',
			default_values:{
				no_fontsize:1,
				bg_image:'image_8.jpg',
				back_dark:1,
				bg_opacity:0.7,
				video:'https://www.youtube.com/watch?v=6tyDZHt13AE',
				opacity_color1:'#341b1b',
				opacity_color2:'#000',
				title:'<div class="title"><div><b><span style="font-size:48px"><span style="font-family:montserrat">Юридическая фирма </span></span></b><br><div></div></div><div><span style="font-size:48px">«<span style="color:#fff"><span style="font-family:montserrat">Центр юридической помощи</span></span>»</span></div><div><span style="color:#ff3333"><b><span style="font-size:42px">______</span></b></span></div></div>',
				sub_title:'<p><span style="font-size:17px"><span style="font-family:roboto"><br></span></span></p><p><span style="font-size:24px"><span style="font-family:roboto">Более 40 ведущих юристов Москвы готовы оказать вам консультацию совершенно бесплатно. Надежно и эффективно поможем решить Ваши проблемы. </span></span></p>'
			}
		},
		{
			id:156,
			default:1,
			position:3675,
			title:'209. Блок со слайдером фона и кнопкой',
			description:'Возможность загружать свои изображения и автопрокруткой слайда.',
			default_values:{
				dark:0,
				back_dark:1,
				opacity_color1:'#ad803e',
				opacity_color2:'#101921',
				bg_opacity:0.2,
				no_fontsize:1,
				show_btn_descr:0,
				title:'<span style="font-family:ubuntu"><span style="font-size:72px"><b>Проектирование и строительство коттеджей</b></span></span>',
				sub_title:'<span style="font-family:ubuntu"><span style="font-size:24px">Более 35 лет опыта строительства частных домов и коттеджей по собственным чертежам и дизайн-проектам. Для вас доступны высокое качество и низкие цены.</span></span>',
				hover_color:'#ad803e',
				btn1:{
					title:'Узнать подробнее',
					color:'#ad803e',
					animation:1,
					surround:3, 
					style:1
				},
				arr1:[
					{image1:'section156_209_bg_new_1.jpg'},
					{image1:'section156_209_bg_new_2.jpg'}
				]
			}
		},
		{
			id:157,
			default:1,
			position:3685,
			title:'210. Блок с фоновым изображением, таймером и кнопкой',
			description:'Возможность загружать свои изображения, показать/скрыть таймер, изменение размера кнопки.',
			default_values:{
				mode: 3,
				bg_image:'section157_210_bg_new.jpg',
				use_logo:1,
				logo_use_text:1,
				show_btn_descr:0,
				dark:0,
				back_dark:1,
				opacity_color1:'#6b614c',
				opacity_color2:'#353225',
				padd_top:'110',
				padd_bottom:'110',
				logo_text:'<span style="text-align:center"><span style="font-size:18px"><b><span style="font-family:oswald"><em>АнгарСтройИнвест</em></span></b></span></span>',
				btn_size:'w450h60',
				no_fontsize:1,
				title:'<span style="font-size:72px"><span style="font-family:oswald"><b><span style="color:#fff">Строительство складов и ангаров разной сложности</span></b></span></span>',
				sub_title:'<span style="font-size:22px"><span style="font-family:raleway"> Основой является прочный каркас из стального профиля. Одно из основных преимуществ металлоконструкции – минимальный вес, простота монтажа и экономичность склада, сжатые сроки</span></span>',
				hover_color:'#6d9f30',
				btn1:{
					title:'Получить 10% скидку',
					color:'#6d9f30', 
					surround:1,
					animation:1,
					style:17
				}
			}
		},
		{
			id:258,
			default:1,
			position:3696,
			title:'211. Блок с фоновым изображением, формой и иконками',
			description:'Возможность загружать свои изображения, изменение иконок.',
			default_values:{
				no_fontsize:1,
				bg_image:'image_3128.jpg',
				width1170:1,
				all_border:1,
				icon_colors:'#f76060',
				title:'<p style="text-align:center"><span style="color:#FAEBD7"><span style="font-size:72px"><span style="font-family:montserrat"><b>Автобусные туры по Европе с гидом и группой </b></span></span></span></p><p style="text-align:center"><span style="font-size:40px"><span style="color:#FAEBD7"><span style="font-family:montserrat">Бронируйте по специальной цене от 9 700 </span>₽</span></span></p>',
				sub_title:'<p style="text-align:center"><span style="font-size:20px">Предлагаем вам автобусные туры в Европу - средневековые замки, пряничные городки и готические шпили Праги с легендами Карлова моста. Чехия - невероятно душевная и вкусная страна, со всеми этими кнедлями, знаменитым вепревым коленом по рецептам из старинных монастырей. </span></p>',
				form_title:'<span style="color:#333333"><b><span style="font-size:24px"><span style="font-family:montserrat">Оставьте заявку на подбор</span></span></b></span>',
				form_sub_title:'<span style="font-family:montserrat">Мы ждем вас!</span>',
				arr1:[
					{
						title1:'<b><span style="color:#FAEBD7"><span style="font-family:montserrat"><span style="font-size:28px">Подбор тура по дате</span></span></span></b>',
						mdico1:'svg-icon-plan',
						txt1:'<span style="font-family:montserrat">Бронируйте увлекательное путешествие по спеццене</span>'
					},
					{
						title1:'<span style="color:#FAEBD7"><span style="font-family:montserrat"><span style="font-size:28px"><b>Экономные экскурсионные туры</b></span></span></span>',
						mdico1:'svg-icon-clock',
						txt1:'<span style="font-family:montserrat">Быстрое выполнение заказа после согласования.</span>'
					},
					{
						title1:'<span style="color:#FAEBD7"><span style="font-family:montserrat"><span style="font-size:28px"><b>Автобусы комфорт-класса</b></span></span></span>',
						mdico1:'svg-icon-wallet-1',
						txt1:'<span style="font-family:montserrat">Низкий уровень цен в нашем сегменте.</span>'
					}
				],
				form1:[
					{type:'hidden',title:'Название формы',description:'',required:0},
					{type:'email',title:'Введите email',description:'',required:1},
					{type:'btn',title:'Заказать подбор тура',color:'#f76060',action:'thanks',surround:3,shadow:3,style:1,url:'',amount:0}
				]
			}
		},
		{
			id:258,
			default:0,
			position:3697,
			title:'212. Блок с фоновым изображением, формой и иконками',
			description:'Возможность загружать свои изображения, изменение иконок.',
			default_values:{
				no_fontsize:1,
				title:'<div><br></div><div><br></div><span style="font-size:48px"><span style="color:#FAEBD7"><span style="font-family:montserrat"><b>Скидки до - 80% на 140 моделей мужских костюмов из Италии</b></span></span></span>',
				sub_title:'<span style="font-size:26px">Приходите в наш салон и выбирайте понравившиеся модели со скидкой </span>',
				bg_image:'image_4205.jpg',
				form_del:1,
				icon_colors:'#64d1e3',
				pattern:'pattern_2.png',
				arr1:[
					{
						title1:'<span style="color:#FAEBD7"><span style="font-size:22px">Персональная подгонка по фигуре</span></span>',
						mdico1:'svg-icon-scissors2',
						txt1:'Наши профессиональные портные сделают подгонку за 3 дня'
					},
					{
						title1:'<span style="color:#FAEBD7"><span style="font-size:22px">Широкая линейка размеров</span></span>',
						mdico1:'svg-icon-sketch',
						txt1:'В нашем салоне вы сможете подобрать размер от 40 до 60'
					},
					{
						title1:'<span style="color:#FAEBD7"><span style="font-size:22px">Постоянное обновление ассортимента</span></span>',
						mdico1:'svg-icon-finger',
						txt1:'Каждую неделю мы обновляем наше колллекцию костюмов'
					}
				]
			}
		},
		{
			id:311,
			default:1,
			position:3700,
			title:'213. Блок с фоновым изображением, меню и логотипом',
			description:'Возможность скрыть форму/кнопку, использование/скрытие меню.',
			default_values:{
				no_fontsize:1,
				width1170:1,
				bg_opacity:0.2,
				padd_top:'150',
				padd_bottom:'150',
				dark:0,
				back_dark:1,
				fixed:1,
				opacity_color1:'#6d4b35',
				opacity_color2:'#6d4b35',
				hover_color:'#BB3743',
				bg_image:'section311_213_bg_new.jpg',
				menu1:[
					{title:'О КОМПАНИИ',link:'#anchor1'},
					{title:'НАШИ РАБОТЫ',link:'#anchor2'},
					{title:'ОТЗЫВЫ',link:'#anchor3'},
					{title:'КОНТАКТЫ',link:'#anchor4'}
				],
				btn1:{
					title:'УЗНАТЬ БОЛЬШЕ',
					color:'#FC4A5B',
					shadow:0,
					surround:1,
					style:5
				},
				title:'<span style="font-family:montserrat"><span style="font-size:72px">Организация свадеб от агентства </span><span style="font-size:72px">«</span><span style="font-size:72px">M</span><span style="font-size:72px">arryME»</span></span>',
				sub_title:'<span style="font-family:montserrat"><span style="font-size:22px">Чтобы сохранить чарующую атмосферу любого праздничного мероприятия, доверьте его организацию нам. Наслаждайтесь каждым моментом, а с хлопотами мы прекрасно справимся сами.</span></span>',
				show_btn_descr:0
			}
		},
		{
			id:1258,
			default:1,
			position:3701,
			title:'214. Блок с фоновым изображением, формой и иконками',
			description:'Возможность загружать свои изображения, изменение иконок.',
			default_values:{
				title:'<p><span style="color:#333333"><span style="font-family:montserrat"><b><span style="font-size:54px">Полностью жилой поселок таунхаусов премиум-класса</span></b></span></span></p>',
				sub_title:'<h2 style="text-align:center"><span style="font-size:32px"><span style="font-family:montserrat"><span style="color:#B22222">В 20 КМ ОТ МКАД </span></span></span></h2><h2 style="text-align:center"><br></h2><p style="text-align:center"><span style="color:#000"><span style="font-family:montserrat"><span style="font-size:28px">От Новорижского шоссе поселок отделяют 4 км — слышно только пение птиц, шелест листьев и звук реки</span></span></span></p>',
				icon_width:0,
				bg_image:'image_3138.jpg',
				form_bg_opacity:0.5,
				all_border:0,
				show_form_title:1,
				bg_opacity:0.85,
				opacity_color2:'#f3f0ed',
				form_title:'<p style="text-align:center"><span style="color:#333333"><span style="font-size:20px"><span style="font-family:montserrat"><b>Оставьте заявку</b></span></span></span></p>',
				arr1:[
					{
						title1:'<span style="font-size:18px"><span style="font-family:montserrat"><b>Поселок построен</b></span></span>',
						mdico1:'svg-icon-chool',
						txt1:'<span style="font-size:17px">Квартиры с большими открытыми террасами и панорамными окнами</span>'
					},
					{
						title1:'<span style="font-size:18px"><b><span style="font-family:montserrat">Таунхаусы от 291м<sup>2</sup></span></b></span>',
						mdico1:'svg-icon-blueprint',
						txt1:'<span style="font-size:17px">Квартиры с большими открытыми террасами и панорамными окнами</span>'
					},
					{
						title1:'<span style="font-size:18px"><span style="font-family:montserrat"><b>Свой детский сад</b></span></span>',
						mdico1:'md svg-icon-bc',
						txt1:'<span style="font-size:17px">Развивающий центр и игровые площадки для детей</span>'
					},
					{
						title1:'<b><span style="font-family:montserrat"><span style="font-size:18px">Вид на лес и озеро</span></span></b>',
						mdico1:'svg-icon-camping1',
						txt1:'<span style="font-size:17px">Базовое озеленение участка живой изгородью по периметру</span>'
					}
				],
				form2:[
					{type:'hidden',title:'Название формы',description:''},
					{type:'text',title:'Введите имя',description:'',required:1},
					{type:'email',title:'Введите email',description:'',required:1},
					{type:'btn',title:'Забронировать',color:'#ca2d2a',action:'thanks',surround:3,style:17,shadow:3,url:'',amount:0}
				]
			}
		},
		{
			id:1156,
			default:1,
			position:3702,
			title:'215. Блок со слайдером фона, меню и кнопкой',
			description:'Возможность загружать свои изображения и автопрокруткой слайда.',
			default_values:{
				back_dark:0,
				dark:0,
				btn_show:1,
				btn_size:'w250h45',
				arr1:[
					{
						image1:'section1156_215_bg_1.jpg',
						title:'<p style="text-align:center"><span style="font-family:montserrat"><b>Восхождение на гору Фудзи</b></span></p>',
						sub_title:'<p style="text-align:center"><span style="font-family:montserrat">Всемирно известный символ Японии, почитаемая святыня для каждого японца</span></p>',
						btn1:{title:'Узнать стоимость',color:'#ed7a00',surround:3,style:5},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'text',title:'Введите имя',description:'',required:1},
							{type:'phone',title:'Введите телефон',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#069',action:'thanks',surround:3,style:17,url:'',amount:0}
						]
					},
					{
						image1:'section1156_215_bg_2.jpg',
						title:'<p style="text-align:center"><span style="font-family:montserrat"><b>Лесная сказка в Швеции - Евле</b></span></p>',
						sub_title:'<p style="text-align:center"><span style="font-family:montserrat">Город на востоке центральной Швеции, на берегу Ботнического залива Балтийского моря</span></p>',
						btn1:{
							title:'Узнать стоимость',
							color:'#ed7a00',
							surround:3,
							style:5
						},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'text',title:'Введите имя',description:'',required:1},
							{type:'phone',title:'Введите телефон',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#069',action:'thanks',surround:3,style:17,url:'',amount:0}
						]
					}
				]
			}
		},
		{
			id:1154,
			default:1,
			position:3703,
			title:'216. Блок с фоновым изображением, текстом и кнопкой',
			description:'Возможность вставки фонового видео.',
			default_values:{
				dark:0,
				width1170:1,
				padd_top:'190',
				padd_bottom:'190',
				title:'<div><em><span style="font-family:georgia,serif"><span style="color:#000"><span style="font-size:72px">АКРИЛЕНД — магазин для художников с доставкой</span></span></span></em></div>',
				sub_title:'<p><span style="font-size:22px"><span style="font-family:roboto"><span style="color:#000">Художественный интернет-магазин «Акриленд» предлагает на выбор различные товары для художников и художественные принадлежности.</span></span></span></p>',
				bg_image:'section1154_216_bg.jpeg',
				hover_color:'#04196C',
				btn1:{
					title:'УЗНАТЬ БОЛЬШЕ',
					color:'#04196C',
					surround:3,
					style:1
				}
			}
		}
	],
	group:[153, 154, 1154, 1156, 311, 155, 156, 157, 258, 159, 1258],
	deleted:[53, 58, 54, 59, 57, 56, 55, 60, 158],
	widget:0
},
{
	name:'Текстовые блоки',
	icon:'fa fa-align-left ',
	icon_new:'text_block.svg',
	blocks:[
		{
			id:132,
			default:1,
			position:4800,
			title:'301. Текстовый блок c простым текстом на всю ширину сайта',
			description:'Возможность смены оформления текста.',
			default_values:{
				block_style:'style_0',
				show_title:1,
				show_sub_title:1,
				padd_top:'120',
				padd_bottom:'120',
				title:'<p style="text-align:left"><span style="font-family:roboto"><span style="font-size:40px"><b>Добро пожаловать в Италию</b></span></span></p>',
				sub_title:'<p style="text-align:left"><span style="font-size:22px"><span style="font-family:roboto">Проверенные маршруты для первого путешествия по Италии</span></span></p>',
				text:'<p><span style="font-size:17px"><span style="font-family:roboto">Если у вас есть возможность увидеть только один город в Италии, то пусть это будет Рим, великий, многогранный, одновременно шумный и уютный, узнаваемый и не до конца известный. Ехать на 2-3 дня сюда, если вы едете впервые и в город, и в страну — не самая лучшая идея. Неделя — вот то количество времени, которое можно считать адекватным.</span></span></p><p><span style="font-size:17px"><span style="font-family:roboto"><br></span></span></p><p><span style="font-size:17px"><span style="font-family:roboto">Планируя свои дни в городе, пожалуйста, отведите достаточно времени на то, чтобы увидеть не только Колизей, Испанскую лестницу, площадь Навона и обалдеть от красоты и количества туристов, но и для того, чтобы познакомиться с другим, жилым, спокойным, но не менее красивым Римом. </span></span></p><p><span style="font-size:17px"><span style="font-family:roboto"><br></span></span></p><p><span style="font-size:17px"><span style="font-family:roboto">Выехать из шумного и оглушающего Рима на день, чтобы увидеть другую Италию, — идея прекрасная. Многие едут к морю или во Флоренцию (не лучшая идея — во Флоренции нужно ночевать). На поезде вы легко совершите поездку в Неаполь — это будет отличным контрастом. Если вы на машине, рассмотрите возможность добраться до Орвието (это уже Умбрия, другая кухня и один из самых красивых в Италии Дуомо) или, например, до Ариччи.</span></span></p>'
			}
		},
		{
			id:132,
			default:1,
			position:4810,
			title:'302. Текстовый блок с информацией о компании',
			description:'Заголовки поменяны местами. Текст выровнен по центру.',
			default_values:{
				block_style:'style_0',
				show_title:1,
				show_sub_title:1,
				switch_title_descr_pos:1,
				bg_text:0,
				bg:'#f6f6f6',
				padd_top:'120',
				padd_bottom:'120',
				title:'<div><span style="font-family:montserrat"><b><span style="font-size:40px">Многолетняя история</span></b></span></div>',
				sub_title:'<span style="font-family:montserrat"><span style="font-size:14px"><span style="color:#696969"><b>О КОМПАНИИ</b></span></span></span>',
				text:'<p style="text-align:center"><span style="color:#656565"><span style="font-size:18px"><span style="font-family:montserrat">Мы вынуждены отталкиваться от того, что выбранный нами инновационный путь требует от нас анализа прогресса профессионального сообщества. Учитывая ключевые сценарии поведения, экономическая повестка сегодняшнего дня, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для экспериментов, поражающих по своей масштабности и грандиозности.</span></span></span></p><p style="text-align:center"><span style="color:#656565"><span style="font-size:18px"><span style="font-family:montserrat">Задача организации, в особенности же существующая теория говорит о возможностях стандартных подходов. Безусловно, постоянное информационно-пропагандистское обеспечение нашей деятельности является качественно новой ступенью как самодостаточных, так и внешне зависимых концептуальных решений!</span></span></span></p>'
			}
		},
		{
			id:132,
			default:1,
			position:4815,
			title:'303. Узкий текстовый блок c простым текстом',
			description:'Возможность смены оформления текста.',
			default_values:{
				block_style:'style_1',
				show_title:1,
				show_sub_title:0,
				bg_text:0,
				dark:0,
				color:'#fff',
				back_dark:1,
				bg_opacity:0.15,
				opacity_color1:'#000',
				opacity_color2:'#000',
				bg_image:'section132_4815_bg_new.jpg',
				padd_top:'140',
				padd_bottom:'140',
				title:'<p style="text-align:left"><span style="font-size:36px"><span style="font-family:roboto"><span style="color:#fff">В совете предложили ввести новые правила игры</span></span></span></p>',
				text:'<p><span style="font-size:20px"><span style="font-family:roboto"><span style="color:#fff">А ещё представители современных социальных резервов призывают нас к новым свершениям, которые, в свою очередь, должны быть разоблачены. Как уже неоднократно упомянуто, интерактивные прототипы освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, ассоциативно распределены по отраслям.</span></span></span></p>'
			}
		},
		{
			id:132,
			default:0,
			position:4850,
			title:'304. Текст на белом фоне с фоновым изображением',
			description:'Возможность сменить фон, цвет подложки, цвет текста и добавить подзаголовок',
			default_values:{
				block_style:'style_3',
				color:'#fff',
				padd_top:'140',
				padd_bottom:'140',
				show_title:1,
				show_sub_title:0,
				bg_image:'section132_4850_bg_new.jpg',
				title:'<p style="text-align:left"><span style="font-size:42px"><span style="font-family:roboto"><b>Типовые решения</b></span></span></p>',
				text:'<p><span style="font-family:roboto"><span style="font-size:18px">Как принято считать, активно развивающиеся страны третьего мира призывают нас к новым свершениям, которые, в свою очередь, должны быть представлены в исключительно положительном свете. Прежде всего, внедрение современных методик однозначно определяет каждого участника как способного принимать собственные решения касаемо дальнейших направлений развития. Ясность нашей позиции очевидна: экономическая повестка сегодняшнего дня требует от нас анализа стандартных подходов.</span></span></p><p><br></p><p><span style="font-family:roboto"><span style="font-size:18px">Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: глубокий уровень погружения однозначно фиксирует необходимость направлений прогрессивного развития! Разнообразный и богатый опыт говорит нам, что начало повседневной работы по формированию позиции играет определяющее значение.</span></span></p>'
			}
		},
		{
			id:132,
			default:0,
			position:4860,
			title:'305. Текстовый блок на белом фоне с цветной подложкой',
			description:'Возможность поменять заголовки местами, сменить фон и цвет подложки',
			default_values:{
				block_style:'style_3',
				color:'#fff',
				bg:'#3b444b',
				pattern:'otis-redding.png',
				show_title:1,
				show_sub_title:1,
				switch_title_descr_pos:1,
				text_lineheight:1.7,
				padd_top:'120',
				padd_bottom:'120',
				title:'<p><span style="font-size:50px"><span style="font-family:georgia,serif"><span style="color:#3b444b">Подлинный портрет кота великого князя Московии</span></span></span></p>',
				sub_title:'<span style="font-size:16px"><span style="font-family:georgia,serif"><span style="color:#808080"><em>Le vray portrait du chat du grand duc de Moscovie</em></span></span></span>',
				text:'<p style="text-align:center"><span style="color:#676767"><span style="font-size:18px"><span style="font-family:georgia,serif">«Подлинное изображение кота великого князя Московии» — самое раннее изображение данного домашнего животного на картинах (гравюрах) на территории России. Иногда объясняют это странное обстоятельство тем, что на самом деле на гравюре изображён вовсе не кот, а сам царь Алексей Михайлович под видом кота. По их мнению, воспроизводить истинное лицо правителя в XVII веке художники не решались, и существовали лишь парадные портреты. Но использовать эзопов язык, изображением кота передавая характер великого князя Московского, никто европейскому мастеру запретить не мог.</span></span></span></p>'
			}
		},
		{
			id:132,
			default:0,
			position:4865,
			title:'306. Простой текст с обводкой',
			description:'Возможность смены цвета обводки и текста',
			default_values:{
				block_style:'style_2',
				bg:'#f2f2f2',
				color:'#000',
				text_lineheight:1.4,
				show_title:1,
				show_sub_title:0,
				padd_top:'120',
				padd_bottom:'120',
				title:'<p style="text-align:left"><span style="font-family:open sans"><b><span style="font-size:40px">Орден некой таинственной руки</span></b></span></p>',
				text:'<p><span style="font-family:open sans"><span style="font-size:18px">Тайное неформальное объединение американских журналистов и редакторов, ради шутки договорившихся вставлять в свои публикации фразу «Будто бы некая таинственная рука…».</span></span></p><p><br></p><p><span style="font-family:open sans"><span style="font-size:18px">Фраза была сочинена Джозефом Фландерсом, полицейским корреспондентом городской газеты «Шарлотт Ньюз» (англ.: The Charlotte News) осенью 1965 года. В сообщении о работнике мельницы, которого застрелили члены его собственной семьи, после того как он поздно вернулся домой, Фландерс написал: «Будто бы некая таинственная рука, вытянувшаяся с неба, передвигала участников событий как пешки на гигантской шахматной доске».</span></span></p>'
			}
		},
		{
			id:132,
			default:0,
			position:4900,
			title:'307. Текстовый блок на белом фоне с серой подложкой',
			description:'Возможность смены оформления текста и фона',
			default_values:{
				block_style:'style_3',
				color:'#f5f5f5',
				text_lineheight:1.4,
				show_title:1,
				show_sub_title:0,
				padd_top:'120',
				padd_bottom:'120',
				title:'<p style="text-align:left"><span style="font-family:roboto"><span style="font-size:42px"><b>Книги на цепях</b></span></span></p>',
				text:'<p><span style="font-size:17px"><span style="font-family:roboto">Способ хранения книг в общественных библиотеках средневековой Европы, где книги прикреплялись железными цепями к полкам. Цепи, удерживающие книги, были достаточно длинны для того, чтобы снять книгу с полки и прочитать, но не давали вынести книгу за пределы библиотеки. Такая практика была распространена в читальных залах библиотек начиная со средневековья по XVIII столетие, что было обусловлено большой ценностью каждого экземпляра книги. Большая часть средневековых публичных библиотек не выдавала книги на руки (то есть состояла только из читального зала), и цепи были предназначены для обеспечения безопасности хранения дорогостоящих книг.</span></span></p>'
			}
		},
		{
			id:132,
			default:0,
			position:4950,
			title:'308. Блок с цитатой',
			description:'Возможность вставки цитаты с указанием авторства, смены фона и цвета',
			default_values:{
				block_style:'style_4',
				color:'#f0f0f0',
				show_title:0,
				show_sub_title:1,
				padd_top:'100',
				padd_bottom:'100',
				sub_title:'<p style="text-align:right"><span style="font-family:cormorant upright,serif"><span style="font-size:17px"><span style="color:#696969"><em>Альберт Эйнштейн</em></span></span></span></p>',
				text:'<p><em><span style="font-size:20px"><span style="font-family:cormorant upright,serif">Теория — это когда все известно, но ничего не работает. Практика — это когда все работает, но никто не знает почему. Мы же объединяем теорию и практику: ничего не работает... и никто не знает почему!</span></span></em></p>'
			}
		},
		{
			id:132,
			default:0,
			position:4951,
			title:'309. Блок с цитатой и фоновым изображением',
			description:'Возможность вставки цитаты с указанием авторства, смены фона и цвета',
			default_values:{
				block_style:'style_4',
				color:'#fcf5ed',
				show_title:0,
				show_sub_title:1,
				back_dark:1,
				bg_opacity:0.25,
				opacity_color1:'#fff',
				opacity_color2:'#fff',
				padd_top:'160',
				padd_bottom:'160',
				bg_image:'section132_309_bg.jpg',
				sub_title:'<span style="font-size:18px"><span style="color:#696969"><em><span style="font-family:comic neue,cursive">Экхарт Толле</span></em></span></span>',
				text:'<p><span style="font-size:20px"><span style="font-family:comic neue,cursive">Мудрость приходит вместе со способностью быть спокойным. Просто смотри и слушай. Больше ничего не нужно. Когда ты в покое, когда ты просто смотришь и слушаешь, это активизирует внутри тебя свободную от понятий разумность. Пусть покой направляет твои слова и дела.</span></span></p>'
			}
		},
		{
			id:250,
			default:0,
			position:4954,
			title:'310. Две колонки текста с заголовками',
			description:'Возможность отключить заголовки, поставить фон на текст или весь блок',
			default_values:{
				mode: 3,
				show_title:0,
				show_sub_title:0,
				show_btns:0
			}
		},
		{
			id:250,
			default:0,
			position:4955,
			title:'311. Две колонки текста с заголовками и подложкой',
			description:'Возможность отключить заголовки, поставить фон на текст или весь блок',
			default_values:{
				mode: 3,
				show_title:0,
				show_sub_title:0,
				show_btns:0,
				bg:'#f1f1f1',
				bg_text:1,
				arr1:[
					{
						image1:'section250_403_image1_new.jpg',
						image2:'section250_403_image2_new.jpg',
						alt1:'',alt2:'',
						title1:'<span style="font-family:ubuntu"><b><span style="font-size:18px">Важность прогрессивного развития</span></b></span>',
						title2:'<span style="font-size:18px"><span style="font-family:ubuntu"><b>Постоянный количественный рост</b></span></span>',
						subtitle1:'<span style="font-family:ubuntu"><span style="color:#000"><span style="font-size:16px">Каждый из нас понимает очевидную вещь: постоянное информационно-пропагандистское обеспечение нашей деятельности в значительной степени обусловливает важность направлений прогрессивного развития. Однозначно, непосредственные участники технического прогресса освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, ограничены исключительно образом мышления. Для современного мира экономическая повестка сегодняшнего дня играет важную роль в формировании новых предложений.</span></span></span>',
						subtitle2:'<span style="font-family:ubuntu"><span style="color:#000"><span style="font-size:16px">Следует отметить, что постоянный количественный рост и сфера нашей активности предполагает независимые способы реализации прогресса профессионального сообщества. Таким образом, разбавленное изрядной долей эмпатии, рациональное мышление требует от нас анализа позиций, занимаемых участниками в отношении поставленных задач. Ясность нашей позиции очевидна: существующая теория представляет собой интересный эксперимент проверки укрепления моральных ценностей.</span></span></span>',
						btn1:{title:'Оставить заявку',color:'#D62B2B',surround:3,style:17},
						btn2:{title:'Не сейчас',color:'#D62B2B',style:17},
						form1:[
							{type:'text',title:'Введите имя',description:'',required:1},
							{type:'phone',title:'Введите телефон',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#ff0000',action:'thanks',url:'',amount:0}
						],
						form2:[
							{type:'text',title:'Введите имя',description:'',required:1},
							{type:'phone',title:'Введите телефон',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#ff0000',action:'thanks',url:'',amount:0}
						]
					}
				]
			}
		},
		{
			id:149,
			default:0,
			position:4956,
			title:'312. Слайдер с 3-мя колонками заголовком и описанием',
			description:'Возможность отключения слайдера, добавления изображений или видео, анимации элементов',
			default_values:{
				mode: 3,
				show_title:0,
				show_sub_title:0,
				like_slider:1,
				width1170:1,
				padd_top:'80',
				padd_bottom:'80',
				arr1:[
					{
						title1:'<span style="font-size:17px"><span style="font-family:roboto"><b>Существующая теория требует анализа укрепления моральных ценностей</b></span></span>',
						title2:'<span style="font-size:17px"><b><span style="font-family:roboto">Диаграммы связей являются только методом политического участия</span></b></span>',
						title3:'<span style="font-size:17px"><span style="font-family:roboto"><b>Особенности внутренней политики неоднозначны и будут разоблачены</b></span></span>',
						subtitle1:'<span style="font-family:roboto"><span style="font-size:16px">Ясность нашей позиции очевидна: выбранный нами инновационный путь позволяет выполнить важные задания по разработке вывода текущих активов. Учитывая ключевые сценарии поведения, повышение уровня гражданского сознания играет важную роль в формировании форм воздействия. Есть над чем задуматься: многие известные личности представлены в исключительно положительном свете.</span></span>',
						subtitle2:'<span style="font-size:16px"><span style="font-family:roboto">Как принято считать, некоторые особенности внутренней политики, инициированные исключительно синтетически, в равной степени предоставлены сами себе. С другой стороны, постоянное информационно-пропагандистское обеспечение нашей деятельности предопределяет высокую востребованность глубокомысленных рассуждений. Но внедрение современных методик напрямую зависит от прогресса профессионального сообщества.</span></span>',
						subtitle3:'<span style="font-size:16px"><span style="font-family:roboto">Но стремящиеся вытеснить традиционное производство, нанотехнологии представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть ассоциативно распределены по отраслям. Однозначно, стремящиеся вытеснить традиционное производство, нанотехнологии своевременно верифицированы</span></span>',
						alt1:'',alt2:'',alt3:''
					},
					{
						title1:'<span style="font-size:17px"><span style="font-family:roboto"><b>Существующая теория требует анализа укрепления моральных ценностей</b></span></span>',
						title2:'<span style="font-size:17px"><b><span style="font-family:roboto">Диаграммы связей являются только методом политического участия</span></b></span>',
						title3:'<span style="font-size:17px"><span style="font-family:roboto"><b>Особенности внутренней политики неоднозначны и будут разоблачены</b></span></span>',
						subtitle1:'<span style="font-family:roboto"><span style="font-size:16px">Ясность нашей позиции очевидна: выбранный нами инновационный путь позволяет выполнить важные задания по разработке вывода текущих активов. Учитывая ключевые сценарии поведения, повышение уровня гражданского сознания играет важную роль в формировании форм воздействия. Есть над чем задуматься: многие известные личности представлены в исключительно положительном свете.</span></span>',
						subtitle2:'<span style="font-size:16px"><span style="font-family:roboto">Как принято считать, некоторые особенности внутренней политики, инициированные исключительно синтетически, в равной степени предоставлены сами себе. С другой стороны, постоянное информационно-пропагандистское обеспечение нашей деятельности предопределяет высокую востребованность глубокомысленных рассуждений. Но внедрение современных методик напрямую зависит от прогресса профессионального сообщества.</span></span>',
						subtitle3:'<span style="font-size:16px"><span style="font-family:roboto">Но стремящиеся вытеснить традиционное производство, нанотехнологии представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть ассоциативно распределены по отраслям. Однозначно, стремящиеся вытеснить традиционное производство, нанотехнологии своевременно верифицированы</span></span>',
						alt1:'',alt2:'',alt3:''
					}
				]
			}
		},
		{
			id:132,
			default:0,
			position:4957,
			title:'313. Простой текст в 2 колонки',
			description:'Возможность смены количества колонок, фона и стиля текста',
			default_values:{
				block_style:'style_0',
				width1170:1,
				show_title:0,
				show_sub_title:0,
				column_count:'two',
				padd_top:'60',
				padd_bottom:'60',
				text:'<p><span style="font-family:ubuntu"><span style="font-size:18px">Банальные, но неопровержимые выводы, а также многие известные личности призваны к ответу. Но действия представителей оппозиции, превозмогая сложившуюся непростую экономическую ситуацию, обнародованы. <span style="color:var(--styles_text_color, #333)">Противоположная точка зрения подразумевает, что некоторые особенности внутренней политики превращены в посмешище, хотя само их существование приносит несомненную пользу обществу. Господа, повышение уровня гражданского сознания позволяет оценить значение позиций, занимаемых участниками в отношении поставленных задач. Вот вам яркий пример современных тенденций — внедрение современных методик влечет за собой процесс внедрения и модернизации приоретизации разума над эмоциями.</span></span></span></p><p><span style="font-family:ubuntu"><span style="font-size:18px"><span style="color:var(--styles_text_color, #333)">Ясность нашей позиции очевидна: понимание сути ресурсосберегающих технологий предоставляет широкие возможности для существующих финансовых и административных условий. Противоположная точка зрения подразумевает, что явные признаки победы институционализации указаны как претенденты на роль ключевых факторов. Безусловно, дальнейшее развитие различных форм деятельности предоставляет широкие возможности для своевременного выполнения сверхзадачи. В своём стремлении повысить качество жизни, они забывают, что новая модель организационной деятельности однозначно фиксирует необходимость своевременного выполнения сверхзадачи.</span></span></span></p>'
			}
		},
		{
			id:132,
			default:0,
			position:4958,
			title:'314. Простой текст в 3 колонки',
			description:'Возможность смены количества колонок, фона и стиля текста',
			default_values:{
				block_style:'style_0',
				width1170:1,
				column_count:'three',
				show_title:0,
				show_sub_title:0,
				padd_top:'60',
				padd_bottom:'60',
				text:'<span style="font-family:ubuntu">Банальные, но неопровержимые выводы, а также многие известные личности призваны к ответу. Но действия представителей оппозиции, превозмогая сложившуюся непростую экономическую ситуацию, обнародованы. <span style="color:var(--styles_text_color, #333)">Противоположная точка зрения подразумевает, что некоторые особенности внутренней политики превращены в посмешище, хотя само их существование приносит несомненную пользу обществу. Господа, повышение уровня гражданского сознания позволяет оценить значение позиций.</span></span></span></p><p><span style="font-size:17px"><span style="font-family:ubuntu"><span style="color:var(--styles_text_color, #333)">Занимаемых участниками в отношении поставленных задач. Вот вам яркий пример современных тенденций — внедрение современных методик влечет за собой процесс внедрения и модернизации приоретизации разума над эмоциями.</span></span></span></p><p><span style="font-size:17px"><span style="font-family:ubuntu"><span style="color:var(--styles_text_color, #333)">Ясность нашей позиции очевидна: понимание сути ресурсосберегающих технологий предоставляет широкие возможности для существующих финансовых и административных условий. Противоположная точка зрения подразумевает. </span></span></span></p><p><span style="font-size:17px"><span style="font-family:ubuntu"><span style="color:var(--styles_text_color, #333)">Явные признаки победы институционализации указаны как претенденты на роль ключевых факторов. Безусловно, дальнейшее развитие различных форм деятельности предоставляет широкие возможности для своевременного выполнения сверхзадачи. В своём стремлении повысить качество жизни, они забывают, что новая модель организационной деятельности однозначно фиксирует необходимость своевременного выполнения сверхзадачи.</span></span></span></p>'
			}
		},
		{
			id:132,
			default:0,
			position:4960,
			title:'315. Простой текст',
			description:'Можно включить заголовки, сменить фон, установить подложку или обводку',
			default_values:{
				show_title:0,
				show_sub_title:0,
				padd_top:'100',
				padd_bottom:'100',
				text:'<p><span style="font-size:18px"><span style="font-family:roboto">Если у вас есть возможность увидеть только один город в Италии, то пусть это будет Рим, великий, многогранный, одновременно шумный и уютный, узнаваемый и не до конца известный. Ехать на 2-3 дня сюда, если вы едете впервые и в город, и в страну — не самая лучшая идея. Неделя — вот то количество времени, которое можно считать адекватным.</span></span></p><p><span style="font-size:18px"><br></span></p><p><span style="font-size:18px"><span style="font-family:roboto">Планируя свои дни в городе, пожалуйста, отведите достаточно времени на то, чтобы увидеть не только Колизей, Испанскую лестницу, площадь Навона и обалдеть от красоты и количества туристов, но и для того, чтобы познакомиться с другим, жилым, спокойным, но не менее красивым Римом. </span></span></p><p><span style="font-size:18px"><br></span></p><p><span style="font-size:18px"><span style="font-family:roboto">Выехать из шумного и оглушающего Рима на день, чтобы увидеть другую Италию, — идея прекрасная. Многие едут к морю или во Флоренцию (не лучшая идея — во Флоренции нужно ночевать). На поезде вы легко совершите поездку в Неаполь — это будет отличным контрастом. Если вы на машине, рассмотрите возможность добраться до Орвието (это уже Умбрия, другая кухня и один из самых красивых в Италии Дуомо) или, например, до Ариччи.</span></span></p>'
			}
		},
		{
			id:132,
			default:0,
			position:4961,
			title:'316. Заголовки',
			description:'Можно поменять местами, включить текст или сменить фон',
			default_values:{
				show_title:1,
				show_sub_title:1,
				show_text:0,
				padd_top:'70',
				padd_bottom:'20',
				title:'<p style="text-align:left"><span style="font-size:42px"><span style="font-family:roboto"><b>Базовый вектор развития</b></span></span></p>',
				sub_title:'<p style="text-align:left"><span style="font-size:22px"><span style="font-family:roboto">Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта</span></span></p>'
			}
		},
		{
			id:132,
			default:0,
			position:4962,
			title:'317. Заголовки',
			description:'Можно поменять местами, включить текст или сменить фон',
			default_values:{
				show_title:1,
				show_sub_title:1,
				switch_title_descr_pos:1,
				show_text:0,
				padd_top:'70',
				padd_bottom:'20',
				title:'<p><span style="font-size:56px"><span style="font-family:roboto"><b>Современные методики</b></span></span></p>',
				sub_title:'<p><span style="color:#696969"><span style="font-size:24px"><span style="font-family:roboto">Реализация намеченных плановых заданий</span></span></span><span style="font-size:24px"><span style="font-family:roboto"><br></span></span></p>'
			}
		},
		{
			id:132,
			default:0,
			position:4963,
			title:'318. Заголовки с текстом',
			description:'Можно поменять местами, включить текст или сменить фон',
			default_values:{
				show_title:1,
				show_sub_title:1,
				switch_title_descr_pos:1,
				show_text:1,
				padd_top:'90',
				padd_bottom:'90',
				title:'<p><span style="font-size:56px"><span style="font-family:roboto"><b>Интерактивные прототипы</b></span></span></p>',
				sub_title:'<p><span style="color:#A9A9A9"><b><span style="font-size:16px"><span style="font-family:roboto">НОВЫЕ СОВЕРШШЕНИЯ</span></span></b></span></p>',
				text:'<p style="text-align:center"><span style="color:#767676"><span style="font-size:20px">Наше дело не так однозначно, как может показаться: укрепление и развитие внутренней структуры влечет за собой процесс внедрения и модернизации укрепления моральных ценностей.</span></span></p>'
			}
		},
		{
			id:132,
			default:0,
			position:4964,
			title:'319. Заголовки с текстом',
			description:'Можно поменять местами, включить текст или сменить фон',
			default_values:{
				show_title:1,
				show_sub_title:1,
				switch_title_descr_pos:1,
				show_text:1,
				padd_top:'90',
				padd_bottom:'90',
				title:'<p><span style="font-size:52px"><span style="font-family:roboto"><b>Cпецификация современных стандартов экономики</b></span></span></p>',
				sub_title:'<p><span style="color:#a5a5a5"><b>НЕСОМНЕННАЯ ПОЛЬЗА ОБЩЕСТВУ</b></span></p><p><span style="color:#a5a5a5"><b><br></b></span></p>',
				text:'<p style="text-align:center"><span style="font-size:26px">Являясь всего лишь частью общей картины, сторонники тоталитаризма в науке неоднозначны и будут обнародованы</span></p>'
			}
		},
		{
			id:132,
			default:0,
			position:4965,
			title:'320. Простые заголовки',
			description:'Можно поменять местами, включить текст или сменить фон',
			default_values:{
				show_title:1,
				show_sub_title:1,
				show_text:0,
				padd_top:'70',
				padd_bottom:'20',
				title:'<p><span style="font-family:roboto"><span style="font-size:42px">Традиционное автомобильное производство</span></span></p>',
				sub_title:'<p><span style="font-family:roboto"><span style="font-size:24px">Таким образом, понимание сути ресурсосберегающих технологий напрямую зависит от системы обучения кадров</span></span></p>'
			}
		}
	],
	group:[164, 306, 250, 149],
	deleted:[64],
	widget:0
},
{
	name:'Контент',
	icon:'fa fa-th-large',
	icon_new:'content.svg',
	blocks:[
		{
			id:126,
			default:0,
			position:5300,
			title:'401. Контент-блок с изображением, текстом и кнопкой',
			description:'Возможность изменения размера изображения / видео, слайдер и кнопки',
			default_values:{
				like_slider:0,
				show_price_descr:0,
				show_price:0,
				title:'<span style="font-size:42px"><span style="font-family:roboto"><b>Пластиковые окна на заказ</b></span></span>',
				sub_title:'<span style="font-size:24px"><span style="font-family:roboto">Окна для тех, кто ищет простой вариант остекления дачи или квартиры</span></span>',
				show_title:1,
				show_sub_title:1,
				padd_top:'120',
				padd_bottom:'120',
				hover_color:'#6d9f30',
				image_size:'900x900',
				arr1:[
					{
						image1:'section126_401_image1_new.png',
						image2:'section126_401_image1_new.png',
						image3:'section126_401_image1_new.png',
						image4:'section126_401_image1_new.png',
						alt1:'',alt2:'',alt3:'',alt4:'',
						video1:'https://youtu.be/V56TUkuKCH4',
						title1:'<b><span style="font-size:24px"><span style="font-family:roboto">Заказать бесплатный замер</span></span></b>',
						txt1:'<p><span style="font-family:roboto"><span style="font-size:18px">Качественные и экологичные окна по оптовым ценам.</span></span></p><ul><li><span style="font-family:roboto"><span style="font-size:18px">В течение 10 минут Вам перезвонит наш менеджер</span></span></li><li><span style="font-family:roboto"><span style="font-size:18px">Инженер по замерам приедет в удобное для Вас время</span></span></li><li><span style="font-family:roboto"><span style="font-size:18px">Подберет оптимальное решение</span></span></li><li><span style="font-family:roboto"><span style="font-size:18px">Заключит договор, не выходя из дома</span></span></li></ul><div><span style="font-family:roboto"><span style="font-size:18px">Нам удается сочетать в продукции надежность, безопасность, превосходный внешний вид и следование трендам дизайна интерьера.</span></span></div>',
						btn1:{title:'Бесплатный замер',color:'#6d9f30',surround:3,style:1},
						btn2:{title:'Нужна консультация',color:'#6d9f30',style:1},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'text',title:'Введите имя',description:'',required:1},
							{type:'phone',title:'Введите телефон',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#6d9f30',action:'thanks',surround:3,style:1,url:'',amount:0}
						],
						form2:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'text',title:'Введите имя',description:'',required:1},
							{type:'phone',title:'Введите телефон',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#6d9f30',action:'thanks',surround:3,style:1,url:'',amount:0}
						],
						form_html1:'Замените HTML',
						form_html2:'Замените HTML'
					}
				]
			}
		},
		{
			id:117,
			default:1,
			position:5350,
			title:'402. Контент-блок с двумя секциями с изображением и описанием (вертикально)',
			description:'Возможность изменения размера изображения/видео, анимация',
			default_values:{
				width1170:1,
				show_title:1,
				show_sub_title:1,
				title:'<span style="font-family:roboto"><span style="font-size:42px"><b>Наши невероятные идеи</b></span></span>',
				sub_title:'<span style="font-family:roboto"><span style="font-size:24px">Семантический разбор внешних противодействий<br>связывает нас с нашим прошлым</span></span>',
				bg_text:0,
				padd_top:'120',
				padd_bottom:'120',
				border1:0,
				arr1:[
					{
						image1:'section117_402_image1_new.jpg',
						alt1:'',
						video1:'https://youtu.be/V56TUkuKCH4',
						descr1:'<span style="font-size:26px"><b><span style="font-family:roboto">Очевидцы сообщают, что слышали песнь</span></b></span>',
						txt1:'<span style="font-size:18px"><span style="font-family:roboto">Также как постоянное информационно-пропагандистское обеспечение нашей деятельности создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса существующих финансовых и административных условий. Являясь всего лишь частью общей картины, сделанные на базе интернет-аналитики выводы и по сей день остаются уделом либералов.</span></span>'
					},
					{
						image1:'section117_402_image2_new.jpg',
						alt1:'',
						video1:'https://youtu.be/V56TUkuKCH4',
						descr1:'<span style="font-size:26px"><b><span style="font-family:roboto">Инновационный путь продолжает удивлять </span></b></span>',
						txt1:'<span style="font-family:roboto"><span style="font-size:18px">Значимость этих проблем настолько очевидна, что перспективное планирование в значительной степени обусловливает важность экономической целесообразности принимаемых решений. Не следует, однако, забывать, что базовый вектор развития является качественно новой ступенью анализа существующих паттернов поведения. Господа, граница обучения кадров предполагает независимые способы.</span></span>'
					}
				]
			}
		},
		{
			id:250,
			default:1,
			position:5400,
			title:'403. Контент-блок с двумя секциями с изображением и описанием (горизонтально)',
			description:'Возможность изменения размера/скрытие изображения/видео, анимация',
			default_values:{
				width1170:1,
				show_title:1,
				show_sub_title:1,
				bg_text:0,
				bg:'#f2f2f2',
				title:'<p><span style="font-family:roboto"><b><span style="font-size:42px">Больше, чем упражнения</span></b></span></p>',
				sub_title:'<p><span style="font-size:24px"><span style="font-family:roboto">Как йога и медитация помогают справляться с тревожностью</span></span></p>',
				arr1:[
					{
						image1:'section250_403_image1_new.jpg',
						image2:'section250_403_image2_new.jpg',
						alt1:'',alt2:'',
						form_html1:'Замените HTML',
						form_html2:'Замените HTML',
						video1:'https://youtu.be/V56TUkuKCH4',
						video2:'https://youtu.be/V56TUkuKCH4',
						title1:'<span style="font-size:24px"><b><span style="font-family:roboto">Очень важно оставаться в гармонии с собственным телом и мыслями </span></b></span>',
						title2:'<span style="font-size:24px"><b><span style="font-family:roboto">Рассказываем, как с помощью йоги и медитации помочь себе в трудные времена </span></b></span>',
						subtitle1:'<p><span style="font-family:roboto"><span style="font-size:18px">Сейчас важно понимать, что из‑за постоянно поступающих новостей вы можете находиться в состоянии хронического стресса. И даже если плохие новости перестанут поступать, уровень стресса не снизится сиюминутно после практики. Спокойствие приходит постепенно, поэтому нужно начать выстраивать свою повседневную жизнь в новых реалиях.</span></span></p>',
						subtitle2:'<p><span style="font-family:roboto"><span style="font-size:18px">Регулярная работа со своим телом позволяет лучше понять и его реакцию на стресс. Страх и неизвестность вызывают приток адреналина. Он должен побуждать нас бороться за безопасность, встать и бежать. Но если мы при этом просто сидим на месте, то мы не расходуем адреналин и не даем накопленным эмоциям возможность «покинуть» тело.</span></span></p>',
						btn1:{title:'Оставить заявку',color:'#D62B2B',surround:3,style:17},
						btn2:{title:'Не сейчас',color:'#D62B2B',style:17},
						form1:[
							{type:'text',title:'Введите имя',description:'',required:1},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#ff0000',action:'thanks',url:'',amount:0}
						],
						form2:[
							{type:'text',title:'Введите имя',description:'',required:1},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#ff0000',action:'thanks',url:'',amount:0}
						]
					}
				]
			}
		},
		{
			id:226,
			default:1,
			position:5600,
			title:'404. Контент-блок с текстом и изображением',
			description:'Возможность изменения размера/расположения изображения/видео, анимации.',
			default_values:{
				show_title:0,
				show_sub_title:0,
				align_center:1,
				width1170:1,
				float:'leftt',
				padd_top:'80',
				padd_bottom:'80',
				image_size:'900x1200'
			}
		},
		{
			id:154,
			default:0,
			position:5700,
			title:'405. Блок видео, формой и заголовком',
			description:'Возможность вставки фонового видео, вставить/убрать таймер, изменение местоположения формы',
			default_values:{
				show_title:1,
				show_sub_title:0,
				no_image:1,
				width1170:1,
				brd_color:'#fff',
				use_video:1,
				back_dark:1,
				opacity_color1:'#fefefe',
				opacity_color2:'#f0f0f0',
				bg_opacity:1,
				dark:0,
				all_border:0,
				bg:'#fff',
				padd_top:'80',
				padd_bottom:'80',
				video:'https://youtu.be/wdeXiqMB7AI',
				title:'<span style="font-size:42px"><span style="font-family:roboto"><span style="color:#000"><b>Невероятное путешествие по Байкалу по цене от 15 990 руб</b></span></span></span>',
				hover_color:'#3B9C83',
				form_title:'<p style="text-align:left"><span style="font-size:22px"><span style="color:#000"><span style="font-family:roboto"><b>Записаться на тур по байкалу</b></span></span></span></p>',
				form_sub_title:'<p style="text-align:left"><span style="color:#696969"><span style="font-size:16px"><span style="font-family:roboto">Успей записаться по специальной цене!</span></span></span></p>',
				form_text:'<em><span style="font-family:roboto"><span style="font-size:14px"><span style="color:#696969">Нажимая на кнопку, Вы принимаете </span><a target="_blank" data-cke-saved-href="/personal-data-1/" href="/personal-data-1/">Положение</a><span style="color:#696969"> и </span><a target="_blank" data-cke-saved-href="/personal-data-2/" href="/personal-data-2/">Согласие</a><span style="color:#696969"> на обработку персональных данных.</span></span></span></em>',
				form1:[
					{type:'hidden',title:'Название формы',description:''},
					{type:'text',title:'Введите имя',description:'',required:1},
					{type:'phone',title:'Введите телефон',description:'',required:1},
					{type:'date',title:'Выберите дату',description:'',required:1},
					{type:'btn',title:'Записаться на тур',color:'#3B9C83',action:'thanks',surround:3,style:1,url:'',amount:0}
				]
			}
		},
		{
			id:154,
			default:0,
			position:5750,
			title:'406. Блок с фоновым изображением, таймером и текстом',
			description:'Возможность вставки фонового видео, вставить/убрать таймер, изменение местоположения формы.',
			default_values:{
				bg_image:'section154_506_bg_new.jpg',
				show_title:1,
				align_center:1,
				width1170:1,
				brd_color:'#fff',
				use_video:0,
				no_fontsize:1,
				dark:0,
				show_timer:1,
				underlay:0,
				form_bg:1,
				padd_top:'135',
				padd_bottom:'135',
				color:'#fff',
				hover_color:'#007ADD',
				title:'<span style="font-size:60px"><span style="color:#fff"><span style="font-family:roboto"><b>Базовый курс монтажа</b></span></span></span>',
				sub_title:'<p><span style="color:#fff"><span style="font-size:24px"><span style="font-family:roboto">Вы освоите Davinchi Resolve Studio и разберётесь в правилах монтажа. Мы научим работать с цветом и звуком. Вы сможете создавать видео для себя или зарабатывать на них.</span></span></span><br></p>',
				form_title:'<p style="text-align:left"><b>Успейте записаться на курс</b></p>',
				form_sub_title:'<p style="text-align:left"><span style="font-size:12px"><span style="color:#000"><span style="font-family:roboto">ПО САМОЙ ПРИВЛЕКАТЕЛЬНОЙ ЦЕНЕ В ИНТЕРНЕТЕ</span></span></span></p>',
				form_text:'<p><span style="color:#434343">Нажимая на кнопку, Вы принимаете </span><a target="_blank" data-cke-saved-href="/personal-data-1/" href="/personal-data-1/"><span style="color:#434343">Положение</span></a><span style="color:#434343"> и </span><a target="_blank" data-cke-saved-href="/personal-data-2/" href="/personal-data-2/"><span style="color:#434343">Согласие</span></a><span style="color:#434343"> на обработку персональных данных.</span></p>',
				form1:[
					{type:'hidden',title:'Название формы',description:''},
					{type:'text',title:'Введите имя',description:'',required:1},
					{type:'email',title:'Введите email',description:'',required:1},
					{type:'btn',title:'Записаться сейчас',color:'#007ADD',action:'thanks',surround:3,style:1,url:'',amount:0}
				]
			}
		},
		{
			id:301,
			default:1,
			position:8100,
			title:'407. Контент-блок с текстом, кнопкой и изображением',
			description:'Возможность изменения размера изображения, анимации, дублирования секции.',
			default_values:{
				title:'<span style="font-size:42px"><b>Школа танцев Dance Academy</b></span>',
				sub_title:'<p><span style="font-size:22px">Открыт набор в группы для начинающих</span></p>',
				show_title:1,
				show_sub_title:1,
				width1170:1,
				bg:'#272727',
				padd_top:'135',
				padd_bottom:'135',
				hover_color:'#d01060'
			}
		},
		{
			id:301,
			default:0,
			position:8200,
			title:'408. Контент-блок с текстом, кнопкой и изображением',
			description:'Возможность изменения размера изображения, анимации, дублирование/удаление секции, скрытие кнопки.',
			default_values:{
				width1170:1,
				image_size:'700x500',
				show_title:1,
				show_sub_title:1,
				title:'<span style="font-size:42px"><b>Путешествие в горы Крыма</b></span>',
				sub_title:'<span style="font-family:roboto">Выберите свой невероятный тур по горам Крыма с нашим турагентством</span>',
				txt_h_limit:0,
				bg_text:0,
				arr1:[
					{
						image1:'section301_408_image1_new.jpg',
						alt1:'',
						form_html1:'Замените HTML',
						txt1:'<p><span style="color:#000"><span style="font-size:26px"><span style="font-family:roboto"><b>Гора Ай-Петри</b></span></span></span></p><p><br></p><p><span style="color:#000"><span style="font-size:18px"><span style="font-family:roboto">Гора Ай-Петри, пожалуй, одна из самых известных достопримечательностей Южного берега Крымского полуострова. Она хорошо видна из Ялты и ее пригорода - Большая Ялта. Ежегодно здесь бывают тысячи туристов, это пожалуй, одна из самых посещаемых достопримечательностей Крыма. Название- Ай-Петри, впервые появилось во времена расцвета Византии, примерно 1400 лет назад. Ай-Петри, с греческого, дословно означает Святой Петр. Высота самого крупного пика Ай-Петри составляет 1234 м., над уровнем моря. Ширина достигает 26 км, площадь составляет около 310 квадратных километров. На горе Ай-Петри около 4-х больших пещер, порядка 18 малых, 3- крупных водопада и с десяток водопадов, которые имеют сезонный характер и действуют только весной.</span></span></span></p>',
						btn1:{title:'Запланировать тур',color:'#6d9f30',surround:3,style:2,use_form:0},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'text',title:'Введите имя', description:'',required:1},
							{type:'phone',title:'Введите телефон',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#6d9f30',action:'thanks',surround:3,style:2,url:'',amount:0}
						]
					},
					{
						image1:'section301_408_image1_new.jpg',
						alt1:'',
						txt1:'<div><p><span style="font-size:26px"><b><span style="color:#000"><span style="font-family:roboto">Гора Аю-Даг</span></span></b></span></p><p><br></p><p><span style="font-size:18px"><span style="color:#000"><span style="font-family:roboto">На южном берегу Крыма, разделяя Большую Алушту и Большую Ялту, возвышается мощная гора Аю-Даг, или Медвежья гора. Это поистине удивительный природный памятник, сохранивший для потомков множество древних археологических артефактов. Уникальна гора и в геологическом отношении — она сложена из глубинной магматической породы габбро-диабаз, что само по себе нехарактерно для крымских гор. Причудливые «медвежьи» очертания Аю-Дага объясняются геологическим происхождением — по сути это несостоявшийся вулкан, магме которого не хватило «напора». Данные, связанные с ранней историей окрестностей горы, фрагментарны.</span></span></span></p></div>',
						form_html1:'Замените HTML',
						btn1:{title:'Запланировать тур',color:'#6d9f30',surround:3,style:2,use_form:0},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'text',title:'Введите имя', description:'',required:1},
							{type:'phone',title:'Введите телефон',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#6d9f30',action:'thanks',surround:3,style:2,url:'',amount:0}
						]
					}
				]
			}
		},
		{
			id:304,
			default:1,
			position:8300,
			title:'409. FAQ. Контент-блок со скрывающимся текстом и изображением',
			description:'Блок FAQ. Скрывающийся текст. Возможность установить изображение, изменить цвет переключателя',
			default_values:{}
		},
		{
			id:304,
			default:0,
			position:8400,
			title:'410. FAQ. Контент-блок со скрывающимся текстом',
			description:'Блок FAQ. Скрывающийся текст. Возможность установить изображение, изменить цвет переключателя',
			default_values:{show_image:0}
		},
		{
			id:321,
			default:1,
			position:8450,
			title:'411. Вкладки. Блок с переключаемыми вкладками текста',
			description:'Возможность добавить или удалить вкладки, включить иконки в заголовках',
			default_values:{}
		},
		{
			id:305,
			default:1,
			position:8500,
			title:'412. FAQ. Контент-блок со скрывающимся текстом в две колонки',
			description:'FAQ. Скрывающийся текст в две колонки с возможностью смены фона, цвета переключателя и установки изображений',
			default_values:{}
		},
		{
			id:305,
			default:0,
			position:8600,
			title:'413. FAQ. Контент-блок со скрывающимся текстом и изображением в две колонки',
			description:'FAQ. Скрывающийся текст в две колонки с возможностью смены фона, цвета переключателя и установки изображений',
			default_values:{show_image:1}
		},
		{
			id:312,
			default:1,
			position:9100,
			title:'414. Контент-слайдер на всю ширину сетки',
			description:'Возможность загрузки собственного фото, добавления/удаления слайдов, вкл/выкл автопрокрутки',
			default_values:{
				bg:'#f2f2f2',
				show_title:0,
				show_sub_title:0,
				width1170:1,
				show_lay:0,
				padd_top:'120',
				padd_bottom:'120',
				arr1:[
					{
						title1:'<div><span style="color:#000"><span style="font-size:36px"><b><span style="font-family:roboto">Как выбрать курорт для пляжного отдыха</span></b></span></span></div>',
						descr1:'<span style="color:#000"><span style="font-size:18px"><span style="font-family:roboto">Даже беглый анализ курортов показывает, что самыми популярными, востребованными и распространенными являются песчаные пляжи, но можно найти и галечные и смешанные. Прелесть песчаных пляжей в том, что по ним приятно ходить, на них удобно загорать. Такие пляжи лучше всего подходят для отдыха с детьми, особенно, если вход в воду пологий, а дно у берега неглубокое. </span></span></span>',
						image1:'section312_414_image1_new.jpg',
						btn1:{title:'Подобрать путевку',color:'#bf7d52',surround:3,style:1},
						form_html1:'Замените HTML',
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'text',title:'Введите имя',description:'',required:1},
							{type:'phone',title:'Введите телефон',description:'',required:1},
							{type:'btn',title:'Подобрать путевку',color:'#bf7d52',action:'thanks',surround:3,style:1,url:'',amount:0}
						]
					}
				]
			}
		},
		{
			id:312,
			default:0,
			position:9150,
			title:'415. Контент-слайдер на всю ширину сайта',
			description:'Возможность загрузки собственного фото, добавления/удаления слайдов, вкл/выкл автопрокрутки.',
			default_values:{
				bg:'#f2f2f2',
				show_btn:0,
				show_title:0,
				show_sub_title:0,
				width1170:1,
				padd_top:'120',
				padd_bottom:'120',
				arr1:[
					{
						title1:'<div><span style="color:#fff"><span style="font-size:36px"><b><span style="font-family:roboto">Новая Toyota GR Supra уже в России</span></b></span></span></div>',
						descr1:'<p><span style="font-size:18px"><span style="font-family:roboto">Создавая пятое поколение Toyota Supra с чистого листа, дизайнеры и инженеры Toyota черпали вдохновение в богатых традициях спортивных моделей компании. С первого взгляда в чертах нового спорткара угадываются отсылки не только к Supra предыдущих поколений, но и к легендарной Toyota 2000GT, которую часто называют первым суперкаром Японии. Это и длинный приземистый капот, и компактные свесы, и характерный сдвоенный изгиб крыши.</span></span></p>',
						image1:'section312_415_image_new.jpg',
						btn1:{title:'Оставить заявку',color:'#000',surround:3,style:0},
						form_html1:'Замените HTML',
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'text',title:'Введите имя',description:'',required:1},
							{type:'phone',title:'Введите телефон',description:'',required:1},
							{type:'btn',title:'Заказать',color:'#000',action:'thanks',surround:3,style:0,url:'',amount:0}
						]
					}
				]
			}
		},
		{
			id:151,
			default:1,
			position:9200,
			title:'416. Блок-контент с 4-мя фотографиями и подписями в ряд',
			description:'Возможность отключить текст, сменить фон и превратить статичный блок в слайдер',
			default_values:{
				title:'<b>Сотрудники нашей компании</b>',
				sub_title:'Специалисты, на практике доказавшие свой профессионализм',
				padd_top:'120',
				padd_bottom:'120'
			}
		},
		{
			id:126,
			default:1,
			position:9300,
			title:'417. Блок-контент с высоким изображением, текстом и кнопкой',
			description:'Возможность изменить размер изображения, отключить тексты, кнопку и использовать слайдер',
			default_values:{
				like_slider:0,
				auto_slide:1,
				show_title:1,
				show_sm_title:0,
				show_price_descr:0,
				image_size:'900x1200',
				padd_top:'120',
				padd_bottom:'120',
				title:'<span style="font-size:42px"><b>Комплексный детейлинг</b></span>',
				sub_title:'<span style="font-size:24px">Профессиональный уход за кузовом,<br>салоном, подкапотным пространством и днищем</span>',
				arr1:[
					{
						image1:'section126_417_image_new.jpg',
						image2:'section126_417_image_new.jpg',
						image3:'section126_417_image_new.jpg',
						image4:'section126_417_image_new.jpg',
						alt1:'',alt2:'',alt3:'',alt4:'',
						video1:'https://youtu.be/V56TUkuKCH4',
						form_html1:'Замените HTML',
						form_html2:'Замените HTML',
						txt1:'<p><span style="font-size:18px"><span style="font-family:roboto">Детейлинг — это то, что поможет сохранить ваш автомобиль в идеальном состоянии и продать его по цене выше среднерыночной. Комплекс услуг по уходу и защите за кузовом и салоном автомобиля, который предлагают детейлинг центры огромен. Здесь мы приведем самые распространенные проблемы, которые помогают решить мастера детейлинга.</span></span></p><p><br></p><p><span style="font-size:18px"><span style="font-family:roboto">Детейлинг означет, что каждому миллиметру вашего автомобиля уделят повышенное внимание. Сегодня детейлинг это не только мойка и полировка до выставочного блеска. Это уход, защита и реставрация автомобилей.</span></span></p><ul><li><span style="font-size:18px"><span style="font-family:roboto">Автомобиль после детейлинга выгодно отличается на дороге.</span></span></li><li><span style="font-size:18px"><span style="font-family:roboto">Автомобиль через 5 лет активного использования будет выглядеть как новый.</span></span></li><li><span style="font-size:18px"><span style="font-family:roboto">Автовладелец, который пользовался услугами детейлинг центра продаст свою машину дороже.</span></span></li></ul>',
						btn1:{title:'Узнать подробнее',color:'#C28129',surround:3,style:5},
						btn2:{title:'Оставить щаявку',color:'#C28129',surround:3,style:5},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'text',title:'Введите имя',description:'',required:1},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#C28129',action:'thanks',surround:3,style:5,url:'',amount:0}
						],
						form2:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'text',title:'Введите имя',description:'',required:1},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#C28129',action:'thanks',surround:3,style:5,url:'',amount:0}
						]
					}
				]
			}
		},
		{
			id:149,
			default:1,
			position:9400,
			title:'418. Контент-слайдер с изображением и описанием',
			description:'Возможность вкл/выкл слайдера, автопрокрутка, добавления и удаления слайдов, анимации.',
			default_values:{
				width1170:1,
				padd_top:'80',
				padd_bottom:'80',
				show_title:1,
				show_sub_title:1,
				title:'<span style="font-size:42px"><b>Как вкусно приготовить мясо</b></span>',
				sub_title:'<span style="font-size:24px">Делимся с вами вкусными рецептами мясных блюд</span>',
				arr1:[
					{
						image1:'section149_418_image1_new.jpg',
						image2:'section149_418_image2_new.jpg',
						image3:'section149_418_image3_new.jpg',
						alt1:'',alt2:'',alt3:'',
						video1:'https://youtu.be/V56TUkuKCH4',
						video2:'https://youtu.be/V56TUkuKCH4',
						video3:'https://youtu.be/V56TUkuKCH4',
						title1:'<span style="font-size:20px"><span style="font-family:roboto"><b>Жаркое из говядины с грибами</b></span></span>',
						title2:'<span style="font-size:20px"><span style="font-family:roboto"><b>Бифштекс из говядины</b></span></span>',
						title3:'<span style="font-size:20px"><span style="font-family:roboto"><b>Рубленый бифштекс</b></span></span>',
						subtitle1:'<p><span style="font-family:roboto"><span style="font-size:18px">Разогрейте духовку до 220 гр. Кожу рульки надрежьте в нескольких местах так, чтобы прорезать насквозь кожу и слой жира под ней, но не затронуть мясо.</span></span></p>',
						subtitle2:'<p><span style="font-family:roboto"><span style="font-size:18px">Классика английской кухни с нотками жареного шалфея! В компании с перепелиным яйцом на куске ржаного тоста телятина буквально заиграла как французский сэндвич.</span></span></p>',
						subtitle3:'<p><span style="font-family:roboto"><span style="font-size:18px">Бифштекс это как бы котлета, но ингредиентов в нем меньше и за счет рубленого мяса он выходит сочнее, мягче и нежнее. Плюс скорость в приготовлении!</span></span></p>'
					}
				]
			}
		},
		{
			id:160,
			default:1,
			position:9450,
			title:'419. Контент блок с текстом, кнопкой и слайдером изображений',
			description:'Возможность вкл/выкл слайдера, добавления своих изображений, анимации.',
			default_values:{hover_color:'#6d9f30'}
		},
		{
			id:166,
			default:1,
			position:9470,
			title:'420. Блок-контент со слайдером изображений',
			description:'Есть возможность автопрокрутки, добавления новых фото и отключения заголовков',
			default_values:{}
		},
		{
			id:149,
			default:0,
			position:9500,
			title:'421. Контент-слайдер с 3-мя колонками с изображением и описанием',
			description:'Возможность вкл/выкл слайдера, добавления своих изображений, анимации элементов.',
			default_values:{
				show_title:1,
				show_sub_title:1,
				width1170:1,
				bg_text:1,
				bg:'#f2f2f2',
				padd_top:'80',
				padd_bottom:'80',
				title:'<span style="font-size:42px"><span style="font-family:roboto"><b>Ремонт ванной</b></span></span>',
				sub_title:'<span style="font-family:roboto"><span style="font-size:24px">Выполняем ремонт и отделку любой сложности под ключ</span></span>',
				arr1:[
					{
						image1:'section149_241_image1_new.jpg',
						image2:'section149_241_image2_new.jpg',
						image3:'section149_241_image3_new.jpg',
						alt1:'',alt2:'',alt3:'',
						video1:'https://youtu.be/V56TUkuKCH4',
						video2:'https://youtu.be/V56TUkuKCH4',
						video3:'https://youtu.be/V56TUkuKCH4',
						title1:'<span style="font-family:roboto"><span style="font-size:24px">Услуги профессионалов</span></span>',
						title2:'<span style="font-family:roboto"><span style="font-size:24px">Дизайн под ключ</span></span>',
						title3:'<span style="font-family:roboto"><span style="font-size:24px">Оптимальные цены</span></span>',
						subtitle1:'<p><span style="font-family:roboto"><span style="font-size:18px">Профессионал может посоветовать подходящее дизайнерское решение для определенной комнаты. Сантехника подбирается под стилистику помещения.</span></span></p>',
						subtitle2:'<p><span style="font-family:roboto"><span style="font-size:18px">Можно заказать ремонт ванной комнаты под ключ с продуманной планировкой пространства. Грамотная расстановка сантехнических приборов позволит создать эргономичный дизайн.</span></span></p>',
						subtitle3:'<p><span style="font-family:roboto"><span style="font-size:18px">Стоимость ремонта ванной комнаты и туалета зависит от используемых материалов. Наши мастера помогут выбрать оптимальное количество отделочных материалов.</span></span></p>'
					}
				]
			}
		},
		{
			id:259,
			default:1,
			position:9505,
			title:'422. Блок с фоновым изображением, формой и иконками',
			description:'Возможность загружать свои изображения, изменение иконок',
			default_values:{}
		},
		{
			id:126,
			default:0,
			position:9510,
			title:'423. Контент-блок с большими изображением, текстом и кнопкой',
			description:'Возможность изменения размера изображения/видео, слайдер, вкл/выкл кнопки.',
			default_values:{
				show_title:0,
				show_sub_title:0,
				show_price_descr:0,
				width1170:1,
				align_center:1,
				padd_top:'80',
				padd_bottom:'80',
				image_size:'900x1200',
				arr1:[
					{
						image1:'section126_423_image_new.png',
						image2:'image_5015.jpg',
						image3:'image_223.jpg',
						image4:'image_224.jpg',
						alt1:'',alt2:'',alt3:'',alt4:'',
						video1:'https://youtu.be/V56TUkuKCH4',
						form_html1:'Замените HTML',
						form_html2:'Замените HTML',
						title1:'<div><span style="font-size:42px"><b><span style="font-family:roboto">Благородные стремления не спасут: младая поросль матереет</span></b></span></div>',
						txt1:'<p><span style="font-size:18px"><span style="font-family:roboto">Безусловно, глубокий уровень погружения, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для соответствующих условий активизации. Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: семантический разбор внешних противодействий однозначно определяет каждого участника как способного принимать собственные решения касаемо позиций, занимаемых участниками в отношении поставленных задач.</span></span></p>',
						btn1:{title:'Узнать подробнее',color:'#FF7685',surround:3,style:5,fsize:4},
						btn2:{title:'Нет, спасибо!',color:'#FF7685',surround:3,style:5,fsize:4},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'text',title:'Введите имя',description:'',required:1},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#FF7685',action:'thanks',surround:3,style:5,url:'',amount:0}
						],
						form2:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'text',title:'Введите имя',description:'',required:1},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#FF7685',action:'thanks',surround:3,style:5,url:'',amount:0}
						]
					}
				]
			}
		},
		{
			id:117,
			default:1,
			position:9515,
			title:'424. Изображение с заголовком и текстом на плашке',
			description:'Возможность изменения размера изображения/видео, анимация',
			default_values:{
				image_size:'840x1200',
				show_title:0,
				show_sub_title:0,
				width1170:1,
				bg_text:1,
				bg:'#f2f2f2',
				padd_top:'120',
				padd_bottom:'120'
			}
		},
		{
			id:226,
			default:0,
			position:9520,
			title:'425. Контент-блок с текстом и большим изображением',
			description:'Возможность изменения размера/расположения изображения/видео, анимации.',
			default_values:{
				image_size:'900x1200',
				show_title:0,
				show_sub_title:0,
				arr1:[
					{
						image1:'section226_425_image_new.jpg',
						alt1:'',
						video1:'https://youtu.be/V56TUkuKCH4',
						txt1:'<p><span style="font-size:36px"><span style="font-family:roboto"><b>Школа фотографии имени Василия Бакулина</b></span></span></p><p><br></p><p><span style="font-family:roboto"><span style="font-size:18px">Школа современной фотографии является одной из ведущих российских фотошкол, в которой ежегодно обучаются более тысячи студентов.</span></span></p><p><br></p><p><span style="font-family:roboto"><span style="font-size:18px">Курс "Основы фотографии" предназначен, в первую очередь, для начинающих фотографов, желающих найти подходящее место для дальнейшего обучения, определяющих для себя сферу и направление будущих занятий.</span></span></p><p><br></p><p><span style="font-family:roboto"><span style="font-size:18px">Помимо этого курс будет полезен всем, кто хочет получить большое количество полезного и сжатого материала в кратчайшие сроки. Если у вас есть вопросы по поводу своего фотоаппарата или нужен совет, какой фотоаппарат приобрести - мы ответим на ваши вопросы и поможем с выбором.</span></span></p>'
					}
				]
			}
		},
		{
			id:126,
			default:0,
			position:9525,
			title:'426. Блок контент с высокими изображениями, текстом и кнопкой',
			description:'Подсветка текущего изображения, плавная анимация переключения, возможность включения дополнительной кнопки',
			default_values:{
				show_price:1,
				show_price_descr:0,
				extra_images:1,
				light_current:1,
				align_center:1,
				width1170:1,
				show_title:0,
				show_sub_title:0,
				bg:'#f2f2f2',
				image_size:'900x1200',
				padd_top:'120',
				padd_bottom:'120',
				arr1:[
					{
						image1:'section126_426_image1_new.jpg',
						image2:'section126_426_image2_new.jpg',
						image3:'section126_426_image3_new.jpg',
						image4:'section126_426_image4_new.jpg',
						alt1:'',alt2:'',alt3:'',alt4:'',
						video1:'https://youtu.be/V56TUkuKCH4',
						form_html1:'Замените HTML',
						form_html2:'Замените HTML',
						title1:'<span style="font-size:42px"><span style="font-family:roboto"><b>Аренда студий для фотосессии</b></span></span>',
						txt1:'<p><span style="font-size:18px"><span style="font-family:roboto">Современный дизайн интерьера часто бывает миксом стилей, при этом одно направление будет дополнять другое — на таком принципе и создан зал Blanche. Марокканские колонны, навеянные духом Востока, гармонично вписывающиеся панно, матовая белая стена и фактура мрамора в комбинации с тактильными материалами сохраняет в зале выдержанный баланс. Зал отлично подойдет для создания лукбуков и портретов.</span></span></p><p><span style="font-size:18px"><span style="font-family:roboto">Фотографии на сайте могут не соответствовать действительности, актуальное наличие тех или иных предметов интерьера или целых зон уточняйте у администраторов студии.</span></span></p>',
						price1:'<span style="font-family:roboto"><span style="font-size:24px"><b>от 990 руб/час</b></span></span>',
						btn1:{title:'Забронировать студию',color:'#ed7a00',surround:3,style:5},
						btn2:{title:'Нет, спасибо!',color:'#ed7a00',style:5},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'text',title:'Введите имя',description:'',required:1},
							{type:'phone',title:'Введите телефон',description:'',required:1},
							{type:'btn',title:'Забронировать',color:'#ed7a00',action:'thanks',surround:3,style:5,url:'',amount:0}
						],
						form2:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'text',title:'Введите имя',description:'',required:1},
							{type:'phone',title:'Введите телефон',description:'',required:1},
							{type:'btn',title:'Забронировать',color:'#ed7a00',action:'thanks',surround:3,style:5,url:'',amount:0}
						]
					}
				]
			}
		},
		{
			id:126,
			default:0,
			position:9530,
			title:'427. Блок контент с большими изображением, текстом и таймером',
			description:'Возможность изменения размера изображения, включения видео и кнопок',
			default_values:{
				show_price_descr:0,
				show_title:0,
				show_sub_title:0,
				show_timer:1,
				show_btn:0,
				width1170:1,
				align_center:1,
				color:'#000',
				image_size:'900x900',
				padd_top:'135',
				padd_bottom:'135',
				arr1:[
					{
						image1:'section126_427_image1_new.jpg',
						image2:'image_3015.jpg',
						image3:'image_3017.jpg',
						image4:'image_3018.jpg',
						alt1:'',alt2:'',alt3:'',alt4:'',
						video1:'https://youtu.be/V56TUkuKCH4',
						form_html1:'Замените HTML',
						form_html2:'Замените HTML',
						title1:'<span style="font-size:42px"><span style="font-family:roboto"><b>Новый вебинар от академии "Лучи монетизации"</b></span></span>',
						txt1:'<span style="font-family:roboto"><span style="font-size:18px"><b>Ведущая вебинара:</b> Валерия Иванова, педагогический дизайнер, методист лаборатории мультимедийных коммуникаций. Член Ассоциации специалистов медиаобразования России.</span></span><div><span style="font-family:roboto"><br></span><div><span style="font-family:roboto"><span style="font-size:18px"><b>Продолжительность: </b>1 час. Количество мест ограничено!</span></span></div></div>',
						btn1:{title:'Оставить заявку',color:'#000',surround:3,style:3},
						btn2:{title:'Нет, спасибо!',color:'#000',style:3},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'text',title:'Введите имя',description:'',required:1},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#069',action:'thanks',surround:3,style:3,url:'',amount:0}
						],
						form2:[
							{type:'hidden',title:'Название формы',description:''},{type:'text',title:'Введите имя',description:'',required:1},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'phone',title:'Введите телефон',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#000',action:'thanks',surround:3,style:3,url:'',amount:0}
						]
					}
				]
			}
		},
		{
			id:334,
			default:1,
			position:9535,
			title:'428. Контент-слайдер на всю ширину сетки',
			description:'Возможность загрузки собственного фото, добавления слайдов, автопрокрутки, установка ссылки на изображение',
			default_values:{slide_border_radius:'10px'}
		},
		{
			id:1158,
			default:1,
			position:16301,
			title:'429. Три колонки текста с изображениями',
			description:'Возможность включить кнопку, добавить дополнительные изображения при наведении',
			default_values:{}
		},
		{
			id:1127,
			default:1,
			position:16302,
			title:'430. Контент-блок с большими изображением, текстом и кнопкой',
			description:'Возможность изменения размера изображения/видео, слайдер, вкл/выкл кнопки. Позиционирование.',
			default_values:{}
		},
		{
			id:1226,
			default:1,
			position:16303,
			title:'431. Контент-блок с текстом, изображениями и иконками',
			description:'Возможность изменения размера фото, установка видео, смена иконок и их цвета',
			default_values:{}
		},
		{
			id:1129,
			default:1,
			position:16304,
			title:'432. Блок с двумя изображениями и контентом',
			description:'Можно дублировать карточку с двумя фото и текстом, отключить кнопку, включить заголовки',
			default_values:{}
		},
		{
			id:1319,
			default:0,
			position:16305,
			title:'433. 3 колонки контента с изображениями и текстом',
			description:'Можно добавить карточек, изменить фон, размер фото',
			default_values:{
				bg:'#f2f2f2',
				image_size:'400x400',
				title:'<b>Обучение кадров — приоритетная задача</b>',
				sub_title:'Может показаться странным, но младая поросль матереет',
				arr1:[
					{
						image1:'section1319_434_image1_new.jpg',
						alt1:'',
						txt1:'<p><span style="font-family:roboto"><span style="font-size:18px">Идейные соображения высшего порядка, а также социально-экономическое развитие представляет собой интересный эксперимент проверки анализа существующих паттернов поведения.</span></span> <br></p>'
					},
					{
						image1:'section1319_434_image2_new.jpg',
						alt1:'',
						txt1:'<p><span style="font-size:18px"><span style="color:#808080"></span></span><span style="font-family:roboto"><span style="font-size:18px">Принимая во внимание показатели успешности, убеждённость некоторых оппонентов способствует подготовке и реализации направлений прогрессивного развития. Таким образом, консультация с широким активом играет важную роль.</span></span></p>'
					},
					{
						image1:'section1319_434_image3_new.jpg',
						alt1:'',
						txt1:'<p><span style="font-family:roboto"><span style="font-size:18px">Являясь всего лишь частью общей картины, базовые сценарии поведения пользователей, вне зависимости от их уровня, должны быть объявлены нарушающими общечеловеческие нормы этики и морали!</span></span></p>'
					}
				]
			}
		},
		{
			id:1127,
			default:0,
			position:16306,
			title:'434. Контент-блок с большими изображением, текстом и кнопкой',
			description:'Возможность изменения размера изображения, формы подложки, добавления второй кнопки',
			default_values:{
				image_size:'700x700',
				reverse:1,
				hover_color:'#273631',
				arr1:[
					{
						image1:'section1127_434_image_new.jpg',
						alt1:'',
						form_html1:'Замените HTML',
						form_html2:'Замените HTML',
						title1:'<b><span style="font-size:42px"><span style="font-family:roboto">Крымский велолагерь 2022</span></span></b>',
						txt1:'<p><span style="font-family:roboto"><span style="font-size:18px">Катание в стиле даунхилл на горном велосипеде по лучшим трейлам Крыма и горы Ай-Петри. Обучение с инструктором. Прокат велосипедов и услуги гида.</span></span></p>',
						btn1:{title:'Оставить заявку',color:'#273631',surround:3,style:17,fsize:4},
						btn2:{title:'Узнать подробнее',color:'#273631',style:17},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'text',title:'Введите имя',description:'',required:1},
							{type:'phone',title:'Введите телефон',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#273631',action:'thanks',surround:3,style:17,url:'',amount:0}
						],
						form2:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'text',title:'Введите имя',description:'',required:1},
							{type:'phone',title:'Введите телефон',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#273631',action:'thanks',surround:3,style:17,url:'',amount:0}
						]
					}
				]
			}
		},
		{
			id:1127,
			default:0,
			position:16307,
			title:'435. Контент-блок с большими изображением, текстом и кнопкой',
			description:'Возможность изменения размера изображения, формы подложки, добавления второй кнопки',
			default_values:{
				image_size:'700x700',
				reverse:0,
				bg:'#223b3a',
				opacity_col_color:'#4e5243',
				hover_color:'#A4A998',
				arr1:[
					{
						image1:'section1127_435_image_new.jpg',
						alt1:'',
						form_html1:'Замените HTML',
						form_html2:'Замените HTML',
						title1:'<b><span style="font-family:roboto"><span style="font-size:42px">Тур в Австралию с русским гидом</span></span></b>',
						txt1:'<p><span style="font-family:roboto"><span style="font-size:18px">Групповые и индивидуальные туры по Австралии с учетом всех Ваших пожеланий. Индивидуальный подход при планировании маршрута. Получите незабываемые впечатления на всю жизнь.</span></span></p>',
						btn1:{title:'Оставить заявку',color:'#A4A998',surround:3,style:17,fsize:4},
						btn2:{title:'Нет, спасибо!',color:'#A4A998',style:17,fsize:4},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'text',title:'Введите имя',description:'',required:1},
							{type:'phone',title:'Введите телефон',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#A4A998',action:'thanks',surround:3,style:17,url:'',amount:0}
						],
						form2:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'text',title:'Введите имя',description:'',required:1},
							{type:'phone',title:'Введите телефон',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#A4A998',action:'thanks',surround:3,style:17,url:'',amount:0}
						]
					}
				]
			}
		},
		{
			id:1127,
			default:0,
			position:16308,
			title:'436. Контент-блок с большими изображением, текстом и кнопкой',
			description:'Возможность изменения размера изображения, формы подложки, добавления второй кнопки',
			default_values:{
				image_size:'700x500',
				reverse:1,
				bg:'#e6e6e6',
				opacity_col_color:'#fff',
				posit_cont:'top_left_deep',
				arr1:[
					{
						image1:'section1127_436_image_new.jpg',
						alt1:'',
						form_html1:'Замените HTML',
						form_html2:'Замените HTML',
						title1:'<span style="font-size:42px"><span style="font-family:roboto"><b>Невероятное путешествие в Прибалтийский край</b></span></span>',
						txt1:'<p><span style="font-size:18px"><span style="font-family:roboto">В литературе и публицистике до 1917 года наряду с «остзейский» и «прибалтийский» к региону применялось и ещё одно собирательное понятие — Инфлянты. Так в Польше испокон веков называли территориальные образования Прибалтики, некогда бывшие под одной польско-литовской короной.</span></span></p>',
						btn1:{title:'Узнать подробнее',color:'#000',surround:3,style:17},
						btn2:{title:'Нет, спасибо!',color:'#000',style:17},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'text',title:'Введите имя',description:'',required:1},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#000',action:'thanks',surround:3,style:17,url:'',amount:0}
						],
						form2:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'text',title:'Введите имя',description:'',required:1},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#000',action:'thanks',surround:3,style:17,url:'',amount:0}
						]
					}
				]
			}
		},
		{
			id:1127,
			default:0,
			position:16309,
			title:'437. Контент-блок с изображением и текстом',
			description:'Изображение и текст делят равные части сетки. Можно изменить цвет и размер подложки, размеры фото',
			default_values:{
				image_size:'585x585',
				opacity_col_color:'#efefef',
				posit_cont:'50/50',
				show_btn:0,
				arr1:[
					{
						image1:'section1127_437_image_new.jpg',
						alt1:'',
						form_html1:'Замените HTML',
						form_html2:'Замените HTML',
						title1:'<b><span style="font-family:roboto"><span style="font-size:42px">Сосна желтая, или Пондероза Орегонская</span></span></b>',
						txt1:'<p><span style="font-family:roboto"><span style="font-size:18px">Растение, крупное дерево рода Сосна семейства Сосновые. В естественных условиях растёт в западных районах Северной Америки. Чешуйки шишек расположены по крутой спирали по 5—7 в ряд, если смотреть сбоку, отчётливо разделены друг от друга.</span></span></p>',
						btn1:{title:'Узнать подробнее',color:'#000',surround:3,style:17},
						btn2:{title:'Нет, спасибо!',color:'#000',style:17},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'text',title:'Введите имя',description:'',required:1},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#000',action:'thanks',surround:3,style:17,url:'',amount:0}
						],
						form2:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'text',title:'Введите имя',description:'',required:1},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#000',action:'thanks',surround:3,style:17,url:'',amount:0}
						]
					}
				]
			}
		},
		{
			id:1127,
			default:0,
			position:16310,
			title:'438. Контент-блок на всю высоту экрана',
			description:'Изображение и текст делят равные части сетки. Занимают всю высоту экрана. Можно изменить цвет и размер подложки, размеры фото',
			default_values:{
				image_size:'960x960',
				opacity_col_color:'#fff',
				posit_cont:'50/50',
				show_btn:0,
				reverse:1,
				use_decor_line:0,
				arr1:[
					{
						image1:'section1127_438_image_new.jpg',
						alt1:'',
						form_html1:'Замените HTML',
						form_html2:'Замените HTML',
						title1:'<p style="text-align:center"><b><span style="font-size:54px"><span style="font-family:roboto">Лучший галечный пляж для отдыха в Крыму</span></span></b></p>',
						txt1:'<p style="text-align:center"><span style="font-size:24px"><span style="font-family:roboto">Солнечный полуостров славится ласковым морем и прекрасными пляжами, среди которых каждый турист найдет те, что ему по душе. На южных курортах преобладает мелкая и средняя галька, на западных – мягкий песок, на восточном побережье они нередко смешиваются.</span></span></p>',
						btn1:{title:'Узнать подробнее',color:'#000',surround:3,style:17},
						btn2:{title:'Нет, спасибо!',color:'#000',style:17},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'text',title:'Введите имя',description:'',required:1},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#000',action:'thanks',surround:3,style:17,url:'',amount:0}
						],
						form2:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'text',title:'Введите имя',description:'',required:1},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#000',action:'thanks',surround:3,style:17,url:'',amount:0}
						]
					}
				]
			}
		},
		{
			id:1127,
			default:0,
			position:16311,
			title:'439. Контент-блок на всю сетку экрана',
			description:'Изображение и текст делят равные части сетки. Занимают всю сетку экрана. Можно изменить цвет и размер подложки, размеры фото',
			default_values:{
				image_size:'1170x600',
				bg:'#f2f2f2',
				use_decor_line:0,
				opacity_col_color:'#fff',
				reverse:1,
				arr1:[
					{
						image1:'section1127_439_image_new.jpg',
						alt1:'',
						form_html1:'Замените HTML',
						form_html2:'Замените HTML',
						title1:'<b><span style="font-size:36px">Прогулка в лето</span></b>',
						txt1:'<p><span style="font-family:roboto"><span style="font-size:18px">Сложно сказать, почему ключевые особенности структуры проекта призваны к ответу. Равным образом, консультация с широким активом обеспечивает актуальность своевременного выполнения сверхзадачи.</span></span></p>',
						btn1:{title:'Узнать подробнее',color:'#000',surround:3,style:17},
						btn2:{title:'Нет, спасибо!',color:'#000',style:17},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'text',title:'Введите имя',description:'',required:1},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#000',action:'thanks',surround:3,style:17,url:'',amount:0}
						],
						form2:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'text',title:'Введите имя',description:'',required:1},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#000',action:'thanks',surround:3,style:17,url:'',amount:0}
						]
					}
				]
			}
		},
		{
			id:3010,
			default:0,
			position:164010,
			title:'440. Контент-блок из трех высоких плиток',
			description:'Настройки фона, теней и скруглений. Гибкая сетка. Трансформируется в слайдер.',
			default_values:{
				bg:"#303030",
				show_title:0,
				show_sub_title:0,
				tiles_count: 3,
				tiles_bg:"#fafafa",
				tiles_radius:"0.35rem",
				tiles_content_valign:"space-between",
				btn_auto_width:0,
				btn_align:"flex-start",
				btn_fweight:"600",
				btn_size:"size-xl",
				img_grayscale:1,
				img_hover_grayscale:1,
				popup_form_title:"Научная работа предназначена только для ознакомления!",
				popup_form_text:'Нажимая на кнопку, Вы принимаете <a target="_blank" href="/personal-data-1/">Положение</a> и <a target="_blank" href="/personal-data-2/">Согласие</a> на обработку персональных данных.',
				popup_thanks_title:'Спасибо за заявку!',
				popup_thanks_text:'Заявка отправлена. Мы свяжемся с вами в ближайшее время.',
				arr1:[
					{
						date_time1:'<span style="font-size:72px"><span style="color:#D3D3D3"># 1</span></span>',
						title1:"<p>арт-терапия, как метод коррекции агрессивности младших школьников</p>",
						descr1:"<p>По данным исследователей в области психологии, можно говорить, что в последнее 10-летие увеличивается количество детей, которые отличаются повышенным беспокойством и эмоциональной неустойчивостью, вследствие чего проблема эмоциональных нарушений и своевременная ее коррекция, становится актуальной.</p>",
						image1:"f31bb392263883daa0f2834f74e79dba.jpg",
						alt1:'',
						link1:"Автор работы: Смирнова Полина Фёдоровна",
						btn1:{title:"Купить научную работу",color:"#7D2AEB",style:5,surround:3,hover_color:"#7D2AEB",radius:"0.35"},
						form1:[
							{type:"hidden",title:"Название формы",description:''},
							{type:"email",title:"Введите email",description:'',required:1},
							{type:"btn",title:"Купить работу",color:"#7D2AEB",action:"thanks",surround:3,style:5,url:'',amount:0,radius:"0.35"}
						],
						form_html1:"Замените HTML"
					},
					{
						date_time1:'<span style="font-size:72px"><span style="color:#D3D3D3"># 2</span></span>',
						title1:'взаимосвязь самоэффективности сотрудников организации с показателями успешности в профессиональной деятельности',
						descr1:'Если раньше сотрудники отбирались, в основном, по набору компетенций, определяемых конкретной рабочей позицией, то в настоящий момент этого недостаточно – знания устаревают слишком быстро.',
						image1:"0e17ef87ea6212e62c6d098b9362f173.jpg",
						alt1:'',
						link1:"Автор работы: Грачев Александр Артёмович",
						btn1:{title:"Купить научную работу",color:"#7D2AEB",style:5,surround:3,hover_color:"#7D2AEB",radius:"0.35"},
						form1:[
							{type:"hidden",title:"Название формы",description:''},
							{type:"email",title:"Введите email",description:'',required:1},
							{type:"btn",title:"Купить работу",color:"#7D2AEB",action:"thanks",surround:3,style:5,url:'',amount:0,radius:"0.35"}
						],
						form_html1:"Замените HTML"
					},
					{
						date_time1:'<span style="font-size:72px"><span style="color:#D3D3D3"># 3</span></span>',
						title1:"взаимосвязь копинг-стратегий с индивидуально-личностными особенностями у мужчин и женщин зрелого возраста",
						descr1:"Ответственность за свою жизнь, за ее успешность ложится на самого человека. Чтобы адаптироваться к такому напряжению, человеку необходимо приобрести такое свойство личности, которое позволило бы делать это эффективно.",
						image1:"0accafc4fe0f1d1bfeabd0201dc0efe7.jpg",
						alt1:'',
						link1:"Автор работы: Титова Эмилия Артёмовна",
						btn1:{title:"Купить научную работу",color:"#7D2AEB",style:5,surround:3,hover_color:"#7D2AEB",radius:"0.35"},
						form1:[
							{type:"hidden",title:"Название формы",description:''},
							{type:"email",title:"Введите email",description:'',required:1},
							{type:"btn",title:"Купить работу",color:"#7D2AEB",action:"thanks",surround:3,style:5,url:'',amount:0,radius:"0.35"}
						],
						form_html1:"Замените HTML"
					}
				]
			}
		},
		{
			id:3020,
			default:0,
			position:164011,
			title:'441. Контент-блок с иконками и изображением',
			description:'Настройки фона, теней и скруглений. Можно отключить изображение.',
			default_values:{}
		},
		{
			id:3020,
			default:0,
			position:164012,
			title:'442. Контент-блок с иконками и изображением',
			description:'Настройки фона, теней и скруглений. Можно отключить изображение.',
			default_values:{
				img_shadow:0,
				content_shadow:0,
				content_bg:'#000'
			}
		},
		{
			id:3030,
			default:0,
			position:164013,
			title:'443. Контент-блок с иконкой и изображением',
			description:'Настройки фона, теней и скруглений. Можно отключить изображение.',
			default_values:{}
		},
		{
			id:1600,
			default:1,
			position:160001,
			title:'451. Flexible контент из 4-х плиток и картинок',
			description:'Гибкий и полностью настраиваемый блок',
			default_values:{
				flexblocks:[{type:"text",content:"<p><strong>САМЫЕ ВЫСОКИЕ</strong></p>",style:{l:{top:0,left:0,width:315,color:'#966b26',topUnit:"px",leftUnit:"px",fontSize:"36",fontFamily:"Roboto",textAlign:"left",lineHeight:"1.3",widthUnit:"px",opacity:"1"},m:{},s:{fontSize:"30",width:265,widthUnit:"px"},xs:{fontSize:"28",width:250,widthUnit:"px"},xxs:{width:210,widthUnit:"px",fontSize:"24"}}},{type:"text",content:"<p><strong>ГОРЫ РОССИИ</strong></p>",style:{l:{top:0,left:328,width:260,color:"#0f2137",topUnit:"px",leftUnit:"px",fontSize:"36",fontFamily:"Roboto",textAlign:"left",lineHeight:"1.3",widthUnit:"px",opacity:"1"},m:{},s:{fontSize:"30",top:0,left:270.859,topUnit:"px",leftUnit:"px",width:215,widthUnit:"px"},xs:{fontSize:"28",top:30,left:0,topUnit:"px",leftUnit:"px",width:200,widthUnit:"px"},xxs:{top:30,left:0,topUnit:"px",leftUnit:"px",fontSize:"24"}}},{type:"figure",style:{l:{top:475,left:0,height:100,width:570,backgroundColor:"#ffffff",borderRadius:"10",shadowOpacity:"0.1",shadowBlur:"15",shadowSpread:"5",topUnit:"px",leftUnit:"px",widthUnit:"px",heightUnit:"px",invisible:0},m:{width:545,height:100,widthUnit:"px",heightUnit:"px"},s:{width:385,height:105,widthUnit:"px",heightUnit:"px",top:480,left:0,topUnit:"px",leftUnit:"px"},xs:{width:425,top:460,left:0,topUnit:"px",leftUnit:"px",height:125,widthUnit:"px",heightUnit:"px"},xxs:{top:604,left:0,topUnit:"px",leftUnit:"px",width:320,height:145,widthUnit:"px",heightUnit:"px"}}},{type:"figure",style:{l:{top:345,left:0,height:"100",width:570,backgroundColor:"#ffffff",topUnit:"px",leftUnit:"px",borderRadius:"10",shadowOpacity:"0.1",shadowBlur:"15",shadowSpread:"5",widthUnit:"px",heightUnit:"px",invisible:0},m:{width:545,height:100,widthUnit:"px",heightUnit:"px"},s:{width:385,height:110,widthUnit:"px",heightUnit:"px"},xs:{width:425,top:337,height:110,widthUnit:"px",heightUnit:"px"},xxs:{top:438,left:0,topUnit:"px",leftUnit:"px",width:320,height:130,widthUnit:"px",heightUnit:"px"}}},{type:"figure",style:{l:{top:215,left:0,height:100,width:570,backgroundColor:"#ffffff",topUnit:"px",leftUnit:"px",shadowOpacity:"0.1",shadowBlur:"15",shadowSpread:"5",borderRadius:"10",widthUnit:"px",heightUnit:"px",invisible:0},m:{width:545,height:100,widthUnit:"px",heightUnit:"px"},s:{width:385,height:110,widthUnit:"px",heightUnit:"px"},xs:{width:425,height:110,widthUnit:"px",heightUnit:"px",top:211},xxs:{top:256,left:0,topUnit:"px",leftUnit:"px",width:320,height:140,widthUnit:"px",heightUnit:"px"}}},{type:"figure",style:{l:{top:85,left:0,height:100,width:570,backgroundColor:"#ffffff",topUnit:"px",leftUnit:"px",borderRadius:"10",shadowOpacity:"0.1",shadowBlur:"15",shadowSpread:"5",widthUnit:"px",heightUnit:"px",invisible:0},m:{width:545,height:100,widthUnit:"px",heightUnit:"px"},s:{width:385,height:110,widthUnit:"px",heightUnit:"px"},xs:{width:425,height:125,widthUnit:"px",heightUnit:"px",top:73,left:0,topUnit:"px",leftUnit:"px"},xxs:{top:75,left:0,topUnit:"px",leftUnit:"px",width:320,height:140,widthUnit:"px",heightUnit:"px"}}},{type:"mdicon",icon:"svg-icon-number-four-in-circular-button",style:{l:{top:487,left:"13",fontSize:"36",color:"#675847",width:"40",height:"40",topUnit:"px",leftUnit:"px"},m:{},s:{},xs:{left:"10",top:470},xxs:{top:583,left:264.625,topUnit:"px",leftUnit:"px"}}},{type:"mdicon",icon:"svg-icon-number-three-in-a-circle",style:{l:{top:358,left:"13",fontSize:"36",color:"#675847",width:"40",height:"40",topUnit:"px",leftUnit:"px"},m:{},s:{},xs:{left:"10",top:347},xxs:{top:416,left:264.625,topUnit:"px",leftUnit:"px"}}},{type:"mdicon",icon:"svg-icon-number-two-in-a-circle",style:{l:{top:230,left:"13",fontSize:"36",color:"#675847",width:"40",height:"40",topUnit:"px",leftUnit:"px"},m:{},s:{},xs:{top:219,left:"10",topUnit:"px",leftUnit:"px"},xxs:{top:235,left:264.625,topUnit:"px",leftUnit:"px"}}},{type:"mdicon",icon:"svg-icon-number-one-in-a-circle",style:{l:{top:"100",left:"13",fontSize:"36",color:"#675847",width:"40",height:"40",topUnit:"px",leftUnit:"px"},m:{},s:{},xs:{top:84,left:10,topUnit:"px",leftUnit:"px"},xxs:{top:54,left:264.625,topUnit:"px",leftUnit:"px",width:"40",height:"40",widthUnit:"px",heightUnit:"px"}}},{type:"text",content:"<p><strong>АЛТАЙСКИЕ ГОРЫ</strong></p>",style:{l:{top:358,left:70,width:"450",color:"#0f2137",topUnit:"px",leftUnit:"px",fontSize:"20",fontFamily:"Roboto,sans-serif",textAlign:"left",lineHeight:"1.3",widthUnit:"px",opacity:"1"},m:{},s:{fontSize:"18",width:290,widthUnit:"px"},xs:{width:275,widthUnit:"px",top:347,left:57.703125,topUnit:"px",leftUnit:"px"},xxs:{top:452,left:98.875,topUnit:"px",leftUnit:"px",width:170,widthUnit:"px"}}},{type:"text",content:"<p><strong>КАВКАЗСКИЕ ГОРЫ</strong></p>",style:{l:{top:100,left:70,width:"450",color:"#0f2137",topUnit:"px",leftUnit:"px",fontSize:"20",fontFamily:"Roboto,sans-serif",textAlign:"left",lineHeight:"1.3",widthUnit:"px",opacity:"1"},m:{},s:{fontSize:"18",width:295,widthUnit:"px"},xs:{top:84,left:57.703125,topUnit:"px",leftUnit:"px",width:255,widthUnit:"px"},xxs:{top:87,left:98.875,topUnit:"px",leftUnit:"px",width:175,widthUnit:"px",fontSize:"18"}}},{type:"text",content:"<p><strong>КРЫМСКИЕ ГОРЫ</strong></p>",style:{l:{top:488,left:70,width:"450",color:"#0f2137",topUnit:"px",leftUnit:"px",fontSize:"20",fontFamily:"Roboto,sans-serif",textAlign:"left",lineHeight:"1.3",widthUnit:"px",opacity:"1"},m:{},s:{fontSize:"18",width:290,widthUnit:"px"},xs:{width:255,widthUnit:"px",top:470,left:57.703125,topUnit:"px",leftUnit:"px"},xxs:{top:619,left:98.875,topUnit:"px",leftUnit:"px",width:175,widthUnit:"px"}}},{type:"text",content:"<p><strong>УРАЛЬСКИЕ ГОРЫ</strong></p>",style:{l:{top:230,left:70,width:"450",color:"#0f2137",topUnit:"px",leftUnit:"px",fontSize:"20",fontFamily:"Roboto,sans-serif",textAlign:"left",lineHeight:"1.3",widthUnit:"px",opacity:"1"},m:{},s:{fontSize:"18",width:300,widthUnit:"px"},xs:{width:255,widthUnit:"px",left:57.703125,top:219,topUnit:"px",leftUnit:"px"},xxs:{top:270,left:98.875,topUnit:"px",leftUnit:"px",width:170,widthUnit:"px"}}},{type:"text",content:"<p>Несмотря на свой солидный возраст — примерно 23-28 миллионов лет, эти горы считаются самыми молодыми.</p>",style:{l:{top:130,left:70,width:450,color:"#0f2137",topUnit:"px",leftUnit:"px",fontSize:"16",fontFamily:"Roboto,sans-serif",textAlign:"left",lineHeight:"1.3",widthUnit:"px",opacity:"1"},m:{},s:{fontSize:"14",width:295,widthUnit:"px"},xs:{top:113,left:57.703125,topUnit:"px",leftUnit:"px",width:255,widthUnit:"px"},xxs:{top:119,left:98.875,topUnit:"px",leftUnit:"px",width:205,widthUnit:"px"}}},{type:"text",content:"<p>«Каменным поясом земли Русской» называют Уральские горы. Горная цепь протянулась на 2500 километров.</p>",style:{l:{top:260,left:70,width:"450",color:"#0f2137",topUnit:"px",leftUnit:"px",fontSize:"16",fontFamily:"Roboto,sans-serif",textAlign:"left",lineHeight:"1.3",widthUnit:"px",opacity:"1"},m:{},s:{fontSize:"14",width:300,widthUnit:"px"},xs:{top:249,left:57.703125,topUnit:"px",leftUnit:"px",width:255,widthUnit:"px"},xxs:{top:302,left:98.875,topUnit:"px",leftUnit:"px",width:205,widthUnit:"px"}}},{type:"text",content:"<p>Алтайские горы являются одними из самых древних. Они возникли около 500 миллионов лет назад.</p>",style:{l:{top:389,left:70,width:"450",color:"#0f2137",topUnit:"px",leftUnit:"px",fontSize:"16",fontFamily:"Roboto,sans-serif",textAlign:"left",lineHeight:"1.3",widthUnit:"px",opacity:"1"},m:{},s:{fontSize:"14",width:255,widthUnit:"px"},xs:{top:377,left:57.703125,topUnit:"px",leftUnit:"px",width:260,widthUnit:"px"},xxs:{top:484,left:98.875,topUnit:"px",leftUnit:"px",width:205,widthUnit:"px"}}},{type:"text",content:"<p>Большая горная гряда в 160 километров простирается от мыса святого Ильи в Феодосии до мыса Айя в Балаклаве.</p>",style:{l:{top:520,left:70,width:"450",color:"#0f2137",topUnit:"px",leftUnit:"px",fontSize:"16",fontFamily:"Roboto,sans-serif",textAlign:"left",lineHeight:"1.3",widthUnit:"px",opacity:"1"},m:{},s:{fontSize:"14",width:290,widthUnit:"px"},xs:{top:500,left:57.703125,topUnit:"px",leftUnit:"px",width:255,widthUnit:"px"},xxs:{top:652,left:98.875,topUnit:"px",leftUnit:"px",width:205,widthUnit:"px"}}},{type:"image",src:"sec1600_1_img1.jpg",link:"",style:{l:{top:85,left:848,height:225,width:320,topUnit:"px",leftUnit:"px",borderRadius:"10",shadowOpacity:"0.1",shadowBlur:"15",shadowSpread:"5",widthUnit:"px",heightUnit:"px"},m:{top:140,left:777.96875,topUnit:"px",leftUnit:"px",width:180,height:180,widthUnit:"px",heightUnit:"px"},s:{width:"140",height:"140",top:215,left:497.390625,topUnit:"px",leftUnit:"px"},xs:{top:219,left:324.625,topUnit:"px",leftUnit:"px",width:"90",height:"90"},xxs:{top:270,left:"13",topUnit:"px",leftUnit:"px",width:"75",height:"75"}}},{type:"image",src:"sec1600_1_img2.jpg",link:"",style:{l:{top:335,left:"943",height:"225",width:"225",topUnit:"px",leftUnit:"px",borderRadius:"10",shadowOpacity:"0.1",shadowBlur:"15",shadowSpread:"5",widthUnit:"px",heightUnit:"px"},m:{top:385,left:777.96875,topUnit:"px",leftUnit:"px",width:"180",height:"180"},s:{height:"140",width:"140",top:449,left:497.390625,topUnit:"px",leftUnit:"px"},xs:{top:470,left:324.625,topUnit:"px",leftUnit:"px",width:"90",height:"90"},xxs:{top:618,left:"13",topUnit:"px",leftUnit:"px",width:"75",height:"75"}}},{type:"image",src:"sec1600_1_img3.jpg",link:"",style:{l:{top:335,left:"600",height:"225",width:"320",topUnit:"px",leftUnit:"px",widthUnit:"px",heightUnit:"px",borderRadius:"10",shadowOpacity:"0.1",shadowBlur:"15",shadowSpread:"5"},m:{top:330,left:580.34375,topUnit:"px",leftUnit:"px",width:180,height:180,widthUnit:"px",heightUnit:"px"},s:{width:"140",height:"140",top:334,left:418.859375,topUnit:"px",leftUnit:"px"},xs:{top:347,left:325.328,topUnit:"px",leftUnit:"px",width:"90",height:"90"},xxs:{top:452,left:"13",topUnit:"px",leftUnit:"px",width:"75",height:"75"}}},{type:"image",src:"sec1600_1_img4.jpg",link:"",style:{l:{top:85,left:600,height:"225",width:"225",topUnit:"px",leftUnit:"px",borderRadius:"10",shadowOpacity:"0.1",shadowBlur:"15",shadowSpread:"5",widthUnit:"px",heightUnit:"px"},m:{width:180,height:180,widthUnit:"px",heightUnit:"px",top:85,left:580.34375,topUnit:"px",leftUnit:"px"},s:{top:85,left:418.859375,topUnit:"px",leftUnit:"px",width:140,height:140,widthUnit:"px",heightUnit:"px"},xs:{top:84,left:326.625,topUnit:"px",leftUnit:"px",width:90,height:90,widthUnit:"px",heightUnit:"px"},xxs:{top:87,left:13,topUnit:"px",leftUnit:"px",width:75,height:75,widthUnit:"px",heightUnit:"px"}}}],flexblock:{style:{l:{height:579},s:{height:596},xs:{height:591},xxs:{height:760}}}
			}
		},
		{
			id:1600,
			default:1,
			position:160002,
			title:'452. Flexible контент с изображениями',
			description:'Гибкий и полностью настраиваемый блок',
			default_values:{
				flexblocks:[{type:"text",content:"<p><strong>Благоустройство городских парков и питомников</strong></p>",style:{l:{top:"0",left:"20",width:"60",color:"#000",topUnit:"px",leftUnit:"%",fontSize:"42",fontFamily:"Montserrat",textAlign:"center",lineHeight:"1.3",widthUnit:"%",opacity:"1"},m:{width:"80",left:"10"},s:{width:"100",left:"0"},xs:{fontSize:"28",zIndex:1},xxs:{fontSize:"22"}}},{type:"image",src:"sec1600_2_img1.jpg",link:"",style:{l:{top:"150",left:0,height:"450",width:"1170",topUnit:"px",leftUnit:"px",widthUnit:"px",borderRadius:"15"},m:{width:"960"},s:{width:"640",borderRadius:"0"},xs:{width:"425",top:"100",zIndex:2},xxs:{width:"320",height:"320"}}},{type:"image",src:"sec1600_2_img2.png",link:"",style:{l:{top:"400",left:"225",height:"350",width:"350",topUnit:"px",leftUnit:"px",borderRadius:"15"},m:{left:"120"},s:{top:"600",left:0,topUnit:"px",leftUnit:"px",width:"320",height:"320",borderRadius:"0"},xs:{top:380,width:"250",height:"250",left:94.40625,topUnit:"px",leftUnit:"px",zIndex:6},xxs:{left:"0",width:"320",height:"320"}}},{type:"figure",style:{l:{top:"400",left:"595",height:"350",width:"350",backgroundColor:"#637523",topUnit:"px",leftUnit:"px",borderRadius:"15"},m:{left:"490"},s:{top:"600",left:"320",topUnit:"px",leftUnit:"px",width:"320",height:"320",borderRadius:"0"},xs:{top:"550",left:0,topUnit:"px",leftUnit:"px",width:425,height:395,zIndex:3,widthUnit:"px",heightUnit:"px"},xxs:{width:"320",height:"320",widthUnit:"px",heightUnit:"px",top:"700",left:0,topUnit:"px",leftUnit:"px"}}},{type:"text",content:"<p>Комплексные мероприятия ,направленные на создание гармоничного во всех отношениях пространства для отдыха горожан</p>",style:{l:{top:460,left:"630",width:285,color:"#fff",topUnit:"px",leftUnit:"px",fontSize:"18",fontFamily:"Montserrat",textAlign:"center",lineHeight:"1.5",widthUnit:"px",opacity:"1"},m:{left:525},s:{top:638,left:353.594,topUnit:"px",leftUnit:"px",width:260,widthUnit:"px"},xs:{top:678,left:"50",topUnit:"px",leftUnit:"px",width:"325",widthUnit:"px",zIndex:4},xxs:{top:732,left:"35",topUnit:"px",leftUnit:"px",width:"250"}}},{type:"btn",title:"ОСТАВИТЬ ЗАЯВКУ",style:{l:{backgroundColor:"#637523",borderRadius:"15",color:"#fff",fontFamily:"Montserrat",fontSize:"18",left:648,top:614,height:"50",width:"250",topUnit:"px",leftUnit:"px",borderColor:"#fff",borderWidth:"3",shadowColor:"",borderStyle:"solid",backgroundHoverColor:""},m:{left:542},s:{top:822,left:358.594,topUnit:"px",leftUnit:"px"},xs:{top:842,left:"90",topUnit:"px",leftUnit:"px",zIndex:5,width:"245"},xxs:{top:937,left:"50",topUnit:"px",leftUnit:"px",width:"220"}},action:"2",nameTitle:"Имя",emailTitle:"E-mail",nameUse:"1",emailUse:"1",phoneUse:"1",commentUse:0,link:"",formTitle:"Заказать сейчас",formBtnText:"Оставить заявку",phoneTitle:"Телефон",commentTitle:"",fileTitle:"",sendAction:"2",sendActionLink:"",sendActionPaymentAmount:"0",sendActionPaymentTitle:"",VKPixel:"",FBPixel:"",metricaEvent:""}],bg:"#f2f2f2",flexblock:{style:{l:{height:753},s:{height:922},xs:{height:949.66667},xxs:{height:1024}}}
			}
		},
		{
			id:1600,
			default:1,
			position:160003,
			title:'453. Flexible контент с изображениями',
			description:'Гибкий и полностью настраиваемый блок',
			default_values:{
				flexblocks:[{type:"image",src:"sec1600_3_img1.jpg",link:"",style:{l:{top:0,left:0,height:"390",width:"390",topUnit:"px",leftUnit:"px"},m:{width:"320",zIndex:1},s:{},xs:{width:"425",height:"250"},xxs:{width:"320"}}},{type:"image",src:"sec1600_3_img2.jpg",link:"",style:{l:{top:"0",left:"390",height:"390",width:390,topUnit:"px",leftUnit:"px",widthUnit:"px",heightUnit:"px"},m:{left:"320",width:"320",zIndex:2},s:{},xs:{top:"560",left:0,topUnit:"px",leftUnit:"px",width:"425",height:"250"},xxs:{width:"320"}}},{type:"image",src:"sec1600_3_img3.jpg",link:"",style:{l:{top:"150",left:"780",height:"500",width:390,topUnit:"px",leftUnit:"px",widthUnit:"px",heightUnit:"px"},m:{left:"640",width:"320",zIndex:3},s:{top:820,left:"0",topUnit:"px",leftUnit:"px",width:640,height:"240",widthUnit:"px",heightUnit:"px"},xs:{width:"425",height:"250",widthUnit:"px",heightUnit:"px",top:"1135",left:0,topUnit:"px",leftUnit:"px"},xxs:{width:"320"}}},{type:"figure",style:{l:{top:"390",left:0,height:335,width:390,backgroundColor:"#151515",topUnit:"px",leftUnit:"px",widthUnit:"px",heightUnit:"px"},m:{width:"320",zIndex:4},s:{height:"430"},xs:{top:"250",left:0,topUnit:"px",leftUnit:"px",width:425,height:310,widthUnit:"px",heightUnit:"px"},xxs:{width:"320"}}},{type:"figure",style:{l:{top:390,left:"390",height:410,width:390,backgroundColor:"white",topUnit:"px",leftUnit:"px",widthUnit:"px",heightUnit:"px"},m:{left:"320",width:320,height:430,widthUnit:"px",heightUnit:"px",zIndex:5},s:{},xs:{top:"810",left:0,topUnit:"px",leftUnit:"px",width:425,height:325,widthUnit:"px",heightUnit:"px"},xxs:{width:"320"}}},{type:"mdicon",icon:"svg-icon-binoculars",style:{l:{top:422,left:25,fontSize:64,color:"#ffffff",width:"80",height:"80.01",topUnit:"px",leftUnit:"px"},m:{zIndex:6},s:{},xs:{top:"290",left:"25",topUnit:"px",leftUnit:"px"},xxs:{}}},{type:"text",content:"<p>Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта</p>",style:{l:{top:532,left:25,width:335,color:"#ffffff",topUnit:"px",leftUnit:"px",fontSize:"20",fontFamily:"Ubuntu",textAlign:"left",lineHeight:"1.5",widthUnit:"px",opacity:"1"},m:{width:"275",zIndex:7},s:{},xs:{top:"390",width:370,widthUnit:"px"},xxs:{fontSize:"18",width:275,widthUnit:"px"}}},{type:"text",content:"<p>Методология разработки</p>",style:{l:{top:435,left:"415",width:"340",color:"#000",topUnit:"px",leftUnit:"px",fontSize:"36",fontFamily:"Times New Roman,Times,serif",textAlign:"left",lineHeight:"1.3",widthUnit:"px",opacity:"1"},m:{left:"350",width:"260",zIndex:8},s:{},xs:{top:835,left:"25",topUnit:"px",leftUnit:"px",width:"375",widthUnit:"px"},xxs:{fontSize:"24",width:230,widthUnit:"px",top:827}}},{type:"text",content:"<p>Значимость этих проблем настолько очевидна, что понимание сути ресурсосберегающих технологий представляет собой интересный эксперимент вывода текущих активов.</p>",style:{l:{top:535,left:"415",width:"340",color:"#000",topUnit:"px",leftUnit:"px",fontSize:"18",fontFamily:"Times New Roman,Times,serif",textAlign:"left",lineHeight:"1.5",widthUnit:"px",opacity:"1"},m:{left:"350",width:"260",zIndex:9},s:{},xs:{top:"940",left:"25",topUnit:"px",leftUnit:"px",width:"375"},xxs:{width:280,widthUnit:"px",top:900,lineHeight:"1.3"}}},{type:"btn",title:"ЧИТАТЬ ДАЛЕЕ",style:{l:{backgroundColor:"#151515",borderRadius:"0",color:"#ffffff",fontFamily:"Montserrat",fontSize:"16",left:"415",top:707,height:"50",width:"250",topUnit:"px",leftUnit:"px",backgroundHoverColor:"#313131"},m:{top:"740",left:"350",topUnit:"px",leftUnit:"px",zIndex:10},s:{},xs:{top:"1060",left:"25",topUnit:"px",leftUnit:"px"},xxs:{top:1067}},action:"2",nameTitle:"Имя",emailTitle:"E-mail",nameUse:"1",emailUse:"1",phoneUse:"1",commentUse:0,link:"",formTitle:"Заказать сейчас",formBtnText:"Заказать",phoneTitle:"Телефон",commentTitle:"",fileTitle:"",sendAction:"2",sendActionLink:"",sendActionPaymentAmount:"0",sendActionPaymentTitle:"",VKPixel:"",FBPixel:"",metricaEvent:""}],bg_image:"sec1600_3_bg.jpg",flexblock:{style:{l:{height:806},m:{height:821},s:{height:1064},xs:{height:1388}}}
			}
		},
		{
			id:1600,
			default:1,
			position:160004,
			title:'454. Flexible контент с большим изображением',
			description:'Гибкий и полностью настраиваемый блок',
			default_values:{
				flexblocks:[{type:"image",src:"sec1600_4_img2.jpg",link:"",style:{l:{top:-80,left:"585",height:1010,width:1000,topUnit:"px",leftUnit:"px",widthUnit:"px",heightUnit:"px",zIndex:1},m:{left:"480",width:"1000"},s:{top:-2,left:"700",topUnit:"px",leftUnit:"px",width:"100",height:"100",widthUnit:"px",heightUnit:"%",invisible:1},xs:{top:-5,left:450,topUnit:"px",leftUnit:"px",invisible:1,width:"100",height:"100",widthUnit:"px",heightUnit:"px"},xxs:{top:0,left:"400",topUnit:"px",leftUnit:"px",width:"100",height:"100",widthUnit:"px",heightUnit:"px"}}},{type:"text",content:"<p><strong>Качественные мотошлемы</strong></p>",style:{l:{top:425,left:"0",width:"450",color:"#fff",topUnit:"px",leftUnit:"px",fontSize:"48",fontFamily:"Montserrat",textAlign:"left",lineHeight:"1.3",widthUnit:"px",opacity:"1",zIndex:4},m:{},s:{top:109,left:"275",topUnit:"px",leftUnit:"px",width:350,widthUnit:"px",fontSize:"40"},xs:{width:420,widthUnit:"px",top:357,left:0,topUnit:"px",leftUnit:"px"},xxs:{width:"320",widthUnit:"px",top:"410",fontSize:"36"}}},{type:"text",content:"<p>Мотошлемы закрытые, открытые и другие виды в широком ассортименте с доставкой по России</p>",style:{l:{top:557,left:"0",width:"450",color:"#ffffff",topUnit:"px",leftUnit:"px",fontSize:"20",fontFamily:"Montserrat",textAlign:"left",lineHeight:"1.3",widthUnit:"px",opacity:"1",zIndex:5},m:{},s:{top:220,left:"275",topUnit:"px",leftUnit:"px",width:345,widthUnit:"px"},xs:{width:420,widthUnit:"px",top:476,left:0,topUnit:"px",leftUnit:"px"},xxs:{width:320,widthUnit:"px",top:511.01}}},{type:"image",src:"sec1600_4_img1.png",link:"",style:{l:{top:"0",left:333,height:"500",width:"500",topUnit:"px",leftUnit:"px",zIndex:6,shadowColor:"",shadowOpacity:"",shadowOfesetLeft:"0",shadowOfesetTop:"0",shadowBlur:"",shadowSpread:""},m:{left:"230"},s:{top:99,left:0,topUnit:"px",leftUnit:"px",width:"250",height:"250"},xs:{top:104},xxs:{width:"270",height:270,widthUnit:"px",heightUnit:"px",top:109,left:0,topUnit:"px",leftUnit:"px"}}},{type:"mdicon",icon:"svg-icon-helmet1",style:{l:{top:"0",left:0,fontSize:64,color:"#fff",width:"80",height:"80",zIndex:3,topUnit:"px",leftUnit:"px"},m:{},s:{top:0,left:"170",topUnit:"px",leftUnit:"px"},xs:{top:0,left:0,topUnit:"px",leftUnit:"px"},xxs:{}}},{type:"text",content:"<p>HELMET SHOP</p><p><br /></p><p>Лучшая экипировка</p>",style:{l:{top:"15",left:"90",width:170,color:"#fff",topUnit:"px",leftUnit:"px",fontSize:"16",fontFamily:"Ubuntu,sans-serif",textAlign:"left",lineHeight:"1",widthUnit:"px",opacity:"1",zIndex:7},m:{},s:{top:13,left:"275",topUnit:"px",leftUnit:"px",width:"275"},xs:{left:"90"},xxs:{}}}],bg:"#bc4027",flexblock:{style:{l:{height:850},s:{height:355},xs:{height:599},xxs:{height:652}}}
			}
		},
		{
			id:1600,
			default:1,
			position:160005,
			title:'455. Flexible контент с круглыми изображениями и текстом',
			description:'Гибкий и полностью настраиваемый блок',
			default_values:{
				flexblocks:[{type:"image",src:"sec1600_5_img1.jpg",link:"",style:{l:{top:0,left:100,height:"550",width:"550",topUnit:"px",leftUnit:"px",borderRadius:"50",borderRadiusUnit:"%"},m:{width:"420",height:"420",top:0,left:48,topUnit:"px",leftUnit:"px"},s:{width:"500",height:"500",left:"100"},xs:{width:400,height:"400",top:0,left:"12",topUnit:"px",leftUnit:"px",widthUnit:"px",heightUnit:"px"},xxs:{width:"320",height:"320",left:"0",zIndex:3,top:"0",topUnit:"px",leftUnit:"px"}}},{type:"image",src:"sec1600_5_img2.jpg",link:"",style:{l:{top:340,left:0,height:"300",width:"300",topUnit:"px",leftUnit:"px",borderRadius:"50",borderRadiusUnit:"%",borderColor:"#25291d",borderWidth:"10",borderStyle:"solid"},m:{width:"230",height:"230",top:280,left:0,topUnit:"px",leftUnit:"px"},s:{top:315,left:32,topUnit:"px",leftUnit:"px",width:"230",height:230,widthUnit:"px",heightUnit:"px"},xs:{left:"0"},xxs:{top:"270",left:0,topUnit:"px",leftUnit:"px",width:"150",height:"150",borderWidth:"8",zIndex:4}}},{type:"image",src:"sec1600_5_img3.jpg",link:"",style:{l:{top:513,left:254,height:"150",width:"150",topUnit:"px",leftUnit:"px",borderRadius:"50",borderRadiusUnit:"%",borderWidth:"10",borderColor:"#25291d",borderStyle:"solid"},m:{width:"120",height:"120",top:394,left:200.812,topUnit:"px",leftUnit:"px"},s:{top:433,left:231.062,topUnit:"px",leftUnit:"px"},xs:{top:363,left:204.515625,topUnit:"px",leftUnit:"px"},xxs:{borderWidth:"8",width:"150",height:"150",top:"270",left:"170",topUnit:"px",leftUnit:"px",zIndex:5}}},{type:"text",content:"<p><strong>Как правильно выбрать горный велосипед?</strong></p>",style:{l:{top:45,left:700,width:425,color:"#ffffff",topUnit:"px",leftUnit:"px",fontSize:"42",fontFamily:"Roboto",textAlign:"left",lineHeight:"1.3",widthUnit:"px",opacity:"1"},m:{top:0,left:"500",topUnit:"px",leftUnit:"px"},s:{top:563,left:0,topUnit:"px",leftUnit:"px",width:630,widthUnit:"px"},xs:{width:"100",widthUnit:"%"},xxs:{top:"440",zIndex:6,fontSize:"32"}}},{type:"text",content:"<p>Здесь нужно понимать, как вы хотите кататься – ведь дисциплин существует много, и сколько денег готовы потратить. Для начала не помешает ответить на следующие вопросы:</p><ul><li>Кто будет кататься?</li><li>Каков предполагаемый стиль катания?</li><li>Есть ли у райдера спортивные амбиции, или катание рассматривается как разновидность фитнеса?</li><li>Сколько денег вы готовы потратить?</li><li>Каков опыт катания и есть ли он вообще?</li></ul>",style:{l:{top:230,left:700,width:425,color:"#ffffff",topUnit:"px",leftUnit:"px",fontSize:"18",fontFamily:"Roboto",textAlign:"left",lineHeight:"1.5",widthUnit:"px",opacity:"1"},m:{top:175,left:"500",topUnit:"px",leftUnit:"px"},s:{top:677,left:0,topUnit:"px",leftUnit:"px",width:635,widthUnit:"px"},xs:{width:"100",widthUnit:"%",top:732},xxs:{top:574,left:0,topUnit:"px",leftUnit:"px",zIndex:7}}},{type:"btn",title:"НУЖНА КОНСУЛЬТАЦИЯ",style:{l:{backgroundColor:"#d3341d",borderRadius:"0",color:"#ffffff",fontFamily:"Roboto",fontSize:"16",left:700,top:580,height:"50",width:"250",topUnit:"px",leftUnit:"px",backgroundHoverColor:"#1e5863"},m:{top:"520",left:"500",topUnit:"px",leftUnit:"px"},s:{top:963,left:0,topUnit:"px",leftUnit:"px"},xs:{top:1078},xxs:{top:1076,left:0,topUnit:"px",leftUnit:"px",height:"40",heightUnit:"px",width:"100",widthUnit:"%",zIndex:8}},action:"2",nameTitle:"Имя",emailTitle:"E-mail",nameUse:"1",emailUse:"1",phoneUse:"1",commentUse:0,link:"",formTitle:"Заказать сейчас",formBtnText:"Заказать",phoneTitle:"Телефон",commentTitle:"",fileTitle:"",sendAction:"2",sendActionLink:"",sendActionPaymentAmount:"0",sendActionPaymentTitle:"",VKPixel:"",FBPixel:"",metricaEvent:""},{type:"figure",style:{l:{top:60,left:23,height:"100",width:"100",backgroundColor:"#d3341d",topUnit:"px",leftUnit:"px",borderRadius:"50",borderRadiusUnit:"%",opacity:"1"},m:{top:0,left:0,topUnit:"px",leftUnit:"px"},s:{},xs:{},xxs:{top:0,left:0,topUnit:"px",leftUnit:"px",zIndex:2}}},{type:"figure",style:{l:{top:550,left:440,height:"80",width:"80",backgroundColor:"#25291d",topUnit:"px",leftUnit:"px",borderWidth:"7",borderColor:"#d3341d",borderStyle:"solid",borderRadius:"50",borderRadiusUnit:"%"},m:{top:420,left:331.625,topUnit:"px",leftUnit:"px"},s:{top:435,left:529.390625,topUnit:"px",leftUnit:"px"},xs:{top:425,left:293.625,topUnit:"px",leftUnit:"px"},xxs:{top:0,left:237,topUnit:"px",leftUnit:"px",zIndex:1}}}],bg:"#25291d",flexblock:{style:{l:{height:667},m:{height:573},s:{height:1026},xs:{height:1142},xxs:{height:1117}}}
			}
		},
		{
			id:1600,
			default:1,
			position:160006,
			title:'456. Flexible контент с изображением и текстом',
			description:'Гибкий и полностью настраиваемый блок',
			default_values:{
				 flexblocks:[{type:"figure",style:{l:{top:"0",left:0,height:"600",width:100,backgroundColor:"#ffffff",widthUnit:"%",heightUnit:"px",topUnit:"px",leftUnit:"px"},m:{},s:{width:"100",height:"100",widthUnit:"%",heightUnit:"%"},xs:{width:"100",height:"100",widthUnit:"%",heightUnit:"%"},xxs:{width:"100",height:"100",widthUnit:"%",heightUnit:"%"}}},{type:"image",src:"sec1600_6_img1.jpg",link:"",style:{l:{top:"-60",left:"40",height:"620",width:"470",topUnit:"px",leftUnit:"px",widthUnit:"px",heightUnit:"px",borderRadius:"10",shadowColor:"#000",shadowOpacity:"0.2",shadowOfesetLeft:"7",shadowOfesetTop:"0",shadowSpread:"0",shadowBlur:"25"},m:{width:"400"},s:{width:"560"},xs:{width:"345",height:"400",top:"40"},xxs:{left:"20",width:"280",height:"320",top:"20"}}},{type:"text",content:"<p><strong>Гарантируем постоянный количественный рост </strong></p>",style:{l:{top:116,left:"570",width:"530",color:"#000",topUnit:"px",leftUnit:"px",fontSize:"42",fontFamily:"Roboto",textAlign:"left",lineHeight:"1.3",widthUnit:"px",opacity:"1"},m:{left:"500",width:415,widthUnit:"px",top:52},s:{top:587,left:"40",topUnit:"px",leftUnit:"px",width:"560"},xs:{width:"345.01",top:455,fontSize:"36"},xxs:{left:"20",width:"280",fontSize:"28",top:"360",topUnit:"px",leftUnit:"px"}}},{type:"text",content:"<p><em>Являясь всего лишь частью общей картины, акционеры крупнейших компаний представляют собой не что иное,как квинтэссенцию победы маркетинга над разумом и должны быть объективно рассмотрены соответствующими инстанциями.</em></p>",style:{l:{top:235,left:570,width:530,color:"#000",topUnit:"px",leftUnit:"px",fontSize:"16",fontFamily:"Roboto",textAlign:"left",lineHeight:"1.5",widthUnit:"px",opacity:"1"},m:{left:"500",width:415,widthUnit:"px",top:277},s:{top:707,left:"40",topUnit:"px",leftUnit:"px",width:"560"},xs:{width:"345.01",top:650},xxs:{top:515,left:"20",topUnit:"px",leftUnit:"px",width:"280"}}},{type:"btn",title:"Оставить заявку",style:{l:{backgroundColor:"#443d20",borderRadius:"0",color:"#ffffff",fontFamily:"Roboto",fontSize:"16",left:570,top:"355",height:"50",width:"200",topUnit:"px",leftUnit:"px"},m:{left:"500",top:433},s:{top:818,left:"40",topUnit:"px",leftUnit:"px"},xs:{top:833},xxs:{top:701,left:"20",topUnit:"px",leftUnit:"px",width:"280",widthUnit:"px"}},action:"2",nameTitle:"Имя",emailTitle:"E-mail",nameUse:"1",emailUse:"1",phoneUse:"1",commentUse:0,link:"",formTitle:"Заказать сейчас",formBtnText:"Заказать",phoneTitle:"Телефон",commentTitle:"",fileTitle:"",sendAction:"2",sendActionLink:"",sendActionPaymentAmount:"0",sendActionPaymentTitle:"",VKPixel:"",FBPixel:"",metricaEvent:""},{type:"text",content:"<p>Современные тенденции</p>",style:{l:{top:"370",left:792,width:225,color:"#727272",topUnit:"px",leftUnit:"px",fontSize:"14",fontFamily:"Roboto",textAlign:"left",lineHeight:"1.5",widthUnit:"px",opacity:"1"},m:{left:721,top:447},s:{top:832,left:256.062,topUnit:"px",leftUnit:"px"},xs:{width:200,widthUnit:"px",top:895,left:40.7031,topUnit:"px",leftUnit:"px"},xxs:{top:765,left:"20",topUnit:"px",leftUnit:"px",width:"280",textAlign:"center"}}} ],bg:"#8e8e54",flexblock:{style:{l:{height:600},s:{height:910},xs:{height:945},xxs:{height:820}}}
			}
		},
		{
			id:1600,
			default:1,
			position:160007,
			title:'457. Flexible контент с изображением и текстом',
			description:'Гибкий и полностью настраиваемый блок',
			default_values:{
				flexblocks:[{type:"image",lock:false,src:"ff4e3edf01ab9801aecb4920e79eaef8.jpg",link:"",style:{l:{top:0,left:445,height:1035,width:280,zIndex:null,topUnit:"px",leftUnit:"px",widthUnit:"px",heightUnit:"px",opacity:"0.8"},m:{left:"340"},s:{top:1,left:358,topUnit:"px",leftUnit:"px"},xs:{top:"0",left:0,topUnit:"px",leftUnit:"px",width:"425",shadowOpacity:"",opacity:"0.3"},xxs:{width:"320"}}},{type:"image",lock:false,src:"0314de6041efc97068a2c550455e8dc1.png",link:"",style:{l:{top:0,left:445,height:"170",width:"280",zIndex:10,topUnit:"px",leftUnit:"px"},m:{left:"340"},s:{top:0,left:358,topUnit:"px",leftUnit:"px"},xs:{top:215,left:73,topUnit:"px",leftUnit:"px"},xxs:{left:28}}},{type:"btn",lock:false,title:"Школа",style:{l:{backgroundColor:"",borderRadius:"5",color:"#212121",fontFamily:"Montserrat Alternates",fontSize:"18",left:"0",top:60,height:25,zIndex:10,width:"66",topUnit:"px",leftUnit:"px",fontWeight:"500",widthUnit:"px",heightUnit:"px",backgroundHoverColor:""},m:{},s:{},xs:{left:70},xxs:{left:25}},action:"1",nameTitle:"Имя",emailTitle:"E-mail",nameUse:"1",emailUse:"1",phoneUse:"1",commentUse:0,link:"/",formTitle:"Заказать сейчас",formBtnText:"Заказать",thanksTitle:"Спасибо",thanksText:"Сообщение успешно отправлено",phoneTitle:"Телефон",commentTitle:"",fileTitle:"",sendAction:"2",sendActionLink:"",sendActionPaymentAmount:"0",sendActionPaymentTitle:"",VKPixel:"",FBPixel:"",metricaEvent:""},{type:"btn",lock:false,title:"О нас",style:{l:{backgroundColor:"",borderRadius:"5",color:"#212121",fontFamily:"Montserrat Alternates",fontSize:"18",left:87,top:60,height:25,zIndex:10,width:65,topUnit:"px",leftUnit:"px",fontWeight:"500",widthUnit:"px",heightUnit:"px",backgroundHoverColor:""},m:{},s:{},xs:{left:157},xxs:{left:112}},action:"1",nameTitle:"Имя",emailTitle:"E-mail",nameUse:"1",emailUse:"1",phoneUse:"1",commentUse:0,link:"/",formTitle:"Заказать сейчас",formBtnText:"Заказать",thanksTitle:"Спасибо",thanksText:"Сообщение успешно отправлено",phoneTitle:"Телефон",commentTitle:"",fileTitle:"",sendAction:"2",sendActionLink:"",sendActionPaymentAmount:"0",sendActionPaymentTitle:"",VKPixel:"",FBPixel:"",metricaEvent:""},{type:"btn",lock:false,title:"Площадки",style:{l:{backgroundColor:"",borderRadius:"5",color:"#212121",fontFamily:"Montserrat Alternates",fontSize:"18",left:173,top:60,height:25,zIndex:10,width:105,topUnit:"px",leftUnit:"px",fontWeight:"500",widthUnit:"px",heightUnit:"px",backgroundHoverColor:""},m:{},s:{},xs:{left:243},xxs:{left:198}},action:"1",nameTitle:"Имя",emailTitle:"E-mail",nameUse:"1",emailUse:"1",phoneUse:"1",commentUse:0,link:"/",formTitle:"Заказать сейчас",formBtnText:"Заказать",thanksTitle:"Спасибо",thanksText:"Сообщение успешно отправлено",phoneTitle:"Телефон",commentTitle:"",fileTitle:"",sendAction:"2",sendActionLink:"",sendActionPaymentAmount:"0",sendActionPaymentTitle:"",VKPixel:"",FBPixel:"",metricaEvent:""},{type:"btn",lock:false,title:"Контакты",style:{l:{backgroundColor:"",borderRadius:"5",color:"#212121",fontFamily:"Montserrat Alternates",fontSize:"18",left:756,top:60,height:25,zIndex:10,width:115,topUnit:"px",leftUnit:"px",fontWeight:"500",widthUnit:"px",heightUnit:"px",backgroundHoverColor:""},m:{left:843},s:{top:97,left:123,topUnit:"px",leftUnit:"px"},xs:{left:215},xxs:{left:170}},action:"1",nameTitle:"Имя",emailTitle:"E-mail",nameUse:"1",emailUse:"1",phoneUse:"1",commentUse:0,link:"/",formTitle:"Заказать сейчас",formBtnText:"Заказать",thanksTitle:"Спасибо",thanksText:"Сообщение успешно отправлено",phoneTitle:"Телефон",commentTitle:"",fileTitle:"",sendAction:"2",sendActionLink:"",sendActionPaymentAmount:"0",sendActionPaymentTitle:"",VKPixel:"",FBPixel:"",metricaEvent:""},{type:"btn",lock:false,title:"События",style:{l:{backgroundColor:"",borderRadius:"5",color:"#212121",fontFamily:"Montserrat Alternates",fontSize:"18",left:299,top:60,height:25,zIndex:10,width:100,topUnit:"px",leftUnit:"px",fontWeight:"500",widthUnit:"px",heightUnit:"px",backgroundHoverColor:""},m:{top:60,left:721,topUnit:"px",leftUnit:"px"},s:{top:97,left:-3,topUnit:"px",leftUnit:"px"},xs:{left:89},xxs:{left:44}},action:"1",nameTitle:"Имя",emailTitle:"E-mail",nameUse:"1",emailUse:"1",phoneUse:"1",commentUse:0,link:"/",formTitle:"Заказать сейчас",formBtnText:"Заказать",thanksTitle:"Спасибо",thanksText:"Сообщение успешно отправлено",phoneTitle:"Телефон",commentTitle:"",fileTitle:"",sendAction:"2",sendActionLink:"",sendActionPaymentAmount:"0",sendActionPaymentTitle:"",VKPixel:"",FBPixel:"",metricaEvent:""},{type:"btn",lock:false,title:"Забронировать",style:{l:{backgroundColor:"#090444",borderRadius:"5",color:"#ffffff",fontFamily:"Montserrat Alternates",fontSize:"16",left:1013,top:57,height:30,zIndex:10,width:155,topUnit:"px",leftUnit:"px",widthUnit:"px",heightUnit:"px",fontWeight:"500",backgroundHoverColor:"#100778"},m:{top:107,left:803,topUnit:"px",leftUnit:"px"},s:{top:144,left:0,topUnit:"px",leftUnit:"px",width:190,height:40,widthUnit:"px",heightUnit:"px"},xs:{left:"120"},xxs:{left:75}},action:"2",nameTitle:"Имя",emailTitle:"E-mail",nameUse:"1",emailUse:"1",phoneUse:"1",commentUse:0,link:"",formTitle:"Заказать сейчас",formBtnText:"Заказать",thanksTitle:"Спасибо",thanksText:"Сообщение успешно отправлено",phoneTitle:"Телефон",commentTitle:"",fileTitle:"",sendAction:"2",sendActionLink:"",sendActionPaymentAmount:"0",sendActionPaymentTitle:"",VKPixel:"",FBPixel:"",metricaEvent:""},{type:"text",lock:false,content:"<p><em>Let's travel</em></p><p><em>together!</em></p>",style:{l:{top:"200",left:"0",width:1170,color:"#353535",topUnit:"px",leftUnit:"px",fontSize:"200",fontFamily:"Caveat",textAlign:"center",lineHeight:"1",widthUnit:"px",zIndex:10,opacity:"1",fontWeight:"900",rotate:"-10",borderColor:"#ffffff",textBorderWidth:"10"},m:{top:202,left:0,topUnit:"px",leftUnit:"px",width:960,widthUnit:"px"},s:{top:314,left:0,topUnit:"px",leftUnit:"px",width:330,widthUnit:"px",fontSize:"100",textAlign:"left"},xs:{top:459,left:-2,topUnit:"px",leftUnit:"px",width:425,widthUnit:"px",textAlign:"center"},xxs:{top:"500",left:-2,topUnit:"px",leftUnit:"px",width:320,widthUnit:"px",fontSize:"72"}}},{type:"image",lock:false,src:"8d36c814b95a701a0dbfe3529315bace.jpg",link:"",style:{l:{top:690,left:380,height:"345",width:345,zIndex:10,topUnit:"px",leftUnit:"px",widthUnit:"px",heightUnit:"px"},m:{},s:{top:691,left:358,topUnit:"px",leftUnit:"px",width:280,height:345,widthUnit:"px",heightUnit:"px"},xs:{top:681,left:838,topUnit:"px",leftUnit:"px",invisible:1},xxs:{}}},{type:"image",lock:false,src:"08aadc7e0d115853f195e75bbd23a010.jpg",link:"",style:{l:{top:690,left:770,height:"345",width:345,zIndex:10,topUnit:"px",leftUnit:"px",widthUnit:"px",heightUnit:"px"},m:{},s:{invisible:1,top:344,left:-482,topUnit:"px",leftUnit:"px"},xs:{},xxs:{}}},{type:"image",lock:false,src:"2698a23a2bf1b80a42c0bc2a32bb602b.jpg",link:"",style:{l:{top:"690",left:1170,height:"345",width:345,zIndex:10,topUnit:"px",leftUnit:"px",widthUnit:"px",heightUnit:"px"},m:{invisible:1},s:{top:691,left:-482,topUnit:"px",leftUnit:"px"},xs:{},xxs:{}}},{type:"text",lock:false,content:"<p>НАША МИССИЯ</p>",style:{l:{top:690,left:28,width:310,color:"#696969",topUnit:"px",leftUnit:"px",fontSize:"16",fontFamily:"Ubuntu,sans-serif",textAlign:"left",lineHeight:"1.5",widthUnit:"px",zIndex:10,opacity:"1",fontWeight:"400"},m:{},s:{},xs:{top:720},xxs:{top:720,left:28,topUnit:"px",leftUnit:"px",width:265,widthUnit:"px"}}},{type:"text",lock:false,content:"<p>Путешествие по точкам и получение незабываемого опыта</p>",style:{l:{top:736,left:28,width:310,color:"#212121",topUnit:"px",leftUnit:"px",fontSize:"24",fontFamily:"Montserrat Alternates",textAlign:"left",lineHeight:"1.35",widthUnit:"px",zIndex:10,opacity:"1",fontWeight:"600"},m:{},s:{},xs:{top:766},xxs:{top:766,left:28,topUnit:"px",leftUnit:"px",width:265,widthUnit:"px"}}},{type:"btn",lock:false,title:"С чего начать",style:{l:{backgroundColor:"#212121",borderRadius:"50",color:"#ffffff",fontFamily:"Montserrat Alternates",fontSize:"18",left:28,top:865,height:"40",zIndex:10,width:"200",topUnit:"px",leftUnit:"px",fontWeight:"500",borderRadiusUnit:"px"},m:{},s:{},xs:{top:895},xxs:{top:955}},action:"2",nameTitle:"Имя",emailTitle:"E-mail",nameUse:"1",emailUse:"1",phoneUse:"1",commentUse:0,link:"",formTitle:"Заказать сейчас",formBtnText:"Заказать",thanksTitle:"Спасибо",thanksText:"Сообщение успешно отправлено",phoneTitle:"Телефон",commentTitle:"",fileTitle:"",sendAction:"2",sendActionLink:"",sendActionPaymentAmount:"0",sendActionPaymentTitle:"",VKPixel:"",FBPixel:"",metricaEvent:""},{type:"text",lock:false,content:"<p>ЕСЛИ ТЫ НЕ ЗНАЕШЬ КУДА ИДЕШЬ,ЛЮБАЯ ДОРОГА ПОДОЙДЕТ</p>",style:{l:{top:151,left:0,width:380,color:"#696969",topUnit:"px",leftUnit:"px",fontSize:"16",fontFamily:"Montserrat",textAlign:"left",lineHeight:"1.5",widthUnit:"px",zIndex:10,opacity:"1",fontWeight:"600"},m:{},s:{top:233,left:0,topUnit:"px",leftUnit:"px",width:330,widthUnit:"px"},xs:{top:409,left:45,topUnit:"px",leftUnit:"px",textAlign:"center"},xxs:{left:0,top:409,topUnit:"px",leftUnit:"px",width:320,widthUnit:"px",fontSize:"14"}}},{type:"mdicon",lock:false,icon:"svg-icon-shooting-star-2",style:{l:{top:337,left:0,fontSize:"150",color:"#000",width:"150",height:"150",zIndex:10,topUnit:"px",leftUnit:"px",rotate:""},m:{top:452,left:0,topUnit:"px",leftUnit:"px",invisible:0},s:{top:132,left:-330,topUnit:"px",leftUnit:"px",invisible:1},xs:{},xxs:{}}},{type:"mdicon",lock:false,icon:"svg-icon-shooting-star-1",style:{l:{top:242,left:1018,fontSize:"150",color:"#000",width:"150",height:"150",zIndex:10,topUnit:"px",leftUnit:"px",rotate:"180"},m:{top:287,left:908,topUnit:"px",leftUnit:"px",invisible:0},s:{top:132,left:-482,topUnit:"px",leftUnit:"px",invisible:1},xs:{},xxs:{}}} ],bg_opacity:"0.75",move_to:"bottom",gradient_position:0,back_dark:1,bg_image:"ec3bef8944c5fd30275f616ecf3cd7f5.jpg",flexblock:{style:{l:{height:1037}}}
			}
		},
		{
			id:3040,
			default:0,
			position:30401,
			title:'458. Контент-блок с текстом, кнопками и изображением',
			description:'Настройки фона, теней и скруглений',
			default_values:{}
		},
		{
			id:1600,
			default:1,
			position:160008,
			title:'459. Flexible контент с изображением и текстом',
			description:'Гибкий и полностью настраиваемый блок',
			default_values:{
				flexblocks:[{type:"text",lock:false,content:"<p>ПУТЕШЕСТВИЕ В НЕИЗВЕСТНОСТЬ</p>",style:{l:{top:0,left:0,width:870,color:"#000000",topUnit:"px",leftUnit:"px",fontSize:"54",fontFamily:"PT Sans Narrow,sans-serif",textAlign:"left",lineHeight:"1.5",widthUnit:"px",zIndex:null,opacity:"1",fontWeight:"900"},m:{top:0,left:0,topUnit:"px",leftUnit:"px",width:710,widthUnit:"px"},s:{top:0,left:0,topUnit:"px",leftUnit:"px",width:640,widthUnit:"px",fontSize:"48"},xs:{top:0,left:0,topUnit:"px",leftUnit:"px",width:420,widthUnit:"px"},xxs:{top:0,left:0,topUnit:"px",leftUnit:"px",width:320,widthUnit:"px"}}},{type:"text",lock:false,content:"<p>Стремясь к самым невороятным вершинам</p>",style:{l:{top:85,left:0,width:870,color:"#565656",topUnit:"px",leftUnit:"px",fontSize:"20",fontFamily:"Montserrat,sans-serif",textAlign:"left",lineHeight:"1.5",widthUnit:"px",zIndex:10,opacity:"1",fontWeight:"400"},m:{top:85,left:0,topUnit:"px",leftUnit:"px",width:710,widthUnit:"px"},s:{top:75,left:0,topUnit:"px",leftUnit:"px",width:640,widthUnit:"px"},xs:{top:146,left:0,topUnit:"px",leftUnit:"px",width:420,widthUnit:"px"},xxs:{top:146,left:0,topUnit:"px",leftUnit:"px",width:320,widthUnit:"px",fontSize:"18"}}},{type:"image",lock:false,src:"ecb750dda9cc5eb86dfc88c47c627e21.jpg",link:"",style:{l:{top:150,left:0,height:"500",width:1170,zIndex:10,topUnit:"px",leftUnit:"px",widthUnit:"px",heightUnit:"px",borderRadius:"40"},m:{width:960,height:500,widthUnit:"px",heightUnit:"px",top:150,left:0,topUnit:"px",leftUnit:"px"},s:{width:640,height:485,widthUnit:"px",heightUnit:"px",top:185,left:0,topUnit:"px",leftUnit:"px"},xs:{width:"425",height:485,widthUnit:"px",heightUnit:"px",top:295,left:0,topUnit:"px",leftUnit:"px"},xxs:{width:320,height:485,widthUnit:"px",heightUnit:"px",top:295,left:0,topUnit:"px",leftUnit:"px"}}},{type:"btn",lock:false,title:"Узнать больше",style:{l:{backgroundColor:"#212121",borderRadius:"15",color:"#ffffff",fontFamily:"Montserrat,sans-serif",fontSize:"16",left:978,top:79,height:40,zIndex:10,width:190,topUnit:"px",leftUnit:"px",widthUnit:"px",heightUnit:"px",fontWeight:"500",backgroundHoverColor:"#353535"},m:{left:768},s:{left:0,top:118.5,topUnit:"px",leftUnit:"px"},xs:{top:218.75,left:0,topUnit:"px",leftUnit:"px"},xxs:{}},action:"2",nameTitle:"Имя",emailTitle:"E-mail",nameUse:"1",emailUse:"1",phoneUse:"1",commentUse:0,link:"",formTitle:"Заказать сейчас",formBtnText:"Заказать",thanksTitle:"Спасибо",thanksText:"Сообщение успешно отправлено",phoneTitle:"Телефон",commentTitle:"",fileTitle:"",sendAction:"2",sendActionLink:"",sendActionPaymentAmount:"0",sendActionPaymentTitle:"",VKPixel:"",FBPixel:"",metricaEvent:""},{type:"figure",lock:false,style:{l:{top:485,left:50,height:120,width:990,zIndex:10,backgroundColor:"#212121",topUnit:"px",leftUnit:"px",widthUnit:"px",heightUnit:"px",borderRadius:"25",borderColor:"#ffffff",borderWidth:"1",borderStyle:"solid",opacity:"0.8"},m:{width:785,height:120,widthUnit:"px",heightUnit:"px",top:485,left:50,topUnit:"px",leftUnit:"px"},s:{width:550,height:160,widthUnit:"px",heightUnit:"px",top:485,left:50,topUnit:"px",leftUnit:"px"},xs:{top:295,left:"0",topUnit:"px",leftUnit:"px",width:425,height:485,widthUnit:"px",heightUnit:"px",borderRadius:"40"},xxs:{width:320,height:485,widthUnit:"px",heightUnit:"px",top:295,left:0,topUnit:"px",leftUnit:"px"}}},{type:"figure",lock:false,style:{l:{top:475,left:85,height:24,width:"150",zIndex:10,backgroundColor:"#ffffff",borderColor:"#ffffff",opacity:"1",topUnit:"px",leftUnit:"px",borderRadius:"15",borderRadiusUnit:"px",widthUnit:"px",heightUnit:"px"},m:{},s:{},xs:{top:314,left:39.7031,topUnit:"px",leftUnit:"px"},xxs:{}}},{type:"text",lock:false,content:"<p>ДОСТУПНЫЕ ТУРЫ</p>",style:{l:{top:481.125,left:"85",width:150,color:"#000000",topUnit:"px",leftUnit:"px",fontSize:"12",fontFamily:"Montserrat,sans-serif",textAlign:"center",lineHeight:"1",widthUnit:"px",zIndex:10,opacity:"1",fontWeight:"600"},m:{},s:{},xs:{top:319.688,left:40.0547,topUnit:"px",leftUnit:"px"},xxs:{}}},{type:"text",lock:false,content:"<p>Горный Парк Рускеала</p>",style:{l:{top:515,left:85,width:860,color:"#ffffff",topUnit:"px",leftUnit:"px",fontSize:"16",fontFamily:"Montserrat,sans-serif",textAlign:"left",lineHeight:"1.5",widthUnit:"px",zIndex:10,opacity:"1",fontWeight:"600"},m:{top:515,left:85,topUnit:"px",leftUnit:"px",width:710,widthUnit:"px"},s:{top:515,left:85,topUnit:"px",leftUnit:"px",width:380,widthUnit:"px"},xs:{top:499,left:40,topUnit:"px",leftUnit:"px",width:335,widthUnit:"px"},xxs:{top:449,left:40,topUnit:"px",leftUnit:"px",width:245,widthUnit:"px"}}},{type:"text",lock:false,content:"<p>Одно из ярчайших и удивительных мест Северного Приладожья,ежегодно привлекающее сотни тысяч российских и зарубежных туристов</p>",style:{l:{top:541,left:"85",width:860,color:"#ffffff",topUnit:"px",leftUnit:"px",fontSize:"16",fontFamily:"Montserrat,sans-serif",textAlign:"left",lineHeight:"1.35",widthUnit:"px",zIndex:10,opacity:"1",fontWeight:"100"},m:{top:541,left:85,topUnit:"px",leftUnit:"px",width:710,widthUnit:"px"},s:{top:541,left:85,topUnit:"px",leftUnit:"px",width:380,widthUnit:"px"},xs:{top:529,left:40,topUnit:"px",leftUnit:"px",width:335,widthUnit:"px"},xxs:{top:479,left:40,topUnit:"px",leftUnit:"px",width:245,widthUnit:"px"}}},{type:"btn",lock:false,title:"&#8593;",style:{l:{backgroundColor:"#ffffff",borderRadius:"50",color:"#212121",fontFamily:"Montserrat,sans-serif",fontSize:"54",left:1070,top:515,height:"70",zIndex:10,width:"70",topUnit:"px",leftUnit:"px",lineHeight:"0.1",fontWeight:"500",rotate:"45",borderRadiusUnit:"%",backgroundHoverColor:"#fafafa",opacity:"1"},m:{left:863},s:{top:514,left:497.390625,topUnit:"px",leftUnit:"px"},xs:{top:636,left:39.7031,topUnit:"px",leftUnit:"px"},xxs:{}},action:"1",nameTitle:"Имя",emailTitle:"E-mail",nameUse:"1",emailUse:"1",phoneUse:"1",commentUse:0,link:"/",formTitle:"Заказать сейчас",formBtnText:"Заказать",thanksTitle:"Спасибо",thanksText:"Сообщение успешно отправлено",phoneTitle:"Телефон",commentTitle:"",fileTitle:"",sendAction:"2",sendActionLink:"",sendActionPaymentAmount:"0",sendActionPaymentTitle:"",VKPixel:"",FBPixel:"",metricaEvent:""} ],flexblock:{style:{l:{height:653},s:{height:670},xs:{height:781},xxs:{height:781}}}
			}
		}
	],
	group:[138, 132, 117, 250, 226, 154, 304, 305, 301, 312, 151, 126, 149, 118, 160, 166, 259, 334, 1127, 1129, 1319, 3010],
	deleted:[37, 36, 35, 34, 38, 32, 26, 49, 50, 17, 33, 40, 39, 150],
	widget:0
},
{
	name:'Слайдеры',
	icon:'fa fa-external-link',
	icon_new:'microscope-slides.svg',
	blocks:[
		{
			id:129,
			default:0,
			position:12000,
			title:'1800. Слайдер. Изображения с заголовками и текстами',
			description:'Возможность добавить общие заголовки, кнопки и цены, сменить фон',
			default_values:{
				bg:'#fff',
				show_title1:1,
				show_title:0,
				show_sub_title:0,
				bg_text:0,
				show_btn:0,
				show_price:0,
				width1170:1,
				padd_top:'80',
				padd_bottom:'80'
			}
		},
		{
			id:312,
			default:0,
			position:12001,
			title:'1801. Контент-слайдер на всю ширину сетки',
			description:'Загрузка фото, автопрокрутка и удаление плашки под текстом',
			default_values:{
				show_text:1,
				show_lay:1,
				show_btn:1,
				bg:'#f2f2f2',
				padd_top:'80',
				padd_bottom:'80',
				show_title:0,
				show_sub_title:0,
				hover_color:'#5aaf4a',
				arr1:[
					{
						title1:'<span style="font-size:32px"><span style="font-family:roboto"><b><span style="color:#FFF">Свежий воздух и невероятные виды</span></b></span></span>',
						descr1:'<p><span style="font-size:17px"><span style="font-family:roboto">По дороге из Санкт-Морица в Лугано можно посетить следующие достопримечательности:</span></span></p><ul><li><span style="font-size:17px"><span style="font-family:roboto">посетить Ретийскую железную дорогу – объект всемирного наследия ЮНЕСКО</span></span></li><li><span style="font-size:17px"><span style="font-family:roboto">увидеть старейшую роспись свода церкви Св. Мартина в Циллисе</span></span></li><li><span style="font-size:17px"><span style="font-family:roboto">совершить обзорную экскурсию по замкам Беллинцоны</span></span></li><li><span style="font-size:17px"><span style="font-family:roboto">погулять по старому городу Локарно</span></span></li><li><span style="font-size:17px"><span style="font-family:roboto">изучить культурное наследие Лугано</span></span></li></ul>',
						image1:'section312_1801_bg_1.jpg',
						btn1:{title:'Хочу поехать!',color:'#5aaf4a',surround:3,style:0},
						form_html1:'Замените HTML',
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'text',title:'Введите имя',description:'',required:1},
							{type:'phone',title:'Введите телефон',description:'',required:1},
							{type:'btn',title:'Записаться на тур',color:'#5aaf4a',action:'thanks',surround:3,style:17,url:'',amount:0}
						]
					},
					{
						title1:'<div><span style="font-size:32px"><b><span style="font-family:roboto">Путешествие в горы Швейцарии</span></b></span></div>',
						descr1:'<p><span style="font-size:17px"><span style="font-family:roboto">Маршрут проходит через четыре языковых региона и пять альпийских перевалов, вдоль кристально чистых озер и величественных гор. </span><span style="font-family:roboto">Путешественники передвигаются на автомобиле и могут проехать весь маршрут целиком или же только отдельные его участки.</span></span></p><p><span style="font-size:17px"><span style="font-family:roboto">В Лугано гостей приятно поразит приятный средиземноморский климат, а также обилие исторических памятников, с которыми можно ознакомиться во время обзорной экскурсии.</span></span></p>',
						image1:'section312_1801_bg_2.jpg',
						btn1:{title:'Хочу поехать!',color:'#5aaf4a',surround:3,style:0},
						form_html1:'Замените HTML',
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'text',title:'Введите имя',description:'',required:1},
							{type:'phone',title:'Введите телефон',description:'',required:1},
							{type:'btn',title:'Записаться на тур',color:'#5aaf4a',action:'thanks',surround:3,style:17,url:'',amount:0}
						]
					}
				]
			}
		},
		{
			id:151,
			default:0,
			position:12002,
			title:'1802. Слайдер из 4-х портретных изображений',
			description:'Есть возможность загрузки изображений и изменения текста',
			default_values:{
				title:'<b>Наши лучшие инструкторы</b>',
				sub_title:'Команда, состоящая из настоящих профессионалов, знающих свое дело',
				like_slider:1,
				auto_slide:1,
				arr1:[
					{
						image1:'section151_1802_bg_1.jpg',
						image2:'section151_1802_bg_2.jpg',
						image3:'section151_1802_bg_3.jpg',
						image4:'section151_1802_bg_4.jpg',
						alt1:'',alt2:'',alt3:'',alt4:'',
						title1:'<b>Васильев Егор, 25 лет</b>',
						title2:'<b>Грачев Николай, 28 лет</b>',
						title3:'<b>Кондратьев Валерий, 27 лет</b>',
						title4:'<b>Сухарев Демид, 34 года</b>',
						subtitle1:'Тренер в свободной дисциплине. Больше 10 лет опыта. Даст начальные навыки управления.</span>',
						subtitle2:'<span style="font-size:17px">Детский тренер по мотокроссу. Знает все о питбайках и подборе экипировки.</span>',
						subtitle3:'<span style="font-size:17px">Кандидат в Мастера спорта по мотокроссу. Владелец собственной мото-мастерской.</span>',
						subtitle4:'<span style="font-size:17px">19 лет стажа на кроссовых мотоциклах. 11-ти кратный чемпион соревнований.</span>'
					}
				]
			}
		},
		{
			id:334,
			default:1,
			position:12003,
			title:'1803. Контент-слайдер',
			description:'Возможность загрузки собственного фото, добавления/удаления слайдов, вкл/выкл автопрокрутки, установка ссылки на изображение.',
			default_values:{
				show_title:1,
				show_sub_title:1,
				title:'<b><span style="font-size:42px"><span style="font-family:roboto">Спецтехника Сaterpillar</span></span></b>',
				sub_title:'<span style="font-size:24px"><span style="font-family:roboto">Вы непременно найдете бульдозер Cat®, который подходит для ваших нужд, среди моделей различной мощности, предназначенных для разнообразных работ: от горных разработок до отделочных операций</span></span>',
				inner_width940:0,
				show_overlay:0,
				bg:'#f2f2f2',
				padd_top:'120',
				padd_bottom:'120',
				arr1:[
					{image_box:{title:'',descr:'',alt:'',image:'section334_1803_bg_2.jpg',link:'',link_target:0}},
					{image_box:{title:'',descr:'',alt:'',image:'section334_1803_bg_1.jpg',link:'',link_target:0}}
				]
			}
		},
		{
			id:156,
			default:0,
			position:12004,
			title:'1804. Блок со слайдером фона и кнопкой',
			description:'Возможность загружать свои изображения и автопрокруткой слайда.',
			default_values:{
				dark:1,
				no_fontsize:1,
				dark:0,
				back_dark:1,
				opacity:0.4,
				show_btn_descr:0,
				opacity_color1:'#b26646',
				opacity_color2:'#452e21',
				title:'<span style="font-size:72px"><span style="font-family:montserrat"><b>Фотосессии на природе в Чебоксарах</b></span></span>',
				sub_title:'<span style="font-size:28px"><span style="font-family:montserrat">Этот вариант фотосессии на природе подходит для свободолюбивых, чувственных и романтичных натур. Получите красивые кадры по низкой цене!</span></span>',
				btn1:{title:'Записаться на фотосессию',color:'#aa9137',surround:3,style:5},
				arr1:[
					{image1:'section156_1804_bg_1.jpg'},
					{image1:'section156_1804_bg_2.jpg'}
				]
			}
		},
		{
			id:126,
			default:0,
			position:12005,
			title:'1805. Контент-слайдер с изображением и кнопкой',
			description:'Возможность вкл/выкл слайдера, автопрокрутка, добавления и удаления слайдов, анимации',
			default_values:{
				bg:'#f2f2f2',
				like_slider:1,
				auto_slide:1,
				show_title:1,
				show_sub_title:1,
				show_price:0,
				show_price_descr:0,
				image_size:'900x700',
				padd_top:'80',
				padd_bottom:'80',
				title:'<p><span style="font-family:roboto"><b><span style="font-size:42px">Двухкомнатная квартира для творческой пары</span></b></span></p>',
				sub_title:'<p><span style="font-family:roboto"><span style="font-size:20px">Светлая, но с яркими и даже темными акцентами, небольшая, но просторная, четко спланированная и при этом как будто слегка небрежная – так выглядит квартира, в которой живет пара музыкантов</span></span></p>',
				extra_images:1,
				width1170:1,
				arr1:[
					{
						image1:'section126_image1_1805_new.jpg',
						image2:'section126_image2_1805_new.jpg',
						image3:'section126_image3_1805_new.jpg',
						image4:'section126_image4_1805_new.jpg',
						alt1:'',alt2:'',alt3:'',alt4:'',
						form_html1:'Замените HTML',
						form_html2:'Замените HTML',
						title1:'<span style="font-size:26px"><b><span style="font-family:roboto">Дизайн // КУХНЯ</span></b></span>',
						txt1:'<span style="color:#000"><span style="font-size:18px"><span style="font-family:roboto">В небольшой гостиной – минимум мебели: диван-кровать Сорренто, стеллаж для книг и нот Solana Порто, универсальные пуфы Валенсия, которые можно предложить гостям, а можно использовать как журнальный столик или подставку под ноги. Вместо телевизора – проектор: он не только экономит место, но и добавляет уюта.</span></span></span><div><br><span style="color:#000"><span style="font-size:18px"><span style="font-family:roboto">Помогают создать атмосферу и дизайнерские светильники в современном стиле, а торшер у пианино позволяет комфортно играть с приглушенным освещением. </span></span></span><span style="color:#000"><span style="font-size:18px"><span style="font-family:roboto">Благодаря шторам, подобранным в цвет стен, комната кажется светлее и просторнее.</span></span></span></div>',
						btn1:{title:'Заказать дизайн-проект',color:'#346fa1',surround:3,style:2},
						btn2:{title:'Нужна консультация',color:'#346fa1',surround:3,style:2},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'text',title:'Введите имя',description:'',required:1},
							{type:'phone',title:'Введите телефон',description:'',required:1},
							{type:'btn',title:'Заявка на дизайн-проект',color:'#346fa1',action:'thanks',surround:3,style:2,url:'',amount:0}
						],
						form2:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'text',title:'Введите имя',description:'',required:1},
							{type:'phone',title:'Введите телефон',description:'',required:1},
							{type:'btn',title:'Получить консультацию',color:'#346fa1',action:'thanks',surround:3,style:2,url:'',amount:0}
						]
					},
					{
						image1:'section126_image5_1805_new.jpg',
						image2:'section126_image6_1805_new.jpg',
						image3:'section126_image7_1805_new.jpg',
						image4:'section126_image8_1805_new.jpg',
						alt1:'',alt2:'',alt3:'',alt4:'',
						form_html1:'Замените HTML',
						form_html2:'Замените HTML',
						title1:'<span style="font-size:26px"><b><span style="font-family:roboto">Дизайн // КУХНЯ</span></b></span>',
						txt1:'<span style="font-size:18px"><span style="font-family:roboto">Для кухни был выбран гарнитур c шкафчиками приятного лососевого цвета, но при этом столешницы в цвет стеновых панелей – такое решение делает интерьер более цельным и гармоничным. </span></span><span style="font-family:roboto;font-size:18px">Особенность гарнитура – ультраматовое покрытие против отпечатков пальцев: так кухня выглядит стильно и не требует много усилий для поддержания порядка.</span><div><span style="font-size:18px"><span style="font-family:roboto"><br>Из-за расположения дверей обеденный стол было решено заменить барной стойкой и дополнить высокими стульями Kanzas, а также подвесными светильниками.</span></span></div>',
						btn1:{title:'Заказать дизайн-проект',color:'#933a33',surround:3,style:2},
						btn2:{title:'Нужна консультация',color:'#933a33',surround:3,style:2},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'text',title:'Введите имя',description:'',required:1},
							{type:'phone',title:'Введите телефон',description:'',required:1},
							{type:'btn',title:'Заявка на дизайн-проект',color:'#933a33',action:'thanks',surround:3,style:2,url:'',amount:0}
						],
						form2:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'text',title:'Введите имя',description:'',required:1},
							{type:'phone',title:'Введите телефон',description:'',required:1},
							{type:'btn',title:'Получить консультацию',color:'#933a33',action:'thanks',surround:3,style:2,url:'',amount:0}
						]
					}
				]
			}
		},
		{
			id:1156,
			default:0,
			position:12006,
			title:'1806. Блок со слайдером фона и кнопкой',
			description:'Возможность загружать свои изображения и автопрокруткой слайда.',
			default_values:{
				back_dark:0,
				dark:1,
				logo_use_text:0,
				logo_img:'tobiz_logo_def_white.png',
				animate_menu_new:'animate_menu3',
				arr1:[
					{
						image1:'section1156_1806_bg_1_new.jpg',
						title:'<p><span style="font-size:66px"><span style="font-family:prosto one,cursive"><b>Делаем крутые татуировки по вашим эскизам</b></span></span></p>',
						sub_title:'<p><span style="font-family:pt sans"><span style="font-size:36px"><span style="color:#fff">Только мастера с художественным образованием. Гарантия высокого уровня исполнения вашей работы!</span></span></span></p>',
						form_html1:'Замените HTML',
						btn1:{title:'Оставить заявку',color:'#069',surround:3,style:17},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'text',title:'Введите имя',description:'',required:1},
							{type:'phone',title:'Введите телефон',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#069',action:'thanks',surround:3,style:17,url:'',amount:0}
						]
					},
					{
						image1:'section1156_1806_bg_2_new.jpg',
						title:'<p><span style="font-family:prosto one,cursive"><span style="font-size:66px">Профессиональные дизайны татту от мастеров</span></span></p>',
						sub_title:'<p><span style="font-size:36px"><span style="font-family:pt sans"><span style="color:#fff">Наши профессиональные мастера подберут для вас стилистику и накидают примеры для идеального татту!</span></span></span></p>',
						form_html1:'Замените HTML',
						btn1:{title:'Оставить заявку',color:'#069',surround:3,style:17},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'text',title:'Введите имя',description:'',required:1},
							{type:'phone',title:'Введите телефон',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#069',action:'thanks',surround:3,style:17,url:'',amount:0}
						]
					}
				]
			}
		},
		{
			id:312,
			default:0,
			position:12007,
			title:'1807. Контент-слайдер на всю ширину сайта',
			description:'Возможность загрузки собственного фото, добавления/удаления слайдов, вкл/выкл автопрокрутки.',
			default_values:{
				bg:'#000',
				show_text:1,
				show_lay:0,
				show_btn:0,
				show_title:0,
				show_sub_title:0,
				padd_top:'120',
				padd_bottom:'120',
				arr1:[
					{
						title1:'<span style="font-family:montserrat"><span style="font-size:36px"><b><span style="color:#fff">Встречайте новый Ducati SuperSport S</span></b></span></span>',
						descr1:'<p><span style="font-family:montserrat"><span style="font-size:18px">Эта модель пришла на замену снятому с производства SuperSport S. Мотоцикл полностью переработан и теперь больше похож на старших братьев в модельной линейке городских мотоциклов, одновременно обладая очень малым весом и запасом хода на баке порядка 500 км. </span></span><span style="font-size:18px;font-family:montserrat">В основе Ducati SuperSport S лежит бодрый мотор с жидкостным охладителем и одним цилиндром sohc объемом 125 куб. см, мощностью 13 л.с.</span></p>',
						image1:'section312_1807_bg_1.jpg',
						form_html1:'Замените HTML',
						btn1:{title:'Оставить заявку',color:'#069',surround:3,style:17},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'text',title:'Введите имя',description:'',required:1},
							{type:'phone',title:'Введите телефон',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#069',action:'thanks',surround:3,style:17,url:'',amount:0}
						]
					},
					{
						title1:'<b><span style="font-family:montserrat"><span style="font-size:36px">Ощущения от езды на байке</span></span></b>',
						descr1:'<p><span style="font-family:montserrat"><span style="font-size:18px">Поездка под дождем по улицам города показала, что подвеска SuperSport S идеально обрабатывает все неровности кроме больших ям. Помимо комфортной посадки и подвески, мотоцикл неплохо разгоняется за счет того, что весит всего 126 кг и позволяет с легкостью маневрировать в плотном городском потоке. </span></span><span style="font-family:montserrat"><span style="font-size:18px">Вдали от города маленькая хонда тоже прекрасно себя чувствует.</span></span></p>',
						image1:'section312_1807_bg_2.jpg',
						form_html1:'Замените HTML',
						btn1:{title:'Оставить заявку',color:'#069',surround:3,style:17},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'text',title:'Введите имя',description:'',required:1},
							{type:'phone',title:'Введите телефон',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#069',action:'thanks',surround:3,style:17,url:'',amount:0}
						]
					}
				]
			}
		},
		{
			id:129,
			default:0,
			position:12008,
			title:'1808. Слайдер-карточка товара с изображением',
			description:'Возможность добавления товаров и загрузки изображений',
			default_values:{
				bg:'#fff',
				show_title1:1,
				show_title:1,
				show_sub_title:1,
				bg_image:'section129_1808_bg.jpg',
				padd_top:'120',
				padd_bottom:'120',
				back_dark:1,
				opacity_color1:'#08251d',
				opacity_color2:'#0c5d5c',
				bg_opacity:0.5,
				title:'<div><span style="color:#fff"><span style="font-size:42px"><span style="font-family:roboto"><b>Скидка на корейскую косметику</b></span></span></span></div>',
				sub_title:'<span style="font-size:24px"><span style="font-family:roboto"><span style="color:#fff">До 15% скидка на весь ассортимент корейской косметики</span></span></span>',
				bg_text:1,
				arr1:[
					{
						image1:'section129_1808_item1.png',
						alt1:'',
						title1:'<p><span style="color:#000"><span style="font-size:24px"><span style="font-family:roboto"><b>Очищающий бальзам с маслом конопли DR.F5 Hempseed Mild Cleansing Balm</b></span></span></span></p>',
						txt1:'<p><span style="color:#000"><span style="font-size:17px"><span style="font-family:roboto">Очищающий бальзам с маслом конопли DR.F5 Hempseed Mild Cleansing Balm проникает глубоко в поры и эффективно удаляет все виды загрязнений, тональное и солнцезащитное средство. Растворяет комедоны и излишки кожного сала, мягко очищает и не пересушивает кожу. Содержит масло розмарина, нима и комплекс кислот.</span></span></span></p>',
						price1:'<span style="color:#999"><span style="font-size:18px"><s>1850 руб.</s></span></span><span style="color:#A9A9A9"><span style="font-size:18px"> </span></span><b>1650 руб.</b>',
						form_html1:'Замените HTML',
						btn1:{title:'Добавить в корзину',color:'#f94f24',surround:3,style:1,use_form:2},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'text',title:'Введите имя',description:'',required:1},
							{type:'phone',title:'Введите телефон',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#f94f24',action:'thanks',surround:3,style:1,url:'',amount:0}
						]
					},
					{
						image1:'section129_1808_item2.png',
						alt1:'',
						title1:'<span style="color:#000"><span style="font-size:24px"><b><span style="font-family:roboto">Ночная маска с пробиотиками и PHA-кислотой Manyo Bifida Biome Deep Sleeping Mas</span></b></span></span>',
						txt1:'<span style="color:#000"><span style="font-size:17px"><span style="font-family:roboto">Ночная маска с пробиотиками и PHA-кислотой Manyo Bifida Biome Deep Sleeping Mask питает и увлажняет, а также деликатно отшелушивает, не повреждая роговой слой. Средство выравнивает рельеф, разглаживает и смягчает. Содержит комплекс пробиотиков Bifida Biome™, ниацинамид, экстракты центеллы и ромашки, глюконолактон и керамиды. Подходит для чувствительной кожи.</span></span></span>',
						price1:'<span style="color:#999"><span style="font-size:18px"><s>1790 руб.</s></span></span><span style="color:#A9A9A9"><span style="font-size:18px"> </span></span><b>1510 руб.</b>',
						form_html1:'Замените HTML',
						btn1:{title:'Добавить в корзину',color:'#f94f24',surround:3,style:1,use_form:2},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'text',title:'Введите имя',description:'',required:1},
							{type:'phone',title:'Введите телефон',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#f94f24',action:'thanks',surround:3,style:1,url:'',amount:0}
						]
					}
				]
			}
		},
		{
			id:129,
			default:0,
			position:12009,
			title:'1809. Слайдер-карточка товара с изображением',
			description:'Возможность добавления товаров и загрузки изображений',
			default_values:{
				bg:'#f2f2f2',
				show_title1:1,
				show_title:0,
				show_sub_title:0,
				show_btn:0,
				padd_top:'120',
				padd_bottom:'120',
				bg_text:1,
				show_price:0,
				image_size:'900x700',
				arr1:[
					{
						image1:'section129_1808_image1.jpg',
						alt1:'',
						title1:'<span style="font-family:open sans"><span style="font-size:24px"><b>Инцидент не исчерпан: прототип — не панацея</b></span></span>',
						txt1:'<p><span style="font-family:open sans"><span style="font-size:16px">Таким образом, консультация с широким активом прекрасно подходит для реализации прогресса профессионального сообщества. Идейные соображения высшего порядка, а также убеждённость некоторых оппонентов, в своём классическом представлении, допускает внедрение укрепления моральных ценностей. Высокий уровень вовлечения представителей целевой аудитории.</span></span></p>',
						form_html1:'Замените HTML',
						btn1:{title:'Добавить в корзину',color:'#f94f24',surround:3,style:1,use_form:2},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'text',title:'Введите имя',description:'',required:1},
							{type:'phone',title:'Введите телефон',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#f94f24',action:'thanks',surround:3,style:1,url:'',amount:0}
						]
					},
					{
						image1:'section129_1808_image2.jpg',
						alt1:'',
						title1:'<b><span style="font-size:24px"><span style="font-family:open sans">Оказывается, был сорван доклад председателя совхоза</span></span></b>',
						txt1:'<p><span style="font-size:16px"><span style="font-family:open sans">Следует отметить, что высококачественный прототип будущего проекта обеспечивает широкому кругу (специалистов) участие в формировании дальнейших направлений развития. Господа, семантический разбор внешних противодействий создаёт предпосылки для экспериментов, поражающих по своей масштабности и грандиозности.</span></span><span style="color:var(--styles_text_color, #333);font-family:roboto;font-size:20px"></span></p>',
						price1:'<span style="color:#999"><span style="font-size:18px"><s>1790 руб.</s></span></span><span style="color:#A9A9A9"><span style="font-size:18px"> </span></span><b>1510 руб.</b>',
						form_html1:'Замените HTML',
						btn1:{title:'Добавить в корзину',color:'#f94f24',surround:3,style:1,use_form:2},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'text',title:'Введите имя',description:'',required:1},
							{type:'phone',title:'Введите телефон',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#f94f24',action:'thanks',surround:3,style:1,url:'',amount:0}
						]
					}
				]
			}
		},
		{
			id:3010,
			default:0,
			position:12010,
			title:'1810. Слайдер с гибкой сеткой',
			description:'Настройки фона, теней и скруглений. Гибкая сетка. Трансформируется в простой блок.',
			default_values:{
				bg:'#f5f5f5',
				title:'Лучшие преподаватели',
				sub_title:'Возьмутся за ваше обучение в нашей школе',
				show_btns:0,
				tiles_bg:'#fff',
				tiles_shadow:'rgba(0,0,0,0.15) 1.95px 1.95px 2.6px',
				tiles_content_valign:'flex-start',
				slider_active:1,
				slider_color:'#ff8800',
				arr1:[
					{
						date_time1:'13:00-14:45',
						title1:'Преподаватель психологии',
						descr1:'Образование: высшее, АлтГУ. Специальность: Международные Отношения, Программа профессиональной переподготовки «Преподаватель»',
						image1:'5f18f4020fb293ba7fdf8164e70a76b6.jpg',
						alt1:'',
						link1:'Преподаватель: Павлова Ника Максимовна',
						btn1:{title:'Оставить заявку',color:'#000',style:5,surround:3},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Оставить заявку',color:'#000',action:'thanks',surround:3,style:5,url:'',amount:0}
						],
						form_html1:'Замените HTML'
					},
					{
						date_time1:'09:00-10:45',
						title1:'Преподаватель английского языка',
						descr1:'Образование: высшее, БГПУ, факультет иностранных языков. Специальность: Учитель английского и немецкого языков по специальности «Филология».',
						image1:'d5faf16f34954a89a6a0428bcb7ba0b4.jpg',
						alt1:'',
						link1:'Преподаватель: Волкова Арина Руслановна',
						btn1:{
							title:'Оставить заявку',
							color:'#000',
							style:5,
							surround:3
						},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Оставить заявку',color:'#000',action:'thanks',surround:3,style:5,url:'',amount:0}
						],
						form_html1:'Замените HTML'
					},
					{
						date_time1:'11:00-12:45',
						title1:'Преподаватель русского языка',
						descr1:'Образование: высшее, АлтГПУ, Лиин. Специальность: бакалавр «Лингвистика» Магистратура «Лингвистика и межкультурная коммуникация»',
						image1:'25e2c141263914f5d661eb8f221a232b.jpg',
						alt1:'',
						link1:'Преподаватель: Фомичева Вероника Камильевна',
						btn1:{title:'Оставить заявку',color:'#000',style:5,surround:3},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Оставить заявку',color:'#000',action:'thanks',surround:3,style:5,url:'',amount:0}
						],
						form_html1:'Замените HTML'
					},
					{
						date_time1:'13:00-14:45',
						title1:'Преподаватель английского языка',
						descr1:'Образование: Барнаульский государственный педагогический университет Специальность: Лингвист, преподаватель английского и немецкого языков.',
						image1:'298e02e1f3c9e23c8ae9ca58d9c67f31.jpg',
						alt1:'',
						link1:'Преподаватель: Любимова Анисия Робертовна',
						btn1:{title:'Оставить заявку',color:'#000',style:5,surround:3},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Оставить заявку',color:'#000',action:'thanks',surround:3,style:5,url:'',amount:0}
						],
						form_html1:'Замените HTML'
					}
				]
			}
		}
	],
	widget:0
},
{
	name:'Формы и кнопки',
	icon:'fa fa-hand-pointer-o',
	icon_new:'form_and_button.svg',
	blocks:[
		{
			id:164,
			default:1,
			position:4101,
			title:'500. Простая кнопка без заливки',
			description:'Возможность изменения размера кнопки, анимация и заголовок',
			default_values:{
				show_sub_title:0,
				show_btn_descr:0,
				padd_top:'80',
				padd_bottom:'80',
				hover_color:'#000',
				btn1:{title:'Получить информацию',color:'#000',style:5,target:0}
			}
		},
		{
			id:164,
			default:1,
			position:4100,
			title:'501. Простая кнопка с заливкой',
			description:'Возможность изменения размера кнопки, анимация и заголовок',
			default_values:{
				show_sub_title:0,
				show_btn_descr:0,
				padd_top:'80',
				padd_bottom:'80',
				btn1:{title:'Получить информацию',color:'#002DB3',surround:3,style:5,target:0,hover_color:'#002DB3'}
			}
		},
		{
			id:164,
			default:1,
			position:4150,
			title:'502. Простая кнопка с заголовком',
			description:'Возможность изменения размера кнопки, анимация.',
			default_values:{
				bg:'#f2f2f2',
				show_sub_title:1,
				show_btn_descr:0,
				hover_color:'#4452b8',
				padd_top:'150',
				padd_bottom:'150',
				animate:1,
				sub_title:'<span style="font-size:48px"><b><span style="font-family:roboto">Получите бесплатный урок!</span></b></span><div><br></div><div><span style="font-family:roboto"><span style="font-size:24px">Заполните поля формы обратной связи и приступите к изучению иностранного языка в ближайшие дни!</span></span></div><div><br></div>',
				btn1:{
					title:'Получить бесплатный урок',
					color:'#4452b8',
					surround:3,
					style:5, 
					target:0
				}
			}
		},
		{
			id:306,
			default:1,
			position:4200,
			title:'503. Блок с формой и описанием',
			description:'Блок с горизонтальным расположением полей',
			default_values:{
				bg:'#f4f4f4',
				show_form_title:1,
				del_border:0,
				form_title:'<span style="font-size:42px"><b><span style="font-family:roboto">Первый урок бесплатно</span></b></span><div><br></div><div><span style="font-family:roboto"><span style="font-size:24px">Успей записаться прямо сейчас и получи первое бесплатное занятие</span></span></div>',
				form_text:'<p style="text-align: center">Нажимая на кнопку, Вы принимаете <a target="_blank" data-cke-saved-href="/personal-data-1/" href="/personal-data-1/">Положение</a> и <a target="_blank" data-cke-saved-href="/personal-data-2/" href="/personal-data-2/">Согласие</a> на обработку персональных данных.</p>',
				brd_color:"#fff",
				form_bg_color:'#fff',
				form_bg_opacity:1,
				padd_top:'120',
				padd_bottom:'120',
				hover_color:'#DC143C',
				form1:[
					{type:'hidden',title:'Название формы',description:''},
					{type:'text',title:'Введите имя',description:'',required:1},
					{type:'email',title:'Введите email',placeholder:'Введите email',description:'',required:1},
					{type:'phone',title:'Введите телефон',placeholder:'Введите телефон',description:'',required:1},
					{type:'btn',title:'Записаться сейчас',color:'#DC143C',action:'thanks',surround:3,style:17,url:'',amount:0}
				]
			}
		},
		{
			id:306,
			default:1,
			position:4201,
			title:'504. Блок с формой и описанием',
			description:'Блок с горизонтальным расположением полей',
			default_values:{
				show_form_title:1,
				del_border:0,
				pattern:'pattern_11.png',
				bg:'#1E145A',
				brd_color:"#fff",
				form_bg_color:'#fff',
				form_bg_opacity:1,
				padd_top:'120',
				padd_bottom:'120',
				form_title:'<span style="font-family:montserrat"><span style="font-size:42px"><b>Скидка до 15%</b></span></span><div><br></div><div><span style="font-family:montserrat"><em><span style="font-size:24px">При вызове замерщика онлайн. Спешите, предложение ограничено!</span></em></span></div>',
				form_text:'<p style="text-align:center"><span style="font-family:montserrat">Нажимая на кнопку, Вы принимаете <a target="_blank" data-cke-saved-href="/personal-data-1/" href="/personal-data-1/">Положение</a> и <a target="_blank" data-cke-saved-href="/personal-data-2/" href="/personal-data-2/">Согласие</a> на обработку персональных данных.</span></p>',
				brd_color:"#fff",
				hover_color:'#1E145A',
				form1:[
					{type:'hidden',title:'Название формы',description:''},
					{type:'text',title:'Введите имя',description:'',required:1},
					{type:'email',title:'Введите email',placeholder:'Введите email',description:'',required:1},
					{type:'phone',title:'Введите телефон',placeholder:'Введите телефон',description:'',required:1},
					{type:'btn',title:'Вызвать замерщика',color:'#1E145A',action:'thanks',surround:3,style:17,fsize:2,url:'',amount:0}
				]
			}
		},
		{
			id:306,
			default:1,
			position:4202,
			title:'505. Блок с формой и описанием',
			description:'Блок с горизонтальным расположением и полной обводкой полей',
			default_values:{
				show_form_title:1,
				del_border:0,
				bg:'#fff',
				form_bg_opacity:1,
				del_input_border:1,
				padd_top:'120',
				padd_bottom:'120',
				form_title:'<p><span style="font-size:40px"><span style="font-family:montserrat"><b>Бесплатная консультация</b></span></span></p><p><span style="font-family:montserrat"><span style="font-size:24px"><br></span></span></p><p><span style="font-size:22px"><span style="font-family:montserrat">Укажите свои данные и мы бесплатно проконсультируем вас!</span></span></p>',
				form_text:'<p style="text-align:center"><span style="font-family:montserrat"><span style="font-size:14px"><span style="color:#696969">Нажимая на кнопку, Вы принимаете </span><a target="_blank" data-cke-saved-href="/personal-data-1/" href="/personal-data-1/">Положение</a><span style="color:#696969"> и </span><a target="_blank" data-cke-saved-href="/personal-data-2/" href="/personal-data-2/">Согласие</a><span style="color:#696969"> на обработку персональных данных.</span></span></span></p>',
				brd_color:"#f5f5f5",
				form_bg_color:'#f5f5f5',				
				hover_color:'#2f9688',
				form1:[
					{type:'hidden',title:'Название формы',description:''},
					{type:'text',title:'Введите имя',description:'',required:1},
					{type:'email',title:'Введите email',placeholder:'Введите email',description:'',required:1},
					{type:'phone',title:'Введите телефон',placeholder:'Введите телефон',description:'',required:1},
					{type:'btn',title:'Оставить заявку',color:'#2f9688',action:'thanks',surround:3,style:17,url:'',amount:0}
				]
			}
		},
		{
			id:1306,
			default:1,
			position:4205,
			title:'506. Блок с формой и описанием',
			description:'Блок с вертикальным расположением полей',
			default_values:{
				show_title:1,
				title:'<span style="font-size:30px"><span style="font-family:roboto"><b>Отправьте запрос на бесплатную консультацию</b></span></span>',
				form_title:'<div><span style="font-size:24px"><span style="font-family:roboto">Наш специалист свяжется с вами, чтобы уточнить дату и время встречи</span></span><br></div>',
				form_text:'<span style="font-size:14px"><span style="color:#696969">Нажимая на кнопку, Вы принимаете </span><a target="_blank" data-cke-saved-href="/personal-data-1/" href="/personal-data-1/">Положение</a><span style="color:#696969"> и </span><a target="_blank" data-cke-saved-href="/personal-data-2/" href="/personal-data-2/">Согласие</a><span style="color:#696969"> на обработку персональных данных.</span></span>',
				del_border:1,
				form_bg:1,
				all_border:0,
				form_bg_opacity:0,
				padd_top:'80',
				padd_bottom:'80',
				hover_color:'#424242',
				form1:[
					{type:'hidden',title:'Название формы',description:''},
					{type:'text',title:'Введите имя',placeholder:'Сергей Иванович',description:'',required:1},
					{type:'email',title:'Введите email',description:'',required:1},
					{type:'phone',title:'Введите телефон',description:'',required:1},
					{type:'btn',title:'Оставить заявку',color:'#424242',action:'thanks',surround:3,style:17,url:'',amount:0,fsize:4}
				]
			}
		},
		{
			id:1306,
			default:1,
			position:4206,
			title:'507. Блок с формой и описанием',
			description:'Блок с вертикальным расположением полей',
			default_values:{
				form_bg:1,
				all_border:0,
				form_bg_opacity:1,
				del_border:1,
				padd_top:'80',
				padd_bottom:'80',
				hover_color:'#084673',
				form_title:'<div style="text-align:left"><span style="font-size:24px"><span style="font-family:roboto">Наш специалист свяжется с вами, чтобы уточнить дату и время встречи</span></span></div>',
				form_text:'<p style="text-align:left"><span style="font-size:14px"><span style="color:#696969">Нажимая на кнопку, Вы принимаете </span><a target="_blank" data-cke-saved-href="/personal-data-1/" href="/personal-data-1/">Положение</a><span style="color:#696969"> и </span><a target="_blank" data-cke-saved-href="/personal-data-2/" href="/personal-data-2/">Согласие</a><span style="color:#696969"> на обработку персональных данных.</span></span></p>',
				form1:[
					{type:'hidden',title:'Название формы',description:''},
					{type:'text',title:'Введите имя',placeholder:'Сергей Иванович',description:'',required:1},
					{type:'email',title:'Введите email',description:'',required:1},
					{type:'phone',title:'Введите телефон',description:'',required:1},
					{type:'btn',title:'Узнать подробнее',color:'#084673',action:'thanks',surround:3,style:17,url:'',amount:0,fsize:4}
				]
			}
		},
		{
			id:1120,
			default:1,
			position:4305,
			title:'508. Блок с функцией поиска',
			description:'Поиск товаров и статей на сайте',
			default_values:{
				bg:'#f2f2f2',
				btn_color:'#5aaf4a',
				btn_style:'f2',
				padd_top:'40',
				padd_bottom:'40'
			}
		},
		{
			id:1121,
			default:1,
			position:4306,
			title:'509. Блок с формой и изображением',
			description:'Возможность менять расположение изображения',
			default_values:{
				image1:'section126_image4_2.jpg',
				form1:[
					{type:'hidden',title:'Название формы',description:''},
					{type:'text',title:'Введите имя',description:'',required:1},
					{type:'email',title:'Введите email',placeholder:'Введите email',description:'',required:1},
					{type:'phone',title:'Введите телефон',description:'',required:1},
					{type:'btn',title:'Получить каталог',color:'#3277d5',action:'thanks',surround:3,style:5,url:'',amount:0}
				]
			}
		},
		{
			id:1250,
			default:1,
			position:4307,
			title:'510. Блок с двумя кнопками',
			description:'Возможность менять размер и позицию кнопок',
			default_values:{}
		},
		{
			id:1121,
			default:1,
			position:4308,
			title:'511. Блок с формой и изображением',
			description:'Возможность менять расположение изображения',
			default_values:{
				bg:'#f8f8f8',
				image1:'section126_image1_2.jpg',
				change_place:1
			}
		},
		{
			id:1306,
			default:1,
			position:4309,
			title:'512. Блок с формой, маленькой кнопкой, описанием и фоновым изображением',
			description:'Блок с вертикальным расположением полей и фоновым изображением',
			default_values:{
				inline_btn:1,
				show_form_label:0,
				brd_color:'#f2f2f2',
				bg_image:'section1306_512_bg.jpg',
				form_title:'<span style="font-size:42px"><b><span style="font-family:roboto"><span style="color:#000">Первый урок бесплатно</span></span></b></span><div><br></div><div><span style="font-size:24px"><span style="font-family:roboto"><span style="color:#000">Успейте записаться прямо сейчас, и вы получите пробное бесплатное занятие</span></span></span></div>',
				form_text:'<p><span style="font-size:12px"><span style="color:#696969">Нажимая на кнопку, Вы принимаете </span><a target="_blank" data-cke-saved-href="/personal-data-1/" href="/personal-data-1/">Положение</a><span style="color:#696969"> и </span><a target="_blank" data-cke-saved-href="/personal-data-2/" href="/personal-data-2/">Согласие</a><span style="color:#696969"> на обработку персональных данных.</span></span></p>',
				form_bg:1,
				all_border:0,
				form_bg_opacity:1,
				padd_top:'120',
				padd_bottom:'120',
				hover_color:'#6d9f30',
				form1:[
					{type:'hidden',title:'Название формы',description:''},
					{type:'text',title:'Введите имя',description:'',required:1},
					{type:'email',title:'Введите email',description:'',required:1},
					{type:'btn',title:'Оставить заявку',color:'#6d9f30',action:'thanks',surround:3,style:5,url:'',amount:0}
				]
			}
		},
		{
			id:1306,
			default:1,
			position:4310,
			title:'513. Блок с формой и описанием',
			description:'Блок с вертикальным расположением полей',
			default_values:{
				inline_btn:1,
				show_form_label:0,
				brd_color:'#3277d5',
				bg:'#f2f2f2',
				form_title:'<span style="font-size:42px"><b><span style="font-family:roboto"><span style="color:#000">Первый урок бесплатно</span></span></b></span><div><br></div><div><span style="font-size:24px"><span style="font-family:roboto"><span style="color:#000">Успейте записаться прямо сейчас, и вы получите пробное бесплатное занятие</span></span></span></div>',
				form_text:'<p><span style="font-size:12px"><span style="color:#696969">Нажимая на кнопку, Вы принимаете </span><a target="_blank" data-cke-saved-href="/personal-data-1/" href="/personal-data-1/">Положение</a><span style="color:#696969"> и </span><a target="_blank" data-cke-saved-href="/personal-data-2/" href="/personal-data-2/">Согласие</a><span style="color:#696969"> на обработку персональных данных.</span></span></p>',
				form_bg:1,
				bold_border:1,
				all_border:0,
				form_bg_opacity:1,
				padd_top:'150',
				padd_bottom:'150',
				hover_color:'#3277d5',
				form1:[
					{type:'hidden',title:'Название формы',description:''},
					{type:'text',title:'Введите имя',description:'',required:1},
					{type:'email',title:'Введите email',description:'',required:1},
					{type:'btn',title:'Оставить заявку',color:'#3277d5',action:'thanks',surround:3,style:0,url:'',amount:0}
				]
			}
		},
		{
			id:306,
			default:1,
			position:4311,
			title:'514. Блок с формой и описанием',
			description:'Блок с горизонтальным расположением полей',
			default_values:{
				show_form_title:1,
				bg_image:'section306_514_bg.jpg',
				form_bg_opacity:0,
				del_border:1,
				del_input_border:0,
				padd_top:'135',
				padd_bottom:'135',
				form_title:'<span style="font-size:48px"><b><span style="font-family:roboto">Получите бесплатный урок!</span></b></span><div><br></div><div><span style="font-family:roboto"><span style="font-size:24px">Заполните поля формы обратной связи и приступите к изучению иностранного языка в ближайшие дни!</span></span></div>',
				form_text:'<p style="text-align:center"><span style="font-family:roboto"><span style="font-size:14px"><span style="color:#696969">Нажимая на кнопку, Вы принимаете </span><a target="_blank" data-cke-saved-href="/personal-data-1/" href="/personal-data-1/">Положение</a><span style="color:#696969"> и </span><a target="_blank" data-cke-saved-href="/personal-data-2/" href="/personal-data-2/">Согласие</a><span style="color:#696969"> на обработку персональных данных.</span></span></span></p>',
				brd_color:"#f5f5f5",
				form_bg_color:'#f5f5f5',				
				hover_color:'#df1962',
				form1:[
					{type:'hidden',title:'Название формы',description:''},
					{type:'text',title:'Введите имя',description:'',required:1},
					{type:'email',title:'Введите email',placeholder:'Введите email',description:'',required:1},
					{type:'phone',title:'Введите телефон',placeholder:'Введите телефон',description:'',required:1},
					{type:'btn',title:'Записаться сейчас!',color:'#df1962',action:'thanks',surround:3,style:17,url:'',amount:0}
				]
			}
		},
		{
			id:164,
			default:1,
			default:1,
			position:4400,
			title:'515. Блок с текстом и кнопкой',
			description:'Возможность разместить текст слева или справа от кнопки',
			default_values:{
				bg:'#f2f2f2',
				padd_top:'80',
				padd_bottom:'80',
				show_sub_title:1,
				sub_title:'<p style="text-align:left"><span style="color:#000"><span style="font-family:roboto"><span style="font-size:22px">В тот же миг Алиса юркнула за ним следом, не думая о том, как же она будет выбираться обратно.</span></span></span></p>',
				show_btn_descr:0,
				float_sub_title:1,
				btn_size:'w250h45',
				position:'pright',
				hover_color:'#3277d5',
				btn1:{title:'Узнать подробнее',color:'#3277d5',surround:3,style:0,target:0},
				form1:[
					{type:'hidden',title:'Название формы',description:''},
					{type:'text',title:'Введите имя',description:'',required:1},
					{type:'email',title:'Введите email',description:'',required:1},
					{type:'btn',title:'Оставить заявку',color:'#3277d5',action:'thanks',surround:3,style:1,fsize:2,url:'',amount:0}
				]
			}
		},
		{
			id:306,
			default:1,
			position:4500,
			title:'516. Поле email с кнопкой и заголовками',
			description:'Возможность сменить фон и стиль полей, установить плашку под форму',
			default_values:{
				show_form_title:1,
				bg:'#FFD700',
				form_bg_opacity:0,
				del_border:1,
				del_input_border:1,
				long_email:1,
				padd_top:'135',
				padd_bottom:'135',
				form_title:'<span style="font-size:48px"><span style="color:#000"><b><span style="font-family:roboto">Первый урок бесплатно!</span></b></span></span><div><br></div><div><span style="color:#000"><span style="font-family:roboto"><span style="font-size:24px">Успей записаться прямо сейчас и получи первое бесплатное занятие. Спешите, предложение ограничено</span></span></span></div>',
				form_text:'<p style="text-align:center"><span style="font-family:roboto"><span style="color:#000">Нажимая на кнопку, Вы принимаете </span><a target="_blank" data-cke-saved-href="/personal-data-1/" href="/personal-data-1/">Положение</a><span style="color:#000"> и </span><a target="_blank" data-cke-saved-href="/personal-data-2/" href="/personal-data-2/">Согласие</a><span style="color:#000"> на обработку персональных данных.</span></span></p>',
				hover_color:'#212121',
				form1:[
					{type:'hidden',title:'Запись на бесплатный урок',description:''},
					{type:'email',title:'Введите email',placeholder:'Ваш email',description:'',required:1},
					{type:'btn',title:'Записаться сейчас!',color:'#000',action:'thanks',surround:3,style:5,url:'',amount:0}
				]
			}
		},
		{
			id:306,
			default:1,
			position:4510,
			title:'517. Поле email с кнопкой и заголовками и обводкой',
			description:'Возможность сменить фон и стиль полей, установить плашку под форму',
			default_values:{
				show_form_title:1,
				bg:'#eeeeee',
				form_bg_opacity:0,
				del_border:0,
				del_input_border:1,
				long_email:1,
				padd_top:'135',
				padd_bottom:'135',
				brd_color:'#1AC0C6',
				form_title:'<span style="font-size:42px"><span style="font-family:montserrat"><span style="color:#000"><b>Скидка 15% на любую технику</b></span></span></span><div><br></div><div><span style="font-family:montserrat"><span style="color:#000"><span style="font-size:24px">Вы легко сможете выбрать подходящий вариант или заказать индивидуальный подбор</span></span></span></div>',
				form_text:'<p style="text-align:center"><span style="font-family:montserrat"><span style="color:#555">Нажимая на кнопку, Вы принимаете </span><a target="_blank" data-cke-saved-href="/personal-data-1/" href="/personal-data-1/">Положение</a><span style="color:#555"> и </span><a target="_blank" data-cke-saved-href="/personal-data-2/" href="/personal-data-2/">Согласие</a><span style="color:#555"> на обработку персональных данных.</span></span></p>',
				hover_color:'#1AC0C6',
				form1:[
					{type:'hidden',title:'Запись на бесплатный урок',description:''},
					{type:'email',title:'Введите email',placeholder:'Ваш email',description:'',required:1},
					{type:'btn',title:'Заявка на подбор',color:'#1AC0C6',action:'thanks',surround:3,style:0,url:'',amount:0}
				]
			}
		},
		{
			id:306,
			default:1,
			position:4520,
			title:'518. Поле email с кнопкой и заголовками и плашкой',
			description:'Возможность сменить фон и стиль полей, установить плашку под форму',
			default_values:{
				show_form_title:1,
				bg:'#FB7756',
				form_bg_opacity:1,
				del_border:0,
				del_input_border:0,
				long_email:1,
				padd_top:'135',
				padd_bottom:'135',
				form_bg_color:'#fff',
				brd_color:'#fff',
				form_title:'<span style="font-size:42px"><span style="font-family:montserrat"><span style="color:#000"><b>Скидка 15% на любую технику</b></span></span></span><div><br></div><div><span style="font-family:montserrat"><span style="color:#000"><span style="font-size:24px">Вы легко сможете выбрать подходящий вариант или заказать индивидуальный подбор</span></span></span></div>',
				form_text:'<p style="text-align:center"><span style="font-family:montserrat"><span style="color:#555">Нажимая на кнопку, Вы принимаете </span><a target="_blank" data-cke-saved-href="/personal-data-1/" href="/personal-data-1/">Положение</a><span style="color:#555"> и </span><a target="_blank" data-cke-saved-href="/personal-data-2/" href="/personal-data-2/">Согласие</a><span style="color:#555"> на обработку персональных данных.</span></span></p>',
				hover_color:'#FB7756',
				form1:[
					{type:'hidden',title:'Запись на бесплатный урок',description:''},
					{type:'email',title:'Введите email',placeholder:'Ваш email',description:'',required:1},
					{type:'btn',title:'Заявка на подбор',color:'#FB7756',action:'thanks',surround:3,style:0,url:'',amount:0}
				]
			}
		},
		{
			id:306,
			default:1,
			position:4530,
			title:'519. Поле email с кнопкой и заголовками и изображением на фоне',
			description:'Возможность сменить фон и стиль полей, установить плашку под форму',
			default_values:{
				show_form_title:1,
				bg_image:'section306_519_bg.jpg',
				form_bg_opacity:1,
				del_border:0,
				del_input_border:0,
				long_email:1,
				padd_top:'135',
				padd_bottom:'135',
				form_bg_color:'#fff',
				brd_color:'#fff',
				form_title:'<span style="font-family:open sans"><span style="color:#000"><span style="font-size:42px"><b>Бесплатная доставка</b></span></span></span><div><span style="font-family:open sans"><br></span></div><div><span style="font-family:open sans"><span style="color:#000"><span style="font-size:24px">Укажите свой электронный адрес в поле, и получите бесплатную доставку букета в пределах города</span></span></span></div>',
				form_text:'<p style="text-align:center"><span style="font-family:open sans"><span style="color:#555">Нажимая на кнопку, Вы принимаете </span><a target="_blank" data-cke-saved-href="/personal-data-1/" href="/personal-data-1/">Положение</a><span style="color:#555"> и </span><a target="_blank" data-cke-saved-href="/personal-data-2/" href="/personal-data-2/">Согласие</a><span style="color:#555"> на обработку персональных данных.</span></span></p>',
				hover_color:'#2c2111',
				form1:[
					{type:'hidden',title:'Запись на бесплатный урок',description:''},
					{type:'email',title:'Введите email',placeholder:'Ваш email',description:'',required:1},
					{type:'btn',title:'Оставить заявку',color:'#2c2111',action:'thanks',surround:3,style:0,url:'',amount:0}
				]
			}
		},
		{
			id:164,
			default:1,
			position:4600,
			title:'520. Кнопка с иконкой загрузки файла',
			description:'Кнопка с возможностью сменить иконку, цвет и фон',
			default_values:{
				bg:'#BAE8E8',
				show_btn_descr:0,
				padd_top:'120',padd_bottom:'120',
				hover_color:'#272643',
				btn_size:'w450h60',use_btn_icon:'icon_download',
				btn1:{title:'Скачать файл',color:'#272643',surround:3,style:5,target:0},
				form1:[
					{type:'hidden',title:'Оставьте заявку на загрузку файла',description:''},
					{type:'email',title:'Введите email',placeholder:'Ваш email',description:'',required:1},
					{type:'btn',title:'Оставить заявку',color:'#272643',action:'thanks',surround:3,style:5,url:'',amount:0}
				]
			}
		},
		{
			id:164,
			default:1,
			position:4610,
			title:'521. Кнопка с иконкой документа',
			description:'Кнопка с возможностью сменить иконку, цвет и фон',
			default_values:{
				bg:'#454D66',
				show_btn_descr:0,
				padd_top:'120',padd_bottom:'120',
				hover_color:'#309975',
				btn_size:'w450h60',use_btn_icon:'icon_doc',
				btn1:{title:'Скачать документ',color:'#309975',surround:3,style:1,target:0},
				form1:[
					{type:'hidden',title:'Оставьте заявку на загрузку файла',description:''},
					{type:'email',title:'Введите email',placeholder:'Ваш email',description:'',required:1},
					{type:'btn',title:'Оставить заявку',color:'#309975',action:'thanks',surround:3,style:1,url:'',amount:0}
				]
			}
		},
		{
			id:164,
			default:1,
			position:4620,
			title:'522. Кнопка с иконкой документа Microsoft Word',
			description:'Кнопка с возможностью сменить иконку, цвет и фон',
			default_values:{
				bg:'#3a9efd',
				show_btn_descr:0,
				padd_top:'120',padd_bottom:'120',
				hover_color:'#3e4491',
				btn_size:'w450h60',use_btn_icon:'icon_word',
				btn1:{title:'Скачать документ',color:'#3e4491',surround:3,style:1,target:0},
				form1:[
					{type:'hidden',title:'Оставьте заявку на загрузку файла',description:''},
					{type:'email',title:'Введите email',placeholder:'Ваш email',description:'',required:1},
					{type:'btn',title:'Оставить заявку',color:'#3e4491',action:'thanks',surround:3,style:1,url:'',amount:0}
				]
			}
		},
		{
			id:164,
			default:1,
			position:4630,
			title:'523. Кнопка с иконкой документа Microsoft Excel',
			description:'Кнопка с возможностью сменить иконку, цвет и фон',
			default_values:{
				bg:'#3e7d52',
				show_btn_descr:0,
				padd_top:'120',padd_bottom:'120',
				hover_color:'#58b376',
				btn_size:'w450h60',use_btn_icon:'icon_xlsx',
				btn1:{title:'Скачать документ',color:'#58b376',surround:3,style:1,target:0},
				form1:[
					{type:'hidden',title:'Оставьте заявку на загрузку файла',description:''},
					{type:'email',title:'Введите email',placeholder:'Ваш email',description:'',required:1},
					{type:'btn',title:'Оставить заявку',color:'#58b376',action:'thanks',surround:3,style:1,url:'',amount:0}
				]
			}
		},
		{
			id:164,
			default:1,
			position:4640,
			title:'524. Кнопка с иконкой PDF документа',
			description:'Кнопка с возможностью сменить иконку, цвет и фон',
			default_values:{
				bg:'#b36a58',
				show_btn_descr:0,
				padd_top:'120',padd_bottom:'120',
				hover_color:'#7d4a3e',
				btn_size:'w450h60',use_btn_icon:'icon_pdf',
				btn1:{title:'Скачать документ',color:'#7d4a3e',surround:3,style:5,target:0},
				form1:[
					{type:'hidden',title:'Оставьте заявку на загрузку файла',description:''},
					{type:'email',title:'Введите email',placeholder:'Ваш email',description:'',required:1},
					{type:'btn',title:'Оставить заявку',color:'#7d4a3e',action:'thanks',surround:3,style:5,url:'',amount:0}
				]
			}
		},
		{
			id:164,
			default:1,
			position:4650,
			title:'525. Кнопка с иконкой архива',
			description:'Кнопка с возможностью сменить иконку, цвет и фон',
			default_values:{
				bg:'#3e4e7d',
				show_btn_descr:0,
				padd_top:'120',padd_bottom:'120',
				hover_color:'#586fb3',
				btn_size:'w450h60',use_btn_icon:'icon_archive',
				btn1:{title:'Загрузить архив',color:'#586fb3',surround:3,style:5,target:0},
				form1:[
					{type:'hidden',title:'Оставьте заявку на загрузку файла',description:''},
					{type:'email',title:'Введите email',placeholder:'Ваш email',description:'',required:1},
					{type:'btn',title:'Оставить заявку',color:'#586fb3',action:'thanks',surround:3,style:5,url:'',amount:0}
				]
			}
		},
		{
			id:164,
			default:1,
			position:4660,
			title:'526. Кнопка с иконкой стрелки',
			description:'Кнопка с возможностью сменить иконку, цвет и фон',
			default_values:{
				bg:'#3e7d6e',
				show_btn_descr:0,
				padd_top:'120',padd_bottom:'120',
				hover_color:'#fff',
				btn_size:'w450h60',
				use_btn_icon:'icon_share',
				btn1:{title:'УЗНАТЬ ПОДРОБНЕЕ',color:'#fff',style:5,target:0},
				form1:[
					{type:'hidden',title:'Оставьте заявку на загрузку файла',description:''},
					{type:'email',title:'Введите email',placeholder:'Ваш email',description:'',required:1},
					{type:'btn',title:'Оставить заявку',color:'#3e7d6e',action:'thanks',style:5,url:'',amount:0}
				]
			}
		},
		{
			id:164,
			default:1,
			position:4670,
			title:'527. Кнопка с иконкой конверта',
			description:'Кнопка с возможностью сменить иконку, цвет и фон',
			default_values:{
				bg:'#a7b358',
				show_btn_descr:0,
				padd_top:'120',padd_bottom:'120',
				hover_color:'#363636',
				btn_size:'w450h60',
				use_btn_icon:'icon_envelope',
				btn1:{title:'НАПИШИТЕ НАМ',color:'#323232',surround:3,style:5,target:0},
				form1:[
					{type:'hidden',title:'Оставьте заявку на загрузку файла',description:''},
					{type:'email',title:'Введите email',placeholder:'Ваш email',description:'',required:1},
					{type:'btn',title:'Оставить заявку',color:'#323232',action:'thanks',surround:3,style:5,url:'',amount:0}
				]
			}
		}
	],
	group:[164, 306, 1121],
	deleted:[64],
	widget:0
},
{
	name:'Контакты',
	icon:'fa fa-map-marker',
	icon_new:'contacts.svg',
	blocks:[
		{
			id:165,
			default:1,
			position:16100,
			title:'601. Контакты. Карта с текстом и социальными сетями',
			description:'Возможность включить заголовки, убрать текст, сменить фон и отключить социальные сети',
			default_values:{
				bg:'#f2f2f2',
				show_title:0,
				show_sub_title:0,
				filter_on:0,
				show_vk:1,
				show_tg:1,
				show_youtube:1,
				show_vimeo:1,
				width1170:1,
				map_text_bg:'#fff',
				text:'<div><span style="font-size:24px"><span style="font-family:open sans"><b>ЗАО "СтроительствоСфера"</b></span></span></div><div><br></div><p><span style="font-size:18px"><span style="font-family:open sans">737428, Волгоградская область, город Шаховская, въезд Гагарина, 41</span></span></p><p><span style="font-size:18px"><span style="font-family:open sans">Телефон:1(152)956-50-88</span></span></p><p><span style="font-family:open sans"><span style="font-size:18px">Email: commerce@build-sphere.com</span></span></p><p><br></p><p><span style="font-size:16px"><span style="font-family:open sans">Время работы: 8:00-19:00 без выходных</span></span></p>',
				txt1:'<p style="text-align:left"><span style="color:#696969"><span style="font-family:open sans">Присоединяйтесь к нам в социальных сетях!</span></span></p>',
				map: [{address:'125047, Москва, Гончарная улица, 38',color:'#FF1500'}],
				map_center: {zoom:15, center: [55.740675, 37.651044]}
			}
		},
		{
			id:162,
			default:1,
			position:16200,
			title:'602. Контакты. Карта на всю ширину сетки',
			description:'Возможность включить заголовки, текст и уменьшить ширину карты',
			default_values:{
				show_text:0,
				show_title:0,
				show_sub_title:0,
				width1170:1,
				map: [{address:'125047, Москва, Гончарная улица, 38',color:'#FF1500'}],
				map_center: {zoom:15, center: [55.740675, 37.651044]}
			}
		},
		{
			id:165,
			default:1,
			position:16250,
			title:'603. Контакты. Карта с текстом и социальными сетями',
			description:'Возможность включить заголовки, убрать текст, сменить фон и отключить социальные сети',
			default_values:{
				bg:'#fff',
				show_title:0,
				show_sub_title:0,
				filter_on:0,
				show_vk:1,
				show_tg:1,
				show_youtube:1,
				show_vimeo:1,
				width1170:1,
				map_text_bg:'#5a5a5a',
				text:'<div><span style="font-size:24px"><span style="font-family:open sans"><b>ЗАО "СтроительствоСфера"</b></span></span></div><div><br></div><p><span style="font-size:18px"><span style="font-family:open sans">737428, Волгоградская область, город Шаховская, въезд Гагарина, 41</span></span></p><p><span style="font-size:18px"><span style="font-family:open sans">Телефон:1(152)956-50-88</span></span></p><p><span style="font-family:open sans"><span style="font-size:18px">Email: commerce@build-sphere.com</span></span></p><p><br></p><p><span style="font-size:16px"><span style="font-family:open sans">Время работы: 8:00-19:00 без выходных</span></span></p>',
				txt1:'<p style="text-align:left"><span style="color:#D3D3D3"><span style="font-family:open sans">Присоединяйтесь к нам в социальных сетях!</span></span></p>',
				map: [{address:'125047, Москва, Гончарная улица, 38',color:'#FF1500'}],
				map_center: {zoom:15, center: [55.740675, 37.651044]}
			}
		},
		{
			id:303,
			default:1,
			position:16300,
			title:'604. Контакты. Карта на всю ширину сайта с плашкой текста',
			description:'Возможность добавить картинку и текст, отключение зума карты, изменение положение и фона плашки',
			default_values:{
				bg_position:'left',
				text:'<span style="font-size:28px"><span style="font-family:roboto"><b>Свяжитесь с нами</b></span></span><div><br></div><div><p><span style="font-family:roboto"><span style="font-size:18px">737428, Волгоградская область, город Шаховская, въезд Гагарина, 41</span></span></p><p><span style="font-family:roboto"><span style="font-size:18px">+1(152)956-50-88</span></span></p><p><span style="font-family:roboto"><span style="font-size:18px">commerce@build-sphere.com</span></span></p><p><br></p><p><span style="font-family:roboto"><span style="font-size:16px">Время работы: 8:00-19:00 без выходных</span></span></p></div>',
				map: [{address:'125047, Москва, Гончарная улица, 38',color:'#FF1500'}],
				map_center: {zoom:15, center: [55.740675, 37.651044]}
			}
		},
		{
			id:303,
			default:1,
			position:16310,
			title:'605. Контакты. Карта на всю ширину и высоту сайта с плашкой текста',
			description:'Возможность добавить картинку и текст, отключение зума карты, изменение положение и фона плашки',
			default_values:{
				bg_position:'right',
				map_height:'full',
				text_bg_color:'#000',
				text:'<span style="font-size:28px"><span style="font-family:roboto"><b>Свяжитесь с нами</b></span></span><div><br></div><div><p><span style="font-family:roboto"><span style="font-size:18px">737428, Волгоградская область, город Шаховская, въезд Гагарина, 41</span></span></p><p><span style="font-family:roboto"><span style="font-size:18px">+1(152)956-50-88</span></span></p><p><span style="font-family:roboto"><span style="font-size:18px">commerce@build-sphere.com</span></span></p><p><br></p><p><span style="font-family:roboto"><span style="font-size:16px">Время работы: 8:00-19:00 без выходных</span></span></p></div>',
				map: [{address:'125047, Москва, Гончарная улица, 38',color:'#FF1500'}],
				map_center: {zoom:15, center: [55.740675, 37.651044]}
			}
		},
		{
			id:303,
			default:1,
			position:16320,
			title:'606. Контакты. Карта и большой текст справа',
			description:'Возможность добавить картинку и текст, отключение зума карты, изменение положение и фона плашки',
			default_values:{
				bg_position:'right',
				map_height:'midi',
				text_bg_color:'#151515',
				make_text_bigger:1,
				text:'<h2><span style="font-size:42px"><span style="font-family:roboto"><b>Свяжитесь с нами</b></span></span></h2><div><span style="font-size:18px"><span style="font-family:roboto">737428, Волгоградская область, город Шаховская, въезд Гагарина, 41</span></span></div><div><p><span style="font-size:18px"><span style="font-family:roboto">+1(152)956-50-88</span></span></p><p><span style="font-size:18px"><span style="font-family:roboto">commerce@build-sphere.com</span></span></p><p><br></p><p><span style="font-size:18px"><span style="font-family:roboto">Время работы: 8:00-19:00 без выходных</span></span></p></div>',
				map: [{address:'125047, Москва, Гончарная улица, 38',color:'#FF1500'}],
				map_center: {zoom:15, center: [55.740675, 37.651044]}
			}
		},
		{
			id:303,
			default:1,
			position:16330,
			title:'607. Контакты. Карта и большой текст справа',
			description:'Возможность добавить картинку и текст, отключение зума карты, изменение положение и фона плашки',
			default_values:{
				bg_position:'right',
				map_height:'midi',
				text_bg_color:'#fff',
				make_text_bigger:1,
				text:'<h2><span style="font-size:42px"><span style="font-family:roboto"><b>Свяжитесь с нами</b></span></span></h2><div><span style="font-size:18px"><span style="font-family:roboto">737428, Волгоградская область, город Шаховская, въезд Гагарина, 41</span></span></div><div><p><span style="font-size:18px"><span style="font-family:roboto">+1(152)956-50-88</span></span></p><p><span style="font-size:18px"><span style="font-family:roboto">commerce@build-sphere.com</span></span></p><p><br></p><p><span style="font-size:18px"><span style="font-family:roboto">Время работы: 8:00-19:00 без выходных</span></span></p></div>',
				map: [{address:'125047, Москва, Гончарная улица, 38',color:'#FF1500'}],
				map_center: {zoom:15, center: [55.740675, 37.651044]}
			}
		},
		{
			id:303,
			default:1,
			position:16340,
			title:'608. Контакты. Карта на всю высоту и большой текст слева',
			description:'Возможность добавить картинку и текст, отключение зума карты, изменение положение и фона плашки',
			default_values:{
				bg_position:'left',
				map_height:'midi',
				text_bg_color:'#2a8449',
				make_text_bigger:1,
				text:'<h2><span style="font-size:42px"><span style="font-family:roboto"><b>Свяжитесь с нами</b></span></span></h2><div><span style="font-size:18px"><span style="font-family:roboto">737428, Волгоградская область, город Шаховская, въезд Гагарина, 41</span></span></div><div><p><span style="font-size:18px"><span style="font-family:roboto">+1(152)956-50-88</span></span></p><p><span style="font-size:18px"><span style="font-family:roboto">commerce@build-sphere.com</span></span></p><p><br></p><p><span style="font-size:18px"><span style="font-family:roboto">Время работы: 8:00-19:00 без выходных</span></span></p></div>',
				map: [{address:'125047, Москва, Гончарная улица, 38',color:'#FF1500'}],
				map_center: {zoom:15, center: [55.740675, 37.651044]}
			}
		},
		{
			id:130,
			default:1,
			position:16400,
			title:'609. Контакты. Плитка с 3-мя иконками, заголовками и текстом',
			description:'Возможность сменить иконки, текст, количество секций в ряду',
			default_values:{
				inner_width:1,
				show_title:1,
				show_subtitle:1,
				title:'<span style="font-size:42px"><span style="font-family:roboto"><b>Свяжитесь с нами</b></span></span>',
				sub_title:'<div><br></div><span style="font-size:28px"><span style="font-family:roboto">Мы всегда на связи и открыты для своих клиентов</span></span><div><br></div>',
				mode:'mdicon',
				icon_colors:'#000',
				items_count:'count3',
				show_price:0,
				show_btns:0,
				bg_col_opacity:0,
				arr1:[
					{
						
						alt1:'',alt1_1:'',alt1_2:'',alt1_3:'',
						mdico1:'svg-icon-call1',
						title1:'<span style="font-size:24px"><span style="font-family:roboto"><b>На связи</b></span></span>',
						txt1:'<span style="font-size:18px"><span style="font-family:roboto">+7 (495) 456-78-90</span></span><div><span style="font-size:18px"><span style="font-family:roboto">commerce@mysite.com</span></span></div>',
						btn1:{title:'Узнать подробнее',color:'#000',surround:3,country:1,style:17},
						form1:[{type:'hidden',title:'Название формы',description:''}]
					},
					{
						
						alt1:'', alt1_1:'', alt1_2:'', alt1_3:'',
						mdico1:'svg-icon-location-mark-with-heart',
						title1:'<span style="font-size:24px"><span style="font-family:roboto"><b>Адрес</b></span></span>',
						txt1:'<p><span style="font-size:18px"><span style="font-family:roboto">845030, г. Егорьевск, проезд Космонавтов, 96</span></span></p>',
						btn1:{title:'Узнать подробнее',color:'#000',surround:3,country:1,style:17},
						form1:[{type:'hidden',title:'Название формы',description:''}]
					},
					{
						
						alt1:'',alt1_1:'',alt1_2:'',alt1_3:'',
						mdico1:'svg-icon-call1',
						title1:'<span style="font-size:24px"><span style="font-family:roboto"><b>График</b></span></span>',
						txt1:'<span style="font-size:18px"><span style="font-family:roboto">Понедельник - суббота</span></span><div><span style="font-size:18px"><span style="font-family:roboto">8:00-19:00</span></span></div>',
						btn1:{title:'Узнать подробнее',color:'#000',surround:3,country:1,style:17},
						form1:[{type:'hidden',title:'Название формы',description:''}]
					}
				]
			}
		},
		{
			id:108,
			default:1,
			position:16410,
			title:'610. Контакты. Простой текст с социальными сетями',
			description:'Возможность стилизовать иконки, отключить ненужные социальные сети, отключить текст',
			default_values:{
				bg:'#f5f5f5',
				title:'<span style="font-size:46px"><span style="font-family:roboto"><b>Свяжитесь с нами</b></span></span>',
				sub_title:'<div></div><div><span style="color:rgb(52, 52, 52);font-family:roboto;font-size:24px">737428, г. Шаховская, въезд Гагарина, 4</span></div>',
				txt1:'<p><span style="color:#696969"><span style="font-size:18px"><span style="font-family:roboto">+1(152)956-50-88 | </span></span></span><span style="color:#696969"><span style="font-size:18px"><span style="font-family:roboto">commerce@build-sphere.com</span></span></span></p>',
				padd_top:'90',
				padd_bottom:'90',
				icons_figure:'icon-circle',
				icons_bg_color:'#000',
				icons_color:'#fff'
			}
		},
		{
			id:132,
			default:1,
			position:16420,
			title:'611. Контакты. Простой текст с информацией',
			description:'Возможность отключить текст, сменить фон и установить плашку',
			default_values:{
				show_title:1,
				show_sub_title:1,
				show_text:1,
				padd_top:'120',
				padd_bottom:'120',
				title:'<p><span style="font-size:42px"><b>Контакты</b></span></p>',
				sub_title:'<p><span style="font-size:24px">Мы с радостью ответим на все ваши вопросы</span></p>',
				text:'<div style="text-align:center"><span style="color:#000"><span style="font-size:18px"><br></span></span></div><div style="text-align:center"><span style="color:#000"><span style="font-size:18px">737428, Волгоградская область, город Шаховская, въезд Гагарина, 41</span></span></div><div><p style="text-align:center"><span style="color:#000"><span style="font-size:18px"><b>Телефон:</b> +1(152)956-50-88<br></span><span style="color:#000"><span style="font-size:18px"><b>Почта:</b> commerce@company.com</span></span></span></p><p style="text-align:center"><span style="color:#000"><span style="font-size:18px"><br></span></span></p><p style="text-align:center"><span style="color:#000"><span style="font-size:18px">Время работы: 8:00-19:00 без выходных</span></span></p></div>'
			}
		},
		{
			id:132,
			default:1,
			position:16430,
			title:'612. Контакты. Простой текст с информацией и фотографией на фоне',
			description:'Возможность отключить текст, сменить фон и установить плашку',
			default_values:{
				bg_image:'section132_612_bg.jpg',
				show_title:1,
				show_sub_title:1,
				show_text:1,
				padd_top:'140',
				padd_bottom:'140',
				block_style:'style_3',
				color:'#fff',
				title:'<p><span style="font-size:42px"><b>Контакты</b></span></p>',
				sub_title:'<p><span style="font-size:24px">Мы с радостью ответим на все ваши вопросы</span></p>',
				text:'<div style="text-align:center"><br></div><div style="text-align:center"><span style="font-size:18px">737428, Волгоградская область, город Шаховская, въезд Гагарина, 41</span><br><span style="font-size:18px"><b>Почта:</b> commerce@company.com | </span><span style="font-size:18px"><b>Телефон:</b> +1(152)956-50-88</span></div><div><p style="text-align:center"><br></p><p style="text-align:center"><span style="font-size:18px">Время работы: 8:00-19:00 без выходных</span></p></div>'
			}
		}
	],
	group:[162, 303, 130, 108, 132],
	deleted:[62],
	widget:0
},
{
	name:'Подвал сайта ',
	icon:'fa fa-graduation-cap',
	icon_new:'menusymbol2.svg',
	blocks:[
		{
			id:101,
			default:1,
			position:1400,
			title:'150. Подвал сайта с описанием',
			description:'Есть возможность закрепить блок сверху сайта и скрывать кнопку',
			default_values:{}
		},
		{
			id:119,
			default:1,
			position:1500,
			title:'151. Подвал сайта с политикой конфиденциальности и поиском',
			description:'Есть возможность закрепить блок сверху сайта, добавить строку поиска и соц ссылки',
			default_values:{}
		},
		{
			id:109,
			default:1,
			position:1175,
			title:'152. Подвал сайта с колонками меню',
			description:'Данный блок используют для создания многостраничного сайта',
			default_values:{}
		},
		{
			id:110,
			default:1,
			position:1176,
			title:'153. Подвал сайта (4 колонки меню)',
			description:'Данный блок используют для создания многостраничного сайта',
			default_values:{}
		},
		{
			id:111,
			default:1,
			position:1178,
			title:'154.Подвал сайта (2 колонки меню)',
			description:'Данный блок используют для создания многостраничного сайта',
			default_values:{}
		},
		{
			id:112,
			default:1,
			position:1179,
			title:'155. Локаничный подвал сайта',
			description:'Данный блок используют для создания многостраничного сайта',
			default_values:{}
		},
		{
			id:113,
			default:1,
			position:1180,
			title:'156. Подвал сайта (меню по центру)',
			description:'Данный блок используют для создания многостраничного сайта',
			default_values:{}
		},
		{
			id:113,
			default:1,
			position:1181,
			title:'157. Подвал сайта (меню по центру)',
			description:'Данный блок используют для создания многостраничного сайта',
			default_values:{
				hide_sub_title:1,
				style_menu:'bold'
			}
		}
	],
	group:[101, 119, 109],
	deleted:[],
	widget:0
},
{
	name:'Видео',
	icon:'fa fa-video-camera',
	icon_new:'media.svg',
	blocks:[
		{
			id:138,
			default:1,
			position:6100,
			title:'701. Широкое видео',
			description:'Возможность смены фона, включения заголовков',
			default_values:{
				bg:'#f5f5f5',
				video:'https://www.youtube.com/watch?v=SBJhtdDW7OQ'
			}
		},
		{
			id:138,
			default:1,
			position:6101,
			title:'702. Широкое видео с заголовками',
			description:'Возможность смены фона, отключения заголовков',
			default_values:{
				show_title:1,
				show_sub_title:1,
				title:'<span style="font-size:42px"><b>Как уменьшить отказы на сайте?</b></span>',
				sub_title:'<span style="font-size:24px">Топ 10 работающих способов</span>',
				bg:'#f5f5f5',
				video:'https://www.youtube.com/watch?v=X32ZO7XeuHg'
			}
		},
		{
			id:126,
			default:0,
			position:6150,
			title:'703. Видео с текстом и кнопкой',
			description:'Возможность смены фона, включения заголовков, дополнительной сетки, изменения ширины блока',
			default_values:{
				bg:'#f5f5f5',
				use_video:1,
				show_title:0,
				show_sub_title:0,
				padd_bottom:'120',
				width1170:1,
				align_center:1,
				arr1:[
					{
						image1:'section126_image1_1805_new.jpg',
						image2:'section126_image2_1805_new.jpg',
						image3:'section126_image3_1805_new.jpg',
						image4:'section126_image4_1805_new.jpg',
						alt1:'',alt2:'',alt3:'',alt4:'',
						video1:'https://youtu.be/Oav8d0AhiUA',
						form_html1:'Замените HTML',
						form_html2:'Замените HTML',
						title1:'<span style="font-size:42px"><b>Онлайн курс по подбору фотографий</b></span>',
						txt1:'<span style="font-size:18px">Только в этом месяце! Успейте подать заявку на бесплатный курс подбора фотографий для ваших сайтов. Вы научитесь определять цели изображений и повышать конверсию.</span>',
						btn1:{title:'Подать заявку',color:'#000',surround:3,style:5,fsize:4},
						btn2:{title:'Узнать больше',color:'#333',style:5,fsize:4},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#000',action:'thanks',surround:3,style:5,url:'',amount:0}
						],
						form2:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#000',action:'thanks',surround:3,style:5,url:'',amount:0}
						]
					}
				]
			}
		},
		{
			id:126,
			default:0,
			position:6151,
			title:'704. Видео с текстом и кнопкой на плашке',
			description:'Возможность смены фона, включения заголовков, дополнительной сетки, изменения ширины блока',
			default_values:{
				use_video:1,
				show_title:0,
				bg_text:1,
				bg:'#f2f2f2',
				show_sub_title:0,
				width1170:1,
				align_center:1,
				arr1:[
					{
						image1:'section126_image1_1805_new.jpg',
						image2:'section126_image2_1805_new.jpg',
						image3:'section126_image3_1805_new.jpg',
						image4:'section126_image4_1805_new.jpg',
						alt1:'',alt2:'',alt3:'',alt4:'',
						video1:'https://www.youtube.com/watch?v=qONZdzEVikw',
						form_html1:'Замените HTML',
						form_html2:'Замените HTML',
						title1:'<span style="font-size:36px"><b>Задумались о создании своего сайта, но не знаете, каким он должен быть? </b></span>',
						txt1:'<span style="font-size:18px">Если вы придете к заказчику и скажете: «Сделай мне какой-нибудь сайт», то разработчик и сделает его в духе «Вот, я что-то сделал». В итоге клиент недоволен конечным продуктом, а разработчик — претензиями заказчика. Ну а если вы хотите получить качественный продукт и избежать ошибок при его разработке - добро пожаловать.</span>',
						btn1:{title:'Узнать подробнее',color:'#ca2d2a',surround:3,style:3},
						btn2:{title:'Записаться сейчас',color:'#ca2d2a',style:3},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#ca2d2a',action:'thanks',surround:3,style:17,url:'',amount:0}
						],
						form2:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#ca2d2a',action:'thanks',surround:3,style:17,url:'',amount:0}
						]
					}
				]
			}
		},
		{
			id:117,
			default:0,
			position:6200,
			title:'705. Видео с текстами',
			description:'Возможность изменения фона, включения подложки и добавления новых видео снизу',
			default_values:{
				image_or_video:'video',
				show_title:0,
				show_sub_title:0,
				width1170:1,
				bg:'#f5f5f5',
				image_size:'940x680',
				arr1:[
					{
						video1:'https://www.youtube.com/watch?v=upzTgMKK68g',
						alt1:'',
						descr1:'<span style="font-family:open sans"><span style="font-size:32px">Как подключить сервис рассылки сообщений UniSender на свой сайт</span></span>',
						txt1:'<span style="font-family:open sans"><span style="font-size:18px">В этом ролике мы расскажем вам как подключить сервис почтовой рассылки Unisender на свой сайт. Для подключения нам понадобится ключ API этого сервиса и ID списка контактов. После чего конструктор сайтов Tobiz и сервис рассылки сообщений Unisender начнут свою работу.</span></span>'
					},
					{
						video1:'https://www.youtube.com/watch?v=Yu0SaPEho2A',
						alt1:'',
						descr1:'<span style="font-family:open sans"><span style="font-size:32px">Mailchimp: как пользоваться сервисом e-mail рассылок</span></span>',
						txt1:'<span style="font-family:open sans"><span style="font-size:18px">В этом ролике я по шагам покажу вам как настроить и подключить сервис сбора почтовых адресов и рассылок писем Mailchimp. Mailchimp — является платформой автоматизации маркетинга и почтовым маркетинговым сервисом.</span></span>'
					}
				]
			}
		},
		{
			id:250,
			default:0,
			position:6300,
			title:'706. Два видео с подписями',
			description:'Можно изменить цвет фона, добавить подложку под текст и добавить новые видео',
			default_values:{
				mode:1,
				show_title:0,
				show_sub_title:0,
				hide_text2:0,
				width1170:1,
				arr1:[
					{
						image1:'section250_403_image1_new.jpg',
						image2:'section250_403_image2_new.jpg',
						alt1:'',alt2:'',
						form_html1:'Замените HTML',
						form_html2:'Замените HTML',
						video1:'https://youtu.be/1JzFcTMsKjU',
						video2:'https://youtu.be/DQbPqgQhBVk',
						title1:'<p style="text-align:center"><span style="color:#696969">Как вставить видео на сайт с Youtube и не только</span></p>',
						title2:'<p style="text-align:center"><span style="color:#696969">Почему не пришли деньги на мой счет?</span></p>',
						btn1:{title:'Оставить заявку',color:'#000',surround:3,style:1},
						btn2:{title:'Не сейчас',color:'#000',style:1},
						form1:[
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#ff0000',action:'thanks',url:'',amount:0}
						],
						form2:[
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#ff0000',action:'thanks',url:'',amount:0}
						]
					}
				]
			}
		},
		{
			id:226,
			default:0,
			position:6400,
			title:'707. Блок видео с текстом',
			description:'Возможность изменения размера изображение/видео, доп. изображения, анимация.',
			default_values:{
				use_video:'use',
				float:'rightt',
				show_title:0,
				show_sub_title:0,
				align_center:1,
				arr1:[
					{
						image1:'section226_425_image_new.jpg',
						video1:'https://www.youtube.com/watch?v=vLbpmTt4x3Q',
						alt1:'',
						txt1:'<span style="font-size:20px">В этом ролике мы расскажем вам, как создать сайт визитку для пекарни самому, не прибегая к помощи программистов и дизайнеров. Сайт визитка содержит в себе максимально подробную информацию о компании, ее преимущества и контакты. Такой сайт нужен для привлечения клиентов к вашему бизнесу. На создание такого сайта у вас уйдет не больше 1 дня.</span>'
					}
				]
			}
		},
		{
			id:149,
			default:0,
			position:6500,
			title:'708. Три видео с подписями',
			description:'Можно изменить цвет фона, добавить подложку под текст и добавить новые видео',
			default_values:{
				mode:1,
				show_title:0,
				show_sub_title:0,
				width1170:1,
				hide_text2:0,
				arr1:[
					{
						video1:'https://youtu.be/ccVNcv39pZA',
						video2:'https://youtu.be/92H6tqjfgAo',
						video3:'https://youtu.be/opWl7tq_38k',
						alt1:'',alt2:'',alt3:'',
						title1:'<p style="text-align:center"><span style="font-size:18px"><span style="color:#696969">Правила поиска поставщиков для старта интернет магазина</span></span></p>',
						title2:'<p style="text-align:center"><span style="font-size:18px"><span style="color:#696969">Лучшие сайты с бесплатными изображениями для сайта</span></span></p>',
						title3:'<p style="text-align:center"><span style="font-size:18px"><span style="color:#696969">Новая функция на конструкторе Tobiz – управление товарами</span></span></p>'
					}
				]
			}
		},
		{
			id:1159,
			default:1,
			position:6501,
			title:'709. Плитка из 4-х видео',
			description:'Возможность изменить фон. Видео открываются попапом',
			default_values:{}
		},
		{
			id:1160,
			default:1,
			position:6502,
			title:'710. Карусель видео на всю ширину',
			description:'Возможность изменить фон. Видео открываются попапом',
			default_values:{}
		}
	],
	group:[],
	deleted:[],
	widget:0
},
{
	name:'Галерея',
	icon:'fa fa-photo',
	icon_new:'gallery.svg',
	blocks:[
		{
			id:143,
			default:1,
			position:15100,
			title:'801. Галерея из 3-х изображений в ряд',
			description:'Можно удалить или добавить фото, добавить текст, увеличивать фото при клике',
			default_values:{}
		},
		{
			id:146,
			default:1,
			position:15101,
			title:'802. Галерея из 3-х квадратныx изображений в ряд',
			description:'Можно удалить или добавить фото, добавить текст, увеличивать фото при клике',
			default_values:{}
		},
		{
			id:143,
			default:0,
			position:15150,
			title:'803. Галерея из 3-х портретных изображений в ряд',
			description:'Можно удалить или добавить фото, добавить текст, увеличивать фото при клике',
			default_values:{
				bg:'#f2f2f2',
				title:'<b>Примеры работ</b>',
				sub_title:'Ниже представлены сеты с нашей фотосессии',
				image_size:'600x900',
				arr1:[
					{image_box:{title:'',descr:'',alt:'',image:'section143_803_image1_new.jpg',link:''}},
					{image_box:{title:'',descr:'',alt:'',image:'section143_803_image2_new.jpg',link:''}},
					{image_box:{title:'',descr:'',alt:'',image:'section143_803_image3_new.jpg',link:''}}
				]
			}
		},
		{
			id:144,
			default:1,
			position:15160,
			title:'804. Галерея из 4-х изображений в ряд на всю ширину экрана',
			description:'Можно удалить или добавить фото, добавить текст, увеличивать фото при клике',
			default_values:{bg:'#f2f2f2'}
		},
		{
			id:145,
			default:1,
			position:15170,
			title:'805. Галерея из 3-х изображений в ряд на всю ширину дисплея',
			description:'Можно удалить или добавить фото, добавить текст, увеличивать фото при клике',
			default_values:{}
		},
		{
			id:148,
			default:1,
			position:15200,
			title:'806. Галерея из 5 изображений',
			description:'Можно удалить или добавить фото, добавить текст, увеличивать фото при клике',
			default_values:{}
		},
		{
			id:147,
			default:1,
			position:15300,
			title:'807. Галерея из 3-х изображений',
			description:'Можно удалить или добавить фото, добавить текст, увеличивать фото при клике',
			default_values:{}
		},
		{
			id:310,
			default:1,
			position:15400,
			title:'808. Галерея со слайдером',
			description:'Можно удалить или добавить фото, добавить текст, отключить заголовки',
			default_values:{}
		},
		{
			id:310,
			default:1,
			position:15401,
			title:'809. Галерея со слайдером',
			description:'Можно удалить или добавить фото, добавить текст, отключить заголовки',
			default_values:{
				pattern:'otis-redding.png',
				bg:'#212121',
				border:1
			}
		},
		{
			id:313,
			default:1,
			position:15500,
			title:'810. Галерея из 4-х изображений в ряд на всю ширину дисплея',
			description:'Можно удалить или добавить фото, добавить текст, отключить заголовки',
			default_values:{}
		},
		{
			id:315,
			default:1,
			position:15599,
			title:'811. Галерея 3-х изображений и текстом',
			description:'Можно удалить или добавить фото, добавить текст, отключить заголовки',
			default_values:{bg:'#f2f2f2'}
		},
		{
			id:315,
			default:1,
			position:15600,
			title:'812. Галерея 3-х изображений и текстом',
			description:'Можно удалить или добавить фото, добавить текст, отключить заголовки',
			default_values:{
				bg:'#000',
				show_title:0,
				show_sub_title:0,
				arr1:[
					{
						image_box1:{title:'',descr:'',alt:'',image:'section315_812_image1_new.jpg',link:'',link_target:0},
						image_box2:{title:'',descr:'',alt:'',image:'section315_812_image2_new.jpg',link:'',link_target:0},
						image_box3:{title:'',descr:'',alt:'',image:'section315_812_image3_new.jpg',link:'',link_target:0},
						text_box_descr:'<span style="font-size:36px"><b>Услуга по сборке компьютеров</b></span><div><br></div><div><p>Изменить комплектацию представленных на сайте сборок, узнать цену онлайн, сравнить характеристики. Оформить заказ и получить готовый ПК с абсолютно бесплатной профессиональной сборкой. Продвинутый онлайн-сервис для модификации ПК.</p><p><br></p><p>При заказе ПК с операционной системой, устанавливается Windows 10 с полным пакетом обновлений, последние версии драйверов и сервиспаков. Производится процедура обновления биос системы до последней доступной версии.</p></div>'
					}
				]
			}
		},
		{
			id:144,
			default:0,
			position:15601,
			title:'813. Галерея с 8-ю большими изображениями на всю ширину дисплея',
			description:'Можно удалить или добавить фото, добавить текст, отключить заголовки',
			default_values:{
				show_title:0,
				show_sub_title:0,
				padd_top:'0',
				padd_bottom:'0',
				arr1:[
					{image_box:{title:'',descr:'',alt:'',image:'section144_813_img1.jpg',link:'',link_target:0}},
					{image_box:{title:'',descr:'',alt:'',image:'section144_813_img2.jpg',link:'',link_target:0}},
					{image_box:{title:'',descr:'',alt:'',image:'section144_813_img3.jpg',link:'',link_target:0}},
					{image_box:{title:'',descr:'',alt:'',image:'section144_813_img4.jpg',link:'',link_target:0}},
					{image_box:{title:'',descr:'',alt:'',image:'section144_813_img5.jpg',link:'',link_target:0}},
					{image_box:{title:'',descr:'',alt:'',image:'section144_813_img6.jpg',link:'',link_target:0}},
					{image_box:{title:'',descr:'',alt:'',image:'section144_813_img7.jpg',link:'',link_target:0}},
					{image_box:{title:'',descr:'',alt:'',image:'section144_813_img8.jpg',link:'',link_target:0}}
				],
				image_size:'600x900'
			}
		},
		{
			id:138,
			default:0,
			position:15602,
			title:'814. Изображение на весь экран',
			description:'Возможность замены видео на изображения/видео, увеличение ширины',
			default_values:{
				use_image:1,
				image:'sec138_814_img.jpg',
				show_title:0,
				show_sub_title:0,
				img_size:'big_img'
			}
		},
		{
			id:1144,
			default:1,
			position:15603,
			title:'815. Галерея из 7 изображений в ряд на всю ширину дисплея',
			description:'Можно удалить или добавить фото, добавить текст, отключить заголовки',
			default_values:{}
		},
		{
			id:1157,
			default:1,
			position:15604,
			title:'816. Галерея из 3-х квадратных изображений с текстом',
			description:'Можно удалить или добавить фото, добавить текст, отключить заголовки',
			default_values:{}
		},
		{
			id:1145,
			default:1,
			position:15605,
			title:'817. Плитка галереи со случайным размером фото и текстом',
			description:'Можно удалить или добавить фото, добавить текст, отключить заголовки',
			default_values:{}
		},
		{
			id:1155,
			default:0,
			position:10606,
			title:'818. Галерея-слайдер из 5-и фото',
			description:'Можно удалить или добавить фото, добавить текст, отключить заголовки',
			default_values:{
				image_size:'880x1260',
				bg:'#f2f2f2',
				title:'<b>Спортивная одежда</b>',
				sub_title:'У нас вы найдете самую качественную экипировку',
				arr1:[
					{image_box:{title:'',descr:'',alt:'',image:'sec1155_818_img1.jpg',link:'',link_target:0}},
					{image_box:{title:'',descr:'',alt:'',image:'sec1155_818_img2.jpg',link:'',link_target:0}},
					{image_box:{title:'',descr:'',alt:'',image:'sec1155_818_img3.jpg',link:'',link_target:0}},
					{image_box:{title:'',descr:'',alt:'',image:'sec1155_818_img4.jpg',link:'',link_target:0}},
					{image_box:{title:'',descr:'',alt:'',image:'sec1155_818_img5.jpg',link:'',link_target:0}},
					{image_box:{title:'',descr:'',alt:'',image:'sec1155_818_img6.jpg',link:'',link_target:0}},
					{image_box:{title:'',descr:'',alt:'',image:'sec1155_818_img7.jpg',link:'',link_target:0}}
				]
			}
		},
		{
			id:1146,
			default:1,
			position:15609,
			title:'819. Галерея с плиткой из широкого и квадратных изображений',
			description:'Можно удалить или добавить фото, добавить текст, отключить заголовки',
			default_values:{}
		},
		{
			id:1147,
			default:1,
			position:15610,
			title:'820. Галерея с плиткой из 3-х больших изображений',
			description:'Можно удалить или добавить фото, добавить текст, отключить заголовки',
			default_values:{}
		},
		{
			id:1157,
			default:1,
			position:15611,
			title:'821. Галерея из двух больших изображений',
			description:'Можно удалить или добавить фото, добавить текст и кнопки, включить заголовки',
			default_values:{
				show_title:0,
				show_sub_title:0,
				items_count:'count2',
				arr1: [
					{
						link:'',
						image1:'sec1157_821_img1.jpg',
						alt1:'',
						title1:'',
						txt1:'',
						form_html1:'Замените HTML',
						btn1:{title:'Узнать подробнее',color:'#000',surround:3,style:1},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'phone',title:'Введите телефон',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#000',action:'thanks',url:'',surround:3,style:17,amount:0}
						]
					},
					{
						link:'',
						image1:'sec1157_821_img2.jpg',
						alt1:'',
						title1:'',
						txt1:'',
						form_html1:'Замените HTML',
						btn1:{title:'Узнать подробнее',color:'#000',surround:3,style:1},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'phone',title:'Введите телефон',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#000',action:'thanks',url:'',surround:3,style:17,amount:0}
						]
					}
				]
			}
		},
		{
			id:149,
			default:0,
			position:15612,
			title:'822. Галерея с подписями',
			description:'Можно удалить или добавить фото, добавить текст, отключить заголовки',
			default_values:{
				title:'Урчат и обнимаются',
				sub_title:'Лошадок учат манерам и доверию — за сибирскими пони приезжают даже из Москвы',
				text_as_caption:1,
				arr1:[
					{
						image1:'sec149_15612_1.jpg',
						image2:'sec149_15612_2.jpg',
						image3:'sec149_15612_3.jpg',
						alt1:'',alt2:'',alt3:'',
						title1:'Заводчики сравнивают пони с кошками: им нравится, когда их гладят и почёсывают',
						title2:'Пони любят обниматься, совсем как люди',
						title3:'Пони-шпион в «Нике» — «отец семейства»',
						subtitle1:'Фото: Александр Ощепков / НГС',
						subtitle2:'Фото: Александр Ощепков / НГС',
						subtitle3:'Фото: Александр Ощепков / НГС'
					}
				]
			}
		},
		{
			id:149,
			default:0,
			position:15613,
			title:'823. Галерея с подписями',
			description:'Можно удалить или добавить фото, добавить текст, отключить заголовки',
			default_values:{
				show_title:0,
				show_sub_title:0,
				text_as_caption:1,
				img_size:'375x560',
				arr1:[
					{
						image1:'sec149_15613_1.jpg',
						image2:'sec149_15613_2.jpg',
						image3:'sec149_15613_3.jpg',
						alt1:'',alt2:'',alt3:'',
						title1:'Размер животного в иерархии стаи не столь важен как характер',
						title2:'Волк может бежать со скоростью 65 км/ч и прыгать в высоту до 5 метров',
						title3:'Вожак стаи всегда идет впереди своей стаи с высоко поднятым хвостом',
						subtitle1:'Фото: Ольга Герасимова',
						subtitle2:'Фото: Ольга Герасимова',
						subtitle3:'Фото: Ольга Герасимова'
					}
				]
			}
		},
		{
			id:151,
			default:0,
			position:15614,
			title:'824. Галерея с подписями',
			description:'Есть возможность загрузки изображений и изменения текста.',
			default_values:{
				show_title:0,
				show_sub_title:0,
				text_as_caption:1,
				text_separator:0,
				img_radius:'10px',
				img_size:'270x270',
				arr1:[
					{
						image1:'sec151_15614_1.jpg',
						image2:'sec151_15614_2.jpg',
						image3:'sec151_15614_3.jpg',
						image4:'sec151_15614_4.jpg',
						alt1:'',alt2:'',alt3:'',alt4:'',
						title1:'«Осенний ковровый стиль»',
						title2:'«Первый осенний холод»',
						title3:'«Осенний теплый переход»',
						title4:'«Багровые тона осени»',
						subtitle1:'Фотограф: Екатерина Иванова',
						subtitle2:'Фотограф: Ольга Макарова',
						subtitle3:'Фотограф: Дмитрий Михайлов',
						subtitle4:'Фотограф: Иван Алексеев'
					}
				]
			}
		}
	],
	group:[143, 138, 148, 147, 146, 310, 313, 315, 1144, 1157, 1319, 1146],
	deleted:[43, 48, 47, 46, 45, 44, 42, 41],
	widget:0
},
{
	name:'Было / стало',
	icon:'fa fa-photo',
	icon_new:'gallery.svg',
	blocks:[
		{
			id:139,
			default:1,
			position:19001,
			title:'1901. Большое изображение',
			description:'Два изображения с ползунком.',
			default_values:{
				bg:'#f0e5dc',
				pattern:'natural-paper.png',
				padd_top:'80',
				padd_bottom:'100',
				title:'<span style="font-family:cormorant upright,serif"><span style="font-size:44px"><b>Примеры колоризации</b></span></span>',
				sub_title:'<span style="color:#696969"><span style="font-size:22px"><span style="font-family:cormorant upright,serif">Раскрасьте или восстановите цвета фотографий из вашего семейного альбома</span></span></span>',
				image1:'section139_1901_m.png',
				image2:'section139_1901_colored.jpg'
			}
		},
		{
			id:1800,
			default:1,
			position:19002,
			title:'1902. Три изображения',
			description:'Три изображения с ползунком и текстом.',
			default_values:{
				back_dark:1,
				opacity_color1:'#fdfbfb',
				opacity_color2:'#ebedee',
				bg_opacity:1,
				bg_text:1,
				width1170:1,
				padd_top:'90',
				padd_bottom:'100'
			}
		},
		{
			id:1810,
			default:1,
			position:19003,
			title:'1903. Изображение и текст',
			description:'Изображение с ползунком и текст.',
			default_values:{
				show_title:0,
				show_sub_title:0,
				width1170:1,
				back_dark:1,
				bg_opacity:1,
				opacity_color1:'#fccb90',
				opacity_color2:'#fcb69f',
				move_to:'bottom',
				image_size:'450x600',
				pattern:'back-pattern.png'
			}
		},
		{
			id:1820,
			default:1,
			position:19004,
			title:'1904. Два изображения с ползунком',
			description:'Два изображения с ползунком и кнопками.',
			default_values:{
				padd_top:'60',
				padd_bottom:'60',
				width1170:1,
				show_btns:1
			}
		}
	],
	group:[],
	deleted:[],
	widget:0
},
{
	name:'Мультикомпонентные',
	icon:'fa fa-hand-pointer-o',
	icon_new:'abc.svg',
	blocks:[
		{
			id:2156,
			default:1,
			position:16401,
			title:'1. Плитка из изображений, иконок и контента с кнопками',
			description:'Возможность загружать свои изображения и иконки, установить ссылки на изображения',
			default_values:{}
		},
		{
			id:2157,
			default:1,
			position:16402,
			title:'2. Плитка из изображений и контента с кнопками',
			description:'Возможность загружать свои изображения и иконки, заменить изображения на иконки',
			default_values:{}
		},
		{
			id:2158,
			default:1,
			position:16404,
			title:'3. Контент с 3-мя изображениями',
			description:'Можно менять цвет фона контента, заменить большое фото на видео',
			default_values:{}
		},
		{
			id:2159,
			default:1,
			position:16405,
			title:'4. Контент с 3-мя наплывающими изображениями',
			description:'Можно менять цвет фона контента, изменить расположение элементов',
			default_values:{}
		},
		{
			id:2158,
			default:1,
			position:16406,
			title:'5. Контент с 3-мя изображениями',
			description:'Можно менять цвет фона контента, заменить большое фото на видео',
			default_values:{
				pos:1,
				bg:'#000',
				bg_txt:'#fff'
			}
		},
		{
			id:2159,
			default:0,
			position:16407,
			title:'6. Контент с 3-мя наплывающими изображениями',
			description:'Можно менять цвет фона контента, изменить расположение элементов',
			default_values:{
				bg:'#3e3e35',
				bg_txt:'#d8dfe5',
				pos:1,
				arr1:[
					{
						image2:'sec2159_2_img2.jpg',
						image3:'sec2159_2_img3.jpg',
						image4:'sec2159_2_img4.jpg',
						alt2:'',alt3:'',alt4:'',
						title2:'<b>Выставка ретро автомобилей</b>',
						sub_title2:'Импровизированная выставка, общение с единомышленниками, танцы, продажа запчастей и сувениров, конкурсы и, конечно, гонка-спринт – таков формат мероприятия.<div><br><div>Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий требуют от нас анализа соответствующий условий активизации. Задача организации, в особенности же реализация намеченных плановых заданий в значительной степени обуславливает создание систем массового участия.</div></div>',
						txt1:'Текст',
						txt2:'Текст',
						txt3:'Текст',
						link:'',
						link_target:0,
						form_html2:'Замените HTML',
						btn2:{title:'Оставить заявку',color:'#000',surround:1,style:1},
						form2:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Оставить заявку',color:'#000',action:'thanks',surround:3,style:17,url:'',amount:0}
						]
					}
				]
			}
		},
		{
			id:2156,
			default:0,
			position:16408,
			title:'7. Плитка из изображений, иконок и контента с кнопками',
			description:'Возможность загружать свои изображения и иконки, установить ссылки на изображения',
			default_values:{
				width1170:1,
				show_btn:0,
				title:'<span style="color:#000"><span style="font-size:42px"><b>Стильный декор для дома</b></span></span>',
				sub_title:'<span style="color:#000"><span style="font-size:24px">Магазин предметов интерьера</span></span>',
				mdico1:'svg-icon-landscape-mode',
				area_text:'Картины и фоторамки',
				image1:'sec2156_2_img1.jpg',
				bg_area:'#a69675',
				icon_colors:'#e3e4e3',
				bg_txt:'#e3e4e3',
				btn1:{title:'Узнать больше',color:'#000',surround:3,style:17},
				arr1:[
					{
						image2:'sec2156_2_img2.jpg',
						image3:'sec2156_2_img3.jpg',
						image4:'sec2156_2_img4.jpg',
						alt2:'',alt3:'',alt4:'',
						title2:'<span style="font-size:26px"><b><span style="color:#000">Спальня в стиле фьюжн</span></b></span>',
						area_text2:'Напитки мира',
						sub_title2:'<span style="font-size:18px"><span style="color:#000">Игра сочетаний и контрастов. Как спланировать помещение и подобрать подходящую мебель.</span></span>',
						title3:'<span style="color:#000"><span style="font-size:26px"><b>Блог об интерьерах</b></span></span>',
						sub_title3:'<span style="font-size:18px"><span style="color:#000">Главный акцент в декоре: на что обратить внимание при выборе</span></span>',
						area_text3:'Коллекция для дома',
						c_icon2:'Home.png',
						c_icon3:'Chart.png',
						mdico2:'svg-icon-macro',
						mdico3:'svg-icon-mineral',
						txt1:'',
						txt2:'',
						txt3:'',
						link:'',
						link2:'',
						link3:'',
						link4:'',
						link_target:0,
						form_html2:'Замените HTML',
						form_html3:'Замените HTML',
						btn2:{title:'Подробнее',color:'#000',surround:1,style:17},
						form2:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Заказать',color:'#000',action:'thanks',surround:3,style:17,url:'',amount:0}
						],
						btn3:{title:'Подписаться',color:'#000',surround:1,style:17},
						form3: [
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Заказать',color:'#000',action:'thanks',surround:3,style:17,url:'',amount:0}
						]
					}
				]
			}
		},
		{
			id:2157,
			default:0,
			position:16409,
			title:'8. Плитка из изображений и контента с кнопками',
			description:'Возможность загружать свои изображения и иконки, заменить изображения на иконки',
			default_values:{
				bg_area:'#212121',
				bg_txt:'#212121',
				icon_colors:'#fff',
				pos:1,
				arr1:[
					{
						title:'<b>Приятная атмосфера</b>',
						sub_title:'Нельзя купить счастье, но можно купить виски в нашем баре',
						area_text:'',
						image1:'sec2157_2_img1.jpg',
						image2:'sec2157_2_img2.jpg',
						image3:'sec2157_2_img3.jpg',
						image4:'sec2157_2_img4.jpg',
						alt1:'',alt2:'',alt3:'',alt4:'',
						c_icon2:'Home.png',
						c_icon3:'Chart.png',
						title2:'<b>Широкий выбор коктейлей</b>',
						area_text2:'',
						sub_title2:'Если вы никогда здесь не были, то просто обязаны посетить знаменитый «Гадкий Койот» — Крепкие напитки, пиво, лучшие коктейли, классная музыка, весёлая и непринуждённая атмосфера.',
						title3:'<b>Зажигательная атмосфера</b>',
						sub_title3:'Настроение настоящего американского бара создаст яркий декор, световые знаки, флаги, граффити и друге элементы интерьера.',
						area_text3:'',
						mdico2:'md-people-outline',
						mdico3:'md-all-inclusive',
						txt1:'',
						txt2:'',
						txt3:'',
						link:'',
						link2:'',
						link3:'',
						link4:'',
						link_target:0,
						form_html2:'Замените HTML',
						form_html3:'Замените HTML',
						btn1:{title:'Забронировать столик',color:'#9628b3',surround:3,style:17},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Оставить заявку',color:'#9628b3',action:'thanks',surround:3,style:17,url:'',amount:0}
						],
						btn2:{title:'Забронировать столик',color:'#9628b3',surround:1,style:17},
						form2:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Оставить заявку',color:'#9628b3',action:'thanks',surround:3,style:17,url:'',amount:0}
						],
						btn3:{title:'Забронировать столик',color:'#9628b3',surround:1,style:17},
						form3: [
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Оставить заявку',color:'#9628b3',action:'thanks',surround:3,style:17,url:'',amount:0}
						]
					}
				]
			}
		}
	],
	group:[2156, 2157, 1302, 2158, 2159],
	deleted:[],
	widget:0
},
{
	name:'Разделители',
	icon:'fa fa-external-link',
	icon_new:'substract.svg',
	blocks:[
		{
			id:335,
			default:1,
			position:14200,
			title:'Линии',
			description:'Коротая линия',
			default_values:{style:'simple'}
		},
		{
			id:335,
			default:0,
			position:14201,
			title:'Линии',
			description:'Длинная линия',
			default_values:{style:'simple_w'}
		},
		{
			id:335,
			default:0,
			position:14202,
			title:'Линии',
			description:'Длинная линия с номером',
			default_values:{style:'with_num'}
		},
		{
			id:335,
			default:0,
			position:14203,
			title:'Линии',
			description:'Линия с прозрачными краями ',
			default_values:{style:'transp'}
		}
	],
	widget:0
},
{
	name:'Калькуляторы',
	icon:'fa fa-calc',
	icon_new:'calculator_1.svg',
	blocks:[
		{
			id:1307,
			default:1,
			position:17000,
			title:'1600. Калькулятор стандарт',
			description:'Калькулятор с формой отправки расчета',
			default_values:{}
		},
		{
			id:1307,
			default:0,
			position:17001,
			title:'1601. Калькулятор такси',
			description:'Калькулятор с формой отправки расчета. Расчет стоимости такси',
			default_values:{
				title:'Калькулятор такси',
				calc_style:'orange',
				image_on:1,
				image1:'image_8250.jpg',
				calculator: {
					params: [
						{
							type:'text',
							title:'Введите имя',
							description:'',
							width_half:1,
							required:1
						},
						{
							type:'phone',
							title:'Введите телефон',
							description:'',
							width_half:1,
							required:1
						},
						{
							type:'text',
							title:'Куда подать машину',
							description:'',
							required:1
						},
						{
							type:'text',
							title:'Куда поедем',
							description:'',
							required:1
						},
						{
							type:'select',
							title:'Выберите из списка',
							description:'',
							required:1,
							options:[
								{title:'Эконом',val:100},
								{title:'Люкс',val: 200}
							]
						},
						{
							type:'checkbox',
							title:'Тариф',
							description:'',
							required:0,
							options:[
								{title:'Перевозка животных',val: 50},
								{title:'Кондиционер',val: 50},
								{title:'Отделение для багажа',val: 50}
							]
						},
						{
							type:'btn',
							title:'Заказать',
							color:'#475a64',
							style:17,
							surround:3,
							action:'thanks',
							url:'',
							amount:0
						}
					],
					result: [
						{
							title:'Обшая стоимость',
							formula:'E+F'
						}
					]
				}
			}
		},
		{
			id:1307,
			default:0,
			position:17002,
			title:'1602. Калькулятор ипотеки',
			description:'Калькулятор с формой отправки расчета. Расчет стоимости ипотеки',
			default_values:{
				title:'Калькулятор ипотеки',
				calc_style:'green',
				image_on:1,
				image1:'image_3.jpg',
				calculator: {
					params: [
						{
							type:'range',
							title:'Срок кредита, лет',
							description:'',
							required:1,
							options:[
								{
									step:1,
									min_val:1,
									max_val: 25
								}
							]
						},
						{
							type:'number',
							title:'Стоимость недвижимости, руб ',
							description:'',
							required:1,
							width_half:1,
							options:[{val:1}]
						},
						{
							type:'number',
							title:'Первоначальный взнос, руб',
							description:'',
							required:1,
							width_half:1,
							options:[{val:1}]
						},
						{
							type:'range',
							title:'Процентная ставка, % годовых',
							description:'',
							required:1,
							options:[
								{
									step:0.1,
									min_val:1,
									max_val: 25
								}
							]
						},
						{
							type:'checkbox',
							title:'Тариф',
							description:'',
							required:0,
							options:[
								{title:'Без залога',val:0},
								{title:'Без поручителей',val:0},
								{title:'Без подтверждения дохода',val:0},
								{title:'Рефинансирование',val:0}
							]
						},
						{
							type:'radio',
							title:'Готовность жилья',
							description:'',
							required:1,
							options:[
								{title:'Строящееся',val:0},
								{title:'Готовое',val:0}
							]
						},
						{
							type:'select',
							title:'Стаж на последнем месте работы',
							description:'',
							required:1,
							width_half:1,
							options:[
								{title:'Менее 6 месяцев',val:0},
								{title:'Менее 3 лет',val:0},
								{title:'Более 3 лет',val:0}
							]
						},
						{
							type:'select',
							title:'Город',
							description:'',
							width_half:1,
							required:1,
							options:[
								{title:'Москва',val:0},
								{title:'Казань',val: 200},
								{title:'Чебоксары',val: 200}
							]
						},
						{
							type:'text',
							title:'Введите имя',
							description:'',
							required:1
						},
						{
							type:'email',
							title:'Введите email',
							description:'',
							required:1
						},
						{
							type:'phone',
							title:'Введите телефон',
							description:'',
							required:1
						},
						{
							type:'btn',
							title:'Заказать',
							color:'#475a64',
							style:17,
							surround:3,
							action:'thanks',
							url:'',
							amount:0
						}
					],
					result: [
						{
							title:'Сумма кредита',
							formula:'B-C'
						},
						{
							title:'Ежемесячный платеж',
							formula:'(B-C)/(A*12)+(B-C)*(D*0.001)'
						}
					]
				}
			}
		},
		{
			id:1307,
			default:0,
			position:17003,
			title:'1603. Калькулятор расчета индекса массы',
			description:'Калькулятор с формой отправки расчета. Расчет индекса массы',
			default_values:{
				title:'Калькулятор расчета индекса массы',
				calc_style:'blue',
				image_on:1,
				image1:'image_10173.jpg',
				calculator: {
					params: [
						{
							type:'text',
							title:'Введите имя',
							description:'',
							width_half:1,
							required:1
						},
						{
							type:'email',
							title:'Введите email',
							description:'',
							width_half:1,
							required:1
						},
						{
							type:'number',
							title:'Вес',
							description:'',
							required:1,
							options:[{val:1}]
						},
						{
							type:'number',
							title:'Рост',
							description:'',
							required:1,
							options:[{val:1}]
						},
						{
							type:'textarea',
							title:'Текстовое поле',
							description:'',
							required:1,
							options:[
								{
									title:'Дополнительная информация',
									val:'меньше 15 - острый дефицит веса\nот 15 до 20 - дефицит веса\nот 20 до 25 - нормальный вес\nот 25 до 30 - избыточный вес\nбольше 30 - ожирение'
								}
							]
						},
						{
							type:'btn',
							title:'Заказать',
							color:'#475a64',
							style:17,
							surround:3,
							action:'thanks',
							url:'',
							amount:0
						}
					],
					result: [
						{
							title:'Индекс массы дела',
							formula:'C/(D/100)*2'
						}
					]
				}
			}
		},
		{
			id:1307,
			default:0,
			position:17004,
			title:'1604. Калькулятор расчета заказа пиццы',
			description:'Калькулятор с формой отправки расчета. Заказ пиццы',
			default_values:{
				title:'Калькулятор расчета пиццы',
				calc_style:'orange',
				image_on:1,
				image1:'image_6036.jpg',
				calculator: {
					params: [
						{
							type:'select',
							title:'Выберите соус',
							description:'',
							required:1,
							options:[
								{
									title:'Томатный',
									val: 30
								},
								{
									title:'Цезарь',
									val: 35
								},
								{
									title:'Сливочный',
									val: 25
								}
							]
						},
						{
							type:'checkbox',
							title:'Ингридиенты',
							description:'',
							required:0,
							options:[
								{
									title:'Бекон',
									val: 40
								},
								{
									title:'Ветчина',
									val: 45
								},
								{
									title:'Колбаски',
									val: 35
								},
								{
									title:'Грибы',
									val: 20
								},
								{
									title:'Помидоры',
									val: 20
								},
								{
									title:'Сыр',
									val: 25
								}
							]
						},
						{
							type:'radio',
							title:'Доставка',
							description:'',
							required:1,
							options:[
								{
									title:'Самовывоз',
									val:0
								},
								{
									title:'Доставка до двери',
									val: 200
								}
							]
						},
						{
							type:'text',
							title:'Введите имя',
							description:'',
							width_half:1,
							required:1
						},
						{
							type:'email',
							title:'Введите email',
							description:'',
							width_half:1,
							required:1
						},
						{
							type:'btn',
							title:'Заказать',
							color:'#ed7a00',
							style:17,
							surround:3,
							action:'thanks',
							url:'',
							amount:0
						}
					],
					result: [
						{
							title:'Стоимость пиццы',
							formula:'A+B+C'
						}
					]
				}
			}
		},
		{
			id:1307,
			default:0,
			position:17005,
			title:'1605. Калькулятор расчета стоимости натяжных потолков',
			description:'Калькулятор с формой отправки расчета. Стоимость натяжных потолков',
			default_values:{
				title:'Калькулятор стоимости натяжных потолков',
				calc_style:'grown',
				image_on:1,
				image1:'image_7078.jpg',
				calculator: {
					params: [
						{
							type:'number',
							title:'Длина, м',
							description:'',
							required:1,
							width_half:1,
							options:[
								{
									val:1
								}
							]
						},
						{
							type:'number',
							title:'Ширина, м',
							description:'',
							required:1,
							width_half:1,
							options:[
								{
									val:1
								}
							]
						},
						{
							type:'select',
							title:'Выберите материал',
							description:'',
							width_half:1,
							required:1,
							options:[
								{
									title:'Матовые',
									val:100
								},
								{
									title:'Сатиновые',
									val: 200
								},
								{
									title:'Глянцевые',
									val: 300
								},
								{
									title:'Тканевые',
									val: 400
								}
							]
						},
						{
							type:'select',
							title:'Тип полотна',
							description:'',
							required:1,
							width_half:1,
							options:[
								{
									title:'Лаковый(2,2)',
									val:100
								},
								{
									title:'Лаковый(3)',
									val: 300
								},
								{
									title:'Матовый(3)',
									val: 400
								},
								{
									title:'Матовый(5,5)',
									val: 600
								},
								{
									title:'Сатиновый(2,2)',
									val: 700
								},
								{
									title:'Сатиновый(3)',
									val: 800
								}
							]
						},
						{
							type:'radio',
							title:'Профиль',
							description:'',
							required:1,
							options:[
								{
									title:'Алюминиевый',
									val:100
								},
								{
									title:'Профиль ПВХ',
									val: 200
								}
							]
						},
						{
							type:'radio',
							title:'Вставка маскировочная',
							description:'',
							required:1,
							options:[
								{
									title:'Белая/черная',
									val:100
								},
								{
									title:'Под цвет полотна',
									val: 200
								}
							]
						},
						{
							type:'number',
							title:'Кол-во люстр',
							description:'',
							width_half:1,
							required:1,
							options:[
								{
									val:1
								}
							]
						},
						{
							type:'number',
							title:'Кол-во светильников',
							description:'',
							width_half:1,
							required:1,
							options:[
								{
									val:1
								}
							]
						},
						{
							type:'number',
							title:'Криволинейные участки, м',
							description:'',
							width_half:1,
							required:1,
							options:[
								{
									val:1
								}
							]
						},
						{
							type:'number',
							title:'Крепление люстры, шт',
							description:'',
							width_half:1,
							required:1,
							options:[
								{
									val:100
								}
							]
						},
						{
							type:'text',
							title:'Введите имя',
							description:'',
							width_half:1,
							required:1
						},
						{
							type:'email',
							title:'Введите email',
							description:'',
							width_half:1,
							required:1
						},
						{
							type:'btn',
							title:'Заказать',
							color:'#5a4036',
							style:17,
							surround:3,
							action:'thanks',
							url:'',
							amount:0
						}
					],
					result: [
						{
							title:'Стоимость натяжного потолка',
							formula:'A*B+C+D+E+F*100+G*100+J*100'
						}
					]
				}
			}
		},
		{
			id:1307,
			default:0,
			position:17006,
			title:'1606. Калькулятор расчета стоимости холодильника',
			description:'Калькулятор с формой отправки расчета. Стоимость холодильника',
			default_values:{
				title:'Калькулятор стоимости холодильника',
				calc_style:'blue',
				image_on:1,
				image1:'image_6007.jpg',
				calculator: {
					params: [
						{
							type:'select',
							title:'БРЕНД',
							description:'',
							required:1,
							options:[
								{
									title:'ATLANT',
									val: 20000
								},
								{
									title:'BOSCH',
									val: 21000
								},
								{
									title:'HAIER',
									val: 22000
								},
								{
									title:'Hotpoint ARISTON',
									val: 23500
								},
								{
									title:'INDESIT',
									val: 25000
								}
							]
						},
						{
							type:'select',
							title:'ТИП',
							description:'',
							required:1,
							options:[
								{
									title:'French Door',
									val: 200
								},
								{
									title:'Side-by-Side',
									val: 30
								},
								{
									title:'Двухкамерный',
									val: 250
								},
								{
									title:'Однокамерный ',
									val: 220
								}
							]
						},
						{
							type:'select',
							title:'ОБЩИЙ ОБЪЕМ, Л.',
							description:'',
							required:1,
							options:[
								{
									title:'10 - 129',
									val:100
								},
								{
									title:'130 - 199',
									val: 200
								},
								{
									title:'200 - 299',
									val: 400
								},
								{
									title:'300 - 399',
									val: 600
								}
							]
						},
						{
							type:'select',
							title:'СИСТЕМА ОХЛАЖДЕНИЯ',
							description:'',
							required:1,
							options:[
								{
									title:'No Frost',
									val: 400
								},
								{
									title:'Статическая',
									val: 800
								}
							]
						},
						{
							type:'select',
							title:'ЦВЕТ',
							description:'',
							required:1,
							options:[
								{
									title:'Красный',
									val: 50
								},
								{
									title:'Желтый',
									val:100
								},
								{
									title:'Голубой',
									val:150
								},
								{
									title:'Белый',
									val: 200
								}
							]
						},
						{
							type:'radio',
							title:'ТИП КОМПРЕССОРА',
							description:'',
							required:1,
							options:[
								{
									title:'Инверторный',
									val:0
								},
								{
									title:'Линейный инверторный',
									val: 200
								},
								{
									title:'обычный',
									val: 200
								}
							]
						},
						{
							type:'text',
							title:'Введите имя',
							description:'',
							width_half:1,
							required:1
						},
						{
							type:'email',
							title:'Введите email',
							description:'',
							width_half:1,
							required:1
						},
						{
							type:'btn',
							title:'Заказать',
							color:'#084673',
							style:17,
							surround:3,
							action:'thanks',
							url:'',
							amount:0
						}
					],
					result: [
						{
							title:'Стоимость холодильника',
							formula:'A+B+C+E+D+F'
						}
					]
				}
			}
		},
		{
			id:1307,
			default:0,
			position:17007,
			title:'1607. Расчет стоимости окна',
			description:'Калькулятор с формой отправки расчета. Расчет стоимости окна',
			default_values:{
				title:'Расчет стоимости окна',
				calc_style:'orange',
				image_on:1,
				image1:'image_3048.jpg',
				calculator: {
					params: [
						{
							type:'select',
							title:'Выберите тип окна',
							description:'',
							width_half:1,
							required:1,
							options:[
								{
									title:'Одностворчатое окно',
									val: 40
								},
								{
									title:'Двустворчатое окно',
									val: 80
								},
								{
									title:'Трехстворчатое окно',
									val:120
								}
							]
						},
						{
							type:'select',
							title:'Выберите производителя профиля',
							description:'',
							required:1,
							width_half:1,
							options:[
								{
									title:'Rehau',
									val: 20
								},
								{
									title:'KBE',
									val: 30
								},
								{
									title:'GUTWERK',
									val: 40
								}
							]
						},
						{
							type:'range',
							title:'Укажите ширину,мм',
							description:'',
							required:1,
							options:[
								{
									step: 5,
									min_val: 500,
									max_val: 3000
								}
							]
						},
						{
							type:'range',
							title:'Укажите высоту,мм',
							description:'',
							required:1,
							options:[
								{
									step: 5,
									min_val: 500,
									max_val: 3000
								}
							]
						},
						{
							type:'select',
							title:'Выберите профиль',
							description:'',
							required:1,
							width_half:1,
							options:[
								{
									title:'3-х камерный',
									val: 300
								},
								{
									title:'5-ти камерный',
									val: 500
								}
							]
						},
						{
							type:'select',
							title:'Выберите стеклопакет',
							description:'',
							width_half:1,
							required:1,
							options:[
								{
									title:'24 мм. Однокамерный',
									val: 200
								},
								{
									title:'32 мм. Двухкамерный',
									val: 300
								}
							]
						},
						{
							type:'checkbox',
							title:'Дополнительные параметры',
							description:'',
							required:0,
							options:[
								{
									title:'Энергосберегающий',
									val: 200
								},
								{
									title:'Мультифункциональный',
									val: 300
								},
								{
									title:'С заполнением аргоном',
									val: 400
								}
							]
						},
						{
							type:'radio',
							title:'Подоконник',
							description:'',
							required:1,
							options:[
								{
									title:'Требуется',
									val: 500
								},
								{
									title:'Не требуется',
									val:0
								}
							]
						},
						{
							type:'range',
							title:'Ширина, мм',
							description:'',
							required:1,
							options:[
								{
									step: 5,
									min_val:100,
									max_val:1000
								}
							]
						},
						{
							type:'radio',
							title:'Отлив',
							description:'',
							required:1,
							options:[
								{
									title:'Требуется',
									val: 500
								},
								{
									title:'Не требуется',
									val:0
								}
							]
						},
						{
							type:'text',
							title:'Введите имя',
							description:'',
							width_half:1,
							required:1
						},
						{
							type:'email',
							title:'Введите email',
							description:'',
							width_half:1,
							required:1
						},
						{
							type:'btn',
							title:'Заказать',
							color:'#ed7a00',
							style:17,
							surround:3,
							action:'thanks',
							url:'',
							amount:0
						}
					],
					result: [
						{
							title:'Стоимость окна',
							formula:'(A+B)*(C+D)+E+F+G+I+J'
						}
					]
				}
			}
		},
		{
			id:1307,
			default:0,
			position:17008,
			title:'1608. Калькулятор расчета объема бетона',
			description:'Калькулятор с формой отправки расчета. Объем бетон',
			default_values:{
				title:'Расчет объема бетона для фундамента',
				calc_style:'default',
				image_on:1,
				image1:'image_284.jpg',
				calculator: {
					params: [
						{
							type:'number',
							title:'ДЛИНА ФУНДАМЕНТА (М)',
							description:'',
							width_half:1,
							required:1,
							options:[
								{
									val:1
								}
							]
						},
						{
							type:'number',
							title:'ВЫСОТА ФУНДАМЕНТА (М)',
							description:'',
							width_half:1,
							required:1,
							options:[
								{
									val:1
								}
							]
						},
						{
							type:'number',
							title:'ШИРИНА ФУНДАМЕНТА (М)',
							description:'',
							width_half:1,
							required:1,
							options:[
								{
									val:1
								}
							]
						},
						{
							type:'select',
							title:'Цемент',
							description:'',
							width_half:1,
							required:1,
							options:[
								{
									title:'М-500',
									val: 500
								},
								{
									title:'М-550',
									val: 550
								},
								{
									title:'М-600',
									val: 600
								}
							]
						},
						{
							type:'text',
							title:'Введите имя',
							description:'',
							width_half:1,
							required:1
						},
						{
							type:'email',
							title:'Введите email',
							description:'',
							width_half:1,
							required:1
						},
						{
							type:'btn',
							title:'Заказать',
							color:'#475a64',
							style:17,
							surround:3,
							action:'thanks',
							url:'',
							amount:0
						}
					],
					result: [
						{
							title:'Стоимость бетона',
							formula:'(A+B+C)*D'
						}
					]
				}
			}
		},
		{
			id:1307,
			default:0,
			position:17009,
			title:'1609. Калькулятор расчета осаго',
			description:'Калькулятор с формой отправки расчета. Осаго',
			default_values:{
				title:'Расчет осаго',
				calc_style:'orange',
				image_on:1,
				calculator: {
					params: [
						{
							type:'radio',
							title:'Собственник ТС',
							description:'',
							required:1,
							options:[
								{
									title:'Физическое лицо',
									val: 500
								},
								{
									title:'Юридическое лицо',
									val: 600
								}
							]
						},
						{
							type:'radio',
							title:'Прописка собственника ТС',
							description:'',
							required:1,
							options:[
								{
									title:'Москва',
									val: 2
								},
								{
									title:'Московская область',
									val:1.7
								}
							]
						},
						{
							type:'select',
							title:'Возраст и стаж водителя',
							description:'',
							width_half:1,
							required:1,
							options:[
								{
									title:'Возраст более 22 лет, стаж более 3 лет',
									val:1
								},
								{
									title:'Возраст до 22 лет включительно, стаж свыше 3 лет',
									val:1.6
								},
								{
									title:'Возраст более 22 лет, стаж до 3 лет включительно',
									val:1.7
								},
								{
									title:'Возраст до 22 лет включительно, стаж до 3 лет включительно',
									val:1.8
								},
								{
									title:'Без ограничений',
									val:1.8
								}
							]
						},
						{
							type:'select',
							title:'Безаварийный стаж водителя',
							description:'',
							width_half:1,
							required:1,
							options:[
								{
									title:'Договор ОСАГО заключается впервые',
									val:1
								},
								{
									title:'1 год безаварийной езды',
									val:0.95
								},
								{
									title:'2 года безаварийной езды',
									val:0.9
								},
								{
									title:'3 года безаварийной езды',
									val:0.85
								},
								{
									title:'4 года безаварийной езды',
									val:0.8
								},
								{
									title:'5 года безаварийной езды',
									val:0.75
								},
								{
									title:'6 года безаварийной езды',
									val:0.7
								},
								{
									title:'7 года безаварийной езды',
									val:0.65
								},
								{
									title:'8 года безаварийной езды',
									val:0.6
								},
								{
									title:'9 года безаварийной езды',
									val:0.55
								},
								{
									title:'10 года безаварийной езды',
									val:0.5
								}
							]
						},
						{
							type:'select',
							title:'Мощность двигателя, Л.С.',
							description:'',
							width_half:1,
							required:1,
							options:[
								{
									title:'до 50 включительно',
									val:0.6
								},
								{
									title:'свыше 50 до 70 включительно',
									val:1
								},
								{
									title:'свыше 70 до 100 включительно',
									val:1.1
								},
								{
									title:'свыше 100 до 120 включительно',
									val:1.2
								},
								{
									title:'свыше 120 до 150 включительно',
									val:1.4
								},
								{
									title:'свыше 150',
									val:1.6
								}
							]
						},
						{
							type:'select',
							title:'Срок страхования, мес',
							description:'',
							width_half:1,
							required:1,
							options:[
								{
									title:'10 месяцев и более',
									val:1
								},
								{
									title:'9 месяцев',
									val:0.95
								},
								{
									title:'8 месяцев',
									val:0.9
								},
								{
									title:'7 месяцев',
									val:0.85
								},
								{
									title:'6 месяцев',
									val:0.7
								},
								{
									title:'5 месяцев',
									val:0.6
								},
								{
									title:'4 месяцев',
									val:0.5
								},
								{
									title:'3 месяцев',
									val:0.4
								}
							]
						},
						{
							type:'select',
							title:'Тип транспортного средства',
							description:'',
							required:1,
							options:[
								{
									title:'Мотоциклы, мопеды и легкие квадрициклы (кат. A, М)',
									val: 860
								},
								{
									title:'Легковые автомобили физических лиц и ИП (ТС категории В, ВЕ)',
									val: 3400
								},
								{
									title:'Легковые автомобили юридических лиц (ТС категории В, ВЕ)',
									val: 2570
								},
								{
									title:'Легковые автомобили, используемые в качестве такси (ТС категории В, ВЕ)',
									val: 6100
								},
								{
									title:'Грузовые автомобили (ТС категории С, СЕ) с разрешенной максимальной массой 16 т и менее',
									val: 3500
								},
								{
									title:'Грузовые автомобили (ТС категории С, СЕ) с разрешенной максимальной массой более 16 т',
									val: 5280
								}
							]
						},
						{
							type:'text',
							title:'Введите имя',
							description:'',
							required:1
						},
						{
							type:'email',
							title:'Введите email',
							description:'',
							required:1
						},
						{
							type:'phone',
							title:'Введите телефон',
							description:'',
							required:1
						},
						{
							type:'btn',
							title:'Заказать',
							color:'#ed7a00',
							style:17,
							surround:3,
							action:'thanks',
							url:'',
							amount:0
						}
					],
					result: [
						{
							title:'Стоимость осаго',
							formula:'A*B*C*D*E*F'
						}
					]
				}
			}
		},
		{
			id:1307,
			default:0,
			position:17010,
			title:'1610. Калькулятор расчета кухонного гарнитура',
			description:'Калькулятор с формой отправки расчета. Расчет кухонного гарнитура',
			default_values:{
				title:'Расчет кухонного гарнитура',
				calc_style:'green',
				image_on:1,
				image1:'image_4.jpg',
				calculator: {
					params: [
						{
							type:'select',
							title:'БРЕНД',
							description:'',
							width_half:1,
							required:1,
							options:[
								{
									title:'Восход',
									val:10
								},
								{
									title:'Закат',
									val:12
								},
								{
									title:'Новая-Мебель',
									val:15
								}
							]
						},
						{
							type:'select',
							title:'СТРАНА ПРОИЗВОДСТВА',
							description:'',
							width_half:1,
							required:1,
							options:[
								{
									title:'Россия',
									val:1.2
								},
								{
									title:'Китай',
									val:1.1
								},
								{
									title:'Беларусь',
									val:1.3
								}
							]
						},
						{
							type:'number',
							title:'Ширина, см.',
							description:'',
							width_half:1,
							required:1,
							options:[
								{
									val:1
								}
							]
						},
						{
							type:'number',
							title:'Высота, cм',
							description:'',
							width_half:1,
							required:1,
							options:[{val:1}]
						},
						{
							type:'select',
							title:'Глубина, см',
							description:'',
							width_half:1,
							required:1,
							options:[
								{
									title:'30',
									val: 30
								},
								{
									title:'40',
									val: 40
								},
								{
									title:'50',
									val: 50
								}
							]
						},
						{
							type:'select',
							title:'Цвет',
							description:'',
							width_half:1,
							required:1,
							options:[
								{
									title:'Белый/Черный',
									val:100
								},
								{
									title:'Крем/Синий',
									val: 200
								},
								{
									title:'Мрамор',
									val: 500
								}
							]
						},
						{
							type:'radio',
							title:'МАТЕРИАЛ',
							description:'',
							required:1,
							options:[
								{
									title:'ЛДСП',
									val:1
								},
								{
									title:'МДФ',
									val:1.5
								}
							]
						},
						{
							type:'text',
							title:'Введите имя',
							description:'',
							required:1
						},
						{
							type:'email',
							title:'Введите email',
							description:'',
							required:1
						},
						{
							type:'phone',
							title:'Введите телефон',
							description:'',
							required:1
						},
						{
							type:'btn',
							title:'Заказать',
							color:'#ed7a00',
							style:17,
							surround:3,
							action:'thanks',
							url:'',
							amount:0
						}
					],
					result: [
						{
							title:'Стоимость кухонного гарнитура',
							formula:'A*B*(C+D+E+F)*G'
						}
					]
				}
			}
		}
	],
	group:[1307],
	deleted:[],
	widget:0
},
{
	name:'Quiz конструктор',
	icon:'fa fa-phone',
	icon_new:'speech-bubble_1.svg',
	blocks:[
		{
			id:1011,
			default:1,
			position:16000,
			title:'1700. Опрос-тест (quiz)',
			description:'Создание опрос-теста с завершающей формой отправки',
			default_values:{
				width1170:1,
				title:'<b>Доставим технику для строительных работ</b>',
				sub_title:'Рассчитайте точную стоимость работ и получите скидку 10%',
				quiz: {
					full_screen:0,
					show_status:1,
					show_discount:1,
					show_steps:0,
					max_discount:8,
					min_discount:3,
					discount_alg:'line',
					from:'form1',
					questions:[
						{
							type:'checkbox',
							title:'Какой вид строительной техники Вам нужен?',
							use_image:1,
							description:'',
							required:1,
							options:[
								{
									title:'Автобетононасосы',
									val:'',
									image:'section1011_image1.jpg'
								},
								{
									title:'Автовышки',
									val:'',
									image:'section1011_image2.jpg'
								},
								{
									title:'Автокраны',
									val:'',
									image:'section1011_image3.jpg'
								},
								{
									title:'Бульдозеры',
									val:'',
									image:'section1011_image4.jpg'
								},
								{
									title:'Асфальтоукладчики',
									val:'',
									image:'section1011_image5.jpg'
								},
								{
									title:'Бортовые автомобили',
									val:'',
									image:'section1011_image6.jpg'
								}
							]
						},
						{
							type:'radio',
							title:'На какой срок планируете арендовать спецтехнику?',
							use_image:0,
							description:'',
							required:1,
							options:[
								{
									title:'10 - 30 дней',
									val:'',
									image:'image_6001.jpg'
								},
								{
									title:'1-6 месяцев',
									val:'',
									image:'image_6003.jpg'
								},
								{
									title:'от 6 до 12 месяцев',
									val:'',
									image:'image_6004.jpg'
								},
								{
									title:'Больше 1 года',
									val:'',
									image:'image_6024.jpg'
								}
							]
						}
					]
				}
			}
		},
		{
			id:1011,
			default:0,
			position:16001,
			title:'1701. Опрос-тест стоимости кухни',
			description:'Создание опрос-теста с завершающей формой отправки.',
			default_values:{
				quiz_style:'red',
				title:'<b>Получите расчет стоимости вашей новой кухни и скидку 10%</b>',
				sub_title:'Рассчитайте точную стоимость работ и получите скидку 10%',
				quiz: {
					full_screen:0,
					show_status:1,
					show_discount:1,
					max_discount:8,
					min_discount:3,
					discount_alg:'line',
					from:'form1',
					questions: [
						{
							type:'radio',
							title:'Выберите форму кухни, которая вам подходит',
							use_image:1,
							description:'',
							required:1,
							options:[
								{
									title:'Прямая',
									val:'',
									image:'section1011_image1_2.jpg'
								},
								{
									title:'Угловая',
									val:'',
									image:'section1011_image2_2.jpg'
								},
								{
									title:'С островом',
									val:'',
									image:'section1011_image3_2.jpg'
								},
								{
									title:'П образная',
									val:'',
									image:'section1011_image4_2.jpg'
								},
								{
									title:'Двухлинейная',
									val:'',
									image:'section1011_image5_2.jpg'
								},
								{
									title:'Еще не определился',
									val:'',
									image:'section1011_image6_2.jpg'
								}
							]
						},
						{
							type:'radio',
							title:'Выберите стиль кухни',
							use_image:1,
							description:'',
							required:1,
							options:[
								{
									title:'Классика',
									val:'',
									image:'section1011_image7_2.jpg'
								},
								{
									title:'Модерн',
									val:'',
									image:'section1011_image8_2.jpg'
								},
								{
									title:'Стиль кантри',
									val:'',
									image:'section1011_image9_2.jpg'
								},
								{
									title:'Хай-тек',
									val:'',
									image:'section1011_image10_2.jpg'
								}
							]
						},
						{
							type:'text',
							title:'Укажите площадь кухни',
							use_image:1,
							description:'',
							required:1
						},
						{
							type:'radio',
							title:'У вас есть проект кухни?',
							use_image:1,
							description:'',
							required:1,
							options:[
								{
									title:'Да',
									val:'',
									image:'image_88.jpg'
								},
								{
									title:'Нет',
									val:'',
									image:'image_103.jpg'
								}
							]
						},
						{
							type:'radio',
							title:'Хотите приобрести бытовую технику вместе?',
							use_image:0,
							description:'',
							required:1,
							options:[
								{
									title:'Да',
									val:'',
									image:'image_6001.jpg'
								},
								{
									title:'Нет',
									val:'',
									image:'image_6003.jpg'
								}
							]
						},
						{
							type:'radio',
							title:'Планируемое время установки кухни?',
							use_image:0,
							description:'',
							required:1,
							options:[
								{
									title:'На этой неделе',
									val:'',
									image:'image_6001.jpg'
								},
								{
									title:'На следующей неделе',
									val:'',
									image:'image_6003.jpg'
								},
								{
									title:'В течение месяца',
									val:'',
									image:'image_6003.jpg'
								},
								{
									title:'Просто интересуюсь',
									val:'',
									image:'image_6003.jpg'
								}
							]
						},
						{
							type:'text',
							title:'Укажите планируемый бюджет',
							use_image:1,
							description:'',
							required:1
						}
					]
				}
			}
		},
		{
			id:1011,
			default:0,
			position:16002,
			title:'1702. Опрос-тест стоимости домов',
			description:'Создание опрос-теста с завершающей формой отправки.',
			default_values:{
				quiz_style:'green',
				bg:'#f2f2f2',
				title:'<b>Рассчитайте стоимость строительства дома прямо сейчас</b>',
				sub_title:'Ответьте на несколько вопросов - получите детальный расчет проекта и скидку!',
				quiz: {
					full_screen:0,
					show_status:1,
					show_discount:1,
					max_discount:10,
					min_discount:3,
					show_steps:1,
					discount_alg:'line',
					from:'form1',
					questions: [
						{
							type:'radio',
							title:'У вас уже есть готовый проект дома?',
							use_image:1,
							description:'',
							required:1,
							options:[
								{
									title:'Да, есть проект',
									val:'',
									image:'section1011_image1_3.jpg'
								},
								{
									title:'Проекта нет',
									val:'',
									image:'section1011_image2_3.jpg'
								}
							]
						},
						{
							type:'radio',
							title:'Из какого материала планируется строительство?',
							use_image:1,
							description:'',
							required:1,
							options:[
								{
									title:'Камень',
									val:'',
									image:'section1011_image3_3.jpg'
								},
								{
									title:'Дерево',
									val:'',
									image:'section1011_image4_3.jpg'
								},
								{
									title:'Дерево + камень',
									val:'',
									image:'section1011_image5_3.jpg'
								},
								{
									title:'Пока не знаю',
									val:'',
									image:'section1011_image6_3.jpg'
								}
							]
						},
						{
							type:'radio',
							title:'Какой тип бани вас интересует?',
							use_image:1,
							description:'',
							required:1,
							options:[
								{
									title:'Каркасная баня',
									val:'',
									image:'image_286.jpg'
								},
								{
									title:'Баня из бруса',
									val:'',
									image:'image_289.jpg'
								},
								{
									title:'Не определился',
									val:'',
									image:'image_302.jpg'
								}
							]
						},
						{
							type:'checkbox',
							title:'Когда планируете использовать баню?',
							use_image:1,
							description:'',
							required:1,
							options:[
								{
									title:'Летом',
									val:'',
									image:'image_9006.jpg'
								},
								{
									title:'Зимой',
									val:'',
									image:'image_9086.jpg'
								},
								{
									title:'Весной',
									val:'',
									image:'image_9128.jpg'
								},
								{
									title:'Осенью',
									val:'',
									image:'image_9208.jpg'
								}
							]
						},
						{
							type:'text',
							title:'Планируемый бюджет в рублях',
							use_image:1,
							description:'',
							required:1
						},
						{
							type:'text',
							title:'Укажите место строительства',
							use_image:1,
							description:'',
							required:1
						}
					]
				}
			}
		},
		{
			id:1011,
			default:0,
			position:16003,
			title:'1703. Опрос-тест по товарам',
			description:'Создание опрос-теста с завершающей формой отправки.',
			default_values:{
				quiz_style:'blue',
				title:'<b>Ответьте на несколько вопросов</b>',
				sub_title:'и мы рассчитаем стоимость партии товара с персональной скидкой',
				quiz: {
					full_screen:0,
					show_status:1,
					show_discount:0,
					max_discount:8,
					show_steps:1,
					min_discount:3,
					discount_alg:'line',
					from:'form1',
					questions: [
						{
							type:'checkbox',
							title:'Какие товары вам интересны?',
							use_image:1,
							description:'',
							required:1,
							options:[
								{
									title:'Для работы',
									val:'',
									image:'section1011_image1_4.jpg'
								},
								{
									title:'Для игр',
									val:'',
									image:'section1011_image2_4.jpg'
								},
								{
									title:'Для работы',
									val:'',
									image:'section1011_image3_4.jpg'
								},
								{
									title:'Для игр',
									val:'',
									image:'section1011_image4_4.jpg'
								}
							]
						},
						{
							type:'radio',
							title:'Какой объем заказа вас интересует?',
							use_image:0,
							description:'',
							required:1,
							options:[
								{
									title:'Партия до 200 шт',
									val:'',
									image:'image_5059.jpg'
								},
								{
									title:'Партия до 500 шт',
									val:'',
									image:'image_5060.jpg'
								},
								{
									title:'Партия от 500 шт',
									val:'',
									image:'image_5061.jpg'
								}
							]
						},
						{
							type:'radio',
							title:'Выберите удобный вам способ доставки',
							use_image:0,
							description:'',
							required:1,
							options:[
								{
									title:'Самовывоз',
									val:'',
									image:'image_5062.jpg'
								},
								{
									title:'Транспортная компания',
									val:'',
									image:'image_5063.jpg'
								},
								{
									title:'Почта России',
									val:'',
									image:'image_5064.jpg'
								},
								{
									title:'Другой вид доставки',
									val:'',
									image:'image_5064.jpg'
								}
							]
						},
						{
							type:'text',
							title:'Планируемый бюджет',
							use_image:1,
							description:'',
							required:1
						}
					]
				}
			}
		},
		{
			id:1011,
			default:0,
			position:16004,
			title:'1704. Опрос-тест про недвижимость',
			description:'Создание опрос-теста с завершающей формой отправки.',
			default_values:{
				quiz_style:'red',
				back_dark:1,
				bg_image:'image_9304.jpg',
				opacity_color1:'#fff', opacity_color2:'#fff', bg_opacity:0.9,
				title:'Получите индивидуальную подборку инвестиционных предложений',
				sub_title:'Рассчитайте точную стоимость работ и получите скидку 10%',
				quiz: {
					full_screen:0,
					show_status:1,
					show_discount:0,
					max_discount:8,
					min_discount:3,
					discount_alg:'line',
					from:'form1',
					questions: [
						{
							type:'radio',
							title:'Какую жилую недвижимость вы рассматриваете?',
							use_image:1,
							use_big_image:1,
							description:'',
							required:1,
							options:[
								{
									title:'Дом/вилла',
									val:'',
									image:'section1011_image1_5.jpg'
								},
								{
									title:'Квартира/апартаменты',
									val:'',
									image:'section1011_image2_5.jpg'
								}
							]
						},
						{
							type:'radio',
							title:'С какой целью вы планируете купить недвижимость?',
							use_image:0,
							description:'',
							required:1,
							options:[
								{
									title:'Получение гражданства',
									val:'',
									image:'section1011_image3_5.jpg'
								},
								{
									title:'Проживание для себя/родственников',
									val:'',
									image:'section1011_image4_5.jpg'
								},
								{
									title:'Получение дохода',
									val:'',
									image:'section1011_image5_5.jpg'
								},
								{
									title:'Пока не определился',
									val:'',
									image:'section1011_image6_5.jpg'
								}
							]
						},
						{
							type:'radio',
							title:'Как обычно проводите день?',
							use_image:1,
							description:'',
							required:1,
							options:[
								{
									title:'Работаю сидя',
									val:'',
									image:'image_10069.jpg'
								},
								{
									title:'Физический труд',
									val:'',
									image:'image_10074.jpg'
								},
								{
									title:'Много учусь',
									val:'',
									image:'image_10075.jpg'
								},
								{
									title:'Я спортсмен',
									val:'',
									image:'image_10076.jpg'
								}
							]
						},
						{
							type:'radio',
							title:'Ваши предпочтения?',
							use_image:1,
							description:'',
							required:1,
							options:[
								{
									title:'Расслабляющая атмосфера',
									val:'',
									image:'image_10069.jpg'
								},
								{
									title:'Общительный массажист ',
									val:'',
									image:'image_10078.jpg'
								},
								{
									title:'Светлое помещение',
									val:'',
									image:'image_10079.jpg'
								},
								{
									title:'Приятный аромат',
									val:'',
									image:'image_10080.jpg'
								}
							]
						}
					]
				}
			}
		}
	],
	group:[1011],
	deleted:[],
	widget:0
},
{
	name:'Каталог товаров ',
	icon:'fa fa-cart-arrow-down',
	icon_new:'products.svg',
	blocks:[
		{
			id:130,
			default:1,
			position:11101,
			title:'901. Каталог из 3-х товаров в ряд',
			description:'Есть возможность подключения корзины, карточки товара, онлайн оплаты',
			default_values:{	
				flex_fix:1,
				mode:'s150',
				full_img:1,
				bg_col_opacity:0
			}
		},
		{
			id:130,
			default:0,
			position:11170,
			title:'902. Каталог из 4-х товаров в ряд',
			description:'Есть возможность подключения корзины, карточки товара, онлайн оплаты',
			default_values:{
				title:'<b>Каталог женской обуви</b>',
				sub_title:'Лучшие варианты осень-весна этого года',
				flex_fix:1,
				full_img:1,
				img_do:'product_card',
				items_count:'count4',
				opacity_col_color:'#fff',
				hover_color:'#ae8a6f',
				backlight:1,
				arr1:[
					{
						link:'',
						extra_info1:'<p>Материал верха: Натуральная кожа</p><p>Внутренний материал: Текстиль</p><p>Материал подошвы: Полимер</p><p>Материал стельки: Текстиль</p><p>Высота каблука: 5 см</p><p>Высота платформы: 3 см</p>',
						image1:'sec130_902_1.jpg',image1_1:'sec130_902_1.jpg',image1_2:'sec130_902_1.jpg',image1_3:'sec130_902_1.jpg',
						alt1:'', alt1_1:'', alt1_2:'', alt1_3:'',
						title1:'<b>Ботинки Tervolina Light</b>',
						txt1:'Женские ботинки из натуральной кожи. Выполнена из качественного плотного материала и полимера.',
						price1:'<b>2 500 ₽</b>',
						ico1:'fa-hand-spock-o',
						mdico1:'svg-icon-store',
						c_ico1:'blimp.png',
						btn1:{title:'Заказать',color:'#ae8a6f',surround:3,style:17},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'phone',title:'Введите телефон',description:'',required:1},
							{type:'btn',title:'Заказать',color:'#ae8a6f',action:'thanks',url:'',surround:3,style:17,amount:0}
						],
						form_html1:'Замените HTML'
					},
					{
						link:'',
						extra_info1:'<p>Материал верха: Натуральная кожа</p><p>Внутренний материал: Текстиль</p><p>Материал подошвы: Полимер</p><p>Материал стельки: Текстиль</p><p>Высота каблука: 5 см</p><p>Высота платформы: 3 см</p>',
						image1:'sec130_902_2.jpg',image1_1:'sec130_902_2.jpg',image1_2:'sec130_902_2.jpg',image1_3:'sec130_902_2.jpg',
						alt1:'',alt1_1:'',alt1_2:'',alt1_3:'',
						title1:'<b>Ботинки Tervolina Brown</b>',
						txt1:'Женские ботинки из натуральной кожи. Выполнена из качественного плотного материала и полимера.',
						price1:'<b>3 500 ₽</b>',
						ico1:'fa-hand-spock-o',
						mdico1:'svg-icon-store',
						c_ico1:'blimp.png',
						btn1:{title:'Заказать',color:'#ae8a6f',surround:3,style:17},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'phone',title:'Введите телефон',description:'',required:1},
							{type:'btn',title:'Заказать',color:'#ae8a6f',action:'thanks',url:'',surround:3,style:17,amount:0}
						],
						form_html1:'Замените HTML'
					},
					{
						link:'',
						extra_info1:'<p>Материал верха: Натуральная кожа</p><p>Внутренний материал: Текстиль</p><p>Материал подошвы: Полимер</p><p>Материал стельки: Текстиль</p><p>Высота каблука: 5 см</p><p>Высота платформы: 3 см</p>',
						image1:'sec130_902_3.jpg',image1_1:'sec130_902_3.jpg',image1_2:'sec130_902_3.jpg',image1_3:'sec130_902_3.jpg',
						alt1:'',alt1_1:'',alt1_2:'',alt1_3:'',
						title1:'<b>Ботинки Alessio Nesca</b>',
						txt1:'Женские ботинки из натуральной кожи. Выполнена из качественного плотного материала и полимера.',
						price1:'<b>3 600 ₽</b>',
						ico1:'fa-hand-spock-o',
						mdico1:'svg-icon-store',
						c_ico1:'blimp.png',
						btn1:{title:'Заказать',color:'#ae8a6f',surround:3,style:17},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'phone',title:'Введите телефон',description:'',required:1},
							{type:'btn',title:'Заказать',color:'#ae8a6f',action:'thanks',url:'',surround:3,style:17,amount:0}
						],
						form_html1:'Замените HTML'
					},
					{
						link:'',
						extra_info1:'<p>Материал верха: Натуральная кожа</p><p>Внутренний материал: Текстиль</p><p>Материал подошвы: Полимер</p><p>Материал стельки: Текстиль</p><p>Высота каблука: 5 см</p><p>Высота платформы: 3 см</p>',
						image1:'sec130_902_4.jpg',image1_1:'sec130_902_4.jpg',image1_2:'sec130_902_4.jpg',image1_3:'sec130_902_4.jpg',
						alt1:'',alt1_1:'',alt1_2:'',alt1_3:'',
						title1:'<b>Ботинки Tervolina Cream</b>',
						txt1:'Женские ботинки из натуральной кожи. Выполнена из качественного плотного материала и полимера.',
						price1:'<b>3 100 ₽</b>',
						ico1:'fa-hand-spock-o',
						mdico1:'svg-icon-store',
						c_ico1:'blimp.png',
						btn1:{title:'Заказать',color:'#ae8a6f',surround:3,style:17},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'phone',title:'Введите телефон',description:'',required:1},
							{type:'btn',title:'Заказать',color:'#ae8a6f',action:'thanks',url:'',surround:3,style:17,amount:0}
						],
						form_html1:'Замените HTML'
					}
				]
			}
		},
		{
			id:130,
			default:0,
			position:11171,
			title:'903. Блок из 4-х товаров в ряд',
			description:'Есть возможность подключения корзины, карточки товара, онлайн оплаты',
			default_values:{
				bg:'#f2f2f2',
				title:'<b>Каталог вешалок для одежды​​​​​​​</b>',
				sub_title:'Это предмет мебели, без которого невозможно представить ни одну комфортную прихожую',
				flex_fix:1,
				mode:'s300',
				img_do:'img_zoom',
				items_count:'count4',
				opacity_col_color:'#fff',
				backlight:1,
				hover_color:'#889d92',
				arr1:[
					{
						link:'',
						extra_info1:' ',
						image1:'sec130_903_1.jpg',image1_1:'sec130_903_1.jpg',image1_2:'sec130_903_1.jpg',image1_3:'sec130_903_1.jpg',
						alt1:'',alt1_1:'',alt1_2:'',alt1_3:'',
						title1:'<b>Вешалка настенная (ш.594)​​​​​​​</b>',
						txt1:'Кромка на видимых торцах - ПВХ производство Rehau (Германия). Крючки - черные, матовые, производство Польша.',
						price1:'8 360 Р',
						ico1:'fa-hand-spock-o',
						mdico1:'svg-icon-store',
						c_ico1:'blimp.png',
						btn1:{title:'Купить',color:'#889d92',surround:3,style:17},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'phone',title:'Введите телефон',description:'',required:1},
							{type:'btn',title:'Купить',color:'#889d92',action:'thanks',url:'',surround:3,style:17,amount:0}
						],
						form_html1:'Замените HTML'
					},
					{
						link:'',
						extra_info1:' ',
						image1:'sec130_903_2.jpg',image1_1:'sec130_903_2.jpg',image1_2:'sec130_903_2.jpg',image1_3:'sec130_903_2.jpg',
						alt1:'',alt1_1:'',alt1_2:'',alt1_3:'',
						title1:'<b>Вешалка настенная (ш.886)​​​​​​​</b>',
						txt1:'Кромка на видимых торцах - ПВХ производство Rehau (Германия). Крючки - черные, матовые, производство Польша.',
						price1:'12 140 Р',
						ico1:'fa-pencil-square-o',
						mdico1:'svg-icon-school-bus',
						c_ico1:'bike.png',
						btn1:{title:'Купить',color:'#889d92',surround:3,style:17},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'phone',title:'Введите телефон',description:'',required:1},
							{type:'btn',title:'Купить',color:'#889d92',action:'thanks',url:'',surround:3,style:17,amount:0}
						],
						form_html1:'Замените HTML'
					},
					{
						link:'',
						extra_info1:' ',
						image1:'sec130_903_3.jpg',image1_1:'sec130_903_3.jpg',image1_2:'sec130_903_3.jpg',image1_3:'sec130_903_3.jpg',
						alt1:'',alt1_1:'',alt1_2:'',alt1_3:'',
						title1:'<b>Вешалка 5 крючков (дл.581)​​​​​​​</b>',
						txt1:'Кромка на видимых торцах - ПВХ производство Rehau (Германия). Крючки - черные, матовые, производство Польша.',
						price1:'9 430 Р',
						ico1:'fa-hand-spock-o',
						mdico1:'svg-icon-store',
						c_ico1:'blimp.png',
						btn1:{title:'Купить',color:'#889d92',surround:3,style:17},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'phone',title:'Введите телефон',description:'',required:1},
							{type:'btn',title:'Купить',color:'#889d92',action:'thanks',url:'',surround:3,style:17,amount:0}
						],
						form_html1:'Замените HTML'
					},
					{
						link:'',
						extra_info1:' ',
						image1:'sec130_903_4.jpg',image1_1:'sec130_903_4.jpg',image1_2:'sec130_903_4.jpg',image1_3:'sec130_903_4.jpg',
						alt1:'',alt1_1:'',alt1_2:'',alt1_3:'',
						title1:'<b>Вешалка 6 крючков (дл.769)​​​​​​​​​​​​​​</b>',
						txt1:'Кромка на видимых торцах - ПВХ производство Rehau (Германия). Крючки - черные, матовые, производство Польша.',
						price1:'7 920 Р',
						ico1:'fa-pencil-square-o',
						mdico1:'svg-icon-school-bus',
						c_ico1:'bike.png',
						btn1:{title:'Купить',color:'#889d92',surround:3,style:17},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'phone',title:'Введите телефон',description:'',required:1},
							{type:'btn',title:'Купить',color:'#889d92',action:'thanks',url:'',surround:3,style:17,amount:0}
						],
						form_html1:'Замените HTML'
					}
				]
			}
		},
		{
			id:130,
			default:0,
			position:11180,
			title:'904. Блок из 5-и товаров в ряд с изображениями',
			description:'Есть возможность подключения корзины, карточки товара, онлайн оплаты',
			default_values:{
				bg:'#fff',
				title:'<b><span style="font-size:52px">Купить шлем для экстремального спорта</span></b>',
				sub_title:'<div>У нас вы найдете широкий ассортимент спортивных шлемов для мотокросса<br></div>',
				show_btns:1,
				show_descr:0,
				bg_col_opacity:0,
				flex_fix:1,
				items_count:'count5',
				hover_color:'#f5550e',
				arr1:[
					{
						link:'',
						extra_info1:' ',
						image1:'sec130_904_1.jpg',image1_1:'sec130_904_1.jpg',image1_2:'sec130_904_1.jpg',image1_3:'sec130_904_1.jpg',
						alt1:'',alt1_1:'',alt1_2:'',alt1_3:'',
						title1:'Шлем спортивный детский JUST1 J32 SWAT',
						txt1:'',
						price1:'<b>24 900 Р</b>',
						ico1:'fa-hand-spock-o',
						mdico1:'svg-icon-store',
						c_ico1:'blimp.png',
						btn1:{title:'Купить',color:'#f5550e',surround:3,style:5},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'phone',title:'Введите телефон',description:'',required:1},
							{type:'btn',title:'Купить',color:'#f5550e',action:'thanks',url:'',surround:3,style:5,amount:0}
						],
						form_html1:'Замените HTML'
					},
					{
						link:'',
						extra_info1:' ',
						image1:'sec130_904_2.jpg',image1_1:'sec130_904_2.jpg',image1_2:'sec130_904_2.jpg',image1_3:'sec130_904_2.jpg',
						alt1:'',alt1_1:'',alt1_2:'',alt1_3:'',
						title1:'Шлем кроссовый O`NEAL 5Series HR, термопластик',
						txt1:'',
						price1:'<b>28 100 Р</b>',
						ico1:'fa-hand-spock-o',
						mdico1:'svg-icon-store',
						c_ico1:'blimp.png',
						btn1:{title:'Купить',color:'#f5550e',surround:3,style:5},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'phone',title:'Введите телефон',description:'',required:1},
							{type:'btn',title:'Купить',color:'#f5550e',action:'thanks',url:'',surround:3,style:5,amount:0}
						],
						form_html1:'Замените HTML'
					},
					{
						link:'',
						extra_info1:' ',
						image1:'sec130_904_3.jpg',image1_1:'sec130_904_3.jpg',image1_2:'sec130_904_3.jpg',image1_3:'sec130_904_3.jpg',
						alt1:'',alt1_1:'',alt1_2:'',alt1_3:'',
						title1:'Шлем кроссовый O’NEAL 2Series RL SLICK',
						txt1:'',
						price1:'<b>28 900 Р</b>',
						ico1:'fa-hand-spock-o',
						mdico1:'svg-icon-store',
						c_ico1:'blimp.png',
						btn1:{title:'Купить',color:'#f5550e',surround:3,style:5},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'phone',title:'Введите телефон',description:'',required:1},
							{type:'btn',title:'Купить',color:'#f5550e',action:'thanks',url:'',surround:3,style:5,amount:0}
						],
						form_html1:'Замените HTML'
					},
					{
						link:'',
						extra_info1:' ',
						image1:'sec130_904_3.jpg',image1_1:'sec130_904_3.jpg',image1_2:'sec130_904_3.jpg',image1_3:'sec130_904_3.jpg',
						alt1:'',alt1_1:'',alt1_2:'',alt1_3:'',
						title1:'Шлем кроссовый SHOCK-M1 MATT black/orange (57-58 )',
						txt1:'',
						price1:'<b>25 500 Р</b>',
						ico1:'fa-hand-spock-o',
						mdico1:'svg-icon-store',
						c_ico1:'blimp.png',
						btn1:{title:'Купить',color:'#f5550e',surround:3,style:5},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'phone',title:'Введите телефон',description:'',required:1},
							{type:'btn',title:'Купить',color:'#f5550e',action:'thanks',url:'',surround:3,style:5,amount:0}
						],
						form_html1:'Замените HTML'
					},
					{
						link:'',
						extra_info1:' ',
						image1:'sec130_904_5.jpg',image1_1:'sec130_904_5.jpg',image1_2:'sec130_904_5.jpg',image1_3:'sec130_904_5.jpg',
						alt1:'',alt1_1:'',alt1_2:'',alt1_3:'',
						title1:'Мотошлем UFO HELMET QUIVER - ONTAKE WHITE L',
						txt1:'',
						price1:'<b>24 320 Р</b>',
						ico1:'fa-hand-spock-o',
						mdico1:'svg-icon-store',
						c_ico1:'blimp.png',
						btn1:{title:'Купить',color:'#f5550e',surround:3,style:5},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'phone',title:'Введите телефон',description:'',required:1},
							{type:'btn',title:'Купить',color:'#f5550e',action:'thanks',url:'',surround:3,style:5,amount:0}
						],
						form_html1:'Замените HTML'
					}
				]
			}
		},
		{
			id:124,
			default:1,
			position:11600,
			title:'905. Блок из 3-х товаров в ряд',
			description:'Есть возможность подключения корзины, карточки товара, онлайн оплаты',
			default_values:{bg:'#f2f2f2'}
		},
		{
			id:414,
			default:0,
			position:11701,
			title:'906. Каталог услуг',
			description:'Возможность изменения иконок. Имеется большая база иконок',
			default_values:{}
		},
		{
			id:129,
			default:1,
			position:11750,
			title:'907. Карточка товара с большим изображением',
			description:'Возможность добавления товаров и загрузки изображений',
			default_values:{
				bg:'#f2f2f2',
				title:'<b>Встречайте платье из новой коллекции</b>',
				sub_title:'Бесплатная доставка при заказе от 4 000 ₽',
				show_title1:1,
				image_size:'600x700',
				like_slider:0,
				extra_btn:1,
				hover_color:'#252525',
				arr1:[
					{
						image1:'sec129_906_img.jpg',
						alt1:'',
						video1:'https://youtu.be/V56TUkuKCH4',
						title1:'Мини-платье',
						txt1:'<div><p>Состав: 89% полиэстер, 11% эластан</p><p>Страна-производитель: КИТАЙ</p><p>Уход: Ручная стирка при максимальной температуре 40ºС, Не отбеливать, Машинная сушка запрещена, Глажение при 110ºС, Профессиональная сухая чистка. Мягкий режим.</p><p><br></p><p>Параметры: Силуэт: полуприлегающий; Тип карманов: без карманов; Вырез горловины: квадратный; Застежка: без застежки; Тип рукава: длинный; Стиль: Вечерний; Повседневный; Длина платья/юбки: миди.</p></div>',
						price1:'<b>2 519 ₽</b>',
						price_descr1:'',
						btn1:{title:'В КОРЗИНУ',color:'#303030',surround:3,style:17,use_form:2},
						btn2:{title:'Предзаказ',color:'#303030',style:17},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Купить',color:'#303030',action:'thanks',url:'',surround:3,style:5,amount:0}
						],
						form2:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Купить',color:'#303030',action:'thanks',url:'',surround:3,style:5,amount:0}
						],
						form_html1:'Замените HTML',
						form_html2:'Замените HTML'
					}
				]
			}
		},
		{
			id:130,
			default:0,
			position:11760,
			title:'908. Блок из 2 товаров в ряд с изображениями',
			description:'Есть возможность подключения корзины, карточки товара, онлайн оплаты',
			default_values:{
				bg:'#f2f2f2',
				opacity_col_color:'#fff',
				title:'<b>Велосипедные покрышки по доступной цене</b>',
				sub_title:'Скидка 5% при заказе сразу комплекта покрышек!',
				img_do:'product_card',
				items_count:'count2',
				arr1:[
					{
						link:'',
						extra_info1:'Одна из самых известных покрышек. Рабочая поверхность состоит из восьми рядов шипов - обеспечивает не только замечательное сцепление, но и взрывное ускорение, и отличный накат.',
						image1:'sec130_908_1.jpg',image1_1:'sec130_908_1.jpg',image1_2:'sec130_908_1.jpg',image1_3:'sec130_908_1.jpg',
						alt1:'',alt1_1:'',alt1_2:'',alt1_3:'',
						title1:'<b>Велосипедная покрышка Kenda SMALL BLOCK "8"29X2.10</b>',
						txt1:'Одна из самых известных покрышек. Рабочая поверхность состоит из восьми рядов шипов - обеспечивает не только замечательное сцепление, но и взрывное ускорение, и отличный накат.',
						price1:'<b>4 159 ₽</b>',
						ico1:'fa-linux',
						mdico1:'svg-icon-check-list2',
						c_ico1:'023-pad.svg',
						btn1:{title:'Заказать',color:'#303030',surround:3,style:5},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'phone',title:'Введите телефон',description:'',required:1},
							{type:'btn',title:'Заказать',color:'#303030',action:'thanks',url:'',surround:3,style:5,amount:0}
						],
						form_html1:'Замените HTML'
					},
					{
						link:'',
						extra_info1:'Одна из самых известных покрышек. Рабочая поверхность состоит из восьми рядов шипов - обеспечивает не только замечательное сцепление, но и взрывное ускорение, и отличный накат.',
						image1:'sec130_908_2.jpg',image1_1:'sec130_908_2.jpg',image1_2:'sec130_908_2.jpg',image1_3:'sec130_908_2.jpg',
						alt1:'',alt1_1:'',alt1_2:'',alt1_3:'',
						title1:'<b>Велосипедная покрышка Kenda K-RAD24X2.30</b>',
						txt1:'Одна из самых известных покрышек. Рабочая поверхность состоит из восьми рядов шипов - обеспечивает не только замечательное сцепление, но и взрывное ускорение, и отличный накат.',
						price1:'<b>2 989 ₽</b>',
						ico1:'fa-linux',
						mdico1:'svg-icon-check-list2',
						c_ico1:'023-pad.svg',
						btn1:{title:'Заказать',color:'#303030',surround:3,style:5},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'phone',title:'Введите телефон',description:'',required:1},
							{type:'btn',title:'Заказать',color:'#303030',action:'thanks',url:'',surround:3,style:5,amount:0}
						],
						form_html1:'Замените HTML'
					},
					{
						link:'',
						extra_info1:'Одна из самых известных покрышек. Рабочая поверхность состоит из восьми рядов шипов - обеспечивает не только замечательное сцепление, но и взрывное ускорение, и отличный накат.',
						image1:'sec130_908_3.jpg',image1_1:'sec130_908_3.jpg',image1_2:'sec130_908_3.jpg',image1_3:'sec130_908_3.jpg',
						alt1:'',alt1_1:'',alt1_2:'',alt1_3:'',
						title1:'<b>Велосипедная покрышка Kenda KWICKER26X1.95</b>',
						txt1:'Одна из самых известных покрышек. Рабочая поверхность состоит из восьми рядов шипов - обеспечивает не только замечательное сцепление, но и взрывное ускорение, и отличный накат.',
						price1:'<b>3 899 ₽</b>',
						ico1:'fa-linux',
						mdico1:'svg-icon-check-list2',
						c_ico1:'023-pad.svg',
						btn1:{title:'Заказать',color:'#303030',surround:3,style:5},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'phone',title:'Введите телефон',description:'',required:1},
							{type:'btn',title:'Заказать',color:'#303030',action:'thanks',url:'',surround:3,style:5,amount:0}
						],
						form_html1:'Замените HTML'
					},
					{
						link:'',
						extra_info1:'Одна из самых известных покрышек. Рабочая поверхность состоит из восьми рядов шипов - обеспечивает не только замечательное сцепление, но и взрывное ускорение, и отличный накат.',
						image1:'sec130_908_4.jpg',image1_1:'sec130_908_4.jpg',image1_2:'sec130_908_4.jpg',image1_3:'sec130_908_4.jpg',
						alt1:'',alt1_1:'',alt1_2:'',alt1_3:'',
						title1:'<b>Велосипедная покрышка Kenda ALLUVIUM700X40C</b>',
						txt1:'Одна из самых известных покрышек. Рабочая поверхность состоит из восьми рядов шипов - обеспечивает не только замечательное сцепление, но и взрывное ускорение, и отличный накат.',
						price1:'<b>8 839 ₽</b>',
						ico1:'fa-linux',
						mdico1:'svg-icon-check-list2',
						c_ico1:'023-pad.svg',
						btn1:{title:'Заказать',color:'#303030',surround:3,style:5},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'phone',title:'Введите телефон',description:'',required:1},
							{type:'btn',title:'Заказать',color:'#303030',action:'thanks',url:'',surround:3,style:5,amount:0}
						],
						form_html1:'Замените HTML'
					}
				]
			}
		},
		{
			id:130,
			default:0,
			position:11765,
			title:'909. Блок из 3-х товаров в ряд',
			description:'Есть возможность подключения корзины, карточки товара, онлайн оплаты',
			default_values:{
				bg:'#303030',
				title:'<b>Многоразовые кружки</b>',
				sub_title:'Они изготовлены из органического бамбукового волокна, кукурузного крахмала и смолы, не содержат вредных соединений BPA, BPS и фталатов',
				show_price:0,
				bg_col_opacity:1,
				full_img:1,
				opacity_col_color:'#fafafa',
				items_count:'count3',
				arr1:[
					{
						link:'',
						extra_info1:' ',
						image1:'sec130_909_1.png',image1_1:'sec130_909_1.png',image1_2:'sec130_909_1.png',image1_3:'sec130_909_1.png',
						alt1:'',alt1_1:'',alt1_2:'',alt1_3:'',
						title1:'<span style="font-size:24px"><b>Эко-стакан Kerr & Napier</b></span>',
						txt1:'<span style="font-size:18px">Многоразовая кружка является отличной альтернативой одноразовым стаканчикам</span>',
						price1:'',
						ico1:'fa-linux',
						mdico1:'svg-icon-help-1',
						c_ico1:'fashion.png',
						btn1:{title:'Заказать партию',color:'#303030',surround:3,style:5},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'phone',title:'Введите телефон',description:'',required:1},
							{type:'btn',title:'Заказать партию',color:'#303030',action:'thanks',url:'',surround:3,style:5,amount:0}
						],
						form_html1:'Замените HTML'
					},
					{
						link:'',
						extra_info1:' ',
						image1:'sec130_909_2.png',image1_1:'sec130_909_2.png',image1_2:'sec130_909_2.png',image1_3:'sec130_909_2.png',
						alt1:'',alt1_1:'',alt1_2:'',alt1_3:'',
						title1:'<span style="font-size:24px"><b>Эко-стакан Swan & Collins</b></span>',
						txt1:'<span style="font-size:18px">Многоразовая кружка является отличной альтернативой одноразовым стаканчикам</span>',
						price1:'',
						ico1:'fa-linux',
						mdico1:'svg-icon-help-1',
						c_ico1:'fashion.png',
						btn1:{title:'Заказать партию',color:'#303030',surround:3,style:5},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'phone',title:'Введите телефон',description:'',required:1},
							{type:'btn',title:'Заказать партию',color:'#303030',action:'thanks',url:'',surround:3,style:5,amount:0}
						],
						form_html1:'Замените HTML'
					},
					{
						link:'',
						extra_info1:' ',
						image1:'sec130_909_3.png',image1_1:'sec130_909_3.png',image1_2:'sec130_909_3.png',image1_3:'sec130_909_3.png',
						alt1:'',alt1_1:'',alt1_2:'',alt1_3:'',
						title1:'<span style="font-size:24px"><b>Эко-стакан Blackthorn WM</b></span>',
						txt1:'<span style="font-size:18px">Многоразовая кружка является отличной альтернативой одноразовым стаканчикам</span>',
						price1:'',
						ico1:'fa-linux',
						mdico1:'svg-icon-help-1',
						c_ico1:'fashion.png',
						btn1:{title:'Заказать партию',color:'#303030',surround:3,style:5},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'phone',title:'Введите телефон',description:'',required:1},
							{type:'btn',title:'Заказать партию',color:'#303030',action:'thanks',url:'',surround:3,style:5,amount:0}
						],
						form_html1:'Замените HTML'
					}
				]
			}
		},
		{
			id:126,
			default:0,
			position:11770,
			title:'910. Карточка товара с большим изображением',
			description:'Возможность добавления товаров и загрузки изображений',
			default_values:{
				width1170:1,
				show_title:0,
				show_sub_title:0,
				show_price:1,
				extra_images:1,
				align_center:1,
				image_size:'900x1200',
				arr1:[
					{
						image1:'sec126_910_1.png',
						image2:'sec126_910_2.png',
						image3:'sec126_910_3.png',
						image4:'sec126_910_4.png',
						alt1:'',alt2:'',alt3:'',alt4:'',
						video1:'https://youtu.be/Z2hpkW4Yj98',
						title1:'<span style="font-size:36px"><b>Очиститель воздуха Xiaomi Mi Smart Air Purifier 4 Lite EU, белый</b></span>',
						txt1:'<p><span style="font-size:18px">Mi Air Purifier 4 Lite Очиститель воздуха – необходимый предмет в современном доме. Бороться с бактериями, обновлять воздух, поддерживать допустимую концентрацию частиц – все это может делать умный очиститель воздуха Xiaomi Air Purifier 4 Lite.</span></p><p><span style="font-size:18px;"><br></span></p><p><span style="font-size:18px;">Это умное устройство способно эффективно очистить до 120 кубических метров воздуха в минуту, что делает его незаменимым для домов и квартир.</span></p><p><span style="font-size:18px;">Очиститель Xiaomi Air Purifier 4 Lite уничтожит до 99,99% бактерий в воздухе, а значит, в комнате будет чисто и безопасно.</span></p>',
						price1:'<span style="font-size:26px"><b>10 791 ₽</b></span><br><span style="font-size:24px"><b></b></span><div><span style="color:#696969"><s>17 825 ₽</s></span><br></div>',
						price_descr1:'',
						btn1:{title:'Заказать сейчас',color:'#ffa500',surround:3,style:5},
						btn2:{title:'Узнать подробнее',color:'#ffa500',style:5},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'text',title:'Введите имя',description:'',required:1},
							{type:'phone',title:'Введите телефон',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#ffa500',action:'thanks',surround:3,style:5,url:'',amount:0}
						],
						form2:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'text',title:'Введите имя',description:'',required:1},
							{type:'phone',title:'Введите телефон',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#ffa500',action:'thanks',surround:3,style:5,url:'',amount:0}
						],
						form_html1:'Замените HTML',
						form_html2:'Замените HTML'
					}
				]
			}
		},
		{
			id:1130,
			default:0,
			position:11771,
			title:'911. Блок из 3-х товаров в ряд с двумя кнопками',
			description:'Есть возможность подключения корзины, карточки товара, онлайн оплаты',
			default_values:{
				bg:'#000',
				title:'<b>Каталог спортивных очков</b>',
				sub_title:'У нас вы найдете лучшие очки для экстремального спорта',
				hover_color:'#515eea'
			}
		},
		{
			id:1130,
			default:0,
			position:11772,
			title:'912. Блок из 4-х товаров в ряд с двумя кнопками',
			description:'Есть возможность подключения корзины, карточки товара, онлайн оплаты',
			default_values:{
				items_count:'count4',
				title:'<b>Винтажные свитеры в стиле хип-хоп</b>',
				sub_title:'Широкий ассортимент свитеров на любой вкус',
				arr1:[
					{
						link:'',
						extra_info1:'<p>Стиль: HIP HOP</p><p>Материал: Хлопок</p><p>Подходит для следующих случаев: Повседневный</p><p>Происхождение: CHINA</p><p>Сезон: Осенью И Зимой</p><p>Тип рисунка: Персонажи мультфильмов</p><p>Тип товара: Пуловеры</p><p>Длина рукава: Полный</p><p>Декоративные элементы: Вышивка</p><p>Тип рукава: Стандартная</p><p>Плотность ткани: Толстый</p>',
						image1:'sec1130_912_1.jpg',
						image1_1:'sec1130_912_1.jpg',
						image1_2:'sec1130_912_1.jpg',
						image1_3:'sec1130_912_1.jpg',
						alt1:'',alt1_1:'',alt1_2:'',alt1_3:'',
						title1:'<b>Винтажный свитер в стиле хип-хоп Harajuku</b>',
						txt1:'Зимний вязаный свитер с японским рисунком',
						price1:'<b>1 564 ₽</b>',
						btn1:{title:'Заказать',color:'#768eb2',surround:3,style:2},
						btn2:{title:'В корзину',color:'#768eb2',style:2,use_form:2},
						btn3:{title:'В корзину',color:'#768eb2',surround:3,style:2,use_form:2},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'phone',title:'Введите телефон',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#768eb2',action:'thanks',url:'',surround:3,style:2,amount:0}
						],
						form2:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#768eb2',action:'thanks',url:'',surround:3,style:2,amount:0}
						],
						form3: [
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#768eb2',action:'thanks',url:'',surround:3,style:2,amount:0}
						],
						form_html1:'Замените HTML',
						form_html2:'Замените HTML'
					},
					{
						link:'',
						extra_info1:'<p>Стиль: HIP HOP</p><p>Материал: Хлопок</p><p>Подходит для следующих случаев: Повседневный</p><p>Происхождение: CHINA</p><p>Сезон: Осенью И Зимой</p><p>Тип рисунка: Персонажи мультфильмов</p><p>Тип товара: Пуловеры</p><p>Длина рукава: Полный</p><p>Декоративные элементы: Вышивка</p><p>Тип рукава: Стандартная</p><p>Плотность ткани: Толстый</p>',
						image1:'sec1130_912_2.jpg',
						image1_1:'sec1130_912_2.jpg',
						image1_2:'sec1130_912_2.jpg',
						image1_3:'sec1130_912_2.jpg',
						alt1:'',alt1_1:'',alt1_2:'',alt1_3:'',
						title1:'<b>Винтажный свитер в стиле хип-хоп Harajuku</b>',
						txt1:'Зимний вязаный свитер с японским рисунком',
						price1:'<b>1 564 ₽</b>',
						btn1:{title:'Заказать',color:'#768eb2',surround:3,style:2},
						btn2:{title:'В корзину',color:'#768eb2',style:2,use_form:2},
						btn3:{title:'В корзину',color:'#768eb2',surround:3,style:2,use_form:2},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'phone',title:'Введите телефон',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#768eb2',action:'thanks',url:'',surround:3,style:2,amount:0}
						],
						form2:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#768eb2',action:'thanks',url:'',surround:3,style:2,amount:0}
						],
						form3: [
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#768eb2',action:'thanks',url:'',surround:3,style:2,amount:0}
						],
						form_html1:'Замените HTML',
						form_html2:'Замените HTML'
					},
					{
						link:'',
						extra_info1:'<p>Стиль: HIP HOP</p><p>Материал: Хлопок</p><p>Подходит для следующих случаев: Повседневный</p><p>Происхождение: CHINA</p><p>Сезон: Осенью И Зимой</p><p>Тип рисунка: Персонажи мультфильмов</p><p>Тип товара: Пуловеры</p><p>Длина рукава: Полный</p><p>Декоративные элементы: Вышивка</p><p>Тип рукава: Стандартная</p><p>Плотность ткани: Толстый</p>',
						image1:'sec1130_912_3.jpg',
						image1_1:'sec1130_912_3.jpg',
						image1_2:'sec1130_912_3.jpg',
						image1_3:'sec1130_912_3.jpg',
						alt1:'',alt1_1:'',alt1_2:'',alt1_3:'',
						title1:'<b>Винтажный свитер в стиле хип-хоп Harajuku</b>',
						txt1:'Зимний вязаный свитер с японским рисунком',
						price1:'<b>1 564 ₽</b>',
						btn1:{title:'Заказать',color:'#768eb2',surround:3,style:2},
						btn2:{title:'В корзину',color:'#768eb2',style:2,use_form:2},
						btn3:{title:'В корзину',color:'#768eb2',surround:3,style:2,use_form:2},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'phone',title:'Введите телефон',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#768eb2',action:'thanks',url:'',surround:3,style:2,amount:0}
						],
						form2:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#768eb2',action:'thanks',url:'',surround:3,style:2,amount:0}
						],
						form3: [
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#768eb2',action:'thanks',url:'',surround:3,style:2,amount:0}
						],
						form_html1:'Замените HTML',
						form_html2:'Замените HTML'
					},
					{
						link:'',
						extra_info1:'<p>Стиль: HIP HOP</p><p>Материал: Хлопок</p><p>Подходит для следующих случаев: Повседневный</p><p>Происхождение: CHINA</p><p>Сезон: Осенью И Зимой</p><p>Тип рисунка: Персонажи мультфильмов</p><p>Тип товара: Пуловеры</p><p>Длина рукава: Полный</p><p>Декоративные элементы: Вышивка</p><p>Тип рукава: Стандартная</p><p>Плотность ткани: Толстый</p>',
						image1:'sec1130_912_4.jpg',
						image1_1:'sec1130_912_4.jpg',
						image1_2:'sec1130_912_4.jpg',
						image1_3:'sec1130_912_4.jpg',
						alt1:'',alt1_1:'',alt1_2:'',alt1_3:'',
						title1:'<b>Винтажный свитер в стиле хип-хоп Harajuku</b>',
						txt1:'Зимний вязаный свитер с японским рисунком',
						price1:'<b>1 564 ₽</b>',
						btn1:{title:'Заказать',color:'#768eb2',surround:3,style:2},
						btn2:{title:'В корзину',color:'#768eb2',style:2,use_form:2},
						btn3:{title:'В корзину',color:'#768eb2',surround:3,style:2,use_form:2},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'phone',title:'Введите телефон',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#768eb2',action:'thanks',url:'',surround:3,style:2,amount:0}
						],
						form2:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#768eb2',action:'thanks',url:'',surround:3,style:2,amount:0}
						],
						form3: [
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#768eb2',action:'thanks',url:'',surround:3,style:2,amount:0}
						],
						form_html1:'Замените HTML',
						form_html2:'Замените HTML'
					}
				]
			}
		},
		{
			id:125,
			default:1,
			position:11773,
			title:'913. Блок из 2-х товаров',
			description:'Можно изменить размер фото, поменять фон, добавить больше товаров',
			default_values:{
				show_price:1,
				show_btn:1
			}
		},
		{
			id:1302,
			default:0,
			position:11774,
			title:'914. Блок из 4-х товаров в ряд с изображениями',
			description:'Есть возможность подключения корзины, карточки товара, онлайн оплаты',
			default_values:{}
		},
		{
			id:1302,
			default:0,
			position:11775,
			title:'915. Блок из 4-х товаров в ряд с изображениями',
			description:'Есть возможность подключения корзины, карточки товара, онлайн оплаты',
			default_values:{
				bg:'',
				menu_bg_color:'#44844b',
				menu_hover_color:'#fff',
				opacity_col_color:'#f2f2f2',
				menu_style:'style_new',
				item_content_align:'i_center',
				btn_auto_width:0,
				title_fweight:500
			}
		},
		{
			id:160,
			default:0,
			position:11776,
			title:'916. Блок из 4-х фотографий с большим описанием',
			description:'Есть возможность подключения корзины, карточки товара, онлайн оплаты',
			default_values:{
				show_title:0,
				show_sub_title:0,
				title1:'<span style="font-size:36px">Пластиковая ваза для цветов, имитация керамического цветочного горшка</span>',
				text1:'<span style="font-size:18px">Цветы — это всегда прекрасно. А когда они растут в оригинальных горшках, эстетическое наслаждение усиливается! Меж тем, цветочный горшок — не просто емкость для растений. Он может стать ярким акцентом в интерьере, плацдармом для творческих экспериментов и, конечно, вещью, неизменно поднимающей настроение.​​​​​​​</span>',
				show_price:1,
				img_zoom:1,
				shadow:1,
				border:1,
				price1:'<b>150 руб / шт</b>',
				btn1:{title:'Заказать сейчас',color:'#f78960',surround:3,style:17},
				arr1:[
					{
						image1:'sec160_11776_1.jpg',
						image2:'sec160_11776_2.jpg',
						image3:'sec160_11776_3.jpg',
						image4:'sec160_11776_4.jpg',
						alt1:'',alt2:'',alt3:'',alt4:''
					}
				]
			}
		} 
	],
	group:[125, 124, 129, 414, 130, 1130],
	deleted:[14, 13, 12, 11, 10, 15, 29, 24, 25, 27, 28, 127, 128, 200, 201, 314],
	widget:0
},
{
	name:'Тарифы и таблицы',
	icon:'fa fa-table',
	icon_new:'rates.svg',
	blocks:[
		{
			id:1318,
			default:1,
			position:7002,
			title:'1000. Таблица из 6-и колонок (простая)',
			description:'Можно изменить цвет таблицы, стилизовать строки, включить шапку и закрашивать строки при наведении',
			default_values:{even_bg:0}
		},
		{
			id:1318,
			default:1,
			position:7003,
			title:'1001. Таблица из 6-и колонок (стилизованная)',
			description:'Можно изменить цвет таблицы, стилизовать строки, включить шапку и закрашивать строки при наведении',
			default_values:{}
		},
		{
			id:1318,
			default:0,
			position:7004,
			title:'1002. Таблица из 6-и колонок (с шапкой)',
			description:'Можно изменить цвет таблицы, стилизовать строки, включить шапку и закрашивать строки при наведении',
			default_values:{table_use_header:1}
		},
		{
			id:1318,
			default:0,
			position:7005,
			title:'1003. Таблица из 3-х колонок',
			description:'Можно изменить цвет таблицы, стилизовать строки, включить шапку и закрашивать строки при наведении',
			default_values:{
				how_much_line:'three',
				able_use_header:1,
				show_btns:1
			}
		},
		{
			id:307,
			default:1,
			position:7006,
			title:'1004. Сетка из 3 тарифов',
			description:'Можно отключить изображения, добавить или удалить пункты',
			default_values:{
				col_shadow:1,
				bg:'#f2f2f2'
			}
		},
		{
			id:308,
			default:1,
			position:7007,
			title:'1005. Сетка из 4 тарифов',
			description:'Можно отключить изображения, добавить или удалить пункты',
			default_values:{
				bg:'#f2f2f2'
			}
		},
		{
			id:309,
			default:1,
			position:7008,
			title:'1006. Сетка из 5 тарифов',
			description:'Можно отключить изображения, добавить или удалить пункты',
			default_values:{bg:'#f2f2f2'}
		},
		{
			id:318,
			default:1,
			position:7009,
			title:'1007. Блок-таблица из 3 пунктов',
			description:'Можно добавить и удалить пункты, изменить стиль иконок',
			default_values:{}
		},
		{
			id:319,
			default:1,
			position:7010,
			title:'1008. Блок-таблица из 3 пунктов',
			description:'Возможность добавление/удаление пунктов.',
			default_values:{}
		},
		{
			id:1319,
			default:1,
			position:7011,
			title:'1009. Блок из 3 текстовых колонок',
			description:'Возможность добавление/удаление строк, изменение количества столбцов, добавление кнопок.',
			default_values:{
				padd_top:'120',
				padd_bottom:'120'
			}
		},
		{
			id:1308,
			default:1,
			position:7012,
			title:'1010. Две плитки с опциями и кнопкой',
			description:'Возможность загружать изображения, анимация, добавление/удаление пунктов.',
			default_values:{}
		},
		{
			id:1318,
			default:0,
			position:7013,
			title:'1011. Блок-таблица из 3 колонок',
			description:'Возможность добавление/удаление строк, изменение количества столбцов, добавление кнопок.',
			default_values:{
				how_much_line:'three',
				even_bg:1,
				table_nth_bg:'#f8f8f8'
			}
		},
		{
			id:1318,
			default:0,
			position:7014,
			title:'1012. Блок-таблица из 4 колонок',
			description:'Возможность добавление/удаление строк, изменение количества столбцов, добавление кнопок.',
			default_values:{
				how_much_line:'four',
				width1170:1,
				even_bg:0,
				show_btns:1
			}
		},
		{
			id:308,
			default:0,
			position:7015,
			title:'1013. Блок-сетка из 4 тарифов',
			description:'Возможность загружать изображения, цветные иконки, анимация, добавление/удаление пунктов.',
			default_values:{
				show_image:1,
				c_icon:1,
				hover_color:'#f9b642',
				opacity_col_color:'#fff',
				bg_col_opacity:1,
				bg:'#f2f2f2',
				btn1:{title:'Выбрать',color:'#f9b642',surround:3,style:5,use_form:0},
				btn2:{title:'Выбрать',color:'#f9b642',surround:3,style:5,use_form:0},
				btn3:{title:'Выбрать',color:'#f9b642',surround:3,style:5,use_form:0},
				btn4:{title:'Выбрать',color:'#f9b642',surround:3,style:5,use_form:0}
			}
		},
		{
			id:309,
			default:0,
			position:7016,
			title:'1013. Блок-сетка из 5 тарифов',
			description:'Возможность загружать изображения, цветные иконки, анимация, добавление/удаление пунктов.',
			default_values:{
				show_image:1,
				c_icon:1,
				bg:'#f2f2f2',
				btn1:{title:'Выбрать',color:'#f9b642',surround:3,style:17,use_form:0},
				btn2:{title:'Выбрать',color:'#f9b642',surround:3,style:17,use_form:0},
				btn3:{title:'Выбрать',color:'#f9b642',surround:3,style:17,use_form:0},
				btn4:{title:'Выбрать',color:'#f9b642',surround:3,style:17,use_form:0},
				btn5:{title:'Выбрать',color:'#f9b642',surround:3,style:17,use_form:0}
			}
		},
		{
			id:307,
			default:1,
			position:7017,
			title:'1014. Блок-сетка из 3 тарифов',
			description:'Возможность загружать изображения, анимация, добавление/удаление пунктов.',
			default_values:{
				bg:'#f8f8f8',
				btn1:{title:'Выбрать',color:'#637d8b',surround:3,style:17,use_form:1},
				btn2:{title:'Выбрать',color:'#637d8b',surround:3,style:17,use_form:1},
				btn3:{title:'Выбрать',color:'#637d8b',surround:3,style:17,use_form:1}
			}
		},
		{
			id:1319,
			default:1,
			position:7018,
			title:'1015. Блок из 3 текстовых колонок',
			description:'Возможность добавление/удаление строк, изменение количества столбцов, добавление кнопок.',
			default_values:{
				padd_top:'120',
				padd_bottom:'120',
				bg:'#f2f2f2',
				bg_color_item:'#303030',
				arr1:[
					{
						image1:'section1319_image1_1.jpg',
						alt1:'',
						video1:'https://youtu.be/V56TUkuKCH4',
						txt1:'<span style="color:#fff"><span style="font-size:24px"><span style="font-family:montserrat">Тариф Year+</span></span><br><br><b>3 ГБ</b> места<br>1 сайт / ftp акк. 1 база данных<br><br>Оплата помесячно <b>200 ₽</b> в мес<br>При оплате за год <b>150 ₽</b> в мес</span>'
					},
					{
						image1:'section1319_image2_1.jpg',
						alt1:'',
						video1:'https://youtu.be/V56TUkuKCH4',
						txt1:'<span style="color:#fff"><span style="font-family:montserrat"><span style="font-size:24px">Тариф Optimus+</span></span><br><br><b>10 ГБ</b> места<br>10 сайт / ftp акк. 100 база данных<br><br>Оплата помесячно <b>300 ₽ </b>в мес<br>При оплате за год <b>180 ₽</b> в мес</span>'
					},
					{
						image1:'section1319_image3_1.jpg',
						alt1:'',
						video1:'https://youtu.be/V56TUkuKCH4',
						txt1:'<span style="color:#fff"><span style="font-family:montserrat"><span style="font-size:24px">Тариф Prime+</span></span><br><br><b>20 ГБ</b> места<br>100 сайт / ftp акк. 1000 база данных<br><br>Оплата помесячно <b>500 ₽</b> в мес<br>При оплате за год <b>200 ₽</b> в мес</span>'
					}
				]
			}
		}
	],
	group:[307, 308, 309, 1318],
	deleted:[],
	widget:0
},
{
	name:'Преимущества',
	icon:'fa fa-th-list',
	icon_new:'advantages.svg',
	blocks:[
		{
			id:414,
			default:1,
			position:12101,
			title:'1101. Сетка из 3 карточек',
			description:'Можно добавить карточки, изменить фон подложки и заголовков, поменять иконки',
			default_values:{
				title:'<b>Почему мы лучшие</b>',
				sub_title:'Выгодные стороны, отличающие нас от конкурентов',
				show_btns:0,
				icon_colors:'#272643',
				col_radius:'7',
				arr1:[
					{
						form_html1:'Замените HTML',
						form_html2:'Замените HTML',
						form_html3:'Замените HTML',
						title1:'<b>Гарантия качества</b>',
						title2:'<b>Большой опыт</b>',
						title3:'<b>Индивидуальность</b>',
						price1:' ',
						price2:' ',
						price3:' ',
						mdico1:'svg-icon-accept',
						mdico2:'svg-icon-calendar',
						mdico3:'svg-icon-paint-roller1',
						txt1:'Мы гарантируем высокое качество как выполняемых работ, так и подбираемых материалов',
						txt2:'Уже более 25 лет мы занимаемся своим делом и знаем как делать качественно и быстро',
						txt3:'Накопленный опыт и знания помогают найти подход к каждому клиенту и сделать его довольным',
						btn1:{title:'Узнать подробнее',color:'#bae8e8',surround:3,style:5},
						btn2:{title:'Узнать подробнее',color:'#bae8e8',surround:3,style:5},
						btn3:{title:'Узнать подробнее',color:'#bae8e8',surround:3,style:5},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#bae8e8',action:'thanks',url:'',amount:0,surround:3,style:5}
						],
						form2:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#bae8e8',action:'thanks',url:'',amount:0,surround:3,style:5}
						],
						form3: [
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#bae8e8',action:'thanks',url:'',amount:0,surround:3,style:5}
						]
					}
				]
			}
		},
		{
			id:1152,
			default:0,
			position:12105,
			title:'1102. Блок с логотипами компаний',
			description:'Данный блок используется для загрузки логотипов партнеров',
			default_values:{}
		},
		{
			id:1153,
			default:0,
			position:12107,
			title:'1103. Блок с логотипами компаний',
			description:'Данный блок используется для загрузки логотипов партнеров',
			default_values:{}
		},
		{
			id:151,
			default:0,
			position:12400,
			title:'1104. Преимущества из 4 портретных изображений',
			description:'Есть возможность загрузки изображений и изменения текста.',
			default_values:{
				title:'<b>Наши главные преимущества</b>',
				sub_title:'4 веские причины обратиться в нашу компанию',
				arr1:[
					{
						image1:'sec151_3_1.jpg',
						image2:'sec151_3_2.jpg',
						image3:'sec151_3_3.jpg',
						image4:'sec151_3_4.jpg',
						alt1:'',alt2:'',alt3:'',alt4:'',
						title1:'<b>Современная техника</b>',
						title2:'<b>Любые цели и задачи</b>',
						title3:'<b>Гарантия результата</b>',
						title4:'<b>Быстрое выполнение работ</b>',
						subtitle1:'В нашем парке задействована только современная и надеждная спецтехника и инструменты',
						subtitle2:'Наши специалисты подберут бульдозер или резак под абсолютно любые цели и задачи',
						subtitle3:'Мы серьезная компания, поэтому работаем на результат, а не красивый отзыв',
						subtitle4:'Опытные специалисты, вооруженные новейшим оборудованием, выполнят работу в кратчайшие сроки'
					}
				]
			}
		},
		{
			id:130,
			default:0,
			position:12801,
			title:'1105. Плитка из 3-х карточек с иконками',
			description:'Можно изменить стиль иконок, количество плиток в ряду, подсвечивать карточку',
			default_values:{
				bg:'#f2f2f2',
				title:'<b>Почему выбирают именно нас</b>',
				show_sub_title:0,
				show_price:0,
				show_btns:0,
				short_text:0,
				mode:'mdicon',
				items_count:'count3',
				icon_colors:'#000',
				icon_size:'90',
				arr1:[
					{
						link:'',
						extra_info1:' ',
						image1:'image_33.jpg',
						image1_1:'image_1.jpg',
						image1_2:'image_2.jpg',
						image1_3:'image_3.jpg',
						alt1:'',alt1_1:'',alt1_2:'',alt1_3:'',
						title1:'<span style="font-size:24px"><b>10 лет опыта на рынке</b></span>',
						txt1:'<span style="font-size:18px">Опишите в этом поле сильные стороны вашей компании, чтобы заинтересовать потенциальных клиентов</span>',
						price1:'2000 руб.',
						ico1:'fa-linux',
						mdico1:'svg-icon-calendar1',
						c_ico1:'028-success.svg',
						btn1:{title:'Подробнее',color:'#000',surround:3,style:5},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#000',action:'thanks',url:'',surround:3,style:5,amount:0}
						],
						form_html1:'Замените HTML'
					},
					{
						link:'',
						extra_info1:' ',
						image1:'image_33.jpg',
						image1_1:'image_1.jpg',
						image1_2:'image_2.jpg',
						image1_3:'image_3.jpg',
						alt1:'',alt1_1:'',alt1_2:'',alt1_3:'',
						title1:'<span style="font-size:24px"><b>Самые довольные клиенты</b></span>',
						txt1:'<span style="font-size:18px">Опишите в этом поле сильные стороны вашей компании, чтобы заинтересовать потенциальных клиентов</span>',
						price1:'2000 руб.',
						ico1:'fa-linux',
						mdico1:'svg-icon-discussion',
						c_ico1:'004-strength.svg',
						btn1:{title:'Подробнее',color:'#000',surround:3,style:5},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#000',action:'thanks',url:'',surround:3,style:5,amount:0}
						],
						form_html1:'Замените HTML'
					},
					{
						link:'',
						extra_info1:' ',
						image1:'image_33.jpg',
						image1_1:'image_1.jpg',
						image1_2:'image_2.jpg',
						image1_3:'image_3.jpg',
						alt1:'',alt1_1:'',alt1_2:'',alt1_3:'',
						title1:'<span style="font-size:24px"><b>100% гарантия качества</b></span>',
						txt1:'<span style="font-size:18px">Опишите в этом поле сильные стороны вашей компании, чтобы заинтересовать потенциальных клиентов</span>',
						price1:'2000 руб.',
						ico1:'fa-linux',
						mdico1:'svg-icon-accept',
						c_ico1:'011-exchange.svg',
						btn1:{title:'Подробнее',color:'#000',surround:3,style:5},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#000',action:'thanks',url:'',surround:3,style:5,amount:0}
						],
						form_html1:'Замените HTML'
					}
				]
			}
		},
		{
			id:130,
			default:0,
			position:12804,
			title:'1106. Преимущества из 4-х изображений',
			description:'Есть возможность загрузки изображений и изменения текста',
			default_values:{
				bg:'#cde6cf',
				title:'<b><span style="font-size:52px">Вы не устоите</span></b>',
				sub_title:'<span style="font-size:32px">И обязательно выберите наш оздоровительный комплекс​​​​​​​</span>',
				show_descr:0,
				show_price:0,
				bg_col_opacity:0,
				show_btns:0,
				filter_shadow:1,
				mode:'s200',
				items_count:'count4',
				padd_top:'120',
				padd_bottom:'120',
				arr1:[
					{
						link:'',
						extra_info1:' ',
						image1:'sec130_1102_1.png',
						image1_1:'sec130_1102_1.png',
						image1_2:'sec130_1102_1.png',
						image1_3:'sec130_1102_1.png',
						alt1:'',alt1_1:'',alt1_2:'',alt1_3:'',
						title1:'Невероятная атмосфера комплекса создаст незабываемые воспоминания',
						txt1:'',
						price1:'',
						ico1:'fa-linux',
						mdico1:'svg-icon-presentation-1',
						c_ico1:'merge.png',
						btn1:{title:'Узнать подробнее',color:'#e46c3e',surround:3,style:5},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#e46c3e',action:'thanks',url:'',surround:3,style:5,amount:0}
						],
						form_html1:'Замените HTML'
					},
					{
						link:'',
						extra_info1:' ',
						image1:'sec130_1102_2.png',
						image1_1:'sec130_1102_2.png',
						image1_2:'sec130_1102_2.png',
						image1_3:'sec130_1102_2.png',
						alt1:'',alt1_1:'',alt1_2:'',alt1_3:'',
						title1:'Свежий воздух лесного массива и гор вдохнут в вас новый поток сил и энергии',
						txt1:'',
						price1:'',
						ico1:'fa-linux',
						mdico1:'svg-icon-search3',
						c_ico1:'flash.png',
						btn1:{title:'Узнать подробнее',color:'#e46c3e',surround:3,style:5},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#e46c3e',action:'thanks',url:'',surround:3,style:5,amount:0}
						],
						form_html1:'Замените HTML'
					},
					{
						link:'',
						extra_info1:' ',
						image1:'sec130_1102_3.png',
						image1_1:'sec130_1102_3.png',
						image1_2:'sec130_1102_3.png',
						image1_3:'sec130_1102_3.png',
						alt1:'',alt1_1:'',alt1_2:'',alt1_3:'',
						title1:'Невероятные виды запомнятся надолго, а мы будем ждать вас снова в нашем комплексе',
						txt1:'',
						price1:'',
						ico1:'fa-linux',
						mdico1:'svg-icon-shadow',
						c_ico1:'microphone.png',
						btn1:{title:'Узнать подробнее',color:'#e46c3e',surround:3,style:5},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#e46c3e',action:'thanks',url:'',surround:3,style:5,amount:0}
						],
						form_html1:'Замените HTML'
					},
					{
						link:'',
						extra_info1:' ',
						image1:'sec130_1102_4.png',
						image1_1:'sec130_1102_4.png',
						image1_2:'sec130_1102_4.png',
						image1_3:'sec130_1102_4.png',
						alt1:'',alt1_1:'',alt1_2:'',alt1_3:'',
						title1:'Море впечатлений и эмоций уносит из комплекса абсолютно каждый посетитель',
						txt1:'',
						price1:'',
						ico1:'fa-linux',
						mdico1:'svg-icon-solar-system',
						c_ico1:'megaphone2.png',
						btn1:{title:'Узнать подробнее',color:'#e46c3e',surround:3,style:5},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#e46c3e',action:'thanks',url:'',surround:3,style:5,amount:0}
						],
						form_html1:'Замените HTML'
					}
				]
			}
		},
		{
			id:130,
			default:0,
			position:12805,
			title:'1107. Преимущества из 5-и изображений',
			description:'Есть возможность загрузки изображений и изменения текста',
			default_values:{
				bg:'#972842',
				title:'Сезонное аффективное расстройство<br><u><span style="font-size:72px">ИЛИ ДЕПРЕССИЯ</span></u>',
				sub_title:'<br><b>—</b> Как справиться с осенней хандрой и что это такое? <b>—</b><div><br></div>',
				show_descr:0,
				show_price:0,
				show_btns:0,
				bg_col_opacity:0,
				filter_shadow:1,
				mode:'s200',
				items_count:'count5',
				padd_top:'100',
				padd_bottom:'100',
				arr1:[
					{
						link:'',
						extra_info1:' ',
						image1:'sec130_1107_1.png',
						image1_1:'sec130_1107_1.png',
						image1_2:'sec130_1107_1.png',
						image1_3:'sec130_1107_1.png',
						alt1:'',alt1_1:'',alt1_2:'',alt1_3:'',
						title1:'<span style="color:#fff">Прежде всего необходимо заботиться о себе, слушать свой организм.</span>',
						txt1:'',
						price1:'',
						ico1:'fa-user',
						mdico1:'svg-icon-tuxedo',
						c_ico1:'merge.png',
						btn1:{title:'Узнать подробнее',color:'#fde7cd',surround:3,style:5},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#fde7cd',action:'thanks',url:'',surround:3,style:5,amount:0}
						],
						form_html1:'Замените HTML'
					},
					{
						link:'',
						extra_info1:' ',
						image1:'sec130_1107_2.png',
						image1_1:'sec130_1107_2.png',
						image1_2:'sec130_1107_2.png',
						image1_3:'sec130_1107_2.png',
						alt1:'',alt1_1:'',alt1_2:'',alt1_3:'',
						title1:'<span style="color:#fff">Следить  за питанием, оно должно быть разнообразным. Выстроить правильный режим дня.</span>',
						txt1:'',
						price1:'',
						ico1:'fa-users',
						mdico1:'svg-icon-vitamin15',
						c_ico1:'flash.png',
						btn1:{title:'Узнать подробнее',color:'#fde7cd',surround:3,style:5},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#fde7cd',action:'thanks',url:'',surround:3,style:5,amount:0}
						],
						form_html1:'Замените HTML'
					},
					{
						link:'',
						extra_info1:' ',
						image1:'sec130_1107_3.png',
						image1_1:'sec130_1107_3.png',
						image1_2:'sec130_1107_3.png',
						image1_3:'sec130_1107_3.png',
						alt1:'',alt1_1:'',alt1_2:'',alt1_3:'',
						title1:'<span style="color:#fff">Необходимо поддерживать себя и, как сейчас, модно говорить, «быть в ресурсе», элементарно себя радовать.</span>',
						txt1:'',
						price1:'',
						ico1:'fa-file-text-o',
						mdico1:'svg-icon-ballet',
						c_ico1:'microphone.png',
						btn1:{title:'Узнать подробнее',color:'#fde7cd',surround:3,style:5},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#fde7cd',action:'thanks',url:'',surround:3,style:5,amount:0}
						],
						form_html1:'Замените HTML'
					},
					{
						link:'',
						extra_info1:' ',
						image1:'sec130_1107_4.png',
						image1_1:'sec130_1107_3.png',
						image1_2:'sec130_1107_3.png',
						image1_3:'sec130_1107_3.png',
						alt1:'',alt1_1:'',alt1_2:'',alt1_3:'',
						title1:'<span style="color:#fff">Несмотря на плохую погоду, будьте физически активными и увеличьте количество прогулок на свежем воздухе.</span>',
						txt1:'',
						price1:'',
						ico1:'fa-graduation-cap',
						mdico1:'svg-icon-book',
						c_ico1:'megaphone2.png',
						btn1:{title:'Узнать подробнее',color:'#fde7cd',surround:3,style:5},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#fde7cd',action:'thanks',url:'',surround:3,style:5,amount:0}
						],
						form_html1:'Замените HTML'
					},
					{
						link:'',
						extra_info1:' ',
						image1:'sec130_1107_5.png',
						image1_1:'sec130_1107_3.png',
						image1_2:'sec130_1107_3.png',
						image1_3:'sec130_1107_3.png',
						alt1:'',alt1_1:'',alt1_2:'',alt1_3:'',
						title1:'<span style="color:#fff">Ходьба является одним из видов  стимуляции, которая способствует снижению стресса</span>',
						txt1:'',
						price1:'',
						ico1:'fa-inbox',
						mdico1:'svg-icon-broswer1',
						c_ico1:'megaphone2.png',
						btn1:{title:'Узнать подробнее',color:'#fde7cd',surround:3,style:5},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#fde7cd',action:'thanks',url:'',surround:3,style:5,amount:0}
						],
						form_html1:'Замените HTML'
					}
				]
			}
		},
		{
			id:124,
			default:1,
			position:12900,
			title:'1108. Преимущества из 3 изображений',
			description:'Есть возможность загрузки изображений и изменения текста.',
			default_values:{
				title:'<b>Лучшая строительная компания</b>',
				sub_title:'Работаем быстро, чисто и качественно',
				show_btns:0,
				show_descr:0,
				show_price:0,
				arr1:[
					{
						image1:'sec124_2_1.jpg',
						image2:'sec124_2_2.jpg',
						image3:'sec124_2_3.jpg',
						alt1:'',alt2:'',alt3:'',
						form_html1:'Замените HTML',
						form_html2:'Замените HTML',
						form_html3:'Замените HTML',
						title1:'Возводим сооружения любой сложности в кратчайшие сроки',
						title2:'Цены на наши услуги самые прозрачные на рынке строительства',
						title3:'В своей работе используем только материалы премиум качества',
						price1:'',
						price2:'',
						price3:'',
						txt1:'',
						txt2:'',
						txt3:'',
						btn1:{title:'Заказать',color:'#000',style:5},
						btn2:{title:'Заказать',color:'#000',style:17},
						btn3:{title:'Заказать',color:'#000',style:17},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#000',action:'thanks',url:'',surround:3,style:5,amount:0}
						],
						form2:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#000',action:'thanks',url:'',surround:3,style:5,amount:0}
						],
						form3: [
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#000',action:'thanks',url:'',surround:3,style:5,amount:0}
						]
					}
				]
			}
		},
		{
			id:125,
			default:0,
			position:12930,
			title:'1109. Преимущества из 4-х изображений',
			description:'Есть возможность загрузки изображений и изменения текста',
			default_values:{
				bg:'#f5f5f5',
				title:'Допустим, прототип — не панацея',
				sub_title:'Нет звука приятнее, чем песнь светлого будущего<div><br></div>',
				show_title:1,
				btn_move:0,
				show_sub_title:1,
				show_descr:1,
				animate:0,
				show_price:0,
				icon_colors:'#60B9CE',
				shadow:0,
				show_btn:0,
				radius:0,
				img_zoom:0,
				backlight:0,
				arr1:[
					{
						image1:'sec125_2_1.png',
						image2:'sec125_2_2.png',
						alt1:'',alt2:'',
						ico1:'fa-gg',
						ico2:'fa-google-wallet',
						c_ico1:'video.png',
						c_ico2:'umbrella.png',
						mdico1:'svg-icon-chat5',
						mdico2:'svg-icon-egg',
						title1:'<b>Близость к государственным границам</b>',
						title2:'<b>В центральных регионах звучит шёпот</b>',
						txt1:'Богатый опыт говорит нам, что разбавленное изрядной долей эмпатии, рациональное мышление влечет процесс внедрения экономической целесообразности решений.',
						txt2:'В своём стремлении улучшить пользовательский опыт мы упускаем, что интерактивные прототипы объявлены нарушающими общечеловеческие нормы этики и морали.',
						price1:'',
						price2:'',
						btn1:{title:'Заказать',color:'#000',surround:3,style:5},
						btn2:{title:'Заказать',color:'#000',surround:3,style:5},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#000',action:'thanks',url:'',surround:3,style:5,amount:0}
						],
						form2:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#000',action:'thanks',url:'',surround:3,style:5,amount:0}
						],
						form_html1:'Замените HTML',
						form_html2:'Замените HTML'
					},
					{
						image1:'sec125_2_3.png',
						image2:'sec125_2_4.png',
						alt1:'',alt2:'',
						ico1:'fa-gg',
						ico2:'fa-google-wallet',
						c_ico1:'video.png',
						c_ico2:'umbrella.png',
						mdico1:'svg-icon-chat5',
						mdico2:'svg-icon-egg',
						title1:'<b>Убеждённость некоторых оппонентов</b>',
						title2:'<b>Средства индивидуальной защиты</b>',
						txt1:'Как уже неоднократно упомянуто, многие известные личности, инициированные исключительно синтетически, объявлены нарушающими общечеловеческие нормы этики и морали.',
						txt2:'"лементы политического процесса предоставлены сами себе. Идейные соображения высшего порядка, а также структура напрямую зависит от анализа паттернов поведения.',
						price1:'',
						price2:'',
						btn1:{title:'Заказать',color:'#000',surround:3,style:5},
						btn2:{title:'Заказать',color:'#000',surround:3,style:5},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#000',action:'thanks',url:'',surround:3,style:5,amount:0}
						],
						form2:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#000',action:'thanks',url:'',surround:3,style:5,amount:0}
						],
						form_html1:'Замените HTML',
						form_html2:'Замените HTML'
					}
				]
			}
		},
		{
			id:1418,
			default:1,
			position:12931,
			title:'1210. Блок возможности',
			description:'Можно отключить второе изображение, добавить кнопки и больше плашек',
			default_values:{
				image1:'sec1418_1_1.jpg',
				image2:'sec1418_1_2.jpg',
				title:'<b>Лучшая велосипедная мастерская в Чебоксарах</b>',
				sub_title:'Большое количество запчастей и качественный ремонт',
				hover_color:'#818c9a',
				shadow:1,
				arr1:[
					{
						title1:'<b>Всегда в наличии</b>',
						txt1:'В нашей мастерской всегда в наличии даже самые редкие запчасти и комплектующие',
						ico1:'svg-icon-setting',
						btn1:{title:'Подробнее',color:'#818c9a',surround:1,style:1},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#818c9a',action:'thanks',surround:1,style:1,url:'',amount:0}
						]
					},
					{
						title1:'<b>Качественный ремонт</b>',
						txt1:'У нас работают профессионалы с более чем 15 летним стажем ремонта велосипедного транспорта',
						ico1:'svg-icon-bicycle',
						btn1:{title:'Подробнее',color:'#818c9a',surround:1,style:1},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#818c9a',action:'thanks',surround:1,style:1,url:'',amount:0}
						]
					},
					{
						title1:'<b>0% отказов</b>',
						txt1:'Возьмёмся даже за самый сложный ремонт самого дешевого байка и сделаем его качественно',
						ico1:'svg-icon-wrench',
						btn1:{title:'Подробнее',color:'#818c9a',surround:1,style:1},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#818c9a',action:'thanks',surround:1,style:1,url:'',amount:0}
						]
					},
					{
						title1:'<b>Гарантия 1 год</b>',
						txt1:'На все выполняемые работы по ремонту велосипедов в мастерской  даем гарантию 1 год',
						ico1:'svg-icon-discount',
						btn1:{title:'Подробнее',color:'#818c9a',surround:1,style:1},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#818c9a',action:'thanks',surround:1,style:1,url:'',amount:0}
						]
					}
				]
			}
		},
		{
			id:130,
			default:0,
			position:12932,
			title:'1211. Преимущества из 4-х цветных иконок',
			description:'Есть возможность изменения иконок. Имеется большая база иконок',
			default_values:{
				bg:'#f5f5f5',
				title:'<b>Большой парк спецтехники</b>',
				sub_title:'Доступны в лизинг самосвалы, бетономешалки, тяжелые колесные тягачи и многое другое',
				show_title1:0,
				show_descr:1,
				show_price:0,
				bg_col_opacity:1,
				opacity_col_color:'#fff',
				show_btns:0,
				mode:'s200',
				items_count:'count4',
				arr1:[
					{
						link:'',
						extra_info1:' ',
						image1:'sec130_12932_1.png',
						image1_1:'',
						image1_2:'',
						image1_3:'',
						alt1:'',alt1_1:'',alt1_2:'',alt1_3:'',
						ico1:'fa-linux',
						mdico1:'svg-icon-joker',
						c_ico1:'010-rating.svg',
						title1:'',
						txt1:'Мы предлагаем взять грузовик в лизинг на условиях производителя или дилера',
						price1:'',
						btn1:{title:'Подробнее',color:'#000',surround:3,style:17},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#000',action:'thanks',url:'',surround:3,style:17,amount:0}
						],
						form_html1:'Замените HTML'
					},
					{
						link:'',
						extra_info1:' ',
						image1:'sec130_12932_2.png',
						image1_1:'',
						image1_2:'',
						image1_3:'',
						alt1:'',alt1_1:'',alt1_2:'',alt1_3:'',
						ico1:'fa-linux',
						mdico1:'svg-icon-joker',
						c_ico1:'010-rating.svg',
						title1:'',
						txt1:'Вы можете выбирать наиболее удобную схему оплаты: ускоренную или равномерную',
						price1:'',
						btn1:{title:'Подробнее',color:'#000',surround:3,style:17},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#000',action:'thanks',url:'',surround:3,style:17,amount:0}
						],
						form_html1:'Замените HTML'
					},
					{
						link:'',
						extra_info1:' ',
						image1:'sec130_12932_3.png',
						image1_1:'',
						image1_2:'',
						image1_3:'',
						alt1:'',alt1_1:'',alt1_2:'',alt1_3:'',
						ico1:'fa-linux',
						mdico1:'svg-icon-joker',
						c_ico1:'010-rating.svg',
						title1:'',
						txt1:'Допускается досрочный выкуп техники в соответствии с условиями договора',
						price1:'',
						btn1:{title:'Подробнее',color:'#000',surround:3,style:17},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#000',action:'thanks',url:'',surround:3,style:17,amount:0}
						],
						form_html1:'Замените HTML'
					},
					{
						link:'',
						extra_info1:' ',
						image1:'sec130_12932_4.png',
						image1_1:'',
						image1_2:'',
						image1_3:'',
						alt1:'',alt1_1:'',alt1_2:'',alt1_3:'',
						ico1:'fa-linux',
						mdico1:'svg-icon-joker',
						c_ico1:'010-rating.svg',
						title1:'',
						txt1:'Чтобы получить персональное предложение, позвоните нам на горячую линию',
						price1:'',
						btn1:{title:'Подробнее',color:'#000',surround:3,style:17},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#000',action:'thanks',url:'',surround:3,style:17,amount:0}
						],
						form_html1:'Замените HTML'
					}
				]
			}
		},
		{
			id:130,
			default:0,
			position:12933,
			title:'1212. Преимущества из 5-и цветных иконок',
			description:'Есть возможность изменения иконок. Имеется большая база иконок',
			default_values:{
				title:'<b>Примем заказ в любое время</b>',
				sub_title:'дня или ночи и даже в праздничные дни',
				show_descr:0,
				show_price:0,
				bg_col_opacity:0,
				show_btns:0,
				mode:'c_icon',
				items_count:'count5',
				arr1:[
					{
						link:'',
						extra_info1:' ',
						image1:'image_33.jpg',
						image1_1:'',
						image1_2:'',
						image1_3:'',
						alt1:'',alt1_1:'',alt1_2:'',alt1_3:'',
						title1:'Менеджер перезвонит Вам в тот же день',
						txt1:'',
						price1:'',
						ico1:'fa-linux',
						mdico1:'svg-icon-online-shop-2',
						c_ico1:'018-help.svg',
						btn1:{title:'Подробнее',color:'#000',surround:3,style:17},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#000',action:'thanks',url:'',surround:3,style:17,amount:0}
						],
						form_html1:'Замените HTML'
					},
					{
						link:'',
						extra_info1:' ',
						image1:'image_33.jpg',
						image1_1:'',
						image1_2:'',
						image1_3:'',
						alt1:'',alt1_1:'',alt1_2:'',alt1_3:'',
						title1:'Специалист рассчитает стоимость заказа',
						txt1:'',
						price1:'',
						ico1:'fa-linux',
						mdico1:'svg-icon-online-shop-2',
						c_ico1:'039-refund.svg',
						btn1:{title:'Подробнее',color:'#000',surround:3,style:17},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#000',action:'thanks',url:'',surround:3,style:17,amount:0}
						],
						form_html1:'Замените HTML'
					},
					{
						link:'',
						extra_info1:' ',
						image1:'image_33.jpg',
						image1_1:'',
						image1_2:'',
						image1_3:'',
						alt1:'',alt1_1:'',alt1_2:'',alt1_3:'',
						title1:'Проведем необходимые исследования',
						txt1:'',
						price1:'',
						ico1:'fa-linux',
						mdico1:'svg-icon-online-shop-2',
						c_ico1:'022-filling-form.svg',
						btn1:{title:'Подробнее',color:'#000',surround:3,style:17},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#000',action:'thanks',url:'',surround:3,style:17,amount:0}
						],
						form_html1:'Замените HTML'
					},
					{
						link:'',
						extra_info1:' ',
						image1:'image_33.jpg',
						image1_1:'',
						image1_2:'',
						image1_3:'',
						alt1:'',alt1_1:'',alt1_2:'',alt1_3:'',
						title1:'Составим смету и проведем все нужные работы',
						txt1:'',
						price1:'',
						ico1:'fa-linux',
						mdico1:'svg-icon-online-shop-2',
						c_ico1:'048-manual-book.svg',
						btn1:{title:'Подробнее',color:'#000',surround:3,style:17},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#000',action:'thanks',url:'',surround:3,style:17,amount:0}
						],
						form_html1:'Замените HTML'
					},
					{
						link:'',
						extra_info1:' ',
						image1:'image_33.jpg',
						image1_1:'',
						image1_2:'',
						image1_3:'',
						alt1:'',alt1_1:'',alt1_2:'',alt1_3:'',
						title1:'Предоставим вам полный видео- и фотоотчет',
						txt1:'',
						price1:'',
						ico1:'fa-linux',
						mdico1:'svg-icon-online-shop-2',
						c_ico1:'020-privacy-policy.svg',
						btn1:{title:'Подробнее',color:'#000',surround:3,style:17},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#000',action:'thanks',url:'',surround:3,style:17,amount:0}
						],
						form_html1:'Замените HTML'
					}
				]
			}
		},
		{
			id:1319,
			default:0,
			position:12934,
			title:'1213. Блок из 3-х текстовых колонок с изображениями',
			description:'Возможность изменить фон блока и карточек',
			default_values:{
				bg:'#fafafa',
				title:'Почему выбирают нашу компанию',
				sub_title:'Сравните все выгодные предложения',
				use_img:1,
				arr1:[
					{
						image1:'sec1319_4_1.jpg',
						alt1:'',
						txt1:'<b><span style="font-size:18px">Что включает пакет S:</span></b><ul><li><span style="font-size:18px">семантический разбор внешних противодействий;</span></li><li><span style="font-size:18px">определение дальнейшего развития.</span></li></ul>'
					},
					{
						image1:'sec1319_4_2.jpg',
						alt1:'',
						txt1:'<b><span style="font-size:18px">Что включает пакет M:</span></b><ul><li><span style="font-size:18px">семантический разбор внешних противодействий;</span></li><li><span style="font-size:18px">определение дальнейшего развития;</span></li><li><span style="font-size:18px">парад бытовой техники.</span><br></li></ul>'
					},
					{
						image1:'sec1319_4_3.jpg',
						alt1:'',
						txt1:'<b><span style="font-size:18px">Что включает пакет L:</span></b><ul><li><span style="font-size:18px">семантический разбор внешних противодействий;</span></li><li><span style="font-size:18px">определение дальнейшего развития;</span></li><li><span style="font-size:18px">парад бытовой техники.</span><br></li></ul>'
					}
				]
			}
		},
		{
			id:1308,
			default:1,
			position:12935,
			title:'1214. Две плитки с опциями',
			description:'Возможность изменить фон блока и карточек',
			default_values:{
				width1170:1,
				brd_color:'#f79f00',
				title:'Пошаговая система обучения и практикум',
				sub_title:'Пройди три месяца курса до результата',
				show_btn:0,
				col_title_1:'Получи тело мечты всего за 12 недель',
				col_title_3:'Цена сегодня <b>30 000 руб.</b>',
				col_title_2:'Продвинутый курс "Получи тело мечты"',
				col_title_4:'Цена сегодня: <b>50 000 руб.</b>',
				arr1:[
					{
						item_title:'Закрытая группа на 20 человек',
						icon:'svg-icon-bus',
						c_icon:'007-chat.svg'
					},
					{
						item_title:'Тренер-профессионал',
						icon:'svg-icon-finger',
						c_icon:'011-agenda.svg'
					},
					{
						item_title:'Онлайн-поддержка 12 часов в сутки',
						icon:'svg-icon-chosen1',
						c_icon:'050-telemarketer.svg'
					},
					{
						item_title:'Консультации по питанию и тренировкам',
						icon:'svg-icon-sofa',
						c_icon:'034-partnership.svg'
					}
				],
				arr2: [
					{
						item_title:'Закрытая группа на 20 человек',
						icon:'svg-icon-bus',
						c_icon:'007-chat.svg'
					},
					{
						item_title:'2 тренера-профессионала',
						icon:'svg-icon-finger',
						c_icon:'011-agenda.svg'
					},
					{
						item_title:'Онлайн-поддержка 24 часа в сутки',
						icon:'svg-icon-chosen1',
						c_icon:'050-telemarketer.svg'
					},
					{
						item_title:'Консультации по питанию и тренировкам',
						icon:'svg-icon-sofa',
						c_icon:'034-partnership.svg'
					},
					{
						item_title:'Индивидуальный подход тренера ',
						icon:'svg-icon-ship',
						c_icon:'032-customer-service.svg'
					}
				]
			}
		},
		{
			id:1418,
			default:0,
			position:12936,
			title:'1215. Блок возможности',
			description:'Добавление второго изображения, кнопки',
			default_values:{
				extra_img:0,
				shadow:1,
				img_center_align:1,
				bg:'#f2f2f2',
				image1:'sec1418_4.jpg',
				title:'<b>Аренда фотостудий в Чебоксарах</b>',
				sub_title:'Семейная фотосессия – это не просто красивые снимки в студии, на природе или дома',
				arr1:[
					{
						title1:'Необычность  создаваемых образов',
						txt1:'В студии Вы можете создать любой образ и сфотографировать его без лишних глаз и реакции прохожих. Вы можете создать образ с бодиартом.',
						ico1:'svg-icon-headphone',
						btn1:{title:'Подробнее',color:'#000',surround:1,style:1},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#000',action:'thanks',surround:1,style:1,url:'',amount:0}
						]
					},
					{
						title1:'Независимость от внешних факторов',
						txt1:'Фотографу не нужно подстраиваться под свет. Он сам творит свет с помощью осветительных приборов. Фотограф рисует светом. Подчеркивает достоинство модели, скрывает недостатки.',
						ico1:'svg-icon-briefcase1',
						btn1:{title:'Подробнее',color:'#000',surround:1,style:1},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#000',action:'thanks',surround:1,style:1,url:'',amount:0}
						]
					},
					{
						title1:'Четкие и яркие фотоснимки',
						txt1:'Это кропотливая и неспешная работа на результат. Фотографу не нужно торопиться, пока не ушло или не зашло солнце за тучку. Не нужно ждать, когда лишние люди выйдут из кадра.',
						ico1:'svg-icon-strongbox',
						btn1:{title:'Подробнее',color:'#000',surround:1,style:1},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#000',action:'thanks',surround:1,style:1,url:'',amount:0}
						]
					},
					{
						title1:'Без лишних глаз и волнения',
						txt1:'Эротическая фотосессия – опять же пройдет без лишних глаз и волнений. Там всегда тепло, всегда под боком туалет, раковина, чай, кофе.',
						ico1:'svg-icon-discount',
						btn1:{title:'Подробнее',color:'#000',surround:1,style:1},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#000',action:'thanks',surround:1,style:1,url:'',amount:0}
						]
					},
					{
						title1:'Большое количество приемов фото',
						txt1:'Количество возможных световых схем и приемов ограничивается только профессионализмом фотографа и студии.',
						ico1:'svg-icon-chosen1',
						btn1:{title:'Подробнее',color:'#000',surround:1,style:1},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#000',action:'thanks',surround:1,style:1,url:'',amount:0}
						]
					},
					{
						title1:'Все увлечены процессом фото',
						txt1:'Студийному фотографу никто не мешает, не отвлекает от работы. Все это способствует значительно более плодотворной работе.',
						ico1:'svg-icon-wall',
						btn1:{title:'Подробнее',color:'#000',surround:1,style:1},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#000',action:'thanks',surround:1,style:1,url:'',amount:0}
						]
					}
				]
			}
		},
		{
			id:130,
			default:0,
			position:12937,
			title:'1216. Плитка из 3-х больших цифр',
			description:'Можно изменить фон, увеличить ряд до 5, добавить кнопки',
			default_values:{
				bg:'#f2f2f2',
				title:'<b>Ключевые преимущества</b>',
				show_sub_title:0,
				show_price:0,
				bg_col_opacity:0,
				show_btns:0,
				mode:'non_img',
				arr1:[
					{
						link:'',extra_info1:' ',
						image1:'',image1_1:'',image1_2:'',image1_3:'',
						alt1:'',alt1_1:'',alt1_2:'',alt1_3:'',
						title1:'<strong><span style="font-size:64px;">10 лет</span></strong>',
						txt1:'Мы работаем на рынке в сфере услуг и радуем своих клиентов',
						price1:'',
						ico1:'fa-linux',
						mdico1:'svg-icon-online-shop-2',
						c_ico1:'018-help.svg',
						btn1:{title:'Подробнее',color:'#000',surround:3,style:17},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#000',action:'thanks',url:'',surround:3,style:17,amount:0}
						],
						form_html1:'Замените HTML'
					},
					{
						link:'',extra_info1:' ',
						image1:'',image1_1:'',image1_2:'',image1_3:'',
						alt1:'',alt1_1:'',alt1_2:'',alt1_3:'',
						title1:'<strong><span style="font-size:64px;">150 000</span></strong>',
						txt1:'Клиентов обратилось в нашу компанию с момента ее основания',
						price1:'',
						ico1:'fa-linux',
						mdico1:'svg-icon-online-shop-2',
						c_ico1:'039-refund.svg',
						btn1:{title:'Подробнее',color:'#000',surround:3,style:17},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#000',action:'thanks',url:'',surround:3,style:17,amount:0}
						],
						form_html1:'Замените HTML'
					},
					{
						link:'',extra_info1:' ',
						image1:'',image1_1:'',image1_2:'',image1_3:'',
						alt1:'',alt1_1:'',alt1_2:'',alt1_3:'',
						title1:'<strong><span style="font-size:64px;">0%</span></strong>',
						txt1:'Случаев с претензиями и негативными отзывами от наших клиентов',
						price1:'',
						ico1:'fa-linux',
						mdico1:'svg-icon-online-shop-2',
						c_ico1:'022-filling-form.svg',
						btn1:{title:'Подробнее',color:'#000',surround:3,style:17},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#000',action:'thanks',url:'',surround:3,style:17,amount:0}
						],
						form_html1:'Замените HTML'
					}
				]
			}
		},
		{
			id:1600,
			default:1,
			position:12938,
			title:'1217. Flexible преимущества с иконками',
			description:'Гибкий и полностью настраиваемый блок',
			default_values:{
				flexblocks:[{type:"text",content:"<p>Очевидцы сообщают, что слышали грохот грядущих изменений</p>",style:{l:{top:"0",left:"10",width:"80",color:"#000",topUnit:"px",leftUnit:"%",fontSize:"48",fontFamily:"Montserrat",textAlign:"center",lineHeight:"1.1",widthUnit:"%",zIndex:3,opacity:"1",fontWeight:"600"},m:{left:"5",width:"90",fontSize:"42"},s:{width:"100",left:"0",fontSize:"32"},xs:{},xxs:{fontSize:"24",top:1}}},{type:"text",content:"<p>Для современного мира повышение уровня гражданского сознания предоставляет широкие возможности для поставленных обществом задач</p>",style:{l:{top:"130",left:"10",width:"80",color:"#000",topUnit:"px",leftUnit:"%",fontSize:"18",fontFamily:"Montserrat",textAlign:"center",lineHeight:"1.5",widthUnit:"%",zIndex:4,opacity:"1"},m:{top:104},s:{top:82,width:"100",left:"0"},xs:{top:151},xxs:{fontSize:"16",top:116}}},{type:"figure",style:{l:{top:"400",left:0,height:"230",width:"230",zIndex:8,backgroundColor:"white",topUnit:"px",leftUnit:"px",shadowColor:"#000",shadowOpacity:"0.15",shadowOfesetLeft:"7",shadowOfesetTop:"7",shadowBlur:"10",shadowSpread:""},m:{top:300,left:0,topUnit:"px",leftUnit:"px"},s:{left:"30"},xs:{top:295,left:0,topUnit:"px",leftUnit:"px"},xxs:{top:253,left:0,topUnit:"px",leftUnit:"px"}}},{type:"figure",style:{l:{top:"345",left:"330",height:"230",width:"230",zIndex:10,backgroundColor:"white",topUnit:"px",leftUnit:"px",shadowColor:"#000",shadowOpacity:"0.15",shadowOfesetLeft:"7",shadowOfesetTop:"7",shadowBlur:"10"},m:{top:300,left:"243",topUnit:"px",leftUnit:"px"},s:{left:"378"},xs:{top:570,left:193,topUnit:"px",leftUnit:"px"},xxs:{top:525,left:88,topUnit:"px",leftUnit:"px"}}},{type:"figure",style:{l:{top:"400",left:"600",height:"230",width:"230",zIndex:5,backgroundColor:"white",topUnit:"px",leftUnit:"px",shadowColor:"#000",shadowOpacity:"0.15",shadowOfesetLeft:"7",shadowOfesetTop:"7",shadowBlur:"10"},m:{top:"300",left:"487"},s:{top:"680",left:"30",topUnit:"px",leftUnit:"px"},xs:{top:840,left:0,topUnit:"px",leftUnit:"px"},xxs:{top:792,left:0,topUnit:"px",leftUnit:"px"}}},{type:"figure",style:{l:{top:"345",left:938,height:"230",width:"230",zIndex:6,backgroundColor:"white",topUnit:"px",leftUnit:"px",shadowColor:"#000",shadowOpacity:"0.15",shadowOfesetLeft:"7",shadowOfesetTop:"7",shadowBlur:"10"},m:{top:300,left:"730",topUnit:"px",leftUnit:"px"},s:{top:680,left:"378",topUnit:"px",leftUnit:"px"},xs:{top:1105,left:193,topUnit:"px",leftUnit:"px"},xxs:{top:1068,left:88,topUnit:"px",leftUnit:"px"}}},{type:"figure",style:{l:{top:"300",left:"30",height:"230",width:"230",zIndex:7,backgroundColor:"#ABC4A1",topUnit:"px",leftUnit:"px"},m:{top:200,left:0,topUnit:"px",leftUnit:"px"},s:{left:"60"},xs:{top:295,left:193,topUnit:"px",leftUnit:"px"},xxs:{top:253,left:88,topUnit:"px",leftUnit:"px"}}},{type:"figure",style:{l:{top:"245",left:"300",height:"230",width:"230",zIndex:9,backgroundColor:"#9DB4AB",topUnit:"px",leftUnit:"px"},m:{top:200,left:"243",topUnit:"px",leftUnit:"px"},s:{top:200,left:"348",topUnit:"px",leftUnit:"px"},xs:{top:570,left:0,topUnit:"px",leftUnit:"px"},xxs:{top:525,left:0,topUnit:"px",leftUnit:"px"}}},{type:"figure",style:{l:{top:"300",left:"630",height:"230",width:"230",zIndex:2,backgroundColor:"#8D9D90",topUnit:"px",leftUnit:"px"},m:{top:200,left:"487",topUnit:"px",leftUnit:"px"},s:{top:"580",left:"60",topUnit:"px",leftUnit:"px"},xs:{top:840,left:193,topUnit:"px",leftUnit:"px"},xxs:{top:792,left:88,topUnit:"px",leftUnit:"px"}}},{type:"figure",style:{l:{top:"245",left:"908",height:"230",width:"230",zIndex:1,backgroundColor:"#878E76",topUnit:"px",leftUnit:"px"},m:{top:200,left:"730",topUnit:"px",leftUnit:"px"},s:{top:580,left:"348",topUnit:"px",leftUnit:"px"},xs:{top:1105,left:0,topUnit:"px",leftUnit:"px"},xxs:{top:1068,left:0,topUnit:"px",leftUnit:"px"}}},{type:"mdicon",icon:"svg-icon-business-and-finance6",style:{l:{top:300,left:95,fontSize:64,color:"#ffffff",width:"100",height:"100",zIndex:11,topUnit:"px",leftUnit:"px"},m:{top:200,left:65.9062,topUnit:"px",leftUnit:"px"},s:{left:"125"},xs:{top:355,left:277.921875,topUnit:"px",leftUnit:"px"},xxs:{top:324,left:233,topUnit:"px",leftUnit:"px",width:"85",height:"85"}}},{type:"mdicon",icon:"svg-icon-combine",style:{l:{top:"245",left:369,fontSize:64,color:"#fff",width:"100",height:"100",zIndex:12,topUnit:"px",leftUnit:"px"},m:{top:200,left:312.719,topUnit:"px",leftUnit:"px"},s:{left:"413"},xs:{top:630,left:43.7031,topUnit:"px",leftUnit:"px"},xxs:{top:590,left:0,topUnit:"px",leftUnit:"px",width:"85",height:"85"}}},{type:"mdicon",icon:"svg-icon-type",style:{l:{top:300,left:693,fontSize:64,color:"#fff",width:"100",height:"100",zIndex:13,topUnit:"px",leftUnit:"px"},m:{top:200,left:"552",topUnit:"px",leftUnit:"px"},s:{top:"580",left:"125",topUnit:"px",leftUnit:"px"},xs:{top:897,left:277.921875,topUnit:"px",leftUnit:"px"},xxs:{width:"85",height:"85",top:857,left:233,topUnit:"px",leftUnit:"px"}}},{type:"mdicon",icon:"svg-icon-mail1",style:{l:{top:"245",left:978,fontSize:64,color:"#ffffff",width:"100",height:"100",zIndex:14,topUnit:"px",leftUnit:"px"},m:{top:200,left:794.156,topUnit:"px",leftUnit:"px"},s:{top:580,left:"413",topUnit:"px",leftUnit:"px"},xs:{top:1165,left:48.7031,topUnit:"px",leftUnit:"px"},xxs:{top:1133,left:0,topUnit:"px",leftUnit:"px",width:"85",height:"85"}}},{type:"text",content:"<p>Новая модель деятельности</p>",style:{l:{top:"450",left:"20",width:"190",color:"#000",topUnit:"px",leftUnit:"px",fontSize:"18",fontFamily:"Montserrat",textAlign:"center",lineHeight:"1.5",widthUnit:"px",zIndex:15,opacity:"1",fontWeight:"600"},m:{top:340,left:"20",topUnit:"px",leftUnit:"px"},s:{left:"50"},xs:{top:340,left:21,topUnit:"px",leftUnit:"px"},xxs:{top:284,left:19,topUnit:"px",leftUnit:"px"}}},{type:"text",content:"<p>Качество уровня современности</p>",style:{l:{top:"395",left:"350",width:"190",color:"#000",topUnit:"px",leftUnit:"px",fontSize:"18",fontFamily:"Montserrat",textAlign:"center",lineHeight:"1.5",widthUnit:"px",zIndex:16,opacity:"1",fontWeight:"600"},m:{top:"340",left:"263",topUnit:"px",leftUnit:"px"},s:{left:"398"},xs:{top:605,left:213.516,topUnit:"px",leftUnit:"px"},xxs:{top:557,left:106.875,topUnit:"px",leftUnit:"px"}}},{type:"text",content:"<p>Частотность запросов месяца</p>",style:{l:{top:"450",left:"620",width:"190",color:"#000",topUnit:"px",leftUnit:"px",fontSize:"18",fontFamily:"Montserrat",textAlign:"center",lineHeight:"1.5",widthUnit:"px",zIndex:17,opacity:"1",fontWeight:"600"},m:{top:"340",left:"507",topUnit:"px",leftUnit:"px"},s:{top:"720",left:"50",topUnit:"px",leftUnit:"px"},xs:{top:877,left:21,topUnit:"px",leftUnit:"px"},xxs:{top:822}}},{type:"text",content:"<p>Соответствующие почести</p>",style:{l:{top:"395",left:"958",width:"190",color:"#000",topUnit:"px",leftUnit:"px",fontSize:"18",fontFamily:"Montserrat",textAlign:"center",lineHeight:"1.5",widthUnit:"px",zIndex:18,opacity:"1",fontWeight:"600"},m:{top:"340",left:"750",topUnit:"px",leftUnit:"px"},s:{top:720,left:"398",topUnit:"px",leftUnit:"px"},xs:{top:1140,left:212.516,topUnit:"px",leftUnit:"px"},xxs:{top:1100,left:106.875,topUnit:"px",leftUnit:"px"}}},{type:"text",content:"<p>Преступность никогда не была такой неорганизованной</p>",style:{l:{top:"520",left:18,width:"190",color:"#333333",topUnit:"px",leftUnit:"px",fontSize:"16",fontFamily:"Montserrat",textAlign:"center",lineHeight:"1.5",widthUnit:"px",zIndex:19,opacity:"1"},m:{top:415,left:"20",topUnit:"px",leftUnit:"px"},s:{left:"50"},xs:{top:410,left:21,topUnit:"px",leftUnit:"px"},xxs:{top:356,left:19,topUnit:"px",leftUnit:"px"}}},{type:"text",content:"<p>Сознание наших соотечественников не замутнено</p>",style:{l:{top:"465",left:"350",width:"190",color:"#333333",topUnit:"px",leftUnit:"px",fontSize:"16",fontFamily:"Montserrat",textAlign:"center",lineHeight:"1.5",widthUnit:"px",zIndex:19,opacity:"1"},m:{top:415,left:"263",topUnit:"px",leftUnit:"px"},s:{left:"398"},xs:{top:675,left:213,topUnit:"px",leftUnit:"px"},xxs:{top:634,left:107.875,topUnit:"px",leftUnit:"px"}}},{type:"text",content:"<p>Парад бытовой техники оказался началом войны</p>",style:{l:{top:"520",left:"620",width:"190",color:"#333333",topUnit:"px",leftUnit:"px",fontSize:"16",fontFamily:"Montserrat",textAlign:"center",lineHeight:"1.5",widthUnit:"px",zIndex:19,opacity:"1"},m:{top:"415",left:"507",topUnit:"px",leftUnit:"px"},s:{top:"800",left:"50",topUnit:"px",leftUnit:"px"},xs:{top:950,left:21,topUnit:"px",leftUnit:"px"},xxs:{top:897}}},{type:"text",content:"<p>Выбранный инновационный путь попахивает безумием</p>",style:{l:{top:"465",left:"958",width:"190",color:"#333333",topUnit:"px",leftUnit:"px",fontSize:"16",fontFamily:"Montserrat",textAlign:"center",lineHeight:"1.5",widthUnit:"px",zIndex:19,opacity:"1"},m:{top:415,left:"750",topUnit:"px",leftUnit:"px"},s:{top:"800",left:"398",topUnit:"px",leftUnit:"px"},xs:{top:1214,left:212.516,topUnit:"px",leftUnit:"px"},xxs:{top:1174,left:106.875,topUnit:"px",leftUnit:"px"}}},{type:"btn",title:"СМОТРЕТЬ БОЛЬШЕ",style:{l:{backgroundColor:"#BBDB9B",borderRadius:"5",color:"#212121",fontFamily:"Montserrat",fontSize:"18",left:"450",top:"680",height:"60",zIndex:20,width:"270",topUnit:"px",leftUnit:"px",backgroundHoverColor:"#BBDB9B",opacity:"1",fontWeight:"500"},m:{left:"345",top:560,topUnit:"px",leftUnit:"px"},s:{top:950,left:"25",topUnit:"px",leftUnit:"%",widthUnit:"%",width:"50"},xs:{top:1370,left:"10",topUnit:"px",leftUnit:"%",width:"80"},xxs:{top:1351,left:-2,topUnit:"px",leftUnit:"px",width:"100"}},action:"2",nameTitle:"Имя",emailTitle:"E-mail",nameUse:"1",emailUse:"1",phoneUse:"1",commentUse:0,link:"",formTitle:"Заказать сейчас",formBtnText:"Заказать",phoneTitle:"Телефон",commentTitle:"",fileTitle:"",sendAction:"2",sendActionLink:"",sendActionPaymentAmount:"0",sendActionPaymentTitle:"",VKPixel:"",FBPixel:"",metricaEvent:""}],bg:"#f2f2f2",flexblock:{style:{l:{height:745},m:{height:625},s:{height:1010},xs:{height:1450},xxs:{height:1425}}}
			}
		},
		{
			id:1600,
			default:1,
			position:12939,
			title:'1218. Flexible всплывающие надписи',
			description:'Гибкий и полностью настраиваемый блок',
			default_values:{
				flexblocks:[{type:"image",lock:false, src:"edf085d2e07933fa818fc643f7381cd4.png", link:"", style:{l:{top:196, left:"0", height:"644", width:1170, zIndex:1, topUnit:"px", leftUnit:"px", widthUnit:"px", heightUnit:"px"}, m:{width:960, height:524, widthUnit:"px", heightUnit:"px", top:227, left:0, topUnit:"px", leftUnit:"px"}, s:{width:640, height:349, widthUnit:"px", heightUnit:"px", top:227, left:0, topUnit:"px", leftUnit:"px"}, xs:{width:425, top:322, left:-2, topUnit:"px", leftUnit:"px", height:234, widthUnit:"px", heightUnit:"px"}, xxs:{width:320, height:174, widthUnit:"px", heightUnit:"px", top:382, left:-2, topUnit:"px", leftUnit:"px"}}}, {type:"text", lock:false, content:"<p>JAMIS PORTAL A2</p>", style:{l:{top:0, left:0, width:"450", color:"#000", topUnit:"px", leftUnit:"px", fontSize:"42", fontFamily:"Audiowide", textAlign:"left", lineHeight:"1.5", widthUnit:"px", zIndex:2, opacity:"1", fontWeight:"600"}, m:{}, s:{fontSize:"36"}, xs:{width:"425", top:70}, xxs:{top:66, left:0, topUnit:"px", leftUnit:"px", width:320, widthUnit:"px", fontSize:"28"}}}, {type:"text", lock:false, content:'<p>Portal – это ответ Jamis на вызов современного трейлрайдинга и требования армии любителей этого вида катания. Это подвеска 3VO, работающая в подъемах с эффективностью хардтейла и превращающая скоростные и техничные участки синглтреков в интересную игру. </p>', style:{l:{top:75, left:0, width:665, color:"#000", topUnit:"px", leftUnit:"px", fontSize:"18", fontFamily:"Ubuntu", textAlign:"left", lineHeight:"1.5", widthUnit:"px", zIndex:3, opacity:"1", fontWeight:"300"}, m:{}, s:{fontSize:"17", top:75, left:0, topUnit:"px", leftUnit:"px", width:635, widthUnit:"px"}, xs:{top:145, left:0, topUnit:"px", leftUnit:"px", width:425, widthUnit:"px"}, xxs:{top:"130", left:"0", topUnit:"px", leftUnit:"px", width:"320", widthUnit:"px"}}}, {type:"hint", lock:false, style:{l:{top:389, left:970, height:"25", width:"25", backgroundColor:"#ffffff", zIndex:11, topUnit:"px", leftUnit:"px", borderRadius:"50", borderRadiusUnit:"%", borderColor:"#ffee05", borderWidth:"5", borderStyle:"solid", shadowColor:"#000", shadowOpacity:"0.2", shadowOfesetLeft:"0", shadowOfesetTop:"0", shadowBlur:"5", shadowSpread:"5", rotate:"0"}, m:{top:389, left:794.15625, topUnit:"px", leftUnit:"px"}, s:{top:329, left:529.390625, topUnit:"px", leftUnit:"px"}, xs:{top:387, left:349.328, topUnit:"px", leftUnit:"px"}, xxs:{top:427, left:260.625, topUnit:"px", leftUnit:"px", invisible:1}}, hintTitle:"Покрышки и обода", hintText:'Покрышки Vittoria Mazza 29 x 2.4, обода Stan’s No Tubes Flow D 29" rims'}, {type:"image", lock:false, src:"3c05760309e3081d475d00ff02ff6e16.png", link:"", style:{l:{top:0, left:985, height:"36", width:"183", zIndex:4, topUnit:"px", leftUnit:"px", widthUnit:"px", heightUnit:"px"}, m:{left:775}, s:{top:0, left:455, topUnit:"px", leftUnit:"px"}, xs:{top:0, left:0, topUnit:"px", leftUnit:"px"}, xxs:{}}}, {type:"hint", lock:false, style:{l:{top:568, left:181, height:"25", width:"25", backgroundColor:"#ffffff", zIndex:5, topUnit:"px", leftUnit:"px", borderRadius:"50", borderRadiusUnit:"%", borderColor:"#ffee05", borderWidth:"5", borderStyle:"solid", shadowColor:"#000", shadowOpacity:"0.2", shadowOfesetLeft:"0", shadowOfesetTop:"0", shadowBlur:"5", shadowSpread:"5", rotate:"0"}, m:{top:529, left:147.906, topUnit:"px", leftUnit:"px"}, s:{top:414, left:115.53125, topUnit:"px", leftUnit:"px"}, xs:{top:452, left:51.7031, topUnit:"px", leftUnit:"px"}, xxs:{top:475, left:34.625, topUnit:"px", leftUnit:"px", invisible:1}}, hintTitle:"Кассета", hintText:"Shimano M6100, 12-speed, 10-51T"}, {type:"hint", lock:false, style:{l:{top:720, left:205, height:"25", width:"25", backgroundColor:"#ffffff", zIndex:6, topUnit:"px", leftUnit:"px", borderRadius:"50", borderRadiusUnit:"%", borderColor:"#ffee05", borderWidth:"5", borderStyle:"solid", shadowColor:"#000", shadowOpacity:"0.2", shadowOfesetLeft:"0", shadowOfesetTop:"0", shadowBlur:"5", shadowSpread:"5", rotate:"0"}, m:{top:651, left:166.812, topUnit:"px", leftUnit:"px"}, s:{top:495, left:113.531, topUnit:"px", leftUnit:"px"}, xs:{top:495, left:67.40625, topUnit:"px", leftUnit:"px"}, xxs:{top:515, left:43.625, topUnit:"px", leftUnit:"px", invisible:1}}, hintTitle:"Задний переключатель", hintText:"Shimano Deore, 12-speed"}, {type:"hint", lock:false, style:{l:{top:499, left:514, height:"25", width:"25", backgroundColor:"#ffffff", zIndex:7, topUnit:"px", leftUnit:"px", borderRadius:"50", borderRadiusUnit:"%", borderColor:"#ffee05", borderWidth:"5", borderStyle:"solid", shadowColor:"#000", shadowOpacity:"0.2", shadowOfesetLeft:"0", shadowOfesetTop:"0", shadowBlur:"5", shadowSpread:"5", rotate:"0"}, m:{top:475, left:419.531, topUnit:"px", leftUnit:"px"}, s:{top:401, left:277.328, topUnit:"px", leftUnit:"px"}, xs:{top:426, left:167.8125, topUnit:"px", leftUnit:"px"}, xxs:{top:456, left:126.5, topUnit:"px", leftUnit:"px", invisible:1}}, hintTitle:"Задний амортизатор", hintText:"Fox Float DPS Performance Series EVOL shock"}, {type:"hint", lock:false, style:{l:{top:375, left:812, height:"25", width:"25", backgroundColor:"#ffffff", zIndex:8, topUnit:"px", leftUnit:"px", borderRadius:"50", borderRadiusUnit:"%", borderColor:"#ffee05", borderWidth:"5", borderStyle:"solid", shadowColor:"#000", shadowOpacity:"0.2", shadowOfesetLeft:"0", shadowOfesetTop:"0", shadowBlur:"5", shadowSpread:"5", rotate:"0"}, m:{top:361, left:660.25, topUnit:"px", leftUnit:"px"}, s:{top:304, left:435.125, topUnit:"px", leftUnit:"px"}, xs:{top:374, left:286.922, topUnit:"px", leftUnit:"px"}, xxs:{top:415, left:210.375, topUnit:"px", leftUnit:"px", invisible:1}}, hintTitle:"Передняя вилка", hintText:'Fox 34 Rhythm Series Float 29" w/ sweep adjust compression & lock-out, ось - 15x110 мм, воздушная пружина, регулировка отскока, ход - 130 мм'}, {type:"hint", lock:false, style:{l:{top:339, left:600, height:"25", width:"25", backgroundColor:"#ffffff", zIndex:9, topUnit:"px", leftUnit:"px", borderRadius:"50", borderRadiusUnit:"%", borderColor:"#ffee05", borderWidth:"5", borderStyle:"solid", shadowColor:"#000", shadowOpacity:"0.2", shadowOfesetLeft:"0", shadowOfesetTop:"0", shadowBlur:"5", shadowSpread:"5", rotate:"0"}, m:{top:342, left:495.438, topUnit:"px", leftUnit:"px"}, s:{top:292, left:336.59375, topUnit:"px", leftUnit:"px"}, xs:{top:373, left:203.516, topUnit:"px", leftUnit:"px"}, xxs:{top:413, left:154.125, topUnit:"px", leftUnit:"px", invisible:1}}, hintTitle:"Рама", hintText:"Алюминий 6061 с тройным баттингом, ход подвески - 130 мм. Система задней подвески 3VO SUSPENSION. Задний амортизатор Rock Shox DELUX R De BonAir shok. Линки рамы на промышленных подшипниках ENDURO MAX. Конусный рулевой стакан, дропауты под ось 12х148 мм. Внутренняя проводка. Сменный держатель заднего переключателя."}, {type:"hint", lock:false, style:{l:{top:589, left:870, height:"25", width:"25", backgroundColor:"#ffffff", zIndex:10, topUnit:"px", leftUnit:"px", borderRadius:"50", borderRadiusUnit:"%", borderColor:"#ffee05", borderWidth:"5", borderStyle:"solid", shadowColor:"#000", shadowOpacity:"0.2", shadowOfesetLeft:"0", shadowOfesetTop:"0", shadowBlur:"5", shadowSpread:"5", rotate:"0"}, m:{left:710, top:540}, s:{top:436, left:471.125, topUnit:"px", leftUnit:"px"}, xs:{top:456, left:310.625, topUnit:"px", leftUnit:"px"}, xxs:{top:480, left:226, topUnit:"px", leftUnit:"px", invisible:1}}, hintTitle:"Тормозная система", hintText:"Shimano MT420 4-поршня, гидравлический, ротор - 180 мм"} ], hide_in_mobile:0, hide_in_desktop:0, opacity_color1:"#e2ebf0", opacity_color2:"#cfd9df", bg_opacity:0.5, move_to:"bottom", gradient_position:0, fixed:0, back_dark:1, bg:"#f2f2f2", flexblock:{style:{l:{height:844}, m:{height:755}, s:{height:579}, xs:{height:558}, xxs:{height:561}}}
			}
		},
		{
			id:1600,
			default:1,
			position:12940,
			title:'1219. Flexible всплывающие надписи',
			description:'Гибкий и полностью настраиваемый блок',
			default_values:{
				flexblocks:[{type:"image",src:"583524aeb02e9f6afa605a0bea2a7e86.jpg",link:"",style:{l:{top:"0",left:0,height:740,width:"1170",topUnit:"px",leftUnit:"px",widthUnit:"px",heightUnit:"px"},m:{width:"960"},s:{width:640,height:515,widthUnit:"px",heightUnit:"px",top:0,left:0,topUnit:"px",leftUnit:"px"},xs:{width:425,height:345,widthUnit:"px",heightUnit:"px",top:0,left:0,topUnit:"px",leftUnit:"px"},xxs:{width:320,height:265,widthUnit:"px",heightUnit:"px",top:0,left:0,topUnit:"px",leftUnit:"px"}}},{type:"hint",lock:false,style:{l:{top:200,left:543,height:"40",width:"40",backgroundColor:"#3dbf2b",zIndex:10,topUnit:"px",leftUnit:"px",borderRadius:"50",borderRadiusUnit:"%",borderColor:"#dedede",borderWidth:"5",borderStyle:"solid",shadowColor:"#000",shadowOpacity:"0.2",shadowOfesetLeft:"0",shadowOfesetTop:"0",shadowBlur:"5",shadowSpread:"5"},m:{top:200,left:438,topUnit:"px",leftUnit:"px"},s:{top:135,left:288,topUnit:"px",leftUnit:"px"},xs:{top:75,left:183,topUnit:"px",leftUnit:"px"},xxs:{top:10,left:353,topUnit:"px",leftUnit:"px",invisible:1}},hintTitle:"Светодиодные светильники",hintText:"Наша команда занимается монтажом электропроводки и светильников любой сложности"},{type:"hint",lock:false,style:{l:{top:295,left:188,height:"40",width:"40",backgroundColor:"#3dbf2b",zIndex:10,topUnit:"px",leftUnit:"px",borderRadius:"50",borderRadiusUnit:"%",borderColor:"#dedede",borderWidth:"5",borderStyle:"solid",shadowColor:"#000",shadowOpacity:"0.2",shadowOfesetLeft:"0",shadowOfesetTop:"0",shadowBlur:"5",shadowSpread:"5"},m:{top:300,left:83,topUnit:"px",leftUnit:"px"},s:{top:200,left:38,topUnit:"px",leftUnit:"px"},xs:{top:170,left:118,topUnit:"px",leftUnit:"px"},xxs:{top:94,left:353,topUnit:"px",leftUnit:"px",invisible:1}},hintTitle:"Встраиваемая техника",hintText:"Встраиваемая техника любых габаритов и разного назначения"},{type:"hint",lock:false,style:{l:{top:350,left:633,height:"40",width:"40",backgroundColor:"#3dbf2b",zIndex:10,topUnit:"px",leftUnit:"px",borderRadius:"50",borderRadiusUnit:"%",borderColor:"#dedede",borderWidth:"5",borderStyle:"solid",shadowColor:"#000",shadowOpacity:"0.2",shadowOfesetLeft:"0",shadowOfesetTop:"0",shadowBlur:"5",shadowSpread:"5"},m:{top:340,left:518,topUnit:"px",leftUnit:"px"},s:{top:235,left:348,topUnit:"px",leftUnit:"px"},xs:{top:145,left:213,topUnit:"px",leftUnit:"px"},xxs:{top:52,left:353,topUnit:"px",leftUnit:"px",invisible:1}},hintTitle:"Декор помещений",hintText:"Украсьте ваше помещение декоративными предметами с целью придания особого уюта и атмосферы"},{type:"hint",lock:false,style:{l:{top:515,left:708,height:"40",width:"40",backgroundColor:"#3dbf2b",zIndex:10,topUnit:"px",leftUnit:"px",borderRadius:"50",borderRadiusUnit:"%",borderColor:"#dedede",borderWidth:"5",borderStyle:"solid",shadowColor:"#000",shadowOpacity:"0.2",shadowOfesetLeft:"0",shadowOfesetTop:"0",shadowBlur:"5",shadowSpread:"5"},m:{top:505,left:593,topUnit:"px",leftUnit:"px"},s:{top:365,left:388,topUnit:"px",leftUnit:"px"},xs:{top:245,left:258,topUnit:"px",leftUnit:"px"},xxs:{top:178,left:353,topUnit:"px",leftUnit:"px",invisible:1}},hintTitle:"Мебель",hintText:"Мебель на кухне может быть не только удобной,но и стильной"},{type:"hint",lock:false,style:{l:{top:495,left:253,height:"40",width:"40",backgroundColor:"#3dbf2b",zIndex:10,topUnit:"px",leftUnit:"px",borderRadius:"50",borderRadiusUnit:"%",borderColor:"#dedede",borderWidth:"5",borderStyle:"solid",shadowColor:"#000",shadowOpacity:"0.2",shadowOfesetLeft:"0",shadowOfesetTop:"0",shadowBlur:"5",shadowSpread:"5"},m:{top:520,left:153,topUnit:"px",leftUnit:"px"},s:{top:370,left:83,topUnit:"px",leftUnit:"px"},xs:{top:240,left:48,topUnit:"px",leftUnit:"px"},xxs:{top:136,left:353,topUnit:"px",leftUnit:"px",invisible:1}},hintTitle:"Гранитная столешница",hintText:"Гранитная столешница для кухни - выбор жителей крупных городов и мегаполисов"}],bg:"#f2f2f2",flexblock:{style:{l:{height:741},s:{height:517},xs:{height:348},xxs:{height:267}}}
			}
		},
		{
			id:1600,
			default:1,
			position:12941,
			title:'1220. Текст, иконки и изображение',
			description:'Гибкий и полностью настраиваемый блок',
			default_values:{
				flexblocks:[{type:"text",content:"<p>Вулканический архипелаг в центральной части Тихого океана</p>",style:{l:{top:0,left:0,width:445,color:"#000",topUnit:"px",leftUnit:"px",fontSize:"36",fontFamily:"Montserrat,sans-serif",textAlign:"left",lineHeight:"1.35",widthUnit:"px",zIndex:3,opacity:"1",fontWeight:"900"},m:{},s:{top:20,left:"20",topUnit:"px",leftUnit:"px",width:"600",widthUnit:"px"},xs:{top:20,left:20,topUnit:"px",leftUnit:"px",width:"385",widthUnit:"px",fontSize:"28"},xxs:{top:20,left:20,topUnit:"px",leftUnit:"px",width:280,widthUnit:"px",fontSize:"20"}}},{type:"text",content:"<p>Его острова известны своими скалистыми берегами, водопадами, тропическими лесами и пляжами с золотым, красным, черным и даже зеленым песком. Из шести основных островов Оаху – наиболее населенный. Именно здесь находится самый крупный город и столица штата – Гонолулу. В Оаху расположен пляж Вайкики в форме полумесяца и мемориал Перл-Харбор, посвященный Второй мировой войне</p>",style:{l:{top:0,left:500,width:460,color:"#000",topUnit:"px",leftUnit:"px",fontSize:"16",fontFamily:"Montserrat,sans-serif",textAlign:"left",lineHeight:"1.5",widthUnit:"px",zIndex:4,opacity:"1",fontWeight:"400"},m:{top:0,left:500,topUnit:"px",leftUnit:"px",width:415,widthUnit:"px"},s:{top:186,left:"20",topUnit:"px",leftUnit:"px",width:"600",widthUnit:"px"},xs:{top:186,left:20,topUnit:"px",leftUnit:"px",width:385,widthUnit:"px"},xxs:{top:144,left:20,topUnit:"px",leftUnit:"px",width:280,widthUnit:"px"}}},{type:"image",src:"f3f4088099db756f4dae414586da83b4.jpg",link:"",style:{l:{top:236,left:500,height:545,width:"770",zIndex:8,topUnit:"px",leftUnit:"px",widthUnit:"px",heightUnit:"px",borderRadius:"15"},m:{width:570,height:495,widthUnit:"px",heightUnit:"px",top:251,left:497.4375,topUnit:"px",leftUnit:"px"},s:{top:820,left:"0",topUnit:"px",leftUnit:"px",width:"640",height:355,widthUnit:"px",heightUnit:"px"},xs:{top:920,left:0,topUnit:"px",leftUnit:"px",width:425,height:355,widthUnit:"px",heightUnit:"px"},xxs:{top:1034,left:"0",topUnit:"px",leftUnit:"px",width:"320",height:"320"}}},{type:"figure",style:{l:{top:-80,left:-397,height:770,width:1565,zIndex:2,backgroundColor:"#f0f0f0",topUnit:"px",leftUnit:"px",widthUnit:"px",heightUnit:"px"},m:{width:1355,height:770,widthUnit:"px",heightUnit:"px",top:-80,left:-397,topUnit:"px",leftUnit:"px"},s:{top:0,left:0,topUnit:"px",leftUnit:"px",invisible:0,width:640,height:1040,widthUnit:"px",heightUnit:"px"},xs:{width:425,height:1040,widthUnit:"px",heightUnit:"px",top:0,left:0,topUnit:"px",leftUnit:"px"},xxs:{width:320,height:1040,widthUnit:"px",heightUnit:"px",top:0,left:0,topUnit:"px",leftUnit:"px"}}},{type:"mdicon",icon:"svg-icon-hysics",style:{l:{top:"250",left:"0",fontSize:"52",color:"#696969",width:"100",height:"100",zIndex:9,topUnit:"px",leftUnit:"px",widthUnit:"px",heightUnit:"px",borderColor:"#bcbcbc",borderWidth:"2",borderStyle:"solid",backgroundColor:"transparet",opacity:"1",borderRadius:"15",invisible:0},m:{},s:{top:387,left:19},xs:{top:467},xxs:{top:537,width:"80",height:"80"}}},{type:"mdicon",icon:"svg-icon-heart-with-a-little-bow",style:{l:{top:"390",left:0,fontSize:"50",color:"#696969",width:"100",height:"100",zIndex:10,topUnit:"px",leftUnit:"px",widthUnit:"px",heightUnit:"px",borderColor:"#bcbcbc",borderWidth:"2",borderStyle:"solid",borderRadius:"15",invisible:0},m:{},s:{top:527,left:19},xs:{top:617},xxs:{top:697,width:"80",height:"80"}}},{type:"mdicon",icon:"svg-icon-heart-flower",style:{l:{top:"530",left:0,fontSize:"52",color:"#696969",width:"100",height:"100",zIndex:11,topUnit:"px",leftUnit:"px",widthUnit:"px",heightUnit:"px",borderColor:"#bcbcbc",borderWidth:"2",borderStyle:"solid",borderRadius:"15",invisible:0},m:{},s:{top:667,left:19},xs:{top:767},xxs:{top:877,width:"80",height:"80"}}},{type:"text",content:"<p>Мауи</p>",style:{l:{top:250,left:"130",width:"300",color:"#000",topUnit:"px",leftUnit:"px",fontSize:"20",fontFamily:"Montserrat,sans-serif",textAlign:"left",lineHeight:"1.35",widthUnit:"px",zIndex:12,opacity:"1",fontWeight:"600"},m:{},s:{top:387,left:149},xs:{top:467,left:149,topUnit:"px",leftUnit:"px",width:260,widthUnit:"px"},xxs:{top:537,left:120,topUnit:"px",leftUnit:"px",width:185,widthUnit:"px"}}},{type:"text",content:"<p>Гонолулу</p>",style:{l:{top:389,left:"130",width:"300",color:"#000",topUnit:"px",leftUnit:"px",fontSize:"20",fontFamily:"Montserrat,sans-serif",textAlign:"left",lineHeight:"1.35",widthUnit:"px",zIndex:13,opacity:"1",fontWeight:"600"},m:{},s:{top:526,left:149},xs:{top:616,left:149,topUnit:"px",leftUnit:"px",width:260,widthUnit:"px"},xxs:{top:696,left:120,topUnit:"px",leftUnit:"px",width:185,widthUnit:"px"}}},{type:"text",content:"<p>Кауаи</p>",style:{l:{top:529,left:"130",width:"300",color:"#000",topUnit:"px",leftUnit:"px",fontSize:"20",fontFamily:"Montserrat,sans-serif",textAlign:"left",lineHeight:"1.35",widthUnit:"px",zIndex:14,opacity:"1",fontWeight:"600"},m:{},s:{top:666,left:149},xs:{top:766,left:149,topUnit:"px",leftUnit:"px",width:260,widthUnit:"px"},xxs:{top:876,left:120,topUnit:"px",leftUnit:"px",width:185,widthUnit:"px"}}},{type:"text",content:"<p>Остров Гавайского архипелага в центральной части Тихого океана</p>",style:{l:{top:286,left:130,width:300,color:"#000",topUnit:"px",leftUnit:"px",fontSize:"16",fontFamily:"Montserrat,sans-serif",textAlign:"left",lineHeight:"1.5",widthUnit:"px",zIndex:5,opacity:"1",fontWeight:"400",invisible:0},m:{},s:{top:423,left:149},xs:{top:503,left:149,topUnit:"px",leftUnit:"px",width:260,widthUnit:"px"},xxs:{top:573,left:120,topUnit:"px",leftUnit:"px",width:185,widthUnit:"px"}}},{type:"text",content:"<p>Столица американского штата Гавайи, построенная на южном побережье острова Оаху</p>",style:{l:{top:425,left:130,width:300,color:"#000",topUnit:"px",leftUnit:"px",fontSize:"16",fontFamily:"Montserrat,sans-serif",textAlign:"left",lineHeight:"1.5",widthUnit:"px",zIndex:6,opacity:"1",fontWeight:"400",invisible:0},m:{},s:{top:562,left:149,topUnit:"px",leftUnit:"px",width:435,widthUnit:"px"},xs:{top:652,left:149,topUnit:"px",leftUnit:"px",width:260,widthUnit:"px"},xxs:{top:732,left:120,topUnit:"px",leftUnit:"px",width:185,widthUnit:"px"}}},{type:"text",content:"<p>Один из Гавайских островов, архипелага в центральной части Тихого океана</p>",style:{l:{top:566,left:130,width:300,color:"#000",topUnit:"px",leftUnit:"px",fontSize:"16",fontFamily:"Montserrat,sans-serif",textAlign:"left",lineHeight:"1.5",widthUnit:"px",zIndex:7,opacity:"1",fontWeight:"400",invisible:0},m:{},s:{top:703,left:149,topUnit:"px",leftUnit:"px",width:365,widthUnit:"px"},xs:{top:803,left:149,topUnit:"px",leftUnit:"px",width:260,widthUnit:"px"},xxs:{top:913,left:120,topUnit:"px",leftUnit:"px",width:185,widthUnit:"px"}}}],flexblock:{style:{l:{height:785},s:{height:1177},xs:{height:1276},xxs:{height:1356}}}
			}
		}
	],
	group:[125, 130, 414, 152, 121, 1002, 1155],
	deleted:[51, 18, 52, 21, 23, 22, 20, 30, 31, 61, 200, 201, 152, 121, 314],
	widget:0
},
{
	name:'Этапы',
	icon:'fa fa-list',
	icon_new:'stages.svg',
	blocks:[
		{
			id:1419,
			default:1,
			position:15990,
			title:'1200. Этапы работ',
			description:'Можно добавить новые шаги, изменить цвет иконок, изменить их стиль или заменить на фото',
			default_values:{}
		},
		{
			id:1419,
			default:1,
			position:15991,
			title:'1201. Этапы работ',
			description:'Можно добавить новые шаги, изменить цвет иконок, изменить их стиль или заменить на фото',
			default_values:{
				bg:'#fff',
				icon_colors:'#1BBBF1',
				mode:'s120'
			}
		},
		{
			id:1417,
			default:1,
			position:15998,
			title:'1202. Этапы работ',
			description:'Можно добавить новые шаги, изменить цвет иконок и изменить их стиль',
			default_values:{}
		},
		{
			id:417,
			default:1,
			position:15999,
			title:'1203. Этапы работ',
			description:'Можно добавить новые шаги, изменить цвет иконок и изменить их стиль',
			default_values:{}
		},
		{
			id:418,
			default:1,
			position:15997,
			title:'1204. Этапы работ',
			description:'Можно добавить новые шаги, изменить цвет иконок и размер фото',
			default_values:{}
		},
		{
			id:419,
			default:1,
			position:15998,
			title:'1205. Пункты',
			description:'Есть возможность добавления/удаления пунктов, изменение цвета иконок',
			default_values:{}
		},
		{
			id:418,
			default:1,
			position:15995,
			title:'1206. Этапы работ',
			description:'Можно добавить новые шаги, изменить цвет иконок и размер фото',
			default_values:{
				show_title:0,
				show_sub_title:0,
				show_title_e:1,
				show_sub_title_e:1,
				image1:'sec418_2_img2.jpg',
				image_size:'960x750',
				color:'#ed7a00',
				arr1:[
					{
						title1:'<b><span style="font-size:26px;">Задачи и цели</span></b>',
						txt1:'<span style="font-size:18px">Перед началом любого дела нужно составить список задач, которые вы хотите решить в процессе, то есть техническое задание, где вы должны постараться учесть все свои пожелания.</span>'
					},
					{
						title1:'<b><span style="font-size:26px;">Планировка</span></b>',
						txt1:'<span style="font-size:18px">На планировке будут отражены все функциональные зоны и по возможности расстановка мебели, это понадобится вам в дальнейшем для проектирования электрической и слаботочной схем.</span>'
					},
					{
						title1:'<b><span style="font-size:26px;">Электрика, отопление и водоснабжение</span></b>',
						txt1:'<span style="font-size:18px">Электрические провода пролегают в полу и поднимаются до уровня розеток, а провода на освещение прокладываем от потолка вниз, к выключателям.</span>'
					}
				]
			}
		},
		{
			id:418,
			default:1,
			position:15994,
			title:'1207. Этапы работ',
			description:'Можно добавить новые шаги, изменить цвет иконок и размер фото',
			default_values:{
				bg:'',
				width1170:1,
				show_title:0,
				show_sub_title:0,
				show_title_e:1,
				show_sub_title_e:1,
				title_e:'<b>Новый закон накладывает вето на глас грядущего поколения</b>',
				sub_title_e:'Господа, героям были возданы соответствующие почести',
				image1:'sec418_3_img.jpg',
				image_size:'400x400',
				color:'#ed7a00',
				arr1:[
					{
						title1:'Постоянный количественный рост не стал ограничивающим фактором',
						txt1:'Только солнечных дней всё меньше'
					},
					{
						title1:'Коронованный герцог графства не позволил союзу развалиться',
						txt1:'Чистый разум не скован границами'
					},
					{
						title1:'Цена вопроса не важна, когда цены на бензин начинают падать',
						txt1:'Сложившаяся структура организации стала доступной ширнармассам'
					}
				] 
			}
		}
	],
	group:[417, 1417, 418],
	deleted:[317],
	widget:0
},
{
	name:'Отзывы',
	icon:'fa fa-comments-o',
	icon_new:'reviews.svg',
	blocks:[
		{
			id:320,
			default:1,
			position:10080,
			title:'1300. Слайдер с отзывами',
			description:'Есть возможность включить подложку, добавить обводку и тень изображения, отключить скругление',
			default_values:{}
		},
		{
			id:320,
			default:1,
			position:10085,
			title:'1301. Слайдер с отзывами',
			description:'Есть возможность включить подложку, добавить обводку и тень изображения, отключить скругление',
			default_values:{
				bg:'#f2f2f2',
				bg_text:1
			}
		},
		{
			id:307,
			default:0,
			position:10090,
			title:'1302. Отзывы с большими изображениями',
			description:'Есть возможность загружать собственные фото',
			default_values:{
				show_btn:0,
				title:'<b>Отзывы наших клиентов</b>',
				sub_title:'Что клиенты говорят о нас',
				col_title_1:'Большое спасибо! Все что указано в договоре, было выполнено в срок, поэтому могу поставить вашей компании "отлично" и советовать другим обращаться только к вам.',
				col_title_2:'Все что указано в договоре, было выполнено в срок, поэтому могу поставить вашей компании "отлично" и советовать другим обращаться только к вам. Большое спасибо!',
				col_title_3:'Большое спасибо! Все что указано в договоре, было выполнено в срок, поэтому могу поставить вашей компании "отлично" и советовать другим обращаться только к вам.',
				image1:'sec307_10090_1.jpg',
				image2:'sec307_10090_2.jpg',
				image3:'sec307_10090_3.jpg',
				arr1:[{item_title:'<span style="font-size:18px">Наталья, г. Челябинск</span>'}],
				arr2:[{item_title:'<span style="font-size:18px">Светлана, г. Томск</span>'}],
				arr3:[{item_title:'<span style="font-size:18px">Александр, г. Екатеринбург</span>'}]
			}
		},
		{
			id:118,
			default:1,
			position:10100,
			title:'1303. Слайдер с отзывами с 3-мя плашками',
			description:'Есть возможность загружать собственные фото',
			default_values:{
				like_slider:1,
				auto_slide:1
			}
		},
		{
			id:130,
			default:0,
			position:10201,
			title:'1304. 3 отзыва в ряд с изображениями ',
			description:'Можно изменить размер изображений, добавить тень, обводку, отключить скругление',
			default_values:{
				title:'<b>Почему выбирают именно нас</b>',
				sub_title:'Что говорят о нас наши покупатели',
				show_price:0,
				bg_col_opacity:0,
				border_radius:1,
				show_btns:0,
				title_fweight:500,
				arr1:[
					{
						link:'',
						extra_info1:' ',
						image1:'sec130_10201_1.jpg',image1_1:'sec130_10201_1.jpg',image1_2:'sec130_10201_1.jpg',image1_3:'sec130_10201_1.jpg',
						alt1:'',alt1_1:'',alt1_2:'',alt1_3:'',
						title1:'Волкова Ника',
						txt1:'Все что указано в договоре, было выполнено в срок, поэтому могу поставить вашей компании "отлично" и советовать другим обращаться только к вам.',
						price1:'2000 руб.',
						ico1:'fa-linux',
						c_ico1:'cruise.png',
						btn1:{title:'Подробнее',color:'#000',surround:3,style:1},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#000',action:'thanks',url:'',surround:3,style:1,amount:0}
						],
						form_html1:'Замените HTML'
					},
					{
						link:'',
						extra_info1:' ',
						image1:'sec130_10201_2.jpg',image1_1:'sec130_10201_2.jpg',image1_2:'sec130_10201_2.jpg',image1_3:'sec130_10201_2.jpg',
						alt1:'',alt1_1:'',alt1_2:'',alt1_3:'',
						title1:'Куликов Леонид',
						txt1:'Все что указано в договоре, было выполнено в срок, поэтому могу поставить вашей компании "отлично" и советовать другим обращаться только к вам.',
						price1:'2000 руб.',
						ico1:'fa-linux',
						c_ico1:'plane.png',
						btn1:{title:'Подробнее',color:'#000',surround:3,style:1},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#000',action:'thanks',url:'',surround:3,style:1,amount:0}
						],
						form_html1:'Замените HTML'
					},
					{
						link:'',
						extra_info1:' ',
						image1:'sec130_10201_3.jpg',image1_1:'sec130_10201_3.jpg',image1_2:'sec130_10201_3.jpg',image1_3:'sec130_10201_3.jpg',
						alt1:'',alt1_1:'',alt1_2:'',alt1_3:'',
						title1:'Константинова Алёна',
						txt1:'Все что указано в договоре, было выполнено в срок, поэтому могу поставить вашей компании "отлично" и советовать другим обращаться только к вам.',
						price1:'2000 руб.',
						ico1:'fa-linux',
						c_ico1:'rocket.png',
						btn1:{title:'Подробнее',color:'#000',surround:3,style:1},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#000',action:'thanks',url:'',surround:3,style:1,amount:0}
						],
						form_html1:'Замените HTML'
					}
				]
			}
		},
		{
			id:125,
			default:0,
			position:10300,
			title:'1305. Плитка из 4-х отзывов',
			description:'Можно изменить размер изображений, добавить тень, обводку, отключить скругление',
			default_values:{
				bg:'#f2f2f2',
				title:'<b>Отзывы наших посетителей</b>',
				sub_title:'100% клиентов довольны нашей работой',
				bg_text:1,
				arr1:[
					{
						image1:'sec125_10300_1.jpg',
						image2:'sec125_10300_2.jpg',
						alt1:'',alt2:'',
						title1:'Жданова Мария',
						title2:'Попова Анастасия',
						txt1:'<p><span style="color:#DAA520">★★★★☆</span><br></p><br>Интересное место, очень атмосферное, приветливые официанты, красивые и необычные десерты. Официант Дарья подобрала для нас десерты, учитывая наши предпочтения. Рекомендовано для посещения.',
						txt2:'<p><span style="color:#DAA520">★★★★★</span><br></p><br>Большой выбор завтраков! Великолепные десерты, без сахара - это прекрасно. Были семьей из 5 человек и всем все понравилось. Обслуживание ненавязчивое и легкое, есть детская комната.',
						price1:'',
						price2:'',
						ico1:'fa-black-tie',
						ico2:'fa-black-tie',
						c_ico1:'video.png',
						c_ico2:'umbrella.png',
						mdico1:'md-color-lens',
						mdico2:'md-donut-small',
						btn1:{title:'Заказать',color:'#000',style:5},
						btn2:{title:'Заказать',color:'#000',style:5},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:''},
							{type:'btn',title:'Отправить',color:'#000',action:'thanks',url:'',style:5,amount:0}
						],
						form2:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:''},
							{type:'btn',title:'Отправить',color:'#000',action:'thanks',url:'',style:5,amount:0}
						],
						form_html1:'Замените HTML',
						form_html2:'Замените HTML'
					},
					{
						image1:'sec125_10300_3.jpg',
						image2:'sec125_10300_4.jpg',
						alt1:'',alt2:'',
						title1:'Орлова Ксения',
						title2:'Баженова Ева',
						txt1:'<p><span style="color:#DAA520">★★★★★</span><br></p><br>Заходили с семьей в ваше заведение несколько дней назад по совету друзей. Мы были очень приятно удивлены. На входе нас встретил приятный молодой человек, предложил повесить верхнюю одежду в гардероб, проводил до столика.',
						txt2:'<p><span style="color:#DAA520">★★★★☆</span><br></p><br>Мы съели авокадо тост, бао с креветками, лапшу с креветками, салат с индейкой и том ям. Все было очень вкусно! На десерт по совету официанта мы заказали маракуйу, персик и малиновый чизкейк, пальчики оближешь! Уходя домой, взяли ещё с собой десерты.',
						price1:'',
						price2:'',
						ico1:'fa-black-tie',
						ico2:'fa-black-tie',
						c_ico1:'video.png',
						c_ico2:'umbrella.png',
						mdico1:'md-color-lens',
						mdico2:'md-donut-small',
						btn1:{title:'Заказать',color:'#000',style:5},
						btn2:{title:'Заказать',color:'#000',style:5},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:''},
							{type:'btn',title:'Отправить',color:'#000',action:'thanks',url:'',style:5,amount:0}
						],
						form2:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:''},
							{type:'btn',title:'Отправить',color:'#000',action:'thanks',url:'',style:5,amount:0}
						],
						form_html1:'Замените HTML',
						form_html2:'Замените HTML'
					}
				]
			}
		},
		{
			id:117,
			default:0,
			position:10400,
			title:'1306. Плитка отзывов с чередующимися фото',
			description:'Есть возможность загружать собственные фото и изменения текста',
			default_values:{
				show_title:1,
				show_sub_title:1,
				padd_top:'80',
				padd_bottom:'80',
				title:'<b>Отзывы мастерской</b>',
				sub_title:'Что говорят клиенты о нашей работе',
				image_size:'700x500',
				arr1:[
					{
						image1:'sec117_10400_1.jpg',
						alt1:'',
						video1:'https://youtu.be/V56TUkuKCH4',
						descr1:'<span style="font-size:28px">Михаил Иванов</span><div><span style="color:#696969">Ремонт выхлопной системы мотоцикла</span></div>',
						txt1:'Не следует, однако, забывать, что понимание сути ресурсосберегающих технологий играет важную роль в формировании системы массового участия. Разбавленное изрядной долей эмпатии, рациональное мышление требует от нас анализа экспериментов, поражающих по своей масштабности и грандиозности.'
					},
					{
						image1:'sec117_10400_2.jpg',
						alt1:'',
						video1:'https://youtu.be/V56TUkuKCH4',
						descr1:'<span style="font-size:22px"></span><span style="font-size:28px">Алексей Герасимов</span><div><span style="color:#696969">Капитальный ремонт двигателя мотоцикла</span></div><span style="font-size:22px"></span>',
						txt1:'Следует отметить, что новая модель организационной деятельности не даёт нам иного выбора, кроме определения экономической целесообразности принимаемых решений.'
					}
				]
			}
		},
		{
			id:149,
			default:0,
			position:10500,
			title:'1307. 3 отзыва в ряд с изображениями',
			description:'Есть возможность загружать собственные фото и изменения текста.',
			default_values:{
				title:'<b>Почему выбирают именно нас</b>',
				sub_title:'Результаты людей, прошедших наше обучение до результата',
				arr1:[
					{
						image1:'sec149_10500_1.jpg',
						image2:'sec149_10500_2.jpg',
						image3:'sec149_10500_3.jpg',
						alt1:'',alt2:'',alt3:'',
						video1:'https://youtu.be/V56TUkuKCH4',
						video2:'https://youtu.be/V56TUkuKCH4',
						video3:'https://youtu.be/V56TUkuKCH4',
						title1:'<span style="font-size:20px">Наталья, менеджер</span>',
						title2:'<span style="font-size:20px">Сергей, фотограф</span>',
						title3:'<span style="font-size:20px">Максим, программист</span>',
						subtitle1:'Диаграммы связей набирают популярность среди определенных слоев населения. Картельные сговоры не допускают ситуации, при которой сторонники тоталитаризма в науке, инициированные синтетически, обнародованы.',
						subtitle2:'Сложно сказать, почему представители современных социальных резервов, вне зависимости от их уровня, должны быть представлены в исключительно положительном свете.',
						subtitle3:'Как принято считать, интерактивные прототипы подвергнуты целой серии независимых исследований. Принимая во внимание показатели, внедрение современных методик, а также свежий взгляд на привычные вещи.'
					}
				]
			}
		},
		{
			id:1149,
			default:1,
			position:10501,
			title:'1308. Блок для отзывов с заголовком и описанием',
			description:'Возможность добавления своих изображений, анимации элементов',
			default_values:{}
		},
		{
			id:1418,
			default:0,
			position:10502,
			title:'1309. Блок с отзывами',
			description:'Добавление второго изображения, кнопок',
			default_values:{
				bg:'#f3f3f3',
				extra_img:0,
				show_title:1,
				show_sub_title:1,
				show_btn:0,
				image1:'quentin-menini-JbRU5uvnpjE-unsplash.jpg',
				title:'<b>Отзывы о нашем интернет-магазине</b>',
				sub_title:'90% наших покупателей возвращаются снова и рекомендуют нас друзьям',
				arr1:[
					{
						title1:'Степан',
						txt1:'Вежливые менеджеры. Квалифицированный подбор материалов и зап.частей. Демократичные цены.',
						ico1:'svg-icon-favorite3',
						btn1:{title:'Подробнее',color:'#000',surround:1,style:1},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#637d8b',action:'thanks',surround:1,style:1,url:'',amount:0}
						]
					},
					{
						title1:'Александр',
						txt1:'Сервис на высшем уровне, детали только высокого качества, работники выполняют свои обязанности своевременно',
						ico1:'svg-icon-favorite3',
						btn1:{title:'Подробнее',color:'#000',surround:1,style:1},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#637d8b',action:'thanks',surround:1,style:1,url:'',amount:0}
						]
					},
					{
						title1:'Андрей',
						txt1:'Вежливые менеджеры. Квалифицированный подбор материалов и зап.частей. Демократичные цены.',
						ico1:'svg-icon-favorite3',
						btn1:{title:'Подробнее',color:'#000',surround:1,style:1},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#637d8b',action:'thanks',surround:1,style:1,url:'',amount:0}
						]
					},
					{
						title1:'Михаил',
						txt1:'Понравилось что легко найти нужный товар на сайте, и еще консультанты так же помогают, а не просто записывают заказ.',
						ico1:'svg-icon-favorite3',
						btn1:{title:'Подробнее',color:'#000',surround:1,style:1},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#637d8b',action:'thanks',surround:1,style:1,url:'',amount:0}
						]
					},
					{
						title1:'Владимир',
						txt1:'Очень внимательный сотрудник магазина и по телефону, и лично прекрасно все подобрал. Буду рекомендовать друзьям.',
						ico1:'svg-icon-favorite3',
						btn1:{title:'Подробнее',color:'#000',surround:1,style:1},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#637d8b',action:'thanks',surround:1,style:1,url:'',amount:0}
						]
					},
					{
						title1:'Анатолий',
						txt1:'Сервис на высшем уровне, детали только высокого качества, работники выполняют свои обязанности своевременно',
						ico1:'svg-icon-favorite3',
						btn1:{title:'Подробнее',color:'#000',surround:1,style:1},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Отправить',color:'#637d8b',action:'thanks',surround:1,style:1,url:'',amount:0}
						]
					}
				]
			}
		},
		{
			id:1155,
			default:1,
			position:10503,
			title:'1310. Блок-слайдер партнеры',
			description:'Добавление изображения, ссылки на изображения',
			default_values:{
				title:'<b>С кем мы работаем</b>',
				sub_title:'Крупные клиенты, с которыми мы работаем',
				bg:'#f8f8f8',
				image_size:'800x800',
				arr1:[
					{image_box:{title:'',descr:'',alt:'',image:'sec1155_img_1.jpg',link:'',link_target:0}},
					{image_box:{title:'',descr:'',alt:'',image:'sec1155_img_2.jpg',link:'',link_target:0}},
					{image_box:{title:'',descr:'',alt:'',image:'sec1155_img_3.jpg',link:'',link_target:0}},
					{image_box:{title:'',descr:'',alt:'',image:'sec1155_img_4.jpg',link:'',link_target:0}},
					{image_box:{title:'',descr:'',alt:'',image:'sec1155_img_5.jpg',link:'',link_target:0}},
					{image_box:{title:'',descr:'',alt:'',image:'sec1155_img_6.jpg',link:'',link_target:0}},
					{image_box:{title:'',descr:'',alt:'',image:'sec1155_img_7.jpg',link:'',link_target:0}}
				]
			}
		},
		{
			id:1149,
			default:1,
			position:10510,
			title:'1311. Блок для отзывов с заголовком и описанием',
			description:'Возможность добавления своих изображений, анимации элементов',
			default_values:{second_right:1}
		},
		{
			id:3117,
			default:0,
			position:16312,
			title:'1312. Блок отзыв в виде цитаты',
			description:'Возможность добавления своих изображений, анимации элементов',
			default_values:{}
		},
		{
			id:3010,
			default:0,
			position:165010,
			title:'1313. Гибкая плитка отзывов',
			description:'Настройки фона, теней и скруглений. Гибкая сетка. Трансформируется в слайдер.',
			default_values:{
				bg:"#272643",
				title:"Отзывы покупателей",
				sub_title:"Абсолютно каждый клиент остается доволен",
				show_title1:0,
				date_time1_fweight:"600",
				show_btns:0,
				tiles_padding:40,
				tiles_bg:"#f5f5f5",
				tiles_content_valign:"space-between",
				arr1: [
					{
						date_time1:"Стиральная машина LG F-10B FC123 Clean Master",
						title1:'',
						descr1:"<p>Хорошая и надежная техника, которая прослужит долгие годы. Во-первых, она очень тихая. У меня в квартире работает практически бесшумно. В отличие от многих современных моделей. А во-вторых, очень компактная, что очень актуально для малогабаритных квартир.</p>",
						image1:"37ff2c0b459b14623e5e1c14b6a84e45.jpg",
						alt1:'',
						link1:"Потапов Андрей",
						btn1:{title:"Оставить заявку",color:"#303030",style:5,surround:3},
						form1:[
							{type:"hidden",title:"Название формы",description:''},
							{type:"email",title:"Введите email",description:'',required:1},
							{type:"btn",title:"Оставить заявку",color:"#303030",action:"thanks",surround:3,style:5,url:'',amount:0}
						],
						form_html1:"Замените HTML"
					},
					{
						date_time1:"Холодильник Indesit GC-Home 346G Silent",
						title1:'',
						descr1:"<p>На кухне теперь можно готовить безбоязненно, так как шум не слышен. Это очень важный показатель, особенно для тех, у кого маленькие детки. А вообще, холодильник очень даже хороший! Очень удобный. Нравится и тот факт, что не нужно постоянно размораживать!</p>",
						image1:"8e3b6b256d43e4b665fd51467fb1f5f8.jpg",
						alt1:'',
						link1:"Зуева Вера",
						btn1:{title:"Оставить заявку",color:"#303030",style:5,surround:3},
						form1:[
							{type:"hidden",title:"Название формы",description:''},
							{type:"email",title:"Введите email",description:'',required:1},
							{type:"btn",title:"Оставить заявку",color:"#303030",action:"thanks",surround:3,style:5,url:'',amount:0}
						],
						form_html1:"Замените HTML"
					},
					{
						date_time1:"Посудомоечная машина Hi HFS1567 Pro",
						title1:'',
						descr1:"<p>Когда у меня появилась такая возможность, я сразу же решила ее купить. И вот я уже пользуюсь своей новой помощницей. Она действительно очень удобная. Я даже и не думала, что ей можно пользоваться чаще, чем раз в неделю. А теперь у меня на это время всегда есть.</p>",
						image1:"c4acdb77005ade5549f02cc5d5319278.jpg",
						alt1:'',
						link1:"Фирсова Полина",
						btn1:{
							title:"Оставить заявку",
							color:"#303030",
							style:5,
							surround:3
						},
						form1:[
							{type:"hidden",title:"Название формы",description:''},
							{type:"email",title:"Введите email",description:'',required:1},
							{type:"btn",title:"Оставить заявку",color:"#303030",action:"thanks",surround:3,style:5,url:'',amount:0}
						],
						form_html1:"Замените HTML"
					}
				],
				anchor:"a_3770895"
			}
		}
	],
	deleted:[],
	widget:0
},
{
	name:'Социальные сети',
	icon:'fa fa-share-alt',
	icon_new:'socail.svg',
	blocks:[
		{
			id:1002,
			default:1,
			position:13100,
			title:'1401. Кнопки социальных сетей',
			description:'Разместите ссылки на свои социальные сети. Можно добавить заголовки и изменить цвет иконок',
			default_values:{}
		},
		{
			id:1002,
			default:1,
			position:13101,
			title:'1402. Кнопки социальных сетей',
			description:'Разместите ссылки на свои социальные сети. Можно добавить заголовки и изменить цвет иконок',
			default_values:{icons_bg_color:'default'}
		},
		{
			id:108,
			default:1,
			position:1150,
			title:'1403. Кнопки социальных сетей',
			description:'Разместите ссылки на свои социальные сети. Можно добавить заголовки и изменить цвет иконок',
			default_values:{}
		}
	],
	group:[],
	deleted:[],
	widget:0
},
{
	name:'Счетчики и графики',
	icon:'fa fa-clock-o',
	icon_new:'abacus.svg',
	blocks:[
		{
			id:161,
			default:1,
			position:14100,
			title:'1501. Счетчик обратного отсчета',
			description:'Обратный отсчет ежедневно и по дате',
			default_values:{}
		},
		{
			id:1161,
			default:1,
			position:14105,
			title:'1502. Счетчик обратного отсчета ',
			description:'Обратный отсчет ежедневно и по дате',
			default_values:{}
		},
		{
			id:1400,
			default:1,
			position:14106,
			title:'1503. Столбчатая диаграмма',
			description:'Блок для создания простых графиков',
			default_values:{}
		},
		{
			id:1400,
			default:1,
			position:14107,
			title:'1504. Кольцевая диаграмма',
			description:'Блок для создания простых графиков',
			default_values:{
				type_graph:'doughnut',
				title:'<b>Популярные смартфоны</b>',
				sub_title:'Статистика популярных смартфонов за последнее десятилетие',
				arr1:[
					{arr_title:'Samsung',arr_value:'19',arr_color:'#71b6f9'},
					{arr_title:'Apple',arr_value:'13.4',arr_color:'#cccccc'},
					{arr_title:'Huawei',arr_value:'13',arr_color:'#dd4803'},
					{arr_title:'Xiaomi',arr_value:'7.9',arr_color:'#f79700'},
					{arr_title:'Others',arr_value:'39',arr_color:'#9f887e'}
				]
			}
		},
		{
			id:1400,
			default:1,
			position:14108,
			title:'1505. Круговая диаграмма',
			description:'Блок для создания простых графиков',
			default_values:{
				type_graph:'polarArea',
				title:'<b>Популярные автомобили</b>',
				sub_title:'Статистика популярных автомобилей за последнее десятилетие',
				arr1:[
					{arr_title:'Toyota',arr_value:'7843',arr_color:'#71b6f9'},
					{arr_title:'Volkswagen',arr_value:'6639',arr_color:'#cccccc'},
					{arr_title:'Ford',arr_value:'5953',arr_color:'#dd4803'},
					{arr_title:'Honda',arr_value:'4967',arr_color:'#f79700'},
					{arr_title:'Nissan',arr_value:'4834',arr_color:'#9f887e'}
				]
			}
		},
		{
			id:1400,
			default:1,
			position:14109,
			title:'1506. Круговая диаграмма',
			description:'Блок для создания простых графиков',
			default_values:{
				type_graph:'pie',
				title:'<b>Популярные ноутбуки</b>',
				sub_title:'Статистика популярных ноутбуков за последнее десятилетие',
				arr1:[
					{arr_title:'INTEL PENTIUM N5000',arr_value:'94600',arr_color:'#6d9f30'},
					{arr_title:'DELL XPS 13',arr_value:'120000',arr_color:'#cccccc'},
					{arr_title:'ASUS ZENBOOK FLIP S UX370',arr_value:'110000',arr_color:'#dd4803'},
					{arr_title:'APPLE MACBOOK PRO (TOUCH BAR) 13',arr_value:'140000',arr_color:'#f79700'}
				]
			}
		}
	],
	group:[161, 1161, 1400],
	deleted:[],
	widget:0
},
{
	name:'Окно с формой',
	icon:'fa fa-times',
	icon_new:'window_form.svg',
	blocks:[
		{
			id:1000,
			default:1,
			position:11001,
			title:'Виджет NoExit: изображение слева, текст и форма справа.',
			description:'Заменить форму, кнопка вместо формы, изменение цвета фона.',
			default_values:{}
		},
		{
			id:1004,
			default:1,
			position:11051,
			title:'Виджет NoExit: изображение слева, текст и форма справа.',
			description:'Заменить форму, кнопка вместо формы, изменение цвета фона.',
			default_values:{}
		},
		{
			id:1005,
			default:1,
			position:11071,
			title:'Виджет NoExit: заголовок, текст и форма.',
			description:'Заменить форму, кнопка вместо формы, изменение цвета фона.',
			default_values:{}
		},
		{
			id:1006,
			default:1,
			position:11075,
			title:'Виджет NoExit: 3 поля для текста, форма, кнопка.',
			description:'Цвет фона, ссылка на кнопку.',
			default_values:{}
		},
		{
			id:1007,
			default:1,
			position:11081,
			title:'Виджет NoExit: 3 поля для текста, форма, текст под формой',
			description:'Заменить форму, кнопка вместо формы, изменение цвета фона.',
			default_values:{}
		},
		{
			id:1001,
			default:1,
			position:12001,
			title:'Виджет Popup:изображение слева, текст и форма справа..',
			description:'Заменить форму, кнопка вместо формы, таймер, градиент фона.',
			default_values:{}
		}
	],
	group:[1000, 1004, 1005, 1001, 1007, 1006],
	deleted:[],
	widget:1
},
{
	name:'Окно c текстом',
	icon:'fa fa-external-link',
	icon_new:'window_text.svg',
	blocks:[
		{
			id:1003,
			default:1,
			position:13001,
			title:'Плавающий блок с текстом снизу.',
			description:'Цвет фона, шум.',
			default_values:{}
		}
	],
	group:[1003],
	deleted:[],
	widget:1
},
{
	name:'Окно с ботом',
	icon:'fa fa-commenting-o',
	icon_new:'window_html.svg',
	blocks:[
		{
			id:1010,
			default:1,
			position:12171,
			title:'Виджет Bot: всплывающие окна с изображением и текстом, эффект присутствия.',
			description:'Цвет фона, задержка, размер изображения.',
			default_values:{}
		},
		{
			id:1008,
			default:1,
			position:12101,
			title:'Виджет Bot: всплывающие окна с изображением и текстом .',
			description:'Цвет фона, задержка, размер изображения.',
			default_values:{}
		}
	],
	group:[1010, 1008],
	deleted:[],
	widget:1
},
{
	name:'Боковое меню',
//icon:'fa fa-bars',
	icon_new:'menu.svg',
	blocks:[
		{
			id:1116,
			default:1,
			position:13100,
			title:'Боковое меню: вертикальное меню слева.',
			description:'Эффекты при наведении на пункты меню',
			default_values:{}
		},
		{
			id:1117,
			default:1,
			position:13105,
			title:'Боковое меню: вертикальное меню слева.',
			description:'Эффекты при наведении на пункты меню',
			default_values:{
				bg:'#212121', 
				show_search:1,
				text1:'Интернет-магазин',
				logo_use_text:1,
				logo_text:'ADDSHOP',
				show_btn:0,
				btn1:{
					title:'Оставить заявку',
					color:'#f78960',
					surround:3,
					style:17,
					target:0
				}
			}
		},
		{
			id:2120,
			default:1,
			position:13106,
			title:'Меню сайта на весь экран',
			description:'Есть возможность добавить соц ссылки и строку поиска и закрепить кнопку меню',
			default_values:{}
		}
	],
	group:[1116, 1117, 2120],
	deleted:[],
	widget:1
},
{
	name:'Модули и прочее',
	icon:'fa fa-external-link',
	icon_new:'anchor_1.svg',
	blocks:[
		{
			id:316,
			default:1,
			position:15001,
			title:'Блок-ссылка',
			description:'Дублирует выбранный вами блок на любую страницу проекта',
			default_values:{}
		},
		{
			id:163,
			default:1,
			position:14001,
			title:'Редактор кода',
			description:'Сюда можно вставить HTML, JavaScript и CSS. Используется для виджетов и модификации сайта',
			default_values:{}
		},
		{
			id:1500,
			default:1,
			position:18000,
			title:'Личный кабинет пользователей',
			description:'Данный блок предоставляет посетителю сайта доступ к истории заказов и партнерской программе',
			default_values:{}
		},
		{
			id:1163,
			default:1,
			position:14002,
			title:'Кнопка перемотки наверх',
			description:'Появляется при прокрутке, возвращает в самое начало страницы',
			default_values:{}
		},
		{
			id:1900,
			default:1,
			position:15003,
			title:'Блог. Плитка последних статей',
			description:'Выводит плитку последних добавленных статей на странице в том месте, куда добавлен блок. Можно выводить от 3 до 12 статей',
			default_values:{}
		},
		{
			id:1700,
			default:1,
			position:15002,
			title:'Блог. Плитка категорий',
			description:'Выводит плитку категорий на странице в том месте, куда добавлен блок',
			default_values:{}
		},
		{
			id:1550,
			default:1,
			position:14004,
			title:'Блок оглавления',
			description:'Используется для удобной навигации по странице с большим содержимым',
			default_values:{}
		},
		{
			id:333,
			default:1,
			position:14003,
			title:'Постраничная навигация',
			description:'Данный блок используют для навигации на многостраничных сайтах',
			default_values:{}
		} 
	],
	widget:0
},
{
	name:'Виджет Callback',
	icon:'fa fa-phone',
	icon_new:'callback.svg',
	blocks:[
		{
			id:1009,
			default:1,
			position:12151,
			title:'Виджет Callback: всплывающая форма обратного звонка с гибкими настройками',
			description:'Цвет фона, иконки, цвет икнонк, соцсети',
			default_values:{}
		}
	],
	group:[1009],
	deleted:[],
	widget:1
},
{
	name:'Flexible блок',
	icon:'fa fa-phone',
	icon_new:'layers.svg',
	blocks:[
		{
			id:1600,
			default:1,
			position:12152,
			title:'Flexible блок',
			description:'Полностью настраиваемый блок',
			default_values:{}
		}
	],
	group:[],
	deleted:[],
	widget:0
},
{
	name:'Рекламный блок',
	icon:'fa fa-phone',
	icon_new:'megaphone.svg',
	blocks:[
		{
			id:1126,
			default:1,
			position:13107,
			title:'Блок справа для контента',
			description:'Есть возможность добавить изображение, текст и кнопку',
			default_values:{}
		}
	],
	group:[1126],
	deleted:[],
	widget:1
},
{
	name:'Заставка',
	icon:'fa fa-phone',
	icon_new:'content.svg',
	blocks:[
		{
			id:1128,
			default:1,
			position:13108,
			title:'Плавно затухающая заставка',
			description:'Изображение с текстом, исчезающие через 2 секунды после загрузки страницы. Настраивается время и скорость затухания',
			default_values:{}
		}
	],
	group:[1128],
	deleted:[],
	widget:1
},
{
	name:'Системы частиц',
	icon:'',
	icon_new:'snowflake.png',
	blocks:[
		{
			id:5001,
			default:1,
			position:5001,
			title:'NY01. Падающие снежинки (маленькие)',
			description:'Работает на всей странице. Настраивается скорость полета и размер снежинок.',
			default_values:{}
		}
	],
	group:[5001],
	deleted:[],
	widget:1
},
{
	name:'Афиши и расписания',
	icon:'',
	icon_new:'poster.png',
	blocks:[
		{
			id:3010,
			default:1,
			title:'3000. Блок-афиша',
			description:'Настройки фона, теней и скруглений. Гибкая сетка. Трансформируется в слайдер.',
			position:30000,
			default_values:{
				show_descr1:0,
				img_grayscale:1,
				img_hover_grayscale:1
			}
		},
		{
			id:3010,
			default:1,
			title:'3001. Слайдер-афиша',
			description:'Настройки фона, теней и скруглений. Гибкая сетка. Трансформируется в простой блок.',
			position:30001,
			default_values:{
				bg:'#ffffff',
				show_descr1:0,
				img_grayscale:1,
				img_hover_grayscale:1,
				tiles_shadow:'rgba(100,100,111,0.2) 0px 7px 29px 0px',
				tiles_radius:'15px',
				tiles_bg:'#FFCF40',
				slider_active:1,
				slider_color:'#303030',
				btn_align:'center',
				btn_size:'size-xl'
			}
		},
		{
			id:3010,
			default:1,
			title:'3002. Блок сроки работ',
			description:'Настройки фона, теней и скруглений. Гибкая сетка. Трансформируется в слайдер.',
			position:30002,
			default_values:{
				bg:'#ffffff',
				show_btns:0,
				show_image1:0,
				tiles_shadow:'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px',
				tiles_radius:'5%',
				tiles_bg:'#f5f5f5',
				tiles_border:1,
				tiles_border_width:'5px',
				tiles_border_color:'#e0e0e0',
				title:'Сроки ремонта',
				sub_title:'Нас часто спрашивают о сроках ремонта',
				arr1:[
					{
						date_time1:'<span style="color:#777">От 5 до 14 дней</span>',
						title1:'Косметический ремонт',
						descr1:'Осуществляется только обновление всех поверхностей — замена обоев, напольного и потолочного покрытия, плитки.',
						image1:'sec320_1_1.jpg',
						alt1:'',
						link1:'<a href="#"><b>ПОДРОБНЕЕ</b></a>',
						btn1:{title:'Оставить заявку',color:'#000',style:5,surround:3},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Оставить заявку',color:'#000',action:'thanks',surround:3,style:5,url:'',amount:0}
						],
						form_html1:'Замените HTML'
					},
					{
						date_time1:'<span style="color:#777">От 2 до 7 дней</span>',
						title1:'Капитальный ремонт',
						descr1:'Данный вид ремонта является самым доступным по цене и выполняется в наиболее быстрые сроки.',
						image1:'sec320_1_1.jpg',
						alt1:'',
						link1:'<a href="#"><b>ПОДРОБНЕЕ</b></a>',
						btn1:{title:'Оставить заявку',color:'#000',style:5,surround:3},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Оставить заявку',color:'#000',action:'thanks',surround:3,style:5,url:'',amount:0}
						],
						form_html1:'Замените HTML'
					},
					{
						date_time1:'<span style="color:#777">Более 28 дней</span>',
						title1:'Индивидуальный ремонт',
						descr1:'Ремонт включает в себя полный цикл предварительной подготовки всех поверхностей.',
						image1:'sec320_1_1.jpg',
						alt1:'',
						link1:'<a href="#"><b>ПОДРОБНЕЕ</b></a>',
						btn1:{title:'Оставить заявку',color:'#000',style:5,surround:3},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Оставить заявку',color:'#000',action:'thanks',surround:3,style:5,url:'',amount:0}
						],
						form_html1:'Замените HTML'
					}
				]
			}
		},
		{
			id:3010,
			default:1,
			title:'3003. Блок мероприятия',
			description:'Настройки фона, теней и скруглений. Гибкая сетка. Трансформируется в слайдер.',
			position:30003,
			default_values:{
				bg:'#f2f2f2',
				tiles_count:2,
				tiles_padding:'40',
				tiles_shadow:'rgba(149, 157, 165, 0.2) 0px 8px 24px',
				img_radius:0,
				title:'Мы подготовили программу',
				sub_title:'Мероприятий и активностей для вашего отдыха',
				popup_form_title:'В стоимость уже входит аренда снаряжения, техники, проживание и питание',	
				arr1:[
					{
						date_time1:'<span style="color:#777">5 января, начало в 12:00</span>',
						title1:'Массовый спуск по 550 м трассе',
						descr1:'В вашем распоряжении будет горнолыжная трасса длинною в 550 метров, с препятствиями и спотами, подъемником и горячим чаем!',
						image1:'sec3010_4_img1.jpg',
						alt1:'',
						link1:'Инструктор: Михаил Иванов<div>Техник: Федор Косарев</div>',
						btn1:{title:'От 12 990 руб./чел.',color:'#20c3d0',style:5,surround:3},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Оставить заявку',color:'#20c3d0',action:'thanks',surround:3,style:5,url:'',amount:0}
						],
						form_html1:'Замените HTML'
					},
					{
						date_time1:'<span style="color:#777">6 января, начало в 11:00</span>',
						title1:'Парный заезд на снегоходах',
						descr1:'Мощные, двухместные снегоходы с повышенной стабильностью станут вашим отличным спутником. Экипировка подбирается индивидуально.',
						image1:'sec3010_4_img2.jpg',
						alt1:'',
						link1:'Инструктор: Виктория Михайлова<div>Техник: Федор Косарев</div>',
						btn1:{title:'От 27 990 руб./чел.',color:'#20c3d0',style:5,surround:3},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Оставить заявку',color:'#20c3d0',action:'thanks',surround:3,style:5,url:'',amount:0}
						],
						form_html1:'Замените HTML'
					},
					{
						date_time1:'<span style="color:#777">7 января, начало в 13:00</span>',
						title1:'Катание по замерзшему озеру',
						descr1:'Вас ждут интересные конкурсы, заготовленные трассы и световое шоу с заходом солнца!',
						image1:'sec3010_4_img3.jpg',
						alt1:'',
						link1:'Старший: Дмитрий Васильев<div>Помощник: Виталий Осипов</div>',
						btn1:{title:'От 5 990 руб./чел.',color:'#20c3d0',style:5,surround:3},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Оставить заявку',color:'#20c3d0',action:'thanks',surround:3,style:5,url:'',amount:0}
						],
						form_html1:'Замените HTML'
					},
					{
						date_time1:'<span style="color:#777">8 января, начало в 7:00</span>',
						title1:'Восхождение в гору 1200 м',
						descr1:'Абсолютно безопасный, но от этого ни чуть не скучный подъем в снежную гору.',
						image1:'sec3010_4_img4.jpg',
						alt1:'',
						link1:'Инструктор: Александр Зайцев<div>Инструктор: Яна Дмитриева</div><div>Медик: Арина Минаева </div>',
						btn1:{title:'От 45 990 руб./чел.',color:'#20c3d0',style:5,surround:3},
						form1:[
							{type:'hidden',title:'Название формы',description:''},
							{type:'email',title:'Введите email',description:'',required:1},
							{type:'btn',title:'Оставить заявку',color:'#20c3d0',action:'thanks',surround:3,style:5,url:'',amount:0}
						],
						form_html1:'Замените HTML'
					}
				]
			}
		}
	],
	group:[3010],
	deleted:[],
	widget:0
}
];