/*
 *	Блоки-утилиты-виджеты
 */

tobiz.service_blocks = [

	{
		type_id:5001,
		template:'<div class="section section5001" data-flake-count="<%=flakeCount%>" data-flake-color="<%=flakeColor%>" <%if(use_image){%>data-image="<%=image%>"<%}%> data-min-size="<%=minSize%>" data-max-size="<%=maxSize%>" data-min-speed="<%=minSpeed%>" data-max-speed="<%=maxSpeed%>" data-round="<%=round%>" data-shadow="<%=shadow%>" <%if(collection){%>data-collection=".<%=where_collect%>"<%}%>"></div>',
		values:{
			flakeCount:250,
			flakeColor:'#ffffff',
			use_image:0,
			image:'snow1.png',
			round:1,
			shadow:0,
			collection:0,
			where_collect:'btn1',
			minSize:1,
			maxSize:3,
			minSpeed:1,
			maxSpeed:3
		},
		vars:[],
		settings:[
			{
				type:'subtitle',
				title:'Настройки снежинок'
			},
			{
				type:'int',
				name:'flakeCount',
				title:'Количество снежинок на странице <i class="fa fa-exclamation-triangle help-ico" title="Реккомендуется не более 500. Большое количество снежинок может вызвать медленную работу сайта на слабых устройствах"></i>'
			},
			{
				type:'colors',
				name:'flakeColor',
				title:'Цвет снежинок',
				require:{
					name:'use_image',
					value:0
				}
			},
			{
				type:'checkbox',
				name:'use_image',
				title:'PNG-снежинки'
			},
			{
				type:'select',
				name:'image',
				title:'Изображение снежинки',
				vars:[
					{title:'Снежинка 1',val:'snow1.png'},
					{title:'Снежинка 2',val:'snow2.png'},
					{title:'Снежинка 3',val:'snow3.png'}
				],
				require:{
					name:'use_image',
					value:1
				}
			},
			{
				type:'select',
				name:'collection',
				title:'Налипание снежинок <i class="fa fa-exclamation-triangle help-ico" title="Корректно работает только для одиночного объекта и только для маленьких снежинок-фигур (не картинок)"></i>',
				vars:[
					{title:'Нет',val:''},
					{title:'На кнопку',val:'btn1'},
					{title:'На форму',val:'form-wrapper'},
					{title:'На изображения',val:'image1'}
				],
				require:{
					name:'use_image',
					value:0
				}
			},
			{
				type:'checkbox',
				name:'round',
				title:'Скруглить снежинки'
			},
			{
				type:'checkbox',
				name:'shadow',
				title:'Тень снежинок <i class="fa fa-question-circle help-ico" title="Снежинки с тенью видно на белом фоне"></i>'
			},
			{
				type:'int',
				name:'minSize',
				title:'Размер снежинок (Min)'
			},
			{
				type:'int',
				name:'maxSize',
				title:'Размер снежинок (Max)'
			},
			{
				type:'int',
				name:'minSpeed',
				title:'Скорость полета (Min)'
			},
			{
				type:'int',
				name:'maxSpeed',
				title:'Скорость полета (Max)'
			}
		]
	}

];