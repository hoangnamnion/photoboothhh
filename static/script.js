// static/script.js
const video = document.getElementById("video");
const preview = document.getElementById("preview");
const images = [];

navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => video.srcObject = stream)
  .catch(err => console.error("Error accessing camera:", err));

function snapPhoto() {
  const canvas = document.createElement("canvas");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  const ctx = canvas.getContext("2d");
  // Lật ngang ảnh (mirror)
  ctx.translate(canvas.width, 0);
  ctx.scale(-1, 1);
  ctx.drawImage(video, 0, 0);
  
  const imageData = canvas.toDataURL("image/png");
  images.push(imageData);

  // Create and display the captured image
  const img = document.createElement("img");
  img.src = imageData;
  preview.appendChild(img);
}

document.getElementById("snap").onclick = () => {
  remainingPhotos = selectedCount;
  startCountdown();
};

let selectedFrame = null;
let selectedPhotos = [];
const MAX_PHOTOS = 4;

// Thêm biến lưu bố cục được chọn
let selectedLayout = '1x4';

// Xử lý chọn bố cục
document.querySelectorAll('.layout-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // Bỏ chọn tất cả các nút
        document.querySelectorAll('.layout-btn').forEach(b => b.classList.remove('selected'));
        // Chọn nút được click
        btn.classList.add('selected');
        // Lưu bố cục được chọn
        selectedLayout = btn.getAttribute('data-layout');
        
        // Hiển thị khung tương ứng với bố cục
        document.querySelectorAll('.frame-section').forEach(section => {
            section.classList.remove('active');
            if (section.getAttribute('data-layout') === selectedLayout) {
                section.classList.add('active');
            }
        });
        
        // Bỏ chọn các ảnh thừa khi chuyển bố cục
        const maxPhotos = {
            '1x4': 4,
            '1x3': 3,
            '2x3': 6,
            '1x2': 2
        };
        
        if (selectedPhotos.length > maxPhotos[selectedLayout]) {
            const previewImages = document.querySelectorAll('#preview img.selected');
            for (let i = maxPhotos[selectedLayout]; i < previewImages.length; i++) {
                previewImages[i].classList.remove('selected');
            }
            selectedPhotos = selectedPhotos.slice(0, maxPhotos[selectedLayout]);
        }
        
        // Bỏ chọn khung cũ
        document.querySelectorAll('.frame-options img.selected').forEach(img => {
            img.classList.remove('selected');
        });
        selectedFrame = null;
        
        // Cập nhật preview
        updatePreview();
    });
});

// Xử lý chọn ảnh từ preview
document.getElementById('preview').addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        const img = e.target;
        
        // Nếu ảnh đã được chọn, bỏ chọn
        if (img.classList.contains('selected')) {
            img.classList.remove('selected');
            selectedPhotos = selectedPhotos.filter(photo => photo !== img.src);
        } 
        // Nếu chưa chọn đủ số ảnh tối đa, thêm vào
        else {
            const maxPhotos = {
                '1x4': 4,
                '1x3': 3,
                '2x3': 6,
                '1x2': 2
            };
            if (selectedPhotos.length < maxPhotos[selectedLayout]) {
                img.classList.add('selected');
                selectedPhotos.push(img.src);
            } else {
                alert(`Bạn chỉ có thể chọn tối đa ${maxPhotos[selectedLayout]} ảnh cho bố cục ${selectedLayout}`);
            }
        }
        
        updatePreview();
    }
});

// Xử lý chọn khung ảnh
document.querySelectorAll('.frame-options img').forEach(frame => {
    frame.addEventListener('click', () => {
        // Chỉ cho phép chọn khung phù hợp với bố cục hiện tại
        if (frame.getAttribute('data-frame-type') === selectedLayout) {
            // Bỏ chọn khung cũ
            document.querySelectorAll('.frame-options img.selected').forEach(img => {
                img.classList.remove('selected');
            });
            // Chọn khung mới
            frame.classList.add('selected');
            selectedFrame = frame.src;
            updatePreview();
        }
    });
});

