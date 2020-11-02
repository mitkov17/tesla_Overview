var d = document;
 
        var model;
        var year;
        var cost;
        var reserve;
        var speed;
        var myForm;
        var button_delete;
        var button_edit;
        var button_save_edit
 
        function addRow ()
        {
            //Нашёл значения с формы
            model = d.getElementById('model').value;
            year = d.getElementById('year').value;
            cost = d.getElementById('cost').value;
            reserve = d.getElementById('reserve').value;
            speed = d.getElementById('speed').value;
            myForm = d.getElementById('form1');
            button_delete = d.createTextNode("<button class='btn btn-danger'  onclick='deleteRow(this)'>Удалить</button>").nodeValue;
            button_edit = d.createTextNode("<button class='btn btn-info' onclick='editRow(this)'>Редактировать</button> ").nodeValue;
            button_save_edit = d.createTextNode("<button class='btn btn-success' onclick='saveEditRow(this)'>Сохранить</button> ").nodeValue;
            
 
            //Нашёл нужную таблицу
            var tbody = d.getElementById('table').getElementsByTagName('TBODY')[0];
 
            //Создаю строку таблицы и добавляем ее
            var row = d.createElement("TR");
            tbody.appendChild(row);
 
            // Создаю ячейки в вышесозданной строке
            // и добавляю их
            var td1 = d.createElement("TD");
            var td2 = d.createElement("TD");
            var td3 = d.createElement("TD");
            var td4 = d.createElement("TD");
            var td5 = d.createElement("TD");
            var td6 = d.createElement("TD");
            var td7 = d.createElement("TD");
            var td8 = d.createElement("TD");
 
            row.appendChild(td1);
            row.appendChild(td2);
            row.appendChild(td3);
            row.appendChild(td4);
            row.appendChild(td5);
            row.appendChild(td6);
            row.appendChild(td7);
            row.appendChild(td8);
 
            // Наполняю ячейки
            td1.innerHTML = model;
            td2.innerHTML = year;
            td3.innerHTML = cost;
            td4.innerHTML = reserve;
            td5.innerHTML = speed
            td6.innerHTML = button_delete;
            td7.innerHTML = button_edit;
            td8.innerHTML = button_save_edit;
            
            //Сброс формы
            d.getElementById('form').reset();
        }
            
        //Удаление строки
        function deleteRow(r) {
            var i = r.parentNode.parentNode.rowIndex;
             d.getElementById("table").deleteRow(i);
        }
 
        function editRow(id) {
            table = d.getElementById('table'); //таблица найдена
            var i = id.parentNode.parentNode.rowIndex; //индекс строки взят
            var tr = d.getElementById('table').getElementsByTagName('TR')[i]; //ну и собственно, сама строка
            tr.style.backgroundColor = 'gray'; 
 
            d.getElementById('model').value = tr.childNodes[0].textContent;
            d.getElementById('year').value = tr.childNodes[1].textContent;
            d.getElementById('cost').value = tr.childNodes[2].textContent;
            d.getElementById('reserve').value = tr.childNodes[3].textContent;
            d.getElementById('speed').value = tr.childNodes[4].textContent;
        }
        
        function saveEditRow(id) {
            var model = d.getElementById('model').value;
            var year = d.getElementById('year').value;
            var cost = d.getElementById('cost').value;
            var reserve = d.getElementById('reserve').value;
            var speed = d.getElementById('speed').value;
 
             
            var tr =  id.parentNode.parentNode;
 
            tr.childNodes[0].textContent = model;
            tr.childNodes[1].textContent = year;
            tr.childNodes[2].textContent = cost;
            tr.childNodes[3].textContent = reserve;
            tr.childNodes[4].textContent = speed;
            
            console.log(tr);
 
            tr.style.backgroundColor = 'white';
 
            d.getElementById('form').reset();
 
        }
 
        document.addEventListener('DOMContentLoaded', () => {
 
    var getSort = ({ target }) => {
        var order = (target.dataset.order = -(target.dataset.order || -1));
        var index = [...target.parentNode.cells].indexOf(target);
        var collator = new Intl.Collator(['en', 'ru'], { numeric: true });
        var comparator = (index, order) => (a, b) => order * collator.compare(
            a.children[index].innerHTML,
            b.children[index].innerHTML
        );
        
        for(var tBody of target.closest('table').tBodies)
            tBody.append(...[...tBody.rows].sort(comparator(index, order)));
 
        for(var cell of target.parentNode.cells)
            cell.classList.toggle('sorted', cell === target);
    };
    
    document.querySelectorAll('.table_sort thead .sort').forEach(tableTH => tableTH.addEventListener('click', () => getSort(event)));
    
});