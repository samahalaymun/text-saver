
const textArea=document.querySelector("textarea");
const fileNameInput=document.querySelector(".file-name input");
const saveAsSelect=document.querySelector(".save-as select");
const saveBtn=document.querySelector(".save-btn");
saveAsSelect.addEventListener("change",()=>{
    let selectedOption=saveAsSelect.options[saveAsSelect.selectedIndex].text;
    saveBtn.innerText=`Save As ${selectedOption.split(" ")[0]} File`
})

saveBtn.addEventListener("click",()=>{
        const blob=new Blob([textArea.value],{type: saveAsSelect.value})
        const fileURL=URL.createObjectURL(blob)
        const link=document.createElement("a");
        link.download=fileNameInput.value;
        link.href=fileURL;
        link.click()
          
})

