function generateHTML(employees) {  
    //createHTML creates html for team data
   let html = '<html>';

   html  += `<head><link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"><meta name="viewport" content="width=device-width, initial-scale=1.0"/></head>`;

   html += '<body>';

   html += `<header class="container"><h1>My Team</h1></header>`;

   html += '<div id="dynamic" class="container">'
   employees.forEach(employee => {
       var extraUrl;
       var icon; 
       switch(employee.role) {
           case "Manager":
               extraUrl = `<a href="#">${employee.office}</a>`
               icon = `<i class="material-icons">business_center</i>Manager`
               break;
           case "Intern":
               extraUrl = `<a href="#">${employee.school}</a>`
               icon = `<span<i class="material-icons">school</i>Intern`
               break;
           case "Engineer":
               extraUrl = `<a href="#">${employee.github}</a>`
               icon = `<i class="material-icons">build</i>Engineer`
               break;
       }

       html += `<div class="card blue-grey darken-1">
           <div class="card-content white-text">
               <span class="card-title">${employee.name}</span>
               <span>${icon}</span>
           </div>
           <div class="card-action">
               <a href="#">${employee.id}</a>
               <a href="#">${employee.email}</a>
               ${extraUrl}
           </div>
       </div>`
   });

   html += '</div>'

   html += `<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>`;

   html += '</body>';
   html += '<html>';

   return html;
}
  module.exports = generateHTML;