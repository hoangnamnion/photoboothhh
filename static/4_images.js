#preview {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: 10px 0;
}

#preview img {
    width: 150px;
    height: 100px;
    object-fit: cover;
    border-radius: 5px;
    cursor: pointer;
    transition: transform 0.2s;
}

#preview img:hover {
    transform: scale(1.05);
}

#preview img.selected {
    border: 3px solid #4CAF50;
    box-shadow: 0 0 10px rgba(76, 175, 80, 0.5);
}

.preview-section {
    margin: 20px 0;
}

.preview-section h2 {
    margin: 10px 0;
    color: #333;
}

.preview-section h5 {
    margin: 5px 0;
    color: #666;
    font-weight: normal;
}

------------
/* static/style.css */
html, body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding: 20px;
    background-color: #ffb6c1 !important;
    background-image: none !important;
}

html {
    background-color: #ffb6c1 !important;
}

.header {
    text-align: center;
    margin-bottom: 30px;
}

.bang-hieu {
    width: 70.33%;
    height: auto;
    display: block;
    margin: 0 auto;
    max-width: 600px;
}

.main-container {
    display: flex;
    flex-direction: row;
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 30px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.camera-section {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
}

video {
    width: 100%;
    max-width: 100%;
    height: auto;
    border-radius: 15px;
    transform: scaleX(-1);
    background: #000;
    margin-bottom: 20px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    object-fit: cover;
    aspect-ratio: 4/3;
}

.buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin-bottom: 20px;
    justify-content: center;
    width: 100%;
    max-width: 400px;
}

button {
    padding: 12px 25px;
    border: none;
    border-radius: 10px;
    background: linear-gradient(135deg, #d81b8d 0%, #a07aa1 100%);
    color: white;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    flex: 1;
    min-width: 150px;
    max-width: 200px;
}

button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0,0,0,0.2);
}

.timer-options, .photo-count-options {
    width: 100%;
    max-width: 400px;
    margin: 20px auto;
    text-align: center;
}

.timer-options h3, .photo-count-options h3 {
    color: #2c3e50;
    margin-bottom: 10px;
    font-size: 1.2rem;
}

.timer-buttons, .count-buttons {
    display: flex;
    gap: 10px;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
}

.timer-btn, .count-btn {
    flex: 1;
    min-width: 100px;
    max-width: 120px;
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.2);
    color: black;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 14px;
}

.timer-btn:hover, .count-btn:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
}

.timer-btn.selected, .count-btn.selected {
    background: #d81b8d;
    box-shadow: 0 0 15px rgba(216, 27, 141, 0.3);
    color: white;
}

.preview-section {
    flex: 1;
    border-left: 1px solid #eee;
    padding-left: 30px;
    width: 100%;
    max-width: 800px;
}

.preview-image {
    width: 150px;
    height: 100px;
    object-fit: cover;
    border-radius: 5px;
    cursor: pointer;
    transition: transform 0.2s;
}

.preview-image:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.preview-image.selected {
    border-color: #d81b8d;
    box-shadow: 0 0 15px rgba(216, 27, 141, 0.3);
}

.preview-result {
    width: 100%;
    max-width: 100%;
    margin: 10px auto;
    text-align: center;
    background: rgba(255, 255, 255, 0.9);
    padding: 5px;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.preview-result img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    object-fit: contain;
}

.preview-result.empty {
    color: #666;
    font-style: italic;
}

.preview-section h2 {
    color: #2c3e50;
    margin: 25px 0 15px;
    font-size: 1.4rem;
    position: relative;
    padding-left: 15px;
}

.preview-section h2::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 5px;
    height: 20px;
    background: linear-gradient(135deg, #d81b8d 0%, #a07aa1 100%);
    border-radius: 3px;
}

.frame-options {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 20px;
    margin: 15px 0;
    padding: 10px;
}

.frame-options img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 15px;
    cursor: pointer;
    border: 3px solid transparent;
    transition: all 0.3s ease;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.frame-options img:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0,0,0,0.2);
}

.frame-options img.selected {
    border-color: #d81b8d;
    box-shadow: 0 0 15px rgba(216, 27, 141, 0.3);
}

.camera-container {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
}

#video {
    width: 640px;
    height: 480px;
    background: #000;
}

.controls {
    margin: 20px 0;
    display: flex;
    gap: 10px;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    background-color: #d81b8d;
    color: white;
    border: none;
    border-radius: 4px;
}

