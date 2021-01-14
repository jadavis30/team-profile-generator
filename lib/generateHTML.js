function generateHTML(employees) {  
    //createHTML creates html for team data
   let html = '<html>';

   html  += `<head><link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"><meta name="viewport" content="width=device-width, initial-scale=1.0"/></head>`;

   html += '<body>';

   html += `<header class="container"><h1 class="center orange accent-2 white-text">My Team</h1></header>`;

   html += '<div id="dynamic" class="container"><div class="row">'
   employees.forEach(employee => {
       var specificRoleContent;
       var icon; 
       switch(employee.role) {
           case "Manager":
               specificRoleContent = `<a href="#">${employee.office}</a>`
               icon = `<i class="material-icons">supervisor_account</i>Manager`
               break;
           case "Intern":
               specificRoleContent = `<a href="#">${employee.school}</a>`
               icon = `<i class="material-icons">school</i>Intern`
               break;
           case "Engineer":
               specificRoleContent = `<a href="https://github.com/${employee.github}">Engineer's GitHub</a>`
               icon = `<i class="material-icons">build</i>Engineer`
               break;
       }

       html += `
        <div class="card blue-grey darken-1 col s12">
            <div class="card-content white-text center">
                <span class="card-title center">${employee.name}</span>
                <span>${icon}</span>
            </div>
            <div class="card-action grey lighten-2 center">
                <a href="#">${employee.id}</a>
                <a href="mailto: ${employee.email}">Send E-mail</a>
                ${specificRoleContent}
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