// Cập nhật preview kết quả
function updatePreview() {
    const previewResult = document.querySelector('.preview-result');
    if (!previewResult) return;

    if (selectedPhotos.length > 0 && selectedFrame) {
        const scale = 0.5;
        let templateWidth, templateHeight, padding, gap, targetW, targetH;

        // Xác định kích thước dựa trên bố cục
        switch(selectedLayout) {
            case '1x3':
                templateWidth = 900 * scale;
                templateHeight = 2100 * scale;
                padding = 60 * scale;
                gap = 55 * scale;
                targetW = 770 * scale;
                targetH = 550 * scale;
                break;
            case '2x3':
                templateWidth = 1080 * scale;
                templateHeight = 1620 * scale;
                padding = 60 * scale;
                gap = 30 * scale;
                targetW = 480 * scale;
                targetH = 480 * scale;
                break;
            case '1x2':
                templateWidth = 600 * scale;
                templateHeight = 975 * scale;
                padding = 50 * scale;
                gap = 50 * scale;
                targetW = 510 * scale;
                targetH = 350 * scale;
                break;
            default: // 1x4
                templateWidth = 600 * scale;
                templateHeight = 1800 * scale;
                padding = 50 * scale;
                gap = 50 * scale;
                targetW = 500 * scale;
                targetH = 350 * scale;
        }

        const canvas = document.createElement('canvas');
        canvas.width = templateWidth;
        canvas.height = templateHeight;
        const ctx = canvas.getContext('2d');

        // Vẽ ảnh trước
        let loadedImages = 0;
        selectedPhotos.forEach((photo, index) => {
            const img = new Image();
            img.src = photo;
            img.onload = () => {
                let x, y;
                if (selectedLayout === '2x3') {
                    const row = Math.floor(index / 2);
                    const col = index % 2;
                    x = padding + col * (targetW + gap);
                    y = padding + row * (targetH + gap);
                } else {
                    x = padding;
                    y = padding + index * (targetH + gap);
                }
                ctx.drawImage(img, x, y, targetW, targetH);
                loadedImages++;
                
                if (loadedImages === selectedPhotos.length) {
                    // Vẽ frame sau cùng
                    const frameImg = new Image();
                    frameImg.src = selectedFrame;
                    frameImg.onload = () => {
                        ctx.drawImage(frameImg, 0, 0, templateWidth, templateHeight);
                        
                        // Thêm ngày tháng và thời gian
                        const date = new Date();
                        const timeStr = date.toLocaleTimeString('vi-VN', {
                            hour: '2-digit',
                            minute: '2-digit'
                        });
                        const dateStr = date.toLocaleDateString('vi-VN', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric'
                        });
                        const datetimeStr = `${timeStr}, ${dateStr}`;
                        
                        // Thêm hiệu ứng bóng đổ
                        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
                        ctx.shadowBlur = 3;
                        ctx.shadowOffsetX = 1;
                        ctx.shadowOffsetY = 1;
                        
                        // Vẽ text với màu xám sang trọng
                        ctx.font = 'bold 16px Arial';
                        ctx.fillStyle = 'rgba(200, 200, 200, 0.9)';
                        ctx.textAlign = 'right';
                        ctx.fillText(datetimeStr, templateWidth - 20, templateHeight - 20);
                        
                        // Reset shadow
                        ctx.shadowColor = 'transparent';
                        ctx.shadowBlur = 0;
                        
                        previewResult.innerHTML = '';
                        previewResult.appendChild(canvas);
                    };
                }
            };
        });
    }
}

