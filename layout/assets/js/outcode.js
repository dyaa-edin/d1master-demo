// script.js
document.addEventListener('DOMContentLoaded', () => {
    const justifyContentSelect = document.getElementById('justify-content');
    const alignItemsSelect = document.getElementById('align-items');
    const flexDirectionSelect = document.getElementById('flex-direction');
    const flexWrapSelect = document.getElementById('flex-wrap');
    const alignContentSelect = document.getElementById('align-content');
    const gapSlider = document.getElementById('gap');

    const justifyContentOutput = document.getElementById('output-justify-content');
    const alignItemsOutput = document.getElementById('output-align-items');
    const flexDirectionOutput = document.getElementById('output-flex-direction');
    const flexWrapOutput = document.getElementById('output-flex-wrap');
    const alignContentOutput = document.getElementById('output-align-content');
    const gapOutput = document.getElementById('output-gap');

    const codeJustifyContent = document.getElementById('code-justify-content');
    const codeAlignItems = document.getElementById('code-align-items');
    const codeFlexDirection = document.getElementById('code-flex-direction');
    const codeFlexWrap = document.getElementById('code-flex-wrap');
    const codeAlignContent = document.getElementById('code-align-content');
    const codeGap = document.getElementById('code-gap');

    // Function to update code output
    const updateCodeOutput = (element, property, value) => {
        element.innerHTML = `<span class="selector">.flex-container </span>{\n    <span class="property">display</span>: <span class="value">flex</span>;\n    <span class="property">${property}</span>: <span class="value">${value}</span>;\n}`;
    };

    // Event listeners for select elements
    justifyContentSelect.addEventListener('change', (event) => {
        const value = event.target.value;
        justifyContentOutput.style.justifyContent = value;
        updateCodeOutput(codeJustifyContent, 'justify-content', value);
    });

    alignItemsSelect.addEventListener('change', (event) => {
        const value = event.target.value;
        alignItemsOutput.style.alignItems = value;
        updateCodeOutput(codeAlignItems, 'align-items', value);
    });

    flexDirectionSelect.addEventListener('change', (event) => {
        const value = event.target.value;
        flexDirectionOutput.style.flexDirection = value;
        updateCodeOutput(codeFlexDirection, 'flex-direction', value);
    });

    flexWrapSelect.addEventListener('change', (event) => {
        const value = event.target.value;
        flexWrapOutput.style.flexWrap = value;
        updateCodeOutput(codeFlexWrap, 'flex-wrap', value);
    });

    alignContentSelect.addEventListener('change', (event) => {
        const value = event.target.value;
        alignContentOutput.style.alignContent = value;
        updateCodeOutput(codeAlignContent, 'align-content', value);
    });

    gapSlider.addEventListener('input', (event) => {
        const value = `${event.target.value}px`;
        gapOutput.style.gap = value;
        updateCodeOutput(codeGap, 'gap', value);
    });
});

// Event listener for align-self
const alignSelfSelect = document.getElementById('align-self');
const alignSelfOutput = document.getElementById('output-align-self');
const codeAlignSelf = document.getElementById('code-align-self');

alignSelfSelect.addEventListener('change', (event) => {
    const value = event.target.value;
    const boxes = alignSelfOutput.querySelectorAll('.box');
    
    // تغيير align-self فقط للعنصر الأول
    boxes.forEach((box, index) => {
        if (index === 1) {  // قم بتعديل العنصر المراد تغييره
            box.style.alignSelf = value;
        }
    });
    
    // تحديث الكود المعروض في <pre>
    updateCodeOutput(codeAlignSelf, 'align-self', value);
});

// Update code output function
function updateCodeOutput(element, property, value) {
    element.innerHTML = `<span class="selector">.box:nth-child(2) </span>{\n    <span class="property">${property}</span>: <span class="value">${value}</span>;\n}`;
}



function copyToClipboard(elementId) {
    var copyText = document.getElementById(elementId).textContent;
    navigator.clipboard.writeText(copyText).then(function() {
        alert("تم نسخ النص بنجاح!");
    }, function() {
        alert("حدث خطأ أثناء النسخ!");
    });
}

// remove select
    function changeColor(selectElement) {
        selectElement.style.color = '#000'; // تغيير لون النص عند اختيار خيار
    }

    function hideDefaultOption() {
        var selectElement = document.getElementById("justify-content");
        selectElement[0].style.display = 'none'; // إخفاء الخيار الافتراضي
    }[]