button:hover {
    background-color: #a07aa1;
}

#preview-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 10px;
}

.captured-photo {
    width: 200px;
    height: 150px;
    object-fit: cover;
    border: 2px solid #ddd;
    border-radius: 4px;
    transition: transform 0.2s;
}

.captured-photo:hover {
    transform: scale(1.05);
}

.layout-options {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: 15px 0;
    justify-content: center;
}

.layout-btn {
    flex: 1;
    min-width: 120px;
    max-width: 200px;
    padding: 10px;
    border: none;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.2);
    color: black;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 14px;
}

.layout-btn:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
}

.layout-btn.selected {
    background: #d81b8d;
    box-shadow: 0 0 15px rgba(216, 27, 141, 0.3);
    color: white;
}

.frame-sections {
    margin: 20px 0;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.frame-section {
    display: none;
    animation: fadeIn 0.3s ease;
}

.frame-section.active {
    display: block;
}

.frame-section h3 {
    color: #fff;
    margin-bottom: 15px;
    font-size: 18px;
    text-align: center;
    padding: 10px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.frame-options {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 15px;
    padding: 15px;
}

.frame-options img {
    width: 100%;
    height: 120px;
    object-fit: contain;
    cursor: pointer;
    border: 2px solid transparent;
    border-radius: 8px;
    transition: all 0.3s ease;
    background: rgba(255, 255, 255, 0.1);
    padding: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.frame-options img:hover {
    transform: translateY(-5px);
    border-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}

.frame-options img.selected {
    border-color: #d81b8d;
    box-shadow: 0 0 20px rgba(216, 27, 141, 0.4);
    transform: scale(1.05);
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.logo-container {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100px;
    height: 100px;
    padding: 10px;
    margin-left: -10px;
}

.logo {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

@media (max-width: 768px) {
    body {
        padding: 5px;
    }
    
    .main-container {
        flex-direction: column;
        padding: 10px;
        gap: 15px;
    }
    
    .camera-section {
        width: 100%;
        order: 1;
    }
    
    video {
        width: 100%;
        height: auto;
        aspect-ratio: 4/3;
        max-height: 60vh;
    }
    
    .preview-section {
        border-left: none;
        padding-left: 0;
        width: 100%;
        order: 2;
    }
    
    .buttons {
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
    
    button {
        width: 100%;
        max-width: none;
        padding: 12px;
        font-size: 1rem;
    }
    
    .frame-options {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
        gap: 8px;
    }
    
    .preview-image {
        width: 100%;
        height: auto;
        aspect-ratio: 4/3;
        object-fit: cover;
    }

    .preview-result {
        margin: 15px 0;
    }

    .preview-result img {
        max-width: 100%;
        height: auto;
        object-fit: contain;
    }

    .layout-options {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
    }

    .layout-btn {
        padding: 10px;
        font-size: 0.9rem;
    }
}

@media (min-width: 769px) and (max-width: 1024px) {
    .main-container {
        max-width: 90%;
    }

    video {
        max-width: 800px;
    }

    .frame-options {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
}

@media (max-width: 480px) {
    .main-container {
        padding: 5px;
    }
    
    .frame-options {
        grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
        gap: 5px;
    }
    
    .preview-image {
        aspect-ratio: 3/4;
    }
    
    button {
        padding: 10px;
        font-size: 0.9rem;
    }

    .timer-options, .photo-count-options {
        width: 100%;
    }

    .timer-buttons, .count-buttons {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 5px;
    }

    .timer-btn, .count-btn {
        padding: 8px;
        font-size: 0.8rem;
    }
}

#stop-capture {
    background: #ff4444;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: all 0.3s ease;
    margin-top: 10px;
}

#stop-capture:hover {
    background: #ff0000;
    transform: scale(1.05);
}

@media (max-width: 768px) {
    #stop-capture {
        font-size: 14px;
        padding: 8px 16px;
    }
}

#support-btn {
    background: linear-gradient(135deg, #ff6b6b 0%, #ff8e8e 100%);
    color: white;
    border: none;
    padding: 12px 25px;
    border-radius: 10px;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    flex: 1;
    min-width: 150px;
    max-width: 200px;
}

#support-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0,0,0,0.2);
    background: linear-gradient(135deg, #ff5252 0%, #ff7676 100%);
}

/* Mobile styles */
@media (max-width: 768px) {
    #support-btn {
        width: 100%;
        max-width: none;
    }
}
  