// Xử lý nút download
document.getElementById('download-anh').addEventListener('click', () => {
    const previewCanvas = document.querySelector('.preview-result canvas');
    if (previewCanvas) {
        const link = document.createElement('a');
        link.href = previewCanvas.toDataURL('image/png');
        link.download = `photo-collage-${new Date().toISOString().split('T')[0]}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        alert('Vui lòng chọn ảnh và khung trước khi tải xuống');
    }
});

let selectedTimer = 3; // Mặc định 3 giây
let selectedCount = 1; // Mặc định 1 ảnh
let countdownInterval;
let remainingPhotos = 0;

// Xử lý chọn thời gian chờ
document.querySelectorAll('.timer-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.timer-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        selectedTimer = parseInt(btn.getAttribute('data-time'));
    });
});

// Xử lý chọn số lượng ảnh
document.querySelectorAll('.count-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.count-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        selectedCount = parseInt(btn.getAttribute('data-count'));
    });
});

// Chọn mặc định cho timer và count
document.querySelector('.timer-btn[data-time="3"]').classList.add('selected');
document.querySelector('.count-btn[data-count="1"]').classList.add('selected');

function startCountdown() {
    if (selectedTimer === 0) {
        // Chụp luôn không đếm ngược
        snapPhoto();
        remainingPhotos--;
        if (remainingPhotos > 0) {
            setTimeout(startCountdown, 1000);
        }
        return;
    }

    let timeLeft = selectedTimer;
    const countdownDisplay = document.createElement('div');
    countdownDisplay.className = 'countdown';
    countdownDisplay.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 48px;
        color: white;
        background: rgba(0, 0, 0, 0.7);
        padding: 20px;
        border-radius: 10px;
        z-index: 1000;
    `;
    document.body.appendChild(countdownDisplay);

    countdownInterval = setInterval(() => {
        countdownDisplay.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            document.body.removeChild(countdownDisplay);
            snapPhoto();
            remainingPhotos--;
            if (remainingPhotos > 0) {
                setTimeout(startCountdown, 1000);
            }
        }
        timeLeft--;
    }, 1000);
}

// Thêm nút dừng chụp liên tục
const stopButton = document.createElement('button');
stopButton.id = 'stop-capture';
stopButton.textContent = '⏹️ Dừng chụp';
stopButton.style.display = 'none';
document.querySelector('.buttons').appendChild(stopButton);

stopButton.onclick = () => {
    clearInterval(countdownInterval);
    const countdownDisplay = document.querySelector('.countdown');
    if (countdownDisplay) {
        document.body.removeChild(countdownDisplay);
    }
    remainingPhotos = 0;
    stopButton.style.display = 'none';
};

// Cập nhật hiển thị nút dừng
function updateStopButton() {
    if (remainingPhotos > 0) {
        stopButton.style.display = 'block';
    } else {
        stopButton.style.display = 'none';
    }
}

// Xử lý upload ảnh
document.getElementById('upload-anh').addEventListener('click', () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.multiple = true;
    
    input.onchange = (e) => {
        const files = e.target.files;
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const reader = new FileReader();
            
            reader.onload = (e) => {
                const img = document.createElement('img');
                img.src = e.target.result;
                img.className = 'preview-image';
                img.onclick = () => toggleImageSelection(img);
                
                // Thêm ảnh vào preview
                document.getElementById('preview').appendChild(img);
                
                // Thêm ảnh vào mảng selectedPhotos
                selectedPhotos.push(e.target.result);
                
                // Cập nhật preview
                updatePreview();
            };
            
            reader.readAsDataURL(file);
        }
    };
    
    input.click();
});

// Hàm chọn/bỏ chọn ảnh
function toggleImageSelection(img) {
    if (img.classList.contains('selected')) {
        img.classList.remove('selected');
        const index = selectedPhotos.indexOf(img.src);
        if (index > -1) {
            selectedPhotos.splice(index, 1);
        }
    } else {
        // Kiểm tra số lượng ảnh đã chọn
        const maxPhotos = {
            '1x4': 4,
            '1x3': 3,
            '2x3': 6,
            '1x2': 2
        };
        
        if (selectedPhotos.length < maxPhotos[selectedLayout]) {
            img.classList.add('selected');
            selectedPhotos.push(img.src);
        } else {
            alert(`Bạn chỉ có thể chọn tối đa ${maxPhotos[selectedLayout]} ảnh cho bố cục ${selectedLayout}`);
        }
    }
    updatePreview();
}

// Xử lý nút ủng hộ
document.getElementById('support-btn').addEventListener('click', function() {
    window.location.href = 'support.html';
});
