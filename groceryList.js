const form = document.getElementById("groceryForm");
const input = document.getElementById("inputGrocery");
const list = document.getElementById("groceryList");
const clearBtn = document.getElementById("clearListBtn");

window.addEventListener("load", () => {
    const savedItems = JSON.parse(localStorage.getItem("groceryList")) || [];
    savedItems.forEach(item => addListItem(item.text, item.checked));
});

form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    let itemText = input.value.trim();
    if (itemText !== "") {
        itemText = itemText.charAt(0).toUpperCase() + itemText.slice(1).toLowerCase();
        addListItem(itemText, false);
        saveList();
        input.value = "";
    }
});

function addListItem(text, checked) {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = checked;

    if (checked) {
        li.style.textDecoration = "line-through";
        li.style.opacity = "0.6";
    }

    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            li.style.textDecoration = "line-through";
            li.style.opacity = "0.6";
        } else {
            li.style.textDecoration = "none";
            li.style.opacity = "1";
        }
        saveList();
    });

    const span = document.createElement("span");
    span.textContent = " " + text;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✖";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.style.cursor = "pointer";
    deleteBtn.style.border = "none";
    deleteBtn.style.background = "transparent";
    deleteBtn.style.fontSize = "18px";

    deleteBtn.addEventListener("click", () => {
        li.remove();
        saveList();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    list.appendChild(li);
}

function saveList() {
    const items = [];
    list.querySelectorAll("li").forEach(li => {
        const checkbox = li.querySelector("input[type='checkbox']");
        const text = li.querySelector("span").textContent.trim();
        items.push({ text: text, checked: checkbox.checked });
    });
    localStorage.setItem("groceryList", JSON.stringify(items));
}

clearBtn.addEventListener("click", () => {
    const confirmClear = confirm("Are you sure you want to clear the entire list?");
    if (confirmClear) {
        list.innerHTML = "";
        localStorage.removeItem("groceryList");
    }
});