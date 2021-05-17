// Initialize your app
	


var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;
console.log(myApp);
// Add view

var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('about', function (page) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});


       

/*查看大图切换*/

var mainView = myApp.addView('.view-main', {
  dynamicNavbar: true
});
 
var myPhotoBrowserDark = myApp.photoBrowser({
    photos : [
        'images/product_06.jpg',
        'images/product_06.jpg',
        'images/product_06.jpg',
    ],
    theme: 'dark'
});
$$('.pb-standalone-dark').on('click', function () {
    myPhotoBrowserDark.open();
});



 /*下拉刷新*/ 
 
  var songs = ['Yellow Submarine', 'Don\'t Stop Me Now', 'Billie Jean', 'Californication'];
var authors = ['Beatles', 'Queen', 'Michael Jackson', 'Red Hot Chili Peppers'];
 
// Pull to refresh content
var ptrContent = $$('.pull-to-refresh-content');
 
// Add 'refresh' listener on it
ptrContent.on('refresh', function (e) {
    // Emulate 2s loading
    setTimeout(function () {
        // Random image
        var picURL = 'http://hhhhold.com/88/d/jpg?' + Math.round(Math.random() * 100);
        // Random song
        var song = songs[Math.floor(Math.random() * songs.length)];
        // Random author
        var author = authors[Math.floor(Math.random() * authors.length)];
        // List item html
        var itemHTML = '';
        // Prepend new list element
        ptrContent.find('ul').prepend(itemHTML);
        // When loading done, we need to reset it
        myApp.pullToRefreshDone();
    }, 2000);
});


/*编辑删除取消*/
$$('.ac-1').on('click', function () {
    var buttons = [
        {
            text: '编辑',
            bold: true
        },
        {
            text: '删除'
        },
        {
            text: '取消',
            color: 'red'
        },
    ];
    myApp.actions(buttons);
});

/*工作提展开收起示出现数字*/
$$('.accordion-item').on('opened', function () {
  $$(".accordion-tip .bg-red").hide();
}); 
 
$$('.accordion-item').on('closed', function (e) {
  $$(".accordion-tip .bg-red").show();
});     




 

 /*成立时间*/
var myCalendar = myApp.calendar({
    input: '#calendar-input'
});  
  


 
 
  /*企业资料行业分类下拉*/
 var pickerDescribe = myApp.picker({
    input: '#picker-describe',
    rotateEffect: true,
	toolbarCloseText:'完成',
    cols: [
        {
            textAlign: 'left',
            values: ('请选择 零售 制冷 畜牧农业').split(' ')
        },
        {
            values: ('请选择 超市 厨房产品 农业机械').split(' ')
        },
    ]
});    
 
 

   /*企业资料三级所在地下拉*/
 var pickerDescribe = myApp.picker({
    input: '#picker-describe-area',
    rotateEffect: true,
	toolbarCloseText:'完成',
    cols: [
        {
            textAlign: 'left',
            values: ('请选择 北京 上海 深圳').split(' ')
        },
        {
            values: ('请选择 朝阳 通州 海淀').split(' ')
        },
    ]
});    


   /*企业资料所在地下拉*/
 var pickerDescribe = myApp.picker({
    input: '#picker-describe-place',
    rotateEffect: true,
	toolbarCloseText:'完成',
    cols: [
        {
            textAlign: 'left',
            values: ('请选择 北京 上海 深圳').split(' ')
        },
        {
            values: ('请选择 朝阳 通州 海淀').split(' ')
        },
    ]
});  
 /*企业资料选择性别*/
var pickerDevice = myApp.picker({
    input: '#picker-device',
	toolbarCloseText:'完成',
    cols: [
        {
            textAlign: 'center',
            values: ['请选择','先生', '女士']
        }
    ]
});

 /*企业资料选择经营模式*/
var pickerDevice = myApp.picker({
    input: '#picker-describe-mod',
    rotateEffect: true,
	toolbarCloseText:'完成',
    cols: [
        {
            textAlign: 'left',
            values: ('请选择 生产制造 贸易批发 商务服务 招商代理 其他').split(' ')
        },
    ]
});
 
  
 /*企业资料选择企业类型*/
var pickerDevice = myApp.picker({
    input: '#picker-describe-type',
	toolbarCloseText:'完成',
    cols: [
        {
            textAlign: 'center',
            values: ('请选择 企业单位 事业单位或社会团体 个体经营').split(' ')
        },
    ]
});

 /*企业资料选择经营模式(外贸)*/
var pickerDevice = myApp.picker({
    input: '#picker-describe-mod-en',
    rotateEffect: true,
	toolbarCloseText:'完成',
    cols: [
        {
            textAlign: 'left',
            values: ('请选择 生产制造商 外贸公司 购买方 代理商 批发商 零售商').split(' ')
        },
    ]
});
  
 /*外贸推广textarea*/

var myMessagebar = myApp.messagebar('.messagebar', {
    maxHeight: 200
});  





















