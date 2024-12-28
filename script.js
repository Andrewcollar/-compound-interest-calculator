document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculate');
    const resultDiv = document.getElementById('result');
    
    calculateBtn.addEventListener('click', function() {
        // 获取输入值
        const principal = parseFloat(document.getElementById('principal').value);
        const rate = parseFloat(document.getElementById('rate').value) / 100;
        const time = parseFloat(document.getElementById('time').value);
        const compounds = parseInt(document.getElementById('compounds').value);
        
        // 验证输入
        if (!principal || !rate || !time) {
            alert('请填写完整信息！');
            return;
        }
        
        // 计算结果
        const finalAmount = principal * Math.pow((1 + rate/compounds), (compounds * time));
        const interest = finalAmount - principal;
        const profitRate = (interest / principal) * 100;
        
        // 显示结果
        document.getElementById('finalAmount').textContent = 
            '¥' + finalAmount.toLocaleString('zh-CN', {minimumFractionDigits: 2, maximumFractionDigits: 2});
        document.getElementById('interest').textContent = 
            '¥' + interest.toLocaleString('zh-CN', {minimumFractionDigits: 2, maximumFractionDigits: 2});
        document.getElementById('profitRate').textContent = 
            profitRate.toFixed(2) + '%';
        
        // 显示结果区域
        resultDiv.classList.remove('hidden');
    });
}); 