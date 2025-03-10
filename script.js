// 计算年龄
function calculateAge() {
    const birthDate = new Date('2025-01-24');
    const now = new Date();
    const diffTime = Math.abs(now - birthDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 30) {
        return `${diffDays} 天`;
    } else {
        const months = Math.floor(diffDays / 30);
        const remainingDays = diffDays % 30;
        return `${months} 个月 ${remainingDays} 天`;
    }
}

// 更新年龄显示
function updateAge() {
    const ageElement = document.getElementById('age');
    ageElement.textContent = calculateAge();
}

// 更新实时时间显示
function updateTime() {
    const timeElement = document.getElementById('current-time');
    const now = new Date();
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    timeElement.textContent = now.toLocaleString(undefined, options);
}

// 初始更新
updateAge();
updateTime();

// 每秒更新时间
setInterval(updateTime, 1000);

// 模拟照片上传（实际需要服务器端支持）
function addPhotos() {
    const photoGallery = document.querySelector('.photo-gallery');
    const photoNames = ['photo1.jpg', 'photo2.jpg', 'photo3.jpg']; // 添加你的照片文件名
    photoNames.forEach((photoName) => {
        const img = document.createElement('img');
        img.src = photoName;
        photoGallery.appendChild(img);
    });
}

addPhotos();
