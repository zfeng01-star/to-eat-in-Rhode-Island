// 1. 实现首页到第二页的跳转
const startBtn = document.getElementById('start-btn');
const landingPage = document.getElementById('landing-page');
const mapPage = document.getElementById('map-page');
const audio = document.getElementById('my-audio');
startBtn.onclick = function() {
    startBtn.onclick = function() {
     // 1. 播放音乐
    audio.play().catch(error => {
        console.log("播放失败，请检查浏览器设置:", error);
    });

    // 2. 页面跳转逻辑（保持你之前的代码不变）
    document.getElementById('landing-page').classList.remove('active');
    document.getElementById('map-page').classList.add('active');  
    };
    landingPage.classList.remove('active');
    mapPage.classList.add('active');
};

// 2. 实现坐标点点击切换
const pins = document.querySelectorAll('.pin');
const detailImg = document.getElementById('detail-img');

pins.forEach(pin => {
    pin.onclick = function() {
        // 先把所有点都变回红色
        pins.forEach(p => p.classList.remove('active'));
        
        // 把当前点击的点变白
        this.classList.add('active');
        
        // 获取这个点对应的美食图片名称
        const foodImage = this.getAttribute('data-food');
        
        // 更改右侧详情图片的来源
        detailImg.src = foodImage;
    };
});